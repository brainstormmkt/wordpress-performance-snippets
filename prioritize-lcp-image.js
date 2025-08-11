/**
 * Snippet to assign fetchpriority="high" to the main LCP (Largest Contentful Paint) image.
 * Many WordPress themes incorrectly lazy-load critical "above the fold" images. This script identifies a key image 
 * (e.g., the site logo via '.custom-logo') and instructs the browser to prioritize its download.
 * This is a simple but powerful fix for improving the LCP metric.
 * Author: Luís Cláudio O.
 */
document.addEventListener('DOMContentLoaded', function() {
    // Finds the logo image by its specific CSS class
    const logo = document.querySelector('img.custom-logo');

    // If the logo image is found, add the attribute
    if (logo) {
        logo.setAttribute('fetchpriority', 'high');
    }
});
