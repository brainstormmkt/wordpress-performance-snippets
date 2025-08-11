WordPress Performance Snippets
This repository contains a collection of custom code I have developed to solve specific, high-impact WordPress performance bottlenecks that standard plugins often cannot fix.
1. On-Demand Google reCAPTCHA Loading
The Problem: The default Google reCAPTCHA script is a major render-blocking resource, significantly hurting PageSpeed scores and Core Web Vitals, especially on mobile.
The Solution: This solution uses two parts. A PHP snippet (disable-recaptcha-default.php) prevents WordPress from loading the script on every page. Then, a JavaScript snippet (recaptcha-on-demand.js) loads the script only when a user starts interacting with a form.
The Impact: This fix alone can improve the LCP (Largest Contentful Paint) and boost PageSpeed scores by 10-15 points, turning a failing score into a passing one.
2. Prioritize LCP Image Loading (High Fetch Priority)
The Problem: Many WordPress themes incorrectly lazy-load critical "above-the-fold" images like the site logo or the main hero image, delaying the LCP.
The Solution: This JavaScript snippet (prioritize-logo-load.js) identifies the most important image on the page and assigns it a fetchpriority="high" attribute.
The Impact: This tells the browser to download this critical image before other resources, directly improving the LCP metric and the user's perceived load time.
