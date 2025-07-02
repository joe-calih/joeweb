---
title: "Open Graph & Twitter (X) Meta Tags for Blogger"
excerpt: "Get X cards and open graph meta tags for blogger websites. Make our website URL appear better on Twitter and Facebook social media cards."
date: "2023-05-15"
author:
  name: "Joe Calih"
  avatar: "/authors/08.jpg"
  description: "John is a seasoned web developer with 10 years of experience in React and Next.js."
category: "SEO"
image: "/facebook.jpeg"
views: 5432
---

What are meta tags and Twitter tags, Meta tags are snippets of text that describe a page’s content for search engines. In other words, meta tags help to structure content and transform human language into machine language. Meta tags are widely used in sharing blogger website posts to social media through Facebook open graphs and Twitter cards. They both change the way your URL will look on social media. Open graphs help show different markups on social media by displaying the content images and small detail spinets by just sharing the URL and that is why we are to add Open Graph Meta Tags & Twitter Cards Markup to Blogger Blog.

We are going to highlight the top open graph codes and Twitter cards that you need to integrate into your website for better results. Make an effort to add them to your blogger website and thank me later for the rich Facebook open graph, Twitter cards, and Google publisher meta tags that will turn your CTR to what you never even thought of in blogging. Try them out as I have highlighted below with step-to-step integration to your blogger blog website today.

I have combined all the code from Facebook open graph protocol and Twitter cards and also google publisher code so that you can apply once on your blogger website without hustle. Also, I have the same code explained differently so that you can use them separately if you have one of them, and also a tutorial for testing whether you have either of them to avoid including the code twice. So here is the Facebook open graph which also works on WhatsApp, Twitter cards, and Google publisher markup all together code.

Facebook, Twitter Cards & Google Publisher Full Code

<!– Twitter Card Tags Start seohuk.com–>
<meta content=’summary_large_image’ name=’twitter:card’/>
<!– Title, URL & Description –>
<meta expr:content=’data:blog.pageName’ name=’twitter:title’/>
<meta expr:content=’data:blog.url’ name=’twitter:url’/>
<b:if cond=’data:blog.metaDescription’>
<meta expr:content=’data:blog.metaDescription’ name=’twitter:description’/>
<b:else/>
<meta expr:content=’data:post.snippet’ name=’twitter:description’/>
</b:if>
<!– Image –>
<b:if cond=’ data:blog.postImageUrl’>
<meta expr:content=’ data:blog.postImageUrl’ name=’twitter:image’/>
<meta content=’280′ property=’twitter:image:width’/>
<meta content=’150′ property=’twitter:image:height’/>
</b:if>
<!– Twitter specific –>
<meta content=’YOUR-TWITTER-PAGE-USERNAME‘ name=’twitter:site’/>
<meta content=’YOUR-TWITTER-PROFILE-USERNAME‘ name=’twitter:creator’/>
<!– Twitter Card Tags Ends joecalih.com–>

<!– Facebook OpenGraph starts–>
<meta content=’website’ property=’og:type’/>
<meta expr:content=’data:blog.title’ property=’og:site_name’/>
<!– Title, URL & Description –>
<meta expr:content=’data:blog.pageName’ property=’og:title’/>
<meta expr:content=’data:blog.canonicalUrl.https’ property=’og:url’/>
<b:if cond=’data:blog.metaDescription’>
<meta expr:content=’data:blog.metaDescription’ property=’og:description’/>
<b:else/>
<meta expr:content=’data:post.snippet’ property=’og:description’/>
</b:if>
<!– Image –>
<b:if cond=’data:blog.postImageUrl’>
<meta expr:content=’data:blog.postImageUrl’ property=’og:image’/>
<meta content=’1200′ property=’og:image:width’/>
<meta content=’630′ property=’og:image:height’/>
<b:else/>
<meta content=’YOUR-WEBSITE-LOGO-URL‘ property=’og:image’/>
</b:if>
<!– FB specific –>
<meta content=’YOUR-FACEBOOK-PROFILE-ID‘ property=’fb:admins’/>
<meta content=’YOUR-FACEBOOK-APP-ID‘ property=’fb:app_id’/>
<!– Facebook OpenGraph ends–>

