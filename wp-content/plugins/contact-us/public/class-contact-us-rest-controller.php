<?php

class ContactUsRestController
{

    const PLUGIN_NAME = 'contactus';
    const PLUGIN_VERSION = '1.0';
    private $model;

    public function __construct()
    {
        $this->namespace = self::PLUGIN_NAME . '/' . self::PLUGIN_VERSION;
        $this->load_dependencies();
        $this->register_routes();
        $this->model = new ModelDb();

    }

    function load_dependencies()
    {
        require_once CONTACT_US_PATH . 'core/class-contact-us-model-bd.php';
    }

    function register_routes()
    {
        register_rest_route($this->namespace, "/send", [
            [
                'methods' => 'POST',
                'callback' => [$this, 'registration'],
                'permission_callback' => '__return_true',
            ]
        ]);
    }

    function registration(WP_REST_Request $request)
    {
        try {
            $reqData = $request->get_params();
            $this->model->saveContacts($reqData['name'], $reqData['email'], $reqData['phone']);
        } catch (Exception $e) {
            return new WP_REST_Response([], 500);
        }

        return new WP_REST_Response(['ok' => true], 200);

    }

}