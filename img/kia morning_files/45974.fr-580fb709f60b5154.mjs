"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[45974,31076],{251448:(e,t,n)=>{n.d(t,{CB:()=>_,y9:()=>h});var l=n(667294),o=n(342513),i=n(883119),r=n(372085),s=n(930837),a=n(140017),d=n(785893);let c=({onConfirm:e})=>{let t=(0,a.ZP)(),[n,o]=(0,l.useState)(!1),c=()=>{o(!0),(0,r.Z)({url:"/v3/users/email/verify/resend/",method:"POST"})};return(0,d.jsx)(s.ZP,{accessibilityModalLabel:t.bt("Vérifier votre e-mail", "Verify your email", "Accessible label for email verification being required", undefined, true),footer:(0,d.jsxs)(i.kC,{gap:{row:2,column:0},justifyContent:"end",children:[n?(0,d.jsx)(i.zx,{color:"gray",disabled:n,fullWidth:!0,onClick:c,size:"lg",text:t.bt("E-mail envoyé", "Email sent", "Button text for verification email being sent", undefined, true)}):(0,d.jsx)(i.zx,{color:"gray",disabled:n,fullWidth:!0,onClick:c,size:"lg",text:t.bt("Renvoyer l’e-mail", "Resend email", "Button text for resending email verification email", undefined, true)}),(0,d.jsx)(i.zx,{color:"red",fullWidth:!0,onClick:e,size:"lg",text:t.bt("Compris !", "Got it", "Button text for acknowledging email verificaiton is required", undefined, true)})]}),heading:t.bt("Vérifier votre e-mail", "Verify your email", "Accessible label for email verification being required", undefined, true),onDismiss:e,role:"alertdialog",children:(0,d.jsx)(i.xu,{padding:8,children:(0,d.jsx)(i.xv,{align:"center",size:"300",children:t.bt("Sécurisez votre compte en vérifiant votre adresse e-mail. Vérifiez dans la boîte de réception associée à ce compte si vous avez reçu un e-mail de notre part pour continuer à utiliser Pinterest.", "Keep your account secure by verifying your email address. Check the inbox associated with this account for an email from us to continue using Pinterest.", "Inform users that they need to verify their email to keep their account secure and continue using Pinterest", undefined, true)})})})},{Provider:u,useHook:h}=(0,o.Z)("EmailVerificationReminderModal");function _({children:e}){let[t,n]=(0,l.useState)(!1),o=(0,l.useMemo)(()=>({showEmailVerificationReminderModal:()=>{n(!0)}}),[]);return(0,d.jsxs)(l.Fragment,{children:[(0,d.jsx)(u,{value:o,children:e}),t&&(0,d.jsx)(c,{onConfirm:()=>{n(!1)}})]})}},831076:(e,t,n)=>{n.d(t,{default:()=>r});var l=n(704666),o=n(702497),i=n(885896);function r(e,t,n){var r;let s;if(!l.Z[e])throw Error(`unknown url key: ${e}`);n||(n={});let a=l.Z[e](n),d=(s=null,(r=n)&&(s=r.advertiserId||null),!s&&t&&(s=t.id),s),c=!!n.absolutify;return"string"==typeof d&&(a="/advertiser/"+d+a),c&&(a=(0,i.Z)(a,void 0,o.KUo)),a}},207229:(e,t,n)=>{n.d(t,{Z:()=>d});var l=n(667294),o=n(71328);function i(e){let t=(0,o.Z)(e,200);return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)}function r(){return window.innerWidth}function s(){return window.innerHeight}function a(){return null}function d(){let e=(0,l.useSyncExternalStore)(i,s,a),t=(0,l.useSyncExternalStore)(i,r,a);return null!==e&&null!==t?{height:e,width:t}:null}},405459:(e,t,n)=>{n.d(t,{Z:()=>d});var l=n(167912),o=n(244311),i=n(698681),r=n(200309),s=n(226618);function a(e){return e.reduce((e,t)=>("ScalarField"===t.kind&&"__typename"===t.name?e[0].push(t.alias??t.name):e[1].push(t),e),[[],[]])}let d=function({strategy:e,query:t,variables:n,options:d,transformGraphQL:c,useGetLegacyData:u,useGetLegacyResource:h,useGetLegacyPaginatedResource:_,useGetLegacyData__EXPERIMENTAL:p,rootFieldName:f,type1:g,type2:m,connectionName:x}){if("GRAPHQL"===e){let e=(0,o.getRequest)(t);return null!=c?c((0,l.useLazyLoadQuery)(e,n,d)):(0,l.useLazyLoadQuery)(e,n,d)}if(null!=u&&null!=h&&null!=_&&null!=p)throw Error("Only pass one of those calls from the list: \n[useGetLegacyData, useGetLegacyResource, useGetLegacyPaginatedResource, useGetLegacyData__EXPERIMENTAL]\nto useLazyLoadQueryOrLegacy");if(null!=p){let e=p(n);if(!e)return null;let{selections:l}=(0,o.getRequest)(t).fragment;return function e(t,n,l=null){let o={};return!function t(n,l,o,i){let d=function(e,t=null){let[n,l]=e.reduce((e,t)=>("InlineFragment"===t.kind?e[0].push(t):e[1].push(t),e),[[],[]]);if(1===n.length){let[e,o]=a(l);if(0===o.length){let[l,o]=a(n[0].selections),i=[...e,...l];return 0===i.length?{kind:"Uncategorized"}:{kind:"InlineFragmentWithTypename",typenameAliases:i,selections:o,concreteType:n[0].type,remainingPathCount:t}}}else if(1===e.length&&"LinkedField"===e[0].kind){let n=e[0],l=n.concreteType??null;if(n.plural&&1!==t)return{kind:"Uncategorized"};if(null==l)return{kind:"OnlyLinkedFieldAndTypename",selections:n.selections,name:n.name,concreteTypeAndAliases:null,remainingPathCount:null==t?null:t-1};let[o,i]=a(n.selections);if(1===t){let t=e[0],n=t.alias??t.name,{pageInfoSelection:l,edgeSelection:r}=function(e){if(0===e.length||e.length>2||e.some(e=>"LinkedField"!==e.kind))throw Error("Unexpected selections");let t=e.reduce((e,t)=>{if("pageInfo"===t.name){if(null!==e.pageInfoSelection)throw Error("Expected only one pageInfo selection");e.pageInfoSelection=t}else{if(null!==e.edgeSelection)throw Error("Expected only one edge selection");e.edgeSelection=t}return e},{pageInfoSelection:null,edgeSelection:null});if(t.edgeSelection&&!t.edgeSelection.selections.find(e=>"node"===e.name))throw Error("Expected to find a node field inside of edges");return{pageInfoSelection:t.pageInfoSelection,edgeSelection:t.edgeSelection}}(i);if(null===r)throw Error("No edges found in connection field");let s=r.alias??r.name,{concreteType:a}=t;if(null==a)throw Error("No concrete type found in connection field");return{kind:"ConnectionFieldAndTypename",selections:r.selections.filter(e=>!("ScalarField"===e.kind&&"cursor"===e.name)),concreteTypeAndAliases:{concreteType:a,typenameAliases:o},pageInfoSelection:l,nameOrAliasOfEdgesField:s,nameOrAliasOfConnectionField:n,edgeSelection:r}}return{kind:"OnlyLinkedFieldAndTypename",selections:i,name:n.name,concreteTypeAndAliases:{concreteType:l,typenameAliases:o},remainingPathCount:null==t?null:t-1}}else if(e.length>0&&e.every(e=>"FragmentSpread"===e.kind))return{kind:"OnlyFragmentSpread"};return{kind:"Uncategorized"}}(n,i);switch(d.kind){case"InlineFragmentWithTypename":{let{concreteType:e,typenameAliases:n,selections:i,remainingPathCount:r}=d;n.forEach(t=>l[t]=e),t(i,l,o,r);break}case"OnlyFragmentSpread":(0,s.I9)(l,o);break;case"OnlyLinkedFieldAndTypename":{let{name:e,selections:n,concreteTypeAndAliases:i,remainingPathCount:r}=d,s={};if(l[e]=s,i&&i.typenameAliases.length>0){let{concreteType:e,typenameAliases:t}=i;for(let n of t)s[n]=e}t(n,s,o,r);break}case"ConnectionFieldAndTypename":{let{nameOrAliasOfEdgesField:t,nameOrAliasOfConnectionField:n,edgeSelection:i,pageInfoSelection:r}=d;if("PluralLegacyData"!==o.kind)throw Error("Error, expected a PluralLegacyData kind for this query");let s={[t]:o.pluralLegacyData.map(t=>e(i.selections,{kind:"LegacyData",refetchInfo:o.refetchInfo,paginationInfo:o.paginationInfo,singularLegacyData:t}))};r&&(s[r.alias??r.name]=r),l[n]=s;break}case"Uncategorized":throw Error("The query passed to useLazyLoadQueryOrLegacy contained unsupported/uncategorized elements. Please simplify the query.");default:(0,r.Z)(d,"Unexpected category")}}(t,o,n,l),o}(l,{kind:"LegacyData",singularLegacyData:e,refetchInfo:null,paginationInfo:null})}if(null!=u){let e=u(n);return e?(0,s.I9)({},{kind:"LegacyData",singularLegacyData:e,refetchInfo:null,paginationInfo:null}):null}if(null!=h){let{data:e,refresh:t}=h(n);return null==e?null:(0,s.I9)({},{kind:"LegacyData",singularLegacyData:e,refetchInfo:{refetch:t},paginationInfo:null})}if(null!=_){let{data:e,refresh:t,isFetching:l,isAtEnd:r,fetchMore:a}=_(n);if(null==e)return null;if(null==f||null==g||null==m||null==x)throw Error("Unexpected null param");return(0,s.I9)({},{kind:"LegacyData",singularLegacyData:{id:o.ROOT_ID,[(0,i.Cs)(f)]:{type:g,data:{type:m,[(0,i.Cs)(`__${x}_connection`)]:{edges:e.map(e=>({node:e}))}}}},refetchInfo:{refetch:t},paginationInfo:{isLoadingNext:l,hasNext:!r,loadNext:a}})}throw Error("useGetLegacyData or useGetLegacyResource must be provided")}},998449:(e,t,n)=>{n.d(t,{Z:()=>i});let l=(e,t)=>0===e.lastIndexOf(t,0);var o=n(885896);let i=({url:e})=>{let t=(0,o.Z)("/");return l(e,t)?e.substr(t.length-1):e}},477458:(e,t,n)=>{n.d(t,{Z:()=>r,q:()=>i});var l=n(667294);let o=()=>{let[e,t]=(0,l.useState)(!1),[n,o]=(0,l.useState)(!1),[i,r]=(0,l.useState)(!1);return{active:e,focused:n,hovered:i,onBlur:()=>{o(!1),t(!1)},onFocus:()=>o(!0),onMouseDown:()=>t(!0),onMouseEnter:()=>r(!0),onMouseLeave:()=>{r(!1),t(!1)},onMouseUp:()=>t(!1)}};function i({children:e}){return e(o())}let r=o},172560:(e,t,n)=>{n.d(t,{Z:()=>y});var l=n(667294),o=n(883119),i=n(205841),r=n(388769),s=n(140017),a=n(72461),d=n(339001),c=n(340523),u=n(5859),h=n(873955),_=n(564855),p=n(968946),f=n(477458),g=n(923368),m=n(519925),x=n(784300),w=n(785893);let y=function(e){let t=(0,s.ZP)(),{locale:n,isAuthenticated:y}=(0,u.B)(),b=(0,a.Z)(),{checkExperiment:v}=(0,c.F)(),{isCloseupRelatedPinsAboveTheFoldEnabled:P}=(0,g.x4)(),{aggregatedSaves:A,boardName:z,boardUrl:j,followerCount:k,fullName:C,isVerifiedIdentity:E,imageUrl:S,isPromoted:I,isVerifiedMerchant:T,profileUrl:L,sponsorName:F,sponsorshipStatus:O,sponsorUsername:Z="",verified:B,color:U="default",onAvatarClick:D,onNavigateClick:N,onNavigateSponsorClick:R,openNewTab:M,isLeadPin:q=!1}=e,G=(0,c.F)().checkExperiment("mweb_web_android_ios_backend_clbc_display_controls").anyEnabled,W=!y&&v("unauth_show_aggregate_saves").anyEnabled,V=W&&v("unauth_show_aggregate_saves").group,H=(0,h.Z)(t.bt("Lien vers l’avatar de {{ fullName }}", "{{ fullName }} avatar link", "creatorCardProfile.avatar.accessibilityLabel", undefined, true),{fullName:C??""}),X=(0,w.jsx)(f.q,{children:({active:e,focused:t,hovered:n,onBlur:l,onFocus:r,onMouseEnter:s,onMouseLeave:a})=>(0,w.jsx)(o.xu,{onBlur:l,onFocus:r,onMouseDown:()=>{D&&D()},onMouseEnter:s,onMouseLeave:a,children:(0,w.jsx)(o.zd,{rounding:"circle",wash:n||e||t,children:(0,w.jsx)(i.qE,{accessibilityLabel:H,name:C??"",size:P?"xs":"md",src:S??"",verified:B})})})}),K=(0,_.ZP)(C,70),$=(0,w.jsxs)(l.Fragment,{children:[I&&(0,w.jsx)(o.xv,{lineClamp:1,size:"200",weight:"bold",children:t.bt("Sponsorisée par", "Promoted by", "indicating the username of the person who promoted the pin", undefined, true)}),(0,w.jsx)(o.xu,{"data-test-id":"creator-profile-name",children:(0,w.jsx)(o.xu,{maxWidth:270,children:(0,w.jsx)(o.xv,{color:U,size:"200",weight:q||P?"normal":"bold",children:E||T?(0,w.jsx)(o.xu,{"data-test-id":"verified-name",children:(0,w.jsx)(x.Z,{badgeSize:"xs",badgeSpacing:2,fullName:K,isVerifiedIdentity:E,isVerifiedMerchant:T})}):C})})})]}),Q=Z&&F||m.j.includes(O)&&G,Y=`/${Z??""}/`,J=(0,w.jsx)(o.xu,{marginBottom:1,paddingX:1,children:(0,w.jsx)(o.xv,{size:"300",children:A&&(0,d.nk)(t.bt("{{ saveCount }} membres ont enregistré des Épingles similaires", "{{ saveCount }} people saved Pins like this", "closeup.pinAttribution.aggregateSaveCount", undefined, true),{saveCount:b(n,A,{shortform:!0,shortform_maximum_fraction_digits:0})})})}),ee=L?(0,w.jsx)(o.xu,{alignItems:"center",direction:"row",display:"flex",flex:"grow",paddingX:1,children:(0,w.jsx)(o.rU,{dataTestId:"creator-profile-link",href:L,onClick:N,rel:(0,p.Z)(L)?"none":"nofollow",target:M?"blank":null,underline:"none",children:$})}):$,et=z&&j&&(0,w.jsx)(o.xu,{alignItems:"center",direction:"row",display:"flex",flex:"grow",paddingX:1,children:(0,w.jsx)(o.xv,{inline:!0,size:"enabled_show_board"!==V&&A?"200":"300",children:(0,d.XB)({text:t.bt("<a id=\"1\">{{pinnerName}}</a> a enregistré dans <a id=\"2\">{{boardName}}</a>", "<a id=\"1\">{{pinnerName}}</a> saved to <a id=\"2\">{{boardName}}</a>", "unauth.userAttribution.board", undefined, true),markers:{pinnerName:K.toString(),boardName:z.toString()},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,w.jsx)(o.rU,{display:"inline",href:L??"",underline:"none",children:(0,w.jsx)(o.xv,{inline:!0,size:"enabled_show_board"!==V&&A?"200":"300",weight:"bold",children:E||T?(0,w.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:{display:"inline"}},"data-test-id":"verified-name",children:(0,w.jsx)(x.Z,{badgeSize:"xs",badgeSpacing:W?0:2,fullName:K,isVerifiedIdentity:E,isVerifiedMerchant:T})}):e})},"pinner-name-attribution"),2:({innerHtmlStrings:e})=>(0,w.jsx)(o.rU,{display:"inline",href:j?.toLowerCase(),underline:"none",children:(0,w.jsx)(o.xv,{inline:!0,size:"enabled_show_board"!==V&&A?"200":"300",weight:"bold",children:e})},"board-name-attribution")}})})});return(0,w.jsxs)(o.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{pointerEvents:"auto"}},"data-test-id":"creator-card-profile",display:"flex",marginEnd:-1,marginStart:-1,children:[(0,w.jsx)(o.xu,{"data-test-id":"creator-avatar",flex:"none",paddingX:1,children:L?(0,w.jsx)(o.Tg,{dataTestId:"creator-avatar-link",href:L,onTap:N,rel:(0,p.Z)(L)?"none":"nofollow",target:M?"blank":null,children:X}):X}),(0,w.jsxs)(o.xu,{children:[(!W||"enabled_dweb_no_follow"===V)&&ee,("enabled_all"===V||"enabled_save_count"===V)&&A&&A>1&&J,"enabled_show_board"===V&&et,Q?(0,w.jsx)(o.xu,{"data-test-id":"sponsor-title",display:"flex",paddingX:1,children:(0,w.jsx)(m.Z,{href:Y,isPromoted:I,onNavigateSponsorClick:R,sponsorName:F,sponsorshipStatus:O,sponsorUsername:Z})}):!!k&&(!W||"enabled_show_board"===V)&&!P&&(0,w.jsx)(o.xu,{"data-test-id":"follower-count",display:"flex",paddingX:1,children:(0,w.jsx)(o.xv,{color:U,size:"200",children:(0,d.nk)(t.nbt(["{{ followerCount }} abonné", "{{ followerCount }} abonnés"], k, "closeup.creator.followerCount", true),{followerCount:(0,w.jsx)(r.Z,{shortform:!0,shortformMaximumFractionDigits:1,value:k},k)})})}),"enabled_save_count"===V&&ee,"enabled_all"===V&&et]})]})}},599874:(e,t,n)=>{n.d(t,{Z:()=>k});var l=n(667294),o=n(545007),i=n(883119),r=n(224796),s=n(214877),a=n(847160),d=n(515278),c=n(251448),u=n(976731),h=n(140017),_=n(339001),p=n(96452),f=n(731714),g=n(13848),m=n(494125),x=n(388769),w=n(785893);let y=({followText:e,followerCount:t,userFollowed:n})=>{let l=(0,h.ZP)();return(0,_.nk)(l.bt("{{ followCount }} {{ followText }}", "{{ followCount }} {{ followText }}", " - ", undefined, true),{followCount:(0,w.jsx)(i.xu,{"data-test-id":"followCount",opacity:n?void 0:.8,paddingX:1,children:(0,w.jsx)(i.xv,{color:n?"subtle":"inverse",children:(0,w.jsx)(x.Z,{shortform:!0,shortformMaximumFractionDigits:0,value:t})})},"followCount"),followText:(0,w.jsx)(i.xu,{"data-test-id":"followText",paddingX:1,children:(0,w.jsx)(i.xv,{color:n?"default":"inverse",weight:"bold",children:e})},"followText")})};var b=n(324186),v=n(70982),P=n(386008),A=n(155087);function z(e,t,n){var l;return(t="symbol"==typeof(l=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!=typeof l)return l;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?l:String(l))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class j extends l.PureComponent{constructor(...e){super(...e),z(this,"handleButtonClick",({event:e})=>{let{requireAuth:t,i18n:n,userFollowed:l}=this.props;if(t){e.stopPropagation(),t({loginModalHeader:(0,a.N4)({i18n:n,toFollow:!l})});return}let{shouldStopEventPropagation:o,loggingData:i}=this.props;o&&(e.preventDefault(),e.stopPropagation()),this.props.logContextEvent({event_type:101,component:13672,element:11951,object_id_str:this.props.id,view_type:this.props.viewType,view_parameter:this.props.viewParameter,clientTrackingParams:this.props.clientTrackingParams,...i||Object.freeze({})}),this.toggleFollowUnfollow()}),z(this,"handleClick",({event:e})=>{let{requireAuth:t}=this.props;if((t||this.props.shouldStopEventPropagation)&&e.stopPropagation(),t){t();return}this.toggleFollowUnfollow()}),z(this,"toggleFollowUnfollow",()=>{let{id:e,mostRecentPinId:t,loggingData:n,userFollowed:l,viewType:o,viewParameter:i,clientTrackingParams:r}=this.props;l?(this.props.logContextEvent({event_type:46,object_id_str:e,view_type:o,view_parameter:i,aux_data:{pin_id:t},clientTrackingParams:r,...n||Object.freeze({})}),this.unfollow()):(this.props.logContextEvent({event_type:45,object_id_str:e,view_type:o,view_parameter:i,aux_data:{pin_id:t},clientTrackingParams:r,...n||Object.freeze({})}),this.follow())}),z(this,"follow",()=>{let{follow:e,id:t,onUserFollow:n,mostRecentPinId:l,setMostRecentPinId:o,inviteCode:i,handleFollowSuccessFromInvite:r,loggingData:s,viewType:a,viewParameter:d}=this.props;e(t,l,()=>{i?(r?.(),this.props.logContextEvent({event_type:14858,object_id_str:t,view_type:a,view_parameter:d,...s||Object.freeze({})})):this.showConfirmation()},this.showError),n&&n(!0),o(null)}),z(this,"showToast",e=>{let{id:t,imageUrl:n,profileUrl:l,toastManagerContext:o,suppressToasts:i}=this.props;i||o.showOneToast(({hideToast:o})=>(0,w.jsx)(A.Z,{handleHide:o,href:l,imageUrl:n,text:e,userId:t}))}),z(this,"showConfirmation",()=>{let e=(0,w.jsx)(i.xv,{children:this.props.i18n.bt("Abonné(e) ! Ses épingles créées apparaîtront désormais sur votre page d’accueil !", "Following! Their created Pins will show up in your home feed!", "userFollowButton.informationalToastText2", undefined, true)});this.showToast(e)}),z(this,"showError",e=>{let{fullName:t,userFollowed:n,showEmailVerificationReminderModal:l,loggingData:o,inviteCode:r,id:s,viewParameter:a,viewType:d}=this.props,c=n?this.props.i18n.bt("Erreur lors du désabonnement à {{ usernameComponent }}.", "Error unfollowing {{ usernameComponent }}.", "UserFollowButton.error.unfollowing", undefined, true):this.props.i18n.bt("Erreur lors de l’abonnement à {{ usernameComponent }}.", "Error following {{ usernameComponent }}.", "UserFollowButton.error.following", undefined, true);if((0,u.Z)(e,"api_error_code")===p.H9){l();return}let h=(0,w.jsx)(i.xv,{children:(0,_.nk)(c,{usernameComponent:(0,w.jsx)(i.xv,{inline:!0,weight:"bold",children:t})})});this.showToast(h),!n&&r&&this.props.logContextEvent({event_type:14859,object_id_str:s,view_type:d,view_parameter:a,...o||Object.freeze({})})}),z(this,"unfollow",()=>{let{id:e,onUserFollow:t,unfollow:n,mostRecentPinId:l,setMostRecentPinId:o}=this.props;n(e,l,()=>{},this.showError),t&&t(!1),o(null)})}renderButton(){let{button:e,followerCount:t,inline:n=!1,isOwnProfile:l,invertButtonColor:o,isSecondaryButton:r,size:s,showFollowerCount:a,userFollowed:d}=this.props,c=d?this.props.i18n.bt("Abonné(e)", "Following", "User follow button", undefined, true):this.props.i18n.bt("S’abonner", "Follow", "User follow button", undefined, true);if(e)return e({followText:c,onClick:this.handleButtonClick,userFollowed:d});if(l)return(0,w.jsx)(i.zx,{disabled:!0,fullWidth:!0,text:this.props.i18n.bt("Votre profil", "This is you", "Button label to note that this is your Profile", undefined, true)});if(!a)return(0,w.jsx)(i.xu,{"data-test-id":`user-${d?"unfollow":"follow"}-button`,display:"inlineBlock",children:(0,w.jsx)(i.zx,{accessibilityLabel:d?this.props.i18n.bt("Se désabonner", "Unfollow", "userUnfollowButton.button.accessibilityLabel", undefined, true):this.props.i18n.bt("S’abonner", "Follow", "userFollowButton.button.accessibilityLabel", undefined, true),color:r||d?"gray":"red",fullWidth:n,onClick:this.handleButtonClick,selected:o?!d:!!d,size:s??void 0,text:c})});{let e="number"==typeof t?(0,w.jsx)(y,{followerCount:t,followText:c,userFollowed:d}):c;return(0,w.jsx)(i.iP,{onTap:this.handleClick,children:(0,w.jsx)(i.xu,{color:d?"secondary":"primary",paddingX:3,paddingY:3,rounding:2,children:(0,w.jsx)(i.kC,{alignItems:"center",justifyContent:"start",children:e})})})}}render(){let{showPulsar:e,userFollowed:t}=this.props;return(0,w.jsxs)(i.xu,{display:"flex",position:"relative",children:[this.renderButton(),e&&(0,w.jsx)(i.iP,{onTap:this.handleClick,children:(0,w.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:{marginLeft:-86,marginTop:-28}},display:"inlineBlock",position:"absolute",children:(0,w.jsx)(i.o3,{paused:t||!1})})})]})}}function k(e){let{logContextEvent:t}=(0,s.v)(),n=(0,h.ZP)(),{id:l,setMostRecentPinId:i}=(0,b.f)(),a=(0,d.Z)(),u=(0,o.I0)(),{showEmailVerificationReminderModal:_}=(0,c.y9)(),p=(0,P.mN)()(e.id),x=p?.follower_count,y=p?p.explicitly_followed_by_me:e.userFollowed;return(0,m.Z)(()=>{let{id:t}=e,n=f.Z.getItem(r.AG)||"";n&&n===t&&(f.Z.removeItem(r.AG),u((0,v.ZN)(n,e.clientTrackingParams)))}),(0,w.jsx)(j,{...e,follow:(t,n,l,o)=>{u((0,v.yA)(t,n,e.clientTrackingParams,e.inviteCode)).then(l).catch(e=>{o(e)})},followerCount:x,i18n:n,logContextEvent:t,mostRecentPinId:l,requireAuth:a,setMostRecentPinId:i,showEmailVerificationReminderModal:_,toastManagerContext:(0,g.F9)(),unfollow:(t,n,l,o)=>{u((0,v.KF)(t,n,e.clientTrackingParams)).then(l,o)},userFollowed:y})}},324186:(e,t,n)=>{n.d(t,{C:()=>a,f:()=>s});var l=n(667294),o=n(342513),i=n(785893);let{Provider:r,useHook:s}=(0,o.Z)("MostRecentPin");function a({children:e}){let[t,n]=(0,l.useState)(),[o,s]=(0,l.useState)(),a=(0,l.useCallback)(e=>{s([e].concat((o?o.slice(0,10):[]).filter(t=>t!==e)))},[o]),d=(0,l.useMemo)(()=>({id:t,plpImageSignatures:o,setMostRecentPinId:n,setMostRecentPinImage:a}),[t,o,a]);return(0,i.jsx)(r,{value:d,children:e})}},519925:(e,t,n)=>{n.d(t,{Z:()=>d,j:()=>a});var l=n(883119),o=n(140017),i=n(339001),r=n(340523),s=n(785893);let a=[0,2,3];function d({hasAffiliateProducts:e,href:t,isPromoted:n,onNavigateSponsorClick:d,sponsorName:c,sponsorUsername:u,sponsorshipStatus:h,textWeight:_="bold"}){let p;let f=(0,o.ZP)(),g=(0,r.F)().checkExperiment("mweb_web_android_ios_clbc_eu_ad_string").anyEnabled,m=(0,r.F)().checkExperiment("web_remove_paid_partnership_in_rejected_state").anyEnabled,x=t||(u?`/${u}/`:null),w=x&&c?(0,s.jsx)(l.rU,{dataTestId:"sponsorship-text-link",href:x,onClick:d,children:(0,s.jsx)(l.xv,{size:"200",weight:_,children:c})},c):void 0;return n?p=(0,i.nk)(f.bt("Sponsorisée par {{ name }}", "Promoted by {{ name }}", "sponsorship.sponsorshipText.promotedByBrand", undefined, true),{name:w}):h||0===h?c&&!a.includes(h)?p=(0,i.nk)(f.bt("Partenariat rémunéré avec {{ name }}", "Paid partnership with {{ name }}", "closeup.creator.sponsoredPinTitle", undefined, true),{name:w}):m&&2===h||(p=f.bt("Partenariat rémunéré", "Paid partnership", "closeup.creator.sponsoredPinTitle", undefined, true)):e&&(p=f.bt("Lien payé", "Paid link", "sponsorship.sponsorshipText.affiliatedProducts", undefined, true)),(0,s.jsxs)(l.xv,{inline:!0,lineClamp:2,size:"200",children:[g&&!n&&"Ad • "||"",p]})}},923368:(e,t,n)=>{n.d(t,{Nb:()=>s,Of:()=>a,YO:()=>r,ZP:()=>u,x4:()=>c});var l=n(667294),o=n(891162),i=n(392029);let r=({showProductDetailPage:e,isLargerPane:t,showCloseupContentRight:n})=>e&&t?n?i.Uj:i.zT:1,s=(0,o.qe)(({paneWidth:e,pdpCarouselSlotToPaneRatio:t,showCloseupContentRight:n,showProductDetailPage:l,viewportSize:o,maxWidth:i,descriptionPaneWidth:r,inCommentFooterRedesignExp:s,isCloseupRelatedPinsAboveTheFoldEnabled:a,isCommentAttachmentSelectorOpen:d,isCommentThreadExpanded:c,isMediaViewerOpen:u,isPinNoteExpanded:h,isProductDetailsExpanded:_,isShoppingModuleExpanded:p,setIsCommentAttachmentSelectorOpen:f,setIsCommentThreadExpanded:g,setIsMediaViewerOpen:m,setIsPinNoteExpanded:x,setIsProductDetailsExpanded:w,setIsShoppingModuleExpanded:y,closeupWithinMasonryEnabled:b,peekCloseupEnabled:v,isInRemoveMagnifyingGlassVariant:P,setAbortNoActionPlacementTimeout:A,clientTrackingParams:z,isCloseupMediaViewerOpen:j,setIsCloseupMediaViewerOpen:k})=>({paneWidth:e,pdpCarouselSlotToPaneRatio:t,showCloseupContentRight:n,showProductDetailPage:l,viewportSize:o,maxWidth:i,descriptionPaneWidth:r,isCommentAttachmentSelectorOpen:d,inCommentFooterRedesignExp:s,isCloseupRelatedPinsAboveTheFoldEnabled:a,isCommentThreadExpanded:c,isCloseupMediaViewerOpen:j,isMediaViewerOpen:u,isPinNoteExpanded:h,isProductDetailsExpanded:_,isShoppingModuleExpanded:p,setIsCommentAttachmentSelectorOpen:f,setIsCommentThreadExpanded:g,setIsCloseupMediaViewerOpen:k,setIsMediaViewerOpen:m,setIsPinNoteExpanded:x,setIsProductDetailsExpanded:w,setIsShoppingModuleExpanded:y,closeupWithinMasonryEnabled:b,peekCloseupEnabled:v,isInRemoveMagnifyingGlassVariant:P,setAbortNoActionPlacementTimeout:A,clientTrackingParams:z})),a={showCloseupContentRight:!0,showProductDetailPage:!1,viewportSize:"lg",paneWidth:i.Gg,pdpCarouselSlotToPaneRatio:1,maxWidth:i.u6,descriptionPaneWidth:i.u6-i.Gg,inCommentFooterRedesignExp:!1,isCloseupRelatedPinsAboveTheFoldEnabled:!1,isCommentAttachmentSelectorOpen:!1,isCommentThreadExpanded:!1,isCloseupMediaViewerOpen:!1,isMediaViewerOpen:!1,isPinNoteExpanded:!1,isShoppingModuleExpanded:!1,closeupWithinMasonryEnabled:!1,peekCloseupEnabled:!1,isInRemoveMagnifyingGlassVariant:!1,setAbortNoActionPlacementTimeout:()=>{},setIsCloseupMediaViewerOpen:()=>{},setIsCommentAttachmentSelectorOpen:()=>{},setIsMediaViewerOpen:()=>{},setIsShoppingModuleExpanded:()=>{}},d=(0,l.createContext)(a);function c(){let e=(0,l.useContext)(d);if(!e)throw Error("useCloseupContext must be used within CloseupContextProvider");return e}let u=d},392029:(e,t,n)=>{n.d(t,{$T:()=>x,CI:()=>r,Ch:()=>a,ER:()=>m,Gb:()=>d,Gg:()=>o,Hf:()=>b,Ie:()=>_,KP:()=>p,Kn:()=>s,O5:()=>w,Uj:()=>c,bx:()=>f,d2:()=>h,g9:()=>g,iB:()=>v,rv:()=>y,u6:()=>i,zT:()=>u});var l=n(883119);let o=508,i=1016,r=488,s=992,a=672,d=1176,c=.6,u=.84,h=40,_=72,p=740,f=912,g=32,m=16,x=24,w=2,y=1,b=new l.Ry(5),v={ARTICLE:"https://schema.org/Article",BRAND:"https://schema.org/Brand",PRODUCT:"https://schema.org/Product",RECIPE:"https://schema.org/Recipe",OFFER:"https://schema.org/Offer",OUT_OF_STOCK:"https://schema.org/OutOfStock",PERSON:"https://schema.org/Person"}},265192:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(227258);function o(e,t){return n=>n((0,l.U)("BoardSectionResource",{options:{field_set_key:t||"board_page",section_id:e}}))}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/45974.fr-580fb709f60b5154.mjs.map