"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[968],{3862:function(e,t,i){i.d(t,{Cm:function(){return _},TW:function(){return m},fO:function(){return u},q8:function(){return d},sy:function(){return f}});var n=i(5861),a=i(7757),s=i.n(a),r=i(1044),c="https://api.themoviedb.org/3",l="3c137c4d293c8ccacc79a0998fff8ad4",o=function(){var e=(0,n.Z)(s().mark((function e(){var t,i,n,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e.next=3,r.ZP.get(t);case 3:return i=e.sent,n=i.data,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function u(){return o("".concat(c,"/trending/movie/day?api_key=").concat(l))}function d(e){return o("".concat(c,"/movie/").concat(e,"?api_key=").concat(l))}function m(e){return o("".concat(c,"/movie/").concat(e,"/credits?api_key=").concat(l,"&language=en-US"))}function _(e){return o("".concat(c,"/movie/").concat(e,"/reviews?api_key=").concat(l,"&language=en-US&page=1"))}function f(e,t){return o("".concat(c,"/search/movie?api_key=").concat(l,"&page=").concat(t,"&query=").concat(e,"&language=en-US&include_adult=false"))}},2968:function(e,t,i){i.r(t),i.d(t,{default:function(){return q}});var n=i(885),a=i(2791),s=i(7689),r=i(3862),c=i(6731),l=i(4373),o="FilmDetails_sectionFilm__vO4j-",u="FilmDetails_serchContainer__IGs1Q",d="FilmDetails_goBack__fKgWQ",m="FilmDetails_sectionDetails__zIJqT",_="FilmDetails_mivieContainer__uRfX6",f="FilmDetails_detailsImg__njxP3",v="FilmDetails_detailsTitle__DFmbO",h="FilmDetails_detailsText__eRpbE",p="FilmDetails_detailsScore_span__hlxQD",g="FilmDetails_detailsSecont_title__K1gEc",x="FilmDetails_detailsDescription__ZzZ-R",j="FilmDetails_more__jstgX",D="FilmDetails_link__a-xqO",F="FilmDetails_active__O-eQ+",N=i(2007),k=i.n(N),w=i(297),y=i(184);function b(e){var t,i,n,a,r,N,k,b=e.films,q=(0,s.TH)(),O=(null===q||void 0===q||null===(t=q.state)||void 0===t||null===(i=t.from)||void 0===i?void 0:i.pathname)+(null===q||void 0===q||null===(n=q.state)||void 0===n||null===(a=n.from)||void 0===a?void 0:a.search);return(0,y.jsx)("section",{className:o,children:(0,y.jsxs)("div",{className:u,children:[(0,y.jsxs)(c.rU,{to:null!==O&&void 0!==O?O:"/",className:d,children:[(0,y.jsx)(l.UkU,{className:m}),"Go back"]}),(0,y.jsxs)("div",{className:_,children:[(0,y.jsx)("img",{alt:b.original_title,src:b.poster_path?"https://image.tmdb.org/t/p/w500/".concat(b.poster_path):w,className:f}),(0,y.jsxs)("div",{children:[(0,y.jsx)("h1",{className:v,children:b.title}),(0,y.jsxs)("div",{children:[(0,y.jsxs)("p",{className:h,children:["Score:",(0,y.jsx)("span",{className:p,children:b.vote_average.toFixed(1)})]}),(0,y.jsx)("h3",{className:g,children:"Overview: "}),(0,y.jsx)("span",{className:x,children:b.overview}),(0,y.jsx)("h3",{className:g,children:"Genres: "}),(0,y.jsx)("ul",{className:x,children:b.genres.map((function(e){return(0,y.jsx)("li",{children:e.name},e.id)}))}),(0,y.jsx)("h3",{className:g,children:"Additional information:"}),(0,y.jsxs)("ul",{className:j,children:[(0,y.jsx)("li",{children:(0,y.jsx)(c.OL,{to:"cast",className:function(e){return e.isActive?[F]:[D]},state:{from:null!==(r=null===(N=q.state)||void 0===N?void 0:N.from)&&void 0!==r?r:"/"},children:"Cast"})}),(0,y.jsx)("li",{children:(0,y.jsx)(c.OL,{to:"reviews",className:function(e){return e.isActive?[F]:[D]},state:{from:null===(k=q.state)||void 0===k?void 0:k.from},children:"Reviews"})})]}),(0,y.jsx)(s.j3,{})]})]})]})]})})}b.prototypes={films:k().arrayOf(k().shape({id:k().number.isRequired,vote_average:k().number.isRequired,original_title:k().string.isRequired,poster_path:k().string.isRequired,title:k().string.isRequired,overview:k().string.isRequired,genres:k().arrayOf(k().string)}))};var q=function(){var e=(0,s.UO)().movieId,t=((0,s.TH)(),(0,a.useState)(null)),i=(0,n.Z)(t,2),c=i[0],l=i[1];return(0,a.useEffect)((function(){(0,r.q8)(e).then((function(e){l(e)})).catch((function(e){console.log(e),alert("sorry not found")}))}),[e]),(0,y.jsx)(y.Fragment,{children:c&&(0,y.jsx)(b,{films:c})})}},297:function(e,t,i){e.exports=i.p+"static/media/dafaultImg.aba1731045e04d7a71aa.jpg"}}]);
//# sourceMappingURL=968.a8c7cb92.chunk.js.map