import{p as a,a as s,o as e,c as t,b as r,F as l,r as i,d as n,w as o,e as d,v as u,f as c,g as p,t as m,h as g,i as v,j as h,k as f}from"./vendor.11af6117.js";a("data-v-2453b234");const b=r("div",null,[r("h1",null,"Image Approval Demo")],-1),w={class:"main-wrapper"};s();const y={expose:[],setup:a=>(a,s)=>{const n=i("router-view");return e(),t(l,null,[b,r("div",w,[r(n,{key:a.$route.path})])],64)},__scopeId:"data-v-2453b234"};var _={data(){const a=[],s=n("");return o(s,((s,e)=>{if(a.length=0,!s)return;let t=s.trim();t.length<=0||t.trim().split("\n").forEach(((s,e)=>{if(console.log(s),s.indexOf(",")>0){let e=s.split(",");a.push({id:e[1].trim(),url:e[0].trim()})}}))})),{images:s,items:a}}};const k=p();a("data-v-43524a86");const x={class:"sidebar-right"},I=r("h2",null,"Images CSV",-1),j=r("input",{type:"checkbox",id:"nav-trigger",class:"nav-trigger"},null,-1),V=r("label",{for:"nav-trigger"},null,-1),z={class:"site-wrap"};s();const A=k(((a,s,n,o,p,g)=>{const v=i("lazy-image");return e(),t(l,null,[r("div",x,[I,d(r("textarea",{rows:25,placeholder:"image_url, id","onUpdate:modelValue":s[1]||(s[1]=a=>p.images=a)},null,512),[[u,p.images]])]),j,V,r("div",z,[(e(!0),t(l,null,c(p.items,((a,s)=>(e(),t("div",{key:a.id,class:"img-container"},[r("div",null,"#"+m(s+1)+" - "+m(a.id),1),r(v,{src:a.url,id:a.id},null,8,["src","id"])])))),128))])],64)}));_.render=A,_.__scopeId="data-v-43524a86";const C=v({history:g(),routes:[{path:"/",component:_}]});const D=h(y);D.use(C),D.use(f),D.mount("#app");