<!– Google seorunk.com Open Graph Tags –>
<!– Title, URL & Description –>
<link expr:href=’data:blog.canonicalUrl.https’ rel=’canonical’/>
<meta expr:content=’data:blog.canonicalUrl.https’ property=’url’/>
<meta expr:content=’data:blog.pageName’ itemprop=’name’/>
<b:if cond=’data:blog.metaDescription’>
<meta expr:content=’data:blog.metaDescription’ itemprop=’description’/>
<b:else/>
<meta expr:content=’data:post.snippet’ itemprop=’description’/>
</b:if>
<!– Image –>
<b:if cond=’data:blog.postImageUrl’>
<meta expr:content=’data:blog.postImageUrl’ itemprop=’image’/>
<meta content=’180′ property=’width’/>
<meta content=’120′ property=’height’/>
</b:if>
<!– Google + specific –>
<link href=’GOOGLE-PAGE-URL‘ rel=’publisher’/>
<!– Google seorunk.com Open Graph Tags –>

The above was the full setup of the tutorial of the Facebook open graphs markup to blogger blogspot templates. It was easy I think and now for people who want to change the code in several parts the below part is yours now you can automate the CTR of your website by choosing the one separate add-on you want from the above code in separate so you can avoid maybe duplicate meta tags that will knock down your template by trying to do the task twice. 

How To Add Twitter Cards To Blogger

Twitter Cards change the look of every website posting URL and that brings on the on-page SEO that helps in ranking Twitter Cards vary in the size you have coded them to use when they appear in titter results. Look at my Twitter post results below. Take a look at the difference between shared links on Twitter from a link with an open graph and one without.

The About presentation shows a website without a Twitter open graph and that shows us how bad a URL looks in social media without markup open graphs. Let’s take a look also at a website with the Twitter open graph as presented below.

View the Best Projects Photos of Joecalih 2023🔥💯 https://t.co/gGUrm8lBxR— Joecalih (@joe_calih) April 12, 2023

Joecalih

Step 1. Log in to Blogger and choose your specific website to add the SEO code.
Step 2. Reach out to the left commands by navigating to them to the Template command
Step 3. Click on the template command and then locate the Edit HTML next to Customize.
Step 4. Click anywhere in your code and then click on Ctrl+F in Windows or CMD+F in Mac.
Step 5. Search for </head>
Step 6. Just ABOVE the Above code, paste the meta tags code below.

I Have Two Examples, The first Twitter card is set for the image resolution size while the second one has automatic image resizing dimensions so you never have to worry about anything yet in this.

First Twitter Card Code

 <!– Twitter Card Tags Start seohuk.com–>
<meta content=’summary_large_image’ name=’twitter:card’/>
<!– Title, URL & Description –>
<meta expr:content=’data:blog.pageName’ name=’twitter:title’/>
<meta expr:content=’data:blog.url’ name=’twitter:url’/>
<b:if cond=’data:blog.metaDescription’>
<meta expr:content=’data:blog.metaDescription’ name=’twitter:description’/>
<b:else/>
<meta expr:content=’data:post.snippet’ name=’twitter:description’/>
</b:if>
<!– Image –>
<b:if cond=’ data:blog.postImageUrl’>
<meta expr:content=’ data:blog.postImageUrl’ name=’twitter:image’/>
<meta content=’280′ property=’twitter:image:width’/>
<meta content=’150′ property=’twitter:image:height’/>
</b:if>
<!– Twitter specific –>
<meta content=’YOUR-TWITTER-PAGE-USERNAME‘ name=’twitter:site’/>
<meta content=’YOUR-TWITTER-PROFILE-USERNAME‘ name=’twitter:creator’/>
<!– Twitter Card Tags Ends seoblur.com–>

Second Twitter Cards Code ( Alternative)

<!– Twitter Cards with seohuk.com–>
<meta content=’summary’ name=’twitter:card’/>      
<meta content=’YOUR-TWITTER-PAGE-USERNAME‘ name=’twitter:site’/>       
<meta content=’YOUR-TWITTER-PAGE-USERNAME‘ name=’twitter:creator’/>
<b:if cond=’data:blog.pageType == &quot;index&quot;’>      
<meta expr:content=’data:blog.url’ name=’twitter:url’/>       
<meta expr:content=’data:blog.pageTitle’ name=’twitter:title’/>       
<b:else/>       
<meta expr:content=’data:blog.homepageUrl’ name=’twitter:url’/>       
<meta expr:content=’data:blog.pageName’ name=’twitter:title’/>       
</b:if> 
<b:if cond=’data:blog.metaDescription != &quot;&quot;’>      
<meta expr:content=’data:blog.metaDescription’ name=’twitter:description’/>       
</b:if>  
<b:if cond=’data:blog.postImageThumbnailUrl’>      
<meta expr:content=’data:blog.postImageThumbnailUrl’ name=’twitter:image’/>       
<b:else/>       
<meta content=’YOUR-BLOG-LOGO‘ name=’twitter:image’/>       
</b:if>       
<meta expr:content=’data:blog.homepageUrl’ name=’twitter:domain’/>
<!– end Twitter Cards with seoblur.com–>

