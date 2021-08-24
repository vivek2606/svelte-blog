import{S as a,i as t,s as e,B as n,j as s,m as o,o as r,p as i,q as d,x as c,u as p,v as l,T as u,e as h,k as m,t as f,c as g,n as b,a as y,g as k,d as w,b as $,f as v,H as E,J as R}from"../../chunks/vendor-d60add4d.js";import{L as T}from"../../chunks/_layout-4a017f8c.js";function j(a){let t,e,n,s,o,r,i,d,c,p,l,u,T,j,x;return{c(){t=h("hr"),e=m(),n=h("p"),s=f("In this lab, we will build a random forest model to predict whether a given customer defaults or not. Credit default is one of the most important problems in the banking and risk analytics industry. There are various attributes which can be used to predict default, such as demographic data (age, income, employment status, etc.), (credit) behavioural data (past loans, payment, number of times a credit payment has been delayed by the customer etc.)."),o=m(),r=h("p"),i=f("We will start the process with data cleaning and preparation and then tune the model to find optimal hyperparameters."),d=m(),c=h("h3"),p=h("a"),l=f("Data Understanding and Cleaning"),u=m(),T=h("pre"),j=m(),x=h("pre"),this.h()},l(a){t=g(a,"HR",{}),e=b(a),n=g(a,"P",{});var h=y(n);s=k(h,"In this lab, we will build a random forest model to predict whether a given customer defaults or not. Credit default is one of the most important problems in the banking and risk analytics industry. There are various attributes which can be used to predict default, such as demographic data (age, income, employment status, etc.), (credit) behavioural data (past loans, payment, number of times a credit payment has been delayed by the customer etc.)."),h.forEach(w),o=b(a),r=g(a,"P",{});var m=y(r);i=k(m,"We will start the process with data cleaning and preparation and then tune the model to find optimal hyperparameters."),m.forEach(w),d=b(a),c=g(a,"H3",{id:!0});var f=y(c);p=g(f,"A",{href:!0});var $=y(p);l=k($,"Data Understanding and Cleaning"),$.forEach(w),f.forEach(w),u=b(a),T=g(a,"PRE",{class:!0}),y(T).forEach(w),j=b(a),x=g(a,"PRE",{class:!0}),y(x).forEach(w),this.h()},h(){$(p,"href","#data-understanding-and-cleaning"),$(c,"id","data-understanding-and-cleaning"),$(T,"class","language-python3"),$(x,"class","language-python")},m(a,h){v(a,t,h),v(a,e,h),v(a,n,h),E(n,s),v(a,o,h),v(a,r,h),E(r,i),v(a,d,h),v(a,c,h),E(c,p),E(p,l),v(a,u,h),v(a,T,h),T.innerHTML='<code class="language-python3"># Importing the required libraries\nimport pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\nimport seaborn as sns\n%matplotlib inline\n### To ignore warnings\nimport warnings\nwarnings.filterwarnings(&quot;ignore&quot;)\n</code>',v(a,j,h),v(a,x,h),x.innerHTML='<code class="language-python"><span class="token comment"># Reading the csv file and putting it into \'df\' object.</span>\ndf <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_csv<span class="token punctuation">(</span><span class="token string">\'credit-card-default.csv\'</span><span class="token punctuation">)</span>\ndf<span class="token punctuation">.</span>head<span class="token punctuation">(</span><span class="token punctuation">)</span></code>'},p:R,d(a){a&&w(t),a&&w(e),a&&w(n),a&&w(o),a&&w(r),a&&w(d),a&&w(c),a&&w(u),a&&w(T),a&&w(j),a&&w(x)}}}function x(a){let t,e;const u=[a[0],C];let h={$$slots:{default:[j]},$$scope:{ctx:a}};for(let s=0;s<u.length;s+=1)h=n(h,u[s]);return t=new T({props:h}),{c(){s(t.$$.fragment)},l(a){o(t.$$.fragment,a)},m(a,n){r(t,a,n),e=!0},p(a,[e]){const n=1&e?i(u,[1&e&&d(a[0]),0&e&&d(C)]):{};2&e&&(n.$$scope={dirty:e,ctx:a}),t.$set(n)},i(a){e||(c(t.$$.fragment,a),e=!0)},o(a){p(t.$$.fragment,a),e=!1},d(a){l(t,a)}}}const C={layout:"blog",title:"Random Forest - Credit Default Prediction",author:"Vivek Raj",date:"22.08.2021"};function H(a,t,e){return a.$$set=a=>{e(0,t=n(n({},t),u(a)))},[t=u(t)]}class P extends a{constructor(a){super(),t(this,a,H,x,e,{})}}export{P as default,C as metadata};