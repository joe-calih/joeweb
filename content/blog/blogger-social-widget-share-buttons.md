---
title: "Best Blogger Social Media Share Buttons Widget"
excerpt: " YouTube SEO refers to the process of optimizing your videos for search engines such as Google and YouTube."
date: "2023-05-15"
author:
  name: "Joe Calih"
  avatar: "/authors/08.jpg"
  description: "John is a seasoned web developer with 10 years of experience in React and Next.js."
category: "SEO"
image: "/facebook.jpeg"
views: 5432
---


Blogger post gets more traffic through sharing than even organic ones. The social media share widget makes it easy to share a post with the click of one button. It makes it better for users who visit your blogger blog to share your post with their friends. Today I have made for you the best-ever social media buttons widget that you can use before or below a post. The widget has a stylish, responsive, and premium look to transform your blogger blog for good.

We will take time to add several codes to the CSS and HTML part of our template code to make sure that the social media sharing buttons display correctly in the correct place. Without wasting more time on the explanation, let's see what the widget looks like and how to add it to Blogger. That shows it looks like below my blog post when I added the widget to my Blogspot blogger blog. Let's see ways of adding the widget to Blogger.

Follow the steps below to know where you will paste your codes.

**Step 1.** Log in to [**Blogger**](http://blogger.com/) and choose your website to add the SEO code.  
Step 2. Reach out to the left commands by navigating to them to the Template command  
Step 3. Click on the template command and locate the Edit HTML next to Customize.  
**Step 4.** Click anywhere in your code and then click on Ctrl+F in Windows or CMD+F in Mac.  
Step 5. In the search bar search for the ]]></b:skin> tag.  
Step 6. After finding the Head Tag Copy all the code BELOW and Paste it BEFORE the above tag.  
**CSS Code**

\`\`\`
/* Social Buttons joecalih.co.ke */
.post_social_share {
display: block;
    padding: 8px 0;
    margin-bottom: 0px;
}
.post_social_share h3 {
display: block;
font-size: 14px;
line-height: 54px;
font-weight: 700;
margin-bottom: 0;
letter-spacing: 2px;
}
.post_social_share a {
   width: 42px;
    height: 42px;
    line-height: 42px;
    font-size: 20px;
    display: inline-block;
    text-align: center;
    color: #fff;
    background: #30373b;
    border-radius:50px;
    -o-border-radius:50px;
    -moz-border-radius:50px;
    -webkit-border-radius:50px;
    margin-right: 2px;
}
a.social_share.fb{background:#3F51B5;width:30%}
a.social_share.tw{background:#03A9F4;width:30%;}
a.social_share.gp{background:#F44336;}
a.social_share.pi{background:#CF1B2B;}
.whats{background: #4CAF50!important;}
a.social_share.li{background:#1a7baa;}
a.social_share.em{background:#ccc;}
.post_social_share a:hover {
-webkit-transition:border-color .2s;
-moz-transition:border-color .2s;
transition:border-color .2s
}
.share_this_content a.social_share {
    font-size: 10.5px;
    text-transform: uppercase;
    font-weight: 900;
    margin-bottom:0px;
    vertical-align:top;
}
.share_this_content i{font-size:14px;}
.share_this_content i.fa.fa-facebook,.share_this_content i.fa.fa-twitter{margin-right:5px;}
\`\`\`

That's all with the CSS part, now let's move to the HTML part.

### Add Social Widgets To Blogger Layout

Follow the steps below to know where you will paste your codes.

**1.** Log in to [**Blogger**](http://blogger.com/) and choose your specific website to add the SEO code.  
**2.** Reach out to the left commands by navigating to them to the Template command  
3. Click on the template command and locate the Edit HTML next to Customize.  
**4.** Click anywhere in your code and then click on Ctrl+F in Windows or CMD+F in Mac.  
5. In the search bar search for the <data:post.body/> tag.  
6. After finding the Head Tag Copy all the code BELOW and Paste it BEFORE the above tag.  
**HTML Code.**

\`\`\`
 <div class='post_social_share'><div class='share_this_content'><a class='social_share fb' expr:href='data:post.sharePostUrl + &quot;&amp;target=facebook&quot;' expr:onclick='&quot;window.open(this.href, &quot;_blank&quot;, &quot;height=430,width=640&quot;); return false;&quot;' expr:title='data:top.shareToFacebookMsg' target='_blank'><i class='fa fa-facebook'/> Share on Facebook</a>
      <a class='social_share tw' expr:href='data:post.sharePostUrl + &quot;&amp;target=twitter&quot;' expr:title='data:top.shareToTwitterMsg' target='_blank'><i class='fa fa-twitter'/> Share on Twitter</a>
      <a class='social_share gp' expr:href='&quot;https://plus.google.com/share?url=&quot; + data:post.url' onclick='javascript:window.open(this.href,   &quot;&quot;, &quot;menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600&quot;);return false;' rel='nofollow' title='Share this on Google+'><i class='fa fa-google-plus'/></a>
      <a class='social_share pi' expr:href='&quot;http://pinterest.com/pin/create/button/?url=&quot; + data:post.url + &quot;&amp;media=&quot; + data:post.thumbnailUrl + &quot;&amp;description=&quot; + data:post.snippet' onclick='window.open(this.href, &apos;windowName&apos;, &apos;width=550, height=600, left=24, top=24, scrollbars, resizable&apos;); return false;' rel='nofollow' title='Share this on Google+'><i class='fa fa-pinterest'/></a>
<a class='social_share whats' data-action='share/whatsapp/share' expr:href='&quot;whatsapp://send?text=Take a look at this : &quot; + data:post.url + &quot; From &quot; + data:blog.title'><i class='fa fa-whatsapp'/></a>
      <a class='social_share li' expr:href='&quot;https://www.linkedin.com/shareArticle?mini=true&amp;url=&quot; + data:blog.url.canonical + &quot;&amp;title=&quot; + data:view.title.escaped + &quot;&amp;summary=&quot; + data:view.description.escaped' target='_blank'><i class='fa fa-linkedin'/></a>
      <a class='social_share em' expr:href='data:post.sharePostUrl + &quot;&amp;target=pinterest&quot;' expr:title='data:top.shareToPinterestMsg' target='_blank'><i class='fa fa-envelope-o'/></a>
    </div>
</div>
\`\`\`

That's all with the above social media widget, it's a simple implementation method. Refresh and your social share buttons will display below the title of the post body. If you want to add the blogger share buttons below the post then search the code **<div class='post-footer** and paste the HTML Code below it. That's all and thank you for learning this tutorial. I hope was of great assistance, contact me for more support.

Read: [Mashshare Sharing Social Widgets For Blogger Blog](https://joecalih.co.ke/mashshare-social-sharing-widgets-for-blogger/)
