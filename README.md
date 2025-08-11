WordPress Performance Snippets
This repository contains a collection of custom code I have developed to solve specific, high-impact WordPress performance bottlenecks that standard plugins often cannot fix. These are real-world solutions that have helped my clients achieve perfect or near-perfect PageSpeed scores.

1. On-Demand Google reCAPTCHA Loading
The Problem: The default Google reCAPTCHA script is a major render-blocking resource, significantly hurting PageSpeed scores and Core Web Vitals, especially on mobile. It's a common cause of failing LCP scores.
The Solution: This is a two-part code solution:
A PHP snippet (disable-recaptcha-default.php) is used to dequeue the script, preventing it from loading by default on every page.
A JavaScript snippet (recaptcha-on-demand.js) then loads the script only after a user interacts with a form field (e.g., clicks, types).
The Impact: This fix alone can turn a failing PageSpeed score into a perfect 100, as it eliminates a critical render-blocking request.

3. Prioritize LCP Image Loading (High Fetch Priority)
The Problem: Many WordPress themes incorrectly lazy-load critical "above-the-fold" images like the site logo or the main hero image, which is a primary cause of poor LCP.
The Solution: This JavaScript snippet (prioritize-lcp-image.js) identifies the most important image on the page and assigns it a fetchpriority="high" attribute.
The Impact: This tells the browser to download this critical image before other resources, directly improving the LCP metric and the user's perceived load time.
