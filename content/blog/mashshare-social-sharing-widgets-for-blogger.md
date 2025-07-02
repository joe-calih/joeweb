---
title: "Mashshare Social Sharing Widgets For Blogger"
excerpt: " Steps on how to add Mashshare Social Sharing Blogger widget to blogger website. Learn to add a social sharing widget to your blogger blog."
date: "2023-05-15"
author:
  name: "Joe Calih"
  avatar: "/authors/08.jpg"
  description: "John is a seasoned web developer with 10 years of experience in React and Next.js."
category: "Blogger"
image: "/facebook.jpeg"
views: 5432
---


The blogger platform opens up for people who like easily sharing their content. As we all know social media is becoming the key SEO tip-off today. With the mashshare social media sharing widget in your blogger blog, it becomes easy for you and your audience and friends to easily share your post and get desired views. If you take a closer look at my website you will see that I have implemented the mashshare social share buttons three times in a post page to help me easily share my content to my social pages.

**Read on: [Improve SEO Today With Social Media](https://joecalih.co.ke/best-blogger-social-media-share-buttons-widget/)**

It becomes easy when you include your mashshare widget in your blogger blog since you don’t have to copy URLs to share them. Before I waste so much time on an explanation of why you need the below mashshare social sharing widget, let me take you a closer look at how it will look in your blogger blog. The cash share social sharing widget for the blogger blog is attached below.

I am sure you are loving the look of your intended sharing widget. I think it’s time you now implement it directly to your code to the Mashshare social sharing widget working at once. It’s as easy as placing code and saying goodbye to copying URLs and welcoming a new beginning of sharing page content directly to social media.

### How To Add Mashshare Sharing Social Widgets To Blogger

You will have to paste the following codes to your Blogger website template by editing the source code:-

-   Mashshare social sharing widget **CSS** code.
-   Mashshare social sharing widget **HTML** code.
-   Mashshare social sharing widget **SCRIPT** code.

### How To Add Mashshare social sharing widget CSS code

**Step 1.** Log in to Blogger and choose your specific website to add the SEO code.  
**Step 2.** Reach out to the left commands by navigating to them to the Template command  
**Step 3.** Click on the template command and then locate the Edit HTML next to Customize.  
**Step 4.** Click anywhere in your code and then click on Ctrl+F in Windows or CMD+F in Mac.  
**Step 5.** Search for **]]></b:skin>**  
**Step 6.** Just **ABOVE** the Above code, paste the CSS code below.

