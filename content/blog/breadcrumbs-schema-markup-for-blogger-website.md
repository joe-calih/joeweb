---
title: "Breadcrumbs Schema Markup For Blogger Website"
excerpt: "Breadcrumbs Schema Markup for Vocabulary and RDFA Breadcrumbs and JSON-LD breadcrumbs. You can get rich SEO search results with breadcrumbs."
date: "2023-05-15"
author:
  name: "Joe Calih"
  avatar: "/authors/08.jpg"
  description: "Joecalih is a 10+ years Pro web developer with of experience in React and Next.js."
category: "Blogger"
image: "/blogger-schema.webp"
views: 1475
---


Many times, you come across search results without displaying a URL to a post. That’s what we call breadcrumbs. Breadcrumbs are now widely used by many websites as they increase search results. People have been asking me how I get the breadcrumbs in my templates. It’s not yet decided if breadcrumbs will add search engines’ SEO optimization apart from improving click-through rates. Breadcrumbs will encourage people to click on your post from others since it looks more premium with [schema](https://joecalih.co.ke/how-to-add-article-schema-markup-to-blogger/) vocabulary-rich search results.

Blogger implementation of schema markups is completely different compared to WordPress. As you know, WordPress is easy to implement schema markups to a website than the blogger website. This happens due to the use of plugins in WordPress which in Blogger we have to place the code. I know that it will reach a time when we migrate to WordPress. Before we migrate to WordPress, some things have to be changed in Blogger for us to change our website look. Let’s take a look at how the breadcrumbs will look in search engines such as Google.

The Blogger Breadcrumb Navigation Looks Like This

> Breadcrumbs Schema Markup For Blogger Rich Search Results  
> **HOME** > **SE****O >** Breadcrumbs Schema Markup  
> Breadcrumbs are the collection of columns of a website categorized to reduce the search result URL. IN Blogger Breadcrumbs can be widely used to shorten URL by giving out key topics. Here at Semdeals, we are giving you the schema markup to Blogger Breadcrumb. Use it to make your search URLs rich enough for Blogger SEO. **Read More.**
> 
> With Breadcrumbs

Without the breadcrumbs, the category and homepage buttons would not be visible in search results and the whole search results would look like this.

> Breadcrumbs Schema Markup for Blogger Rich Search Results  
> [https://joecalih.co.ke/breadcrumbs-schema-markup-for-blogger](https://joecalih.co.ke/breadcrumbs-schema-markup-for-blogger-website/)  
> Breadcrumbs are the collection of columns of a website categorized to reduce the search result URL. IN Blogger Breadcrumbs can be widely used to shorten URL by giving out key topics. Here at Semdeals we are giving you the schema markup to Blogger Breadcrumb. Use it to make your search URLs rich enough for Blogger SEO. **Read More.**
> 
> Without Breacrumbs

It’s super interesting what the Breadcrumb Schema markup can do to your search results. Big companies and eCommerce websites use the breadcrumbs very efficiently in their websites which increases the click-through rate. Am sure by now you are well off knowing about the SEO benefit of the breadcrumbs to your website and now it’s time we use them in your blogger blogs.

There are mainly three types of breadcrumbs Schema Rich Snippets Markups.

-   RDFA Breadcrumb Markup
-   JSLOD-LD Breadcrumb Markup
-   Vocabulary.Org Breadcrumbs Markup

In This Article I’ll take, you step by step in adding any choice of breadcrumb to your blogger blog. The setup will be very much easy, and you have the dynamic choice to choose the one you are going to implement into your blogger blog. Let’s start with the RDFA Breadcrumb Markup.

### 1. Vocabulary Schema Markup for Blogger

Google likes the schema presented on Vocabulary Schema Markup. The bellow is a step-by-step procedure to use the vocabulary markup in a blogger template.

**Step 1.** Log in to Blogger and choose your specific website to add the SEO code.  
**Step 2.** Reach out to the left commands by navigating to them to the Template command.  
**Step 3.** Click on the template command and then locate the Edit HTML next to Customize.  
**Step 4.** Click anywhere in your code and then click on Ctrl+F in Windows or CMD+F in Mac.  
**Step 5.** Search for **]]></b:skin>**  
**Step 6.** Just **ABOVE** the Above code, paste the CSS code below.

```
/* Blogger Breadcrumbs joecalih.co.ke */ .swtBreadCrumbs:before { content:"You are here:";font-size:  85%;letter-spacing: 2px;}.swtBreadCrumbs{width:auto;padding:0 0 5px  0;margin:0 5px;font-size:95%;border:2px solid  #EDE;-webkit-border-top-left-radius:  10px;-webkit-border-top-right-radius: 10px;-moz-border-radius-topleft:  10px;-moz-border-radius-topright: 10px;border-top-left-radius:  10px;border-top-right-radius: 10px;padding: 5px;text-align:  left;color:#000;background:#C3B9A8;background:-webkit-linear-gradient(top,#C3B9A8,#F3F1E6);background:-moz-linear-gradient(top,#C3B9A8,#F3F1E6);background:-ms-linear-gradient(top,#C3B9A8,#F3F1E6);background:-o-linear-gradient(top,#C3B9A8,#F3F1E6);background:linear-gradient(top,#C3B9A8,#F3F1E6);line-height:22px}
```

