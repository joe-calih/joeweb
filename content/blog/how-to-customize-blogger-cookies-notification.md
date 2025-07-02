---
title: "How To Customize Blogger Cookies Notification"
excerpt: "Make Custom Blogger EU Cookies Notification Bar today with stylish designs or block the notification bar. Learn how to Disable EU Cookies."
date: "2023-05-15"
author:
  name: "Joe Calih"
  avatar: "/authors/08.jpg"
  description: "John is a seasoned web developer with 10 years of experience in React and Next.js."
category: "SEO"
image: "/facebook.jpeg"
views: 5432
---


I have been getting fairly a large number of questions regarding the Cookie Notification that appears on my Blogger blog website. In this post, we will discuss why it’s there, how to customize it for better viewing of the site, and how to disable the EU Cookies Notification Bar Feature in a blogger blog. Firstly, an online [website](https://joecalih.co.ke/yoast-seo-pack-for-blogspot-blogger/) cookie is a small piece of information that’s dispatched from a website you’re looking at to the net browser you’re utilizing.

Each time you load the location, the browser sends the cookie again to the server with details about your browsing exercise. Most websites you go to will use cookies to enhance your consumer expertise by enabling that website to recollect you and your preferences. Blogger Blog website has the EU Cookies enabled by default and hence the user must know how the cookies work and how they should be integrated into the website.

[![](https://joecalih.files.wordpress.com/2024/06/d3923-blogger-eu-cookies-notice-bar.png?w=300)](http://joecalih.files.wordpress.com/2024/06/d3923-blogger-eu-cookies-notice-bar.png)European Regulation requires you to present your guests from the EU details about the Cookies which can be used in your weblog. In lots of instances, it’s additionally required that you just get consent. Google added the EU Cookie Notification using robots on blogs on the Blogger platform to assist meet these laws. You cannot easily disable cookies in Blogger, but you can hide the notification. I am going to take you Step by Step in disabling it.  
The Discover explains how Blogger Cookies, in addition to using Google Analytics and Ad-Words Cookies. This may solely be proven to visitors inside the EU and can disappear when the consumer clicks.

### 1. Cookie Notice Style One

To customize the text shown in the notification, follow these steps  
1. Go to Template > Edit HTML and find `</head>`  
2. Above `</head>` place the following script

\`\`\`
<!-- joecalih.co.ke Custom EU Cookies Notice --> <script type="text/javascript">  cookieOptions = {  msg: "This site uses cookies from Google ",  link: "https://www.blogger.com/go/blogspot-cookies",  close: "Okay!",  learn: "Learn More" }; </script> <!-- Semdeals Custom EU Cookies Notice -->
\`\`\`

  
3. Edit the values above (the text in between quotes of `msg`, `link`, `close`, `learn`), see [this page](http://www.cookiechoices.org/) for help.  
4. Save your template.

### 2. Stylish Cookies Notification Style Two

[![](https://joecalih.files.wordpress.com/2024/06/33d08-custom2bcookie2bnotification2bbar.png?w=300)](http://joecalih.files.wordpress.com/2024/06/33d08-custom2bcookie2bnotification2bbar.png)

1. Login To Your Blogger Website.  
2. Choose the blogger blog you want to employ the stylish cookie notification custom bar.  
3. Click on Theme and then Edit HTML.  
4. Now find **]]></b:skin>** by using Crtl F in windows & CMD F in Mac.  
5. Copy the code from below and paste it before**/**After  **]]></b:skin>**

\`\`\`
<script type="text/javascript">   cookieOptions = {     msg: "This site uses cookies from Google to deliver its services. By using this site, you agree to its use of cookies.",     link: "https://www.blogger.com/go/blogspot-cookies",     close: "Got it!",     learn: "Learn More" }; </script> <style> .cookie-choices-info { z-index:999999!important; background-color:#181818!important; border-bottom: 3px solid #0697FD;  box-shadow: 4px 4px 0px rgba(33,33,33,0.45)!important;  padding:3px 0px!important; } .cookie-choices-info .cookie-choices-text{ font-size:14px !important; font-weight:500;  color:#dddddd!important; } .cookie-choices-info .cookie-choices-button{   background-color: #0697FD!important; border-radius: 50px!important; box-shadow:4px 4px 0px rgba(33,33,33,0.45); padding:6px!important; text-transform: uppercase!important;} </style>
\`\`\`

### How to Hide/Disable the EU Cookies Notice

As mentioned above, it is a law that this message is shown! If you are already showing a Cookie Notification and you wish to hide the Blogger Cookie Notification you can add a short script to the head section of your template  
1. Go to Template > Edit HTML and find `</head>`  
2. Above `</head>` place the following script

\`\`\`
<script type="text/javascript">cookieChoices = {};</script>
\`\`\`

3. Save your template.

### How to Customize the Cookie Notice Design

You may want to customize the design of the notification bar so that it better matches your blog design or doesn’t conflict with your design. Many have tried to make their cookie notifications pleasing to the user to reduce bounce rate. Take an example of the below design of notification.

1. Go to Template > Edit HTML and find ]] </b:skin>  
2. Above ]] </b:skin> add the following

\`\`\`
.cookie-choices-info { /* Add your styles here to change overall wrapper design */ }.cookie-choices-info .cookie-choices-text{ /* Add your styles here to change text styles */}.cookie-choices-info .cookie-choices-button { /* Add your styles here to change button styles */ }.cookie-choices-info #cookieChoiceDismiss { /* Add your styles here to change dismiss button styles */ }
\`\`\`

### How to move the EU Cookies Notice to the bottom of the screen

On my personal blog I have a fixed navigation at the top of my blog which the Cookie Notification was hiding so I moved it to the bottom of the screen instead. To move the notification to the bottom of the screen use the following CSS. Add it above `]] </b:skin>` in Template > Edit HTML.

> .cookie-choices-info {position: fixed; top: auto !important; bottom: 0px !important;}

When you first opened up a blogger Account This Was the cookies policy message that you first received. They vary from one country to another and violation of this may have a bad impact on your blogger blog.

`[![](https://joecalih.files.wordpress.com/2024/06/5ef59-european2bunion2blaws.png?w=300)](http://joecalih.files.wordpress.com/2024/06/5ef59-european2bunion2blaws.png)`  
Thank You for being part of this good article. I hope that I have provided some good SEO information that can help you. Design your Blogger Blog Best for ranking. In case you face any difficulty while implementing the following fields please reach me by Commenting below Or [Contact Me.](https://seohuk.com/contact)