\`\`\`
 /*Mashshare Social Media Share For joecalih.co.ke*/  #sharrrrre{float:left;margin:0 5px 0 0;padding:8px;border-right:1px solid silver}.sharrre .count{color:#7fc04c;font-weight:700;display:block;font-size:50px;position:relative;text-align:center;text-decoration:none;width:100px;line-height:40px;padding:0}.sharrre .share{color:#666;display:block;font-size:10px;height:10px;text-align:center;text-decoration:none;width:100px;padding:0}.social-div a{text-decoration:none!important;display:inline-block}.social-div a img{display:inline-block;width:auto;height:auto;margin:0 8px 0 -5px;vertical-align:middle}#socialshare{display:inline-block;vertical-align:middle;text-align:center;color:#fff;font-size:16px;padding:14px 20px 15px;text-decoration:none;font-family:Open Sans;margin-right:5px;-webkit-font-smoothing:antialiased;-webkit-text-rendering:optimizeLegibility;text-transform:uppercase}#socialshare:active{padding:15px 20px;margin-bottom:-1px}#socialshare:hover{opacity: 0.9;}.share-toggle{position:relative;display:inline-block;cursor:pointer;vertical-align:middle;text-align:center;color:#fff}.share-toggle a{color:#fff;text-decoration:none;}.social-div{vertical-align:middle;margin: 25px;}#expand-social{display:inline-block;position:relative;vertical-align:middle;height:53px}#social-expand{display:inline-block;vertical-align:middle;position:relative;top:0;left:0}.expand{background:#FF4949;position:relative;width:40px;height:40px;line-height:40px;font-size:200%}.expand:active{box-shadow:0 1px 0 0 #c5bebe;height:41px;margin-bottom:-1px}.expand:hover{opacity:.9}.expand-minus{display:none}.socialshare2{width:50px;height:50px;display:inline-block}.socialshare2:active{height:51px;margin-bottom:-1px}.socialshare2:hover{opacity:.9}.mbafacebook{background:#507bbf}.mbafacebook:active{box-shadow:0 1px 0 0 #4671b5}.mbatwitter{background:#63cef2}.mbagoogle-plus{background:#4d4f54 url(http://2.bp.blogspot.com/-JUU52V5MYVo/U_A3giibA_I/AAAAAAAAHCM/SzeQhUA-Bxo/s20/g%2B.png) no-repeat center}.mbagoogle-plus:active{box-shadow:0 1px 0 0 #43454c}.mbalinkedin{background:#1aace3 url(http://4.bp.blogspot.com/-QMNlNpoulTE/U_BXjWZny7I/AAAAAAAAHCc/-EfrIknqbWo/s20/in.png) no-repeat center}.mbalinkedin:active{box-shadow:0 1px 0 0 #12a4db}.mbapinterest{background:#f16261 url(http://4.bp.blogspot.com/-vOmei_tL7Jk/U_BY4sC_jYI/AAAAAAAAHCo/EkqbJL7hvJg/s20/pinterest.png) no-repeat center}.mbapinterest:active{box-shadow:0 1px 0 0 #e85756}.mbastumbleupon{background:#fdaf40 url(http://3.bp.blogspot.com/-VtXmJrq9NWo/U_BZpBmH5gI/AAAAAAAAHCw/2B-pqn5B3Wk/s20/stumble.png) no-repeat center}.mbastumbleupon:active{box-shadow:0 1px 0 0 #f5a635}
\`\`\`

### **How To Add Mashshare Social Sharing Widget HTML**

**Step 1.** Log in to Blogger and choose your specific website to add the SEO code.  
**Step 2.** Reach out to the left commands by navigating to them to the Template command  
**Step 3.** Click on the template command and then locate the Edit HTML next to Customize.  
**Step 4.** Click anywhere in your code and then click on Ctrl+F in Windows or CMD+F in Mac.  
Step 5. Copy the Below code and paste it Below <data: **post.body/>**

\`\`\`
<b:if cond='data:blog.pageType == &quot;item&quot;'><div class='social-div'><div id='sharrrrre'>  <div data-title='SHARES' id='shareme'/></div><div style='display: inline-block; margin-bottom: 20px;'> <a class='mbafacebook' expr:href='&quot;http://www.facebook.com/sharer.php?u=&quot; + data:post.url + &quot;&amp;title=&quot;+ data:post.title' id='socialshare' onclick='window.open(this.href, &apos;windowName&apos;, &apos;width=550, height=600, left=24, top=24, scrollbars, resizable&apos;); return false;' rel='nofollow' target='_blank'> <img src='https://googledrive.com/host/0B8D3MQmcZTyvN1kzV3lfS2h6NW8'/> Share on Facebook </a> <a class='mbatwitter' expr:href='&quot;http://twitter.com/share?url=&quot; + data:post.url + &quot;&amp;title=&quot; + data:post.title' id='socialshare' onclick='window.open(this.href, &apos;windowName&apos;, &apos;width=550, height=600, left=24, top=24, scrollbars, resizable&apos;); return false;' rel='nofollow' target='_blank'> <img src='https://googledrive.com/host/0B8D3MQmcZTyvVXp2Qm5OSzRMUmM'/> Share on Twitter </a></div><div id='expand-social' style='display:none;'><a class='socialshare2 mbagoogle-plus' data-title='Google+' expr:href='&quot;https://plus.google.com/u/0/share?url=&quot; + data:post.url' onclick='window.open(this.href, &apos;windowName&apos;, &apos;width=550, height=600, left=24, top=24, scrollbars, resizable&apos;); return false;' rel='nofollow' target='_blank'> </a><a class='socialshare2 mbalinkedin' data-title='Linkedin' expr:href='&quot;http://www.linkedin.com/shareArticle?mini=true&amp;url=&quot; + data:post.url + &quot;&amp;title=&quot; + data:post.title + &quot;&amp;source=&quot; + data:blog.title' onclick='window.open(this.href, &apos;windowName&apos;, &apos;width=550, height=600, left=24, top=24, scrollbars, resizable&apos;); return false;' target='_blank'> </a><a class='socialshare2 mbastumbleupon' data-title='Stumble-Upon' expr:href='&quot;http://www.stumbleupon.com/submit?url=&quot; + data:post.url + &quot;&amp;title=&quot; + data:post.title' onclick='window.open(this.href, &apos;windowName&apos;, &apos;width=550, height=600, left=24, top=24, scrollbars, resizable&apos;); return false;' rel='nofollow' target='_blank'> </a><a class='socialshare2 mbapinterest' data-title='Pin it' expr:href='&quot;http://pinterest.com/pin/create/button/?url=&quot; + data:post.url + &quot;&amp;media=&quot; + data:post.thumbnailUrl + &quot;&amp;description=&quot; + data:post.snippet' onclick='window.open(this.href, &apos;windowName&apos;, &apos;width=550, height=600, left=24, top=24, scrollbars, resizable&apos;); return false;' rel='nofollow' target='_blank'> </a></div><div class='share-toggle'><div id='social-expand' onClick='toggle(&apos;expand-social&apos;);'><div class='expand-plus expand'>+</div><div class='expand-minus expand'>-</div></div></div>  </div></b:if>
\`\`\`

### **Add Mashshare Sharing Social Widgets Script To Blogger**

**Step 1.** Log in to Blogger and choose your specific website to add the SEO code.  
**Step 2.** Reach out to the left commands by navigating to them to the Template command  
**Step 3.** Click on the template command and then locate the Edit HTML next to Customize.  
**Step 4.** Click anywhere in your code and then click on Ctrl+F in Windows or CMD+F in Mac.  
**Step 5.** Search for the code **</body>**  
**Step 6.** **Before** the above code paste the **below** code

\`\`\`
https://cdn.rawgit.com/msdesign92/ms-design/master/mashable-share.js<script type='text/javascript'>function toggle(d){$(&quot;#&quot; + d).animate({width:'toggle'},400);}$(document).ready(function(){$(&quot;#social-expand&quot;).click(function(){$(&quot;.expand-plus&quot;).toggle();$(&quot;.expand-minus&quot;).toggle();});});</script>
\`\`\`

Now you are done adding the Mashshare social sharing widget to your blogger blog. In case you want to find more, read the below posts or even comment or contact me and I will be able to assist you in any way. Thank you.

**Read On:** [Breadcrumbs Schema Markup For Blogger](https://joecalih.co.ke/breadcrumbs-schema-markup-for-blogger-website/)
