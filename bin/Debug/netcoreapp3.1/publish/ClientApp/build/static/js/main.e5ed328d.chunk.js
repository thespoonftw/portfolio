(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{21:function(e,t,c){},40:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){"use strict";c.r(t);c(35);var s=c(1),r=c(16),i=c.n(r),a=c(14),n=c(5),j=c(6),l=c(8),o=c(7),h=c(3),b=c(58),d=c(15),m=c(57),O=c(59),x=c(60),p=c(63),g=c(61),u=c(62),v=(c(40),c(0)),f=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(e){var s;return Object(n.a)(this,c),(s=t.call(this,e)).toggleNavbar=s.toggleNavbar.bind(Object(d.a)(s)),s.state={collapsed:!0},s}return Object(j.a)(c,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){return Object(v.jsx)("header",{children:Object(v.jsx)(m.a,{className:"navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3",light:!0,children:Object(v.jsxs)(b.a,{children:[Object(v.jsx)(O.a,{tag:a.b,to:"/",children:"Michael Wright"}),Object(v.jsx)(x.a,{onClick:this.toggleNavbar,className:"mr-2"}),Object(v.jsx)(p.a,{className:"d-sm-inline-flex flex-sm-row-reverse",isOpen:!this.state.collapsed,navbar:!0,children:Object(v.jsxs)("ul",{className:"navbar-nav flex-grow",children:[Object(v.jsx)(g.a,{children:Object(v.jsx)(u.a,{tag:a.b,className:"text-dark",to:"/",children:"Blog"})}),Object(v.jsx)(g.a,{children:Object(v.jsx)(u.a,{tag:a.b,className:"text-dark",to:"/career",children:"Career"})}),Object(v.jsx)(g.a,{children:Object(v.jsx)(u.a,{tag:a.b,className:"text-dark",to:"/skills",children:"Skills"})}),Object(v.jsx)(g.a,{children:Object(v.jsx)(u.a,{tag:a.b,className:"text-dark",to:"/games",children:"Games"})}),Object(v.jsx)(g.a,{children:Object(v.jsx)(u.a,{tag:a.b,className:"text-dark",to:"/art",children:"Art"})}),Object(v.jsx)(g.a,{children:Object(v.jsx)(u.a,{tag:a.b,className:"text-dark",to:"/travel",children:"Travel"})}),Object(v.jsx)(g.a,{children:Object(v.jsx)(u.a,{tag:a.b,className:"text-dark",to:"/photos",children:"Photos"})})]})})]})})})}}]),c}(s.Component);f.displayName=f.name;var w=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(f,{}),Object(v.jsx)(b.a,{children:this.props.children})]})}}]),c}(s.Component);w.displayName=w.name;var y=c(23),k=c.n(y),C=c(33),S=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(e){var s;return Object(n.a)(this,c),(s=t.call(this,e)).state={forecasts:[],loading:!0},s}return Object(j.a)(c,[{key:"componentDidMount",value:function(){this.populateWeatherData()}},{key:"render",value:function(){var e=this.state.loading?Object(v.jsx)("p",{children:Object(v.jsx)("em",{children:"Loading..."})}):c.renderForecastsTable(this.state.forecasts);return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{id:"tabelLabel",children:"Weather forecast"}),Object(v.jsx)("p",{children:"This component demonstrates fetching data from the server."}),e]})}},{key:"populateWeatherData",value:function(){var e=Object(C.a)(k.a.mark((function e(){var t,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("weatherforecast");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,this.setState({forecasts:c,loading:!1});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}],[{key:"renderForecastsTable",value:function(e){return Object(v.jsxs)("table",{className:"table table-striped","aria-labelledby":"tabelLabel",children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Date"}),Object(v.jsx)("th",{children:"Temp. (C)"}),Object(v.jsx)("th",{children:"Temp. (F)"}),Object(v.jsx)("th",{children:"Summary"})]})}),Object(v.jsx)("tbody",{children:e.map((function(e){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:e.date}),Object(v.jsx)("td",{children:e.temperatureC}),Object(v.jsx)("td",{children:e.temperatureF}),Object(v.jsx)("td",{children:e.summary})]},e.date)}))})]})}}]),c}(s.Component);S.displayName=S.name;var I=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(e){var s;return Object(n.a)(this,c),(s=t.call(this,e)).state={currentCount:0},s.incrementCounter=s.incrementCounter.bind(Object(d.a)(s)),s}return Object(j.a)(c,[{key:"incrementCounter",value:function(){this.setState({currentCount:this.state.currentCount+1})}},{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Counter"}),Object(v.jsx)("p",{children:"This is a simple example of a React component."}),Object(v.jsxs)("p",{"aria-live":"polite",children:["Current count: ",Object(v.jsx)("strong",{children:this.state.currentCount})]}),Object(v.jsx)("button",{className:"btn btn-primary",onClick:this.incrementCounter,children:"Increment"})]})}}]),c}(s.Component);I.displayName=I.name;var A=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(e){return Object(n.a)(this,c),t.call(this,e)}return Object(j.a)(c,[{key:"render",value:function(){var e,t={lineHeight:null!==(e=this.props.height)&&void 0!==e?e:5};return Object(v.jsx)("p",{style:t,children:"\u3164"})}}]),c}(s.Component);A.displayName=A.name;var N=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(A,{height:"3"}),Object(v.jsx)("h1",{children:"Blog"}),Object(v.jsx)(A,{height:"3"}),Object(v.jsx)("p",{children:"Page work in progress. Try another page."})]})}}]),c}(s.Component);N.displayName=N.name;c(21);var T=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(e){return Object(n.a)(this,c),t.call(this,e)}return Object(j.a)(c,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(A,{height:"3"}),Object(v.jsx)("h1",{children:"Art"}),Object(v.jsx)(A,{height:"3"}),Object(v.jsx)("h3",{children:"Watercolour"}),Object(v.jsxs)("div",{class:"container",children:[Object(v.jsxs)("div",{class:"row",children:[Object(v.jsxs)("div",{class:"col-sm",children:[Object(v.jsx)("br",{}),Object(v.jsx)("img",{src:"https://i.imgur.com/y4fmCh6.jpg",class:"instagramImage"})]}),Object(v.jsxs)("div",{class:"col-sm",children:[Object(v.jsx)("br",{}),Object(v.jsx)("img",{src:"https://i.imgur.com/Toj5R7G.jpg",class:"instagramImage"})]})]}),Object(v.jsx)("br",{}),Object(v.jsxs)("div",{class:"row",children:[Object(v.jsxs)("div",{class:"col-sm",children:[Object(v.jsx)("br",{}),Object(v.jsx)("img",{src:"https://i.imgur.com/5W5Cfgq.png",class:"instagramImage"})]}),Object(v.jsxs)("div",{class:"col-sm",children:[Object(v.jsx)("br",{}),Object(v.jsx)("img",{src:"https://i.imgur.com/NbbNRiz.png",class:"instagramImage"})]})]}),Object(v.jsx)("br",{}),Object(v.jsxs)("div",{class:"row",children:[Object(v.jsxs)("div",{class:"col-sm",children:[Object(v.jsx)("br",{}),Object(v.jsx)("img",{src:"https://i.imgur.com/o3C4Oeh.png",class:"instagramImage"})]}),Object(v.jsxs)("div",{class:"col-sm",children:[Object(v.jsx)("br",{}),Object(v.jsx)("img",{src:"https://i.imgur.com/uYbQopM.png",class:"instagramImage"})]})]})]}),Object(v.jsx)(A,{height:"3"}),Object(v.jsx)("h3",{children:"Ink Drawings"}),Object(v.jsx)("div",{class:"container",children:Object(v.jsxs)("div",{class:"row",children:[Object(v.jsxs)("div",{class:"col-sm",children:[Object(v.jsx)("br",{}),Object(v.jsx)("img",{src:"https://i.imgur.com/pBQC0zF.png",class:"instagramImage"})]}),Object(v.jsxs)("div",{class:"col-sm",children:[Object(v.jsx)("br",{}),Object(v.jsx)("img",{src:"https://i.imgur.com/7n1SgOG.jpg",class:"instagramImage"})]})]})}),Object(v.jsx)(A,{height:"3"}),Object(v.jsx)("h3",{children:"Inktober Challenge 2018"}),Object(v.jsxs)("div",{class:"container",children:[Object(v.jsx)("br",{}),Object(v.jsxs)("div",{class:"row",children:[Object(v.jsx)("div",{class:"col-sm",children:Object(v.jsx)("img",{src:"https://i.imgur.com/oCB8l3L.png",class:"instagramImage"})}),Object(v.jsx)("div",{class:"col-sm",children:Object(v.jsx)("img",{src:"https://i.imgur.com/pOhu05n.jpg",class:"instagramImage"})}),Object(v.jsx)("div",{class:"col-sm",children:Object(v.jsx)("img",{src:"https://i.imgur.com/1TiL9DY.jpg",class:"instagramImage"})}),Object(v.jsx)("div",{class:"col-sm",children:Object(v.jsx)("img",{src:"https://i.imgur.com/xuLrkd5.png",class:"instagramImage"})})]}),Object(v.jsx)("br",{}),Object(v.jsxs)("div",{class:"row",children:[Object(v.jsx)("div",{class:"col-sm",children:Object(v.jsx)("img",{src:"https://i.imgur.com/joRlvok.jpg",class:"instagramImage"})}),Object(v.jsx)("div",{class:"col-sm",children:Object(v.jsx)("img",{src:"https://i.imgur.com/ePmDL2h.png",class:"instagramImage"})}),Object(v.jsx)("div",{class:"col-sm",children:Object(v.jsx)("img",{src:"https://i.imgur.com/YCH5dbf.png",class:"instagramImage"})}),Object(v.jsx)("div",{class:"col-sm",children:Object(v.jsx)("img",{src:"https://i.imgur.com/hdySpa9.png",class:"instagramImage"})})]}),Object(v.jsx)("br",{}),Object(v.jsxs)("div",{class:"row",children:[Object(v.jsx)("div",{class:"col-sm",children:Object(v.jsx)("img",{src:"https://i.imgur.com/mspjjtn.png",class:"instagramImage"})}),Object(v.jsx)("div",{class:"col-sm",children:Object(v.jsx)("img",{src:"https://i.imgur.com/ue5Tep4.jpg",class:"instagramImage"})}),Object(v.jsx)("div",{class:"col-sm",children:Object(v.jsx)("img",{src:"https://i.imgur.com/QMAy63W.jpg",class:"instagramImage"})}),Object(v.jsx)("div",{class:"col-sm",children:Object(v.jsx)("img",{src:"https://i.imgur.com/n810dXz.png",class:"instagramImage"})})]}),Object(v.jsx)("br",{}),Object(v.jsxs)("div",{class:"row",children:[Object(v.jsx)("div",{class:"col-sm",children:Object(v.jsx)("img",{src:"https://i.imgur.com/YqWlQms.jpg",class:"instagramImage"})}),Object(v.jsx)("div",{class:"col-sm",children:Object(v.jsx)("img",{src:"https://i.imgur.com/bxaN47e.jpg",class:"instagramImage"})}),Object(v.jsx)("div",{class:"col-sm",children:Object(v.jsx)("img",{src:"https://i.imgur.com/H4Yf0Bz.jpg",class:"instagramImage"})}),Object(v.jsx)("div",{class:"col-sm",children:Object(v.jsx)("img",{src:"https://i.imgur.com/YzWyQX1.jpg",class:"instagramImage"})})]})]}),Object(v.jsx)(A,{height:"3"}),Object(v.jsx)("h3",{children:"Oil Painting"}),Object(v.jsx)("div",{class:"container",children:Object(v.jsxs)("div",{class:"row",children:[Object(v.jsxs)("div",{class:"col-sm",children:[Object(v.jsx)("br",{}),Object(v.jsx)("img",{src:"https://i.imgur.com/Ktp8a00.jpg",class:"instagramImage"})]}),Object(v.jsxs)("div",{class:"col-sm",children:[Object(v.jsx)("br",{}),Object(v.jsx)("img",{src:"https://i.imgur.com/bcVZFM8.png",class:"instagramImage"})]})]})}),Object(v.jsx)(A,{height:"3"})]})}}]),c}(s.Component);T.displayName=T.name;var M=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(A,{height:"3"}),Object(v.jsx)("h1",{children:"Travel"}),Object(v.jsx)(A,{height:"3"}),Object(v.jsx)("p",{children:"Page work in progress. Try another page."})]})}}]),c}(s.Component);M.displayName=M.name;var L=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(A,{height:"3"}),Object(v.jsx)("h1",{children:"Photos"}),Object(v.jsx)(A,{height:"3"}),Object(v.jsx)("p",{children:"Page work in progress. Try another page."})]})}}]),c}(s.Component);L.displayName=L.name;var P=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(e){return Object(n.a)(this,c),t.call(this,e)}return Object(j.a)(c,[{key:"render",value:function(){return Object(v.jsxs)("span",{class:"badge badge-secondary",children:["\u3164",this.props.children,"\u3164"]})}}]),c}(s.Component);P.displayName=P.name;var B=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(A,{height:"3"}),Object(v.jsx)("h1",{children:"Career"}),Object(v.jsx)(A,{height:"3"}),Object(v.jsx)("h3",{children:"Software Engineer at Pennant International Plc (2021 - Present)"}),Object(v.jsxs)("p",{children:["Lead Unity developer for a range of technical training applications used in the Defense and Transport sectors.",Object(v.jsx)("br",{}),Object(v.jsx)(P,{children:"VR"})," ",Object(v.jsx)(P,{children:"C#"})," ",Object(v.jsx)(P,{children:"Unity"})," ",Object(v.jsx)(P,{children:"SQL Server"})," ",Object(v.jsx)(P,{children:"C++"})]}),Object(v.jsx)("br",{}),Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"NX Panel Simulator"})," - A simulated NX (entry-exit) panel. To be used by Network Rail for signaller training during a range of emergency scenarios."]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"Vehicle Simulator"})," - A confidential vehicle training simulator, used for fault training and familiarization for a world leading defense company."]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"Virtual Parachute Simulator"})," - Developed new environments for the company's VR parachute simulator and regular visits to Brize Norton airbase for product support."]}),Object(v.jsx)("a",{href:"https://pennantplc.co.uk/",target:"_blank",children:"https://pennantplc.co.uk/"}),Object(v.jsx)(A,{height:"1"}),Object(v.jsx)("div",{class:"container",children:Object(v.jsxs)("div",{class:"row",children:[Object(v.jsx)("div",{class:"col-sm",children:Object(v.jsx)("iframe",{width:"512",height:"288",src:"https://www.youtube.com/embed/phvJk5VBtKE",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),Object(v.jsx)("div",{class:"col-sm",children:Object(v.jsx)("iframe",{width:"512",height:"288",src:"https://www.youtube.com/embed/o-Yhdl0FvmQ",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})})]})}),Object(v.jsx)(A,{height:"3"}),Object(v.jsx)("h3",{children:"Software Engineer at 4 Roads Ltd (2020 - 2021)"}),Object(v.jsxs)("p",{children:["Remote full stack web developer for a digital agency that provides web products to a wide range of customers.",Object(v.jsx)("br",{}),Object(v.jsx)(P,{children:"React"})," ",Object(v.jsx)(P,{children:"MySQL"})," ",Object(v.jsx)(P,{children:"ThreeJS"})," ",Object(v.jsx)(P,{children:"C#"})," ",Object(v.jsx)(P,{children:"Javascript"})," ",Object(v.jsx)(P,{children:"Azure"})," ",Object(v.jsx)(P,{children:"Agile"})," ",Object(v.jsx)(P,{children:"CSS"})," ",Object(v.jsx)(P,{children:"HTML"})]}),Object(v.jsx)("br",{}),Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"Social Stack"})," - Developing new components for Social Stack, a react library for modular creation of web products."]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"Immersive Event Platform"})," - A virtual conferencing space which uses photospheres, live-streams and video chats to create an immersive experience as a substitute for real-world events during the coronavirus pandemic and beyond."]}),Object(v.jsxs)("p",{children:[Object(v.jsxs)("b",{children:["Bridgestone World [",Object(v.jsx)("a",{href:"https://www.futureofmobility.bridgestone/us/en/home",target:"_blank",children:"link"}),"]"]})," - An infographic website created for CES 2021 (Computer Electronics Show), featuring an animated 3D city created using ThreeJS."]}),Object(v.jsx)("a",{href:"https://www.4-roads.com/",target:"_blank",children:"https://www.4-roads.com/"}),Object(v.jsx)(A,{height:"1"}),Object(v.jsx)("div",{class:"container",children:Object(v.jsxs)("div",{class:"row",children:[Object(v.jsx)("div",{class:"col-sm",children:Object(v.jsx)("iframe",{width:"512",height:"288",src:"https://www.youtube.com/embed/IFeNo46ihNk",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),Object(v.jsx)("div",{class:"col-sm",children:Object(v.jsx)("a",{href:"https://www.futureofmobility.bridgestone/us/en/home",target:"_blank",children:Object(v.jsx)("img",{width:"512",height:"288",src:"https://i.imgur.com/mP6Bp1F.png"})})})]})}),Object(v.jsx)(A,{height:"3"}),Object(v.jsx)("h3",{children:"Analyst Developer at Graffica Ltd (2016 - 2020)"}),Object(v.jsxs)("p",{children:["Graduate developer working on a Rail and Air Traffic applications for Network Rail and Eurocontrol in Java and Unity.",Object(v.jsx)("br",{}),Object(v.jsx)(P,{children:"Java"})," ",Object(v.jsx)(P,{children:"Unity"})," ",Object(v.jsx)(P,{children:"C#"})," ",Object(v.jsx)(P,{children:"Blender"})," ",Object(v.jsx)(P,{children:"Jenkins"})," ",Object(v.jsx)(P,{children:"CI/CD"})]}),Object(v.jsx)("br",{}),Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"Tower3D and ITWP"})," - An Air Traffic Simulator using Java, C# and Unity. Used by Eurocontrol for training and simulation of scenarios. Occassional on-site trips to test centre to Paris to provide support. Also had the opportunity to work in Blender to create new airport environments and aircraft models."]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"Hermes3D "})," - Prototype Rail Simulator made with similar technologies for cab driver training. Incorporated OpenStreetMap data to procedurally generate a 3D world."]}),Object(v.jsx)("a",{href:"https://www.graffica.co.uk/",target:"_blank",children:"https://www.graffica.co.uk/"}),Object(v.jsx)(A,{height:"1"}),Object(v.jsx)("div",{class:"container",children:Object(v.jsxs)("div",{class:"row",children:[Object(v.jsx)("div",{class:"col-sm",children:Object(v.jsx)("iframe",{width:"512",height:"288",src:"https://www.youtube.com/embed/X1H-VDZLZIo",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),Object(v.jsx)("div",{class:"col-sm",children:Object(v.jsx)("iframe",{width:"512",height:"288",src:"https://www.youtube.com/embed/5rwggTkVS58",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})})]})}),Object(v.jsxs)("div",{class:"container",children:[Object(v.jsx)("br",{}),Object(v.jsxs)("div",{class:"row",children:[Object(v.jsx)("div",{class:"col-sm",children:Object(v.jsx)("img",{src:"https://i.imgur.com/uSj8UjI.jpg",onclick:"openModal(this, 1)",class:"instagramImage"})}),Object(v.jsx)("div",{class:"col-sm",children:Object(v.jsx)("img",{src:"https://i.imgur.com/DJNxLle.png",onclick:"openModal(this, 1)",class:"instagramImage"})}),Object(v.jsx)("div",{class:"col-sm",children:Object(v.jsx)("img",{src:"https://i.imgur.com/hb0Z7kr.jpg",onclick:"openModal(this, 1)",class:"instagramImage"})})]})]}),Object(v.jsxs)("div",{class:"container",children:[Object(v.jsx)("br",{}),Object(v.jsxs)("div",{class:"row",children:[Object(v.jsx)("div",{class:"col-sm",children:Object(v.jsx)("img",{src:"https://i.imgur.com/qLgTCri.jpg",onclick:"openModal(this, 1)",class:"instagramImage"})}),Object(v.jsx)("div",{class:"col-sm",children:Object(v.jsx)("img",{src:"https://i.imgur.com/yHlvEkX.jpg",onclick:"openModal(this, 1)",class:"instagramImage"})}),Object(v.jsx)("div",{class:"col-sm",children:Object(v.jsx)("img",{src:"https://i.imgur.com/FS8VUO1.png",onclick:"openModal(this, 1)",class:"instagramImage"})})]})]}),Object(v.jsx)(A,{height:"3"}),Object(v.jsx)("h3",{children:"Statistician at AlphaPlus (Summer 2020)"}),Object(v.jsxs)("p",{children:["Contract work for an exam board consultancy. Helping to verify statistical results of algorithmically generated student grades during the coronavirus pandemic.",Object(v.jsx)("br",{}),Object(v.jsx)(P,{children:"R"})," ",Object(v.jsx)(P,{children:"Excel"})," ",Object(v.jsx)(P,{children:"Statistics"})]}),Object(v.jsx)(A,{height:"3"}),Object(v.jsx)("h3",{children:"Question Author at University of Birmingham (Summer 2015)"}),Object(v.jsxs)("p",{children:["Summer job at the University of Birmingham, authoring questions for MapleTA, an automatic marking scheme for university-level Physics and Mathematics.",Object(v.jsx)("br",{}),Object(v.jsx)(P,{children:"MapleTA"})," ",Object(v.jsx)(P,{children:"Physics"})," ",Object(v.jsx)(P,{children:"Mathematics"})]}),Object(v.jsx)(A,{height:"3"}),Object(v.jsx)("h3",{children:"Internship at Red Sky Blue Water (Summer 2014)"}),Object(v.jsxs)("p",{children:["A 4-week placement in a Microsoft software development company developing Windows phone apps.",Object(v.jsx)("br",{}),Object(v.jsx)(P,{children:"C#"})," ",Object(v.jsx)(P,{children:"Mobile"})]}),Object(v.jsx)(A,{height:"3"}),Object(v.jsx)("h3",{children:"Sales at John Wright Turkeys (Christmas)"}),Object(v.jsxs)("p",{children:["Helping my family sell turkeys every year at Christmas on 23rd December - a lovely family tradition.",Object(v.jsx)("br",{}),Object(v.jsx)(P,{children:"Sales"})," ",Object(v.jsx)(P,{children:"Poultry"})," ",Object(v.jsx)(P,{children:"Christmas"})]}),Object(v.jsx)("p",{children:"Order your christmas turkey now and check out my brother's adorable turkey dog."}),Object(v.jsx)("p",{children:Object(v.jsx)("a",{href:"http://www.johnwrightturkeys.co.uk/",target:"_blank",children:"http://www.johnwrightturkeys.co.uk/"})}),Object(v.jsx)("div",{class:"container",children:Object(v.jsx)("div",{class:"row",children:Object(v.jsx)("center",{children:Object(v.jsx)("iframe",{width:"512",height:"288",src:"https://www.youtube.com/embed/J7ZA6QiBV9g",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})})})}),Object(v.jsx)(A,{height:"3"})]})}}]),c}(s.Component);B.displayName=B.name;var W=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(A,{height:"3"}),Object(v.jsx)("h1",{children:"Skills"}),Object(v.jsx)(A,{height:"3"}),Object(v.jsx)("h3",{children:"Technologies"}),Object(v.jsx)("p",{children:"(Updated Jan 2021)"}),Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"Strong Knowledge:"})," C#, Unity, Physics, Mathematics"]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"Confident With:"})," Github, React, SQL, Javscript, Java, HTML, CSS, Excel, Blender, GIMP, Agile, ThreeJS, LaTeX"]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"Familiar With:"})," Python, C++, MATLAB, Azure, Jenkins, R, SVN"]}),Object(v.jsx)(A,{height:"2"}),Object(v.jsx)("h3",{children:"University of Birmingham (2011 - 2016)"}),Object(v.jsx)("p",{children:Object(v.jsx)("b",{children:"MSci. Physics, with a Year in Computer Science - 1st Class"})}),Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"Included Modules:"}),Object(v.jsx)("br",{}),"Software Engineering",Object(v.jsx)("br",{}),"Machine Learning",Object(v.jsx)("br",{}),"Computer Security",Object(v.jsx)("br",{}),"Computer Graphics",Object(v.jsx)("br",{}),"Introduction to C++",Object(v.jsx)("br",{}),"Particle Physics",Object(v.jsx)("br",{}),"Astrophysics",Object(v.jsx)("br",{}),"Nuclear Physics",Object(v.jsx)("br",{}),"Quantum Mechanics",Object(v.jsx)("br",{}),"Statistical Physics"]}),Object(v.jsx)(A,{height:"2"}),Object(v.jsx)("h3",{children:"Qualifications"}),Object(v.jsxs)("p",{children:["QNUK Level 3 - Emergency First aid in the Workplace (2019)",Object(v.jsx)("br",{}),"HR Champions Ltd - Level 2 Certificate in Leadership and Team Skills (2017)",Object(v.jsx)("br",{}),"British Standard Driving Licence (2010)",Object(v.jsx)("br",{}),"Grade 4 Clarinet (2008)"]}),Object(v.jsx)(A,{height:"2"}),Object(v.jsx)("h3",{children:"GCEs Sixth Form"}),Object(v.jsxs)("p",{children:["A Level - Physics: A*",Object(v.jsx)("br",{}),"A Level - Maths: A*",Object(v.jsx)("br",{}),"A Level - Further Maths: A",Object(v.jsx)("br",{}),"A Level - Chemistry: A",Object(v.jsx)("br",{}),"AS Level - Geography: A",Object(v.jsx)("br",{}),"Extended Project: A"]}),Object(v.jsx)(A,{height:"2"}),Object(v.jsx)("h3",{children:"GCSEs Secondary School"}),Object(v.jsxs)("p",{children:["Mathematics: A*",Object(v.jsx)("br",{}),"Statistics: A*",Object(v.jsx)("br",{}),"Science: A*",Object(v.jsx)("br",{}),"Additional Science: A*",Object(v.jsx)("br",{}),"History: A*",Object(v.jsx)("br",{}),"English: A",Object(v.jsx)("br",{}),"Business Studies: A",Object(v.jsx)("br",{}),"French: A",Object(v.jsx)("br",{}),"Media Studies: A",Object(v.jsx)("br",{}),"Religious Studies: A",Object(v.jsx)("br",{}),"D&T: Product Design: B",Object(v.jsx)("br",{}),"English Literature: B",Object(v.jsx)("br",{}),"ICT: Distinction"]}),Object(v.jsx)(A,{height:"3"})]})}}]),c}(s.Component);W.displayName=W.name;var D=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(A,{height:"3"}),Object(v.jsx)("h1",{children:"Games"}),Object(v.jsx)(A,{height:"3"}),Object(v.jsx)("h3",{children:"2 Player Campaign for Warcraft 3"}),Object(v.jsx)("br",{}),Object(v.jsx)("p",{children:"A popular mod of the original Warcraft 3 campaign featuring a newly designed companion Hero to accompany the main player for each chapter. Also features new higher difficulties, bonus chapters and hidden artifacts to enhance replayability. Most downloaded mod on Hiveworkshop.com; the largest ongoing community for Warcraft 3."}),Object(v.jsxs)("p",{children:["Download link: ",Object(v.jsx)("a",{href:"https://www.hiveworkshop.com/threads/2-player-campaign-2020-reforged-classic.322390/",target:"_blank",children:"https://www.hiveworkshop.com/threads/2-player-campaign-2020-reforged-classic.322390/"})]}),Object(v.jsxs)("p",{children:["Patreon: ",Object(v.jsx)("a",{href:"https://www.patreon.com/2playercampaign",children:"https://www.patreon.com/2playercampaign"})]}),Object(v.jsxs)("p",{children:["Discord: ",Object(v.jsx)("a",{href:"https://discord.gg/ZSmzvyW",children:"https://discord.gg/ZSmzvyW"})]}),Object(v.jsx)(A,{height:"1"}),Object(v.jsx)("center",{children:Object(v.jsx)("iframe",{width:"640",height:"360",src:"https://www.youtube.com/embed/TevSLr5BKnU",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),Object(v.jsxs)("div",{class:"container",children:[Object(v.jsx)("br",{}),Object(v.jsxs)("div",{class:"row",children:[Object(v.jsx)("div",{class:"col-sm",children:Object(v.jsx)("img",{src:"https://i.imgur.com/u7IO1qI.png",onclick:"openModal(this, 1)",class:"instagramImage"})}),Object(v.jsx)("div",{class:"col-sm",children:Object(v.jsx)("img",{src:"https://i.imgur.com/S7zxp14.jpg",onclick:"openModal(this, 1)",class:"instagramImage"})}),Object(v.jsx)("div",{class:"col-sm",children:Object(v.jsx)("img",{src:"https://i.imgur.com/mrIFldk.png",onclick:"openModal(this, 1)",class:"instagramImage"})})]})]}),Object(v.jsx)(A,{height:"3"})]})}}]),c}(s.Component);D.displayName=D.name;c(55);var E=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(v.jsxs)(w,{children:[Object(v.jsx)(h.a,{exact:!0,path:"/",component:N}),Object(v.jsx)(h.a,{path:"/counter",component:I}),Object(v.jsx)(h.a,{path:"/fetch-data",component:S}),Object(v.jsx)(h.a,{path:"/art",component:T}),Object(v.jsx)(h.a,{path:"/travel",component:M}),Object(v.jsx)(h.a,{path:"/photos",component:L}),Object(v.jsx)(h.a,{path:"/career",component:B}),Object(v.jsx)(h.a,{path:"/skills",component:W}),Object(v.jsx)(h.a,{path:"/games",component:D})]})}}]),c}(s.Component);E.displayName=E.name;var R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var F=document.getElementsByTagName("base")[0].getAttribute("href"),U=document.getElementById("root");i.a.render(Object(v.jsx)(a.a,{basename:F,children:Object(v.jsx)(E,{})}),U),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");R?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):J(e)}))}}()}},[[56,1,2]]]);
//# sourceMappingURL=main.e5ed328d.chunk.js.map