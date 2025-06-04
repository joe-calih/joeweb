---
title: "Speedup A Blogger with Image Lazy Load Script"
excerpt: "Lazy load Blogger images to increase your website speed with image lazy load script. Learn to add image lazy load to better SEO ranking today"
date: "2023-12-28"
author:
  name: "Joe Calih"
  avatar: "/authors/08.jpg"
  description: "Nairobi photographer and developer who captures portraiture, landscapes, weddings, and photo studios."
category: "Blogger"
image: "/Speedup.webp"
views: 73347
---


Faster-loading websites impress Search Engines. So before we waste more time explaining how good it is to optimize your blogger blog images by using blogger lazy load script. Let me break down how it works. It reduces the flow of page load by making images appear but load slowly as the entire blogger page loads with content. I imagine how fast your blogger blog post images will load when you have compressed them and used the lazy load script in your template. Superfast. After that make sure that you test your blogger's blog speed and thank me later.

### Image Lazy Load Script to Speed Bogger

Follow The Guide Below:-  
1: Open [**Blogger.com**](http://www.blogger.com/) and log in to your blogger Dashboard.  
2: Choose The Blogger Blog You want to add the Image lazy load script.  
3: Navigate to the Template option  
Click on the template option on the left side of the blogger dashboard to take you to the template editing part.  
4: Edit the **HTML** option next to the Customize option.  
5: Use Ctrl + F to display the search panel on the right upper column of the code block.  
Step 6: Click on the dialogue box and search for the </head>.  
Step 7: Press enter and click on the upper part of the </head> tag just before it.  
8: Place blogger Blog Image Lazy Load Script Code.  

```
<!-- lazy load start Semdeals.com-->
<script type='text/javascript'>//<![CDATA[
(function(a){a.fn.lazyload=function(b){var c={threshold:0,failurelimit:0,event:"scroll",effect:"show",container:window};if(b){a.extend(c,b)}var d=this;if("scroll"==c.event){a(c.container).bind("scroll",function(b){var e=0;d.each(function(){if(a.abovethetop(this,c)||a.leftofbegin(this,c)){}else if(!a.belowthefold(this,c)&&!a.rightoffold(this,c)){a(this).trigger("appear")}else{if(e++>c.failurelimit){return false}}});var f=a.grep(d,function(a){return!a.loaded});d=a(f)})}this.each(function(){var b=this;if(undefined==a(b).attr("original")){a(b).attr("original",a(b).attr("src"))}if("scroll"!=c.event||undefined==a(b).attr("src")||c.placeholder==a(b).attr("src")||a.abovethetop(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.rightoffold(b,c)){if(c.placeholder){a(b).attr("src",c.placeholder)}else{a(b).removeAttr("src")}b.loaded=false}else{b.loaded=true}a(b).one("appear",function(){if(!this.loaded){a("<img />").bind("load",function(){a(b).hide().attr("src",a(b).attr("original"))[c.effect](c.effectspeed);b.loaded=true}).attr("src",a(b).attr("original"))}});if("scroll"!=c.event){a(b).bind(c.event,function(c){if(!b.loaded){a(b).trigger("appear")}})}});a(c.container).trigger(c.event);return this};a.belowthefold=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).height()+a(window).scrollTop()}else{var d=a(c.container).offset().top+a(c.container).height()}return d<=a(b).offset().top-c.threshold};a.rightoffold=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).width()+a(window).scrollLeft()}else{var d=a(c.container).offset().left+a(c.container).width()}return d<=a(b).offset().left-c.threshold};a.abovethetop=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).scrollTop()}else{var d=a(c.container).offset().top}return d>=a(b).offset().top+c.threshold+a(b).height()};a.leftofbegin=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).scrollLeft()}else{var d=a(c.container).offset().left}return d>=a(b).offset().left+c.threshold+a(b).width()};a.extend(a.expr[":"],{"below-the-fold":"$.belowthefold(a, {threshold : 0, container: window})","above-the-fold":"!$.belowthefold(a, {threshold : 0, container: window})","right-of-fold":"$.rightoffold(a, {threshold : 0, container: window})","left-of-fold":"!$.rightoffold(a, {threshold : 0, container: window})"})})(jQuery);$(function(){$("img").lazyload({placeholder:"http://i22.servimg.com/u/f22/15/42/72/40/grey10.gif",effect:"fadeIn",threshold:"-50"})})//]]></script>
<!-- lazy load end -->
```

**NOTE**: The above Script is Only to Increase your Blogger Image Loading Speed People who Disables JavaScript on their Browsers Can’t Able to See Pictures in Your Blog Post. So This can Solve your Confusion related to This Script. But that's so rare.

**Conclusion on Blogger Image Lazy Load Script**  
Lazy Load Plugin is a J query function that simply delays the loading of your blog images. Using the script will make your texts and important sections show before the images are loaded.  
Lazy Load also loads your images on a scroll with animations i.e. as you scroll down your blog, all your images are loaded one by one thereby speeding up your BlogSpot blog.  
  
Thank You for being part of this good article. I hope that I have provided some good [SEO](/category/SEO) information that can help you Design your Blogger Blog Best for ranking. If you face any difficulty while implementing the following fields please reach me by Commenting below Or [Contact Me.](/contact)