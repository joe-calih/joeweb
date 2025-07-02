---
title: "How To Add Blogger Review Star Rating To Search Results"
excerpt: " Learn how to Add Review Star Rating To Search Results. Use schema markup structured rich snippets to add review star rating to blogger."
date: "2024-05-15"
author:
  name: "Joe Calih"
  avatar: "/authors/08.jpg"
  description: "Nairobi photographer and developer who captures portraiture, landscapes, weddings, and photo studios."
category: "Blogger"
image: "/blogger-schema.webp"
views: 6879
---


Schema markups add better looks to how people find your content in Google. A better-optimized blogger post should include schema markups in search results to show how professional your posts are to increase the click-through rate. In search engines, crawlers look at every part of a schema.org markup to show the type of rich results in search results. Review schema markup adds stars to your blogger search results just below the heading and above the meta description. To add a review star rating in Blogger we have to add JSON-ld code or micro-data version of schema.org markup data.

The best way to distinguish your blogger blog from others in search results is to make it better than the others. Adding schema-structured markups to search results of your blogger posts makes it good for SEO. The very best part of it is that implementing starts in the search engine results increases rank. Users click on a tutorial with star reviews to know whether the content or product is recommended by other users. It takes you just a day to show the star reviews under the URL of your blogger blog posts. There are three types of star rating review codes you can add:-

### 1. Review Star Rating Vocabulary Microdata

**1.** Log in to Blogger and choose your specific website to add the Star Rating code.  
**2.** Reach out to the left commands by navigating to them to the Template command.  
**3.** Click on the template command and then locate the Edit HTML next to Customize.  
**4.** Click anywhere in your code and then click on Ctrl+F in Windows or CMD+F in Mac.  
**5.** Search for **<data:post.body/>**  
**6. Replace** the above line with the following code.

> <data:post.body/>  
> <div itemscope='' itemtype='http://data-vocabulary.org/Review' style='display:none;'>  
> <span itemprop='itemreviewed'><data:post.title/></span>  
> <span itemprop='reviewer'><data:post.author/></span>  
> <span itemprop='rating'>5</span> of 5  
> <div itemprop='description'><data:post.snippet/></div>  
> </div>
> 
> This is the best Star Rating Schema Markup Code for Blogger!

That's the best code ever for getting a review star rating in Blogger. It uses data-vocabulary.org/review structured data to get better search results. You can also add a schema version instead of the vocabulary micro-data structured data.

**Read: [Breadcrumbs Schema Markup For Blogger Search Results](https://joecalih.co.ke/breadcrumbs-schema-markup-for-blogger-website/)**

### **2. Review Star Rating Schema Microdata**

Follow the below procedure to add the SCHEMA version of the star review schema markup to your blogger blog template.  
**1.** Log in to Blogger and choose your specific website to add the star rating code.  
**2.** Reach out to the left commands by navigating to them to the Template command.  
**3.** Click on the template command and then locate the Edit HTML next to Customize.  
**4.** Click anywhere in your code and then click on Ctrl+F in Windows or CMD+F in Mac.  
**5.** Search for **<data:post.body/>**  
**6. Replace** the above line with the following code.

\`\`\`
<data:post.body/>
<div itemscope='' itemtype='http://schema.org/Review' style='display:none;'>
<div itemprop='itemReviewed' itemscope='' itemtype='http://schema.org/Thing'>
<span itemprop='name'><data:post.title/></span>
</div>
<span itemprop='reviewRating' itemscope='' itemtype='http://schema.org/Rating'>
<meta content='1' itemprop='worstRating'/>
<span itemprop='ratingValue'>4</span>/
<span itemprop='bestRating'>5</span>
</span> stars -
<b>&quot;<span itemprop='name'><data:post.title/></span>&quot; </b>
<span itemprop='author' itemscope='' itemtype='http://schema.org/Person'>
<span itemprop='name'><data:post.author/></span>
</span>
<span itemprop='reviewBody'><data:post.snippet/></span>
</div> 
\`\`\`

That's a microdata star rating schema markup that you can use also instead of the vocabulary microdata. It works well and the same. The main difference between the star rating of vocabulary and microdata is the name of the person who has reviewed the blogger posts only shows in the microdata format and not in the vocabulary version.

**Read: [Sitelinks Search Box Structured Data in Search Results](https://joecalih.co.ke/sitelinks-search-structured-data-for-search-results/)**

### **3. Review Rating Jslod-ld Schema**

There is a **JSLOD-LD** version of the star rating schema markup that you can use. As for me, I would prefer that you use the microdata version of the star-raking markup. The load will sometimes choose the posts that have been rated while the **MICRODATA** one can include the star rating without a rating system in your template.  
For the J**SLOD-LD** schema markup for star rating search results for blogger posts use the below steps to add the code to your template.

**1.** Log in to Blogger and choose your specific website to add the star rating code.  
**2.** Reach out to the left commands by navigating to them to the Template command.  
**3.** Click on the template command and then locate the Edit HTML next to Customize.  
**4.** Click anywhere in your code and then click on Ctrl+F in Windows or CMD+F in Mac.  
**5.** Search for **</head>**  
**6. Place** the following code Above the code.

\`\`\`
<!-- Review Star Rating In Google Search Results -->
<script type='application/ld+json'>
{"@context":"http://schema.org",
"@type":"Review",
"author": {
"@type":"Person",
"name":"YOUR-NAME",
"sameAs":"GOOGLE-PLUS-LINK"},
"url": "<data:blog.canonicalUrl/>",
"datePublished":"2016-03-13T20:00",
"publisher": {
"@type":"Organization",
"name":"WEBSITE-NAME",
"sameAs":"http://www.joecalih.co.ke/"},
"description":"<data:blog.metaDescription/>",
"inLanguage":"en",
"itemReviewed": {
"@type":"Product",
"name": "<data:blog.pageName/>",
"sameAs": "<data:blog.canonicalUrl/>",
"image": "<data:blog.postImageThumbnailUrl/>",
"aggregateRating": {
"@type": "AggregateRating",
"ratingValue": "4",
"bestRating": "5",
"ratingCount": "2"}}}
</script>
<!-- joecalih.co.ke Review Star Rating --> 
\`\`\`

You have to change the words & URL written in **Green Bold** Color to your own.  
That's all you have to add, now Your template offers blogger posts with rich star rating structured data schema snippets. The settings and changes will take place in about one day and you will see the structured data [review](https://whitespark.ca/blog/how-to-use-aggregate-review-schema-to-get-stars-in-the-serps/) in your posts as soon as possible.

In recent times, blogger widgets with rating stars for blogger websites can be generated from websites. Such examples of websites can be [Elfsight](https://elfsight.com/google-reviews-widget/blogger/), [Powr.io](https://www.powr.io/star-rating-for-blogger-how-to-add-to-your-site?src=tutorials), and popular posts with star ratings. Blogger website templates are now created with review star ratings built in. Follow the below steps to check your website template.

#### Conclusion

To check whether your structured data is now valid and has no errors you have to test it in the Google structured data testing tool by copying one of your URLs and pasting it into the testing tool the star rating will show as review schema and you will be able to check for errors. Click the bellow button.

[Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool/u/0/)

Thanks for your time, I hope I helped you to add the star rating schema markup to your blogger well. If you face any difficulty in the exercise, please comment or contact me for more.
