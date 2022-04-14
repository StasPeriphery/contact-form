<?php


class ModelDb
{
    private $_wpdb;
    private $_time_now;
    private $tableContacts;


    public function __construct()
    {

        global $wpdb;
        $this->_wpdb = $wpdb;
        $this->_time_now = date("Y-m-d H:i:s");
        $this->tableContacts = "{$this->_wpdb->prefix}contacts";
        $this->createDB();

    }


    public function getAllContacts()
    {
        $queryRes = $this->_wpdb->get_results("SELECT * FROM {$this->tableContacts}; ");
        return $queryRes;
    }


    function saveContacts($name, $email, $phone )
    {
        $this->_wpdb->query("INSERT INTO {$this->tableContacts} ( name, email, phone, date) VALUE ('$name','$phone', '$email' ,'$this->_time_now')");
        return true;
    }
    public function deleteTable()
    {
        $sql = "DROP TABLE IF EXISTS $this->tableContacts";
        $this->_wpdb->query($sql);
    }


    private function createDB()
    {
        $isExist = $this->_wpdb->query("SHOW TABLES LIKE '" . $this->tableContacts . "'");

        if (!$isExist) {
            $table_name = $this->tableContacts;
            $charset_collate = "+DEFAULT CHARACTER SET {$this->_wpdb->charset} COLLATE {$this->_wpdb->collate}";
            require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
            $sql = "CREATE TABLE {$table_name} (
    id int(11) unsigned NOT NULL auto_increment,
    name varchar(255) NOT NULL default '',
    phone varchar(255) NOT NULL default '',
    email varchar(255) NOT NULL default '',
    date  DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY  (id)
) {$charset_collate};";
            dbDelta($sql);

        }
    }
}