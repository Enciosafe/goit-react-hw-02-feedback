(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(5),r=n.n(s),i=n(6),o=n(7),l=n(11),d=n(10),u=n(3),b=n.n(u),j=n(0),m=function(e){var t=e.onIncrementGood,n=e.onIncrementNeutral,c=e.onIncrementBad,a=e.title;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:b.a.title,children:a}),Object(j.jsx)("button",{className:b.a.button,type:"button",onClick:t,children:"Good"}),Object(j.jsx)("button",{className:b.a.button,type:"button",onClick:n,children:"Neutral"}),Object(j.jsx)("button",{className:b.a.button,type:"button",onClick:c,children:"Bad"})]})},h=n(2),O=n.n(h),x=function(e){var t=e.good,n=e.neutral,c=e.bad,a=function(){return t+n+c};return Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{className:O.a.title,children:["Good: ",Object(j.jsx)("span",{children:t})," "]}),Object(j.jsxs)("p",{className:O.a.title,children:["Neutral: ",Object(j.jsx)("span",{children:n})]}),Object(j.jsxs)("p",{className:O.a.title,children:["Bad: ",Object(j.jsx)("span",{children:c})]}),Object(j.jsxs)("p",{className:O.a.title,children:["Total: ",Object(j.jsx)("span",{children:a()})]}),Object(j.jsxs)("p",{className:O.a.title,children:["Positive Feedback: ",Object(j.jsxs)("span",{children:[Math.round(100/a()*t),"%"]})]})]})},p=n(8),f=n.n(p),N=function(e){var t=e.message;return Object(j.jsx)("div",{children:Object(j.jsx)("p",{className:f.a.message,children:t})})},g=n(9),v=n.n(g),_=function(e){var t=e.state,n=e.incrementGood,c=e.incrementBad,a=e.incrementNeutral;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m,{onIncrementGood:n,onIncrementBad:c,onIncrementNeutral:a,title:"Please leave feedback"}),Object(j.jsx)("h2",{className:v.a.title,children:"Statistics"}),t.good+t.neutral+t.bad===0?Object(j.jsx)(N,{message:"No feedback given"}):Object(j.jsx)(x,{good:t.good,neutral:t.neutral,bad:t.bad})]})},k=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.incrementGood=function(){e.setState((function(e){return{good:e.good+1}}))},e.incrementNeutral=function(){e.setState((function(e){return{neutral:e.neutral+1}}))},e.incrementBad=function(){e.setState((function(e){return{bad:e.bad+1}}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsx)(_,{state:this.state,incrementGood:this.incrementGood,incrementNeutral:this.incrementNeutral,incrementBad:this.incrementBad})}}]),n}(a.a.Component);r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root"))},2:function(e,t,n){e.exports={title:"Statistics_title__3PVIg"}},3:function(e,t,n){e.exports={button:"FeedbackOptions_button__3n-hy",title:"FeedbackOptions_title__FYWqG"}},8:function(e,t,n){e.exports={message:"Notification_message__eciZi"}},9:function(e,t,n){e.exports={title:"Section_title__2S6oE"}}},[[17,1,2]]]);
//# sourceMappingURL=main.12b325b0.chunk.js.map