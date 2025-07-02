---
title: "Solve Duplicate Meta Description In Google Search"
excerpt: "Solve duplicate meta descriptions in the Google search console. Learn to fix with custom robot.txt, header tags, and meta description tags"
date: "2023-05-15"
author:
  name: "Joe Calih"
  avatar: "/authors/08.jpg"
  description: "Nairobi photographer and developer who captures portraiture, landscapes, weddings, and photo studios."
category: "SEO"
image: "/facebook.jpeg"
views: 5432
---


The duplicate meta description is a problem for people who just started blogging and their templates are not yet fully set. This is a problem alarmed by the [**Google Search Console**](https://www.google.com/webmasters/tools/home?hl=en) showing you to fix duplicate **meta descriptions** in which it shows you the posts that have the same meta description. To solve it then you have to follow some steps that you are going to follow in the Google webmaster tools and your template code. This is both a blogger and WordPress duplicate meta description idea.

The most effective way how to remove duplicate meta descriptions in WordPress is by using [**Yoast**](http://yoast.com/) SEO. The plugin will help you put a meta description before posting and will also alert you if you have both duplicate **meta descriptions** or no meta descriptions present. That's the easiest way. If you use you use Yoast and still get duplicate meta descriptions in WordPress then follow the below-listed solutions and both work for blogger and WordPress websites.

To solve meta description in Blogger we have to add some specific code that directs the search engine crawlers. Find out the content and specify the meta description and the title tags to give the correct search results. Highlight all the cases of duplicate meta descriptions to solve and fix them for a better blogging future. The result may also be because of duplicate content and to solve this we change the content, title, and meta description to show the difference. Duplicate meta description makes search bots confused about the best content to rank between the two leading up to poor ranking. It's always advisable to make different topics and content for every post to better your SEO. Now without wasting more time, let's jump into the solving of duplicate meta-descriptions

### 1. Custom Robots.txt Solve Duplicate Meta Description

The search engines' crawling bots may not crawl through your blogger or WordPress website without robots.txt files which specify which type of content to allow or not for Google bots. This could bring about the duplicate meta-description problem. To use the robots.txt in blogger, the below format of robots.txt unless your posts are more than 2500 posts. Use it in the **Blogger Settings** in the search Preferences panel. Add the below code in the **Crawlers and indexing** section and then paste it under the Custom robots.txt p

> User-agent: Mediapartners-Google  
> Disallow:
> 
> User-agent: *  
> Disallow: /search  
> Allow: /
> 
> Sitemap: https://joecalih.co.ke/sitemap.xml

You should change the URL seohuk.com to your website URL and click on save to set robots.txt. WordPress users have to add robots.txt files since the website has exactly the code in Yoast SEO. To know if your website has implemented robots.txt, you can use the Google search console. Go straight to the Google search console and click on the test Robots.txt file. The other way to check whether your custom robot.txt is working then add the words robots.txt to your homepage website URL as shown below

https://www.YOURURL.com/roborts.txt

That`s it for adding the robot.txt files to solve duplicate meta description errors. That may not be the only problem, let's solve the other problems that bring about duplicate meta descriptions too.

### **2. Change Custom Robots Header Tags**

Below the robots.txt in the blogger search preferences settings sections are where you will find the custom robots header tags. They instruct the crawlers from search engines on what to crawl or not. These custom robot tags define how search engines index your posts and pages. We begin by explaining what robots are after which proceed to header tags and robot header tags. Follow up the below settings to solve duplicate meta descriptions in Blogger through custom robots header tags.

**1.** Go to My Blogs - Search preferences - Crawlers and indexing - You will find the option for 'Custom robots header tags

Click on the yes button to allow Custom Robots header tags in Blogger.  
**2.** Edit the options by clicking on the options shown below to specify what Google should crawl in Google or now.  
**3.** Save Changes.  
That's all with using the custom robots header tags to solve duplicate meta descriptions in the Google search console. Let's look at the last most efficient method that remains to never see the duplicate meta description problems in your website again.

At this moment, the meta description duplication problem in search results should be solved. For clarity is better to look out if your code specifies where search engines can locate your meta description. For the highlighted reasons let's add a code to your template to finish the error fixing once and for all.

### 3. Post Description HTML Tags Code.

In this section, we are going to look at the code that search engine bots use to locate your title and meta description to see if they are present in your blogger template code. If we don't find any corresponding code, that may be the biggest problem on why you get duplicate meta descriptions in search results posts. Let's take a look at the code.

1: Go to [**Blogger**](http://blogger.com/)  
2: Click on Theme ~ Edit HTML.  
3: Click Anywhere in the code and press **Ctrl** and **F** Responsively.  
4: Search for the below Code.

> <meta expr:content='data:blog.metaDescription' name='description'/>
> 
> Find this code

5: If you find it REPLACE with the below set of codes.

\`\`\`
<!-- Fixed Meta Description semdeals.com tool Search Console -->
<b:if cond='data:blog.pageType != &quot;index&quot;'>
<b:if cond='data:blog.pageType != &quot;item&quot; and data:blog.pageType != &quot;static_page&quot;'>
<b:if cond='data:blog.metaDescription != &quot;&quot;'>
<b:if cond='data:blog.url != data:blog.homepageUrl'>
<meta expr:content='data:blog.metaDescription' name='description'/>
</b:if>
</b:if>
</b:if>
</b:if>
<!-- Duplicate Meta Description Error Fixing tool Search Console --> 
\`\`\`

That's all now your website will not show duplicate meta descriptions again. The best way to now get the original meta description working is by fast indexing and rendering to get the results fast. To do so you have to access the [**Google search console**](https://www.google.com/webmasters/tools/home?hl=en) click on Fetch as Google option and click on the fetch and render option. The indexing will take place in minutes and you will notice changes in the next 10 hrs of time. Now your duplicate meta description is no more, in case you had difficulty in the process feel free to comment and [**Contact me**](/contact) for assistance.
