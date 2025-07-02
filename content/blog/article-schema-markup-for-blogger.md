---
title: "How To Add Article Schema Markup To Blogger"
excerpt: "Add article schema markup to your blogger website to get rich snippets. Enhance your search results with Article Schema Markup for Blogger."
date: "2024-05-27"
author:
  name: "Joe Calih"
  avatar: "/authors/08.jpg"
  description: "Joecalih is a 10+ years Pro web developer with of experience in React and Next.js."
category: "Blogger"
image: "/blogger-schema.webp"
views: 5432
---


Bloggers that are providing articles for educational purposes have a great opportunity today for they can now add the schema markup in their blogger blog to get rich results. The article schema markup is the best-structured data that you can add to your blogger template to get ranked better with rich results. In this post, I have highlighted the best way to add schema markup to your blogger blog. Schema markups impact a significant change in the SEO of your website. Using the article schema, the search engines add the best results from your meta description to show in the search results.

**Read: [Sitelinks Search Box Structured Data](https://joecalih.co.ke/sitelinks-search-structured-data-for-search-results/)**

## How To Add Article Schema Markup To Blogger

**Step 1.** Log in to Blogger and choose your specific website to add the SEO code.  
**Step 2.** Reach out to the left commands by navigating to them to the Template command.  
**Step 3.** Click on the template command and then locate the Edit HTML next to Customize.  
**Step 4.** Click anywhere in your code and then click on Ctrl+F in Windows or CMD+F in Mac.  
**Step 5.** Search for **<div class=’post hentry’**  
**Step 6. Replace** the above line with the following codes.

> <!– Microdata markup joecalih.co.ke–>  
> <div class=’post hentry’ itemscope=’itemscope’ itemtype=’http://schema.org/Article’>
> 
> By Semdeals

**Step 7.** Again Search The Code **<b:if cond=’data:post.title’>**  
**Step 8.** Add the name and URL itemprop accordingly by replacing the **above** code with the **Below** codes.

\`\`\`
<b:if cond='data:post.title'><h1 class='post-title entry-title' itemprop='name'><b:if cond='data:post.link'><a expr:href='data:post.link' itemprop='url'><data:post.title/></a><b:else/><b:if cond='data:post.url'><b:if cond='data:blog.url != data:post.url'><a expr:href='data:post.url' itemprop='url'><data:post.title/>
\`\`\`

That’s all, now save your theme template.  
Now you have to test your website for the article schema markup to make sure your markup doesn’t have any eras. To do so just push the bellow button and input any URL of a post to test your markup.

[**Structured Data Testing Tool**](https://search.google.com/structured-data/testing-tool/u/0/)

Article schema is the most used structured data-rich snippet to date. Most website posts are considered help articles and search engines such as Google & Bing optimize them. They are meant to give lessons, guides, and instructions thus quick responses are encouraged. Integrating article shema with frequently asked questions with schema also may increase optimization and engagement. If you have any questions about the schema markup, don’t hesitate to ask me in the comment section or contact me for more.

**Read: [Breadcrumbs Schema Markup For Blogger](https://joecalih.co.ke/breadcrumbs-schema-markup-for-blogger-website/)**
