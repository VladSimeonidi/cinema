(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["layout-layouts-default-vue","layout-components-AppLocale-vue"],{"3e14":function(t,e,a){"use strict";a("867b")},"55be":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-select",{staticClass:"ml-2",attrs:{dense:"",solo:"",items:t.AllLocales,"hide-details":"","return-object":""},scopedSlots:t._u([{key:"selection",fn:function(e){var l=e.item;return[a("flag",{attrs:{iso:l.flag}}),a("span",{staticClass:"ml-2"},[t._v(t._s(l.name))])]}},{key:"item",fn:function(e){var l=e.item;return[a("flag",{attrs:{iso:l.flag}}),a("span",{staticClass:"ml-2"},[t._v(" "+t._s(l.name))])]}}]),model:{value:t.currentLocale,callback:function(e){t.currentLocale=e},expression:"currentLocale"}})],1)},n=[],s=a("2f62"),o={computed:{...Object(s["e"])({AllLocales:t=>t.locale.locales}),...Object(s["c"])({getCurrentLocale:"locale/GET_CURRENT_LOCALE"}),currentLocale:{get(){return this.getCurrentLocale},set(t){this.$i18n.locale=t.flag,this.setCurrentLocale(t)}}},methods:{...Object(s["d"])({setCurrentLocale:"locale/SET_CURRENT_LOCALE"})}},r=o,i=a("2877"),c=a("6544"),u=a.n(c),m=a("b974"),d=Object(i["a"])(r,l,n,!1,null,null,null);e["default"]=d.exports;u()(d,{VSelect:m["a"]})},"7b3d":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.user?a("v-app",[a("v-app-bar",{attrs:{dense:"",dark:"",app:""}},[a("myLocale",{staticClass:"langSelect"}),a("v-spacer"),a("v-btn",{attrs:{title:"Фильмы",to:{name:"films"},icon:""},on:{click:t.resetFilmStoreState}},[a("v-icon",[t._v("mdi-movie")])],1),t.admin&&"editfilm"!=t.$route.name?a("v-btn",{attrs:{color:"cyan lighten-2",title:"Добавить фильм",to:{name:"editfilm",params:{id:"new"}},icon:""}},[a("v-icon",[t._v("mdi-library-plus")])],1):t._e(),a("v-btn",{attrs:{title:"Профиль",to:{name:"profile"},icon:""}},[a("v-icon",[t._v("mdi-face")])],1),a("v-btn",{attrs:{title:"Logout",icon:""},on:{click:t.logoutUser}},[a("v-icon",[t._v("mdi-logout")])],1)],1),a("v-alert",{staticClass:"pos-abs",attrs:{border:"left","close-text":"закрыть",color:"deep-purple accent-4",dark:"",dismissible:""},model:{value:t.alert,callback:function(e){t.alert=e},expression:"alert"}},[t._v(" Вы администратор, но зашли как обычный пользователь ")]),a("vue-page-transition",{attrs:{name:"fade"}},[a("router-view")],1)],1):t._e()},n=[],s=a("2f62"),o=a("55be"),r={data(){return{alert:!1,user:null,admin:null}},components:{myLocale:o["default"]},methods:{...Object(s["b"])({Logout:"auth/LOGOUT",GetProfile:"auth/GET_PROFILE",reserFilmState:"film/RESET_STATE"}),async logoutUser(){const t=await this.$confirm("Выйти из учетной записи и перейти на страницу логина?",{title:"Выйти",color:"primary",buttonTrueText:"Покинуть",buttonFalseText:"Нет",icon:"mdi-logout"});t&&this.Logout()},resetFilmStoreState(){this.reserFilmState()}},created(){this.GetProfile().then(t=>{this.user=t.user,this.admin=t.admin,!this.admin&&this.user.isAdmin&&(this.alert=!0)})}},i=r,c=(a("3e14"),a("2877")),u=a("6544"),m=a.n(u),d=a("0798"),p=a("7496"),f=a("40dc"),v=a("8336"),b=a("132d"),h=a("2fa4"),L=Object(c["a"])(i,l,n,!1,null,null,null);e["default"]=L.exports;m()(L,{VAlert:d["a"],VApp:p["a"],VAppBar:f["a"],VBtn:v["a"],VIcon:b["a"],VSpacer:h["a"]})},"867b":function(t,e,a){}}]);
//# sourceMappingURL=layout-layouts-default-vue.06509dda.js.map