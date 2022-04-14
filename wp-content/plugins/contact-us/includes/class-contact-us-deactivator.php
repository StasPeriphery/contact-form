<?php

class ContactUs_Deactivator
{


    public static function deactivate()
    {
        require_once CONTACT_US_PATH . 'core/class-contact-us-model-bd.php';

        $model = new ModelDb();
        $model->deleteTable();
    }
}