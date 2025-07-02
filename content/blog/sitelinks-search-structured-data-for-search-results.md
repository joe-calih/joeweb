---
title: "Sitelinks Search Structured Data For Search Results"
excerpt: " Sitelinks search box is added by jslod-ld or microdata to Blogger website. Get Blogger or WordPress sitelinks search box in search results."
date: "2023-05-15"
author:
  name: "Joe Calih"
  avatar: "/authors/08.jpg"
  description: "Nairobi photographer and developer who captures portraiture, landscapes, weddings, and photo studios."
category: "SEO"
image: "/facebook.jpeg"
views: 5432
---


Sitelinks in search results of a website is a structured markup that shows how Google recommends a website for searching from a large number of content. Big well-known websites have their site links search box in the search results. Today I am going to take you over adding the site links search box for Blogger and WordPress to also wait to be indexed the same way by Google.  
Sitelinks search box is found on the lower part of search results meta descriptions that act as a search subset or a search engine to search for a story in a topic written on the website. Today we are following the steps in adding the site links search box in the search results of a blogger or WordPress website nice and easy. This is a demo of how your search link search box will look in search results.

[![Sitelinks-Search-Box](https://joecalih.files.wordpress.com/2024/06/295d3-sitelinks-search-box.jpg?w=300 "Sitelinks-Search-Box")](http://joecalih.files.wordpress.com/2024/06/295d3-sitelinks-search-box.jpg)

### How To Add Search Links Search Box in Blogger

The JSON version of the Sitelinks used in Blogger is the only version available for the template. The code utilizes the direct direction of website content to search for topics on the website before displaying the homepage URL in search results. To include the site links search box, you need to add the JSON version of the schema markup. However, please note that the site links search box will only appear in search results after your website has been selected to have the markup and recognized by search engines, which may take some time. It will take you time.  
Sitelink Search box Fields.

**Read: [Breadcrumbs Schema Markup For Blogger](https://joecalih.co.ke/breadcrumbs-schema-markup-for-blogger-website/)**

#### **1. Sitelinks Searchbox JSON-LD Schema**

> <script type=”application/ld+json”> { “@context”: “http://schema.org”, “@type”: “WebSite”, “url”: “https://www.example.com/”, “potentialAction”: { “@type”: “SearchAction”, “target”: “https://query.example.com/search?q={search_term_string}”, “query-input”: “required name=search_term_string” } } </script>

#### **2. Sitelinks Searchbox MICRODATA.**

> <div itemscope itemtype=”http://schema.org/WebSite”> <meta itemprop=”url” content=”https://**www.example.com**/”/> <form itemprop=”potentialAction” itemscope itemtype=”http://schema.org/SearchAction”> <meta itemprop=”target” content=”https://query.example.com/search?q={search_term_string}”/> <input itemprop=”query-input” type=”text” name=”search_term_string” required/> <input type=”submit”/> </form> </div>

The above are the two codes that can add a site-link search box to your website. Use either of them on your blogger website. The best one to use is the jslod-ld version and I am going to direct you to the best way you can implement them in code.

**Read: [Article Schema Markup For Blogger Blog](https://joecalih.co.ke/how-to-add-article-schema-markup-to-blogger/)**

Follow the steps below to know where you will paste your site link search box.

**Step 1.** Log in to **Blogger** and choose your specific website to add the SEO code.  
**Step 2.** Reach out to the left commands by navigating to them to the Template command.  
**Step 3.** Click on the template command and then locate the Edit HTML next to Customize.  
**Step 4.** Click anywhere in your code and then click on Ctrl+F in Windows or CMD+F in Mac.  
Step 5. In the search bar search for the <head> tag.  
Step 6. After finding the Head Tag Copy all the code above and Paste it **BELOW** head tag.