**Step 5.** Search for the below code by pasting it in the search box and press enter two times.

> <b:includable id=’post’ var=’post’>
> 
> Find This Line

**Step 6.** Paste the below code just below the above code.

```
<b:if cond='data:blog.pageType == &quot;item&quot;'><div itemscope='' itemtype='http://data-vocabulary.org/Breadcrumb'><!--Breadcrumbs microdata markup joecalih.co.ke START. --><div class='swtBreadCrumbs'><a expr:href='data:blog.homepageUrl' itemprop='url' title='Home'><span itemprop='title'>Home</span></a>»<b:if cond='data:post.labels'><b:loop values='data:post.labels' var='label'><span typeof='v:breadcrumb'><a expr:href='data:label.url' itemprop='url' title='Categories' property='v:title' rel='v:url'><span itemprop='title'><data:label.name/></span></a></span><b:if cond='data:label.isLast != &quot;true&quot;'>|</b:if></b:loop></b:if>»<a expr:href='data:post.url' itemprop='url' title='Post Title'><span itemprop='title'><data:post.title/></span></a></div></div></b:if><!--Breadcrumbs microdata markup added by joecalih.co.ke --> 
```

### 2. RDFA Breadcrumbs Markup Schema.

The following is the breadcrumbs RDFa schema. Follow the step-by-step lesson to use them in your blogger blog. It’s way nice and easy. Let’s now add the code.

**Step 1.** Log in to Blogger and choose your specific website to add the SEO code.  
**Step 2.** Reach out to the left commands by navigating to them to the Template command.  
**Step 3.** Click on the template command and then locate the Edit HTML next to Customize.  
**Step 4.** Click anywhere in your code and then click on Ctrl+F in Windows or CMD+F in Mac.  
Step 5. Search for ]]></b:skin>  
Step 6. Just ABOVE the Above code, paste the CSS code below.

```
.breadcrumbs {padding:5px 5px 5px 0px;margin: 0px 0px 15px 0px;font-size:90%;line-height: 1.4em;border-bottom:3px double #e6e4e3;font-weight:bold;}
```

**Step 7.** Now search for the following code.

> <b:include data=’top’ name=’status-message’/>
> 
> Find This Line

After searching the above code, make sure to press enter for the second time to search for a corresponding code to avoid pasting the code in the wrong place. For the above code, you may find it more than twice but make sure you use the **SECOND** one.

**Step 8.** Now search again for the bellow code.

> <b:includable id=’main’ var=’top’>
> 
> Find This Line

In this case, it may also appear twice. As we said earlier, make sure you use the second one.

**Step 9.** **BELOW** the Above code paste the code below.

```
<b:includable id='breadcrumb' var='posts'><b:if cond='data:blog.homepageUrl != data:blog.url'><b:if cond='data:blog.pageType == "static_page"'><div class='breadcrumbs'><span><a  expr:href='data:blog.homepageUrl'  rel='tag'>Home</a></span> »  <span><data:blog.pageName/></span></div><b:else/><b:if cond='data:blog.pageType == "item"'><!– breadcrumb for the post page –><b:loop values='data:posts' var='post'><b:if cond='data:post.labels'><div class='breadcrumbs' xmlns:v="http://rdf.data-vocabulary.org/#"><span typeof="v:Breadcrumb"><a  expr:href='data:blog.homepageUrl' rel="v:url"  property="v:title">Home</a></span><b:loop values='data:post.labels' var='label'><b:if cond='data:label.isLast == "true"'>» <span typeof="v:Breadcrumb"><a expr:href='data:label.url'  rel="v:url"  property="v:title"><data:label.name/></a></span></b:if></b:loop>» <span><data:post.title/></span></div><b:else/><div class='breadcrumbs'><span><a  expr:href='data:blog.homepageUrl'  rel='tag'>Home</a></span> »  <span>Unlabelled</span> »  <span><data:post.title/></span></div></b:if></b:loop><b:else/><b:if cond='data:blog.pageType == "archive"'><!– breadcrumb for the label archive page and search pages.. –><div class='breadcrumbs'><span><a  expr:href='data:blog.homepageUrl'>Home</a></span> »  <span>Archives for <data:blog.pageName/></span></div><b:else/><b:if cond='data:blog.pageType == "index"'><div class='breadcrumbs'><b:if cond='data:blog.pageName == ""'><span><a expr:href='data:blog.homepageUrl'>Home</a></span> » <span>All posts</span><b:else/><span><a  expr:href='data:blog.homepageUrl'>Home</a></span> »  <span>Posts filed under <data:blog.pageName/></span></b:if></div></b:if></b:if></b:if></b:if></b:if></b:includable>
```

**Step 10.** Save Your Template code and wait for Google to crawl through your breadcrumbs.