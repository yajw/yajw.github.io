---
title: Gitment定制
date: 2019-09-11 22:35:39
tags: [gitment, hexo]
comments: true
categories: hexo
---

## 评论倒序
github issue获取comments的api不支持倒序，替换下原有获取comments的逻辑即可。
具体是这个函数：`Gitment.loadComments`，改写代码如下：

```js
{
    key: 'loadComments',
    value: function loadComments() {
      var _this8 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.currentPage;
      var reverse = true
      return this.getIssue().then(function (issue) {
        if (!reverse) {
            return _utils.http.get(issue.comments_url, { page: page, per_page: _this8.perPage }, '');
        } else {
            console.log('reversed')
            var comments = []
            var perPage = _this8.perPage
            var totalCommentsCount = issue.comments
            var start = totalCommentsCount - (page * perPage) + 1
            var startPage = Math.ceil(start / perPage)
            var comments_url = issue.comments_url
            return _utils.http.get(comments_url, { 
                page: startPage, 
                per_page: perPage 
            }, '').then(function(startPageComments) {
                for (var i = ((start-1)%perPage); i < startPageComments.length; i++) {
                    comments.push(startPageComments[i])
                }
                if (comments.length < perPage) {
                    return _utils.http.get(comments_url, { 
                        page: startPage+1, 
                        per_page: perPage 
                    }, '').then(function(nextPageComments) {
                        for (var i = 0; i < nextPageComments.length; i++) {
                            if (comments.length >= perPage) {
                                break
                            }
                            comments.push(nextPageComments[i])
                        }
                        return comments.reverse()
                    });
                } else {
                    return comments.reverse()
                }
            });
        }
      }).then(function (comments) {
        _this8.state.comments = comments;
        return comments;
      });
    }
},
```
