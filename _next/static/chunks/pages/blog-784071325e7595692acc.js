_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/yi9":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return x})),n.d(t,"default",(function(){return N}));var c=n("nKUr"),r=(n("g4pe"),n("YFqc"),n("WYlG")),a=n("wx14"),l=n("iuhU"),o=(n("17x9"),n("q1tI")),i=n.n(o),d=n("ZeOK"),s=n("ICNK"),u=n("Y53p"),f=n("MZgk");function b(e){var t=e.children,n=e.className,c=e.computer,r=e.color,o=e.floated,f=e.largeScreen,j=e.mobile,p=e.only,v=e.stretched,h=e.tablet,O=e.textAlign,m=e.verticalAlign,g=e.widescreen,w=e.width,y=Object(l.a)(r,Object(d.a)(v,"stretched"),Object(d.c)(p,"only"),Object(d.d)(O),Object(d.e)(o,"floated"),Object(d.f)(m),Object(d.g)(c,"wide computer"),Object(d.g)(f,"wide large screen"),Object(d.g)(j,"wide mobile"),Object(d.g)(h,"wide tablet"),Object(d.g)(g,"wide widescreen"),Object(d.g)(w,"wide"),"column",n),x=Object(s.a)(b,e),N=Object(u.a)(b,e);return i.a.createElement(N,Object(a.a)({},x,{className:y}),t)}b.handledProps=["as","children","className","color","computer","floated","largeScreen","mobile","only","stretched","tablet","textAlign","verticalAlign","widescreen","width"],b.propTypes={},b.create=Object(f.a)(b,(function(e){return{children:e}}));var j=b;function p(e){var t=e.centered,n=e.children,c=e.className,r=e.color,o=e.columns,f=e.divided,b=e.only,j=e.reversed,v=e.stretched,h=e.textAlign,O=e.verticalAlign,m=Object(l.a)(r,Object(d.a)(t,"centered"),Object(d.a)(f,"divided"),Object(d.a)(v,"stretched"),Object(d.c)(b,"only"),Object(d.c)(j,"reversed"),Object(d.d)(h),Object(d.f)(O),Object(d.g)(o,"column",!0),"row",c),g=Object(s.a)(p,e),w=Object(u.a)(p,e);return i.a.createElement(w,Object(a.a)({},g,{className:m}),n)}p.handledProps=["as","centered","children","className","color","columns","divided","only","reversed","stretched","textAlign","verticalAlign"],p.propTypes={};var v=p;function h(e){var t=e.celled,n=e.centered,c=e.children,r=e.className,o=e.columns,f=e.container,b=e.divided,j=e.doubling,p=e.inverted,v=e.padded,O=e.relaxed,m=e.reversed,g=e.stackable,w=e.stretched,y=e.textAlign,x=e.verticalAlign,N=Object(l.a)("ui",Object(d.a)(n,"centered"),Object(d.a)(f,"container"),Object(d.a)(j,"doubling"),Object(d.a)(p,"inverted"),Object(d.a)(g,"stackable"),Object(d.a)(w,"stretched"),Object(d.b)(t,"celled"),Object(d.b)(b,"divided"),Object(d.b)(v,"padded"),Object(d.b)(O,"relaxed"),Object(d.c)(m,"reversed"),Object(d.d)(y),Object(d.f)(x),Object(d.g)(o,"column",!0),"grid",r),_=Object(s.a)(h,e),E=Object(u.a)(h,e);return i.a.createElement(E,Object(a.a)({},_,{className:N}),c)}h.handledProps=["as","celled","centered","children","className","columns","container","divided","doubling","inverted","padded","relaxed","reversed","stackable","stretched","textAlign","verticalAlign"],h.Column=j,h.Row=v,h.propTypes={};var O=h,m=n("MqQV"),g=n("dyod"),w=(n("xMo/"),n("vRNQ")),y=n.n(w),x=!0;function N(e){var t=e.posts;return Object(c.jsxs)("div",{className:y.a.container,children:[Object(c.jsxs)("main",{className:y.a.main,children:[Object(c.jsx)("h1",{children:"Blogs"}),Object(c.jsx)(r.a,{children:t.map((function(e){return Object(c.jsx)(r.a.Item,{children:Object(c.jsxs)(O,{padded:!0,children:[Object(c.jsx)(O.Column,{width:12,children:Object(c.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"/blog/".concat(e.link),children:Object(c.jsx)("h2",{children:e.title})})}),Object(c.jsx)(O.Column,{width:4,children:e.createTime.split(" ")[0]}),Object(c.jsx)(O.Column,{width:16,children:Object(c.jsx)(m.a.Group,{children:e.tags.map((function(e){return Object(c.jsx)(m.a,{as:"a",children:e},e)}))})})]})},e.id)}))})]}),Object(c.jsx)(g.default,{})]})}},JUhy:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n("/yi9")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var c=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var a=r(n("q1tI")),l=n("elyg"),o=n("nOHt"),i=n("vNVm"),d={};function s(e,t,n,c){if(e&&(0,l.isLocalURL)(t)){e.prefetch(t,n,c).catch((function(e){0}));var r=c&&"undefined"!==typeof c.locale?c.locale:e&&e.locale;d[t+"%"+n+(r?"%"+r:"")]=!0}}var u=function(e){var t=!1!==e.prefetch,n=(0,o.useRouter)(),r=n&&n.pathname||"/",u=a.default.useMemo((function(){var t=(0,l.resolveHref)(r,e.href,!0),n=c(t,2),a=n[0],o=n[1];return{href:a,as:e.as?(0,l.resolveHref)(r,e.as):o||a}}),[r,e.href,e.as]),f=u.href,b=u.as,j=e.children,p=e.replace,v=e.shallow,h=e.scroll,O=e.locale;"string"===typeof j&&(j=a.default.createElement("a",null,j));var m=a.Children.only(j),g=m&&"object"===typeof m&&m.ref,w=(0,i.useIntersection)({rootMargin:"200px"}),y=c(w,2),x=y[0],N=y[1],_=a.default.useCallback((function(e){x(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,x]);(0,a.useEffect)((function(){var e=N&&t&&(0,l.isLocalURL)(f),c="undefined"!==typeof O?O:n&&n.locale,r=d[f+"%"+b+(c?"%"+c:"")];e&&!r&&s(n,f,b,{locale:c})}),[b,f,N,O,t,n]);var E={ref:_,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,t,n,c,r,a,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=c.indexOf("#")<0),t[r?"replace":"push"](n,c,{shallow:a,locale:i,scroll:o}).then((function(e){e&&o&&document.body.focus()})))}(e,n,f,b,p,v,h,O)},onMouseEnter:function(e){(0,l.isLocalURL)(f)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),s(n,f,b,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var k="undefined"!==typeof O?O:n&&n.locale,M=n&&n.isLocaleDomain&&(0,l.getDomainLocale)(b,k,n&&n.locales,n&&n.domainLocales);E.href=M||(0,l.addBasePath)((0,l.addLocale)(b,k,n&&n.defaultLocale))}return a.default.cloneElement(m,E)};t.default=u},vNVm:function(e,t,n){"use strict";var c=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!l,i=(0,r.useRef)(),d=(0,r.useState)(!1),s=c(d,2),u=s[0],f=s[1],b=(0,r.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),n||u||e&&e.tagName&&(i.current=function(e,t,n){var c=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var c=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=c.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:r,elements:c}),n}(n),r=c.id,a=c.observer,l=c.elements;return l.set(e,t),a.observe(e),function(){l.delete(e),a.unobserve(e),0===l.size&&(a.disconnect(),o.delete(r))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return(0,r.useEffect)((function(){if(!l&&!u){var e=(0,a.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[u]),[b,u]};var r=n("q1tI"),a=n("0G5g"),l="undefined"!==typeof IntersectionObserver;var o=new Map}},[["JUhy",0,1,3,2,4]]]);