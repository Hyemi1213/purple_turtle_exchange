(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{375:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(1),c=r.n(a),i=r(18),u=r.n(i),l=r(51),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},m=function(e){function t(){var r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),c=0;c<o;c++)a[c]=arguments[c];return r=n=f(this,e.call.apply(e,[this].concat(a))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!p(e)){e.preventDefault();var t=n.context.router.history,r=n.props,o=r.replace,a=r.to;o?t.replace(a):t.push(a)}},f(n,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),r=e.innerRef,n=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["replace","to","innerRef"]);u()(this.context.router,"You should not use <Link> outside a <Router>"),u()(void 0!==t,'You must specify the "to" property');var a=this.context.router.history,c="string"==typeof t?Object(l.b)(t,null,null,a.location):t,i=a.createHref(c);return o.a.createElement("a",s({},n,{onClick:this.handleClick,href:i,ref:r}))},t}(o.a.Component);m.propTypes={onClick:c.a.func,target:c.a.string,replace:c.a.bool,to:c.a.oneOfType([c.a.string,c.a.object]).isRequired,innerRef:c.a.oneOfType([c.a.string,c.a.func])},m.defaultProps={replace:!1},m.contextTypes={router:c.a.shape({history:c.a.shape({push:c.a.func.isRequired,replace:c.a.func.isRequired,createHref:c.a.func.isRequired}).isRequired}).isRequired},t.a=m},376:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},377:function(e,t,r){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,c=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,s=l&&l(Object);e.exports=function e(t,r,f){if("string"!=typeof r){if(s){var p=l(r);p&&p!==s&&e(t,p,f)}var m=c(r);i&&(m=m.concat(i(r)));for(var y=0;y<m.length;++y){var b=m[y];if(!(n[b]||o[b]||f&&f[b])){var d=u(r,b);try{a(t,b,d)}catch(e){}}}return t}return t}},379:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(385),c=r.n(a),i=r(22);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=r.n(i).a.bind(c.a),f=function(e){var t=e.lists,r=e.currentMenu,n=e.clickedMenu,a=e.classMenuName,c=e.className,i=l(e,["lists","currentMenu","clickedMenu","classMenuName","className"]);return o.a.createElement("div",u({className:s("wrapper",c)},i),t.map(function(e,t){return o.a.createElement("p",{style:{backgroundColor:r==e.value&&e.colour},className:s("menu",r==e.value&&"active",a),key:t,onClick:function(){return n(e.value)}},e.name)}))},p=f;f.defaultProps={lists:[]},r.d(t,"a",function(){return p})},380:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(50),c=r(415),i=r(392),u=r.n(i),l=r(22),s=r.n(l),f=r(383),p=r(368),m=r(393),y=r.n(m),b=r(375),d=r(401),_=r(402),h=r(403);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=j(e);if(t){var o=j(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,r)}}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var w=s.a.bind(y.a),E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(i,n["Component"]);var t,r,a,c=P(i);function i(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),c.apply(this,arguments)}return t=i,(r=[{key:"render",value:function(){return o.a.createElement("footer",{className:w("wrapper")},o.a.createElement("div",{className:w("menu-box","g-pc-only")},p.b.map(function(e,t){return o.a.createElement(b.a,{className:w("link"),key:t,to:e.location},e.title)})),o.a.createElement(d.a,null,o.a.createElement("div",{className:w("menu-box","g-mobile-only")},p.b.map(function(e,t){return o.a.createElement(b.a,{className:w("link"),key:t,to:e.location},e.title)})),o.a.createElement(_.a,{className:w("middle-box")},o.a.createElement(h.a,{xs:"12",md:"11",className:w("m-pl-pr-none")},o.a.createElement("p",{className:w("extra")},"퍼플터틀주식회사  |  대표 홍길동  |  서울시 서울구 서울대로12(서울빌딩), 345호"),o.a.createElement("p",{className:w("extra")},"사업자 등록번호 123-45-67890  |  통신판매업 신고 번호 제 1234-서울서울-1234 호")))),o.a.createElement("div",{className:w("copyright")},o.a.createElement("small",null,"Copyright © 2019 yourcompanyname. All rights reserved")))}}])&&g(t.prototype,r),a&&g(t,a),i}();function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=M(e);if(t){var o=M(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;return C(e)}(this,r)}}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var R=s.a.bind(u.a),L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(i,n["Component"]);var t,r,a,c=k(i);function i(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return H(C(e=c.call.apply(c,[this].concat(r))),"state",{pageMarginTop:0}),H(C(e),"getMarginTopForHeader",function(){var t=document.getElementsByClassName("pure-main-header")[0],r=document.getElementsByClassName("pure-appeared-menu")[0];t=void 0!==t&&t.clientHeight,(r=void 0!==r&&r.clientHeight)<=8&&r&&(r=25),e.setState({pageMarginTop:t+r}),e.props.dispatch({type:"SAVE_MAIN_MARGINTOP",mainMarinTop:t+r})}),e}return t=i,(r=[{key:"componentDidMount",value:function(){this.getMarginTopForHeader()}},{key:"render",value:function(){var e=this.state.pageMarginTop,t=this.props,r=t.children,n=t.className,a=t.backgroundColor,c=t.isNoPaddingBottom,i=N(t,["children","className","backgroundColor","isNoPaddingBottom"]);return o.a.createElement("div",{className:R("page",n)},o.a.createElement(f.a,i),o.a.createElement("main",{className:R("main"),style:{marginTop:e,backgroundColor:a,paddingBottom:c&&0}},r),o.a.createElement(E,null))}}])&&S(t.prototype,r),a&&S(t,a),i}(),F=Object(a.b)()(Object(c.a)(L));r.d(t,"a",function(){return F})},385:function(e,t,r){e.exports={wrapper:"MovingTabs__wrapper__2Rnox",menu:"MovingTabs__menu__195ik",active:"MovingTabs__active__3EUG4",fadeIn:"MovingTabs__fadeIn__xYLth",fadeOut:"MovingTabs__fadeOut__33Csi"}},392:function(e,t,r){e.exports={page:"PageTemplate__page__1gkC_",main:"PageTemplate__main__n0GDA",fadeIn:"PageTemplate__fadeIn__8wv8p",fadeOut:"PageTemplate__fadeOut__1ECLM"}},393:function(e,t,r){e.exports={wrapper:"Footer__wrapper__13Xgb","menu-box":"Footer__menu-box__14MUc",link:"Footer__link__36Pau","middle-box":"Footer__middle-box__366Y8",logo:"Footer__logo__2ULGb",extra:"Footer__extra__3DtUl",copyright:"Footer__copyright__24YoO",fadeIn:"Footer__fadeIn__1efB5",fadeOut:"Footer__fadeOut__3mMDq"}},400:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(1),c=r.n(a),i=r(361),u=r(375),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var f=function(e){var t=e.to,r=e.exact,n=e.strict,a=e.location,c=e.activeClassName,f=e.className,p=e.activeStyle,m=e.style,y=e.isActive,b=e["aria-current"],d=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","aria-current"]),_="object"===(void 0===t?"undefined":s(t))?t.pathname:t,h=_&&_.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1");return o.a.createElement(i.a,{path:h,exact:r,strict:n,location:a,children:function(e){var r=e.location,n=e.match,a=!!(y?y(n,r):n);return o.a.createElement(u.a,l({to:t,className:a?[f,c].filter(function(e){return e}).join(" "):f,style:a?l({},m,p):m,"aria-current":a&&b||null},d))}})};f.propTypes={to:u.a.propTypes.to,exact:c.a.bool,strict:c.a.bool,location:c.a.object,activeClassName:c.a.string,className:c.a.string,activeStyle:c.a.object,style:c.a.object,isActive:c.a.func,"aria-current":c.a.oneOf(["page","step","location","date","time","true"])},f.defaultProps={activeClassName:"active","aria-current":"page"},t.a=f},401:function(e,t,r){"use strict";var n=r(8),o=r(16),a=r(0),c=r.n(a),i=r(1),u=r.n(i),l=r(13),s=r.n(l),f=r(3),p={tag:f.l,fluid:u.a.bool,className:u.a.string,cssModule:u.a.object},m=function(e){var t=e.className,r=e.cssModule,a=e.fluid,i=e.tag,u=Object(o.a)(e,["className","cssModule","fluid","tag"]),l=Object(f.h)(s()(t,a?"container-fluid":"container"),r);return c.a.createElement(i,Object(n.a)({},u,{className:l}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},402:function(e,t,r){"use strict";var n=r(8),o=r(16),a=r(0),c=r.n(a),i=r(1),u=r.n(i),l=r(13),s=r.n(l),f=r(3),p={tag:f.l,noGutters:u.a.bool,className:u.a.string,cssModule:u.a.object,form:u.a.bool},m=function(e){var t=e.className,r=e.cssModule,a=e.noGutters,i=e.tag,u=e.form,l=Object(o.a)(e,["className","cssModule","noGutters","tag","form"]),p=Object(f.h)(s()(t,a?"no-gutters":null,u?"form-row":"row"),r);return c.a.createElement(i,Object(n.a)({},l,{className:p}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},403:function(e,t,r){"use strict";var n=r(8),o=r(16),a=r(376),c=r.n(a),i=r(0),u=r.n(i),l=r(1),s=r.n(l),f=r(13),p=r.n(f),m=r(3),y=s.a.oneOfType([s.a.number,s.a.string]),b=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),push:Object(m.e)(y,'Please use the prop "order"'),pull:Object(m.e)(y,'Please use the prop "order"'),order:y,offset:y})]),d={tag:m.l,xs:b,sm:b,md:b,lg:b,xl:b,className:s.a.string,cssModule:s.a.object,widths:s.a.array},_={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,r){return!0===r||""===r?e?"col":"col-"+t:"auto"===r?e?"col-auto":"col-"+t+"-auto":e?"col-"+r:"col-"+t+"-"+r},v=function(e){var t=e.className,r=e.cssModule,a=e.widths,i=e.tag,l=Object(o.a)(e,["className","cssModule","widths","tag"]),s=[];a.forEach(function(t,n){var o=e[t];if(delete l[t],o||""===o){var a=!n;if(c()(o)){var i,u=a?"-":"-"+t+"-",f=h(a,t,o.size);s.push(Object(m.h)(p()(((i={})[f]=o.size||""===o.size,i["order"+u+o.order]=o.order||0===o.order,i["offset"+u+o.offset]=o.offset||0===o.offset,i)),r))}else{var y=h(a,t,o);s.push(y)}}}),s.length||s.push("col");var f=Object(m.h)(p()(t,s),r);return u.a.createElement(i,Object(n.a)({},l,{className:f}))};v.propTypes=d,v.defaultProps=_,t.a=v},415:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(1),c=r.n(a),i=r(377),u=r.n(i),l=r(114),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};var f=function(e){var t=function(t){var r=t.wrappedComponentRef,n=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(t,["wrappedComponentRef"]);return o.a.createElement(l.a,{children:function(t){return o.a.createElement(e,s({},n,t,{ref:r}))}})};return t.displayName="withRouter("+(e.displayName||e.name)+")",t.WrappedComponent=e,t.propTypes={wrappedComponentRef:c.a.func},u()(t,e)};t.a=f},431:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(432),c=r.n(a),i=r(22),u=r.n(i),l=r(370);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=u.a.bind(c.a),m=function(e){var t=e.headList,r=e.children,n=e.clickToSort,a=e.headEachClassName,c=e.headBoxClassName,i=e.className,u=f(e,["headList","children","clickToSort","headEachClassName","headBoxClassName","className"]);return o.a.createElement("div",s({className:p(i)},u),o.a.createElement("div",{className:p("head-box",c)},t.map(function(e,t){return o.a.createElement("div",{className:p("head-each",a),key:t,onClick:n?function(){return n(e)}:null},e.title,n?o.a.createElement(l.c,{className:p("sort-icon"),clicked:e.isSorted}):null)})),r)};m.defaultProps={headList:[]};var y=m;r.d(t,"a",function(){return y})},432:function(e,t,r){e.exports={"head-box":"DefaultTable__head-box__2fxQR","head-each":"DefaultTable__head-each__FUwRJ","sort-icon":"DefaultTable__sort-icon__2RMNH","body-box":"DefaultTable__body-box__aM9pD","body-each":"DefaultTable__body-each__I36Ge",fadeIn:"DefaultTable__fadeIn__2lWvo",fadeOut:"DefaultTable__fadeOut__oUCCN"}},519:function(e,t,r){e.exports={page:"HomePage__page__15Gnp","title-box":"HomePage__title-box__3uF1P",first:"HomePage__first__gwDcA","main-title":"HomePage__main-title__1yFu8","semi-title":"HomePage__semi-title__1786x",second:"HomePage__second__39gFr",content:"HomePage__content__1LP0J",fadeIn:"HomePage__fadeIn__EM0H3",fadeOut:"HomePage__fadeOut__1znyN"}},520:function(e,t,r){e.exports={"head-box":"HomePageForm__head-box__3I87i","head-each":"HomePageForm__head-each__9L804","sort-icon":"HomePageForm__sort-icon__FRLGJ","body-box":"HomePageForm__body-box__18QuJ","body-each":"HomePageForm__body-each__36xiH",wrapper:"HomePageForm__wrapper__3yqyn",tabs:"HomePageForm__tabs__1n7F7","tab-menu":"HomePageForm__tab-menu__30Peu",table:"HomePageForm__table__36Lud",pair:"HomePageForm__pair__2Lj0a",plus:"HomePageForm__plus__2XcEJ",minus:"HomePageForm__minus__3d-Z0",extra:"HomePageForm__extra__3oT7o","more-btn-box":"HomePageForm__more-btn-box__1F0JA",btn:"HomePageForm__btn__1Cq3K","table-body":"HomePageForm__table-body__3qkVg","body-box-wrapper":"HomePageForm__body-box-wrapper__taPx6",fadeIn:"HomePageForm__fadeIn__3FfpS",fadeOut:"HomePageForm__fadeOut__2I71Y"}},625:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(22),c=r.n(a),i=r(519),u=r.n(i),l=r(401),s=r(402),f=r(403),p=r(380),m=r(50),y=r(415),b=r(81),d=r(375),_=r(520),h=r.n(_),v=r(379),g=r(431),O=c.a.bind(h.a),P=function(e){var t=e.quoteCurrencyLists,r=e.currentTabMenu,n=e.clickedMenu,a=e.tableHeadList,c=e.tableBodyList,i=e.clickToSort,u=e.moveToDetailPage,l=e.quoteCurrency,s=e.hasMore,f=e.clickToGetMoreLists,p=e.isMobile;return o.a.createElement("div",{className:O("wrapper")},o.a.createElement(v.a,{className:O("tabs"),classMenuName:O("tab-menu"),lists:t,currentMenu:r,clickedMenu:n}),o.a.createElement(g.a,{className:O("table"),headList:p?a.slice(0,4):a,headBoxClassName:O("head-box"),headEachClassName:O("head-each"),clickToSort:i},o.a.createElement("div",{className:O("table-body")},c.map(function(e,t){return o.a.createElement("div",{className:O("body-box-wrapper"),key:t},o.a.createElement("div",{className:O("body-box")},o.a.createElement("p",{onClick:function(){return u(e)},className:O("body-each","pair")},e.pair,"/",l),o.a.createElement("p",{onClick:function(){return u(e)},className:O("body-each")},e.price),o.a.createElement("p",{onClick:function(){return u(e)},className:O("body-each",e.volatility>0?"plus":"minus")},e.volatility>0&&"+",e.volatility,"%"),o.a.createElement("p",{onClick:function(){return u(e)},className:O("body-each","volumn")},e.volumn),o.a.createElement("p",{onClick:function(){return u(e)},className:O("body-each","g-pc-only")},e.highest),o.a.createElement("p",{onClick:function(){return u(e)},className:O("body-each","g-pc-only")},e.lowest)))}))),s&&o.a.createElement("div",{className:O("more-btn-box")},o.a.createElement(d.a,{style:{display:"block"},to:"/trade"},o.a.createElement("div",{onClick:f,className:O("btn")},"더보기 +"))))};P.defaultProps={quoteCurrencyLists:[],tableBodyList:[]};var j=P;function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach(function(t){M(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=C(e);if(t){var o=C(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;return k(e)}(this,r)}}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(i,n["Component"]);var t,r,a,c=T(i);function i(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return M(k(e=c.call.apply(c,[this].concat(r))),"state",{quoteCurrencyLists:[],currentQuoteCurrency:"krw",tableHeadList:[{title:"마켓페어",value:"pair",isSorted:!1},{title:"현재가",value:"price",isSorted:!1},{title:"변동률",value:"change",isSorted:!1},{title:"거래량",value:"volumn",isSorted:!1},{title:"최고가",value:"highest",isSorted:!1},{title:"최저가",value:"lowest",isSorted:!1}],tableBodyList:[],hasMore:!0}),M(k(e),"getTradeData",function(){e.setState({tableBodyList:[{pair:"eth",price:.0032151,volatility:2.6,volumn:3215312154,highest:321512,lowest:65132412},{pair:"btc",price:256416562.5154423,volatility:-10.55,volumn:0x16ebdaaf6c79aa00,highest:321512,lowest:65132412},{pair:"cud",price:1.1513,volatility:-5.55,volumn:621,highest:321512,lowest:65132412}]})}),M(k(e),"getQuoteCurrencyLists",function(){e.setState({quoteCurrencyLists:[{name:"krw",value:"krw"},{name:"btc",value:"btc"},{name:"eth",value:"eth"},{name:"eos",value:"eos"}]})}),M(k(e),"clickToSort",function(t){t.isSorted?e.setState(function(e){return{tableBodyList:e.tableBodyList.sort(function(e,r){return Object(b.n)(e[t.value],r[t.value])}),tableHeadList:e.tableHeadList.map(function(e,r){return e.value==t.value?x(x({},e),{},{isSorted:!e.isSorted}):e})}}):e.setState(function(e){return{tableBodyList:e.tableBodyList.sort(function(e,r){return Object(b.n)(r[t.value],e[t.value])}),tableHeadList:e.tableHeadList.map(function(e,r){return e.value==t.value?x(x({},e),{},{isSorted:!e.isSorted}):e})}})}),M(k(e),"moveToDetailPage",function(t){var r=e.state.currentQuoteCurrency;e.props.history.push("/trade/".concat(t.pair,"_").concat(r))}),M(k(e),"clickToGetMoreLists",function(){}),M(k(e),"clickedTab",function(t){e.setState({currentQuoteCurrency:t})}),e}return t=i,(r=[{key:"componentDidMount",value:function(){this.getQuoteCurrencyLists(),this.getTradeData()}},{key:"render",value:function(){var e=this.state,t=e.quoteCurrencyLists,r=e.currentQuoteCurrency,n=e.tableHeadList,a=e.tableBodyList,c=e.hasMore,i=this.props.base.isMobile;return o.a.createElement(o.a.Fragment,null,o.a.createElement(j,{quoteCurrencyLists:t,tableHeadList:n,tableBodyList:a,clickedMenu:this.clickedTab,currentTabMenu:r,clickToSort:this.clickToSort,quoteCurrency:r,clickToGetMoreLists:this.clickToGetMoreLists,hasMore:c,moveToDetailPage:this.moveToDetailPage,isMobile:i}))}}])&&N(t.prototype,r),a&&N(t,a),i}(),R=Object(m.b)(function(e){return{base:e.base}})(Object(y.a)(H));function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=B(e);if(t){var o=B(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,r)}}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var q=c.a.bind(u.a),G=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(i,n["Component"]);var t,r,a,c=I(i);function i(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),c.apply(this,arguments)}return t=i,(r=[{key:"render",value:function(){return o.a.createElement(p.a,{className:q("page")},o.a.createElement(l.a,null,o.a.createElement("div",{className:q("title-box","first","g-pc-only")},o.a.createElement("h1",{className:q("main-title")},"Purple Turtle Exchange"),o.a.createElement("p",{className:q("semi-title")},"암호화폐기술을 가치있게 여기는 거래소. PTE 거래소")),o.a.createElement("div",{className:q("title-box","second","g-pc-only")},o.a.createElement("p",{className:q("content")},"암호화폐 거래소의 기본과 원칙을 지키는 진정한 암호화폐 거래소!",o.a.createElement("br",null),"암호화폐기술의 가치를 의미있게 생각하고 지키는 Creative Code가 만든 암호화폐거래소입니다.")),o.a.createElement(s.a,null,o.a.createElement(f.a,{xs:"12",md:{size:10,offset:1},xl:{size:8,offset:2},className:q("pl-pr-none")},o.a.createElement(R,null)))))}}])&&F(t.prototype,r),a&&F(t,a),i}();r.d(t,"default",function(){return G})}}]);