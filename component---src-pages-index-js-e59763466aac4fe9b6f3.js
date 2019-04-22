(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{142:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),i=e(143),M=e.n(i),u=e(147),c=e.n(u),o=e(144),d=e(4),g=e.n(d),L=e(33),j=e.n(L);e(145),a.a.createContext({});g.a.object,g.a.string.isRequired,g.a.func,g.a.func;e(34);var N={gray100:"#f5f5f5",gray200:"#ece8ef",gray300:"#dbd5e0",gray400:"#bdb5c3",gray500:"#978e9e",gray600:"#776d7f",gray700:"#685d71",gray800:"#463652",gray900:"#1e0d2b",purple100:"#fcecff",purple200:"#f9d6ff",purple300:"#eeb2f9",purple400:"#eb7dff",purple500:"#d73df3",purple600:"#c700eb",purple700:"#b200d1",purple800:"#820099",purple900:"#5c016c",red100:"#ffe9e9",red200:"#fec3c3",red300:"#f99e9e",red400:"#f36f6f",red500:"#f65858",red600:"#f63131",red700:"#e02121",red800:"#b81111",red900:"#860505",white:"#ffffff"},l=Object.assign({},N,{darkest:N.gray900,lightest:N.white,lightestTransparent:"rgba(255, 255, 255, 0)",lightestAlpha:"rgba(255, 255, 255, 0.97)",primary:N.purple600,primaryDark:N.purple700,heading:N.gray900,text:N.gray700,textLight:N.gray600,textDark:N.gray800,gray:N.gray600,grayLightest:N.gray100,grayAlpha:"rgba(214, 209, 230, 0.5)",grayAlphaExtra:"rgba(214, 209, 230, 0.25)",warning:N.red700,textWarning:N.red900,warningBackground:N.red100,sectionEven:"#85b880",sectionOdd:"#808184"});function I(){var n=M()(["\n  padding: 0;\n  width: 200px;\n  z-index: 2;\n"]);return I=function(){return n},n}function y(){var n=M()(["\n  display: flex;\n  justify-content: center;\n  border: 2px solid transparent;\n  border-radius: 0;\n  padding: calc(0.5rem - 2px) 0.25rem;\n  z-index: 10;\n  grid-column-end: -2;\n  @media (max-width: 480px) {\n    grid-column-end: -1;\n  }\n"]);return y=function(){return n},n}function s(){var n=M()(["\n  text-transform: none;\n  color: #d23669;\n"]);return s=function(){return n},n}function T(){var n=M()(["\n  text-transform: none;\n"]);return T=function(){return n},n}function p(){var n=M()(['\n  border: 2px solid transparent;\n  border-radius: 0;\n  color: "black";\n  font-weight: 900;\n  line-height: 1.25;\n  margin: 0;\n  padding: calc(0.5rem - 2px) 0.25rem;\n  text-decoration: none;\n  text-transform: uppercase;\n  transition-property: color;\n  &.active {\n    color: ',";\n  }\n  &.hiddenSmall {\n    display: none;\n    @media (min-width: 414px) {\n      display: inline-block;\n    }\n  }\n  @media (min-width: 320px) {\n    padding-left: 0.625rem;\n    padding-right: 0.625rem;\n  }\n  :focus,\n  :active,\n  :hover {\n    background-color: transparent;\n    border-radius: 0;\n    color: ",";\n  }\n  :focus {\n    border-color: ",";\n  }\n"]);return p=function(){return n},n}function x(){var n=M()(["\n  display: flex;\n  grid-column-end: -1;\n  font-size: 0.875rem;\n  margin: 0;\n  justify-content: end;\n  float: right;\n  z-index: 5;\n  @media (max-width: 480px) {\n    display: none;\n  }\n"]);return x=function(){return n},n}function m(){var n=M()(["\n  transition: none;\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n  position: absolute;\n  height: 1px;\n  width: 1px;\n  :focus,\n  :active,\n  :hover {\n    clip: auto;\n    width: auto;\n    height: auto;\n    border-radius: 0;\n    padding: 0.5rem 1rem;\n    z-index: 5000;\n  }\n\n  ::before {\n    top: calc(100% - 1px);\n    background-color: ",";\n  }\n  ::after {\n    top: 100%;\n    background-color: ",";\n  }\n"]);return m=function(){return n},n}function D(){var n=M()(['\n  background-color: white;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 1000;\n  display: grid;\n  align-items: center;\n  align-contents: center;\n  grid-template-columns: repeat(3, 1fr);\n  ::before,\n  ::after {\n    content: "";\n    display: block;\n    position: absolute;\n    right: 0;\n    height: 1px;\n    width: calc(100% - 30px);\n    z-index: 1;\n  }\n  ::before {\n    top: calc(100% - 1px);\n  }\n\n  @media (max-width: 480px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n']);return D=function(){return n},n}var f=Object(o.a)("header")(D()),S=Object(o.a)("a")(m(),l.primary,l.grayAlpha),z=Object(o.a)("nav")(x()),A=Object(o.a)(j.a)(p(),l.primary,l.primaryDark,l.darkest),E=Object(o.a)("div")(T()),b=Object(o.a)("div")(s()),C=Object(o.a)("a")(y()),w=Object(o.a)("img")(I()),h=function(n){var t=n.title,e=n.campaignDate,r=n.links;return a.a.createElement(f,{role:"banner"},a.a.createElement(S,{href:"#",id:"skip-navigation"},"Skip to Content"),a.a.createElement(A,{to:"/"},a.a.createElement(E,null,t),e&&a.a.createElement(b,null,e)),a.a.createElement(C,{href:"https://www.thoughtworks.com",rel:"noopener noreferrer",target:"_blank"},a.a.createElement(w,{src:c.a,alt:"ThoughtWorks presents: Network of Women",style:{maxWidth:"200px"}})),a.a.createElement(z,null,r.map(function(n){return a.a.createElement(A,{key:n,to:"/#"+n,activeClassName:"active"},n)})))},O=e(149),v=e.n(O),k=e(150),U=e.n(k),Y=e(151),Q=e.n(Y),J=e(152),H=e.n(J),P=e(153),Z=e.n(P),R=e(154),F=e.n(R);function W(){var n=M()(['\n  border: 2px solid transparent;\n  border-radius: 0;\n  color: "black";\n  font-weight: 900;\n  font-size: x-small;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0;\n  padding: calc(0.5rem - 2px) 0.25rem;\n  text-decoration: none;\n  text-transform: uppercase;\n  transition-property: color;\n  &.active {\n    color: ',";\n  }\n  &.hiddenSmall {\n    display: none;\n    @media (min-width: 414px) {\n      display: inline-block;\n    }\n  }\n  @media (min-width: 320px) {\n    padding-left: 0.625rem;\n    padding-right: 0.625rem;\n  }\n  :focus,\n  :active,\n  :hover {\n    background-color: transparent;\n    border-radius: 0;\n    color: ",";\n  }\n  :focus {\n    border-color: ",";\n  }\n"]);return W=function(){return n},n}function G(){var n=M()(["\n  display: flex;\n  grid-column-end: -1;\n  font-size: 0.875rem;\n  margin: 0;\n  justify-content: space-evenly;\n  z-index: 5;\n"]);return G=function(){return n},n}function B(){var n=M()(['\n  display: none;\n\n  @media (max-width: 480px) {\n    display: flex;\n    justify-content: space-evenly;\n    background-color: white;\n    left: 0;\n    position: fixed;\n    right: 0;\n    bottom: 0;\n    z-index: 1000;\n    ::before,\n    ::after {\n      content: "";\n      display: block;\n      position: absolute;\n      right: 0;\n      height: 1px;\n      width: calc(100% - 30px);\n      z-index: 1;\n    }\n    ::before {\n      top: calc(100% - 1px);\n    }\n  }\n']);return B=function(){return n},n}var V=Object(o.a)("footer")(B()),X=Object(o.a)("nav")(G()),_=Object(o.a)(j.a)(W(),l.primary,l.primaryDark,l.darkest),q=function(n){switch(n.toUpperCase()){case"LOCATION":return Z.a;case"ABOUT":return Q.a;case"SCHEDULE":return v.a;case"SPEAKERS":return H.a;case"REGISTER":return U.a;default:return F.a}},K=function(n){var t=n.links;return a.a.createElement(V,{role:"banner"},a.a.createElement(X,null,t.map(function(n){return a.a.createElement(_,{key:n,to:"/#"+n,activeClassName:"active"},a.a.createElement("img",{src:q(n),alt:n}),n)})))},$=e(155),nn=e.n($),tn=(e(163),function(n){var t=n.title,e=n.subTitle,r=n.description,i=n.children,M=n.menuEntries;return a.a.createElement("div",null,a.a.createElement(nn.a,{htmlAttributes:{lang:"en"},title:t},a.a.createElement("meta",{name:"description",content:r})),a.a.createElement(h,{title:t,campaignDate:e,links:M}),a.a.createElement("div",{className:"container"},i),a.a.createElement(K,{links:M}))});function en(){var n=M()(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  background-color: ",";\n  color: ",";\n  text-align: center;\n"]);return en=function(){return n},n}var rn=Object(o.a)("div")(en(),function(n){return 0==n.index?"none":0===(n.index&&n.index%2)?l.sectionEven:l.sectionOdd},l.lightest),an=e(164),Mn=e.n(an),un=e(165),cn=e.n(un),on=e(166),dn=e.n(on);function gn(){var n=M()(["\n  & h1 {\n    font-size: 4.5rem;\n  }\n  \n  & h1, h2 {\n   color:white;\n  }\n  \n  background: url(",");\n  background-size: cover;\n  background-repeat: no-repeat ;\n  \n  @media (max-width: 800px) {\n    background: url(",") ;\n  }\n  @media (max-width: 480px) {\n    background: url(",") ;\n  }\n"]);return gn=function(){return n},n}var Ln=Object(o.a)(rn)(gn(),Mn.a,cn.a,dn.a),jn=function(n){var t=n.html,e=n.index;return a.a.createElement(Ln,{id:"main",index:e,dangerouslySetInnerHTML:{__html:t}})};e.d(t,"query",function(){return Nn});var Nn="3559515124";t.default=function(n){var t=n.data,e=t.allMarkdownRemark.edges.map(function(n){var t=n.node.frontmatter;return{section:t.section,order:t.order,showInMenu:t.showInMenu,html:n.node.html}}),r=e.filter(function(n){return n.showInMenu}).map(function(n){return n.section}),i=t.site.siteMetadata,M=i.title,u=i.subTitle,c=void 0===u?"":u,o=i.description;return a.a.createElement(tn,{title:M,subTitle:c,description:o,menuEntries:r},e&&e.map(function(n,t){return function(n,t){var e=t.section,r=t.html;switch(e.toUpperCase()){case"MAIN":return a.a.createElement(jn,{html:r,index:n,key:e});default:return a.a.createElement(rn,{id:e,key:e,index:n,dangerouslySetInnerHTML:{__html:r}})}}(t,n)}))}},145:function(n,t,e){var r;n.exports=(r=e(148))&&r.default||r},147:function(n,t,e){n.exports=e.p+"static/tw-logo-0a69e563df493eccaf414fbbf7cf8480.png"},148:function(n,t,e){"use strict";e.r(t);e(34);var r=e(0),a=e.n(r),i=e(4),M=e.n(i),u=e(69),c=e(2),o=function(n){var t=n.location,e=c.default.getResourcesForPathnameSync(t.pathname);return e?a.a.createElement(u.a,Object.assign({location:t,pageResources:e},e.json)):null};o.propTypes={location:M.a.shape({pathname:M.a.string.isRequired}).isRequired},t.default=o},149:function(n,t){n.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTcgM3YtMmMwLS41NTIuNDQ3LTEgMS0xczEgLjQ0OCAxIDF2MmMwIC41NTItLjQ0NyAxLTEgMXMtMS0uNDQ4LTEtMXptLTEyIDFjLjU1MyAwIDEtLjQ0OCAxLTF2LTJjMC0uNTUyLS40NDctMS0xLTEtLjU1MyAwLTEgLjQ0OC0xIDF2MmMwIC41NTIuNDQ3IDEgMSAxem0xMyAxM3YtM2gtMXY0aDN2LTFoLTJ6bS01IC41YzAgMi40ODEgMi4wMTkgNC41IDQuNSA0LjVzNC41LTIuMDE5IDQuNS00LjUtMi4wMTktNC41LTQuNS00LjUtNC41IDIuMDE5LTQuNSA0LjV6bTExIDBjMCAzLjU5LTIuOTEgNi41LTYuNSA2LjVzLTYuNS0yLjkxLTYuNS02LjUgMi45MS02LjUgNi41LTYuNSA2LjUgMi45MSA2LjUgNi41em0tMTQuMjM3IDMuNWgtNy43NjN2LTEzaDE5djEuNzYzYy43MjcuMzMgMS4zOTkuNzU3IDIgMS4yNjh2LTkuMDMxaC0zdjFjMCAxLjMxNi0xLjI3OCAyLjMzOS0yLjY1OCAxLjg5NC0uODMxLS4yNjgtMS4zNDItMS4xMTEtMS4zNDItMS45ODR2LS45MWgtOXYxYzAgMS4zMTYtMS4yNzggMi4zMzktMi42NTggMS44OTQtLjgzMS0uMjY4LTEuMzQyLTEuMTExLTEuMzQyLTEuOTg0di0uOTFoLTN2MjFoMTEuMDMxYy0uNTExLS42MDEtLjkzOC0xLjI3My0xLjI2OC0yeiIvPjwvc3ZnPg=="},150:function(n,t){n.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOSAxOWgtNHYtMmg0djJ6bTIuOTQ2LTQuMDM2bDMuMTA3IDMuMTA1LTQuMTEyLjkzMSAxLjAwNS00LjAzNnptMTIuMDU0LTUuODM5bC03Ljg5OCA3Ljk5Ni0zLjIwMi0zLjIwMiA3Ljg5OC03Ljk5NSAzLjIwMiAzLjIwMXptLTYgOC45MnYzLjk1NWgtMTZ2LTIwaDcuMzYyYzQuMTU2IDAgMi42MzggNiAyLjYzOCA2czIuMzEzLS42MzUgNC4wNjctLjEzM2wxLjk1Mi0xLjk3NmMtMi4yMTQtMi44MDctNS43NjItNS44OTEtNy44My01Ljg5MWgtMTAuMTg5djI0aDIwdi03Ljk4bC0yIDIuMDI1eiIvPjwvc3ZnPg=="},151:function(n,t){n.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjAgNy4wOTN2LTUuMDkzaC0zdjIuMDkzbDMgM3ptNCA1LjkwN2wtMTItMTItMTIgMTJoM3YxMGg3di01aDR2NWg3di0xMGgzem0tNSA4aC0zdi01aC04djVoLTN2LTEwLjI2bDctNi45MTIgNyA2Ljk5djEwLjE4MnoiLz48L3N2Zz4="},152:function(n,t){n.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNiIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI2IDI0Ij48cGF0aCBkPSJNMTcuNSAxMi41YzAgLjgyOC0uNTYgMS41LTEuMjUgMS41cy0xLjI1LS42NzItMS4yNS0xLjUuNTYtMS41IDEuMjUtMS41IDEuMjUuNjcyIDEuMjUgMS41em0tNy43NS0xLjVjLS42OSAwLTEuMjUuNjcyLTEuMjUgMS41cy41NiAxLjUgMS4yNSAxLjUgMS4yNS0uNjcyIDEuMjUtMS41LS41Ni0xLjUtMS4yNS0xLjV6bTMuMjUgOC4zNTRjMi4yMzUgMCAzLTIuMzU0IDMtMi4zNTRoLTZzLjg0NyAyLjM1NCAzIDIuMzU0em0xMyAzLjYzOWMtMi42NTMgMS43MTQtNS40MTggMS4yNTQtNi44NDItMS40ODgtMS42NzIgMS41MDUtMy43MDYgMi40ODctNi4xNTggMi40ODctMi41MyAwLTQuNTE3LS45MS02LjE4NC0yLjQ0NS0xLjQzMSAyLjcwMi00LjE3OCAzLjE1LTYuODE2IDEuNDQ2IDQuMzc1LTEuNzUtMi43MjktMTEuODEzIDQuMTA0LTE5LjM3NSAyLjI4Mi0yLjUyNSA1LjQ3Mi0zLjYxOCA4Ljg5Ni0zLjYxOHM2LjYxNCAxLjA5MyA4Ljg5NiAzLjYxOGM2LjgzMyA3LjU2Mi0uMjcxIDE3LjYyNSA0LjEwNCAxOS4zNzV6bS01LjY2OC02LjExMWMuMTIyLS4yMDIuMzEyLS4zNTQuNTM1LS40MyAyLjQ0Ny0uODI4IDIuNTU0LTQuMzYxIDEuNTU0LTUuMDEyLS4yMzUtLjE1Mi0uNTMxLS4xMTUtLjY3Mi0uMDUzLS42NjQuMjk1LTEuNDA2LS4xOTQtMS40MDYtLjkxNCAwLS40NzEtLjAzNC0xLjAwMS0uMDk2LTEuNDczaC0xMC4xMDFjLS44MTMtMS4wMjEtLjc3MS0yLjk0NS0uMzk2LTQuNTctLjkwMy45ODItMS42OTMgMy4yNDktMS44NzUgNC41N2gtMi4xMjFjLS4wNjIuNDcyLS4wOTYgMS4wMDItLjA5NiAxLjQ3MyAwIC43Mi0uNzQyIDEuMjA5LTEuNDA2LjkxNC0uMTQxLS4wNjItLjQzNi0uMS0uNjcyLjA1My0xIC42NTEtLjg5MyA0LjE4NCAxLjU1NCA1LjAxMi4yMjQuMDc2LjQxMy4yMjguNTM1LjQzIDEuNzA5IDIuODI5IDQuMDE1IDUuMTExIDcuMzMyIDUuMTExIDMuMzE2IDAgNS42MjMtMi4yODMgNy4zMzEtNS4xMTF6Ii8+PC9zdmc+"},153:function(n,t){n.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgM2MyLjEzMSAwIDQgMS43MyA0IDMuNzAyIDAgMi4wNS0xLjcxNCA0Ljk0MS00IDguNTYxLTIuMjg2LTMuNjItNC02LjUxMS00LTguNTYxIDAtMS45NzIgMS44NjktMy43MDIgNC0zLjcwMnptMC0yYy0zLjE0OCAwLTYgMi41NTMtNiA1LjcwMiAwIDMuMTQ4IDIuNjAyIDYuOTA3IDYgMTIuMjk4IDMuMzk4LTUuMzkxIDYtOS4xNSA2LTEyLjI5OCAwLTMuMTQ5LTIuODUxLTUuNzAyLTYtNS43MDJ6bTAgOGMtMS4xMDUgMC0yLS44OTUtMi0ycy44OTUtMiAyLTIgMiAuODk1IDIgMi0uODk1IDItMiAyem04IDZoLTMuMTM1Yy0uMzg1LjY0MS0uNzk4IDEuMzA5LTEuMjMyIDJoMy4xMzFsLjUgMWgtNC4yNjRsLS4zNDQuNTQ0LS4yODkuNDU2aC41NThsLjg1OCAyaC03LjQ4OGwuODU4LTJoLjQ3OWwtLjI4OS0uNDU2LS4zNDMtLjU0NGgtMi4wNDJsLTEuMDExLTFoMi40MmMtLjQzNS0uNjkxLS44NDgtMS4zNTktMS4yMzItMmgtMy4xMzVsLTQgOGgyNGwtNC04em0tMTIuNzk0IDZoLTMuOTdsMS43NjQtMy41MjggMS41MTYgMS41MjhoMS41NDlsLS44NTkgMnptOC44MDgtMmgzLjc1bDEgMmgtMy44OTJsLS44NTgtMnoiLz48L3N2Zz4="},154:function(n,t){n.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTYgMjR2LTJoLTh2Mmg4em0wLTI0djJoLTh2LTJoOHptMiAwaDFjMi43NjIgMCA1IDIuMjM5IDUgNXYxaC0ydi0xYzAtMS42NTQtMS4zNDYtMy0zLTNoLTF2LTJ6bTYgMTZoLTJ2LThoMnY4em0tMTggOGgtMWMtMi43NjIgMC01LTIuMjM5LTUtNXYtMWgydjFjMCAxLjY1NCAxLjM0NiAzIDMgM2gxdjJ6bTE4LTZ2MWMwIDIuNzYxLTIuMjM4IDUtNSA1aC0xdi0yaDFjMS42NTQgMCAzLTEuMzQ2IDMtM3YtMWgyem0tMjQtMTJ2LTFjMC0yLjc2MSAyLjIzOC01IDUtNWgxdjJoLTFjLTEuNjU0IDAtMyAxLjM0Ni0zIDN2MWgtMnptMCAyaDJ2OGgtMnYtOHoiLz48L3N2Zz4="},164:function(n,t,e){n.exports=e.p+"static/first-main-d33f14ece19941b9a016b0993ec48bf1.jpg"},165:function(n,t,e){n.exports=e.p+"static/first800x900-984049c297a4c3b9503559cbe9fd42f9.png"},166:function(n,t,e){n.exports=e.p+"static/first480x750-d9e78d60a8e62d157c7606410fad992c.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-e59763466aac4fe9b6f3.js.map