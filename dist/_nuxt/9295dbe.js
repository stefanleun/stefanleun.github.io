(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{209:function(t){t.exports=JSON.parse('{"Skillset":{"Sprachen":{"Deutsch":"Muttersprache","Englisch":"Verhandlungssicher","Französisch":"Grundkenntnisse"},"Programmiersprachen":{"Python":3,"C++":2,"Java":1},"Bibliotheken":{"Django":3,"Pandas":3,"Numpy":3,"SciPy":3,"Matplotlib":3,"scikit-learn":2},"Tools":{"git":3,"Jupyter":3,"docker":2,"Unix":3,"SQL":3}},"Kurzbeschreibung":"Consectetur odit ipsa ducimus veritatis in Quisquam labore nesciunt modi unde suscipit molestiae. Facere veniam illo magnam amet saepe possimus quo Incidunt obcaecati accusantium reiciendis provident quae! Modi impedit itaque veritatis voluptate excepturi fugit reiciendis Ea ducimus quasi excepturi quisquam perspiciatis in sequi Eveniet blanditiis ipsa laborum iste dolorum? Eius ipsum voluptatibus quia officia dolor. Consequatur minima repudiandae nam libero soluta voluptate Debitis ex aliquid maxime mollitia ipsam modi maxime","Beschreibung":"Als Data Scientist, Web-Entwickler und Unternehmensberater unterstütze ich meine Kunden bei der Konzeptionierung und Implementierung datengetriebener Lösungen.","Grad":"M. Sc. Physik","Standort":"Stuttgart","Portfolio":[{"title":"Datenanalyse","descr":"2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.","icon":"pulse"},{"title":"Datenvisualisierung","descr":"(PowerBI, Python Stack, + Aufbereitung …) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.","icon":"bar-chart"},{"title":"Algorithmenentwicklung","descr":"7Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.","icon":"shuffle"},{"title":"Webentwicklung","descr":"Full-Stack, Datenbankmodellierung - 4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.","icon":"code-slash"},{"title":"Machine Learning","descr":"1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.","icon":"cog"},{"title":"Agiles Projektmanagement","descr":"9Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.","icon":"people"},{"title":"Modellentwicklung","descr":"(Stochastische) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.","icon":"analytics"},{"title":"Digitalisierungsberatung im Tax & Law-Umfeld","descr":"0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.","icon":"trail-sign"}]}')},214:function(t,e,n){var content=n(224);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("bff425ac",content,!0,{sourceMap:!1})},215:function(t,e,n){var content=n(226);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("1643046a",content,!0,{sourceMap:!1})},223:function(t,e,n){"use strict";var o=n(214);n.n(o).a},224:function(t,e,n){(e=n(14)(!1)).push([t.i,".portfolio-tiles{flex-wrap:wrap}",""]),t.exports=e},225:function(t,e,n){"use strict";var o=n(215);n.n(o).a},226:function(t,e,n){(e=n(14)(!1)).push([t.i,"ion-icon[data-v-fc6fe47c]{color:#276591}",""]),t.exports=e},240:function(t,e,n){"use strict";n.r(e);var o={props:{title:String,description:String,icon:String}},r=(n(225),n(6)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tile is-4 is-parent"},[e("div",{staticClass:"tile is-child box"},[e("span",{staticClass:"icon is-large"},[e("ion-icon",{attrs:{size:"large",name:this.icon}})],1),e("h5",{staticClass:"title is-5"},[this._v(this._s(this.title))]),e("p",[this._v(this._s(this.description))])])])}),[],!1,null,"fc6fe47c",null);e.default=component.exports},247:function(t,e,n){"use strict";n.r(e);var o=n(209),r={mounted:function(){this.$store.commit("background/false")},data:function(){return{portfolio:o.Portfolio}}},c=(n(223),n(6)),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",{staticClass:"title"},[this._v("Portfolio")]),e("div",{staticClass:"tile is-ancestor portfolio-tiles"},this._l(this.portfolio,(function(t){return e("PortfolioCard",{key:t.title,attrs:{title:t.title,description:t.descr,icon:t.icon}})})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PortfolioCard:n(240).default})}}]);