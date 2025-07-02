---
title: "Select And Share Twitter Widget For Blogger"
excerpt: "highlighting Twitter sharing widget is here for Blogger. Select and share blogger content on Twitter. The widget will show a Twitter icon."
date: "2023-12-15"
author:
  name: "Joe Calih"
  avatar: "/authors/08.jpg"
  description: "Nairobi photographer and developer who captures portraiture, landscapes, weddings, and photo studios."
category: "Blogger"
image: "/Share-Twitter-Widget-For-Blogger.webp"
views: 5432
---


Sharing is caring, and the easy way to get more Twitter followers is you share more content that you think they will like. In blogger, you get a nice opportunity to share content with a Twitter widget that allows you to share your content by selecting a part of it, and a Twitter icon appears on the top to automatically share to Twitter. This can be a good widget for all blogger users who want to use the chance to allow those who use their blogger blog to share the best information they find pleasing. The widget looks so good and will look good and efficient in any blogger blog.

Select and share the Twitter [widget](https://joecalih.co.ke/social-media-sidebar-widget-for-blogger/) on Blogger, you will have to add some code to your blogger template. Give the widget a good look and allow it to know the text selected and redirect the user to another page. Redirect to Twitter where they can paste the selected info. Am pretty sure you are now conversant with what we are talking about in this tutorial. The picture below shows how the widget will look upon implementing and selecting text in your blogger blog.

![Tweet Quote](https://joecalih.co.ke/wp-content/uploads/2024/02/Quote-Tweet.jpg "Share Twitter Widget For Blogger")

### How To Add Select And Share Twitter Widget in Blogger.

To add the share Twitter widget to a blogger you will have to follow the steps below and place the code indicated in the appropriate area of use.  
**Step 1.** Log in to Blogger and choose your specific website to add the SEO code.  
**Step 2.** Reach out to the left commands by navigating to them to the Template command  
**Step 3.** Click on the template command and then locate the Edit HTML next to Customize.  
**Step 4.** Click anywhere in your code and then click on Ctrl+F in Windows or CMD+F in Mac.  
**Step 5.** Search for **]]></b:skin>**  
**Step 6.** Just **ABOVE** the Above code, paste the CSS code below.

\`\`\`
.joecalih {display:none;top:0;background:#333;color:#f16786;width:40px;height:32px;position:absolute;margin-left:-20px;opacity:0;filter:alpha(opacity=0);z-index:99;-webkit-transition:all .3s ease;-moz-transition:all .3s ease-in-out;-o-transition:all .3s ease;transition:all .3s ease-in-out;}.joecalih span {position:absolute;content:" ";border:solid rgba(0,0,0,0);height:0;width:0;top:100%;border-top-color:#333;left:50%;-webkit-transition:all .3s ease;-moz-transition:all .3s ease-in-out;-o-transition:all .3s ease;transition:all .3s ease-in-out;border-width:7px;margin:0 0 0 -7px;}.joecalih a {color:#f16786;}.joecalih:hover {background:#3D566E;}.joecalih:hover span {border-top-color:#3D566E;}.tooltipContainer {position:relative;display:block;width:100%;height:100%;top:0;left:0;}.tooltipContainer a {width:100%;background:transparent  url(http://4.bp.blogspot.com/-HCutv6Nw8iM/VK_Q-v7WT1I/AAAAAAAAFTY/rbxVAhvs_dM/s1600/sprites.png)  0 0 no-repeat;left:0;top:0;height:100%;text-decoration:none;display:block;padding:0;}.sharingLink {display:block;position:absolute;text-indent:-9999px;}
\`\`\`

That’s all with the CSS part of the Twitter select and share widget. That’s the style of the Twitter bird and background and selection. Now, let’s add some little JavaScript to spice things up.  
– Search for **</head>** and copy and paste the below code just above it.

\`\`\`
<script type='text/javascript'> /*<![CDATA[*/ $(document).ready(function() {    textToShare = '';    $(document).mousemove(function(m) {        generateTooltipPosition();    });});$(document).mouseup(function() {    $(document).mousemove(function(m) {        generateTooltipPosition()    });    var textToShare = getTextToShare();    var joecalih = document.getElementById("joecalih");    if (textToShare != '') showMeTooltip();});$(document).click(function() {    var textToShare = getTextToShare();    var tooltipTitle = null;    var newTooltipTitle = $("#joecalih").attr("title");    if (newTooltipTitle == "") return;    if (newTooltipTitle !== tooltipTitle) $('#joecalih').animate({        opacity: 0    }, 30);    if (textToShare != "") showMeTooltip();});$(window).resize(function() {    if ($('#joecalih').show()) {        $('#joecalih').animate({            opacity: 0        }, 30);    }});function showMeTooltip() {    var pageURL = window.location.toString();    var twitterLink = "https://twitter.com/intent/tweet?text=" +  getTextToShare() + "&via=" + twitterAccount + "&url=" + pageURL;    $('#joecalih').show();    $('#joecalih').animate({        opacity: 1    }, 30);    $('#sendToTwitter').attr('href', twitterLink);}function getTextToShare() {    shareTxt = '';    if (window.getSelection) {        shareTxt = window.getSelection();        generateTooltipPosition();    } else if (document.getSelection) {        shareTxt = document.getSelection();        generateTooltipPosition();    }    return shareTxt;}function generateTooltipPosition() {    var selection = window.getSelection && window.getSelection();    if (selection && selection.rangeCount > 0) {        range = selection.getRangeAt(0);        pos = $(window).scrollTop();        selection_text = selection.toString(), rect = range.getBoundingClientRect();        $('#joecalih').css({            top: (rect.top + pos - 20) - 32 + 'px',            left: rect.left + (rect.width / 2) + 'px',        });    }}/*]]>*/</script>
\`\`\`

Now we are finally only one step to completion. We have to add the simple HTML code to make the widget work and we will be good to go now. Let’s jump into the implementation setup process.  
– Search for the code **</body>** and paste the Below code above it.

> <script>var twitterAccount = “nitinmaheta”;</script>  
> <div class=”joecalih” id=”joecalih”>  
> <div class=”tooltipContainer”><a id=”sendToTwitter” href=”” class=”sharingLink twitter”><span></span></a></div>  
> </div>

Now you are done with the implementation of the widget and am pretty sure it will work well with a good UI that you will love experiencing in your blogger blog. In case you need more assistance in this, just call me through the [Contact Us](/contact) page or comment and I will be available for help. Thanks, I'll find you at the next one. See the below reviews of the select and share Twitter widget for bloggers.
