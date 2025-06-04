---
title: "Best Recent Comments Widget For Blogger"
excerpt: "Get recent comments blogger widget for your website sidebar and showcase the recently posted comments on your blogger post with this widget."
date: "2023-05-15"
author:
  name: "Joe Calih"
  avatar: "/authors/08.jpg"
  description: "Joecalih is a 10+ years Pro web developer with of experience in React and Next.js."
category: "Blogger"
image: "/Recent-comments.webp"
views: 5432
---

Comments are essential in our blogging career. Being so, Blogger's recent comments widget helps people get to know what others are commenting about. This can assist users to get the chance to interact and also get feedback. Blogger's recent comments widgets come to the aid of improving your traffic through enhancing commenting. Today I have gathered the best clean, responsive, premium, and most stylish recent comments widgets you can ever find anywhere to allow you to add them to your blogger blogs. I hope you find the widgets helpful and easy to integrate into your Blogger Blogspot blog.

The features of the amazing recent comments widgets that I have prepared for you include clean looks and are highly customizable. Use them by altering some changes here and there to make them stand out. Makes the website premium, and stylish to correspond with your blogger blog colors. They are made up of both java-script, HTML, and CSS. You will find one with Bootstrap. Without wasting time let me take you to some of the examples of the recent comments widgets that you can use in your blogger blog.

Simple Recent Comments Widget For Blogger

This special-looking widget has a premium look that will leave your blogger blog looking outstanding. With fa-icons implementation and good color and font on it, I can guarantee you that the widget will look super amazing with well-placed recent posts. Just copy the code below and I will direct you on how to add the widget to your blogger website.
CODE.

<style type="text/css">
/*comment widget joecalih.co.ke */
a.sneeit-srcbw {
    color: #000000;
    border-top: 1px solid #dddddd;
    display: block;
    padding: 1em 1.5em;
    position: relative;
}
.sneeit-srcbw-icon-comment {
    position: absolute;
    left: 0;
    top: 1.1em;
}
.sneeit-srcbw-icon-arrow {
    color: #ff4400;
    position: absolute;
    right: 0;
    font-size: 200%;
    top: 50%;
    margin-top: -0.55em;
}
.sneeit-srcbw-credit {
        visibility: hidden;
    font-size: 90%;
    text-align: right;
    padding: 1em 0;
    display: block;
    border-top: 1px solid #dddddd;
}
#sneeit-srcbw-exclude {
    display: none!important;
}
html[dir="rtl"] .sneeit-srcbw-icon-comment {
    right:0;
    left: auto;
}
html[dir="rtl"] .sneeit-srcbw-icon-arrow{
    left:0;
    right: auto;
}
html[dir="rtl"] .sneeit-srcbw-credit {
    text-align: left;
        text-color: #fff;
}
</style>
<noscript id="sneeit-srcbw-exclude"></noscript>
<script type="text/javascript">
// settings
var sneeit_srcbw_count = 3; // change the number of comments
var sneeit_srcbw_summary_length = 50; // summary length
var sneeit_srcbw_icon_comment = 'fa-comment-o'; // comment icon
var sneeit_srcbw_icon_arrow = 'fa-angle-right'; // arrow icon
_s7GpE = ['link','href','font-awesome','link','text/css','stylesheet','https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css','sneeit-srcbw-exclude','n','string','undefined','feed','entry','Not found any comment',' ...','','','alternate','self','#','/','#c','<a class="sneeit-srcbw" href="','"><i class="sneeit-srcbw-icon-comment fa ','"></i><span><strong>',':</strong> ','</span><i class="sneeit-srcbw-icon-arrow fa ','"></i></a>','<span class="sneeit-srcbw-credit">Powered by <a href="http://www.joecalih.co.ke" target="_blank">Semdeals</a></span>','<script type="text/javascript" src="/feeds/comments/summary?alt=json-in-script&max-results=','&callback=_fCiE"></script>'];var _vHpF=document.getElementsByTagName(_s7GpE[0]);for(var _vLbB=0;_vLbB<_vHpF.length;_vLbB++){if(_s7GpE[1] in _vHpF[_vLbB]&&_vHpF[_vLbB].href.indexOf(_s7GpE[2])!=-1){break;}}if(_vLbB>=_vHpF.length){var _vLbJ=document.createElement(_s7GpE[3]);_vLbJ.type=_s7GpE[4];_vLbJ.rel=_s7GpE[5];_vLbJ.href=_s7GpE[6];document.head.appendChild(_vLbJ);}var _vRqN=document.getElementById(_s7GpE[7]).innerHTML;var _vSbX=sneeit_srcbw_count;_vRqN=_vRqN.trim();if(_vRqN){_vRqN=_vRqN.split(_s7GpE[8]);_vSbX=_vSbX*(_vRqN.length+2);}function _fCiE(json){if(typeof(json)==_s7GpE[9]||typeof(json)==_s7GpE[10]||!(_s7GpE[11] in json)||!(_s7GpE[12] in json.feed)||!json.feed.entry.length){document.write(_s7GpE[13]);return;}var _vQbX=0;for(var _vLbB=0;_vLbB<json.feed.entry.length&&_vQbX<sneeit_srcbw_count;_vLbB++){var _vOlU=json.feed.entry[_vLbB];var _vQjW=_vOlU.author[0].name.$t;var _vRcD=_vOlU.summary.$t;if(_vRqN.indexOf(_vQjW)!=-1){continue;}_vQbX++;if(_vRcD.length>sneeit_srcbw_summary_length){_vRcD=_vRcD.substring(0,sneeit_srcbw_summary_length)+_s7GpE[14];}var _vVgK=_s7GpE[15];var _vVeS=_s7GpE[16];for(var _vIlN=0;_vIlN<_vOlU.link.length;_vIlN++){var _vLbJ=_vOlU.link[_vIlN];if(_s7GpE[17]==_vLbJ.rel){_vVgK=_vLbJ.href;}else if(_s7GpE[18]==_vLbJ.rel){_vVeS=_vLbJ.href;}}if(!_vVgK){continue;}if(_vVgK.indexOf(_s7GpE[19])==-1){_vVeS=_vVeS.split(_s7GpE[20]);_vVeS=_vVeS[_vVeS.length-1];_vVgK+=(_s7GpE[21]+_vVeS);}document.write(_s7GpE[22]+_vVgK+_s7GpE[23]+sneeit_srcbw_icon_comment+_s7GpE[24]+_vQjW+_s7GpE[25]+_vRcD+_s7GpE[26]+sneeit_srcbw_icon_arrow+_s7GpE[27]);}document.write(_s7GpE[28]);}document.write(_s7GpE[29]+_vSbX+_s7GpE[30]);
</script>

The comments widget enhances engagement for visitors and Blogger posts. With a click-through rate, the widget is a link to convert more visits to Bogger posts receiving more engagement. That's all with the simple good-looking recent comments premium widget. Let's take a look at other different examples to add to Blogger widgets.