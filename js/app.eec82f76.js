(function(e){function t(t){for(var a,o,r=t[0],l=t[1],c=t[2],p=0,u=[];p<r.length;p++)o=r[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(u.length)u.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],a=!0,r=1;r<i.length;r++){var l=i[r];0!==n[l]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=i[0]))}return e}var a={},n={app:0},s=[];function o(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=a,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(i,a,function(t){return e[t]}.bind(null,a));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/test/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=l;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var a=i("85ec"),n=i.n(a);n.a},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("Landing")],1)},s=[],o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-page"},[i("div",{staticClass:"cover-section container"},[i("div",{staticClass:"content-wrapper offset-lg-3 col-lg-6"},[i("h4",{domProps:{innerHTML:e._s(e.content.toptitle)}}),i("h1",{domProps:{innerHTML:e._s(e.content.title_one)}}),i("h1",{domProps:{innerHTML:e._s(e.content.title_two)}}),i("h3",{domProps:{innerHTML:e._s(e.content.subtitle)}})])]),i("div",{staticClass:"nav"},e._l(e.content.nav,(function(t,a){return i("div",{key:a,class:["element",{selected:t===e.currentSection}],on:{click:function(i){return e.scrollTo(t)}}},[i("h3",[e._v(e._s(t))])])})),0),e._l(e.content.sections,(function(t,a){return i("div",{key:a},["background"===t.type?i("div",{staticClass:"background"},e._l(t.sections,(function(t,a){return i("div",{key:a,staticClass:"container"},["title"===t.type?i("div",{staticClass:"title"},[i("span",{staticClass:"offset-lg-3 col-lg-6",domProps:{innerHTML:e._s(t.text)}})]):e._e(),"paragraph"===t.type?i("div",{staticClass:"section"},[i("h2",{staticClass:"offset-lg-3 col-lg-6",domProps:{innerHTML:e._s(t.title)}}),i("p",{staticClass:"offset-lg-3 col-lg-6",domProps:{innerHTML:e._s(t.text)}})]):e._e(),"image"===t.type&&"jpg"===t.format?i("div",{staticClass:"section offset-lg-2 col-lg-8"},[i("img",{attrs:{src:e.publicPath+"img/"+t.name+"."+t.format}})]):e._e(),"dida"===t.type?i("div",{staticClass:"dida"},[i("h3",{staticClass:"offset-lg-3 col-lg-6",domProps:{innerHTML:e._s(t.content)}})]):e._e()])})),0):e._e(),i("div",{staticClass:"container"},["anchor"===t.type?i("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:function(i,a){return e.visibilityChanged(i,a,t.content)},expression:"\n          (isVisible, entry) =>\n            visibilityChanged(isVisible, entry, section.content)\n        "}],attrs:{id:t.content}}):e._e(),"paragraph"===t.type?i("div",{staticClass:"section"},[i("h2",{staticClass:"offset-lg-3 col-lg-6",domProps:{innerHTML:e._s(t.title)}}),i("p",{staticClass:"offset-lg-3 col-lg-6",domProps:{innerHTML:e._s(t.text)}})]):e._e(),"title"===t.type?i("div",{staticClass:"section title"},[i("h1",{staticClass:"offset-lg-3 col-lg-6",domProps:{innerHTML:e._s(t.text)}})]):e._e(),t.pdf?e._e():i("a",{attrs:{href:t.url,target:"_blank"}},["link"===t.type?i("div",{staticClass:"link row"},[i("div",{staticClass:"text-container col-md-8 offset-lg-3 col-lg-4"},[i("h3",{staticClass:"name",domProps:{innerHTML:e._s(t.name)}}),t.subtitle?i("h3",{domProps:{innerHTML:e._s(t.subtitle)}}):e._e()]),i("div",{staticClass:"img-container col-md-4 col-lg-2"},[i("img",{attrs:{src:e.publicPath+"img/arrow.svg"}})])]):e._e()]),t.pdf?i("a",{attrs:{href:e.publicPath+"docs/"+t.url,target:"_blank"}},["link"===t.type?i("div",{staticClass:"link row"},[i("div",{staticClass:"text-container col-md-8 offset-lg-3 col-lg-4"},[i("h3",{staticClass:"name",domProps:{innerHTML:e._s(t.name)}}),t.subtitle?i("h3",{domProps:{innerHTML:e._s(t.subtitle)}}):e._e()]),i("div",{staticClass:"img-container col-md-4 col-lg-2"},[i("img",{attrs:{src:e.publicPath+"img/arrow.svg"}})])]):e._e()]):e._e(),"image"===t.type&&"svg"===t.format?i("div",{staticClass:"section offset-lg-3 col-lg-6"},[i("img",{attrs:{src:e.publicPath+"img/"+t.name+"."+t.format}})]):e._e(),"image"===t.type&&"jpg"===t.format?i("div",{staticClass:"section offset-lg-2 col-lg-8"},[i("img",{attrs:{src:e.publicPath+"img/"+t.name+"."+t.format}})]):e._e(),"dida"===t.type?i("div",{staticClass:"dida"},[i("h3",{staticClass:"offset-lg-3 col-lg-6",domProps:{innerHTML:e._s(t.content)}})]):e._e()])])})),e._m(0)],2)},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("h3",{staticClass:"credits offset-lg-3 col-lg-6"},[e._v(" designed and developed by Giulia Zerbini. Credits: Zona Kostic ")])])}],l=i("cb7d"),c={data:function(){return{content:l,publicPath:"/test/",currentSection:"info",show:!0,isVisible:!0,throttle:0,threshold:0}},methods:{scrollTo:function(e){location.hash="#"+e,this.currentSection=e},visibilityChanged:function(e,t,i){this.isVisible=e,e&&(this.currentSection=i)}}},d=c,p=(i("6ead"),i("2877")),u=Object(p["a"])(d,o,r,!1,null,"17a332bc",null),h=u.exports,g={components:{Landing:h}},f=g,m=(i("034f"),Object(p["a"])(f,n,s,!1,null,null,null)),v=m.exports,b=i("85fe");a["a"].directive("observe-visibility",b["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(v)}}).$mount("#app")},"6ead":function(e,t,i){"use strict";var a=i("c4f5"),n=i.n(a);n.a},"85ec":function(e,t,i){},c4f5:function(e,t,i){},cb7d:function(e){e.exports=JSON.parse('{"title_one":"The Art and Design","title_two":"of Information","toptitle":"Spring 2019","subtitle":"CSCI E-79 / Harvard Extension School<br>by zona kostic and giulia zerbini ","nav":["info","program","results","staff"],"sections":[{"type":"anchor","content":"info"},{"type":"paragraph","title":"","text":"Complex data has brought into many visual forms in order to facilitate the content understanding. However, not every transformation turned out to be effective. To compose visual message and improve information communication, significant amount of design practice is needed. Information design course introduces the strategies of visual thinking as an efficient method to convey complex data. It covers the fundamentals of visual communication and apply design principles in the context of diverse media. Information design overlaps with another areas such as graphic design, communication design, data visualization, human- computer interaction design, and instructional design. The course combines the best practices from these intersections while focusing on the effectiveness and visual clarity."},{"type":"paragraph","title":"COURSE COMPONENTS","text":"This course includes three major aspects of information visualization: graphics design, interaction design, and visual storytelling. First part of the course introduces students to design techniques as well as to the principles of effective visual communication. Second part of the course focuses on technologies, necessary to transfer designs into data-driven solutions. Before stepping into final projects, third part merges two perviously mentioned components into meaningful data visualization for further analysis and presentation."},{"type":"image","name":"e79_01b","format":"svg"},{"type":"paragraph","text":"Moreover, this course: 1. Introduces the key design and human perception principles 2. Helps students understand the importance of cognition in visualization design 3. Applies structured design process for data exploration, analysis, and storytelling 4. Focuses on tools and available techniques for designing effective visuals 5. Motivates critical evaluation, giving suggestions, and proposing improvements 6. Applies methods for visualization of data from a variety of fields 7. Introduces to a web-based frameworks and libraries for data visualization 8. Emphasizes a constructive work on complex projects as part of the team 9. Motivates creative thinking in challenging scenarios of high-dimensional data 10. Explores different communication spaces (print, phone, desktop, VR, and AR)."},{"type":"paragraph","title":"prerequisites","text":"Some experience in the fundamentals of current web technologies as well as prior work with design tools would be helpful."},{"type":"paragraph","title":"learning outcomes","text":"The main expected learning outcomes are:  effectively use design tools to create attractive visual compositions; create complex and modern infographics and data visualizations; learn and understand the principles of visual comprehension; apply techniques from different design fields; improve creative thinking through design-based learning."},{"type":"anchor","content":"program"},{"type":"title","text":"2019 Program"},{"type":"paragraph","title":"","text":"The course had a weekly schedule. Every week the staff delivered a lecture, a lab and a topic. The lecture were thought by Zona Kostic and explained theoretical concepts, from design principles to coding techniques. Labs were crafted by Giulia Zerbini and their purpose was to guide the students through the data visualization process, from data exploration and sketching to the creation of the final visualization. The lab helped also students to work of their weekly assignment, explained tools interfaces and designing methods. The topics were practical exercises, where the students had to apply everything they learned throughout the week and submit a homework to be reviewed.  The final weeks students were asked to work on a group projects to be presented during the final class."},{"type":"image","name":"e79_02","format":"svg"},{"type":"paragraph","title":"","text":"The first part of the course focused on data exploration and visual thinking - as a tool to explore a dataset and understand possible ways to communicate it -, exploration of visual models and the use of data sketching to explore visualizations options. The second part of the course focused on the use of different tool to produce visualizations, information architecture definition and design techniques to combine multiple visual models in one visualization. The final step of the process consisted on the creation of custom visualizations that combined various visual models and encoded multiple visual variables. The output were either editorial and digital."},{"type":"paragraph","title":"LABS AND TOPICS","text":"Labs helped the students mastering the core skills. They were structured as self-guided tutorials through the process of creating a visualization - from a concept definition to the final design. Following the sequential steps, this process helped them building a basic design skills that could be further improved with a time. The purpose of Labs was to provide practical artistry as well as the guidelines of how to acquire a creative method and produce the final project of the course. The topics were practical exercises, where the students had to apply everything they learned throughout the week and submit a homework to be reviewed.  The final weeks students were asked to work on a group projects to be presented during the final class."},{"type":"link","name":"explore the material 2019","url":"https://github.com/giuliazerbini/e79-2019"},{"type":"paragraph","title":"","text":"In the following section you can preview some of the labs created for the Spring 2019 Course. All the labs were the result of the work of Zona Kostic and Giulia Zerbini. All the hand drawn sketches included in the labs are created by Giulia Zerbini."},{"type":"link","name":"lab 1 - drawing data","subtitle":"from visual thinking to  the visualization draft","url":"LAB_01.pdf","pdf":true},{"type":"link","name":"lab 2 - creating visualizations with tools","subtitle":"part 1: rawgraphs","url":"LAB_02.pdf","pdf":true},{"type":"link","name":"lab 3 - creating visualizations with tools","subtitle":"part 2: tableau","url":"LAB_03.pdf","pdf":true},{"type":"link","name":"lab 4 - learning adobe illustrator","subtitle":"part 1: sketching ideas","url":"LAB_04.pdf","pdf":true},{"type":"link","name":"lab 5 - learning adobe illustrator","subtitle":"part 2: creating a custom visualization","url":"LAB_05.pdf","pdf":true},{"type":"link","name":"lab 6 - maps","subtitle":"learning carto and refining with illustrator","url":"LAB_06.pdf","pdf":true},{"type":"paragraph","title":"","text":"Topic were weekly exercises where students were asked to produce one or more visualizations using a specific dataset. The exercises had the purpose to practise and apply the skills learned during the lab."},{"type":"paragraph","title":"GUEST LECTURE","text":"Towards the end of the course, one of the lectures was hold by a guest. The guests were a data visualization design company based in Milan, the Visual Agency. The team presented the project “Codex Atlanticus”, an interactive exploration of the famous collection by Leonardo da Vinci. During the talk the team explained the behind the scenes of the project, the challenges of approaching the field of digital humanities and of merging a lot of different expertises together. The lecture was hold by Daniele Berto, Matteo Bonera, Sara Perozzi and Giulia Zerbini."},{"type":"link","name":"explore the project","subtitle":"codex-atlanticus.it","url":"https://www.codex-atlanticus.it"},{"type":"link","name":"see also","subtitle":"the visual agency","url":"https://thevisualagency.com/"},{"type":"image","name":"e79_02","format":"jpg"},{"type":"anchor","content":"results"},{"type":"background","sections":[{"type":"title","text":"Students\' Results"},{"type":"paragraph","title":"","text":"The following section contains some of the visualizations produced by the students during the final weeks of the course.  Throughout the final weeks, students created custom visualizations, combining different visual models and applying design techniques learned throughout the semester. In this section of the website there are just some of the various visualizations produced. Every week the students were asked to analyze a dataset and produce a visualization, applying the techniques learned in that week. The visualizations below were produced in the final weeks of the course."},{"type":"image","name":"e79_03","format":"jpg"},{"type":"dida","content":"<b>jared jessup</b><br>cosmic bombs & meteoritic memory"},{"type":"image","name":"e79_04","format":"jpg"},{"type":"dida","content":"<b>jared jessup</b><br>scars. the marks of terrorism in africa, 1970 - 2017"},{"type":"image","name":"e79_07","format":"jpg"},{"type":"dida","content":"<b>jared jessup</b><br>dc\'s big bang"},{"type":"image","name":"e79_05","format":"jpg"},{"type":"dida","content":"<b>ning chen, zona kostic</b><br>1800- 1966 the peak meteor period"},{"type":"image","name":"e79_08","format":"jpg"},{"type":"dida","content":"<b>ning chen, zona kostic</b><br>1800- 1966 the peak meteor period - preparatory drawing"},{"type":"image","name":"e79_06","format":"jpg"},{"type":"dida","content":"<b>ning chen, Leslie‌ ‌De‌ ‌Leon‌, Maria‌ ‌Flanagan‌ and Rebecca‌ ‌Roach</b><br>water crisis under the surface"}]},{"type":"anchor","content":"staff"},{"type":"title","text":"Teaching Staff"},{"type":"paragraph","title":"Zona Kostic — lecturer","text":"Zona Kostic is coming from two backgrounds: graphics design and data science. Her focus is on predictive methods and visual analytics. Upon defending her PhD thesis she obtained an assistant professor position at University of Belgrade. Shortly thereafter, she joined the Faculty of Arts and Sciences at Harvard University for a more empirical focus on data science while employing her visualization skills with Big Data. Zona’s accomplishments have garnered her an invitation to join the Visual Computing Group at Harvard\'s John A. Paulson School of Engineering and Applied Sciences (SEAS), working as a postdoc visiting researcher on information visualization projects in augmented and virtual reality. Her skilled combination of data science and information design has allowed her to actively participate in projects with the Harvard Institute for Applied Computational Science (IACS). Currently, she is teaching two courses at Harvard University and actively participate in research projects that combine information visualization and machine learning into an intelligent Web system. She is a COO and co-founder of ArchSpike, a platform that integrates data science with market modeling allowing users to design buildings that better respond to the future market demands."},{"type":"link","name":"see more","subtitle":"linkedin profile","url":"https://www.linkedin.com/in/zona-kostić-44443788/"},{"type":"paragraph","title":"giulia zerbini — teaching fellow","text":"Giulia is a multidisciplinary designer from Italy specialised in data visualization. With a background in graphic design, she is currently focusing on front-end development, always researching on new languages and techniques, willing to merge the two worlds and find new ways to do information design. She is currently working as creative technologist at The Visual Agency in Milan, where she designs and develops interactive projects and visualizations. MA graduate at Politecnico di Milano in communication design, after attending the capstone course organized by DensityDesign Lab. Her thesis was developed during a research period at the Institute of Applied and Computational Sciences at Harvard University, where she worked as visiting researcher in data visualization. Her biggest challenge and goal is to merge design and coding to create effective visualizations. Passionate about using visualizations for discovering patterns in data and communicating information in intuitive terms to a broad audience."},{"type":"link","name":"see more","subtitle":"giuliazerbini.com","url":"http://www.giuliazerbini.com"},{"type":"image","name":"e79_logo","format":"svg"}]}')}});
//# sourceMappingURL=app.eec82f76.js.map