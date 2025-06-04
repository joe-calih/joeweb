---
title: "How to Create Separate AMP Pages In Blogger"
excerpt: "Blogger AMP can be added to m=1 mobile redirect without adding AMP to whole Blogger Theme Template. Create Separate AMP Pages in Blogger."
date: "2023-05-15"
author:
  name: "Joe Calih"
  avatar: "/authors/08.jpg"
  description: "John is a seasoned web developer with 10 years of experience in React and Next.js."
category: "Blogger"
image: "/facebook.jpeg"
views: 5432
---


Blogger AMP is very vital for people who have news blogs and other blogs that would like to go on flash speed. To add AMP to Blogger is easy, as I well explained in the tutorial on How To Add AMP To Blogger now you can easily select the pages you would like to support AMP. Accelerated mobile pages help in ranking and so is when you apply to the correct pages. Today it will be more simple since we are going to create separate AMP Pages on the blogger website.

If you don’t understand this is that, instead of changing your whole blogger template to AMP. You can simply change the pages viewed on the m=1 to redirect to AMP. This is helpful for people who use the desktop version of your website. In large view this will not get the AMP version of your template instead, they will get the full website. While those who use mobile phones will be redirected to the [Accelerated Mobile Page](https://joecalih.co.ke/set-image-before-post-in-blogger/) version. Without wasting more time on Explanation let me tell you what you will need. This whole exercise will need you to have Href Meta Tags that are going to be used to specify on the AMP Language and you can find the tutorial on how to add them, the left part is the coding part of your blogger template. Let’s begin.

### AMP Pages On Blogger Mobile Redirect URL

a Mobile redirect URL means the m=1 value you see at the end of your URL when you load your website in mobile view. We implement AMP on these pages by Altering some of the code to make sure those who use mobile redirection are served under AMP.

**Step 1.**  
The first approach is going to [blogger.com](http://blogger.com/) and selecting the website you want to add the AMP to. Through the clear navigation left side command, select the template/ theme option and which will take you to EDIT HTML where you are going to Click on EDIT HTML and take it to your blogger website template theme code which we want to alter.  
Click anywhere in your template and click on Ctrl+F on Windows or Command F on Mac. This will display a dialogue box on the right side of the blogger template code unit.  
Enter the code

> <HTML expr:dir=’data:blog.languageDirection’ lang=’id’>

After finding the code shown above, then add the BELOW code to the one you have searched for Above.

> <b:attr cond=’data:blog.isMobileRequest == &quot;true&quot;’ name=’amp’ value=’amp’/>

**Step 2.**  
Now search for the code </head> and add the code BELOW just Above the </head tag.

```
<b:if cond='data:blog.pageType not in  {&quot;static_page&quot;,&quot;error_page&quot;} and  data:blog.isMobileRequest == &quot;true&quot; and not  data:blog.searchQuery'>https://cdn.ampproject.org/v0/amp-ad-0.1.js</b:if>
```

The Orange words with XXXX show the specific place where you will paste your Adsense code. That will be used to show ads on your AMP pages so you can obtain revenue from the AMP pages still.

**Step 3.**  
Replace the code </head> tag with the code below.

> <script async=’async’ custom-element=’amp-ad’ src=’https://cdn.ampproject.org/v0/amp-ad-0.1.js’/> &lt;/head&gt;&lt;!–<head/>–&gt;

**Step 4.**  
Below the code **<head>** paste the **BELOW** code.

> <link expr:href=’data:blog.homepageUrl + &quot;?m=1&quot;’ rel=’amphtml’/>

That’s all with adding AMP to separate page views in Blogger, As earlier mentioned you need to add amp Body and Head tags for them to work. Thanks a lot, ill catch you guys on the next one. Peace.