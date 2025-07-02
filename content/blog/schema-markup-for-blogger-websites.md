---
title: "How To add Schema Markup to Blogger Website"
excerpt: "Learn to add schema markup to blogger website and search results to enhance SEO. Add schema structured markup to blogger website today."
date: "2024-11-04"
author:
  name: "Joe Calih"
  avatar: "/authors/08.jpg"
  description: "Nairobi photographer and developer who captures portraiture, landscapes, weddings, and photo studios."
category: "SEO"
image: "/blogger-schema.webp"
views: 5432
---

Schema is a type of structured data used in websites to explain the type of content published to give rich search results for a post. In blogger, we can easily use schema markup by specifying the part of schema needed for a post type or page. Today we are going to see how to add the schema markup to our blogger templates by adding the code as specified in each field below. Without wasting more time on explanation let’s jump into the setup fast and easy. Your blogger schema is stepped away.

Before we venture a lot into the schema markup, I think it’s rather good to mention what all the terms stand for.

## What Is Schema?

**Schema markup** is the Markup that you use on your website to help the search engines return more informative results for users. Just Use rich snippets, and you will be in place to understand exactly what schema markup Upon is all about Applying. This Originated from [**Kiss Metrics**](http://neilpatel.com/)**.**

If you apply an article schema markup to your blogger blog, the results will be that the post meta description will appear first in search results to fast answer the searched topic and that`s where the schema applies. Schema examples are derived from schema.org and they can also be called structured data markups. For better understanding, I already made a good explanation of a post on how schema markup works and other complex schemas .org examples.

**Read On**: [How To Add Schema Structured Data To Blogger](https://joecalih.co.ke/how-to-add-structured-data-to-blogger/)

Let`s see different schema markups that we can include in the blogger blog.

### How to Use Schema Markup in Blogger

**Step 1.** Log in to Blogger and choose your specific website to add the schema code.  
**Step 2.** Reach out to the left commands by navigating to them to the Template command.  
**Step 3.** Click on the template command and then locate the Edit HTML next to Customize.  
**Step 4.** Click anywhere in your code and then click on Ctrl+F in Windows or CMD+F in Mac.  
**Step 5.** Search for **Every Part of the Code Indicated.**

#### **1. Site Navigation Schema**

Site navigation element schema is responsible for specifying the label that your post lands at and makes it easy for search engines to know where your post is stationed in the categories. To add the site navigation element schema search for the below code.  
**<nav>** or **<nav id=**  
After finding the ABOVE code then you will have to place the schema code as shown below.

> <nav id=’topnav’ itemscope=’itemscope’ itemtype=’http://schema.org/SiteNavigationElement’ role=’navigation’>

That`s all with adding site navigation element schema. You will have to validate your schema by testing it in the structured data testing tool from Google and other search engines that I am going to provide below.

#### 2. Webpage Schema Markup

Being that you are using your website for many links then it’s good if you include a website schema markup since the schema will get you a site links search box structured markup below your homepage in search results. I am pretty sure some of us are not that familiar with the site links search box structure and it will look as attached below.  
To add the webpage schema markup to your blogger website, search for the below code.  
**<body>** or **<body**  
It will be embedded in the opening of the body code so that the schema can help crawl all over the site to get links and posts. Now you will change the code to look as shown below.

> <body class=’index’ itemscope=” itemtype=’http://schema.org/WebPage’>

That’s all with the webpage schema markup implementation. This kind of schema takes time before you receive the results in search engines. To make sure you get the site links search box then you have to make an effort to make your website recognized by search engines as they use the schema to crawl your blogger website.

#### 3. WP header Schema

Sometimes websites are made in a way that crawlers can’t get the navigation of your menu through the header to know that your visitors can navigate well through. On this occasion, we use the WP header schema markup to make your blogger header and menu be crawled well by search engine bots. To add the WP header schema, search for the below code.  
<header> Or <header-wrapper  
You will find the above code and customize it by adding the schema.org markup as shown below. Act accordingly.

> <div id=’header-wrapper’ itemscope=’itemscope’ itemtype=’http://schema.org/WPHeader’>

That`s how we expect the header wrapper code will look after adding the schema.org link URL with the code to support the WP header schema. If you got any difficulty contact me for help.

#### 4. Blog Schema Markup

This is a simple blogger blog website schema.org integration to add structured data to your website. To add the blog schema, search for the below codes in your template.  
**<Content-wrapper>** Or **<main-wrapper>**  
After finding the above code, then you have to change it to look like the presented way below.

> <div id=’content-wrapper’ itemscope=’itemscope’ itemtype=’http://schema.org/Blog’ role=’main’>

That’s all with adding the blog schema structured data from schema.org. Let’s see another schema example to add to Blogger.

#### 5. Blog posting Schema

Blog posting changes the way your schema takes time to work in search results. Rumors have I that blog posting is the only schema.org structured data that will help your post get indexed quickly. This is because the crawlers already know your blog and content and thus it’s best when you want to specify on a personal blog. How to add this schema markup is a little task but now we are going to carry out this in a couple of steps which I am going to take you through them.  
First of all, search for the code below.  
**<div class=’post hentry uncustomized-post-template’ >**  
Now you will change the above to look like as shown below.

> <div class=’post hentry uncustomized-post-template’ itemscope=’itemscope’ itemtype=’http://schema.org/BlogPosting’>

We are now halfway through going to make sure the blog posting schema is on your website.  
Now search also for the below code.  
**<article class=’post entry’ expr:id=’data:post.id’>**  
You will have to change the above code to customize it to look like the below one.

> <article class=’post hentry’ expr:id=’data:post.id’ itemscope=” itemtype=’http://schema.org/BlogPosting’>

That’s all with the blog Posting schema.org structured markup.

#### 6. Person Blogger Schema

Person schema talks more about the writer of the post or the one who owns the blogger blog as the author. The person schema markup is the best to help get the local business schema working in search results. Let’s see how to add the Person schema markup in Blogger.  
Search for the below code.  
**<div class=’author-profile’ itemprop=’author’ >**  
Now you will change the code to reflect the one shown below. Change it.

> <span class=’fn author’ itemprop=’author’ itemscope=’itemscope’ itemtype=’http://schema.org/Person’>

### 7. WP Sidebar Schema

the WP sidebar helps the search engines navigate to your sidebar and know the schema markup used in the exercise. Let’s see how to add the WP sidebar schema.org schema markup.  
Search for the below code in your template code.  
**<div id=’sidebar-wrapper’**  
Now I’ll change the above code to the one shown below.

> <div id=’sidebar-wrapper’ itemscope=’itemscope’ itemtype=’http://schema.org/WPSideBar’>

That is all on adding schema to the blogger blog. In some cases, we have a more complex schema for people who use specific blogger websites. To get more schema markups read the below posts to get more info.  
Read More: [Social Profile Schema Markup For Blogger](https://joecalih.co.ke/social-profile-structured-data-for-blogger-website/)
