(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["creditos","chunk-3913883c"],{"13aa":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container-fluid banner-interno"},[e("div",{staticClass:"banner-interno__fondo",style:{"background-image":`url(${t.globalData.fondoBannerPrincipal})`}}),e("div",{staticClass:"container"},[e("div",{staticClass:"banner-interno__titulo py-5"},[t.icono.length?e("div",{staticClass:"banner-interno__titulo__icono me-3"},[e("i",{class:t.icono})]):t._e(),e("h2",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.titulo)}})])])])},n=[],o={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:()=>({}),computed:{globalData(){return this.$config.global}}},a=o,r=(s("196e"),s("2877")),c=Object(r["a"])(a,i,n,!1,null,null,null);e["default"]=c.exports},"196e":function(t,e,s){"use strict";s("a377")},"2e81":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"curso-main-container creditos-vista"},[e("BannerInterno",{attrs:{icono:"far fa-registered",titulo:"Créditos"}}),e("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[e("div",{staticClass:"creditos mb-4 mb-md-5"},t._l(t.creditosData,(function(s,i){return e("div",{key:"credito-"+i,staticClass:"creditos__item",class:i!=t.creditosData.length-1?"mb-4":""},[e("div",{staticClass:"creditos__titulo"},[t._v(t._s(s.titulo))]),e("table",[e("tbody",t._l(s.autores,(function(s,i){return e("tr",{key:"autor-"+i},[e("td",{staticClass:"text-bold",attrs:{colspan:"2"},domProps:{innerHTML:t._s(t.renderText(s.nombre))}}),e("td",{attrs:{colspan:"2"},domProps:{innerHTML:t._s(t.renderText(s.cargo))}}),e("td",{attrs:{colspan:"3"},domProps:{innerHTML:t._s(t.renderText(s.centro))}})])})),0)])])})),0),e("div",{staticClass:"row mb-4 mb-md-5"},[e("div",{staticClass:"col-md-6 mb-4 mb-md-0"},[e("div",{staticClass:"tarjeta credito p-3 text-center h-100"},[e("img",{staticClass:"d-inline-block",staticStyle:{width:"70px"},attrs:{src:s("ef52")}}),e("p",{domProps:{innerHTML:t._s(t.creditosAdicionales.imagenes)}})])]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"tarjeta credito p-3 text-center h-100"},[e("img",{staticClass:"d-inline-block",staticStyle:{width:"70px"},attrs:{src:s("e1f5")}}),e("p",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.creditosAdicionales.creativeCommons)}})])])]),e("Footer",{attrs:{"all-round":""}})],1)],1)},n=[],o=s("13aa"),a=s("e9c6"),r={name:"Creditos",components:{BannerInterno:o["default"],Footer:a["a"]},data:()=>({configTitulos:{liderEquipo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",contenidoInstruccional:"CONTENIDO INSTRUCCIONAL",desarrolloProducto:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",gestoresRepositorio:"GESTORES DE REPOSITORIO"}}),computed:{creditosData(){return this.$config.creditos},creditosAdicionales(){return this.$config.creditosAdicionales}},methods:{renderText(t){let e="";return Array.isArray(t)?t.forEach((t,s)=>{e+=(s?"<br/>":"")+t}):e+=t,e}}},c=r,l=(s("e07c"),s("2877")),d=Object(l["a"])(c,i,n,!1,null,null,null);e["default"]=d.exports},a377:function(t,e,s){},c8e1:function(t,e,s){},e07c:function(t,e,s){"use strict";s("c8e1")},e1f5:function(t,e,s){t.exports=s.p+"img/creditos-cc.4836eb56.svg"},ef52:function(t,e,s){t.exports=s.p+"img/creditos-img.689712e2.svg"}}]);
//# sourceMappingURL=creditos.33b74974.js.map