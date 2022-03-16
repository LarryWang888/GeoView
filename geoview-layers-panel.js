"use strict";(self.webpackChunkgeoview_loader=self.webpackChunkgeoview_loader||[]).push([[763],{7534:(e,r,t)=>{var n=t(8266),a=t(5563),i=t(9788),s=t(6880),c=t(8446),o=t(773),l=t.n(o),u=t(5202),d=window,p=[["esriDynamic","ESRI Dynamic Service"],["esriFeature","ESRI Feature Service"],["geoJSON","GeoJSON"],["ogcWMS","OGC Web Map Service (WMS)"],["xyzTiles","XYZ Raster Tiles"]],f=function(e){switch(e){case"esriDynamic":return{err:"ESRI Map",capability:"Map"};case"esriFeature":return{err:"ESRI Feature",capability:"Query"};default:return{err:"",capability:""}}};const y=function(e){var r=e.mapId,t=e.setAddLayerVisible,n=d.cgpv,a=n.api,i=n.react,o=n.ui,y=n.mui,v=i.useState,b=o.elements,m=b.Button,x=b.ButtonGroup,h=y.Stepper,g=y.Step,j=y.StepLabel,w=y.StepContent,S=y.TextField,k=y.Typography,O=y.InputLabel,I=y.FormControl,P=y.Select,L=y.MenuItem,C=v(0),Z=(0,s.Z)(C,2),N=Z[0],T=Z[1],F=v(""),D=(0,s.Z)(F,2),M=D[0],A=D[1],E=v(""),R=(0,s.Z)(E,2),W=R[0],G=R[1],U=v([]),B=(0,s.Z)(U,2),z=B[0],J=B[1],q=v(""),V=(0,s.Z)(q,2),Y=V[0],X=V[1],_=v(""),Q=(0,s.Z)(_,2),$=Q[0],H=Q[1],K=o.makeStyles((function(){return{buttonGroup:{paddingTop:12,gap:6}}}))(),ee=function(e){a.event.emit("snackbar/open",r,{message:{type:"string",value:"".concat(e," cannot be empty")}})},re=function(e){a.event.emit("snackbar/open",r,{message:{type:"string",value:"URL is not a valid ".concat(e," Server")}})},te=function(e,t){a.event.emit("snackbar/open",r,{message:{type:"string",value:"".concat(e," does not support current map projection ").concat(t)}})},ne=function(){var e=(0,c.Z)(l().mark((function e(){var t,n,i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.map(r).projection.getCRS().code,e.prev=1,e.next=4,a.geoUtilities.getWMSServiceMetadata(M,"");case 4:if(n=e.sent,n.Capability.Layer.CRS.includes(t)){e.next=8;break}throw"proj";case 8:1===(i=n.Capability.Layer.Layer.map((function(e){return[e.Name,e.Title]}))).length?(X(i[0][1]),H(i[0][0])):J(i),e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(1),"proj"==e.t0?te("WMS",t):re("WMS"),e.abrupt("return",!1);case 16:return e.abrupt("return",!0);case 17:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=(0,c.Z)(l().mark((function e(r){var t,n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.geoUtilities.getESRIServiceMetadata(M);case 3:if(!(t=e.sent).capabilities.includes(f(r).capability)){e.next=8;break}"layers"in t?1===(n=t.layers.map((function(e){var r=e.id,t=e.name;return[String(r),t]}))).length?(X(n[0][1]),H(n[0][0])):J(n):(X(t.name),H(String(t.id))),e.next=9;break;case 8:throw"err";case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),re(f(r).err),e.abrupt("return",!1);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(r){return e.apply(this,arguments)}}(),ie=function(){for(var e=a.map(r).projection.getCRS().code,t=0,n=["{x}","{y}","{z}"];t<n.length;t++){var i=n[t];if(!M.includes(i))return re("XYZ Tile"),!1}return"EPSG:3857"===e||(te("XYZ Tiles",e),!1)},se=function(){var e=(0,c.Z)(l().mark((function e(){var r,t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(M);case 3:return r=e.sent,e.next=6,r.json();case 6:if(t=e.sent,["FeatureCollection","Feature"].includes(t.type)){e.next=9;break}throw"err";case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),re("GeoJSON"),e.abrupt("return",!1);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=(0,c.Z)(l().mark((function e(){var n,i,s,c,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==N){e.next=3;break}if(""!==M.trim()){e.next=3;break}return e.abrupt("return",ee("URL"));case 3:if(1!==N){e.next=35;break}if(n=!0,""!==W){e.next=7;break}return e.abrupt("return",ee("Service Type"));case 7:if("ogcWMS"!==W){e.next=13;break}return e.next=10,ne();case 10:n=e.sent,e.next=33;break;case 13:if("xyzTiles"!==W){e.next=17;break}n=ie(),e.next=33;break;case 17:if("esriDynamic"!==W){e.next=23;break}return e.next=20,ae("esriDynamic");case 20:n=e.sent,e.next=33;break;case 23:if("esriFeature"!==W){e.next=29;break}return e.next=26,ae("esriFeature");case 26:n=e.sent,e.next=33;break;case 29:if("geoJSON"!==W){e.next=33;break}return e.next=32,se();case 32:n=e.sent;case 33:if(n){e.next=35;break}return e.abrupt("return");case 35:if(2!==N){e.next=45;break}if(i=Y,s=M,c=$,"esriDynamic"===W?s=a.geoUtilities.getMapServerUrl(M):"esriFeature"===W&&(s=a.geoUtilities.getMapServerUrl(M)+"/"+$,c=""),""!==Y){e.next=42;break}return e.abrupt("return",ee("Layer"));case 42:o={name:i,type:W,url:s,entries:c},a.map(r).layer.addLayer(o),t(!1);case 45:T((function(e){return e+1}));case 46:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),oe=function(){T((function(e){return e-1}))},le=function(e){var r=e.isFirst,t=void 0!==r&&r,n=e.isLast,a=void 0!==n&&n;return(0,u.jsx)(x,{className:K.buttonGroup,children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(m,{variant:"contained",type:"text",onClick:ce,children:a?"Finish":"Continue"}),!t&&(0,u.jsx)(m,{variant:"contained",type:"text",onClick:oe,children:"Back"})]})})};return(0,u.jsxs)(h,{activeStep:N,orientation:"vertical",children:[(0,u.jsxs)(g,{children:[(0,u.jsx)(j,{children:"Enter URL"}),(0,u.jsxs)(w,{children:[(0,u.jsx)(S,{label:"URL",variant:"standard",value:M,onChange:function(e){A(e.target.value),G(""),J([]),X(""),H("")}}),(0,u.jsx)("br",{}),(0,u.jsx)(le,{isFirst:!0})]})]}),(0,u.jsxs)(g,{children:[(0,u.jsx)(j,{children:"Select format"}),(0,u.jsxs)(w,{children:[(0,u.jsxs)(I,{fullWidth:!0,children:[(0,u.jsx)(O,{id:"service-type-label",children:"Service Type"}),(0,u.jsx)(P,{labelId:"service-type-label",value:W,onChange:function(e){G(e.target.value),J([]),X(""),H("")},label:"Service Type",children:p.map((function(e){var r=(0,s.Z)(e,2),t=r[0],n=r[1];return(0,u.jsx)(L,{value:t,children:n},t)}))})]}),(0,u.jsx)(le,{})]})]}),(0,u.jsxs)(g,{children:[(0,u.jsx)(j,{children:"Configure layer"}),(0,u.jsxs)(w,{children:[0===z.length&&""===$&&(0,u.jsx)(S,{label:"Name",variant:"standard",value:Y,onChange:function(e){X(e.target.value)}}),0===z.length&&""!==$&&(0,u.jsx)(k,{children:Y}),z.length>1&&(0,u.jsxs)(I,{fullWidth:!0,children:[(0,u.jsx)(O,{id:"service-layer-label",children:"Select Layer"}),(0,u.jsx)(P,{labelId:"service-layer-label",value:$,onChange:function(e){H(e.target.value);var r=z.find((function(r){return r[0]===e.target.value}))[1];X(r)},label:"Select Layer",children:z.map((function(e){var r=(0,s.Z)(e,2),t=r[0],n=r[1];return(0,u.jsx)(L,{value:t,children:n},t)}))})]}),(0,u.jsx)("br",{}),(0,u.jsx)(le,{isLast:!0})]})]})]})};function v(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?v(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var m=window;const x=function(e){var r=e.layersData,t=m.cgpv,n=t.mui,a=t.ui,c=t.react,o=t.leaflet,l=c.useState,d=c.useEffect,p=l(""),f=(0,s.Z)(p,2),y=f[0],v=f[1],x=l({}),h=(0,s.Z)(x,2),g=h[0],j=h[1],w=n.Slider,S=a.makeStyles((function(){return{layersContainer:{overflow:"hidden",overflowY:"auto",width:"100%"},layerItem:{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"5px 0",padding:"10px 5px",boxSizing:"content-box","&:hover":{cursor:"pointer",backgroundColor:"#c9c9c9"},zIndex:1e3,border:"none",width:"100%"},layerParentText:{fontSize:"16px",fontWeight:"bold"},layerCountTextContainer:{display:"flex",alignItems:"center",width:"100%",height:"32px"},layerItemText:{fontSize:"14px",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",marginLeft:"10px",display:"flex",alignItems:"center",gap:6},layerItemGroup:{paddingBottom:12},sliderGroup:{display:"flex"},slider:{width:"100%",paddingLeft:20,paddingRight:20}}}));d((function(){var e=Object.values(r).reduce((function(e,r){return b(b({},e),{},(0,i.Z)({},r.id,100))}),{});j((function(r){return b(b({},e),r)}))}),[r]);var k=S();return(0,u.jsx)("div",{className:k.layersContainer,children:Object.values(r).map((function(e){return(0,u.jsx)("div",{children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("button",{type:"button",className:k.layerItem,onClick:function(){return r=e.id,void v(r!==y?r:"");var r},children:(0,u.jsx)("div",{className:k.layerCountTextContainer,children:(0,u.jsx)("div",{className:k.layerItemText,title:e.name,children:e.name})})}),y===e.id&&(0,u.jsxs)(u.Fragment,{children:[e.layer.setOpacity&&(0,u.jsxs)("div",{className:k.sliderGroup,children:[(0,u.jsx)("i",{className:"material-icons",children:"contrast"}),(0,u.jsx)("div",{className:k.slider,children:(0,u.jsx)(w,{size:"small",value:g[e.id],valueLabelDisplay:"auto",onChange:function(r){return function(e,r){j((function(t){return b(b({},t),{},(0,i.Z)({},r.id,e))})),r.layer.setOpacity(e/100)}(r.target.value,e)}})})]}),Object.values(e.layers).map((function(r,t){var n,a,i,s,c,l,d=r.layer,p=r.groupLayer;return(0,u.jsx)("div",{className:k.layerItemGroup,children:p?(0,u.jsx)("div",{className:k.layerParentText,title:d.name,children:d.name}):(0,u.jsxs)(u.Fragment,{children:[Object.values(e.layers).length>1&&(0,u.jsx)("div",{className:k.layerItemText,title:d.name,children:d.name}),("simple"===(null===(n=d.drawingInfo)||void 0===n?void 0:n.renderer.type)||"geoJSON"===e.type)&&(0,u.jsxs)("div",{className:k.layerItemText,children:[(0,u.jsx)("img",{src:["esriFeature","geoJSON"].includes(e.type)?o.Marker.prototype.options.icon.options.iconUrl:"data:".concat(null===(a=d.drawingInfo)||void 0===a?void 0:a.renderer.symbol.contentType,";base64,").concat(null===(i=d.drawingInfo)||void 0===i?void 0:i.renderer.symbol.imageData)}),(null===(s=d.drawingInfo)||void 0===s?void 0:s.renderer.label)||d.name]}),"uniqueValue"===(null===(c=d.drawingInfo)||void 0===c?void 0:c.renderer.type)&&(null===(l=d.drawingInfo)||void 0===l?void 0:l.renderer.uniqueValueInfos.map((function(e,r){return(0,u.jsxs)("div",{className:k.layerItemText,children:[(0,u.jsx)("img",{src:"data:".concat(e.symbol.contentType,";base64,").concat(e.symbol.imageData)}),e.label]},r)})))]})},t)}))]})]})},e.id)}))})};function h(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"==typeof e)return g(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return s=e.done,e},e:function(e){c=!0,i=e},f:function(){try{s||null==t.return||t.return()}finally{if(c)throw i}}}}function g(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function j(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function w(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?j(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var S=function(){var e=(0,c.Z)(l().mark((function e(r){var t,n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(r,"?f=json"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),k=function(e,r,t,n){var a,s,c=r.layers;c["".concat(t.id,"-").concat(t.name.replace(/\s+/g,"-").toLowerCase())]={layer:t,groupLayer:n,layerData:[],displayField:t.displayField||t.displayFieldName||"",fieldAliases:(a=t.fields,s={},a&&a.forEach((function(e){var r=e.name,t=e.alias;s[r]=t})),s),renderer:t.drawingInfo&&t.drawingInfo.renderer},r.layers=c,e((function(e){return w(w({},e),{},(0,i.Z)({},r.id,r))}))},O=function(){var e=(0,c.Z)(l().mark((function e(r,t){var n,a,i,s,o,u,d,p,f,y,v,b;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={id:r.id,name:r.name,type:r.type,layer:r.layer||{},layers:{}},"ogcWMS"!==r.type||r.mapService.options.url.includes("/MapServer")){e.next=15;break}return a="".concat(r.url,"request=GetLegendGraphic&version=1.1.1&Service=WMS&format=image/png&layer=").concat(r.entries),e.t0=r.name,e.next=6,fetch(a).then((function(e){return e.blob()})).then((function(e){return new Promise((function(r,t){var n=new FileReader;n.onloadend=function(){return r(n.result.split(",")[1])},n.onerror=t,n.readAsDataURL(e)}))}));case 6:e.t1=e.sent,e.t2=a,e.t3={imageData:e.t1,contentType:"image/png",legendImageUrl:e.t2},e.t4={type:"simple",label:" ",symbol:e.t3},e.t5={renderer:e.t4},i={name:e.t0,drawingInfo:e.t5},k(t,n,i,!1),e.next=47;break;case 15:if("ogcWMS"!==r.type||!r.mapService.options.url.includes("/MapServer")){e.next=39;break}s=h(r.entries),e.prev=17,s.s();case 19:if((o=s.n()).done){e.next=29;break}return p=o.value,e.next=23,S(r.mapService.options.url+p);case 23:f=e.sent,y="".concat(r.url,"?request=GetLegendGraphic&version=1.1.1&Service=WMS&format=image/png&layer=").concat(p),null!==(u=f.drawingInfo)&&void 0!==u&&null!==(d=u.renderer)&&void 0!==d&&d.symbol&&Object.defineProperties(f.drawingInfo.renderer.symbol,{legendImageUrl:{value:y}}),k(t,n,f,!1);case 27:e.next=19;break;case 29:e.next=34;break;case 31:e.prev=31,e.t6=e.catch(17),s.e(e.t6);case 34:return e.prev=34,s.f(),e.finish(34);case 37:e.next=47;break;case 39:if("esriFeature"!==r.type){e.next=46;break}return e.next=42,S(r.layer.options.url);case 42:v=e.sent,k(t,n,v,!1),e.next=47;break;case 46:"esriDynamic"===r.type?(b=r.layer.getLayers(),r.layer.metadata(function(){var e=(0,c.Z)(l().mark((function e(a,i){var s,c,o,u,d,p,f;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=2;break}return e.abrupt("return");case 2:if(!i.layers){e.next=34;break}s=h(i.layers),e.prev=4,s.s();case 6:if((c=s.n()).done){e.next=26;break}if(o=c.value,!b.includes(o.id)){e.next=24;break}return e.next=11,S(r.layer.options.url+o.id);case 11:if(u=e.sent,k(t,n,u,null!==o.subLayerIds&&void 0!==o.subLayerIds),!o.subLayerIds){e.next=24;break}d=0;case 15:if(!(d<o.subLayerIds.length)){e.next=24;break}return p=o.subLayerIds[d],e.next=19,S(r.layer.options.url+p);case 19:f=e.sent,k(t,n,f,!1);case 21:d++,e.next=15;break;case 24:e.next=6;break;case 26:e.next=31;break;case 28:e.prev=28,e.t0=e.catch(4),s.e(e.t0);case 31:return e.prev=31,s.f(),e.finish(31);case 34:case"end":return e.stop()}}),e,null,[[4,28,31,34]])})));return function(r,t){return e.apply(this,arguments)}}())):["geoJSON","xyzTiles"].includes(r.type)&&k(t,n,r,!1);case 47:case"end":return e.stop()}}),e,null,[[17,31,34,37]])})));return function(r,t){return e.apply(this,arguments)}}();const I=function(e,r,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{id:null},a=r.map(t).layer.layers;n.id?O(a[n.id],e):Object.values(a).forEach((function(r){return O(r,e)}))};var P=window;const L=function(e){var r=e.mapId,t=P.cgpv,n=t.api,a=t.react,i=t.ui,c=a.useState,o=a.useEffect,l=c({}),d=(0,s.Z)(l,2),p=d[0],f=d[1],v=c(!1),b=(0,s.Z)(v,2),m=b[0],h=b[1],g=i.elements.Button,j=n.map(r).language,w=i.makeStyles((function(){return{mainContainer:{display:"flex",flexDirection:"row"},addLayerButton:{width:50,minWidth:50,"& > div":{textAlign:"center"}}}}))();return o((function(){return I(f,n,r),n.event.on("layer/added",(function(e){e&&e.handlerName.includes(r)&&I(f,n,r,e.layer)}),r),function(){n.event.off("layer/added",r)}}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:w.mainContainer,children:(0,u.jsx)(g,{className:w.addLayerButton,tooltip:{"en-CA":{addLayer:"Add Layer"},"fr-CA":{addLayer:"Ajouter Couche"}}[j].addLayer,tooltipPlacement:"right",variant:"contained",type:"icon",icon:'<i class="material-icons">add</i>',onClick:function(){return h((function(e){return!e}))}})}),(0,u.jsx)("div",{style:{display:m?"inherit":"none"},children:(0,u.jsx)(y,{mapId:r,setAddLayerVisible:h})}),(0,u.jsx)("div",{style:{display:m?"none":"inherit"},children:(0,u.jsx)(x,{layersData:p})})]})};var C=window,Z=function(){function e(r,t){var a=this;(0,n.Z)(this,e),(0,i.Z)(this,"translations",{"en-CA":{layersPanel:"Layers"},"fr-CA":{layersPanel:"Couches"}}),(0,i.Z)(this,"added",(function(){var e,r,t=a.LayersPanelPluginProps.mapId,n=C.cgpv.api,i=n.map(t).language,s={id:"layersPanelButton",tooltip:a.translations[i].layersPanel,tooltipPlacement:"right",icon:'<i class="material-icons">layers</i>',type:"textWithIcon"},c={title:a.translations[i].layersPanel,icon:'<i class="material-icons">layers</i>',width:200};a.buttonPanel=n.map(t).appBarButtons.createAppbarPanel(s,c,null),null===(e=a.buttonPanel)||void 0===e||null===(r=e.panel)||void 0===r||r.changeContent((0,u.jsx)(L,{buttonPanel:a.buttonPanel,mapId:t}))})),this.id=r,this.LayersPanelPluginProps=t,this.buttonPanel=null}return(0,a.Z)(e,[{key:"removed",value:function(){var e=this.LayersPanelPluginProps.mapId,r=C.cgpv.api;this.buttonPanel&&r.map(e).appBarButtons.removeAppbarPanel(this.buttonPanel.id)}}]),e}();C.plugins=C.plugins||{},C.plugins.layersPanel=Z}},e=>{var r;r=7534,e(e.s=r)}]);