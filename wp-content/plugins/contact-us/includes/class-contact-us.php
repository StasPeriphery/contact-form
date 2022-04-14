<?php

class ContactUs
{
    private $shortCode;
    private $admin;
    private $route;

    public function __construct()
    {

    }

    public function run()
    {
        add_action('init', [$this, 'define_admin_hooks']);
        add_action('rest_api_init', [$this, 'register_rest_routes']);

        $this->load_dependencies();

        $this->shortCode = new ShortCodeManager();

    }

    private function load_dependencies()
    {
        require_once CONTACT_US_PATH . 'public/class-contact-us-rest-controller.php';
        require_once CONTACT_US_PATH . 'public/class-contact-us-shortcode.php';
        require_once CONTACT_US_PATH . 'public/class-contact-us-admin.php';

    }

    public function define_admin_hooks()
    {
        $this->admin = new AdminPanel();
    }

    public function register_rest_routes()
    {
        $this->route = new ContactUsRestController();
    }




}