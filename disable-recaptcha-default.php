<?php
/**
 * Snippet to dequeue and deregister the default Google reCAPTCHA script in WordPress.
 * This prevents the script from loading automatically on every page, which is a common cause of performance issues.
 * This PHP function is the first part of a two-part solution (see recaptcha-on-demand.js).
 * Author: Luís Cláudio O.
 */

add_action('wp_enqueue_scripts', 'dequeue_recaptcha_scripts_final', 999);

function dequeue_recaptcha_scripts_final() {
    // The handle 'recaptcha' might vary depending on the plugin. This one was found using Asset CleanUp.
    wp_dequeue_script('recaptcha');
    wp_deregister_script('recaptcha');
}
