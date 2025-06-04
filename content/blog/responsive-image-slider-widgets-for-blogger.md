---
title: "Responsive Image Slider Widgets For Blogger"
excerpt: "How to add Image Slider Widgets To Blogger with photo Slider Widgets for home, & featured posts. Add image slider blogger widget today."
date: "2023-05-15"
author:
  name: "Joe Calih"
  avatar: "/authors/08.jpg"
  description: "Nairobi photographer and developer who captures portraiture, landscapes, weddings, and photo studios."
category: "Blogger"
image: "/facebook.jpeg"
views: 857
---


<p>The below example of a slider widget is the one I like most since it is used with most professional premium template developers and builders. I am sure you have come across this awesome look in the best designs in the blogger template market. Today I am going to give you this design for free. You may wonder what this Best Responsive Image Slideshow Widget for bloggers is made up of and let me do a quick introduction before we use it in our <a href="/category/blogger">blogger templates</a>.</p>
<p>The above Responsive Image Slideshow Widget comprises the three core components of j Query, CSS, and HTML which are all minified. If your template has the jQuery functions, don't add them since they are already compatible with the slider widget above. With all that said, it awaits to be done. Let's now add the Responsive Image Slideshow Widget codes to our blogger template.</p>
<p><!-- /wp:post-content --></p>
<p><!-- wp:quote --></p>
<blockquote><p><!-- wp:paragraph --></p>
<p>The above  Responsive Image Slideshow Widgets For Blogger uses jquery function and in-case you have the jquery code in your blogger template code don't use it twice.</p>
<p><!-- /wp:paragraph --></p></blockquote>
<p><!-- /wp:quote --></p>
<p><!-- wp:heading {"level":4} --></p>
<h4>How To Add Full-Size Homepage Image Slider To Blogger</h4>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p><b>CSS </b><br />
Go to Theme &gt; Edit HTML and find the CSS section of your theme (between &lt;b: skin&gt; and ]]&gt; &lt;/b: skin&gt;).<br />
Add the following CSS above the closing ]]&gt; &lt;/b: skin&gt; tag.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre><code>/* Start seohuk.com Slider */.cycle-slideshow{width:100%;height:400px;display:block;text-align:center;z-index:0;overflow:hidden;margin:0;position:relative;}.cycle-slideshow ul{width:100%;height:100%;height:100vh;padding:0;}.cycle-slideshow li{width:100%;height:100%;margin:0;padding:0;}.cycle-prev,.cycle-next{position:absolute;top:0;width:11%;opacity:.92;filter:alpha(opacity=92);z-index:800;height:100%;cursor:pointer;-o-transition:.25s;-ms-transition:.25s;-moz-transition:.25s;-webkit-transition:.25s;opacity:0;}.cycle-slideshow:hover .cycle-prev,.cycle-slideshow:hover .cycle-next{opacity:1;}.cycle-prev{left:10px;position:absolute;top:50%;margin-top:-15px;color:#fff;outline:0;z-index:999;border:1px solid #fff;height:30px;width:30px;font-size:16px;line-height:30px;text-align:center;border-radius:50%;-o-transition:.25s;-ms-transition:.25s;-moz-transition:.25s;-webkit-transition:.25s;}.cycle-next{right:10px;position:absolute;top:50%;margin-top:-15px;color:#fff;outline:0;z-index:999;border:1px solid #fff;height:30px;width:30px;font-size:16px;line-height:30px;text-align:center;border-radius:50%;-o-transition:.25s;-ms-transition:.25s;-moz-transition:.25s;-webkit-transition:.25s}.slide-inside{display:table;vertical-align:middle;height:100%;padding:0;width:100%;background:transparent;transition:all .25s ease-out;-o-transition:all .25s ease-out;-moz-transition:all .25s ease-out;-webkit-transition:all .25s ease-out}.slide-inside:hover{background:rgba(255,255,255,.1)}.slide-title,.slide-title a:hover{display:table-cell;vertical-align:middle}.slide-image{background-position:center;background-size:cover;height:100%;width:100%}.slide-cat{display:inline-block;margin:0 3px 13px;color:#fff;font-size:11px;text-transform:uppercase;letter-spacing:2px;padding-bottom:2px}.slide-h2{color:#fff;font-size:24px;line-height:1.4em;font-weight:400;text-transform:uppercase;letter-spacing:3px;margin-bottom:16px;display:block;z-index:9}.slide-excerpt{color:#fff;font-size:12px;font-weight:300;letter-spacing:1px;padding:0 0 20px;display:none}.slide-divider{border-top:2px solid;display:block;max-width:50px;margin:0 auto;color:#fff}.slide-more{display:none;color:#fff;padding:10px 15px;margin:25px auto 10px;font-size:10px;text-transform:uppercase;letter-spacing:2px;border:2px solid #fff;display:inline-block;transition:all .25s ease-out;-o-transition:all .25s ease-out;-moz-transition:all .25s ease-out;-webkit-transition:all .25s ease-out}.slide-more:hover{background:#fff;color:#000}#crosscol-overflow{margin:0 auto;}.mobile .cycle-slideshow{height:250px}.mobile .slide-resume,.mobile .slide-more{display:none;}</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>The above is the CSS style, make sure it falls at the CSS style code bundle between the Bkin tags. After that let's head over to the javascript so that we can add motions to the slider to make it have the best sliding animations that make it responsive.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p><b>JAVASCRIPT.</b><br />
How to add the javascript code to your blogger blog is very simple just navigate straight to the &lt;/head&gt; section of your blogger blog and just ABOVE it add the below javascript code.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre><code>&lt;!-- include seohuk.com Slider --&gt;&lt;script&gt; //&lt;![CDATA[ // Slider Revolution seoclive.com Compiled // Premium Slider Java var showpostthumbnails=!0;var showpostsummary=!0;var random_posts=!1;var numchars=100;var numposts=4;function showgalleryposts(json){var numPosts=json.feed.openSearch$totalResults.$t;var indexPosts=new Array();document.write('&lt;ul&gt;');for(var i=0;i&lt;numPosts;++i){indexPosts[i]=i} if(random_posts==!0){indexPosts.sort(function(){return 0.5-Math.random()})} if(numposts&gt;numPosts){numposts=numPosts} for(i=0;i&lt;numposts;++i){var entry=json.feed.entry[indexPosts[i]];var posttitle=entry.title.$t; if(typeof cate=='undefined'){var cate="uncategorised"}else{var cate=json.feed.entry[i].category[0].term} for(var k=0;k&lt;entry.link.length;k++){if(entry.link[k].rel=='alternate'){posturl=entry.link[k].href;break}} if("content" in entry){var postcontent=entry.content.$t} s=postcontent;a=s.indexOf("&lt;img");b=s.indexOf("src="",a);c=s.indexOf(""",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&amp;&amp;(b!=-1)&amp;&amp;(c!=-1)&amp;&amp;(d!="")){var thumburl=d}else var thumburl='//placehold.it/1000x300';document.write('&lt;li&gt;&lt;div class="cycle-slideshow"&gt;&lt;a href="'+posturl+'"&gt;&lt;div class="slide-image" style="background-image:url('+thumburl+');"/&gt;&lt;div class="slide-inside"&gt;&lt;div class="slide-title"&gt;');document.write('&lt;div class="slide-container"&gt;');document.write('&lt;div class="slide-cat"&gt;'+cate+'&lt;/div&gt;');document.write('&lt;div class="slide-h2"&gt;'+posttitle+'&lt;/div&gt;');var re=/&lt;S[^&gt;]*&gt;/g;postcontent=postcontent.replace(re,"");if(showpostsummary==!0){if(postcontent.length&lt;numchars){document.write('&lt;div class="slide-excerpt"&gt;'+postcontent+'... &lt;/div&gt;')}else{postcontent=postcontent.substring(0,numchars);var quoteEnd=postcontent.lastIndexOf(" ");postcontentl=postcontent.substring(0,quoteEnd);document.write('&lt;div class="slide-excerpt"&gt;'+postcontent+'... &lt;/div&gt;')} document.write('&lt;div class="slide-divider"&gt;&lt;/div&gt;');document.write('&lt;div class="slide-more"&gt;Read More&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;')} document.write('&lt;/a&gt;&lt;/div&gt;&lt;/li&gt;')} document.write('&lt;/ul&gt;');document.write("&lt;div class='cycle-prev'&gt;&lt;i class='fa fa-angle-left' aria-hidden='true'&gt;&lt;/i&gt;&lt;/div&gt;&lt;div class='cycle-next'&gt;&lt;i class='fa fa-angle-right' aria-hidden='true'&gt;&lt;/i&gt;&lt;/div&gt;")} //]]&gt; &lt;/script&gt; </code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>The above JavaScript code is the game changer of all the ideas in the movement and transitions of the slider above. Let's move on to the jQuery part. But as I said before if you have a jQuery code in your template <b>don't</b> add this.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p><b>JQUERY</b><br />
Copy the below code and paste it ABOVE the <b>&lt;/head&gt;</b> too`</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:quote --></p>
<blockquote><p><!-- wp:paragraph --></p>
<p>&lt;!-- include jQuery --&gt;<br />
<a href="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js">http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js</a>&lt;/div&gt;&lt;!-- .cycle-slideshow --&gt;</code><br />
<!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>That`s all. Now save your template and navigate to the homepage view and you will get your responsive slider widget well-placed and functioning. The slider also supports amp and you can also customize the speed of slides and the animations to make it even more responsive. Let's move over to yet another  Best Responsive Image Slider Widget for Bloggers.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3>2. Image Slider Widget With 50 Transition Styles</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Many widgets have great transitions but this one is the best of all when it comes to image transition effects in the slider.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:image {"width":454,"height":249,"linkDestination":"custom"} --></p>
<figure><a href="https://joecalih.files.wordpress.com/2024/06/2824c-image_slider_widget_with_transition_styles.jpg"><img title="Image Slider Widget With Transition Styles" src="https://joecalih.files.wordpress.com/2024/06/2824c-image_slider_widget_with_transition_styles.jpg" alt="Image Slider Widget With Transition Styles" width="454" height="249" /></a></figure>
<p><!-- /wp:image --></p>
<p><!-- wp:paragraph --></p>
<p>The animations that make their way through each image when changing in this Responsive Image Slider Widgets For Blogger. Make it look premium and good for use. I have made a single code for better implementation of the widget to your blogger blog template.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":4} --></p>
<h4><b>How To Add  Image Slider Widget With 50 Transition Styles</b></h4>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>The code is universal and you will include it in the widget section select HTML/JAVASCRIPT and add the bellow code. Please don't add the jQuery part if you know that you have it in your template to avoid low page insights.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre><code>&lt;!---------  Blogger Slideshow seohuk.com ---------&gt;
&lt;!--  Camera_Slideshow Styles  --&gt;
&lt;link rel='stylesheet' id='camera-css' href='http://project.dimpost.com/camera-slideshow/css/camera.css' type='text/css' media='all'&gt;
&lt;!-- Camera Slideshow Scripts --&gt;
<span style="background-color: yellow"><a href="https://code.jquery.com/jquery-2.1.4.min.js">https://code.jquery.com/jquery-2.1.4.min.js</a></span>
<a href="http://project.dimpost.com/camera-slideshow/scripts/jquery.mobile.customized.min.js">http://project.dimpost.com/camera-slideshow/scripts/jquery.mobile.customized.min.js</a>
<a href="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js">http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js</a>
<a href="http://project.dimpost.com/camera-slideshow/scripts/camera.min.js">http://project.dimpost.com/camera-slideshow/scripts/camera.min.js</a>
&lt;script type='text/javascript'&gt;
jQuery(function() {
    jQuery('#camera_wrap_1').camera({
        time: 2500, // milliseconds between the end of the sliding effect and the start of the nex one
        transPeriod: 1200, // length of the sliding effect in milliseconds
        thumbnails: false, // thumnails &amp; tooltip is controlled by it
        pagination: true, // only when "pagination" is set to "false" thumbnails will be visible
        fx: 'curtainTopLeft, curtainTopRight, curtainBottomLeft, curtainBottomRight, curtainSliceLeft, curtainSliceRight, blindCurtainTopLeft, blindCurtainTopRight, blindCurtainBottomLeft, blindCurtainBottomRight, blindCurtainSliceBottom, blindCurtainSliceTop, stampede, mosaic, mosaicReverse, mosaicRandom, mosaicSpiral, mosaicSpiralReverse, topLeftBottomRight, bottomRightTopLeft, bottomLeftTopRight, bottomLeftTopRight, scrollLeft, scrollRight, scrollHorz, scrollBottom, scrollTop', // transition effects
        hover: false, // Pause on hover
        height: '50%' // slideshow height (50% is default)
    });
});
&lt;/script&gt;
&lt;style type="text/css"&gt;
.fluid_container {
    margin: 0 auto;
    /* aling centered */
    width: 100%;
    max-width: 900px;
    overflow: hidden;
}</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>The yellow line in the above code specifies the jquery part of the slider which you will ignore if your blogger template has it already. That's it for the above slider for bloggers. Let's go to another tutorial about Best Responsive Image Slider Widgets For Bloggers.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3>3.  Featured Post Image Slider Widget For Blogger</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>It's not only can we add an image slider widget for blogger blogs on the home screen. In big size but also we can add featured posts with image sliders to make your content look better. Seoblur has now added more. The featured post has some special features that will get hold of the user's special features. They great navigation of related stories from your blogger posts history of archives. That's what you need to increase your site SEO. Adding the featured post image slider is a one-way implementation. Since you will only need to implement the code once in your template. I like to see blogger templates look more beautiful so let's take this time to implement the ideas and see what they will look like.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:image {"linkDestination":"custom"} --></p>
<figure><a href="https://joecalih.files.wordpress.com/2024/06/040d5-featured_post_image_slider.png"><img title="featured post image slider" src="https://joecalih.files.wordpress.com/2024/06/040d5-featured_post_image_slider.png" alt="featured post image slider" /></a></figure>
<p><!-- /wp:image --></p>
<p><!-- wp:paragraph --></p>
<p>The above image shows the featured post example of how it looks like. It's a completely good responsible new look for your blogger blog.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":4} --></p>
<h4><b>How To Add Featured Post Image Slider Widget For Blogger.</b></h4>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Adding featured post image slider to your blogger template is easy and simple. You will add the BELOW code to your widget HTML/JAVASCRIPT option in the Layout option in the blogger</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre><code>&lt;style type="text/css"&gt;
ul.featured-widget-list,ul.featured-widget-list li{margin:0;padding:0;list-style:none;position:relative }ul.featured-widget-list li{display:none}ul.featured-widget-list li:nth-child(1){display:block;line-height:0}ul.featured-widget-list img{border:0;width:100%;height:auto}ul.featured-widget-list .featuredbg{width:100%;height:100%;position:absolute;z-index:2;left:0;top:0;opacity:.6;background-image:url(https://3.bp.blogspot.com/-1_Vnfz23h0E/V0m7kzHpgiI/AAAAAAAALlU/f763ScY-PBc2UnqNX3Tf20lyvHxtRo9qwCLcB/s400/overlay-bg.png);background-position:0% 100%;background-repeat:repeat-x}ul.featured-widget-list .featuredbg:hover{opacity:.1}ul.featured-widget-list h5{position:absolute;left:0;right:0;text-align:center;bottom:10px;z-index:2;color:#fff;margin:0;text-transform: capitalize;padding:10px 20px;line-height:1.9em;letter-spacing:0.3px;font: 600 16px 'Abel', sans-serif;overflow:hidden}ul.featured-widget-list li:hover h5{bottom:30px}ul.featured-widget-list .featured-meta{font: 11px 'Abel', sans-serif;letter-spacing:0.3px;position:absolute;bottom:0;left:0;right:0;text-align:center;z-index:2;color:#fff;opacity:0}ul.featured-widget-list h5, ul.featured-widget-list .featured-meta {-webkit-transition: all 0.3s;-moz-transition: all 0.3s;-o-transition: all 0.3s;transition: all 0.3s;}ul.featured-widget-list li:hover .featured-meta{bottom:20px;opacity:1}.feat-buttons{position:absolute;top:50%;left:0;z-index:5;width:100%}
.feat-buttons a{text-indent:-9999px;margin:0 7px;width:15px;height:15px;padding:5px;background:#000;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=60)";filter: alpha(opacity=60);-moz-opacity:0.6;-khtml-opacity:0.6;opacity:0.6;position:relative;-webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;}.feat-prev{float:left;}.feat-next{float:right;}.feat-buttons a.feat-prev::before, .feat-buttons a.feat-next::before{content:"";width:0;height:0;border-width:6px 7px;border-style:solid;border-color:transparent #fff transparent transparent;position:absolute;top:50%;margin-top:-6px;margin-left:-11px;left:50%}
.feat-buttons a.feat-next::before{border-color:transparent transparent transparent #fff;margin-left:-3px}
&lt;/style&gt;
&lt;div id="featuredbwidget"&gt;&lt;/div&gt;
&lt;link href='https://fonts.googleapis.com/css?family=Abel' rel='stylesheet' type='text/css'/&gt;
<a href="http://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js">http://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js</a>
&lt;script type='text/javascript'&gt;
//&lt;![CDATA[
featuredbwidget({
<span style="color: red">listURL</span>:"https://joecalih.co.ke",
<span style="color: red">featuredNum</span>:9,
<span style="color: red">listbyLabel</span>:false,
<span style="color: red">feathumbSize</span>:350,
<span style="color: red">interval</span>:3000,
<span style="color: red">autoplay</span>:true,
featuredID:"#featuredbwidget"
});
function featuredbwidget(a){(function(e){var h={listURL:"",featuredNum:3,featuredID:"",feathumbSize:300,interval:5000,autoplay:false,loadingFeatured:"nextfeatured",pBlank:"https://3.bp.blogspot.com/-EOu4Rrgcryo/V0m8dV7MU1I/AAAAAAAALlg/4h5vQaHpQiMdkvtUdDbu0LtjJRvgPERYwCLcB/s500/no-image.png",byMonth:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],listbyLabel:false};h=e.extend({},h,a);var g=e(h.featuredID);var d=h.featuredNum*200;g.html('&lt;div class="featslider"&gt;&lt;ul class="featured-widget-list"&gt;&lt;/ul&gt;&lt;div class="feat-buttons"&gt;&lt;a href="#" class="feat-prev"&gt;Prev&lt;/a&gt;&lt;a href="#" class="feat-next"&gt;Next&lt;/a&gt;&lt;/div&gt;&lt;/div&gt;');var f=function(w){var q,k,m,u,x,p,t,v,r,l="",s=w.feed.entry;for(var o=0;o&lt;s.length;o++){for(var n=0;n&lt;s[o].link.length;n++){if(s[o].link[n].rel=="alternate"){q=s[o].link[n].href;break}}if("media$thumbnail" in s[o]){u=s[o].media$thumbnail.url.replace(//s[0-9]+-c/g,"/s"+h.feathumbSize+"-c")}else{u=h.pBlank.replace(//s[0-9]+(-c|/)/,"/s"+h.feathumbSize+"$1")}k=s[o].title.$t;r=s[o].published.$t.substring(0,10);m=s[o].author[0].name.$t;x=r.substring(0,4);p=r.substring(5,7);t=r.substring(8,10);v=h.byMonth[parseInt(p,10)-1];l+='&lt;li&gt;&lt;a href="'+q+'"&gt;&lt;div class="featuredbg"&gt;&lt;/div&gt;&lt;img class="featuredthumb" src="'+u+'"/&gt;&lt;h5&gt;'+k+'&lt;/h5&gt;&lt;/a&gt;&lt;div class="featured-meta"&gt;&lt;span class="fdate"&gt;&lt;span class="fday"&gt;'+t+'&lt;/span&gt; &lt;span class="fmonth"&gt;'+v+'&lt;/span&gt; &lt;span class="fyear"&gt;'+x+'&lt;/span&gt;&lt;/span&gt; - &lt;span class="fauthor"&gt;'+m+"&lt;/span&gt;&lt;/div&gt;&lt;/li&gt;"}e("ul",g).append(l).addClass(h.loadingFeatured)};var c=function(){e(h.featuredID+" .feat-next").click()};var b=function(){e.get((h.listURL===""?window.location.protocol+"//"+window.location.host:h.listURL)+"/feeds/posts/summary"+(h.listbyLabel===false?"":"/-/"+h.listbyLabel)+"?max-results="+h.featuredNum+"&amp;orderby=published&amp;alt=json-in-script",f,"jsonp");setTimeout(function(){e(h.featuredID+" .feat-prev").click(function(){e(h.featuredID+" .featslider li:first").before(e(h.featuredID+" .featslider li:last"));return false});e(h.featuredID+" .feat-next").click(function(){e(h.featuredID+" .featslider li:last").after(e(h.featuredID+" .featslider li:first"));return false});if(h.autoplay){var i=h.interval;var j=setInterval(c,i);e(h.featuredID+" .featslider li:first").before(e(h.featuredID+" .featslider li:last"));e(h.featuredID+" .featslider").hover(function(){clearInterval(j)},function(){j=setInterval(c,i)})}e("ul",g).removeClass(h.loadingFeatured)},d)};e(document).ready(b)})(jQuery)};
//]]&gt;
&lt;/script&gt;</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>In the above red spaces of code, fill in the best options that you would prefer for your featured post. It includes the time needed time and the number of posts. The digit number specifies the number you are going to change while finishing.<br />
That is all for the day folks for now am sure your blogger blogs are looking so nice after adding the Best Responsive Image Slider Widgets. Thanks for your precious time and make sure you grab the below tutorials to also add to your blogger blogs.<br />
<b><span style="color: orange">Read More :</span></b></p>
<p><!-- /wp:paragraph --></p>