Validate your Twitter cads by visiting: https://cards-dev.twitter.com/validator
How to validate is simple as it’s all about following the validation after clicking on the above link and testing one of your URLs to see if it has Twitter cards. Again you can also tweet any post on Twitter to see if it will look like the post below.

Let’s now take a look at open graphs since now we all know what we want in Twitter cards and how to use them in Blogger. Also, don’t leave if you are a WordPress user since we also have other different open graph formats for WordPress users.

Google Publisher Markup

<!– Google seohuk.com Open Graph Tags –>
<!– Title, URL & Description –>
<link expr:href=’data:blog.canonicalUrl.https’ rel=’canonical’/>
<meta expr:content=’data:blog.canonicalUrl.https’ property=’url’/>
<meta expr:content=’data:blog.pageName’ itemprop=’name’/>
<b:if cond=’data:blog.metaDescription’>
<meta expr:content=’data:blog.metaDescription’ itemprop=’description’/>
<b:else/>
<meta expr:content=’data:post.snippet’ itemprop=’description’/>
</b:if>
<!– Image –>
<b:if cond=’data:blog.postImageUrl’>
<meta expr:content=’data:blog.postImageUrl’ itemprop=’image’/>
<meta content=’180′ property=’width’/>
<meta content=’120′ property=’height’/>
</b:if>
<!– Google + specific –>
<link href=’GOOGLE-PAGE-URL‘ rel=’publisher’/>
<!– Google seoblur.com Open Graph Tags –>

Facebook Open Graph & Twitter Cards for WordPress

Facebook open graph and Twitter cards vary from blogger ones and they are completely different in their ways of submitting to the host files. The below code represents all the code needed for the exercise and that`s why I have combined them all for you to change the entities in the website posts since they are submitted every time you post. This can be simplified with the help of a plugin but in the meantime use the bellow code to automate your SEO results for good CTR.

Open graphs are Google's format for showing off content in rich views. With open graphs, many platforms support them giving your post URL a clean look to increase the click-through rate ( CTR ).  Bloggers can use the open graphs so they can show URL pictures when they share on WhatsApp app Facebook and Google Plus platforms. The same look you see in the Twitter cards above is the same look you are going to receive when you add the open graphs to your blogger website. Do you think that’s cool and better for your website? Then let’s start by adding the open graphs in a blogger blog.

<!– Update your html tag to include the itemscope and itemtype attributes. –>
<html itemscope itemtype=”http://schema.org/Article”> 
<!– Place this data between the <head> tags of your website –>
<title>Page Title. Maximum length 60-70 characters</title>
<meta name=”description” content=”Page description. No longer than 155 characters.” /> 
<!– Schema.org markup for Google+ –>
<meta itemprop=”name” content=”The Name or Title Here”>
<meta itemprop=”description” content=”This is the page description”>
<meta itemprop=”image” content=”http://www.example.com/image.jpg“> 
<!– Twitter Card data –>
<meta name=”twitter:card” content=”summary_large_image”>
<meta name=”twitter:site” content=”@publisher_handle”>
<meta name=”twitter:title” content=”Page Title”>
<meta name=”twitter:description” content=”Page description less than 200 characters”>
<meta name=”twitter:creator” content=”@author_handle”>
<!– Twitter summary card with large image must be at least 280x150px –>
<meta name=”twitter:image:src” content=”http://www.example.com/image.jpg“> 
<!– Open Graph data –>
<meta property=”og:title” content=”Title Here” />
<meta property=”og:type” content=”article” />
<meta property=”og:url” content=”http://www.example.com/” />
<meta property=”og:image” content=”http://example.com/image.jpg” />
<meta property=”og:description” content=”Description Here” />
<meta property=”og:site_name” content=”Site Name, i.e. Moz” />
<meta property=”article:published_time” content=”2013-09-17T05:59:00+01:00″ />
<meta property=”article:modified_time” content=”2013-09-16T19:08:47+01:00″ />
<meta property=”article:section” content=”Article Section” />
<meta property=”article:tag” content=”Article Tag” />
<meta property=”fb:admins” content=”Facebook numberic ID” />

NOTE: In WordPress, all the above code should be submitted each and every time you post on your website and that should be done with the help of a plugin so you can get complete access to the code. The fields should change each and every time you post and instead of using this, WordPress users prefer using plugins to simplify the work. That`s all for WordPress users.
