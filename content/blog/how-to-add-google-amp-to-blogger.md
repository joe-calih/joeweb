---
title: "How To Add Google AMP To Blogger Website Full Setup"
excerpt: "Steps On How To AMP To Blogger Website. 1. Set AMP HTML. 2. Charset and Viewport Meta Tags. 3. Setup AMP CDN. 4. Blogger Image AMP Setup ."
date: "2023-05-15"
author:
  name: "Joe Calih"
  avatar: "/authors/08.jpg"
  description: "John is a seasoned web developer with 10 years of experience in React and Next.js."
category: "Blogger"
image: "/facebook.jpeg"
views: 5432
---


Google AMP ( Accelerated Mobile Pages ) is a light-speed technique that developers have to make to speed up a website by avoiding some code in Java and CSS to make your website super fast. Am sure you have heard about this. Blogspot Blogger websites have been waiting to implement AMP until now AMP is now fully available to blogger websites. In this post, we are going to walk through how to add Google AMP ( Accelerated Mobile Pages ) to the Blogger website.

### What Is Google AMP

The full meaning of AMP is Accelerated Mobile Pages. These pages are viewed in the mobile phone view that speeds up your website page loading speed by skipping some render-blocking Java and CSS files and is viewed under Google.  
It is a new project by Google to build mobile web pages for static content that render fast. AMP ( Accelerated Mobile Pages ) Pages use AMP HTML, AMP JS, and AMP CDN to process and deliver light web pages at lightning speed. The AMP is compared to lightning speed because there is no loading after clicking a page that has implemented AMP. It's time to add AMP to Blogger.

> Before we start implementing the ideas into blogger its good that you backup your template to avoid coding mistakes. If you are ready lets start the Blogger AMP setup.

### How To Set Up Google AMP In Blogger

Follow The Bellow Steps to Add Amp To Your Blogger Blog. Make an effort to save your template in every step so you can know where you may make any mistake through blogger code error alerts.

### Step 1. Set Up AMP HTML

The AMP setup involves changing the HTML code on your template to the AMP code to enable AMP in your Full HTML code for more setup. How to add the AMP HTML Code.  
Step 1. Log in to Blogger and choose your specific website to add the HTML AMP code.  
Step 2. Reach out to the left commands by navigating to them to the Template command  
Step 3. Click on the template command and then locate the Edit HTML next to Customize.  
Step 4. Click anywhere in your code and then click on Ctrl+F in Windows or CMD+F in Mac.  
**Step 5.** Search for **<html>**  
**Step 6. Replace** the above line with the following code

> <html amp=’amp’>

That's all with adding the AMP to HTML before the head section.

### Step 2. Add Charset and Viewport Meta Tags

In this section of the AMP setup, you have to look at your template code to figure out if it has the charset and viewport meta tags present before adding the code provided below. If they are not present, then you will paste the below code below the <head> tag.

> <meta charset=”utf-8″>  
> <meta name=”viewport” content=”width=device-width,minimum-scale=1,initial-scale=1″>

If you want to know if the charset and viewport code are present, search any of the two names and you will only find it in the head section of your blogger template.

### Step 3. Blogger Setup AMP CDN:

The AMP CDN code is a code that instructs phone browsers to use the AMP version by adding the script in the head section.  
How to add the AMP CDN in your blogger blog code is simple, just copy the BELOW code and paste it just ABOVE the ending tag of the head. **</head>**

> <style amp-boilerplate=’amp-boilerplate’>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate=’amp-boilerplate’>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>  

That`s all with adding the AMP CDN, saving your template theme, and let's go to the other step.

### Step 4. Image AMP Setup.

The image used in the desktop responsive version does not have the same resolution and dimensions that are used in AMP versions. In that case, we add the image AMP code to feature the image of your website post to show on AMP pages. Let's set it Up.  
Normally before we post an image the HTML part of the blogger post when you add an image has the image code, that's what we are going to twerk every time you upload a post image. Change the image code to :

> <amp-img src=”AmpImage.jpg” alt=”amp-img” height=”500″ width=”500″></amp-img>

The **AmpImage jpg** is an example of your image URL as indicated in the code after uploading, You will have to delete the Image src to amp image src code above but make sure you copy the image URL first before changing and then replace it with the Ampimage jpg and that's all.  
Step 5. Setup AMP Canonical Link  
It's paramount to see that you are discoverable with the canonical tag used in your blogger template. The AMP version also uses canonical.  
Add the below code to your blogger template below the charset.

> <link expr:href='data:blog.url' rel='canonical'/>  
> <link rel="canonical" href="https://joecalih.co.ke" />

By adding canonical tags, you set them to point to the homepage and your website posts. Please change the URL **Semdeals** to your domain name URL.

### How To Check The Blogger AMP Validation

To know whether your blogger blog is now an AMP page, then you can check out some of the AMP validation check websites that are around.

**1st Method**  
Open the website validator.ampproject.org.  
The website will help you with all the problems you may need to solve for your blogger AMP versions by using the below idea.  
Enter the URL value to the URL field, for example –  
https://joecalih.co.ke/p/contact-us.html

**2nd Method**  
Move to Chrome.  
Open your AMP page in Chrome browser, for example –

> https://joecalih.co.ke/p/contact-us.html  
> Add the ending “#development=1” to the URL, for example –  
> https://joecalih.co.ke/p/contact-us.html#development=1.

After that, open the Chrome validation tool to check whether your Blogger AMP pages have errors.

Read: [ISO Language Code Tags HTML Reference](https://joecalih.co.ke/iso-language-code-tags-html-reference/)

### How To Add Style To Blogger AMP

**Step 1.** Log in to Blogger and choose your specific website to add the HTML AMP code.  
**Step 2.** Reach out to the left commands by navigating to them to the Template command  
**Step 3.** Click on the template command and then locate the Edit HTML next to Customize.  
**Step 4.** Click anywhere in your code and then click on Ctrl+F in Windows or CMD+F in Mac.  
**Step 5.** Search for **<html>**  
**Step 6. Replace** the above line with the following code

Add below CSS media queries inside your **<style amp-custom='amp-custom'>** tag before the ending **/*]]>*/</style>** tag.  
Any style codes you add in the above style AMP will be displayed in your AMP version. It may be shared buttons or any other styles.  
One AMP tip after adding.

All about the adding of Blogger AMP is covered and now your mobile page visitors will get to enjoy the speed of your website in lightening speeds. You can go ahead and customize the look of your mobile AMP pages by adding several elements to the AMP style code. Thanks for loving my tutorial and keep close for more Blogger website freebies.

Read: [How To Add SEO Keywords In Blogger Post](https://joecalih.co.ke/how-to-add-seo-keywords-in-blogger-website/)