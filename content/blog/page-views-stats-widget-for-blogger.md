---
title: "Page Views Stats Widget For Blogger Website"
excerpt: "Tutorial on How To Add Page Views Stats Widget to Blogger Website. Show page views of posts in your blogger website sidebar and homepage."
date: "2023-05-15"
author:
  name: "Joe Calih"
  avatar: "/authors/08.jpg"
  description: "John is a seasoned web developer with 10 years of experience in React and Next.js."
category: "Blogger"
image: "/facebook.jpeg"
views: 5432
---


In this tutorial, we will get the page view stats widget that displays total website views, posts, and comments which may help bring potential advertisers. The blogger widget shows the full total amount of all posts, pages, and all URLs that are associated with your website. The widget has a responsive and clean look that will skyrocket the user interface of your blogger blog visitors. Let’s integrate the views [Widget](https://joecalih.co.ke/responsive-newsletter-email-subscription-blogger-widgets/) into your Blogger Website.

### How To Add Views Widget For Blogger

1: Go to [Blogger](http://blogger.com) Layout > Add a Gadget > Blog’s page views Stats and add the widget to your sidebar panel.  
2. Now Click on theme.  
3. Under live view next to customize, click on Edit HTML.’  
4. Click anywhere in your template code and search for the below code.

> <b:widget id=’Stats1′ locked=’false’ title=’Custom Stats’ type=’Stats’ version=’1′ visible=’true’>…</b:widget>
> 
> Find This Line

5. Replace the code With the Below Code.

\`\`\`
    <b:widget id='Stats1' locked='false' title='Custom Stats' type='Stats' version='1' visible='true'>    <b:includable id='main'>  <b:if cond='data:title'><h2><data:title/></h2></b:if>  <div class='widget-content'>    <!-- Content is going to be visible when data will be fetched from server. -->    <div expr:id='data:widget.instanceId + &quot;_content&quot;' style='display: none;'>      <!-- Counter and image will be injected later via AJAX call. -->      <b:if cond='data:showSparkline'>        <img alt='Sparkline' expr:id='data:widget.instanceId + &quot;_sparkline&quot;' height='30' src='http://2.bp.blogspot.com/-nsxCtkYnchQ/VLEifAyf97I/AAAAAAAAIlk/9Viyy0W9r04/s1600/FFF.png' title='Sparkline' width='75'/>      </b:if>      <b:if cond='data:showGraphicalCounter'>        <span class='counter-wrapper graph-counter-wrapper' expr:id='data:widget.instanceId + &quot;_totalCount&quot;'/>      <b:else/>        <span class='counter-wrapper text-counter-wrapper' expr:id='data:widget.instanceId + &quot;_totalCount&quot;'/>      </b:if><script type='text/javascript'>function postCount(json){document.write(&quot;<span class='counts post2'> Total Posts &quot;);var count = json.feed.openSearch$totalResults.$t;document.write(&quot;<span class='count'>&quot; + count + &quot;</span>&quot;);document.write(&quot;</span>&quot;)}
\`\`\`

6. Search for the code </head> and paste the below code just BEFORE the head tag.

\`\`\`
 <link href='//fonts.googleapis.com/css?family=PT+Sans:400,700' rel='stylesheet' type='text/css'/><link href='//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' rel='stylesheet'/><style type='text/css'>/* Blogger Custom Stats widget by seoblur.com */.Stats img {display:none!important;background-image:none;}.Stats .counter-wrapper {width:92%;text-align:right;margin:10px;line-height:35px;color:#333;font-weight:700;font-size:16px;margin-left: 0;}.Stats .counter-wrapper:after {content:&quot;Page Views&quot;;float:left;text-align:left;font-size:13px;font-weight:700;color:#333;}.counts {display:inline-block;width:92%;font-size:13px;line-height:35px;color:#333;font-weight:700;}.counts .count {display:inline-block;font-size:16px;height:30px;vertical-align:top;direction:ltr;float:right;color:#333;font-weight:700!important;}.counts:hover .titles:before {color:#333!important;border-radius:2px;border-color:rgba(255,255,255,0.1);}.counter-wrapper.text-counter-wrapper:before, .counts:before {display:inline-block;font-size:13px;font-family:FontAwesome;font-style:normal;font-weight:normal;margin:0 10px 0 10px;float:left;width:10px;text-align:center;}.counter-wrapper.text-counter-wrapper:before, .counts:before {display:block;background-color:#fff;color:#333;width:35px;height:35px;font-size:18px;line-height:35px;border-radius:2px;margin:0px 8px 0 0;}.counter-wrapper.text-counter-wrapper:before {content:&quot;f06e&quot;;}.counts.post2:before {content:&quot;f044&quot;;}.counts.comment:before {content:&quot;f0e6&quot;;}#Stats1_content {width:auto;height:auto;background-color:#fff;}</style>
\`\`\`

That’s all, now visit your [website](/category/marketing) to view your website page stats views widget look.

Adding the customized Page Views Stats Widget to your Blogger site can significantly enhance your site's appeal to both visitors and potential advertisers. This widget not only presents a clean and responsive interface that can elevate the user experience but also showcases the robustness of your website through the display of aggregate views, post counts, and comment statistics. Such transparent metrics demonstrate your site's vitality and can attract advertisers looking for active platforms with engaged audiences. With this easy-to-integrate widget, as detailed in our [guide](https://joecalih.co.ke/responsive-newsletter-email-subscription-blogger-widgets/), you're equipping your website with a powerful tool that can lead to increased exposure and revenue opportunities. Visit your website's [marketing category](https://joecalih.co.ke/related-posts-widgets-for-blogger/) today to witness the transformation and step closer to realizing your blog's full potential.
