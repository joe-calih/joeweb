---
title: "How to Fix Render Blocking Font Awesome Script"
excerpt: " Font Awesome CSS Script Resources block render of websites. Pages speed insights are affected by Render Blocking Font Awesome CSS Script"
date: "2023-05-15"
author:
  name: "Joe Calih"
  avatar: "/authors/08.jpg"
  description: "John is a seasoned web developer with 10 years of experience in React and Next.js."
category: "SEO"
image: "/facebook.jpeg"
views: 5432
---


Font Awesome script is a cool CSS plugin in Blogger and also WordPress templates. The main purpose is to add simple small beautiful icons representing a known value of icons. Whenever we use the font awesome code in templates we add style. when the add-on is not optimized we get slower templates and that puts our ranking in jeopardy. To know which render-blocking scripts are blocking your speed you can use [Google Speed Insights](https://joecalih.co.ke/speed-up-google-ajax-jquery-code/). Font Awesome CSS Script is one of them. Today I am going to show you how to use the font awesome CSS and still have an optimized speed on the website. The topic is How to Fix Render Blocking Font Awesome CSS Script Resources.

[![Font Awesome CSS Script](https://joecalih.files.wordpress.com/2024/06/6529f-font_awesome_speed.png?w=300 "Font Awesome CSS Script")](http://joecalih.files.wordpress.com/2024/06/6529f-font_awesome_speed.png)

Render-blocking scripts are those that block resources and cause your blogger blog to render slowly. Font Awesome CSS is not the only render-blocking script that can cause your blogger or WordPress website to run slower. There are other Java scripts and CSS that cause our websites to go slower. Here at Seohuk, we have the perfect medicine for your affected blog. We will address the issue of slowed website loading speed caused by the font awesome CSS render blocking resource in the code section by implementing a sync script. This script ensures that the entire website is loaded before the script is loaded in the web view. By doing so, we aim to improve the website’s loading speed.

## How the Font Awesome Gets Blocked

The sync script is meant to let other resources load first before allowing the locked script to load so that the visible content will be seen first before the icons and more images. Font Awesome CSS script will still work perfectly well and even better since there will be no interference with the code.

Your font awesome code may look like below.

```
<link href=’//netdna.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css’ rel=’stylesheet’/>
```

there are various versions of font awesome render-blocking font awesome CSS scripts and they are categorized in number digits. The sync script code works on the all Java script codes in your template that you would like to optimize. This time around we have specified special features in the sync code so that it would be more comfortable with loading content and all versions of font awesome CSS scripts. Do not use it for other Java scripts but I will direct you on how to add async scripts to other render-blocking CSS and Java scripts in your template.

## Fix Blocking Font Awesome in Blogger

The fixing of the render-blocking font awesome CSS script is based on placing the code inside the async script that will then optimize the code each time it is compiled. It’s easy to go about it and we are going to go step by step in adding the sync script and also parsing your version of font awesome CSS script inside the async code script. It’s going to be very easy. Without wasting time, we have a website to serve us. Let’s jump into blogger implementation.

**Step 1.** Log in to Blogger and choose your specific website to add the script code.  
Step 2. Reach out to the left commands by navigating to them to the Template command  
Step 3. Click on the template command and then locate the Edit HTML next to Customize.  
Step 4. Click anywhere in your code and then click on Ctrl+F in Windows or CMD+F in Mac.  
Step 5. Search for the below scripts.

```
<link href=’//netdna.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css’ rel=’stylesheet’/>
```

If you search for this font’s awesome CSS script and don’t find it in this manner search for the below.

```
<link href=’ https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css’ rel=’stylesheet’/>
```

**Step 6.** After finding the **ABOVE** cut the code and paste it somewhere in your notepad or any editor.  
**Step 7.** Now copy the below async code and paste it above/before the ending tag of head **</head>**

```
<script type='text/javascript'> //<![CDATA[ function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("script")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" }) }loadCSS("Paste Your Font Awesome File Here"); //]]> </ Script>
```

**Step 8.** After pasting the above code now copy your font awesome CSS script code and paste it in the bold text written post your post awesome CSS code here.

### More Font Awesome Rendering Optimization

Font Awesome's script render-blocking slows down your website's loading speed by a significant amount according to [Gmetrix](https://gtmetrix.com/). Here are other methods to fix the render blocking more after the above hack. This can also work for WordPress websites:

1.  **Use Font Awesome Kit:** Font Awesome loads the icons asynchronously.
2.  **Move Script to Bottom:** The Font Awesome script tag should be moved from the `<head>` section to the bottom closing `</body>` tag. Pages
3.  **Defer Attribute:** Adding the `defer` attribute to the script tag can further improve performance.
4.  **Async Attribute (Use with Caution):** The `async` attribute is another option. Unlike `defer`, `async` allows the script to load HTML parsing, potentially leading to unexpected behavior.
5.  **Use Only Include Used Icons**

Now, save the template and proceed to the speed testing tool to determine whether the speed of your website has increased. This progress is excellent for optimizing your blogger blog and achieving a 100% optimized website. Continue optimizing the other resources such as images and other CSS and Javascript codes that might be responsible for the slowing down of your website which jeopardizes the SEO state of your website.