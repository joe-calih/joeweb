---
title: "Anti Adblocker Script For Blogger Website"
excerpt: "Get Anti Adblock Script For Blogger to block Blockers in browsers that would make you earn less. Learn to add an anti-adblocker to Blogger."
date: "2024-04-15"
author:
  name: "Joe Calih"
  avatar: "/authors/08.jpg"
  description: "Joecalih is a 10+ years Pro web developer with of experience in React and Next.js."
category: "Blogger"
image: "/AdBlocker.webp"
views: 5432
---


The main aim of blogging is to make money, when someone comes from nowhere and removes ads from your blogger blog by using adblocker in browsers, we implement add blockers to make their ad-blocking plugins not work on your blogger website. It’s easy to implement that, you will notice some increase in your revenue since most people using the internet prefer using adblockers and now on your website, they will have to see them since they will not be blocked.

We use javascript code to make the plugin of Adblocker not work. It’s a plugin blogger code that is used like any other gadget or widget. The widget is derived from blockadblock.com and is so efficient in all browsers to make sure you will not miss revenues due to blocking of your ads during browsing. Let’s see the code and how to add it to [Blogger](/category/blogger).

### How To Add Anti Adblock Script To Blogger

1.  Log in to [Blogger](http://blogger.com/).
2.  Navigate to the sidebar options and click on layout.
3.  Move to the sidebar and click on Edit.
4.  On the opened dialogue box click on Edit HTML/Javascript.
5.  Enter the code BELOW in the code box provided.

```
<style>#g207{position:fixed!important;position:absolute;top:0;top:expression ((t=document.documentElement.scrollTop?document.documentElement.scrollTop:document    .body.scrollTop)+"px");    left:0;width:100%;height:100%;background-color:#fff;opacity:0.9;filter:alpha(opacity=90);display:block}#g207 p{opacity:1;filter:none;font:bold 16px Verdana,Arial,sans-serif;text-align:center;margin:20% 0}#g207 p a,#g207 p i{font-size:12px}#g207 ~ *{display:none}</style><noscript><i id=g207><p>Please enable JavaScript!<br />Bitte aktiviere JavaScript!<br />S'il vous pla&icirc;t activer JavaScript!<br />Por favor,activa el JavaScript!<br /><a href="http://antiblock.org/">antiblock.org</a></p></i></noscript><script>(function(w,u){var d=w.document,z=typeof u;function g207(){function c(c,i){var e=d.createElement('i'),b=d.body,s=b.style,l=b.childNodes.length;if(typeof i!=z){e.setAttribute('id',i);s.margin=s.padding=0;s.height='100%';l=Math.floor(Math.random()*l)+1}e.innerHTML=c;b.insertBefore(e,b.childNodes[l-1])}function g(i,t){return !t?d.getElementById(i):d.getElementsByTagName(t)};function f(v){if(!g('g207')){c('<p>Please disable your ad blocker!<br/>This site is supported by the advertisement <br/> Please disable your ad blocker to support us!!! </p>','g207')}};(function(){var a=['Adrectangle','PageLeaderAd','ad-column','advertising2','divAdBox','mochila-column-right-ad-300x250-1','searchAdSenseBox','ad','ads','adsense'],l=a.length,i,s='',e;for(i=0;i<l;i++){if(!g(a[i])){s+='<a id="'+a[i]+'"></a>'}}c(s);l=a.length;for(i=0;i<l;i++){e=g(a[i]);if(e.offsetParent==null||(w.getComputedStyle?d.defaultView.getComputedStyle(e,null).getPropertyValue('display'):e.currentStyle.display    )=='none'){return f('#'+a[i])}}}());(function(){var t=g(0,'img'),a=['/adaffiliate_','/adops/ad','/adsales/ad','/adsby.','/adtest.','/ajax/ads/ad','/controller/ads/ad','/pageads/ad','/weather/ads/ad','-728x90-'],i;if(typeof t[0]!=z&&typeof t[0].src!=z){i=new Image();i.onload=function(){this.onload=z;this.onerror=function(){f(this.src)};this.src=t[0].src+'#'+a.join('')};i.src=t[0].src}}());(function(){var o={'http://pagead2.googlesyndication.com/pagead/show_ads.js':'google_ad_client','http://js.adscale.de/getads.js':'adscale_slot_id','http://get.mirando.de/mirando.js':'adPlaceId'},S=g(0,'script'),l=S.length-1,n,r,i,v,s;d.write=null;for(i=l;i>=0;--i){s=S[i];if(typeof o[s.src]!=z){n=d.createElement('script');n.type='text/javascript';n.src=s.src;v=o[s.src];w[v]=u;r=S[0];n.onload=n.onreadystatechange=function(){if(typeof w[v]==z&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){n.onload=n.onreadystatechange=null;r.parentNode.removeChild(n);w[v]=null}};r.parentNode.insertBefore(n,r);setTimeout(function(){if(w[v]!==null){f(n.src)}},2000);break}}}())}if(d.addEventListener){w.addEventListener('load',g207,false)}else{w.attachEvent('onload',g207)}})(window);</script>
```

Click On Save and that’s all.

I hope you liked the tutorial idea and now you can use your blogger blog to generate more revenue for your effort. Till next time, do remember to [ask me](/contact) for any support or assistance if any.

Read Also: [Free Instagram Feed Widget For Bloggers](https://joecalih.co.ke/social-media-sidebar-widget-for-blogger/)