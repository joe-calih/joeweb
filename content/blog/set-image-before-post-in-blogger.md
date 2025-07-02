---
title: "How To Set Image Before Post In Blogger"
excerpt: "Set Blogger post Image Appear Before post in your blogger website post view. Follow the steps to add code to Blogger template to apply."
date: "2024-05-15"
author:
  name: "Joe Calih"
  avatar: "/authors/08.jpg"
  description: "Nairobi photographer and developer who captures portraiture, landscapes, weddings, and photo studios."
category: "Blogger"
image: "/facebook.jpeg"
views: 5432
---


Blog design brings many wants from different blogging niches and now people prefer seeing the image before viewing the content thus this brings us down to the reason our blogger website images should float before blog posts. Today we will take a look at the ways to make images appear before your blogger blog post content through j query codes that should be integrated into the blogger website theme code. For that, let’s see how to integrate the code. How To Set the First Image Appear Before Blog Post In [Blogger](http://joecalih.co.ke/category/blogger).

### Blogger Floating Image JQuery Code Integration

Below are the steps you will go through in adding the jQuery code to your blogger template code. Follow them save your template and refresh your blogger website blog page.  
Step 1. Log in to Blogger and choose your specific website to add the Star Rating code.  
Step 2. Reach out to the left commands by navigating to them to the Template command  
Step 3. Click on the template command and then locate the Edit HTML next to Customize.  
Step 4. Click anywhere in your code and then click on Ctrl+F in Windows or CMD+F in Mac.  
**Step 5.** Search for **</body>**  
**Step 6. Replace** the above line with the following code

> <b:if cond=’data:blog.pageType == &quot;item&quot;’>  
> <script type=’text/javascript’>//<![CDATA[  
> $(document).ready(function(){  
> // the order goes container -> body -> surround -> image  
> var body = $(‘.post-body’).first();  
> var container = $(body).parent();  
> var image = $(body).find(‘img’).first();  
> var surround = $(image).parent();  
> $(surround).prependTo(container);  
> });  
> //]]></script>  
> </b:if>  
> </body>

That`s all about making the first blogger website post image appear before the blog post content. You may be interested in the related topics below about blogger websites theme or contact me for more.
