/**
 * Snippet to load the Google reCAPTCHA API script on-demand after the first user interaction.
 * This technique is highly effective for improving initial load times and passing Core Web Vitals, 
 * as it avoids having a render-blocking third-party script.
 * Author: Luís Cláudio O.
 */
(function() {
    let recaptchaLoaded = false;
    const events = ['mousemove', 'scroll', 'touchstart', 'click'];

    function loadRecaptcha() {
        if (recaptchaLoaded) return;
        recaptchaLoaded = true;

        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        // Remove listeners after the first execution to avoid redundancy
        events.forEach(event => window.removeEventListener(event, loadRecaptcha, { passive: true }));
    }

    events.forEach(event => window.addEventListener(event, loadRecaptcha, { passive: true }));
})();
