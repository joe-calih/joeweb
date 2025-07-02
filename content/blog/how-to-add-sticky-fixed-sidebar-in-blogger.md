---
title: "How To Add Sticky Fixed Sidebar In Blogger"
excerpt: "Step by step on How To Add Sticky Fixed Sidebar In Blogger. Make your blogger sidebar fixed for better visibility and AdSense revenue."
date: "2023-05-15"
author:
  name: "Joe Calih"
  avatar: "/authors/08.jpg"
  description: "John is a seasoned web developer with 10 years of experience in React and Next.js."
category: "SEO"
image: "/facebook.jpeg"
views: 5432
---


A sticky sidebar in a website is encouraged by every developer, SEO, and revenue-oriented blogger. Blogger websites need sticky blogger widgets that scroll with them as they read down the website post. A scrolling sidebar just uses jQuery code to keep it fixed during scrolling between the header wrapper and footer. The important ideology behind the making of a [blogger’s](https://joecalih.co.ke/build-high-quality-backlinks-in-blogger/) right sidebar scroll with you is to encourage the click-through rate. I have implemented the idea to float my Adsense widget in my blogger sidebar as you scroll down. Let’s learn how to add the sticky fixed sidebar to the blogger website below.

### Steps To Add Sticky Fixed Sidebar In Blogger Website

1. log in to your [blogger](http://blogger.com/) platform and choose your website.  
2. Click on the theme in the right sidebar.  
3. Click on Edit HTML.  
4. Click anywhere in the code and hold Ctrl+F  
5. Search for </body> in the search box  
6. Just BEFORE the above code copy and paste the below JQuery code.

> <script>  
> // Sticky widget by joecalih.co.ke  
> //<![CDATA[  
> bs_makeSticky(“**HTMLID**“); // enter your widget ID here  
> function bs_makeSticky(elem) {  
> var bs_sticky = document.getElementById(elem);  
> var scrollee = document.createElement(“div”);  
> bs_sticky.parentNode.insertBefore(scrollee, bs_sticky);  
> var width = bs_sticky.offsetWidth;  
> var iniClass = bs_sticky.className + ‘ bs_sticky’;  
> window.addEventListener(‘scroll’, bs_sticking, false);  
> function bs_sticking() {  
> var rect = scrollee.getBoundingClientRect();  
> if (rect.top < 0) {  
> bs_sticky.className = iniClass + ‘ bs_sticking’;  
> bs_sticky.style.width = width + “px”;  
> } else {  
> bs_sticky.className = iniClass;  
> }  
> }  
> }  
> //]]>  
> </script>

7. Change the HTML ID with the widget id that you would like to float.  
8. That’s all, now save your template code and test your final results by viewing your website.

### Importance of Sticky Fixed Sidebars

Sticky sidebars are one of the most critical features of contemporary websites as they improve interactivity rates substantially. Thus, a sidebar is present and does not disappear when a user scrolls. This will contribute to a greater extent to content and advertising visibility. People’s constant access to the servers means they spend more time on the page. This is good for revenue generation from ads and affiliate links. As the site’s SEO, by probably decreasing the amount of ‘bounce’ rates.

1.  Increased Engagement. It makes the users engage with the sticky sidebar and the intended activity like clicking on the links or sharing the content can be made easily.
2.  Improved User Experience. Non-superimposing images reduce the inconvenience of using the page during the browsing. Finding information one does not have to scroll back to the top of the page.
3.  Enhanced Visibility for Ads. Display ads located in a sticky sidebar are more prominent giving them better chances of increasing the click-through rates hence more ad revenue.
4.  Better Content Promotion: Items or pleas on the screen that are ‘frozen’ to the top can help drive higher rates of conversion among the viewers.
5.  Consistent Accessibility: Information such as phone numbers or search bars remains easily accessible, and always visible to the user.
6.  Reduction in Bounce Rates. This gives a user more to explore on the side and they tend to spend more time on the site. The bounce rate which is looked at as a negative sign by Google is less of an issue here.
7.  Optimal Use of Space. Sticky sidebars involve the mostly neglected areas of the web content to increase space productivity without necessarily invading the main content.
8.  Encourages Scrolling. Since users are aware that the content in the sidebar moves with them, they may go further down the pages.
