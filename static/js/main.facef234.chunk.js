(this["webpackJsonprouter-practice"]=this["webpackJsonprouter-practice"]||[]).push([[0],{14:function(e,t,a){e.exports={header:"Navbar_header__3MDti",title:"Navbar_title__8K2jU",navigation:"Navbar_navigation__1Qfj7",navButton:"Navbar_navButton__g7b-f",checkoutButton:"Navbar_checkoutButton__3_oad",checkoutSection:"Navbar_checkoutSection__3s_xu",itemsCounter:"Navbar_itemsCounter__2w0LZ",user:"Navbar_user__1ZrGf",displayName:"Navbar_displayName__3a1hm",userPhoto:"Navbar_userPhoto__SjvN7",signOut:"Navbar_signOut__2YNSW",hidden:"Navbar_hidden__2wJiR",visible:"Navbar_visible__1qYE6",signOutButn:"Navbar_signOutButn__2jRFX",signOutMenu:"Navbar_signOutMenu__BuAlY",logSection:"Navbar_logSection__3zjGS",signIn:"Navbar_signIn__1r_Ec"}},21:function(e,t,a){e.exports={details:"Details_details__yyPT1",prodImg:"Details_prodImg__uqObu",prodInfo:"Details_prodInfo__1Reib",prodDescr:"Details_prodDescr__R3Y14",backToShop:"Details_backToShop__8Hfqu",buyButton:"Details_buyButton__3y2XC"}},22:function(e,t,a){e.exports={cartDisplay:"Cart_cartDisplay__1xr-j",cartItem:"Cart_cartItem__gv1g7",cartTitle:"Cart_cartTitle__CkH0B",cartPrice:"Cart_cartPrice__1r0ko",cartAmount:"Cart_cartAmount__3TjdK",totalPrice:"Cart_totalPrice__284-K",payButton:"Cart_payButton__26SzW",deleteItem:"Cart_deleteItem__3X4YR"}},38:function(e,t,a){e.exports={Home:"Home_Home__1aUBM",h1:"Home_h1__1QQ5F",p:"Home_p__10w9b"}},43:function(e,t,a){e.exports={categoriesNav:"CategoriesNav_categoriesNav__3kBJK",catButton:"CategoriesNav_catButton__3iTTI"}},46:function(e,t,a){e.exports={shop:"Shop_shop__3N9Go"}},47:function(e,t,a){e.exports={App:"Body_App__H-myo",AppContainer:"Body_AppContainer__1rlSU"}},64:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),s=a(44),r=a.n(s),i=a(27),o=a(26),l=a(9),u=a(12),d=a(10),j=a(14),b=a.n(j),m=a(1);var h=function(e){var t=e.logState,a=e.displayName,n=e.photoURL,s=e.signIn,r=e.signOut,i=Object(c.useState)(!1),o=Object(l.a)(i,2),u=o[0],d=o[1];if(t){var j=a.split(" ")[0];return Object(m.jsxs)("div",{className:b.a.logSection,onClick:function(){console.log("showhide");for(var e=document.getElementById("signOutMenu").children,t=0;t<e.length;t++)setTimeout((function(){d(!u)}),50*t)},children:[Object(m.jsxs)("div",{className:b.a.user,children:[Object(m.jsx)("div",{className:b.a.displayName,children:j}),Object(m.jsx)("button",{className:b.a.signOut,id:"menuButn",children:Object(m.jsx)("img",{src:n,alt:"profile",className:b.a.userPhoto})})]}),Object(m.jsx)("div",{id:"signOutMenu",children:Object(m.jsx)("button",{onClick:r,className:"".concat(b.a.hidden," ").concat(u?b.a.visible:null),children:"Sign out"})})]})}return Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:b.a.signIn,onClick:s,children:"Sign In"})})};var p=function(e){return Object(m.jsxs)("header",{className:b.a.header,children:[Object(m.jsx)("h1",{className:b.a.title,children:"myShop"}),Object(m.jsxs)("nav",{className:b.a.navigation,children:[Object(m.jsx)(u.b,{to:"/",className:b.a.navButton,children:"Home"}),Object(m.jsx)(u.b,{to:"/shop",className:b.a.navButton,children:"Shop"}),Object(m.jsx)(u.b,{to:"/onsale",className:b.a.navButton,children:"On Sale!"})]}),Object(m.jsx)(h,{displayName:e.displayName,photoURL:e.photoURL,signIn:e.signIn,signOut:e.signOut,logState:e.logState}),Object(m.jsxs)(u.b,{to:"/cart",className:b.a.checkoutSection,children:[Object(m.jsx)("div",{className:b.a.checkoutButton,children:Object(m.jsx)("i",{className:"fas fa-shopping-cart"})}),Object(m.jsx)("div",{className:b.a.itemsCounter,children:e.cartCounter})]})]})},O=a(38),_=a.n(O);var f=function(){return Object(m.jsxs)("div",{className:_.a.Home,children:[Object(m.jsx)("h1",{className:_.a.h1,children:"Welcome to myShop!"}),Object(m.jsxs)("p",{className:_.a.p,children:["Click ",Object(m.jsx)(u.b,{to:"/shop",children:"here"})," to start. Or check our products ",Object(m.jsx)(u.b,{to:"/onsale",children:"On sale"}),"!"]})]})},x=a(29),v=a(43),g=a.n(v);var N=function(e){return Object(m.jsx)("nav",{className:g.a.categoriesNav,children:e.categories.map((function(t){return Object(m.jsxs)("label",{className:g.a.catButton,children:[t.label,Object(m.jsx)("input",{type:"checkbox",name:t.name,onChange:e.handleChange,checked:e.checkedItems[t.name]})]},t.key)}))})},y=a(19),I=a.n(y),C=a(23),S=a(8),k=a.n(S);var B=function(e){var t=e.checkedItems;return Object.values(t).every((function(e){return!1===e}))?Object(m.jsxs)("div",{className:k.a.ChooseCategory,children:[Object(m.jsx)("h1",{className:k.a.h1,children:"Choose a category to start shopping."}),Object(m.jsxs)("p",{className:k.a.p,children:["Or check our products ",Object(m.jsx)(u.b,{to:"/onsale",children:"On sale"}),"!"]})]}):null};var D=function(e){var t=Object(c.useState)([]),a=Object(l.a)(t,2),n=a[0],s=a[1];return Object(c.useEffect)((function(){var e=new AbortController,t=e.signal;return Object(C.a)(I.a.mark((function e(){var a,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products",{signal:t});case 2:return a=e.sent,e.next=5,a.json();case 5:c=e.sent,s(c);case 7:case"end":return e.stop()}}),e)})))(),function(){e.abort()}}),[]),Object(m.jsxs)("div",{className:k.a.ItemsDisplay,children:[n.map((function(t){return e.checkedItems[t.category]?Object(m.jsxs)("div",{className:k.a.Item,children:[Object(m.jsx)("img",{alt:t.title,src:t.image,className:k.a.ItemPhoto}),Object(m.jsxs)("h2",{className:k.a.price,children:["$",t.price.toFixed(2)]}),Object(m.jsx)("h3",{className:k.a.ItemTitle,children:t.title}),Object(m.jsxs)("div",{className:k.a.itemButtons,children:[Object(m.jsx)(u.b,{to:{pathname:"/shop/".concat(t.id),state:{title:t.title,price:t.price,description:t.description,image:t.image,id:t.id}},className:k.a.detailButton,children:"Details"}),Object(m.jsx)("button",{className:k.a.buyButton,onClick:e.addProd,id:t.id,children:"Add to Cart"})]})]},t.id):null})),Object(m.jsx)(B,{checkedItems:e.checkedItems})]})},P=a(46),w=a.n(P);var A=function(e){var t=e.addProd,a=[{name:"electronics",key:"electronics",label:"Electronics"},{name:"jewelery",key:"jewlery",label:"Jewlery"},{name:"men's clothing",key:"men's clothing",label:"Masculine Clothing"},{name:"women's clothing",key:"women's clothing",label:"Feminin Clothing"}],n=Object(c.useState)((function(){var e=a.map((function(e){return Object(x.a)({},e.name,!0)}));return Object.assign.apply(Object,[{}].concat(Object(o.a)(e)))})),s=Object(l.a)(n,2),r=s[0],u=s[1];return Object(m.jsxs)("div",{className:w.a.shop,children:[Object(m.jsx)(N,{handleChange:function(e){u(Object(i.a)(Object(i.a)({},r),{},Object(x.a)({},e.target.name,e.target.checked)))},checkedItems:r,categories:a}),Object(m.jsx)(D,{checkedItems:r,addProd:t})]})},T=a(70),E=a(68),H=a(67),M=a(69);var R=function(e){var t=e.addProd,a=Object(c.useState)([]),n=Object(l.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)(),o=Object(l.a)(i,2),d=o[0],j=o[1];Object(c.useEffect)((function(){return setInterval((function(){j((function(){var e=new Date,t=Object(T.a)(e,1).setHours(0,0,0,0),a=Object(E.a)({start:e,end:t});return Object(H.a)(a,{format:["days","hours","minutes","seconds"]})}))}))}),[]);var b=new Date,h=Object(T.a)(b,1).setHours(0,0,0,0),p=Object(M.a)(h,"dd/MM");return Object(c.useEffect)((function(){var e=new AbortController,t=e.signal;return function(){var e=Object(C.a)(I.a.mark((function e(){var a,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products",{signal:t});case 2:return a=e.sent,e.next=5,a.json();case 5:c=e.sent,r(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){e.abort()}}),[]),Object(m.jsxs)("div",{className:k.a.OnSale,children:[Object(m.jsxs)("div",{className:k.a.dateOnSale,children:["Products on sale until ",Object(m.jsx)("br",{}),p,"\ud83d\udd25",Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:k.a.timeCounter,children:[d," to go!"]})]}),Object(m.jsx)("div",{className:k.a.ItemsDisplay,children:s.map((function(e){return e.price<50?Object(m.jsxs)("div",{className:k.a.Item,children:[Object(m.jsx)("img",{alt:e.title,src:e.image,className:k.a.ItemPhoto}),Object(m.jsxs)("h2",{className:k.a.price,children:["$",e.price.toFixed(2)]}),Object(m.jsx)("h3",{className:k.a.ItemTitle,children:e.title}),Object(m.jsxs)("div",{className:k.a.itemButtons,children:[Object(m.jsx)(u.b,{to:{pathname:"/shop/".concat(e.id),state:{title:e.title,price:e.price,description:e.description,image:e.image,id:e.id}},className:k.a.detailButton,children:"Details"}),Object(m.jsx)("button",{className:k.a.buyButton,onClick:t,id:e.id,children:"Add to cart"})]})]},e.id):null}))})]})},U=a(21),F=a.n(U);var J=function(e){var t=e.addProd,a=Object(c.useState)({}),n=Object(l.a)(a,2),s=n[0],r=n[1],i=Object(d.f)().id;return Object(c.useEffect)((function(){var e=new AbortController,t=e.signal;return Object(C.a)(I.a.mark((function e(){var a,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products/".concat(i),{signal:t});case 2:return a=e.sent,e.next=5,a.json();case 5:c=e.sent,r(c);case 7:case"end":return e.stop()}}),e)})))(),function(){e.abort()}}),[i]),Object(m.jsxs)("div",{className:F.a.details,children:[Object(m.jsx)("img",{src:s.image,alt:s.title,className:F.a.prodImg}),Object(m.jsx)("div",{children:Object(m.jsx)(u.b,{to:"/shop",className:F.a.backToShop,children:"Back to Shop"})}),Object(m.jsxs)("div",{className:F.a.prodInfo,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:F.a.prodTitle,children:s.title}),Object(m.jsx)("button",{className:F.a.buyButton,onClick:t,id:s.id,children:"Add to Cart"})]}),Object(m.jsxs)("h2",{className:F.a.prodPrice,children:["$",s.price]}),Object(m.jsx)("p",{className:F.a.prodDescr,children:s.description})]})]})},K=a(22),L=a.n(K);var G=function(e){var t=e.cart,a=e.removeProd,n=Object(c.useState)([]),s=Object(l.a)(n,2),r=s[0],i=s[1],u=Object(c.useState)(0),d=Object(l.a)(u,2),j=d[0],b=d[1];return Object(c.useEffect)((function(){if(i([]),t.length>0)t.map(function(){var e=Object(C.a)(I.a.mark((function e(t){var a,c,n,s;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new AbortController,c=a.signal,e.next=4,fetch("https://fakestoreapi.com/products/".concat(t.id),{signal:c});case 4:return n=e.sent,e.next=7,n.json();case 7:return(s=e.sent).amount=t.amount,i((function(e){return[].concat(Object(o.a)(e),[s])})),e.abrupt("return",(function(){a.abort()}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());else if(0===t.length)return null}),[t]),Object(c.useEffect)((function(){r.length>0?b((function(){return r.reduce((function(e,t){return e+t.price*t.amount}),0).toFixed(2)})):b(0)}),[r]),Object(m.jsxs)("div",{className:L.a.cartDisplay,children:[r.map((function(e){return Object(m.jsxs)("div",{className:L.a.cartItem,children:[Object(m.jsx)("h1",{className:L.a.cartTitle,children:e.title}),Object(m.jsxs)("h2",{className:L.a.cartPrice,children:["$",e.price.toFixed(2)]}),Object(m.jsxs)("div",{className:L.a.cartAmount,children:["X ",e.amount]}),Object(m.jsx)("button",{className:L.a.deleteItem,onClick:a,id:e.id,"data-amount":e.amount,children:Object(m.jsx)("i",{className:"far fa-trash-alt"})})]},e.id)})),Object(m.jsxs)("div",{className:L.a.totalPrice,children:["Total: $",j]}),Object(m.jsx)("button",{className:L.a.payButton,children:"Checkout"})]})},z=a(33);a(61),a(65);z.a.initializeApp({apiKey:"AIzaSyA3JD4hGy5oE0gP7dC94cMfSL_WBjqlCrs",authDomain:"myshop-fl-martin.firebaseapp.com",projectId:"myshop-fl-martin",storageBucket:"myshop-fl-martin.appspot.com",messagingSenderId:"765268810851",appId:"1:765268810851:web:7dac2a34f89eeee286ac56"});var W=z.a.auth(),X=z.a.firestore(),Y=new z.a.auth.GoogleAuthProvider;Y.setCustomParameters({prompt:"select_account"});var $=a(47),q=a.n($);var Q=function(){var e=Object(c.useState)(0),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)([]),r=Object(l.a)(s,2),j=r[0],b=r[1],h=Object(c.useState)(null),O=Object(l.a)(h,2),_=O[0],x=O[1],v=Object(c.useState)(null),g=Object(l.a)(v,2),N=g[0],y=g[1],I=Object(c.useState)(),C=Object(l.a)(I,2),S=(C[0],C[1]),k=Object(c.useState)(),B=Object(l.a)(k,2),D=B[0],P=B[1],w=Object(c.useState)(!1),T=Object(l.a)(w,2),E=T[0],H=T[1],M=function(e){e?(x(e.displayName),y(e.photoURL),S(e.uid),P(e.email),H(!0)):H(!1)};W.onAuthStateChanged(M),Object(c.useEffect)((function(){E?X.collection("carts").doc(D).get().then((function(e){e.data()&&(b(e.data().cart),n(e.data().cart.reduce((function(e,t){return e+t.amount}),0)))})):E||(b([]),n(0))}),[E,D]),Object(c.useEffect)((function(){E&&X.collection("carts").doc(D).set({cart:j})}),[j,D]);var U=function(e){if(n((function(){return a+1})),j.every((function(t){return t.id!==e.target.id})))b([].concat(Object(o.a)(j),[{id:e.target.id,amount:1}]));else{var t=j.findIndex((function(t){return t.id===e.target.id})),c=j[t].id;b(j.map((function(e){return e.id===c?Object(i.a)(Object(i.a)({},e),{},{amount:e.amount+1}):e})))}};return Object(m.jsx)(u.a,{children:Object(m.jsxs)("div",{className:q.a.App,children:[Object(m.jsx)(p,{cartCounter:a,signIn:function(){W.signInWithPopup(Y)},signOut:function(){W.signOut()},displayName:_,photoURL:N,logState:E}),Object(m.jsxs)(d.c,{children:[Object(m.jsx)(d.a,{exact:!0,path:"/",component:f}),Object(m.jsx)(d.a,{exact:!0,path:"/shop",children:Object(m.jsx)(A,{addProd:U})}),Object(m.jsx)(d.a,{path:"/onsale",children:Object(m.jsx)(R,{addProd:U})}),Object(m.jsx)(d.a,{path:"/shop/:id",children:Object(m.jsx)(J,{addProd:U})}),Object(m.jsx)(d.a,{path:"/cart",children:Object(m.jsx)(G,{cart:j,removeProd:function(e){n((function(){return a-1*e.target.dataset.amount})),b((function(){return j.filter((function(t){return t.id!==e.target.id}))}))}})})]})]})})};r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(Q,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={ItemsDisplay:"ItemsDisplay_ItemsDisplay__1i6uu",Item:"ItemsDisplay_Item__3z-Sd",ItemPhoto:"ItemsDisplay_ItemPhoto__1w0Ci",ItemTitle:"ItemsDisplay_ItemTitle__3gxQl",price:"ItemsDisplay_price__1-bZ1",itemButtons:"ItemsDisplay_itemButtons__3KaP5",detailButton:"ItemsDisplay_detailButton__301TP",buyButton:"ItemsDisplay_buyButton__eS7Mt",ChooseCategory:"ItemsDisplay_ChooseCategory__1ni55",h1:"ItemsDisplay_h1__3IX9O",p:"ItemsDisplay_p__2KC6R",OnSale:"ItemsDisplay_OnSale__1Gico",dateOnSale:"ItemsDisplay_dateOnSale__2gNtu",timeCounter:"ItemsDisplay_timeCounter__36SJi"}}},[[64,1,2]]]);
//# sourceMappingURL=main.facef234.chunk.js.map