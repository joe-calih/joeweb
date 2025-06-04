---
title: "News Article Schema Markup For Blogger Blog"
excerpt: "Get news article schema markup for Blogger with Jslod-ld and microdata. Best structured data for news blogger websites to snippets in Google."
date: "2024-06-15"
author:
  name: "Joe Calih"
  avatar: "/authors/08.jpg"
  description: "Joecalih is a 10+ years Pro web developer with of experience in React and Next.js."
category: "SEO"
image: "/Google-News.webp"
views: 1867
---


Structured data is the definition of content in search engines to bring up a situation. In news articles, schema markup is used widely to show the news in the carousel view. News article schema markup is a necessity for any News blogger blog. Blogger environment blogs are hard to implement schema but widely encourage the use of schema markup. The main aim of a News Schema News Article is to understand news excerpts from post content.

You can use Blogger News Article [Schema Markup](https://joecalih.co.ke/how-to-add-schema-markup-to-blogger-website/) for both bloggers AMP a Non-AMP theme. The news schema markup includes some aspects that are needed by Search Engines. What they do is group up your work for the crawlers to know what the best, topic and the content are all about. Google displays the News article schema as a carousel view in search engines. If you want to try, write the **World News** in Google search and see what will happen next. You will see this. The News Schema markup is used with more than 50,000 domains.

[![News Schema](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisryjBWjbSRKLYNgLZUzZKFvIyyGSWvUoBrURA8ye4HkMUySjimi7JKkBibR-RVXgt6tRZhs3JB1_M5kGbKn5_q9evqBQclWm95TW4s8Ui7qip1cre-YdQnL3UbxzO1HhWefRndpDmsg-0bkRjSmwNcq3YYb1z168zgnCse0uXuj6c6wiZUCiJt1IDtVdU/s16000/News%20Article%20Schema%20Markup%20For%20Blogger%20Blog.png "News Schema")](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisryjBWjbSRKLYNgLZUzZKFvIyyGSWvUoBrURA8ye4HkMUySjimi7JKkBibR-RVXgt6tRZhs3JB1_M5kGbKn5_q9evqBQclWm95TW4s8Ui7qip1cre-YdQnL3UbxzO1HhWefRndpDmsg-0bkRjSmwNcq3YYb1z168zgnCse0uXuj6c6wiZUCiJt1IDtVdU/s771/News%20Article%20Schema%20Markup%20For%20Blogger%20Blog.png)

## News Article Structured Markup

The Shema Markup includes some of the best article search categories to locate important content within a post. It's good to take note of what it is made up of. The news article Schema Markup includes: -

**Dateline:** Locates where the News Article was produced.  
**Print Page:** The field indicates the name of the posted news article page.  
**Article Body:** The whole News article page  
**Article Section:** The category, Label or Snippet  
**Page start:** the start points of the news article page.  
**Page end:** the end of a page

These are the main Fields used by the News article schema markup to group out news article contents.

## How To Add News Article Schema Markup To Blogger

I had earlier mentioned that Google always acknowledges the js+load version of rich results from the schema and vocabulary because they are Google-based. In this case, we are going to use the ld+json of news article schema markup data in our blogger blog which I am going to instruct you nicely and easily.

First, before we integrate the rich schema, I have to ask if you use the amp version of posts in your blogger blog. Mostly AMP is not part of Google's plan to be used in bloggers since labels will always show errors but if you have AMP in your blogger blog then well and good because the news article schema markup of the ld+json will very well both work for AMP and Non-AMP websites.

JSON-LD: widely used on AMP and Non-AMP Blogs.  
MICRODATA: Only Amp versions of AMP pages are supported

In that case, that's why I chose the Json-ld news article schema markup over the microdata one when sharing with you. Without wasting so much time, I think now your blogger blog is fit to have the schema markup. Let's jump into the tutorial.

### JSLOD-LD News Article For Blogger

Google recommends the use of the following version, so use this one instead of the one below. It will change your blogger's blog-rich results.

```
<script type="application/ld+json"> {   "@context": "http://schema.org",   "@type": "NewsArticle",   "mainEntityOfPage": {     "@type": "WebPage",     "@id": "https://google.com/article"   },   "headline": "Article headline",   "image": {     "@type": "ImageObject",     "url": "https://google.com/thumbnail1.jpg",     "height": 800,     "width": 800   },   "datePublished": "2017-02-05T08:00:00+08:00",   "dateModified": "2017-02-05T09:20:00+08:00",   "author": {     "@type": "Person",     "name": "John Doe"   },    "publisher": {     "@type": "Organization",     "name": "Google",     "logo": {       "@type": "ImageObject",       "url": "https://google.com/logo.jpg",       "width": 600,       "height": 60     }   },   "description": "A most wonderful article" } </script> 
```

### MICRODATA News Article For News Blogger

```
<div itemscope itemtype="http://schema.org/NewsArticle">   <meta itemscope itemprop="mainEntityOfPage"  itemType="https://schema.org/WebPage" itemid="https://google.com/article"/>   <h2 itemprop="headline">Article headline</h2>   <h3 itemprop="author" itemscope itemtype="https://schema.org/Person">     By <span itemprop="name">John Doe</span>   </h3>   <span itemprop="description">A most wonderful article</span>   <div itemprop="image" itemscope itemtype="https://schema.org/ImageObject">     <img src="https://google.com/thumbnail1.jpg"/>     <meta itemprop="url" content="https://google.com/thumbnail1.jpg">     <meta itemprop="width" content="800">     <meta itemprop="height" content="800">   </div>   <div itemprop="publisher" itemscope itemtype="https://schema.org/Organization">     <div itemprop="logo" itemscope itemtype="https://schema.org/ImageObject">       <img src="https://google.com/logo.jpg"/>       <meta itemprop="url" content="https://google.com/logo.jpg">       <meta itemprop="width" content="600">       <meta itemprop="height" content="60">     </div>     <meta itemprop="name" content="Google">   </div>   <meta itemprop="datePublished" content="2017-02-05T08:00:00+08:00"/>   <meta itemprop="dateModified" content="2017-02-05T09:20:00+08:00"/> </div> 
```

### How To Implement News Article In Blogger Template Theme

Follow the steps below closely to use the schema markup in your code. It's as easy as placing the code above in the highlighted area.  
Considering you have selected the schema markup for the news article that you want to use then follow my steps.

How to add jslod-ld version of news article schema markup.  
Step-by-Step Integration.  
Step 1. Log In to your Blogger Blog in the blogger panel.  
Step 2. Navigate to the left side column selection of commands.  
Step 3. Click on the Theme command.  
Step 4. Navigate to Edit HTML and click on it.  
Step 5. Click anywhere within the code and click on Ctrl+F or CMD+F on Mac.  
Step 6. Locate the below by pasting it in the search box.

> <b:includable id='post' var='post'><article class='post hentry' itemscope='itemscope' itemtype='http://schema.org/Blog'>
> 
> Find This Line

Step 7. After getting the above code, just below it, you will paste the below jslod code the same as highlighted above.

```
<script type='application/ld+json'> {   "@context": "http://schema.org",   "@type": "NewsArticle",   "mainEntityOfPage": {     "@type": "WebPage",     "@id": "<data:post.title/>"   },   "headline": "Article headline",   "image": {     "@type": "ImageObject",     "url": "<data:post.firstImageUrl/>",     "height": 800,     "width": 800   },   "datePublished": "<data:post.timestampISO8601/>",   "dateModified": "<data:post.timestampISO8601/>",   "author": {     "@type": "Person",     "name": "<data:post.author/>"   },    "publisher": {     "@type": "Organization",     "name": "<data:blog.title/>",     "logo": {       "@type": "ImageObject",       "url": "https://google.com/logo.jpg",       "width": 600,       "height": 60     }   },   "description": "<data:post.snippet/>" } </script>
```

Step 8. Finally, Click on Save Theme.

That's all for today. Now wait for a while and search one of your blog pages in the [structured data testing tool](https://search.google.com/structured-data/testing-tool) to see if you will get a News Article Shema Markup in your blog post.

### How To Use MICRODATA News Article Markup on Blogger

This will be a lot of work for you to set up every time you post on your blogger you have to fill in the structured data, test it, and then go to the highlighter by Google and paste there for it to work. Let me take you on how to go about it.

Step 1. Change the following fields in **Green** with your articles.

```
<div itemscope itemtype="http://schema.org/NewsArticle">   <meta itemscope itemprop="mainEntityOfPage"  itemType="https://schema.org/WebPage" itemid="https://google.com/article"/>   <h2 itemprop="headline">Article headline</h2>   <h3 itemprop="author" itemscope itemtype="https://schema.org/Person">     By <span itemprop="name">John Doe</span>   </h3>   <span itemprop="description">A most wonderful article</span>   <div itemprop="image" itemscope itemtype="https://schema.org/ImageObject">     <img src="https://google.com/thumbnail1.jpg"/>     <meta itemprop="url" content="https://google.com/thumbnail1.jpg">     <meta itemprop="width" content="800">     <meta itemprop="height" content="800">   </div>   <div itemprop="publisher" itemscope itemtype="https://schema.org/Organization">     <div itemprop="logo" itemscope itemtype="https://schema.org/ImageObject">       <img src="https://google.com/logo.jpg"/>       <meta itemprop="url" content="https://google.com/logo.jpg">       <meta itemprop="width" content="600">       <meta itemprop="height" content="60">     </div>     <meta itemprop="name" content="Google">   </div>   <meta itemprop="datePublished" content="2017-02-05T08:00:00+08:00"/>   <meta itemprop="dateModified" content="2017-02-05T09:20:00+08:00"/> </div> 
```

Last Step. Import it to google highlighter.

Thank You for being part of this good article. I hope that I have provided some good SEO information that can help you Design your Blogger Blog Best for ranking. In case you face any difficulty while implementing the following fields please reach me by Commenting below Or [Contact Me](/contact).