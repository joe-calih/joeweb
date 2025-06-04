---
title: "Responsive Digital Clock Widget for Blogger"
excerpt: "Responsive digital clock blogger widget for your website with step-by-step implementation. Add the blogger widget to increase web conversion."
date: "2024-08-12"
author:
  name: "Joe Calih"
  avatar: "/authors/08.jpg"
  description: "Nairobi photographer and developer who captures portraiture, landscapes, weddings, and photo studios."
category: "Blogger"
image: "/digital-clock.webp"
views: 5432
---


It's cool to engage your website visitors with things that are going to keep them on your website, this includes the Responsive Digital Clock Widget For Blogger Website. The widget has a responsive look that will leave your website simple and minimalist. The [blogger widget](/category/blogger-widgets) uses the user's GPS and can be assured that the time will always show according to their location area. The widget includes a location cache to ensure accurate results of the user's geolocation. Improve the looks of your blogger website using this gorgeous website widget with the implementation steps highlighted below.

### How To Add Digital Clock Widget

1. Go to [blogger.com](http://blogger.com/)  
2. Select Your blogger website  
3. Click on Layout on the far left option.  
4. In the sidebar section, click on Add gadget  
5. In the dialogue box option, click on HTML/Javascript  
6. Add the below Code in the code box

```
<style>
#realtime {
    font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
    font-weight: 700;
    display: block;
    text-align: center;
    font-size: 30px;
    padding: 4rem 0;
}

#realtime span {
    display: inline-block;
    font-family: Avenir Next, Nunito, sans-serif;
    font-weight: 100;
    font-size: 8vw;
    position: relative;
    top: -2vw;
}

@media all and (max-width: 600px) {
    #realtime {
        font-size: 4rem;
        padding: 2rem 0;
    };
}

@media all and (max-width: 350px) {

    #realtime {
        font-size: 3rem;
        padding: 2rem 0;
</style>
<time id="realtime"></time>
<script type='text/javascript'>
var currentTime = document.getElementById("realtime");
function zeropadder(n) {
  return (parseInt(n,10) < 10 ? '0' : '')+n;
}
function updateTime(){
  var timeNow= new Date(),
  hh = timeNow.getHours(),
  mm = timeNow.getMinutes(),
  ss = timeNow.getSeconds(),
  formatAMPM = (hh >= 12?'PM':'AM');
  hh = hh % 12 || 12;
  currentTime.innerHTML = hh + ":" + zeropadder(mm) + ":" + zeropadder(ss) + " " + formatAMPM;
  setTimeout(updateTime,1000);
}
updateTime();
</script>
```

7. Save your layout and Refresh your website.

You can change the layout and style of the widget through code manual transformations and changing the layout HTML widget area in your blogger layout. Feel free to comment or reach us on your observations and experience. If you encounter any challenges or difficulty in customization contact us for more [support](/support) and help on the topic.