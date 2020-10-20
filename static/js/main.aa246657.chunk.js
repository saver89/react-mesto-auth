(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{23:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(18),r=a.n(o),i=(a(28),a(22)),l=a(9),s=a(1),m=a(7),u=a(2);var p=Object(u.h)((function(e){var t="",a="";return"/sign-in"===e.location.pathname?(t="/sign-up",a="\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"):"/sign-up"===e.location.pathname&&(t="/sign-in",a="\u0412\u043e\u0439\u0442\u0438"),c.a.createElement("header",{className:"header"},c.a.createElement("a",{className:"header__logo",href:"/"},"\xa0"),c.a.createElement("div",{className:"header__menu"},e.loggedIn?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"header__user-email"},e.email),c.a.createElement("button",{className:"header__exit-button",onClick:e.handleLogout},"\u0412\u044b\u0439\u0442\u0438")):c.a.createElement(m.b,{className:"header__link",to:t},a)))}));var d=function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))},f=c.a.createContext();var _=function(e){var t=e.card,a=e.onCardClick,o=e.onCardLike,r=e.onCardDelete,i=Object(n.useContext)(f),l=t.owner._id===i._id,s="element__remove ".concat(l?"element__remove_visible":""),m=t.likes.some((function(e){return e._id===i._id})),u="element__like ".concat(m?"element__like_liked":"");return c.a.createElement("figure",{className:"element"},c.a.createElement("div",{className:"element__image-container"},c.a.createElement("img",{className:"element__image",src:t.link,alt:t.name,onClick:function(){a(t)}})),c.a.createElement("div",{className:"element__info-container"},c.a.createElement("h2",{className:"element__name"},t.name),c.a.createElement("div",{className:"element__like-container"},c.a.createElement("button",{className:u,type:"button","aria-label":"\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",onClick:function(){o(t)}}),c.a.createElement("p",{className:"element__like-counter"},t.likes.length))),c.a.createElement("button",{className:s,onClick:function(){r(t)},"aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}))};var h=function(e){var t=Object(n.useContext)(f);return c.a.createElement("main",{className:"main"},c.a.createElement("section",{className:"profile"},c.a.createElement("div",{className:"profile__avatar-container"},c.a.createElement("img",{className:"profile__avatar",src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),c.a.createElement("div",{className:"profile__avatar-layout"},c.a.createElement("button",{className:"profile__avatar-edit",onClick:e.onEditAvatar}))),c.a.createElement("div",{className:"profile__info-container"},c.a.createElement("div",{className:"profile__info"},c.a.createElement("div",{className:"profile__name-container"},c.a.createElement("h1",{className:"profile__name"},t.name),c.a.createElement("button",{className:"profile__edit-button",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:e.onEditProfile})),c.a.createElement("p",{className:"profile__position"},t.about))),c.a.createElement("button",{className:"profile__add-button",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",onClick:e.onAddPlace})),c.a.createElement("section",{className:"elements"},e.cards.map((function(t){return c.a.createElement(_,{card:t,key:t._id,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete})}))))};var E=function(e){return c.a.createElement("div",{className:"popup popup_".concat(e.name," ").concat(e.isOpened?"popup_opened":"")},c.a.createElement("div",{className:"popup__container"},c.a.createElement("button",{type:"button",className:"popup__close-button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose}),c.a.createElement("form",{className:"popup__form-container",name:e.name,onSubmit:e.onSubmit,action:"#",method:"GET",noValidate:!0},c.a.createElement("h2",{className:"popup__title"},e.title),e.children,c.a.createElement("button",{type:"submit",className:"popup__submit-button"},e.closeText))))};var b=function(e){return c.a.createElement("div",{className:"popup popup_image-preview ".concat(e.card?"popup_opened":"")},c.a.createElement("div",{className:"popup__container"},c.a.createElement("button",{type:"button",className:"popup__close-button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose}),c.a.createElement("div",{className:"popup__content-container"},c.a.createElement("figure",{className:"popup__image-preview"},c.a.createElement("img",{className:"popup__image",src:e.card&&e.card.link,alt:e.card&&e.card.name}),c.a.createElement("figcaption",{className:"popup__image-name"},e.card&&e.card.name)))))},g=a(20),v=a(21),N=new(function(){function e(t,a){Object(g.a)(this,e),this._baseUrl=t,this._headers=a}return Object(v.a)(e,[{key:"_fetchApi",value:function(e,t,a,n){var c={method:t,headers:Object(l.a)(Object(l.a)({},this._headers),a)};return n&&(c.body=JSON.stringify(n)),fetch("".concat(this._baseUrl).concat(e),c).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status," - ").concat(e.statusText))}))}},{key:"getInitialsCards",value:function(){return this._fetchApi("/cards","GET")}},{key:"postCard",value:function(e){return this._fetchApi("/cards","POST",{"Content-Type":"application/json"},e)}},{key:"removeCard",value:function(e){return this._fetchApi("/cards/".concat(e),"DELETE")}},{key:"changeLikeCardStatus",value:function(e,t){return t?this._fetchApi("/cards/likes/".concat(e),"PUT"):this._fetchApi("/cards/likes/".concat(e),"DELETE")}},{key:"getUserInfo",value:function(){return this._fetchApi("/users/me","GET")}},{key:"editUserInfo",value:function(e){return this._fetchApi("/users/me","PATCH",{"Content-Type":"application/json"},e)}},{key:"editAvatar",value:function(e){return this._fetchApi("/users/me/avatar","PATCH",{"Content-Type":"application/json"},{avatar:e})}}]),e}())("https://mesto.nomoreparties.co/v1/cohort-13",{authorization:"d0402095-4250-4903-b400-52c8ec468fa5"});var O=function(e){var t=e.isOpen,a=e.onClose,o=e.onUpdateUser,r=Object(n.useState)(""),i=Object(s.a)(r,2),l=i[0],m=i[1],u=Object(n.useState)(""),p=Object(s.a)(u,2),d=p[0],_=p[1],h=Object(n.useContext)(f);return Object(n.useEffect)((function(){m(h.name),_(h.about)}),[h]),c.a.createElement(E,{name:"edit-form",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",closeText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpened:t,onClose:a,onSubmit:function(e){e.preventDefault(),o({name:l,about:d})}},c.a.createElement("fieldset",{className:"popup__fieldset"},c.a.createElement("label",{className:"popup__form-field"},c.a.createElement("input",{className:"popup__input",id:"input-edit-name",name:"name",type:"text",value:l,onChange:function(e){m(e.target.value)},placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",required:!0,pattern:"[A-Za-z\u0410-\u042f\u0430-\u044f\\s\\-]{1,}"}),c.a.createElement("span",{className:"popup__input-error popup__input-error_active",id:"input-edit-name-error"})),c.a.createElement("label",{className:"popup__form-field"},c.a.createElement("input",{className:"popup__input",id:"input-edit-position",name:"about",value:d,onChange:function(e){_(e.target.value)},type:"text",placeholder:"\u0420\u043e\u0434 \u0437\u0430\u043d\u044f\u0442\u0438\u0439",minLength:"2",maxLength:"200",required:!0}),c.a.createElement("span",{className:"popup__input-error popup__input-error_active",id:"input-edit-position-error"}))))};var j=function(e){var t=e.isOpen,a=e.onClose,o=e.onUpdateAvatar,r=Object(n.useContext)(f),i=Object(n.useRef)();return Object(n.useEffect)((function(){i.current.value=r.avatar}),[r]),c.a.createElement(E,{name:"update-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",closeText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpened:t,onClose:a,onSubmit:function(e){e.preventDefault(),o({avatar:i.current.value})}},c.a.createElement("fieldset",{className:"popup__fieldset"},c.a.createElement("label",{className:"popup__form-field"},c.a.createElement("input",{className:"popup__input",name:"link",type:"url",ref:i,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0}),c.a.createElement("span",{className:"popup__input-error"}))))};var C=function(e){var t=e.isOpen,a=e.onClose,o=e.onAddPlace,r=Object(n.useState)(""),i=Object(s.a)(r,2),l=i[0],m=i[1],u=Object(n.useState)(""),p=Object(s.a)(u,2),d=p[0],f=p[1];return c.a.createElement(E,{name:"add-form",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",closeText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpened:t,onClose:a,onSubmit:function(e){e.preventDefault(),o({name:l,link:d})}},c.a.createElement("fieldset",{className:"popup__fieldset"},c.a.createElement("label",{className:"popup__form-field"},c.a.createElement("input",{className:"popup__input",name:"name",type:"text",value:l,onChange:function(e){m(e.target.value)},placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",required:!0}),c.a.createElement("span",{className:"popup__input-error"})),c.a.createElement("label",{className:"popup__form-field"},c.a.createElement("input",{className:"popup__input",name:"link",type:"url",value:d,onChange:function(e){f(e.target.value)},placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),c.a.createElement("span",{className:"popup__input-error"}))))},k="https://auth.nomoreparties.co";var S=function(e){return c.a.createElement("form",{className:"sign-form",name:e.name,onSubmit:e.onSubmit,action:"#",method:"GET",noValidate:!0},c.a.createElement("div",{className:"sign-form__container"},c.a.createElement("h2",{className:"sign-form__title"},e.title),e.children),c.a.createElement("div",{className:"sign-form__bottom-container"},c.a.createElement("button",{type:"submit",className:"sign-form__submit-button"},e.submitText),e.hint))};var y=function(e){var t=Object(u.g)(),a=Object(n.useState)(""),o=Object(s.a)(a,2),r=o[0],i=o[1],l=Object(n.useState)(""),p=Object(s.a)(l,2),d=p[0],f=p[1],_=c.a.createElement("div",{className:"sign-form__transition-hint"},"\u0415\u0449\u0451 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"," ",c.a.createElement(m.b,{className:"sign-form__link",to:"/sign-up"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"));return c.a.createElement(S,{name:"sign-in",onSubmit:function(a){a.preventDefault(),r&&d?function(e,t){return fetch("".concat(k,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return e.json()})).then((function(e){return e.token&&localStorage.setItem("token",e.token),e}))}(d,r).then((function(a){a.token?(e.handleLogin(),t.push("/")):e.handleLoginFailed()})).catch((function(t){console.log(t),e.handleLoginFailed()})):e.handleLoginFailed()},title:"\u0412\u0445\u043e\u0434",submitText:"\u0412\u043e\u0439\u0442\u0438",hint:_},c.a.createElement("label",{className:"sign-form__field"},c.a.createElement("input",{className:"sign-form__input",id:"input-sign-email",name:"email",type:"email",value:r,onChange:function(e){i(e.target.value)},placeholder:"Email",required:!0}),c.a.createElement("span",{className:"sign-form__input-error sign-form__input-error_active",id:"input-edit-name-error"})),c.a.createElement("label",{className:"sign-form__field"},c.a.createElement("input",{className:"sign-form__input",id:"input-sign-password",name:"password",type:"password",value:d,onChange:function(e){f(e.target.value)},placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0})))};var T=function(e){var t=e.registerHandler,a=Object(n.useState)(""),o=Object(s.a)(a,2),r=o[0],i=o[1],l=Object(n.useState)(""),u=Object(s.a)(l,2),p=u[0],d=u[1],f=c.a.createElement("div",{className:"sign-form__transition-hint"},"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"," ",c.a.createElement(m.b,{className:"sign-form__link",to:"/sign-in"},"\u0412\u043e\u0439\u0442\u0438"));return c.a.createElement(S,{name:"sign-in",onSubmit:function(e){e.preventDefault(),function(e,t){return fetch("".concat(k,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return e.json()})).then((function(e){return e}))}(p,r).then((function(e){e.data?t(!0):t(!1)})).catch((function(){t(!1)}))},title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",submitText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",hint:f},c.a.createElement("label",{className:"sign-form__field"},c.a.createElement("input",{className:"sign-form__input",id:"input-sign-email",name:"email",type:"email",value:r,onChange:function(e){i(e.target.value)},placeholder:"Email",required:!0}),c.a.createElement("span",{className:"sign-form__input-error sign-form__input-error_active",id:"input-edit-name-error"})),c.a.createElement("label",{className:"sign-form__field"},c.a.createElement("input",{className:"sign-form__input",id:"input-sign-password",name:"password",type:"password",value:p,onChange:function(e){d(e.target.value)},placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,minLength:"2",maxLength:"32"})))},A=function(e){return console.log(e),c.a.createElement(u.b,null,(function(){return e.loggedIn?e.component:c.a.createElement(u.a,{to:"/sign-in"})}))};var x=function(e){var t=Object(u.g)(),a=e.isSuccess?"check.svg":"cross.svg",n=e.isSuccess?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0448\u043b\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a",o=e.isSuccess?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.";function r(){e.onClose(),e.isSuccess&&t.push("/sign-in")}return c.a.createElement("div",{className:"popup popup_after-sign ".concat(e.isOpen?"popup_opened":"")},c.a.createElement("div",{className:"popup__container"},c.a.createElement("button",{type:"button",className:"popup__close-button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:r}),c.a.createElement("form",{className:"popup__form-container",name:"after-sign",onSubmit:r,action:"#",method:"GET",noValidate:!0},c.a.createElement("img",{className:"popup__sign-image",src:"".concat("/react-mesto-auth","/").concat(a),alt:n}),c.a.createElement("h2",{className:"popup__text"},o))))};var L=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),o=a[0],r=a[1],m=Object(n.useState)(!1),_=Object(s.a)(m,2),g=_[0],v=_[1],S=Object(n.useState)(!1),L=Object(s.a)(S,2),w=L[0],I=L[1],P=Object(n.useState)(),U=Object(s.a)(P,2),D=U[0],q=U[1],F=Object(n.useState)({_id:"",name:"",avatar:"",about:""}),G=Object(s.a)(F,2),J=G[0],H=G[1],z=Object(n.useState)([]),B=Object(s.a)(z,2),V=B[0],M=B[1],R=Object(n.useState)(!1),W=Object(s.a)(R,2),Z=W[0],$=W[1],K=Object(n.useState)(!1),Q=Object(s.a)(K,2),X=Q[0],Y=Q[1],ee=Object(n.useState)(!1),te=Object(s.a)(ee,2),ae=te[0],ne=te[1],ce=Object(n.useState)(""),oe=Object(s.a)(ce,2),re=oe[0],ie=oe[1],le=Object(u.g)();function se(){r(!1),v(!1),I(!1),q(null)}function me(e){Y(!0),ne(e)}Object(n.useEffect)((function(){localStorage.getItem("token")&&function(e){return fetch("".concat(k,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).then((function(e){return e}))}(localStorage.getItem("token")).then((function(e){e.data&&($(!0),ie(e.data.email),le.push("/"))})).catch((function(e){return console.log(e)}))}),[]),Object(n.useEffect)((function(){Z&&N.getInitialsCards().then((function(e){M(e)})).catch((function(e){console.error(e)}))}),[Z]),Object(n.useEffect)((function(){Z&&N.getUserInfo().then((function(e){H(e)})).catch((function(e){console.error(e)}))}),[Z]),console.log(Z);var ue=c.a.createElement(c.a.Fragment,null,c.a.createElement(h,{cards:V,onEditProfile:function(){r(!0)},onAddPlace:function(){v(!0)},onEditAvatar:function(){I(!0)},onCardClick:function(e){q(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===J._id}));N.changeLikeCardStatus(e._id,!t).then((function(t){var a=V.map((function(a){return a._id===e._id?t:a}));M(a)})).catch((function(e){console.error(e)}))},onCardDelete:function(e){N.removeCard(e._id).then((function(){var t=V.filter((function(t){return t._id!==e._id}));M(t)})).catch((function(e){console.error(e)}))}}),c.a.createElement(O,{isOpen:o,onClose:se,onUpdateUser:function(e){N.editUserInfo(e).then((function(){var t=Object(l.a)({},J);t.name=e.name,t.about=e.about,H(Object(l.a)({},t)),r(!1)})).catch((function(e){console.err(e)}))}}),c.a.createElement(C,{isOpen:g,onClose:se,onAddPlace:function(e){N.postCard(e).then((function(e){M([].concat(Object(i.a)(V),[e])),v(!1)})).catch((function(e){console.error(e)}))}}),c.a.createElement(j,{isOpen:w,onClose:se,onUpdateAvatar:function(e){var t=e.avatar;N.editAvatar(t).then((function(e){H(e),I(!1)})).catch((function(e){console.error(e)}))}}),c.a.createElement(E,{name:"confirm-form",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b",closeText:"\u0414\u0430",onClose:se}),c.a.createElement(b,{card:D,onClose:se}),c.a.createElement(d,null));return c.a.createElement(f.Provider,{value:J},c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"container"},c.a.createElement(p,{loggedIn:Z,email:re,handleLogout:function(){$(!1),localStorage.removeItem("token")}}),c.a.createElement(u.d,null,c.a.createElement(u.b,{path:"/sign-up"},c.a.createElement(T,{registerHandler:me})),c.a.createElement(u.b,{path:"/sign-in"},c.a.createElement(y,{handleLogin:function(){$(!0)},handleLoginFailed:function(){me(!1)}})),c.a.createElement(A,{path:"/",loggedIn:Z,component:ue}),c.a.createElement(u.b,{path:"*"},Z?c.a.createElement(u.a,{to:"/"}):c.a.createElement(u.a,{to:"/sign-in"}))),c.a.createElement(x,{isOpen:X,onClose:function(){Y(!1)},isSuccess:ae}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m.a,{basename:"/react-mesto-auth"},c.a.createElement(L,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.aa246657.chunk.js.map