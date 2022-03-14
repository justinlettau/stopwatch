import{j as m,r as d,R as g,a as x}from"./vendor.365aa341.js";const y=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}};y();const e=m.exports.jsx,c=m.exports.jsxs,p=m.exports.Fragment;function u({children:l,label:s}){return c("div",{children:[e("span",{className:"text-lg leading-none",children:l}),e("span",{className:"block text-sm leading-none text-gray-500",children:s})]})}function i({value:l}){const s=("0"+Math.floor(l/6e4%60)).slice(-2),o=("0"+Math.floor(l/1e3%60)).slice(-2),a=("0"+Math.floor(l/10%100)).slice(-2);return c(p,{children:[c("span",{className:"font-semibold",children:[s,":",o]}),c("span",{className:"text-[80%] font-thin",children:[".",a]})]})}function v({data:l}){const s=l.length,o=l.map(r=>r.milliseconds),a=s>0?Math.min(...o):0,t=s>0?Math.max(...o):0,n=s>0?o.reduce((r,f)=>r+f,0)/s:0;return c(p,{children:[c("div",{className:"mb-10 flex gap-10",children:[e(u,{label:"Min",children:e(i,{value:a})}),e(u,{label:"Max",children:e(i,{value:t})}),e(u,{label:"Average",children:e(i,{value:n})})]}),e("table",{children:e("tbody",{children:l.map(r=>c("tr",{children:[e("td",{className:"py-1",children:c("span",{className:"text-gray-500",children:["#",r.id]})}),e("td",{className:"px-2 py-1",children:e(i,{value:r.milliseconds})})]},r.id))})})]})}var b="/assets/play.8bea5786.svg",N="/assets/stop.b1f4c39a.svg";function S({onStop:l}){const[s,o]=d.exports.useState(null),[a,t]=d.exports.useState(null),n=a!=null,r=n?+(s||0)-+a:0;return d.exports.useEffect(()=>{let h;return n&&(h=setInterval(()=>o(new Date),5)),()=>clearInterval(h)}),c("div",{className:"flex flex-col justify-center gap-5",children:[e("div",{className:"text-6xl",children:e(i,{value:r})}),e("div",{className:"flex gap-5",children:e("button",{type:"button",onClick:()=>{n?(l(r),t(null)):(o(new Date),t(new Date))},className:"rounded-full bg-sky-500 p-4 transition-colors hover:bg-sky-600",children:e("img",{src:n?N:b})})})]})}function M(){const[l,s]=d.exports.useState([]);return e("main",{className:"container mx-auto",children:c("div",{className:"flex flex-col",children:[e("section",{className:"border-b bg-gray-50 p-10",children:e(S,{onStop:a=>{s(t=>[{milliseconds:a,id:t.length+1},...t])}})}),e("section",{className:"p-10",children:e(v,{data:l})})]})})}g.render(e(x.StrictMode,{children:e(M,{})}),document.getElementById("root"));
