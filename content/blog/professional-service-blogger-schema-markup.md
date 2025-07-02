---
title: "Professional Service Blogger Schema Markup"
excerpt: " Learn to add professional service blogger schema markup and increase conversions. Give your customers professional customer-rich spinets."
date: "2023-05-15"
author:
  name: "Joe Calih"
  avatar: "/authors/08.jpg"
  description: "Joecalih is a 10+ years Pro web developer with of experience in React and Next.js."
category: "Blogger"
image: "/blogger-schema.webp"
views: 5432
---


Many businesses have various products that they sell online through eCommerce websites that they would like to include prices and other details concerning the product. The need to have visitors feel your products and consider them legitimate before a purchase is brought about by their user interface. Professional Service is markup data that presents products with prices and reviews in search results before the visitors click the links. Blogger supports this and you can now specify the price range, and this will bring potential buyers of the product to your blogger website. For the above reasons, let's integrate the professional service schema markup data into the blogger.

In case you want to look at the search results after applying the professional schema markup to your blogger blog template code, then the below image shows shoe results with prices after the professional service blogger [schema markup](/search/label/Schema%20Markup) data implementation.

[![Professional Service](https://joecalih.files.wordpress.com/2024/06/78595-contact-sky-featured-snippet.jpg?w=300 "Professional Service")](https://joecalih.files.wordpress.com/2024/06/78595-contact-sky-featured-snippet.jpg)

To add the professional service schema markup is done through code integration in the blogger source code below the dynamic meta tags for the template CSS codes. Let's add them by following the steps that proceed below.

### How To Add Professional Service Blogger Schema Markup

Just from the word schema, we know they involve scripts of Java code lines and hence they should be added before the beginning of the blogger template code. Follow the steps.  
1. Open up, blogger. Click Here.  
2. Choose the website you want to add the schema code to in the upper left section.  
3. Navigate to The Section and click on it.  
4. Next to customize click on Edit HTML.  
5. Press Ctrl + F and search for the code <b:skin>  
6. Just Before the Code Above. Paste the below professional service code.

\`\`\`
<script type='application/ld+json'>
{
  &quot;@context&quot;: &quot;http://www.schema.org&quot;,
  &quot;@type&quot;: &quot;ProfessionalService&quot;,
  &quot;name&quot;: &quot;Seoblur&quot;,
  &quot;url&quot;: &quot;https://joecalih.co.ke&quot;,
  &quot;logo&quot;:  &quot;https://4.bp.blogspot.com/-PmrK6m3H4us/Wr9-J4caw5I/AAAAAAAAApA/LS7wYy8i-h45ka4Kf02w-LVUReX0bJwQgCLcBGAs/s200/SeoClive-logo.png&quot;,
  &quot;image&quot;:  &quot;https://1.bp.blogspot.com/-F1opOp6RFNg/WpFM8tdDq9I/AAAAAAAAAhg/9HPTjreO92QcQYE2pCP9knSIfXe3UzJ2gCLcBGAs/s1600/map.png&quot;,
  &quot;description&quot;: &quot;Semdeals Is a Website SEO  services provider to business websites. We offer content marketing and  Online Marketing services to businesses At considerate  pricing.&quot;,
  &quot;pricerange&quot;: &quot;$100-$1000&quot;,
  &quot;address&quot;: {
    &quot;@type&quot;: &quot;PostalAddress&quot;,
    &quot;streetAddress&quot;: &quot;85 Thika&quot;,
    &quot;addressLocality&quot;: &quot;Thika&quot;,
    &quot;addressRegion&quot;: &quot;Kenya&quot;,
    &quot;postalCode&quot;: &quot;01000&quot;,
    &quot;addressCountry&quot;: &quot;Kenya&quot;
  },
  &quot;geo&quot;: {
    &quot;@type&quot;: &quot;GeoCoordinates&quot;,
    &quot;latitude&quot;: &quot;-1.0333&quot;,
    &quot;longitude&quot;: &quot;37.0693&quot;
  },
  &quot;hasMap&quot;: &quot;https://goo.gl/maps/rFNdYwsJESr&quot;,
  &quot;openingHours&quot;: &quot;Mo, Tu, We, Th, Fr, Sa 09:00-20:00&quot;,
  &quot;contactPoint&quot;: {
    &quot;@type&quot;: &quot;ContactPoint&quot;,
    &quot;contactType&quot;: &quot;customer service&quot;,
    &quot;telephone&quot;: &quot;+254717771900&quot;
  },
  &quot;aggregateRating&quot;: {
    &quot;ratingValue&quot;: &quot;4.9&quot;,
    &quot;reviewCount&quot;: &quot;5&quot;
 },
 &quot;founders&quot;: {
        &quot;@type&quot;: &quot;Person&quot;,
        &quot;additionalName&quot;: &quot;Semdeals&quot;,
        &quot;award&quot;: &quot;CEO&quot;,
        &quot;email&quot;: &quot;seorunk@gmail.com&quot;
   },
    &quot;telephone&quot;: &quot;+254717771900&quot;
   },
    &quot;priceSpecification&quot;: {
        &quot;@type&quot;: &quot;PriceSpecification&quot;,
        &quot;price&quot;: &quot;4.99&quot;,
        &quot;minPrice&quot;: &quot;2.99&quot;,
        &quot;maxPrice&quot;: &quot;7.99&quot;,
        &quot;priceCurrency&quot;: &quot;GBP&quot;
    }
 }
}
 </script>
\`\`\`

After adding the above code Save your theme. You will have to tweak the links and names that are indicated below with what your website is all about.  
1. Contact Name  
2. Price range.  
3. Longitude and Latitude coordinates.  
4. Telephone number.  
5. Rating Number.  
6. Email Address.  
7. Location Address.  
8. Website Name.  
9. Website Link.  
10. Website Meta description.  
11. Postal Code/ Country.
