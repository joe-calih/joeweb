---
title: "How To Disable Text Selection In Blogger Posts"
excerpt: " Step by step do disable text selection in blogger website pages content. With simple CSS or Javascript you can block website post selection."
date: "2023-05-15"
author:
  name: "Joe Calih"
  avatar: "/authors/08.jpg"
  description: "John is a seasoned web developer with 10 years of experience in React and Next.js."
category: "Blogger"
image: "/facebook.jpeg"
views: 5432
---


To avoid your posts from being stolen by test selection in blogger and pasting it to their websites, we use the code to make sure we block them to make work hard for them. To disable text selection in Blogger, we have to use some CSS functions that specify what will be selected and what will not in a post. We then choose all the fields that we have in our blogger blogs that we do not want people to steal content from. We also have javascript code to disable the text selection feature but it blocks all text including blockquotes. Let me take you to ways to disable text selection in blogger

The reason why we use this feature in our blogger blogs is to avoid plagiarism as both of the entities that have the same content may get penalized. As a reason, we block people from copying our content by disabling the highlighting feature in any browser after loading our page to discourage those who have visited to copy and paste our content to their [websites](https://joecalih.co.ke/how-to-add-website-favicon-in-browser-tabs/). You can use the tool and allow certain areas in your Blogspot blogger blog to support text selection such as the blockquote. Follow the below steps to go through the adding of the javascript or CSS in your blogger blog.

### How To Disable Text Selection In Blogger With CSS

To disable the blogger post from supporting highlighting, add the below code as instructed.

1.  Login to blogger.
2.  Navigate to the theme right sidebar options.
3.  Click on Edit HTML.
4.  Click anywhere in the code and press Ctrl+F
5.  When the search dialogue appears, find the code – ]]></b:skin> .
6.  ABOVE the above code, and paste your CSS below.

> body {-webkit-user-select: none; -moz-user-select: -moz-none; -ms-user-select: none; user-select: none;}

When you add the above code in your CSS part and save, nothing will be able to be selected in your blogger posts. In case you want people to copy any information in your posts, they will not be able to. If you give people codes and you would like them to copy them, then use the below CSS instead.

### Disable Text Selection Excluding Block quote In Blogger

The CSS below will allow users to copy the content in the blockquote or in code form. That’s for people who provide code details to blog visitors. Copy the below CSS and use the same procedure as the one used in the first example.

\`\`\`
body {-webkit-touch-callout: none;-khtml-user-select: none;-moz-user-select: -moz-none;-ms-user-select: none;user-select: none;-webkit-user-select: none;}blockquote {-webkit-touch-callout: text; Except Blockqoute-khtml-user-select: text;-moz-user-select: text;-ms-user-select: text;user-select: text;-webkit-user-select: text;}.post code {-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;}
\`\`\`

That’s all you need, use the code above, save changes and load your website and try to see if any text will be selected. If it doesn’t select, then you are good to go and your blogger users will be safe from plagiarism. If you would like to use the javascript code instead, follow the below steps.

### How To Disable Text Selection In Blogger With Javascript

The blogger javascript code to disable text highlighting is attached below. o use it in your blogger blog, follow the below steps.

1.  Loggin to [blogger.com](http://Blogger.com)
2.  Click on Layout.
3.  Then click on Add a Gadget.
4.  Choose HTML/javascript Option and add the below javascript code.

\`\`\`
<script type="text/javascript">//form tags to omit in NS6+:var omitformtags=["input", "textarea", "select"]omitformtags=omitformtags.join("|")function disableselect(e){if (omitformtags.indexOf(e.target.tagName.toLowerCase())==-1)return false}function reEnable(){return true}if (typeof document.onselectstart!="undefined")document.onselectstart=new Function ("return false")else{document.onmousedown=disableselectdocument.onmouseup=reEnable}</script>    
\`\`\`

That’s all. When you use the javascript version of the code, everything will be protected and nothing can be highlighted. This is the best one if you don’t want to anything to be copied from your post or blogger blog. I hope you liked the easy tutorial. If you found any difficulty, be sure to contact me as soon.
