(this["webpackJsonpreact-tailwindcss"]=this["webpackJsonpreact-tailwindcss"]||[]).push([[0],{120:function(e,c,a){},127:function(e,c,a){},128:function(e,c,a){},129:function(e,c,a){"use strict";a.r(c);var o=a(1),s=a(0),t=a.n(s),r=a(11),i=a.n(r),n=(a(120),a(44)),l=a(36),d=(a(71),a(193)),j=a(133);var b=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"form",children:[Object(o.jsx)("div",{className:"form_heading",children:"Sign In"}),Object(o.jsx)(d.a,{color:"secondary",id:"standard-basic",label:"UserName"}),Object(o.jsx)(d.a,{color:"secondary",id:"standard-basic",label:"Password",type:"password"}),Object(o.jsx)(j.a,{className:"login_btn",color:"secondary",variant:"contained",children:"Sign In"})]})})};var p=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"form",children:[Object(o.jsx)(d.a,{color:"secondary",id:"standard-basic",label:"UserName"}),Object(o.jsx)(d.a,{color:"secondary",id:"standard-basic",label:"E-mail"}),Object(o.jsx)(d.a,{color:"secondary",id:"standard-basic",label:"Password",type:"password"}),Object(o.jsx)(d.a,{color:"secondary",id:"standard-basic",label:"Repeat password",type:"password"}),Object(o.jsx)(j.a,{className:"login_btn",color:"secondary",variant:"contained",children:"Sign Up"})]})})},x=a(182),m=a(179),O=a(183),h=Object(x.a)({root:{background:" rgba(0, 0, 0, 0.7)"}});var u=function(e,c){c.width,c.color;var a=h(),r=t.a.useState(null),i=Object(n.a)(r,2),l=i[0],d=i[1],x=Boolean(l),u=x?"simple-popover":void 0,y=Object(s.useState)(null),g=Object(n.a)(y,2),v=g[0],w=g[1];return Object(o.jsx)("themeProvider",{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(j.a,{style:{borderRadius:"0px 50px 0px 50px"},variant:"contained",color:"secondary",onClick:function(e){d(e.currentTarget)},children:Object(o.jsx)("div",{style:{fontFamily:" Haettenschweiler",fontWeight:"bold"},children:e.name})}),Object(o.jsxs)(m.a,{className:a.root,id:u,open:x,anchorEl:l,onClose:function(){d(null)},anchorOrigin:{vertical:"right",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[Object(o.jsxs)("div",{className:"form_container",children:[Object(o.jsx)(O.a,{variant:"contained",disableElevation:!0,color:"secondary",size:"small",children:Object(o.jsx)(j.a,{onClick:function(){w(!v)},children:v?Object(o.jsx)("span",{children:"Sign Up"}):Object(o.jsx)("span",{children:"Sign In"})})}),Object(o.jsx)("p",{className:"login",children:"Join our comunity"})]}),v?Object(o.jsx)(b,{}):Object(o.jsx)(p,{})]})]})})},y=a(22),g=a(98),v=a.n(g),w=a(189),f=a(101),N=a(68),k=a(188),_=a(99),I=a.n(_),D=a(192),S=a(186),F=a(196),R=a(195),C=a(187),A=a(95),P=a.n(A),L=a(181),B=a(184),z=a(185),q=a(198),E=a(96),$=a.n(E),U=a(97),T=a.n(U),H=a(14),M=[{path:"/",title:"Home"},{path:"/contact",title:"Contact"},{path:"/email",title:"Email"},{path:"/drafts",title:"Drafts"}],W=Array.from(M);function G(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(R.a,{smDown:!0,children:W.map((function(e,c){return Object(o.jsx)("div",{className:"fonts",children:Object(o.jsx)(y.b,{style:{textDecoration:"none"},to:e.path,children:Object(o.jsx)(O.a,{size:"small",disableElevation:!0,variant:"contained",color:"primary",children:Object(o.jsx)(j.a,{style:{borderRadius:"0px 100px 0px 100px",color:"white",textShadow:"2px 1px 1px black,1px 2px 1px gray"},children:Object(o.jsx)("i",{children:e.title})},c)})})})}))})})}var J=Object(x.a)((function(e){return{root:{display:"flex"},drawer:Object(l.a)({},e.breakpoints.up("sm"),{flexShrink:0}),appBar:Object(l.a)({},e.breakpoints.up("xs"),{width:"calc(100% - ".concat(210,"px)")}),menuButton:Object(l.a)({},e.breakpoints.up("md"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:210},content:{flexGrow:1,paddingTop:e.spacing(0)}}}));var X=function(e){var c=J(),a=Object(H.a)(),s=t.a.useState(!1),r=Object(n.a)(s,2),i=r[0],l=r[1],d=function(){l(!i)},j=Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:c.toolbar}),Object(o.jsx)(L.a,{children:M.map((function(e,c){return Object(o.jsx)(B.a,{button:!0,children:Object(o.jsxs)(y.b,{style:{display:"flex",textDecoration:"none",color:"black"},to:e.path,children:[Object(o.jsx)(z.a,{children:c%2===0?Object(o.jsx)(P.a,{}):Object(o.jsx)($.a,{})}),Object(o.jsx)(q.a,{primary:e.title})]})})}))})]});return Object(o.jsxs)("div",{className:c.root,children:[Object(o.jsx)(S.a,{}),Object(o.jsx)(C.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:d,className:c.menuButton,children:Object(o.jsx)(T.a,{style:{}})}),Object(o.jsx)("nav",{className:c.drawer,"aria-label":"mailbox folders",children:Object(o.jsx)(R.a,{smUp:!0,implementation:"css",children:Object(o.jsx)(F.a,{variant:"temporary",anchor:"rtl"===a.direction?"right":"left",open:i,onClose:d,classes:{paper:c.drawerPaper},ModalProps:{keepMounted:!0},children:j})})})]})},K=a(190),Y=a(191),V=Object(f.a)({palette:{primary:{main:"#6697e0"},secondary:{main:N.a[500]},aditionary:{main:k.a[500]}}}),Z=Object(x.a)((function(e){var c;return{root:{"& > *":(c={width:"80ch",color:"White"},Object(l.a)(c,e.breakpoints.down("sm"),{width:"23ch",marginBottom:"10px",marginLeft:"5px"}),Object(l.a)(c,e.breakpoints.up("md"),{width:"50ch"}),c),shadow:{boxShadow:"none"}}}}));function Q(){var e=Z(),c=t.a.useState(null),a=Object(n.a)(c,2),r=a[0],i=(a[1],Object(s.useState)(!1)),l=Object(n.a)(i,2);l[0],l[1],Boolean(r);return Object(o.jsx)(w.a,{theme:V,children:Object(o.jsx)("div",{className:"main",children:Object(o.jsx)(K.a,{position:"fixed",style:{zIndex:"10"},color:"primary",children:Object(o.jsxs)(Y.a,{children:[Object(o.jsxs)("div",{style:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"flex-end"},children:[Object(o.jsx)(y.b,{to:"/",style:{textDecoration:"none"},children:Object(o.jsx)("div",{paddingRight:"",children:Object(o.jsxs)("h1",{className:"heading",style:{color:"black"},children:[Object(o.jsxs)("i",{children:["Bu",Object(o.jsx)("sup",{children:"y"})]}),Object(o.jsx)(v.a,{style:{boxShadow:" 3px 1px 1px black, 1px 3px 1px white",borderRadius:"50px",fontSize:"30px"}})]})})}),Object(o.jsx)("div",{children:Object(o.jsx)(d.a,{label:Object(o.jsx)(D.a,{}),id:"standard-basic",type:"text",className:e.root,color:"secondary",placeholder:"Search"})}),Object(o.jsx)(G,{}),Object(o.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center"},children:Object(o.jsx)(R.a,{xsDown:!0,children:Object(o.jsx)(u,{name:"Sign In / UP"})})}),Object(o.jsx)(X,{})]}),Object(o.jsx)(ee,{})]})})})})}function ee(){return Object(o.jsx)("div",{className:"ButtonSingInUp",style:{cursor:"pointer"},children:Object(o.jsx)(I.a,{})})}var ce,ae=a.p+"static/media/businessman_PNG6558.12478e43.png",oe=a(194),se=a(199),te=a(18),re=a.n(te),ie=a(17),ne=a.n(ie),le=a(6),de=a.n(le),je=a(54),be=a.n(je),pe=a(25),xe=a.n(pe),me=[{wishlistIcon:Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(ne.a,{})}),cartIcon:Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(re.a,{})}),Rating:"4.5",image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1583535344-juliana-maverick-x01-rsv-1583535332.jpg?crop=1xw:1xh;center,top&resize=320%3A%2A",prices:"300$",productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",productName:"Mountain Bicycle",reviews:Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(xe.a,{color:"secondary"}),Object(o.jsx)(xe.a,{color:"secondary"}),Object(o.jsx)(xe.a,{color:"secondary"}),Object(o.jsx)(be.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"})]})})},(ce={wishlistIcon:Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(ne.a,{})}),cartIcon:Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(re.a,{})}),Rating:"3.5",image:"https://static.toiimg.com/photo/80998213.cms",prices:"50$",productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",productName:"Wrist Watch",reviews:Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(xe.a,{color:"secondary"}),Object(o.jsx)(xe.a,{color:"secondary"}),Object(o.jsx)(xe.a,{color:"secondary"}),Object(o.jsx)(be.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"})]})})},Object(l.a)(ce,"wishlistIcon",Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(ne.a,{})})),Object(l.a)(ce,"cartIcon",Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(re.a,{})})),ce),{wishlistIcon:Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(ne.a,{})}),cartIcon:Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(re.a,{})}),Rating:"6.5",image:"https://ae01.alicdn.com/kf/H2cd47910854643809bc941bee459b515k/TWS-Wireless-Bluetooth-Earphone-6D-Stereo-Wireless-Earphones-IPX5-Waterproof-Earphones-650mAh-V5-0-Headfree-For.jpg_350x350.jpg",prices:"200$",productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",productName:"6D Stereo Earphone",reviews:Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(xe.a,{color:"secondary"}),Object(o.jsx)(xe.a,{color:"secondary"}),Object(o.jsx)(xe.a,{color:"secondary"}),Object(o.jsx)(be.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"})]})})},{wishlistIcon:Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(ne.a,{})}),cartIcon:Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(re.a,{})}),Rating:"6.9",image:"https://static-01.daraz.pk/p/d59de06448c0ac352c856707bc6ee9b5.jpg",prices:"1000$",productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",productName:"Apple Laptop",reviews:Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(xe.a,{color:"secondary"}),Object(o.jsx)(xe.a,{color:"secondary"}),Object(o.jsx)(xe.a,{color:"secondary"}),Object(o.jsx)(be.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"})]})})}],Oe=[{wishlistIcon:Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(ne.a,{})}),cartIcon:Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(re.a,{})}),Rating:"120.10",image:"https://drop.ndtv.com/TECH/product_database/images/913201720152AM_635_iphone_x.jpeg",prices:"900$",productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",productName:"Iphone X",reviews:Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"})]})})},{wishlistIcon:Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(ne.a,{})}),cartIcon:Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(re.a,{})}),Rating:"0.0",image:"https://d11zer3aoz69xt.cloudfront.net/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/b/e/beats_solo3_wireless_on-ear_headphones_rose_gold_999_2.jpg",prices:"80$",productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",productName:"Wireless Headphone",reviews:Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"})]})})},{wishlistIcon:Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(ne.a,{})}),cartIcon:Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(re.a,{})}),Rating:"0.0",image:"https://media1.svb-media.de/media/snr/505942/images/normal/image_2016-01-11--1.jpg",prices:"5000$",productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",productName:"Germin GPS73",reviews:Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"})]})})},{wishlistIcon:Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(ne.a,{})}),cartIcon:Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(re.a,{})}),Rating:"0.0",image:"https://149355317.v2.pressablecdn.com/wp-content/uploads/2020/10/Ruko-B7-Drone-Top-Camera-Drones.jpg",prices:"200$",productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",productName:"Drones with camera",reviews:Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"})]})})}],he=[{wishlistIcon:Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(ne.a,{})}),cartIcon:Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(re.a,{})}),Rating:"120.10",image:"https://ae01.alicdn.com/kf/HTB1KbuLUAvoK1RjSZFwq6AiCFXaL.jpg",prices:"210$",productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",productName:"Tatto machine",reviews:Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"})]})})},{wishlistIcon:Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(ne.a,{})}),cartIcon:Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(re.a,{})}),Rating:"80.3",image:"https://i.pinimg.com/736x/41/39/26/413926aeef062fce7b5a6076d0479178.jpg",prices:"300$",productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",productName:"Mini Laptop",reviews:Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"})]})})},{wishlistIcon:Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(ne.a,{})}),cartIcon:Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(re.a,{})}),Rating:"23.10",image:"https://media1.svb-media.de/media/snr/505942/images/normal/image_2016-01-11--1.jpg",prices:"5000$",productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",productName:"Germin GPS73",reviews:Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"})]})})},{wishlistIcon:Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(ne.a,{})}),cartIcon:Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(re.a,{})}),Rating:"134.0",image:"https://s3-ap-northeast-1.amazonaws.com/media.want.jp/BC/A5D760D973BFBC/A5D760D973BFBC_1_250.jpg",prices:"110$",productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",productName:"Drones with camera",reviews:Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"})]})})}],ue=[{wishlistIcon:Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(ne.a,{})}),cartIcon:Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(re.a,{})}),Rating:"120.10",image:"https://www.cleanlink.com/resources/editorial/2017/floor-scrubber-20728.jpg",prices:"1000$",productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",productName:"Scrubber cleaner",reviews:Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"})]})})},{wishlistIcon:Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(ne.a,{})}),cartIcon:Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(re.a,{})}),Rating:"30.43",image:"https://www.vitamix.com/media/catalog/product/blendingstationadvance/images/BSA-lglam.jpg",prices:"430$",productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",productName:"Advance blending",reviews:Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"})]})})},{wishlistIcon:Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(ne.a,{})}),cartIcon:Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(re.a,{})}),Rating:"30.12",image:"https://images.homedepot-static.com/productImages/94e77ff2-d4c4-4165-8a8d-955c0e257367/svn/emerson-quiet-kool-portable-air-conditioners-eap01-64_400.jpg",prices:"400$",productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",productName:"Portable Air Conditioners",reviews:Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"})]})})},{wishlistIcon:Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(ne.a,{})}),cartIcon:Object(o.jsx)(C.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(o.jsx)(re.a,{})}),Rating:"21.0",image:"https://www.tejar.pk/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/s/o/sony_clm-fhd5_clip-on_lcd_monitor1_-_tejar.jpg",prices:"560$",productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",productName:"CLM-FHD5 LCD Monitor",reviews:Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"}),Object(o.jsx)(de.a,{color:"secondary"})]})})}],ye=(a(90),Object(x.a)((function(e){return{arrow:{color:"black"},tooltip:{backgroundColor:"black",boxShadow:"1px 1px 1px crimson",fontSize:"15px"}}})));function ge(){var e=ye();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"Product_Container",children:me.map((function(c,a){return Object(o.jsxs)("div",{className:"products",children:[Object(o.jsx)(y.b,{to:"#",children:Object(o.jsx)("img",{src:c.image})}),Object(o.jsxs)("div",{className:"desciption_products",children:[Object(o.jsxs)("span",{children:[c.reviews,Object(o.jsx)("code",{children:c.Rating})]}),Object(o.jsxs)("div",{className:"head_prics",children:[Object(o.jsx)("h1",{children:c.productName}),Object(o.jsx)("code",{children:c.prices})]}),Object(o.jsx)("div",{className:"accordion",style:{color:"black",width:"100%",borderRadius:"10px"},children:Object(o.jsx)("div",{className:"AccordionSummary",children:Object(o.jsx)("div",{children:Object(o.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(o.jsx)(R.a,{smDown:!0,children:Object(o.jsx)("h2",{style:{marginBottom:"10px"},children:"About Product"})}),Object(o.jsx)("p",{className:"productDescriptio",children:c.productDescription}),Object(o.jsxs)("div",{className:"icons",children:[Object(o.jsx)(se.a,{arrow:!0,classes:e,title:"Add to wishlist","aria-label":"add",children:c.wishlistIcon}),Object(o.jsx)(se.a,{arrow:!0,classes:e,title:"Add to cart","aria-label":"add",children:c.cartIcon})]})]})})})})]})]})}))}),Object(o.jsx)("h1",{className:"Product_heading",children:"New Products"}),Object(o.jsx)("div",{className:"Product_Container",children:Oe.map((function(c,a){return Object(o.jsxs)("div",{className:"products",children:[Object(o.jsx)(y.b,{to:"#",children:Object(o.jsx)("img",{src:c.image})}),Object(o.jsxs)("div",{className:"desciption_products",children:[Object(o.jsxs)("span",{children:[c.reviews,Object(o.jsx)("code",{children:c.Rating})]}),Object(o.jsxs)("div",{className:"head_prics",children:[Object(o.jsx)("h1",{children:c.productName}),Object(o.jsx)("code",{children:c.prices})]}),Object(o.jsx)("div",{className:"accordion",style:{color:"black",width:"100%",borderRadius:"10px"},children:Object(o.jsx)("div",{className:"AccordionSummary",children:Object(o.jsx)("div",{children:Object(o.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(o.jsx)(R.a,{smDown:!0,children:Object(o.jsx)("h2",{style:{marginBottom:"10px"},children:"About Product"})}),Object(o.jsx)("p",{className:"productDescriptio",children:c.productDescription}),Object(o.jsxs)("div",{className:"icons",children:[Object(o.jsx)(se.a,{arrow:!0,classes:e,title:"Add to wishlist","aria-label":"add",children:c.wishlistIcon}),Object(o.jsx)(se.a,{arrow:!0,classes:e,title:"Add to cart","aria-label":"add",children:c.cartIcon})]})]})})})})]})]})}))})]})}var ve=Object(x.a)((function(e){return{arrow:{color:"black"},tooltip:{backgroundColor:"black",boxShadow:"1px 1px 1px crimson",fontSize:"15px"}}}));function we(){var e=ve();return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"container_Products container-2",children:[he.map((function(c,a){return Object(o.jsx)("div",{className:"products-2",children:Object(o.jsxs)("div",{className:"description_container",children:[Object(o.jsx)(y.b,{to:"#",children:Object(o.jsx)("img",{src:c.image})}),Object(o.jsxs)("div",{className:"description-1",children:[Object(o.jsxs)("span",{children:[c.reviews,Object(o.jsx)("code",{children:c.Rating})]}),Object(o.jsxs)("div",{className:"head_prics",children:[Object(o.jsx)("h1",{children:c.productName}),Object(o.jsx)("code",{children:c.prices})]}),Object(o.jsx)("div",{className:"accordion-1",style:{color:"",width:"",borderRadius:""},children:Object(o.jsx)("div",{className:"AccordionSummary-1",children:Object(o.jsx)("div",{children:Object(o.jsxs)("div",{style:{display:"",flexDirection:""},children:[Object(o.jsx)(R.a,{smDown:!0,children:Object(o.jsx)("h2",{style:{marginBottom:""},children:"About Product"})}),Object(o.jsx)("p",{className:"",children:c.productDescription}),Object(o.jsxs)("div",{className:"icons-1",children:[Object(o.jsx)(se.a,{arrow:!0,classes:e,title:"Add to wishlist","aria-label":"add",children:c.wishlistIcon}),Object(o.jsx)(se.a,{arrow:!0,classes:e,title:"Add to cart","aria-label":"add",children:c.cartIcon})]})]})})})})]})]})})})),ue.map((function(c,a){return Object(o.jsx)("div",{className:"products-2",children:Object(o.jsxs)("div",{className:"description_container",children:[Object(o.jsx)(y.b,{to:"#",children:Object(o.jsx)("img",{src:c.image})}),Object(o.jsxs)("div",{className:"description-1",children:[Object(o.jsxs)("span",{children:[c.reviews,Object(o.jsx)("code",{children:c.Rating})]}),Object(o.jsxs)("div",{className:"head_prics",children:[Object(o.jsx)("h1",{children:c.productName}),Object(o.jsx)("code",{children:c.prices})]}),Object(o.jsx)("div",{className:"accordion-1",style:{color:"",width:"",borderRadius:""},children:Object(o.jsx)("div",{className:"AccordionSummary-1",children:Object(o.jsx)("div",{children:Object(o.jsxs)("div",{style:{display:"",flexDirection:""},children:[Object(o.jsx)(R.a,{smDown:!0,children:Object(o.jsx)("h2",{style:{marginBottom:""},children:"About Product"})}),Object(o.jsx)("p",{className:"",children:c.productDescription}),Object(o.jsxs)("div",{className:"icons-1",children:[Object(o.jsx)(se.a,{arrow:!0,classes:e,title:"Add to wishlist","aria-label":"add",children:c.wishlistIcon}),Object(o.jsx)(se.a,{arrow:!0,classes:e,title:"Add to cart","aria-label":"add",children:c.cartIcon})]})]})})})})]})]})})}))]})})}var fe=a(67),Ne=a.n(fe),ke=a(77),_e=a.n(ke),Ie=a(78),De=a.n(Ie),Se=a(76),Fe=a.n(Se),Re=a(75),Ce=a.n(Re),Ae=a(134),Pe=(a(127),["About Us","Comunity","Curent Offer","Accessibility"]),Le=["Report an Ethical Concern","Coustomer Care","Privacy Statement","Feed back"],Be=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"Parllax_image",children:Object(o.jsx)("img",{src:"https://images.wallpaperscraft.com/image/gifts_holiday_package_surprise_50827_1400x1050.jpg"})}),Object(o.jsxs)("div",{className:"bf-footer",children:[Object(o.jsx)("p",{children:"30% cashback & Wine exclusive Prices now"}),Object(o.jsx)(j.a,{variant:"contained",color:"primary",size:"large",style:{marginTop:"20px"},children:"Learn More"})]})]})},ze=Object(Ae.a)((function(e){return{arrow:{color:"crimson"},tooltip:{backgroundColor:"black",boxShadow:"1px 1px 1px crimson",fontSize:"12px"}}}));function qe(){var e=ze();return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(Be,{color:"primary"}),Object(o.jsx)("div",{className:"footer_container",children:Object(o.jsxs)("div",{className:"email_Us",children:[Object(o.jsx)("h1",{children:"Subscribe Now to Up to date to our daily offers"}),Object(o.jsxs)("div",{className:"input_field ",children:[Object(o.jsx)(d.a,{style:{width:"100%"},label:"Email",id:"standard-basic",color:"secondary",placeholder:"Enter Your Email Address"}),Object(o.jsx)(j.a,{variant:"contained",style:{borderRadius:"0px 40px 0px 40px",fontSize:"15px"},size:"large",color:"secondary",children:"Subscribe"})]})]})}),Object(o.jsxs)("div",{className:"footer_container-2",children:[Object(o.jsxs)("div",{className:"footerData",children:[Object(o.jsxs)("div",{className:"Contenct_US",children:[Object(o.jsx)("div",{children:Object(o.jsxs)("span",{className:"logo",children:["Buy",Object(o.jsx)(Ne.a,{style:{boxShadow:" 3px 1px 1px black, 1px 3px 1px crimson",borderRadius:"50px"}})]})}),Object(o.jsxs)("div",{className:"contact_icon",children:[Object(o.jsx)(Ce.a,{className:"icon"}),Object(o.jsx)(Fe.a,{className:"icon"}),Object(o.jsx)(_e.a,{className:"icon"}),Object(o.jsx)(De.a,{className:"icon"})]})]}),Object(o.jsx)("div",{className:"footer_arry",children:Pe.map((function(e,c){return Object(o.jsx)("p",{children:e},c)}))}),Object(o.jsx)("div",{className:"footer_arry_2",children:Le.map((function(e,c){return Object(o.jsx)("p",{children:e},c)}))})]}),Object(o.jsxs)("div",{className:"bottom_of_footer",children:["Live Yous Life",Object(o.jsx)(Ne.a,{style:{boxShadow:" 3px 1px 1px black, 1px 3px 1px crimson",borderRadius:"50px"}})]})]}),Object(o.jsxs)("div",{className:"copy_right",children:[Object(o.jsx)(se.a,{arrow:!0,classes:e,title:"Contact Us: muzammilmoin844@gmail.com",children:Object(o.jsx)("p",{children:" \xa9 M.Muzammil Moin-2020"})}),Object(o.jsxs)("div",{children:[Object(o.jsx)(Ce.a,{className:"bottom_icon"}),Object(o.jsx)(Fe.a,{className:"bottom_icon"}),Object(o.jsx)(_e.a,{className:"bottom_icon"}),Object(o.jsx)(De.a,{className:"bottom_icon"})]})]})]})})}function Ee(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(oe.a,{clasName:"Home",style:{background:"#6697e0",height:"auto"},children:[Object(o.jsx)("div",{className:"Home_contents ",children:Object(o.jsxs)("div",{className:"background_div",children:[Object(o.jsx)("div",{className:"on_image_contents",children:Object(o.jsx)("img",{src:ae,className:"man_image"})}),Object(o.jsx)("div",{className:"offer",style:{color:"black"},children:Object(o.jsxs)("div",{className:"offer_details",children:[Object(o.jsx)("h1",{className:"disscount",children:"Disscount"}),Object(o.jsx)("h4",{children:"50% Discount on your first delivery! "}),Object(o.jsxs)("h1",{children:["Best Collection Of 2021 buy & wine exclusive prices",Object(o.jsx)(u,{name:"SHOP NOW",style:{marginLeft:"150px"}})]})]})})]})}),Object(o.jsx)("h1",{className:"Product_heading",children:"FEATURED PRODUCTS"}),Object(o.jsx)(ge,{}),Object(o.jsx)("h1",{className:"Product_heading",children:"On Sale"}),Object(o.jsx)(we,{})]}),Object(o.jsx)(qe,{})]})}a(128);var $e=a(13);var Ue=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(y.a,{children:[Object(o.jsx)(Q,{}),Object(o.jsx)($e.c,{children:Object(o.jsx)($e.a,{component:Ee})})]})})},Te=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,200)).then((function(c){var a=c.getCLS,o=c.getFID,s=c.getFCP,t=c.getLCP,r=c.getTTFB;a(e),o(e),s(e),t(e),r(e)}))};i.a.render(Object(o.jsx)(Ue,{}),document.getElementById("root")),Te()},71:function(e,c,a){},90:function(e,c,a){}},[[129,1,2]]]);
//# sourceMappingURL=main.3eb35d3c.chunk.js.map