(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["layout-components-AppLocale-vue"],{"55be":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("v-select",{staticClass:"ml-2",attrs:{dense:"",solo:"",items:e.AllLocales,"hide-details":"","return-object":""},scopedSlots:e._u([{key:"selection",fn:function(t){var a=t.item;return[l("flag",{attrs:{iso:a.flag}}),l("span",{staticClass:"ml-2"},[e._v(e._s(a.name))])]}},{key:"item",fn:function(t){var a=t.item;return[l("flag",{attrs:{iso:a.flag}}),l("span",{staticClass:"ml-2"},[e._v(" "+e._s(a.name))])]}}]),model:{value:e.currentLocale,callback:function(t){e.currentLocale=t},expression:"currentLocale"}})],1)},c=[],s=l("2f62"),n={computed:{...Object(s["e"])({AllLocales:e=>e.locale.locales}),...Object(s["c"])({getCurrentLocale:"locale/GET_CURRENT_LOCALE"}),currentLocale:{get(){return this.getCurrentLocale},set(e){this.$i18n.locale=e.flag,this.setCurrentLocale(e)}}},methods:{...Object(s["d"])({setCurrentLocale:"locale/SET_CURRENT_LOCALE"})}},o=n,r=l("2877"),u=l("6544"),i=l.n(u),f=l("b974"),L=Object(r["a"])(o,a,c,!1,null,null,null);t["default"]=L.exports;i()(L,{VSelect:f["a"]})}}]);
//# sourceMappingURL=layout-components-AppLocale-vue.826f41db.js.map