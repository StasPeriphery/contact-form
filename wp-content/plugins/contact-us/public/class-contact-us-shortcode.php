<?php

class ShortCodeManager
{

    const PLUGIN_NAME = 'contactus';
    const PLUGIN_VERSION = '1.0';

    public function __construct()
    {
        add_action('wp_enqueue_scripts', [$this, 'contactStyle']);
        add_action('wp_footer', [$this, 'contactScripts'], 1);
        add_action('wp_footer', [$this, 'localScript'], 1);
        $this->registerShortcode();
        $this->namespace = self::PLUGIN_NAME . '/' . self::PLUGIN_VERSION . '/';

    }


    public function registerShortcode()
    {
        add_shortcode('form-contact', [$this, 'callbackContact']);
    }

    function contactScripts()
    {
        wp_enqueue_script('validate_js', plugin_dir_url(__FILE__) . 'js/validation.js', '', '', true);
        wp_enqueue_script('contact_js', plugin_dir_url(__FILE__) . 'js/contactForm.js', '', '', true);
    }

    function localScript()
    {
        wp_localize_script('contact_js', 'myajax',
            [
                'url' => home_url() . '/wp-json/' . $this->namespace . 'send',
            ]
        );
    }

    function contactStyle()
    {
        wp_enqueue_style('contact', plugin_dir_url(__FILE__) . 'css/contact.css', [], '');
        wp_enqueue_style('bootstrap', 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css', [], '');
    }


    function callbackContact($atts)
    {
        $atts = shortcode_atts(array(
            'foo' => 'no foo',
            'baz' => 'default baz'
        ), $atts);

        return '
<div class="contact-clean">
    <form class="_valid-form">
        <h2 class="text-center">Contact us</h2>
        <div class="form-group">
            <input class="form-control _valid-input" type="text" name="name" placeholder="Name">
        </div>
        <div class="form-group">
            <input class="form-control _valid-input" type="email" name="email" placeholder="Email">
        </div>
        <div class="form-group">
            <input class="form-control _valid-input" type="text" name="phone" placeholder="Phone">
        </div>
        <div class="form-group">
            <button class="btn btn-primary" type="submit">send </button>
        </div>
    </form>
</div>';
    }

}