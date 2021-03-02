---
title: Apollo
---

# 配置推拉

## 拉配置

configservice服务端提供http api，核心方法：`com.ctrip.framework.apollo.configservice.controller.NotificationControllerV2#pollNotification`。

客户端向这个api发送一个请求时，服务端会查是否有更新，如果有更新会通知客户端去拉最新配置。
如果没有更新，这个http请求默认会等待60秒，在等待的过程中，如果配置有更新，会直接返回，通知客户端拉配置。如果超时，返回304 not modififed.

除了使用async方式来poll，还有几个小的细节优化，都是为了让配置服务端应对大量客户端的请求
1. 客户端会缓存服务端发送的消息id，并且在poll时传给服务端，服务端用这些id来可以减少重复消息（间接减少了拉配置的请求）
2. 配置更新持久化在db中，一个独立的线程去每隔1s读db，并且放到一个concurrentmap中，相当于一个缓存，这样保证秒级精度前提下大大减少对db的压力

一个细节没太看明白：
```
    /**
     * Manually close the entity manager.
     * Since for async request, Spring won't do so until the request is finished,
     * which is unacceptable since we are doing long polling - means the db connection would be hold
     * for a very long time
     */
    entityManagerUtil.closeEntityManager();
```


## 配置推送
`com.ctrip.framework.apollo.configservice.controller.NotificationControllerV2#handleMessage`


# 其他

## ApplicationEventPublisher

spring内置的一个单个jvm的eventbus，默认listener处理是同步的，也可以绑定线程池异步处理。

## DeferredResult
timeout

DeferredResult机制：


