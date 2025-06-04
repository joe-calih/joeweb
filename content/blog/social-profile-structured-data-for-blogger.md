---
title: "Social Profile Structured Data for Blogger Website"
excerpt: "Add social profile structured data to search results with schema. Learn to add your favorite social media links to Google search /results."
date: "2023-05-15"
author:
  name: "Joe Calih"
  avatar: "/authors/08.jpg"
  description: "Nairobi photographer and developer who captures portraiture, landscapes, weddings, and photo studios."
category: "Blogger"
image: "/facebook.jpeg"
views: 5432
---


Many big companies and websites have their social profile embedded under the organization logo or information in search results. The Social Profile Structured Data entitles the social links to the webpage handles in various social media platforms. The social profile is a good sign of a recognized website and can increase the click-through rate of your blogger blog. The structured data is formed in the Google proffered version of structured data to make sure your blogger blog is rendered and include the social profile structured data in testing. In this post, I am giving out the social profile schema code to embed into your blogger blog template code.

Social Media Profiles Supported by Social Profile Schema

-   Facebook
-   Twitter
-   Instagram
-   Google+
-   Youtube
-   Myspace
-   Linkedin
-   Pinterest
-   Soundcloud
-   Tumblr

Those are the top recognized social media profiles you can expect in search results when your search results rich right sidebar local business markup appears.

### How To Add Social Profile Schema in Blogger

Follow the easy steps below to add the code to the blogger blog. Copy the code and paste it above the **</head>** tag.

```
<script type="application/ld+json">{ "@context" : "http://schema.org","@type" : "Person","name" : "your name","url" : "http://www.your-site.com","sameAs" : [ "http://www.facebook.com/your-profile","http://instagram.com/yourProfile","http://www.linkedin.com/in/yourprofile","http://plus.google.com/your_profile"]}</script>
```

Copy the Jslod-ld code above to your notepad and change the URL that points to your profile and others. You can also add the other social media profile URLs to your code to make it even better to accommodate more social profiles. The bellow is an example of my social profile schema JSON-ld code that I have embedded in my blogger blog.

```
<!-- start social profiles seohuk.com--> <script type="application/ld+json">{ "@context" : "http://schema.org","@type" : "Organization","name" : "9 Clouds","url" : "https://www.Your Blog.com/","logo": "https://joecalih.co.ke/logo.png","sameAs" : [ "http://www.facebook.com/semdeals","http://www.twitter.com/semdeals","http://instagram.com/semdeals","https://www.linkedin.com/#.","https://www.youtube.com/channel/semdeals","https://www.pinterest.com/semdeals"]}</script><!-- end social profiles -->
```

## How to Add Social Profile Schema to Blogger

The social profile code above is a major to all social profile lines and can create a good company or personal profile. To make sure you have added the code correctly to your blogger website, follow the steps below to validate your website code.

### 1. Create a Social Profile Schema

You will have to copy the above code and paste it above the ending of the head tag </head> and save your blogger blog template. That is all you need to cover as shown and the structured data of your social media pages will be displayed in Google.

### 2. Validate, Test, and Fix errors

You will have to use some structured data testing tool from Google to validate the structured data. Validating the schema and testing whether it’s working. To set up the structured data testing click on the below button and enter any page URL. Follow the dialogue test and see the social profile structured data.

[**Structured Data Testing Tool**](https://developers.google.com/structured-data/testing-tool/)

### 3. Submit to Google Search Console

For the social profile to reflect in the search results it will take you some time and implement another schema markup to your blogger blog template I will attach below and that will be it. Make sure you have submitted your website to the Google search console for integration in Google search results.

**Read Also**: [How To Add Blogger Review Star Rating](https://joecalih.co.ke/how-to-add-schema-markup-to-blogger-website/)