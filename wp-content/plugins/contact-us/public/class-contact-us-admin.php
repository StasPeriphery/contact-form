<?php


class AdminPanel
{

    public function __construct()
    {

        add_action('admin_menu', function () {
            add_menu_page('Набрать братюню', 'Contacts', 'manage_options', 'site-options', [$this, 'addPage'], '', 4);
        });
        $this->load_dependencies();


    }

    function load_dependencies()
    {
        require_once CONTACT_US_PATH . 'core/class-contact-us-model-bd.php';
    }

    function addPage()
    {
        $model = new ModelDb();
        $data = $model->getAllContacts();

        ?>
        <h2><?php echo get_admin_page_title() ?></h2>

        <table>
            <tbody>
            <tr>
                <td>Count</td>
                <td>Name</td>
                <td>Phone</td>
                <td>Email</td>
                <td>Date</td>
            </tr>
            <?php
            $i =1;
            foreach ($data as $contact) {
                echo '<tr>';
                echo '<td>';
                echo $i++;
                echo '</td>';
                echo '<td>';
                echo $contact->name;
                echo '</td>';
                echo '<td>';
                echo $contact->phone;
                echo '</td>';
                echo '<td>';
                echo $contact->email;
                echo '</td>';
                echo '<td>';
                echo $contact->date;
                echo '</td>';
                echo '</tr>';

            }
            ?>
            </tbody>
        </table>

        <?php

    }


}