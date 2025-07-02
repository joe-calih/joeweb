---
title: "How To Add Adsense Ads in Blogger Posts"
excerpt: "Blogger Ads Between Blogger posts increase Ads vision. Add Google Adsense Ads Between blogger posts, Add the Code to blogger template"
date: "2023-05-15"
author:
  name: "Joe Calih"
  avatar: "/authors/08.jpg"
  description: "John is a seasoned web developer with 10 years of experience in React and Next.js."
category: "Blogger"
image: "/facebook.jpeg"
views: 5432
---


Adding Google AdSense ads between the blogger posts will increase the CTR of the ad and that will generate more revenue. To add the ads between a blogger post, we will have to alter the blogger post body code to allow it to support Google AdSense. After getting [approved for Google Adsense](/solve-adsense-disapproved-insufficient-content/) ads to apply them on your blogger blog, the addition of the Adsense ads between posts will increase the watch time since it’s not advisable you use floating AdSense ads. Let’s know how to add Adsense ads between blogger posts.

Before adding the ads in the middle of your posts it’s good we consider a few aspects concerning the way you will interact with your Adsense code. This includes the way you will be placing the ad between the written blogger posts in HTML view. Without getting you confused, let me give you the simple steps in which you will follow to add Adsense ads between blogger posts.

### How to Add Adsense Ads In the Middle Of Blogger Posts

To carry on with the above procedure, follow the below steps which have an easy explanation of how to place the codes in the template and post-editing HTML mode. Follow and implement.  
1: Login To [Blogger](http://blogger.com/).  
2: Move to Theme.  
3: Click on Edit HTML under the blog UI sample.  
4: Click anywhere in your template code.  
5: Click On Both Ctrl and F in Windows And Command F on MacBook.

6: Search for the following code **<data: post.body/>**

> You may find it twice or even three times but most probably use the second one for the bellow exercise. Make sure you save your blogger template theme incase you mess up you can go back.

7. Replace with the BELOW code.

> <div expr:id='”adsmiddle1″ + data:post.id’></div>  
> <b:if cond=’data:blog.pageType == “item”‘>  
> <b:if cond=’data:blog.pageType != &quot;static_page&quot;’>  
> <div style=”clear:both; margin:10px 0″>  
> <!– Add here the code of your ad –>  
> </div>  
> </b:if>  
> </b:if>  
> <div expr:id='”adsmiddle2″ + data:post.id’>  
> <data:post.body/>  
> </div>  
> <script type=”text/javascript”>  
> var obj0=document.getElementById(“adsmiddle1<data:post.id/>”);  
> var obj1=document.getElementById(“adsmiddle2<data:post.id/>”);  
> var s=obj1.innerHTML;  
> var r=s.search(/x3C!– adsense –x3E/igm);  
> if(r>0) {obj0.innerHTML=s.substr(0,r);obj1.innerHTML=s.substr(r+16);}  
> </script>

That’s It but you will change your **<!– Add here the code of your ad –>** code to the AdSense AD Code so you will have a simple way of applying it with simple words.

### Make Google Adsense Display In the Center Of Paragraph In Blogger

Also in some cases, you may like to make sure your Adsense code is centered so it looks orderly below a line in your blogger posts and that is possible by adding the code <center> how I will add to the code above so you can just copy and paste the code.

> <div expr:id='”adsmiddle1″ + data:post.id’></div>  
> <b:if cond=’data:blog.pageType == “item”‘>  
> <b:if cond=’data:blog.pageType != &quot;static_page&quot;’>  
> <div style=”clear:both; margin:10px 0″>  
> <center>  
> <!– Add here the code of your ad –>  
> </center>  
> </div>  
> </b:if>  
> </b:if>  
> <div expr:id='”adsmiddle2″ + data:post.id’>  
> <data:post.body/>  
> </div>  
> <script type=”text/javascript”>  
> var obj0=document.getElementById(“adsmiddle1<data:post.id/>”);  
> var obj1=document.getElementById(“adsmiddle2<data:post.id/>”);  
> var s=obj1.innerHTML;  
> var r=s.search(/x3C!– adsense –x3E/igm);  
> if(r>0) {obj0.innerHTML=s.substr(0,r);obj1.innerHTML=s.substr(r+16);}  
> </script>

That’s it and now let’s get to the post area where we will have to add the below line. Ads placed in template editing appear in the middle of your blogger posts. Follow the below steps.

8: After adding the code to your template, then move to your post-dining area on blogger.com  
9: Switch from Compose To HTML view of the post-editing area in Blogger.  
10: Add the below and where you want it to appear in your blogger blog post.

> <!– adsense –>

Let’s look at some good examples of how it will look when you implement it in the middle of your blogger post body as indicated above.

This is How to add Adsense between blogger posts. The demo of the code adding text. Do as you see in this example, view the yellow Adsense code that’s how it should be. This is just a demo text. The demo text helps you know how you will place the code above. Here is the demo text.<br /><br /><!– Adsense –> This is How to add Adsense between blogger posts. This is a demo of the code adding text.

You should follow [Google Terms And Conditions](https://support.google.com/adsense/answer/1354736?hl=en&ref_topic=1271508). Adding the design of the above will not violate the Google ads placement structure and is also recommended. Thank you and contact Comment or me for more.
