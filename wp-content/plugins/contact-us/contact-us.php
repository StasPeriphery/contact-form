<?php
/*
 * Plugin Name: Contact us
 */

if ( ! defined( 'WPINC' ) ) {
    die;
}


define( 'CONTACT_US_VERSION', '0.0.0' );
define( 'CONTACT_US_NAME', 'contact-us' );
define( 'CONTACT_US_PATH', plugin_dir_path( __FILE__ ) );
define( 'CONTACT_US_URI', plugin_dir_url( __FILE__ ) );


function activate_contactus() {
    require_once CONTACT_US_PATH . 'includes/class-contact-us-activator.php';
    ContactUs_Activator::activate();
}


function deactivate_contactus() {
    require_once CONTACT_US_PATH . 'includes/class-contact-us-deactivator.php';
    ContactUs_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_contactus' );
register_deactivation_hook( __FILE__, 'deactivate_contactus' );


require CONTACT_US_PATH . 'includes/class-contact-us.php';


function run_ContactUs() {
    $plugin = new ContactUs();
    $plugin->run();

}
run_ContactUs();
