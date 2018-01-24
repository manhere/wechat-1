webpackJsonpForReact([5],{"./src/app/Roulette/Bubbles/bubbles.scss":function(e,t){},"./src/app/Roulette/Bubbles/index.js":function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),n=l(s),r=a("./node_modules/babel-runtime/helpers/classCallCheck.js"),o=l(r),i=a("./node_modules/babel-runtime/helpers/createClass.js"),d=l(i),u=a("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),c=l(u),p=a("./node_modules/babel-runtime/helpers/inherits.js"),m=l(p),f=a("./node_modules/react/index.js"),h=l(f),g=a("./node_modules/prop-types/index.js"),b=l(g),_="undefined"!=typeof window;_&&a("./src/app/Roulette/Bubbles/bubbles.scss");var v=(_&&a("./node_modules/@pdd/ui/index.js"),_&&a("./node_modules/@pdd/platform/index.js"),_&&a("./node_modules/@pdd/ui-spinner/index.js"),function(e){function t(e){(0,o.default)(this,t);var a=(0,c.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.state={active:[],reserve:[]},a}return(0,m.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=(this.props.people,this.state.active),t=e.map(function(e,t){var a=e.avatar,l=void 0===a?"":a,s=e.money,n=void 0===s?0:s,r=e.seconds,o="person person-"+t;return h.default.createElement("li",{className:o,key:l?""+l:t},h.default.createElement("img",{className:"avatar",src:l,alt:"avatar"}),h.default.createElement("div",{className:"texts"},h.default.createElement("p",{className:"txt-1"},r,"秒前，领取了"),h.default.createElement("p",{className:"txt-2"},n,"元现金")))});return h.default.createElement("ul",{className:"roulette-bubbles"},t)}},{key:"componentDidMount",value:function(){var e=this,t=this.props.people;t&&t.length>3&&(this.setState({active:t.slice(0,3),reserve:t.slice(3)}),this.timer=setInterval(function(t){var a=e.state,l=a.active,s=a.reserve;if(l.length&&s.length){var n=l.slice(1).concat(s[0]),r=s.slice(1).concat(l[0]);e.setState({active:n,reserve:r})}},2e3))}},{key:"componentWillUnmount",value:function(){this.timer&&clearInterval(this.timer)}}]),t}(f.Component));v.defaultProps={people:[]},v.propTypes={people:b.default.array.isRequired},t.default=v},"./src/app/Roulette/ReceivePopup/index.js":function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),n=l(s),r=a("./node_modules/babel-runtime/helpers/classCallCheck.js"),o=l(r),i=a("./node_modules/babel-runtime/helpers/createClass.js"),d=l(i),u=a("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),c=l(u),p=a("./node_modules/babel-runtime/helpers/inherits.js"),m=l(p),f=a("./node_modules/react/index.js"),h=l(f),g=a("./node_modules/prop-types/index.js"),b=l(g),_=a("./node_modules/@pdd/image/index.js"),v=l(_),k="undefined"!=typeof window;k&&a("./src/app/Roulette/ReceivePopup/receive_popup.scss");var y=a("./node_modules/@pdd/platform/index.js"),C=k?a("./node_modules/@pdd/logger/lib/index.js"):{},S=C.trackingRecord,w=y.isNativePlatform(),j=v.default.getCDNImgURL("mkt_roulette/red_packet.png"),E=v.default.getCDNImgURL("mkt_roulette/red_packet_2.png"),R=v.default.getCDNImgURL("mkt_roulette/bg_light.png"),N=!1,I=!1,D=function(e){function t(e){(0,o.default)(this,t);var a=(0,c.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.close=a.close.bind(a),a}return(0,m.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props,t=e.lotteryResult,a=e.noNeedShare,l=e.sharedCnt,s=e.onShareClick,n=e.takeAwardDirectly,r=t.playInfo,o=r.originalMoney,i=void 0===o?0:o,d=(r.doubleMoney,!1);a||(d=r.isDouble&&l>=1);var u=!a&&!d;u&&!N&&(N=!0,S({op:"impr",page_sn:"10199",page_el_sn:"98909"})),d&&!I&&(I=!0,S({op:"impr",page_sn:"10199",page_el_sn:"98908"}),S({op:"impr",page_sn:"10199",page_el_sn:"98907"}));var c={display:d?"":"none"},p=w?"分享给好友后，返回拼多多即可领取":"分享给好友后，即可领取",m=w?"继续分享，返回拼多多现金可翻倍":"继续分享，现金可翻倍",f=d?"receive-popup share-twice":"receive-popup",g=d?E:j;return h.default.createElement("div",{className:"mask receive-popup-container"},h.default.createElement("div",{className:f},h.default.createElement("img",{className:"bg-img",src:g,alt:"bg"}),h.default.createElement("p",{className:"bonus"},"恭喜，抽到",i,"元现金"),h.default.createElement("div",{className:"share-hint share-0",style:{display:a?"":"none"}},h.default.createElement("button",{className:"btn",onClick:s},"领取现金")),h.default.createElement("div",{className:"share-hint share-1",style:{display:u?"":"none"}},h.default.createElement("p",{className:"desc"},p),h.default.createElement("button",{className:"btn",onClick:s},"分享给好友")),h.default.createElement("div",{className:"share-hint share-2",style:c},h.default.createElement("p",{className:"desc"},m),h.default.createElement("button",{className:"btn",onClick:s}," 继续分享赢翻倍"),h.default.createElement("div",{className:"desc-2",onClick:n},h.default.createElement("span",null,"不翻倍，直接领取")))),h.default.createElement("div",{className:"bg-light",style:c},h.default.createElement("img",{src:R,alt:"light"})))}},{key:"componentDidMount",value:function(){}},{key:"close",value:function(e){if(e&&e.target&&e.target.className.indexOf("mask")<0)return void e.stopPropagation();this.props.onClose()}}]),t}(f.Component);D.defaultProps={noNeedShare:!1,lotteryResult:{rouletteID:0,playInfo:{},prizeID:0},sharedCnt:0,onShareClick:function(e){return e},takeAwardDirectly:function(e){return e},onClose:function(e){return e}},D.propTypes={noNeedShare:b.default.bool,lotteryResult:b.default.object,sharedCnt:b.default.number,onShareClick:b.default.func.isRequired,takeAwardDirectly:b.default.func.isRequired,onClose:b.default.func.isRequired},t.default=D},"./src/app/Roulette/ReceivePopup/receive_popup.scss":function(e,t){},"./src/app/Roulette/Recommend/RecommendListView.js":function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),n=l(s),r=a("./node_modules/babel-runtime/helpers/classCallCheck.js"),o=l(r),i=a("./node_modules/babel-runtime/helpers/createClass.js"),d=l(i),u=a("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),c=l(u),p=a("./node_modules/babel-runtime/helpers/get.js"),m=l(p),f=a("./node_modules/babel-runtime/helpers/inherits.js"),h=l(f),g=a("./node_modules/react/index.js"),b=l(g),_=a("./node_modules/prop-types/index.js"),v=l(_),k=a("./src/app/Roulette/Recommend/RouletteRecommendItem/index.js"),y=l(k),C=a("./src/app/Roulette/util/index.js"),S=l(C),w=a("./src/app/Roulette/constants/index.js"),j=l(w),E="undefined"!=typeof window;E&&a("./src/app/Roulette/Recommend/recommend.scss");var R=(E&&a("./node_modules/@pdd/request/index.js"),E&&a("./node_modules/@pdd/common-url/index.js"),a("./node_modules/@pdd/util/index.js"),a("./node_modules/@pdd/widget-base-list/index.js").BaseListView),N=S.default.getRouletteInfo,I=j.default.DEFAULT_COUNT,D=j.default.DEFAULT_OFFSET,x=function(e){function t(e){(0,o.default)(this,t);var a=(0,c.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.offset=e.nextOffset,a.imprCallback=a.imprCallback.bind(a),a}return(0,h.default)(t,e),(0,d.default)(t,[{key:"componentDidUpdate",value:function(){for(var e,a=arguments.length,l=Array(a),s=0;s<a;s++)l[s]=arguments[s];(e=(0,m.default)(t.prototype.__proto__||(0,n.default)(t.prototype),"componentDidUpdate",this)).call.apply(e,[this].concat(l)),0===l[1].list.length&&this.state.list.length>0&&(this.prepareView(),this.onScroll())}},{key:"imprCallback",value:function(){var e=this.props.ImprLogger;E&&e.init(),this.prepareListImpr()}},{key:"renderItem",value:function(e){var t=e.itemData,a=e.index,l=e.key,s=t.data,n=t.props,r={key:l,inViewIndex:a,isCombinedImpr:this.props.isCombinedImpr,blockID:this.props.viewID,imgUrl:s.imgUrl,soldQuantity:s.soldQuantity,cnt:s.cnt,goodsName:s.goodsName,price:s.price,normalPrice:s.normalPrice,customerNum:s.customerNum,goodsId:s.goodsID,tag:s.tag,goodsData:s,forwardUrl:n.forwardUrl,ad:n.ad,itemProps:n,logData:n.itemImprParams,viewID:"rec-goods-"+s.goodsID,showAfterPrice:!1,extraTrackingParams:n.extraTrackingParams,imprCallback:0===a?this.imprCallback:null};return b.default.createElement(y.default,r)}},{key:"request",value:function(e){var t=this,a=this.props,l=a.listID,s=a.isPush;N(l,this.offset,I,s).then(function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.offset+=I,a.recGoodsList&&e(a.recGoodsList)}).catch(function(t){e([])})}},{key:"render",value:function(){var e=this,t=this.state.list||[],a=[],l={};t.forEach(function(t,s){if(t.data&&t.props){var n=t.props.key;if(!n||l[n])return void e.log("this key is undefined or all ready existed: "+n);l[n]=!0,a.push(e.renderItem({key:n,itemData:t,index:s}))}});var s=this.renderLoading(),n=this.renderGoTop(),r=this.props.show&&this.state.visible;return b.default.createElement("div",{id:this.viewID,className:"react-base-list-wrapper "+(this.props.listViewWrapper||""),style:{display:r?"":"none"},ref:""+this.viewID},a,s,n)}}]),t}(R);x.defaultProps={ImprLogger:null,listID:"",initList:[],initSize:0,nextOffset:I+D},x.propTypes={ImprLogger:v.default.object,listID:v.default.string,initList:v.default.array,initSize:v.default.number,nextOffset:v.default.number},t.default=x},"./src/app/Roulette/Rule/index.js":function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),n=l(s),r=a("./node_modules/babel-runtime/helpers/classCallCheck.js"),o=l(r),i=a("./node_modules/babel-runtime/helpers/createClass.js"),d=l(i),u=a("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),c=l(u),p=a("./node_modules/babel-runtime/helpers/inherits.js"),m=l(p),f=a("./node_modules/react/index.js"),h=l(f),g=a("./node_modules/prop-types/index.js"),b=(l(g),"undefined"!=typeof window);b&&a("./src/app/Roulette/Rule/rule.scss");var _=b?a("./node_modules/@pdd/ui/index.js"):{},v=function(e){function t(){(0,o.default)(this,t);var e=(0,c.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments));return e.state={popupVisible:!1},e.showPopup=e.showPopup.bind(e),e.hidePopup=e.hidePopup.bind(e),e}return(0,m.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.state.popupVisible,t=e?h.default.createElement("div",{className:"mask",onClick:this.hidePopup},h.default.createElement("div",{className:"rules-popup"},h.default.createElement("button",{className:"close-btn"}),h.default.createElement("div",{className:"popup"},h.default.createElement("p",{className:"rule-title"},"活动规则"),h.default.createElement("ul",{id:"rules-container"},h.default.createElement("li",{className:"rule-desc desc-0",key:"0"},"活动时间：2018年1月15日-2018年2月4日"),h.default.createElement("li",{className:"rule-desc desc-0",key:"1"},"1.每位用户",h.default.createElement("i",null,"每天"),"有2次在大转盘免费领奖品的机会。"),h.default.createElement("li",{className:"rule-desc desc-1",key:"2"},"2.转盘为百分百中奖，奖品中的红包为",h.default.createElement("i",null,"无门槛现金"),"，分享后即可领取成功。红包有效期为领取后的2小时，具体可在“我的奖品”中查看。"),h.default.createElement("li",{className:"rule-desc desc-2",key:"3"},"3.部分红包有幸运翻倍机会，再次分享可获得随机倍数的翻倍奖励，不要错过哦~"),h.default.createElement("li",{className:"rule-desc desc-3",key:"4"},"4.实物奖品在中奖后请根据页面提示填写地址及联系方式，稍后会有工作人员联系并寄出。"),h.default.createElement("p",{className:"claim"},"拼多多可在法律法规允许范围内对本次活动规则解释并做适当修改"))))):null;return h.default.createElement("div",null,h.default.createElement("button",{className:"rule-btn",onClick:this.showPopup}),t)}},{key:"showPopup",value:function(){this.setState({popupVisible:!0},function(e){return _.disableScroll("rules-container")})}},{key:"hidePopup",value:function(){this.setState({popupVisible:!1},function(e){return _.enableScroll()})}}]),t}(f.Component);v.defaultProps={},v.propTypes={},t.default=v},"./src/app/Roulette/Rule/rule.scss":function(e,t){},"./src/app/Roulette/Share/index.js":function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),n=l(s),r=a("./node_modules/babel-runtime/helpers/classCallCheck.js"),o=l(r),i=a("./node_modules/babel-runtime/helpers/createClass.js"),d=l(i),u=a("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),c=l(u),p=a("./node_modules/babel-runtime/helpers/inherits.js"),m=l(p),f=a("./node_modules/react/index.js"),h=l(f),g=a("./node_modules/prop-types/index.js"),b=l(g),_=a("./src/app/Roulette/util/index.js"),v=l(_),k=a("./src/common/userGrade/index.js"),y=l(k),C=a("./src/app/Roulette/constants/index.js"),S=l(C),w=a("./src/app/Roulette/Switchs/index.js"),j=l(w),E="undefined"!=typeof window;E&&a("./src/app/Roulette/Share/share.scss");var R=(E&&a("./node_modules/@pdd/ui/index.js"),E?a("./node_modules/@pdd/platform/index.js"):{}),N=E?a("./node_modules/@pdd/ui-spinner/index.js"):{},I=E?a("./node_modules/@pdd/ui-share/lib/share.js"):{},D=E?a("./node_modules/@pdd/configs/index.js").app:{},x=D.shareType,T=y.default.Role,P=R.isNativePlatform(),L=R.Current===R.Android,M=(R.Current,R.IOS,S.default.ShareSessionSwitch),O=S.default.ShareTimelineSwitch,U=j.default.sessionShare,A=j.default.timelineShare,q=function(e){function t(e){(0,o.default)(this,t);var a=(0,c.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.appShareImg=a.appShareImg.bind(a),a.hide=a.hide.bind(a),a}return(0,m.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this,t=this.props,a=(t.sharePictureData,t.sharedCnt),l=t.grade,s=this.props,n=s.hideSession,r=s.hideTimeline,o=!n,i=!r;U();A(l)===O.Forbidden?(i=!1,o=!0):o||(i=!0);var d=-1!==[T.BanList,T.Eco].indexOf(l),u=d?"hint hint-1":"hint hint-1 with-arrow",c=1===a?"分享成功后现金翻倍哦":"分享后即可领取现金红包",p=h.default.createElement("div",{className:"share-title"},h.default.createElement("p",{className:u},"点击右上角，分享给朋友/群聊"),h.default.createElement("p",{className:"hint hint-2"},c)),m=1===a?h.default.createElement("i",{className:"timeline-tip"},"现金翻倍"):null;return P?h.default.createElement("div",{className:"mask native-share",onClick:this.hide},h.default.createElement("div",{className:"share-bottom"},h.default.createElement("div",{className:"bottom-title"},"分享到"),h.default.createElement("ul",{className:"bottom-icons"},o?h.default.createElement("li",null,h.default.createElement("span",{className:"icon session",key:"0","data-index":"0",onClick:function(t){e.appShareImg(0)}}),h.default.createElement("span",null,"微信")):null,i?h.default.createElement("li",null,h.default.createElement("span",{className:"icon timeline",key:"1","data-index":"1",onClick:function(t){e.appShareImg(1)}}),h.default.createElement("span",null,"朋友圈"),m):null))):h.default.createElement("div",{className:"mask wechat-share",onClick:this.hide},p,h.default.createElement("i",{className:"arrow",style:{display:d?"none":""}}))}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"appShareImg",value:function(e){var t=this.props,a=t.sharePictureData,l=t.shareSucceedCallback,s=t.grade,n=U(),r=A(s),o={shareImgData:a,succeedCallback:function(t){N.hide(),l&&l(e)},failedCallback:function(e){return N.hide()}};if(0===e)switch(n){case M.Link:I.share(x.WeChatSession);break;case M.Image:if(L&&!R.isAndroidSupportWeChatSessionImage())return void I.share(x.WeChatSession);N.show(),v.default.appShare(e,o);break;default:I.share(x.WeChatSession)}else if(1===e)switch(r){case O.Forbidden:break;case O.Link:I.setSuccessFunc(function(t){N.hide(),l&&l(e)}),I.share(x.WeChatTimeline);break;case O.Image:default:N.show(),v.default.appShare(e,o)}}},{key:"hide",value:function(e){e&&(e.preventDefault(),e.stopPropagation()),"DIV"===e.target.tagName&&this.props.hideShareCallback()}}]),t}(f.Component);q.defaultProps={sharedCnt:0,grade:-1,sharePictureData:{},hideSession:!1,hideTimeline:!1,shareSucceedCallback:function(e){return e},hideShareCallback:function(e){return e}},q.propTypes={sharedCnt:b.default.number,grade:b.default.number,sharePictureData:b.default.object,hideSession:b.default.bool,hideTimeline:b.default.bool,shareSucceedCallback:b.default.func,hideShareCallback:b.default.func},t.default=q},"./src/app/Roulette/Share/share.scss":function(e,t){},"./src/app/Roulette/Switchs/index.js":function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a("./src/app/Roulette/Switchs/timelineShare.js"),n=l(s),r=a("./src/app/Roulette/Switchs/sessionShare.js"),o=l(r);t.default={timelineShare:n.default,sessionShare:o.default}},"./src/app/Roulette/Switchs/sessionShare.js":function(e,t,a){"use strict";function l(e){return i.Link}Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var s=a("./src/app/Roulette/constants/index.js"),n=function(e){return e&&e.__esModule?e:{default:e}}(s),r="undefined"!=typeof window,o=r?a("./node_modules/@pdd/platform/index.js"):{},i=(o.Current,o.IOS,n.default.ShareSessionSwitch)},"./src/app/Roulette/Switchs/timelineShare.js":function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function s(e){if(c)switch(e){case m.Eco:default:return p.Forbidden}else switch(e){case m.Eco:return p.Forbidden;default:return p.Image}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var n=a("./src/app/Roulette/constants/index.js"),r=l(n),o=a("./src/common/userGrade/index.js"),i=l(o),d="undefined"!=typeof window,u=d?a("./node_modules/@pdd/platform/index.js"):{},c=u.Current===u.IOS,p=r.default.ShareTimelineSwitch,m=i.default.Role},"./src/app/Roulette/Wheel/index.js":function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),n=l(s),r=a("./node_modules/babel-runtime/helpers/classCallCheck.js"),o=l(r),i=a("./node_modules/babel-runtime/helpers/createClass.js"),d=l(i),u=a("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),c=l(u),p=a("./node_modules/babel-runtime/helpers/inherits.js"),m=l(p),f=a("./node_modules/react/index.js"),h=l(f),g=a("./node_modules/prop-types/index.js"),b=l(g),_=a("./src/app/Roulette/util/index.js"),v=l(_),k=a("./src/app/Roulette/constants/index.js"),y=l(k),C="undefined"!=typeof window;C&&a("./src/app/Roulette/Wheel/wheel.scss");var S=v.default.getLotteryResult,w=v.default.subscriberTrack,j=C?a("./node_modules/@pdd/ui/index.js"):{},E=a("./node_modules/@pdd/platform/index.js"),R=C?a("./node_modules/@pdd/image/index.js"):{},N=C?a("./node_modules/@pdd/navigation/index.js"):{},I=C?a("./node_modules/@pdd/logger/lib/index.js"):{},D=y.default.SectorType,x=y.default.QQ_MALL_ACOUNT,T=y.default.HTJ_QQ_MALL_ACOUNT,P=y.default.ROULETTE_ID_WRONG_ERROR_CODE,L=I.trackingRecord,M=(E.isNativePlatform(),E.isWeChatPlatform()),O=E.isQQPlatform(),U=R.getCDNImgURL("mkt_roulette/coins.png"),A=R.getCDNImgURL("mkt_roulette/bg_ribbon.png"),q=R.getCDNImgURL("mkt_roulette/ray.png"),F=R.getCDNImgURL("mkt_roulette/wheel_bg.png"),Q=R.getCDNImgURL("mkt_roulette/pointer_1.png"),W=R.getCDNImgURL("mkt_roulette/pointer_2.png"),G=R.getCDNImgURL("mkt_roulette/pointer_click.png"),B=R.getCDNImgURL("mkt_roulette/qq_fc_bg.png"),V=function(e){function t(e){(0,o.default)(this,t);var a=(0,c.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.rotating=!1,a.targetDegree=0,a.state={lotteryDrawing:!1,pointerOnClick:!1,showForceContact:!1,showQQForceContact:!1},a.rotate=a.rotate.bind(a),a.clickPointer=a.clickPointer.bind(a),a.clickPointerEnd=a.clickPointerEnd.bind(a),a.gotoRoletteMe=a.gotoRoletteMe.bind(a),a.gotoMallDataCard=a.gotoMallDataCard.bind(a),a}return(0,m.default)(t,e),(0,d.default)(t,[{key:"rotate",value:function(){var e=this,t=this.props,a=t.hasForceContact,l=t.fcQRCodeImg;if(O&&a)return void this.setState({showQQForceContact:!0},function(e){w().then().catch(),j.disableScroll(),L({op:"impr",page_sn:"10199",page_el_sn:"98997"})});if(M&&a&&l)return void this.setState({showForceContact:!0},function(e){w().then().catch(),j.disableScroll(),L({op:"impr",page_sn:"10199",page_el_sn:"98899"})});var s=this.props,n=s.lotteryData;if(s.leftTimes<1)return void j.showToast("今日机会已用完，请明日再来");if(!this.rotating){this.rotating=!0,this.setState({lotteryDrawing:!0}),L({op:"click",page_sn:"10199",page_el_sn:"98914"});var r=this.props.rouletteID;S(r).then(function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.props.onCompleted,l=e.refs.wheel||document.getElementById("wheel"),s=0,r=0;r<n.length;r++)if(n[r].prizeID===t.prizeID){s=r;break}var o=e.targetDegree-e.targetDegree%360+360*(1-s/n.length)+1440;e.targetDegree=o,l&&(l.style.transform="rotateZ("+e.targetDegree+"deg)",l.style.webkitTransform="rotateZ("+e.targetDegree+"deg)",l.style.transition="all 4500ms ease-in-out"),e.timer&&clearTimeout(e.timer),setTimeout(function(l){a(t),e.rotating=!1,e.setState({lotteryDrawing:!1})},4500)}).catch(function(t){e.rotating=!1,e.setState({lotteryDrawing:!1}),t.errorCode===P?N.reload():j.showToast(t.message)})}}},{key:"render",value:function(){var e=this.props,t=e.lotteryData,a=e.leftTimes,l=e.fcQRCodeImg,s=this.state,n=s.lotteryDrawing,r=s.showForceContact,o=s.showQQForceContact,i=s.pointerOnClick,d=a>0?"点击抽奖":"明日再来";n&&(d="正在抽奖");var u=a?h.default.createElement("p",null,"今日还有",h.default.createElement("span",null,a),"次抽奖机会"):h.default.createElement("p",null,"今日抽奖机会已用完，明天再来哦~"),c=a>0?"hint hint-1":"hint hint-2",p=a>0?Q:W,m=a>0?"wt-bg wt-bg-0":"wt-bg wt-bg-1";i&&(p=G);for(var f=t.map(function(e,t){var a="sector sector-"+(e.id||t);return e.type===D.IPHONE_X&&(a+=" iphone-x"),h.default.createElement("div",{className:a,key:"sector-"+(e.id||t)},h.default.createElement("p",{className:"desc"},e.desc),e.imgUrl?h.default.createElement("img",{className:"image",src:e.imgUrl}):null)}),g=[],b=0;b<16;b++)g.push(h.default.createElement("i",{key:b,className:"bubble bubble-"+b}));var _=r?h.default.createElement("div",{className:"mask force-contact-mask"},h.default.createElement("div",{className:"fc-wrapper"},h.default.createElement("div",{className:"fc-title"},"长按指纹识别二维码，关注后即可领取奖励"),h.default.createElement("div",{className:"fc-qrcode"},h.default.createElement("img",{src:l}),h.default.createElement("div",{className:"scan-line"})))):null,v=o?h.default.createElement("div",{className:"force-contact-main"},h.default.createElement("div",{className:"force-contact-content-button-animation",onClick:this.gotoMallDataCard},h.default.createElement("div",{className:"title-top"},"为了接收现金到账"),h.default.createElement("div",{className:"title-bottom"},"请关注“拼多多”公众号"),h.default.createElement("div",{className:"sub-title"},h.default.createElement("span",{className:"red-packet-icon"}),"新人888元红包限时领"),h.default.createElement("div",{className:"animation-guide"},h.default.createElement("img",{src:B,className:"contact-background"}),h.default.createElement("div",{className:"contact-circle"},h.default.createElement("div",{className:"inner-circle"})),h.default.createElement("div",{className:"contact-hand contact-hand-animation"})),h.default.createElement("div",{className:"force-button"},"关注后领取奖励"))):null;return h.default.createElement("div",{className:"roulette-wheel"},h.default.createElement("div",{className:"wheel-title"},h.default.createElement("div",{className:m}),u),h.default.createElement("div",{className:"wheel-wrapper"},h.default.createElement("img",{src:U,className:"coins-bg",alt:"coins"}),h.default.createElement("img",{src:A,className:"ribbon-bg",alt:"ribbon"}),h.default.createElement("img",{src:q,className:"ray-bg",alt:"ray"}),h.default.createElement("div",{className:"wheel-bg"},h.default.createElement("ul",{className:"wheel-bubble"},g),h.default.createElement("ul",{ref:"wheel",className:"wheel",id:"wheel"},h.default.createElement("img",{src:F,className:"wheel-bg",alt:"wheel"}),f)),h.default.createElement("div",{className:"pointer",onClick:this.rotate,onTouchStart:this.clickPointer,onTouchEnd:this.clickPointerEnd},h.default.createElement("img",{src:p,className:"pointer-bg",alt:"wheel"}),h.default.createElement("p",{className:c},d))),h.default.createElement("div",{className:"coupons",onClick:this.gotoRoletteMe},h.default.createElement("span",null,"查看我的奖品")),_,v)}},{key:"componentDidMount",value:function(){L({op:"impr",page_sn:"10199",page_el_sn:"98914"}),L({op:"impr",page_sn:"10199",page_el_sn:"98913"})}},{key:"clickPointer",value:function(){this.setState({pointerOnClick:!0})}},{key:"clickPointerEnd",value:function(){this.setState({pointerOnClick:!1})}},{key:"gotoRoletteMe",value:function(){L({op:"click",page_sn:"10199",page_el_sn:"98913"},function(e){return N.forward("mkt_roulette_me.html")})}},{key:"gotoMallDataCard",value:function(){var e=C&&"m.hutaojie.com"===location.hostname?T:x;L({op:"click",page_sn:"10199",page_el_sn:"98996"},function(t){return N.forward(e)})}}]),t}(f.Component);V.propTypes={rouletteID:b.default.number.isRequired,leftTimes:b.default.number.isRequired,lotteryData:b.default.array,onCompleted:b.default.func.isRequired,hasForceContact:b.default.bool,fcQRCodeImg:b.default.string},V.defaultProps={rouletteID:0,leftTimes:0,lotteryData:[],onCompleted:function(e){return e},hasForceContact:!1,fcQRCodeImg:""},t.default=V},"./src/app/Roulette/Wheel/wheel.scss":function(e,t){},"./src/app/Roulette/assetsEntry.js":function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var s=a("./node_modules/react/index.js"),n=l(s),r=a("./node_modules/react-dom/index.js"),o=l(r),i=a("./node_modules/@pdd/page/index.js"),d=l(i),u=a("./node_modules/@pdd/image/index.js"),c=l(u),p=a("./node_modules/@pdd/provide-context/index.js"),m=a("./node_modules/@pdd/logger/lib/index.js"),f=l(m),h=a("./node_modules/@pdd/ui-spinner/index.js"),g=l(h),b=a("./src/app/Roulette/loggerMiddlewares/index.js"),_=l(b),v=a("./src/common/loggerMiddleware/packTimeMiddleware.js"),k=l(v),y=a("./src/app/Roulette/index.js"),C=l(y),S=a("./src/app/Roulette/constants/index.js"),w=l(S),j=a("./src/app/Roulette/util/index.js"),E=l(j),R=w.default.ROULETTE_PAGE_TITLE,N=(w.default.ROULETTE_TITLE,w.default.ROULETTE_MESSAGE),I=w.default.ROULETTE_SHARE_ICON,D=E.default.getRandomShareTitle,x=document.getElementById("main"),T=_.default.pageSN;f.default.addMiddleware([k.default,T]),d.default.prepare({requireLogin:!0,title:R,shareInfo:{title:D(),message:N,thumbnailURL:c.default.getCDNImgURL(I),shareURL:"mkt_roulette.html",onlyWeChat:!0,forceShareToWeChatTimeline:!1,waterMark:""}},function(){g.default.showWithoutBg(),o.default.render(n.default.createElement(p.ProvideContext,null,n.default.createElement(C.default,null)),x)})},"./src/app/Roulette/index.js":function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),n=l(s),r=a("./node_modules/babel-runtime/helpers/classCallCheck.js"),o=l(r),i=a("./node_modules/babel-runtime/helpers/createClass.js"),d=l(i),u=a("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),c=l(u),p=a("./node_modules/babel-runtime/helpers/inherits.js"),m=l(p),f=a("./node_modules/react/index.js"),h=l(f),g=a("./node_modules/prop-types/index.js"),b=(l(g),a("./src/app/Roulette/Wheel/index.js")),_=l(b),v=a("./src/app/Roulette/Rule/index.js"),k=l(v),y=a("./src/app/Roulette/Share/index.js"),C=l(y),S=a("./src/app/Roulette/Bubbles/index.js"),w=l(S),j=a("./src/app/Roulette/util/index.js"),E=l(j),R=a("./src/app/Roulette/ReceivePopup/index.js"),N=l(R),I=a("./src/app/Roulette/Recommend/RecommendListView.js"),D=l(I),x=a("./src/app/Roulette/constants/index.js"),T=l(x),P=a("./src/common/ModuleListManager.js"),L=(l(P),a("./src/common/userGrade/index.js")),M=l(L),O=a("./src/app/Roulette/loggerMiddlewares/index.js"),U=l(O),A="undefined"!=typeof window;A&&a("./src/app/Roulette/roulette.scss");var q=A?a("./node_modules/@pdd/ui/index.js"):{},F=A?a("./node_modules/@pdd/image/index.js"):{},Q=A?a("./node_modules/@pdd/common-url/index.js"):{},W=A?a("./node_modules/@pdd/user/index.js"):{},G=A?a("./node_modules/@pdd/page/index.js"):{},B=A?a("./node_modules/@pdd/navigation/index.js"):{},V=a("./node_modules/@pdd/platform/index.js"),z=A?a("./node_modules/@pdd/page-manager/index.js"):{},H=A?a("./node_modules/@pdd/ui-spinner/index.js"):{},Z=A?a("./node_modules/@pdd/logger/lib/index.js"):{},J=a("./node_modules/@pdd/tracking/index.js").Impr,X=F.getCDNImgURL("mkt_roulette/title.png"),K=F.getCDNImgURL("mkt_roulette/rec_header.png"),Y=F.getCDNImgURL("mkt_roulette/bg_main.png"),$=V.isNativePlatform(),ee=V.isWeChatPlatform(),te=V.isQQPlatform(),ae=$&&V.Current===V.IOS,le=$&&V.Current===V.Android,se=Z.trackingRecord,ne=U.default.egrp,re=U.default.shareCnt,oe=U.default.money,ie=M.default.Role,de=(E.default.getLotteryData,E.default.getRouletteInfo),ue=E.default.getAppShareImgData,ce=E.default.getBubbles,pe=E.default.takeAward,me=E.default.getListID,fe=E.default.qqBackAssistFreeCoupon,he=E.default.getRandomShareTitle,ge=T.default.DEFAULT_OFFSET,be=T.default.DEFAULT_COUNT,_e=(T.default.ROULETTE_TITLE,T.default.ROULETTE_MESSAGE),ve=T.default.ROULETTE_SHARE_ICON,ke=function(e){function t(e){(0,o.default)(this,t);var a=(0,c.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.state={rouletteID:0,lotteryData:[],leftTimes:2,lotteryResult:{},showReceivePopup:!1,showShare:!1,sharePictureData:null,grade:-1,noNeedShare:!1,sharedCnt:0,people:[],isSubscribed:!1,fcQRCodeImg:"",hideSession:!1,hideTimeline:!1,appSharedItemIndex:-1,recGoodsList:[],nextOffset:ge+be},a.listID=me("mkt_roulette"),a.popupShow=a.popupShow.bind(a),a.popupClose=a.popupClose.bind(a),a.onShareClick=a.onShareClick.bind(a),a.takeAwardDirectly=a.takeAwardDirectly.bind(a),a.shareSucceedCallback=a.shareSucceedCallback.bind(a),a.hideShareCallback=a.hideShareCallback.bind(a),a}return(0,m.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.state,t=e.rouletteID,a=e.lotteryData,l=e.lotteryResult,s=e.leftTimes,n=e.grade,r=e.noNeedShare,o=e.showReceivePopup,i=e.showShare,d=e.sharePictureData,u=e.sharedCnt,c=e.people,p=this.state,m=p.recGoodsList,f=p.nextOffset,g=this.state,b=g.isSubscribed,v=g.fcQRCodeImg,y=this.state,S=y.hideSession,j=y.hideTimeline,E={ImprLogger:J,scrollData:G.getPageScrollData(),isPush:parseInt(Q.getParameter("is_push"),10)||0,imprBase:{op:"impr",page_section:"rec_list",page_element:"goods",page_el_sn:"99084"},doTubesImpr:!0,isCombinedImpr:!0,show:!0,showGoTop:!0,viewID:"RouletteRecList",mountViewID:"roulette-rec-list",listID:this.listID||me("mkt_roulette"),initList:m,initSize:m.length,nextOffset:f,baseNum:20,loadMoreBound:20},R=o?h.default.createElement(N.default,{lotteryResult:l,noNeedShare:r,sharedCnt:u,onShareClick:this.onShareClick,takeAwardDirectly:this.takeAwardDirectly,onClose:this.popupClose}):null,I=i?h.default.createElement(C.default,{sharePictureData:d,grade:n,sharedCnt:u,hideSession:S,hideTimeline:j,shareSucceedCallback:this.shareSucceedCallback,hideShareCallback:this.hideShareCallback}):null,x=c&&c.length>0?h.default.createElement(w.default,{people:c}):null,T=!b&&[ie.BanList,ie.Eco].indexOf(n)<0;return h.default.createElement("div",{className:"roulette mobile-container"},h.default.createElement(k.default,null),h.default.createElement("div",{className:"roulette-header"},h.default.createElement("img",{src:X,className:"title-img",alt:"bg"})),h.default.createElement("img",{src:Y,className:"main-bg",alt:"coins"}),h.default.createElement(_.default,{rouletteID:t,leftTimes:s,lotteryData:a,onCompleted:this.popupShow,hasForceContact:T,fcQRCodeImg:v}),R,I,h.default.createElement("div",{className:"roulette-rec-header"},h.default.createElement("img",{src:K,className:"title-img",alt:"bg"})),h.default.createElement("div",{id:"roulette-rec-list",className:"roulette-rec-list"},m.length?h.default.createElement(D.default,E):null),x)}},{key:"componentDidMount",value:function(){var e=this,t=ge,a=G.getPageScrollData(),l=parseInt(Q.getParameter("is_push"),10)||0,s=a&&a.itemIndex?a.itemIndex:0,n=s>0?Math.ceil(s/be)*be:be,r=n;s=0;var o=this.listID||me("mkt_roulette");de(o,t,n,l).then(function(t){H.hide(),e.setState({rouletteID:t.rouletteID,lotteryData:t.prizeInfos,leftTimes:t.userInfo.leftTimes,recGoodsList:t.recGoodsList,nextOffset:r})}).catch(function(e){return q.showToast(e.message)}),W.getGrade(function(t){Z.addMiddleware([ne(t)]);var a=t===ie.BanList||t===ie.Eco&&ee;e.setState({grade:t,noNeedShare:a}),a||e.prepareShare()});var i={check_sub_content:"1"};W.requestSelfInfo(i,function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.is_subscribed,l="";t.sub_content&&t.sub_content.base&&(l=t.sub_content.base),e.setState({isSubscribed:a,fcQRCodeImg:l})}),te&&fe(),ce().then(function(t){var a=t.length,l=t.map(function(e,t){var l=Math.ceil(parseFloat((a-t)/5,10));return e.seconds=l,e});e.setState({people:l})}).catch(function(e){return e})}},{key:"prepareShare",value:function(){var e=this,t={title:he(),message:_e,thumbnailURL:F.getCDNImgURL(ve),shareURL:"mkt_roulette.html",onlyWeChat:!0,forceShareToWeChatTimeline:!1,waterMark:"",appMessageShareSuccess:function(t){e.shareSucceedCallback(0)},qqShareSuccess:function(t){e.shareSucceedCallback()},qqZoneShareSuccess:function(t){e.shareSucceedCallback()}};ae&&(t.useSubDirectoryURL=!0,t.shareToWeChatTimelineInAppDisabled=!1,t.revertHardCodeFor161024=!0,t.timelineDomain="http://mrk.bjlyxd.cn",t.timelineAppId="wx673bac0179c39437"),G.prepareShare(t)}},{key:"popupShow",value:function(e){var t=e.playInfo,a=void 0===t?{}:t;a&&a.rawOriginalMoney&&Z.addMiddleware([oe(a.rawOriginalMoney)]);var l=this.state,s=(l.lotteryData,l.leftTimes);l.sharedCnt;this.setState({sharedCnt:0,hideSession:!1,hideTimeline:!1});e.prizeID;this.setState({lotteryResult:e,leftTimes:s-1,showReceivePopup:!0},function(e){return q.disableScroll()})}},{key:"popupClose",value:function(){this.setState({showReceivePopup:!1},function(e){return q.enableScroll()})}},{key:"onShareClick",value:function(){var e=this,t=this.state,a=t.sharePictureData,l=t.noNeedShare,s=t.lotteryResult,n=t.sharedCnt;if(l){var r=(s||{}).playInfo;if(r&&r.playID){var o=r.playID;pe(o,!1).then(function(t){e.setState({showReceivePopup:!1,showShare:!1},function(e){return q.enableScroll()}),ee&&z.getInstance().backRefresh.once(0,function(e){B.reload()}),B.forward("mkt_roulette_take.html?play_id="+o)}).catch(function(e){q.showToast(e.message)})}}else $?a?this.setState({showShare:!0},function(e){return q.disableScroll()}):ue().then(function(t){e.setState({sharePictureData:t,showShare:!0},function(e){return q.disableScroll()})}).catch(function(e){return q.showToast(e.message)}):te&&window.mqq&&window.mqq.support&&window.mqq.support("mqq.ui.showShareMenu")?window.mqq.ui.showShareMenu():this.setState({showShare:!0},function(e){return q.disableScroll()});se({op:"click",page_sn:"10199",page_el_sn:n>0?"98908":"98909"})}},{key:"takeAwardDirectly",value:function(){var e=this;se({op:"click",page_sn:"10199",page_el_sn:"98907"},function(t){var a=e.state.lotteryResult,l=(a||{}).playInfo;if(l&&l.playID){var s=l.playID;l.isDouble;pe(s,!1).then(function(t){e.setState({showReceivePopup:!1,showShare:!1},function(e){return q.enableScroll()}),z.getInstance().backRefresh.once(0,function(e){B.reload()}),B.forward("mkt_roulette_take.html?play_id="+s)}).catch(function(e){q.showToast(e.message)})}})}},{key:"shareSucceedCallback",value:function(e){var t=this;H.hide();var a=this.state,l=a.showShare,s=a.noNeedShare;a.grade;l&&this.hideShareCallback(),!(arguments.length&&1===e&&le)&&q.showToast("分享成功");var n=this.state.sharedCnt;Z.addMiddleware([re(n+1)]),this.setState({sharedCnt:n+1}),arguments.length&&$&&(0===e?this.setState({hideSession:!0}):1===e&&this.setState({hideTimeline:!0}));var r=this.state.lotteryResult;if(r&&r.playInfo){var o=r.playInfo,i=o.playID,d=o.isDouble;if(!i)return void q.showToast("抽奖结果有误，请刷新页面");(s||!d||d&&1===n)&&pe(i,d).then(function(e){setTimeout(function(e){t.setState({showReceivePopup:!1,showShare:!1},function(e){return q.enableScroll()}),z.getInstance().backRefresh.once(0,function(e){B.reload()}),B.forward("mkt_roulette_take.html?play_id="+i)},500)}).catch(function(e){q.showToast(e.message)})}}},{key:"hideShareCallback",value:function(){this.setState({showShare:!1},function(e){return q.enableScroll})}}]),t}(f.Component);ke.propTypes={},t.default=ke},"./src/app/Roulette/roulette.scss":function(e,t){}},["./src/app/Roulette/assetsEntry.js"]);