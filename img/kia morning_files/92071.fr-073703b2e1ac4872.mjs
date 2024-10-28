"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[92071],{969548:(e,a,l)=>{var n,t;l.r(a),l.d(a,{default:()=>r});let i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CloseupLink_pin",selections:[{alias:null,args:null,kind:"ScalarField",name:"advertiserId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"attributionSourceId",storageKey:null},{alias:null,args:null,concreteType:"Board",kind:"LinkedField",name:"board",plural:!1,selections:n=[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"campaignId",storageKey:null},{alias:null,args:null,concreteType:"PinCarouselData",kind:"LinkedField",name:"carouselData",plural:!1,selections:[{alias:null,args:null,concreteType:"PinCarouselSlot",kind:"LinkedField",name:"carouselSlots",plural:!0,selections:[{alias:"entityId",args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"index",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},t,{alias:null,args:null,kind:"ScalarField",name:"gridTitle",storageKey:null},{alias:"imageSpec_564x",args:[{kind:"Literal",name:"spec",value:"564x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"564x")'},{alias:"imageSpec_736x",args:[{kind:"Literal",name:"spec",value:"736x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"736x")'},{alias:"imageSpec_orig",args:[{kind:"Literal",name:"spec",value:"orig"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"orig")'},{alias:"imageSpec_474x",args:[{kind:"Literal",name:"spec",value:"474x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"474x")'},{alias:"imageSpec_236x",args:[{kind:"Literal",name:"spec",value:"236x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"236x")'},{alias:null,args:null,kind:"ScalarField",name:"isDownstreamPromotion",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isPromoted",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"pinner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"pinPromotionId",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"promoter",plural:!1,selections:[t],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"promotedIsLeadAd",storageKey:null},{alias:null,args:null,concreteType:"PromotedLeadForm",kind:"LinkedField",name:"promotedLeadForm",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"leadFormId",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storyPinDataId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"trackingParams",storageKey:null},{args:null,kind:"FragmentSpread",name:"useGetStringifiedCommerceAuxData_pin"}],type:"Pin",abstractKey:null};i.hash="5f9c26b5438f918b83ae4ce1ae943b66";let r=i},13682:(e,a,l)=>{var n,t,i,r,s,o,u;l.r(a),l.d(a,{default:()=>c});let d={fragment:{argumentDefinitions:n=[{defaultValue:null,kind:"LocalArgument",name:"pinId"}],kind:"Fragment",metadata:null,name:"CloseupPageDesktopQuery",selections:[{alias:null,args:t=[{kind:"Variable",name:"pin",variableName:"pinId"}],concreteType:null,kind:"LinkedField",name:"v3GetPinQuery",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Pin",kind:"LinkedField",name:"data",plural:!1,selections:[i={alias:null,args:null,kind:"ScalarField",name:"isEligibleForPdp",storageKey:null},{alias:null,args:null,concreteType:"RichPinGridData",kind:"LinkedField",name:"richSummary",plural:!1,selections:[r={alias:null,args:null,concreteType:"AggregateRatingMetadata",kind:"LinkedField",name:"aggregateRating",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"ratingValue",storageKey:null}],storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CloseupPageDesktop_pin"}],storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],type:"V3GetPin",abstractKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:n,kind:"Operation",name:"CloseupPageDesktopQuery",selections:[{alias:null,args:t,concreteType:null,kind:"LinkedField",name:"v3GetPinQuery",plural:!1,selections:[s,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Pin",kind:"LinkedField",name:"data",plural:!1,selections:[i,{alias:null,args:null,concreteType:"RichPinGridData",kind:"LinkedField",name:"richSummary",plural:!1,selections:[r,{alias:null,args:null,concreteType:"RichPinProductMetadata",kind:"LinkedField",name:"products",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"itemId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"itemSetId",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"displayName",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isOosProduct",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isStaleProduct",storageKey:null},{alias:null,args:null,concreteType:"RichPinDataView",kind:"LinkedField",name:"richMetadata",plural:!1,selections:[{alias:null,args:null,concreteType:"RichPinProductMetadata",kind:"LinkedField",name:"products",plural:!0,selections:[{alias:null,args:null,concreteType:"Brand",kind:"LinkedField",name:"brand",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"signature",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ShippingInfo",kind:"LinkedField",name:"shippingInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"freeShippingPrice",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"freeShippingValue",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ProductVariantSet",kind:"LinkedField",name:"variantSet",plural:!1,selections:[{alias:null,args:null,concreteType:"DimensionMetadata",kind:"LinkedField",name:"dimensionMetadata",plural:!0,selections:[o={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"values",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ProductVariant",kind:"LinkedField",name:"variants",plural:!0,selections:[s],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,concreteType:"ArticleMetadata",kind:"LinkedField",name:"article",plural:!1,selections:[o],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shoppingFlags",storageKey:null},{alias:null,args:null,concreteType:"AggregatedPinData",kind:"LinkedField",name:"aggregatedPinData",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"isShopTheLook",storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"StoryPinData",kind:"LinkedField",name:"storyPinData",plural:!1,selections:[s,u],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storyPinDataId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"gridTitle",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"trackingParams",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isGoLinkless",storageKey:null},u],storageKey:null}],type:"V3GetPin",abstractKey:null}],storageKey:null}]},params:{id:"a63ca367dda24dea17d6b9f2cf759bdd0fa3ff2f36bd8fc6c3650013c979c099",metadata:{},name:"CloseupPageDesktopQuery",operationKind:"query",text:null}};d.hash="e7468ff73e618822b529aa9bcbecc941";let c=d;!function(e){if("query"===e.params.operationKind){if(window.__pwsCacheRelayConcreteRequest)window.__pwsCacheRelayConcreteRequest(e);else{let a=[e.params.name,e.params.id].join(":");window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__=window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__||{},window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__[a]=e}}}(d.default||d)},285452:(e,a,l)=>{l.r(a),l.d(a,{default:()=>t});let n={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CloseupPageDesktop_pin",selections:[{args:null,kind:"FragmentSpread",name:"useGetStringifiedCommerceAuxData_pin"},{alias:null,args:null,kind:"ScalarField",name:"gridTitle",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"trackingParams",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isGoLinkless",storageKey:null},{alias:null,args:null,concreteType:"RichPinDataView",kind:"LinkedField",name:"richMetadata",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,concreteType:"ArticleMetadata",kind:"LinkedField",name:"article",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"RichPinGridData",kind:"LinkedField",name:"richSummary",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"displayName",storageKey:null}],storageKey:null}],type:"Pin",abstractKey:null};n.hash="d71620869b6e7be6f13389f82ed52e1b";let t=n},498594:(e,a,l)=>{var n,t,i;l.r(a),l.d(a,{default:()=>s});let r={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CollageChips_pin",selections:[{alias:null,args:null,concreteType:"AggregatedPinData",kind:"LinkedField",name:"aggregatedPinData",plural:!1,selections:[{alias:null,args:null,concreteType:"PinTagChipImagesPerSpec",kind:"LinkedField",name:"pinTagsChips",plural:!0,selections:[{alias:"entityId",args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,concreteType:"Thumbnails",kind:"LinkedField",name:"image",plural:!1,selections:[n={alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"CollectionPin",kind:"LinkedField",name:"collectionPin",plural:!1,selections:[{alias:null,args:null,concreteType:"CollectionPinItem",kind:"LinkedField",name:"itemData",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"pinId",storageKey:null},{alias:null,args:[{kind:"Literal",name:"spec",value:"750x"}],concreteType:"Thumbnails",kind:"LinkedField",name:"images",plural:!1,selections:[t,i,n],storageKey:'images(spec:"750x")'}],storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CloseupLink_pin"},{alias:null,args:null,kind:"ScalarField",name:"dpaCreativeType",storageKey:null}],type:"Pin",abstractKey:null};r.hash="c167093f5b3fc6181bc8b26792c3248c";let s=r},598356:(e,a,l)=>{l.d(a,{Xx:()=>i});var n=l(667294);l(785893),(0,n.createContext)(void 0),l(214877);let t=(0,n.createContext)(void 0),i=()=>(0,n.useContext)(t)},11453:(e,a,l)=>{l.d(a,{JZ:()=>g,Qs:()=>c,jr:()=>p});var n=l(224796),t=l(86785),i=l(340523),r=l(5859),s=l(731714),o=l(554786);let u={auth_dweb_google_fedcm_onetap_modal:122,auth_mweb_google_fedcm_onetap_modal:122,dweb_unauth_google_fedcm_button_flow_eap:125,mweb_unauth_google_fedcm_button_flow_eap:128},d=(e,a,l,n)=>e?l>=(n?u.auth_dweb_google_fedcm_onetap_modal:u.dweb_unauth_google_fedcm_button_flow_eap)&&(n?a("auth_dweb_google_fedcm_onetap_modal").anyEnabled:a("dweb_unauth_google_fedcm_button_flow_eap").anyEnabled):l>=(n?u.auth_mweb_google_fedcm_onetap_modal:u.mweb_unauth_google_fedcm_button_flow_eap)&&(n?a("auth_mweb_google_fedcm_onetap_modal").anyEnabled:a("mweb_unauth_google_fedcm_button_flow_eap").anyEnabled),c=e=>e.isAuth&&e.socialNetwork&&e.socialNetwork.gplus&&e.socialNetwork.gplus.connected&&!s.Z.getItem(n.tr),g=(e,a,l,n)=>{let i=l.browserVersion?parseInt(l.browserVersion.split(".")[0],10):0;return(0,t.i7)(l.browserName??"")&&(e&&d(e,a,i,n)||!e&&"android"===l.platform&&d(e,a,i,n))},p=e=>{let a=(0,o.HG)(),{checkExperiment:l}=(0,i.F)(),{userAgent:n}=(0,r.B)();return c(e)&&g(a,l,n,e.isAuth)}},392071:(e,a,l)=>{l.d(a,{Z:()=>c}),l(167912);var n,t=l(883119),i=l(986631),r=l(340523),s=l(338813),o=l(785893);let u={chip:{marginRight:1,flex:"1 1 0"},chipInner:{paddingBottom:"100%"},chipContainer:{marginRight:-1}},d=void 0!==n?n:n=l(498594);function c({pinKey:e,enableCloseupLink:a}){let l=(0,i.Z)(d,e),{checkExperiment:n}=(0,r.F)(),{anyEnabled:c}=n("aid_web_collection_pin_data"),{aggregatedPinData:g,collectionPin:p,dpaCreativeType:m}=l,{pinTagsChips:y}=g||{},{itemData:_}=p||{},k=y&&y.length>=3?y.slice(0,3):[],h=_&&_.length>=3?_.slice(0,3):[];return c&&!m?(0,o.jsx)(t.xu,{dangerouslySetInlineStyle:{__style:u.chipContainer},display:"flex",children:h.map(e=>{let n=e.images||{},i=(0,o.jsx)(t.Ee,{alt:"",fit:"cover",naturalHeight:n.height??1,naturalWidth:n.width??1,role:"presentation",src:n.url??""});return(0,o.jsx)(t.xu,{dangerouslySetInlineStyle:{__style:u.chip},"data-test-id":"collageChip",children:(0,o.jsx)(t.xu,{dangerouslySetInlineStyle:{__style:u.chipInner},position:"relative",children:(0,o.jsx)(t.xu,{bottom:!0,left:!0,position:"absolute",right:!0,top:!0,children:(0,o.jsx)(t.zd,{height:"100%",wash:!0,width:"100%",children:a?(0,o.jsx)(s.Z,{collageChipId:e.pinId??"",pinKey:l,sizing:"fullSize",children:i}):i})})})},e.pinId)})}):(0,o.jsx)(t.xu,{dangerouslySetInlineStyle:{__style:u.chipContainer},display:"flex",children:k.map(e=>{let n=e.image||{},i=(0,o.jsx)(t.Ee,{alt:"",fit:"cover",naturalHeight:n.height??1,naturalWidth:n.width??1,role:"presentation",src:n.url??""});return(0,o.jsx)(t.xu,{dangerouslySetInlineStyle:{__style:u.chip},"data-test-id":"collageChip",children:(0,o.jsx)(t.xu,{dangerouslySetInlineStyle:{__style:u.chipInner},position:"relative",children:(0,o.jsx)(t.xu,{bottom:!0,left:!0,position:"absolute",right:!0,top:!0,children:(0,o.jsx)(t.zd,{height:"100%",wash:!0,width:"100%",children:a?(0,o.jsx)(s.Z,{collageChipId:e.entityId??"",pinKey:l,sizing:"fullSize",children:i}):i})})})},e.entityId)})})}},879977:(e,a,l)=>{l.d(a,{B:()=>n,E:()=>t});let{Provider:n,useHook:t}=(0,l(342513).Z)("trackingParametersContext")},338813:(e,a,l)=>{l.d(a,{Z:()=>F});var n,t=l(667294);l(167912);var i=l(883119),r=l(433287),s=l(340523),o=l(554786);let u={employees:100,enabled_100:100,enabled_200:200,enabled_300:300};var d=l(598356),c=l(214877),g=l(986631),p=l(140017),m=l(340370),y=l(427514),_=l(268127),k=l(149722),h=l(879977),f=l(237040),v=l(343142),P=l(907177),S=l(953565),w=l(785893);let b=void 0!==n?n:n=l(969548);function F({sizing:e="default",children:a,collageChipId:l,componentType:n,contextLogData:F,elementType:x,disableA11yLabel:K,isEggsUi:L,pinKey:T,derivedSaveButtonOptionsSavedInfo:I,productTagParentPinId:C,viewParameter:E,viewType:R}){let A=(0,p.ZP)(),D=(0,g.Z)(b,T),{logContextEvent:j}=(0,c.v)(),Z=(0,h.E)(),{checkExperiment:q}=(0,s.F)(),{isAuth:Q}=(0,k.Z)(),N=(0,t.useRef)(null),{preloadQuery:G}=(0,P.Us)(),H=q("web_easy_gift_guide_saving",{dangerouslySkipActivation:!0}).anyEnabled,{isGraphQLEnabledInGeneral:M}=(0,f.nF)(),U=q("closeup_dweb_preload_closeup_query_before_navigation").anyEnabled,z=Z.contextLogData?.story_type==="product_tagged_shopping_module_upsell",{isCloseupRelatedPinsAboveTheFoldEnabled:V}=(0,r.Z)(Q),O=Q&&q("closeup_dweb_remove_magnifying_glass").anyEnabled,{isPrefetchImageOnHoverEnabled:X,prefetchAfterMs:B}=function(){let e=(0,o.HG)(),{checkExperiment:a}=(0,s.F)(),l=a("closeup_dweb_prefetch_image_on_hover");return{isPrefetchImageOnHoverEnabled:e&&l.anyEnabled,prefetchAfterMs:u[l.group]||null}}(),{carouselData:W,entityId:Y}=D,$=!!D.promotedIsLeadAd,J=(0,t.useMemo)(()=>D?.imageSpec_564x?.url||D?.imageSpec_736x?.url||D?.imageSpec_orig?.url||D?.imageSpec_474x?.url||D?.imageSpec_236x?.url,[D]),ee={},ea=`/pin/${l||Y}/`,el=(0,d.Xx)();if(el?.variantUrl&&(ea=`/pin/${el.variantUrl}/`),W){let{carouselSlots:e,entityId:a}=W,l=W.index??0;ea=`/pin/${Y}/`,ee={carousel_slot_id:e?.[l]&&e[l].entityId,carousel_data_id:a,carousel_slot_index:l}}let en=(0,_.Z)(D);ee={...ee,...en({default:F?.commerce_data})};let et=()=>{let e={};if($)j({event_type:8948,view_type:R||Z.viewType,view_parameter:E||Z.viewParameter,component:null,object_id_str:D.entityId,clientTrackingParams:D?.trackingParams,aux_data:{closeup_navigation_type:"click",lead_form_id:D.promotedLeadForm?.leadFormId,is_lead_ad:1}}),j({event_type:12,view_type:R||Z.viewType,view_parameter:E||Z.viewParameter,component:null,object_id_str:D.entityId,clientTrackingParams:D?.trackingParams,aux_data:{lead_form_id:D.promotedLeadForm?.leadFormId,is_lead_ad:1,...en()}});else{let a={...F,...en({default:F?.commerce_data})};j({event_type:101,component:n||Z.componentType,element:x,object_id_str:Y,clientTrackingParams:D?.trackingParams,view_type:R||Z.viewType,view_parameter:E||Z.viewParameter,aux_data:a}),z&&(e={storyPinProductEventData:{productPinIdStr:Y,pinIdStr:C}}),j({aux_data:{closeup_navigation_type:"click",...a},component:n||Z.componentType,element:x,event_data:e,event_type:8948,clientTrackingParams:D?.trackingParams,object_id_str:Y,view_type:R||Z.viewType,view_parameter:E||Z.viewParameter})}X&&(0,S.nP)(`web.closeup.prefetched_image_on_hover.${B}_ms.clicked`)},ei=(0,t.useCallback)(async()=>{X&&B&&J&&(N.current=window.setTimeout(async()=>{let e=new Image;e.src=J,e.complete||(0,S.nP)(`web.closeup.prefetched_image_on_hover.${B}_ms.fetched`)},B))},[N,X,B,J]),er=(0,t.useCallback)(()=>{X&&N.current&&(clearTimeout(N.current),N.current=null)},[N,X]),es={pathname:ea,state:{trackingParams:D?.trackingParams,...I&&{board:I},...H&&{fromEggsBoard:L}}},eo=(0,m.Z)({href:es,clientTrackingParams:D?.trackingParams,externalData:{auxData:ee,pin:D&&{advertiserId:D.advertiserId,attributionSourceId:D.attributionSourceId,board:D.board&&{url:D.board.url},campaignId:D.campaignId,entityId:D.entityId,isDownstreamPromotion:D.isDownstreamPromotion,isPromoted:D.isPromoted,pinner:D.pinner&&{username:D.pinner.username},pinPromotionId:D.pinPromotionId,promoter:D.promoter&&{entityId:D.promoter.entityId},storyPinDataId:D.storyPinDataId,trackingParams:D.trackingParams}}}),eu=(0,t.useCallback)(()=>{U&&M&&G((0,v.D)({pinId:D.entityId}))},[D.entityId,G,U,M]);return(0,w.jsx)(i.Tg,{accessibilityLabel:K?void 0:(0,y.Z)(A.bt("Page d’Épingle {{ pinTitle }}", "{{ pinTitle }} pin page", "pinRep.closeupLink.tapArea.accessibilityLabel", undefined, true),{pinTitle:D.gridTitle||D.title||D.description||""}),fullHeight:"fullSize"===e,fullWidth:"fullSize"===e,href:ea,mouseCursor:V||O?void 0:"zoomIn",onMouseEnter:ei,onMouseLeave:er,onTap:({event:e,dangerouslyDisableOnNavigation:a})=>{a(),et(),eu(),eo({event:e})},rounding:2,children:a})}},369417:(e,a,l)=>{l.d(a,{A:()=>n});let n="socialPinLanding"},609568:(e,a,l)=>{l.d(a,{Z:()=>r});var n=l(216167),t=l(976731),i=l(190149);function r(){let{conversationCreate:e}=(0,i.Z)();return async a=>{let l;let i=n.Z.create("ConversationsResource",a);try{let a=(await i.callCreate()).resource_response.data;a&&(e(a),l=a)}catch(e){throw Error((0,t.Z)(e,"message"))}return l}}},622155:(e,a,l)=>{l.d(a,{_l:()=>f,cO:()=>h,t2:()=>v,w2:()=>P,xM:()=>k});var n=l(667294),t=l(616550),i=l(216167),r=l(741983),s=l(624797),o=l(554786),u=l(149722),d=l(785893);let c="UnauthDesktopSocialPinLandingPageContext",g="AthDesktopSocialPinLandingPageContext",p="AuthMobileSocialPinLandingPageContext",m=(0,n.createContext)(),y=({children:e})=>{let[a,l]=(0,n.useState)(!1),[t,i]=(0,n.useState)(!1),r=(0,n.useMemo)(()=>({hasSeenAuthMobileLandingToast:a,setHasSeenAuthMobileLandingToast:l,hasSeenAuthDesktopLandingToast:t,setHasSeenAuthDesktopLandingToast:i}),[a,l,t,i]);return(0,d.jsx)(m.Provider,{value:r,children:e})},_=(0,n.createContext)({key:"",data:null}),k=({children:e})=>{let a=(0,t.TH)(),l=(0,u.Z)(),m=l&&l.isAuth,k=(0,o.HG)(),h=(0,n.useRef)((0,r.fY)(a)&&(0,s.mB)(a.search).invite_code||null),f=(0,t.LX)(a.pathname,{path:"/pin/:id"}),v=f&&f.params.id||"",[P,S]=(0,n.useState)({key:"",data:null});return(0,n.useEffect)(()=>{(async function(){let e=h.current;if(e)try{let a=i.Z.create("InviteCodeMetadataResource",{invite_code:e}),n=(await a.callGet()).resource_response.data;if(n){let e=n.sender??null,a=m&&e.id!==l.id&&e?.should_show_messaging&&l.should_show_messaging;!m&&k?S({key:c,data:{inviter:e,popoverData:e&&![5,9,12,16].includes(n.invite_channel)?{inviterAvatarUrl:e.image_medium_url||"",inviterName:e.first_name||e.full_name}:null}}):a&&!k?S({key:p,data:{toastData:{inviter:{inviterAvatarUrl:e.image_medium_url||"",inviterName:e.first_name||e.full_name,inviterId:e.id},viewer:{viewerId:l.id||""},pin:{pinId:v}}}}):a&&k&&S({key:g,data:{toastData:{inviter:{inviterAvatarUrl:e.image_medium_url||"",inviterName:e.first_name||e.full_name,inviterId:e.id},viewer:{viewerId:l.id||""},pin:{pinId:v}}}})}else S({key:"",data:null})}catch{S({key:"",data:null})}})()},[m,k,l.id,v,l.should_show_messaging]),(0,d.jsx)(y,{children:(0,d.jsx)(_.Provider,{value:P,children:e})})},h=()=>{let e=(0,n.useContext)(_);return e.key===c?e:null},f=()=>{let e=(0,n.useContext)(_);return e.key===p?e:null},v=()=>{let e=(0,n.useContext)(_);return e.key===g?e:null},P=()=>(0,n.useContext)(m)},253060:(e,a,l)=>{l.d(a,{Z:()=>h});var n=l(616550),t=l(883119),i=l(214877),r=l(976731),s=l(205841),o=l(454514),u=l(140017),d=l(339001),c=l(13848),g=l(554786),p=l(369417),m=l(609568),y=l(190149),_=l(622155),k=l(785893);function h({hideToast:e,pinAttachment:a}){let l=(0,u.ZP)(),h=(0,n.k6)(),{logContextEvent:f}=(0,i.v)(),{showToast:v}=(0,c.F9)(),P=(0,m.Z)(),{conversationOpen:S,dropdownOpen:w,setObjectAttachment:b}=(0,y.Z)(),F=(0,g.HG)(),x=(0,_.t2)(),K=(0,_._l)(),L=F?x?.data?.toastData:K?.data?.toastData,T=F?14344:14343;if(L){let{inviter:n,viewer:i}=L,u=(0,k.jsx)(t.xv,{inline:!0,weight:"bold",children:n.inviterName}),c=(0,k.jsx)(t.xv,{children:(0,d.nk)(l.bt("Vous aimez cette Épingle ? Faites le savoir à {{ inviterName }}.", "Like this Pin? Let {{ inviterName }} know.", "SocialPinLandingPage.AuthSocialPinLandingPage.toastText", undefined, true),{inviterName:u})}),g=({conversationId:e,pinAttachment:a})=>{F?(w(),S(e)):h.push(`/conversation/${e}`),b(a)},m=async()=>{f({event_type:F?101:102,view_type:3,view_parameter:156,component:T});try{let e=await P({user_ids:[n.inviterId,i.viewerId]});if(e){let l=e.id;g({conversationId:l,pinAttachment:{...a,source:p.A}})}}catch(e){v(({hideToast:a})=>(0,k.jsx)(o.ZP,{onHide:a,text:(0,r.Z)(e,"message")??""}))}};return f({event_type:13,view_type:3,view_parameter:156,component:T}),(0,k.jsx)(t.kC,{justifyContent:"center",children:(0,k.jsx)(t.iP,{onTap:()=>{m(),e()},children:(0,k.jsx)(o.ZP,{duration:7e3,onHide:e,primaryAction:{accessibilityLabel:l.bt("Répondre", "Reply", "SocialPinLandingPage.AuthToast.replyButtonAccessibilityLabel", undefined, true),label:l.bt("Répondre", "Reply", "SocialPinLandingPage.AuthToast.replyButton", undefined, true),size:"lg",onClick:()=>{}},text:c,thumbnail:{avatar:(0,k.jsx)(s.qE,{name:n.inviterName,src:n.inviterAvatarUrl})}})})})}}},343142:(e,a,l)=>{l.d(a,{D:()=>R,Z:()=>Q});var n,t,i=l(667294),r=l(167912),s=l(616550),o=l(883119),u=l(859619),d=l(95117),c=l(788708),g=l(549629),p=l(986631),m=l(901855),y=l(11453),_=l(340523),k=l(608516),h=l(13848),f=l(268127),v=l(149722),P=l(966361),S=l(134902),w=l(237040),b=l(638365),F=l(622155),x=l(253060),K=l(19447),L=l(907177),T=l(785893);let I=(0,i.lazy)(()=>Promise.all([l.e(47639),l.e(24698)]).then(l.bind(l,647639))),C=void 0!==n?n:n=l(13682),E=void 0!==t?t:t=l(285452);function R({pinId:e}){return{query:C,variables:{pinId:e}}}function A({isEligibleForPdp:e,pinId:a,ratingValue:l,pinKey:n}){let t=(0,m.aX)(),r=(0,s.k6)(),y=(0,s.TH)(),_=(0,v.Z)(),{trafficSource:k}=(0,d.Z)(t,_.isAuth),P=(0,p.Z)(E,n),{showToast:w}=(0,h.F9)(),K=(0,F.t2)(),L=(0,F.w2)();(0,i.useEffect)(()=>{let e=P?.gridTitle||P?.richMetadata?.title||P?.richSummary?.displayName||P?.richMetadata?.article?.name||"Pin page";document.title=e},[P]),(0,i.useEffect)(()=>{if(!L||L.hasSeenAuthDesktopLandingToast)return()=>{};let{setHasSeenAuthDesktopLandingToast:e}=L,l=setTimeout(()=>{if(K){let l={type:"pin",id:a};e(!0),w(({hideToast:e})=>(0,T.jsx)(x.Z,{hideToast:e,pinAttachment:l}))}},3e3);return()=>{clearTimeout(l)}},[K,a,w,L]);let I=(0,f.Z)(P);return((0,g.Q)({view_type:3,object_id_str:a,view_data:{pin_id:a},component:13283,aux_data:{current_page_url:y.pathname+y.search,closeup_navigation_type:(0,S.Z)(r,k),...I(),...l?{rating_value:l}:{},is_go_linkless:!!P?.isGoLinkless},clientTrackingParams:(0,b.Z)((y?.state||{}).trackingParams,P?.trackingParams)},a),e)?(0,T.jsx)(o.xu,{"data-test-id":"pdp-container",children:(0,T.jsx)(c.Z,{})}):(0,T.jsx)(o.xu,{"data-test-id":"closeup-container",children:(0,T.jsx)(u.ZP,{})})}function D({pinId:e,queryRef:a}){let l=(0,r.usePreloadedQuery)(C,a),n=l.v3GetPinQuery?.__typename==="V3GetPin"&&l.v3GetPinQuery?.data?l.v3GetPinQuery?.data:null;return(0,T.jsx)(A,{isEligibleForPdp:n?.isEligibleForPdp??!1,pinId:e,pinKey:n,ratingValue:n?.richSummary?.aggregateRating?.ratingValue})}function j({pinId:e,descriptor:a}){let l=(0,r.useLazyLoadQuery)(C,a.variables),n=l.v3GetPinQuery?.__typename==="V3GetPin"&&l.v3GetPinQuery?.data?l.v3GetPinQuery?.data:null;return(0,T.jsx)(A,{isEligibleForPdp:n?.isEligibleForPdp??!1,pinId:e,pinKey:n,ratingValue:n?.richSummary?.aggregateRating?.ratingValue})}function Z({pinId:e}){let{checkExperiment:a}=(0,_.F)(),l=a("closeup_dweb_preload_closeup_query_before_navigation").anyEnabled,n=R({pinId:e}),{findPreloadedQuery:t}=(0,L.Us)(),i=t(n);return l&&i?.queryRef?(0,T.jsx)(D,{pinId:e,queryRef:i.queryRef}):(0,T.jsx)(j,{descriptor:n,pinId:e})}function q({pinId:e}){let a=(0,K.S6)(),l=e?a(e):null;return(0,T.jsx)(A,{isEligibleForPdp:l?.is_eligible_for_pdp??!1,pinId:e,pinKey:null!=l?{type:"deprecated",data:l}:null,ratingValue:l?.rich_summary?.aggregate_rating?.rating_value})}function Q(){let{id:e}=(0,s.UO)(),{isGraphQLEnabledInGeneral:a}=(0,w.nF)(),l=(0,v.Z)(),n=(0,y.jr)(l);return(0,T.jsxs)(P.Z,{type:"authDesktop",children:[n&&(0,T.jsx)(k.Z,{children:(0,T.jsx)(I,{})}),a?(0,T.jsx)(k.Z,{children:(0,T.jsx)(Z,{pinId:e||""})}):(0,T.jsx)(q,{pinId:e||""})]})}},954690:(e,a,l)=>{l.d(a,{Cw:()=>g,Ig:()=>k,Vl:()=>m,ZP:()=>_});var n=l(244311),t=l(622541),i=l(184960),r=l(656862),s=l(953565);function o(e,a,l){var n;return(a="symbol"==typeof(n=function(e,a){if("object"!=typeof e||null===e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var n=l.call(e,a||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(a,"string"))?n:String(n))in e?Object.defineProperty(e,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[a]=l,e}class u extends Error{constructor(...e){super(...e),o(this,"name","GraphQLFetchError"),o(this,"extraData",{})}}let d=new n.QueryResponseCache({size:100,ttl:6e4});function c(e){return e.id??e.cacheID}function g(e,a){let l=c(e),n=!!l&&null!==d.get(l,a);return(0,s.nP)("pws.graphql.RelayClientEnvironment.isQueryInServerResponseCache",{sampleRate:1,tags:{inCache:n,query:e.name??"unknown"}}),n}function p({concreteRequestCache:e,environment:a}){Array.from(document.querySelectorAll("script[data-relay-response]:not([data-preloaded])")).forEach(l=>{if(!l.dataset.preloaded){let{requestParameters:t,variables:i,response:r}=JSON.parse(l.textContent??""),o=e[[t.name,t.id].join(":")],u=o?(0,n.createOperationDescriptor)(o,i):null;if(u&&!Array.isArray(r)&&r.data){a.commitPayload(u,r.data);let e=c(t);e&&d.set(e,i,r),l.dataset.preloaded="true"}else Array.isArray(r)&&(0,s.nP)("pws.graphql.commitRelayResponsesToStore.isArrayResponse",{sampleRate:1,tags:{name:t.name}})}})}function m(e){let a=window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__||{};window.__pwsCacheRelayConcreteRequest=l=>{a[[l.params.name,l.params.id].join(":")]=l,p({concreteRequestCache:a,environment:e})},delete window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__,p({concreteRequestCache:a,environment:e})}let y=null;function _(){let e;let a=new n.Environment({network:n.Network.create((e=!0,window.addEventListener("focus",()=>e=!0),window.addEventListener("blur",()=>e=!1),async function(a,l){let n=Date.now(),o=(0,i.H)(),d=document.cookie.match(RegExp("\\b"+t.fS.name+"=.+?($|;)","g")),c=(0,r.Z)({handler:o,queryName:a.name,windowIsInFocus:e});try{let e=await fetch("/_/graphql/",{credentials:"include",method:"POST",headers:c,body:JSON.stringify({queryHash:a.id,variables:l})});return(0,s.LY)("pws.graphql.fetchQueryClient.request",Date.now()-n,{sampleRate:1,tags:{handler:o??"unknown",queryName:a.name,status:e.status}}),await e.json()}catch(l){let e=new u(l.message);throw e.stack=l.stack,e.extraData={csrfCookies:d?.join(";")??"unknown",requestHeaders:c},(0,s.nP)("pws.graphql.fetchQueryClient.networkError",{sampleRate:1,tags:{handler:o,queryName:a.name}}),e}})),store:new n.Store(new n.RecordSource)});return"undefined"!=typeof window&&(y=a),a}function k(){return y}},656862:(e,a,l)=>{l.d(a,{Z:()=>i});var n=l(305657),t=l(340807);function i({handler:e,queryName:a,windowIsInFocus:l}){let{searchParams:i}=new URL(window.location.href),r=i.get("force_country"),s=i.get("force_country_from_ip"),o={};return r&&(o["X-Force-Country"]=r),s&&(o["X-Force-Country-From-IP"]=s),e&&(o["X-Pinterest-PWS-Handler"]=e),{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":(0,n._V)(),"X-Requested-With":"XMLHttpRequest","X-Pinterest-Source-Url":(0,t.Z)(),"X-Pinterest-GraphQL-Name":a,"X-Pinterest-AppState":l?"active":"background",...o}}},907177:(e,a,l)=>{l.d(a,{h_:()=>c,rL:()=>d,Tr:()=>p,Us:()=>g});var n=l(422578),t=l(244311),i=l(342513),r=l(954690),s=l(280219),o=l(953565),u=l(84768);function d({relayEnvironment:e}){let a=[];return{preloadQuery:function(l){let i=(0,n.loadQuery)(e,(0,t.getRequest)(l.query),l.variables??{});return a=a.concat({descriptor:l,queryRef:i}),i},ensureFlushed:async function(e){throw Error("ensureFlushed should not be called on the client")},findPreloadedQuery:function(e){return a.find(({descriptor:a})=>(function(e,a){let l=(0,t.getRequest)(e.query),n=(0,t.getRequest)(a.query);return l.operation.name===n.operation.name&&l.hash===n.hash&&(0,s.L)(e.variables,a.variables)})(a,e))}}}let{Provider:c,useHook:g}=(0,i.Z)("QueryPreloader");function p(e){let{findPreloadedQuery:a,preloadQuery:l}=g(),n=(0,u.MM)();if(!e)return null;let i=a(e)?.queryRef,s=(0,t.getRequest)(e.query),d=(0,r.Cw)(s.params,e.variables);return i||(d||(0,o.nP)("pws.graphql.usePreloadedQueryRef.miss",{sampleRate:1,tags:{handler:n,query:s.operation.name??"unknown",runtime:"client"}}),l(e))}},280219:(e,a,l)=>{l.d(a,{L:()=>i,Z:()=>r});var n=l(667294),t=l(520893);let i=(e,a)=>(0,t.Z)(e,a);function r(e){let[a,l]=(0,n.useState)(e);return i(e,a)?a:(l(e),e)}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/92071.fr-073703b2e1ac4872.mjs.map