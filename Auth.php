<?php

/**
 * A utility class for handling common authorization tasks
 */
class Auth
{
    /** @var string a hash of the string 'password' */
    public static $password = '$2y$10$SLjwBwdOVvnMgWxvTI4Gb.YVcmDlPTpQystHMO2Kfyi/DS8rgA0Fm';
    public static $username = 'guest';

    /**
     * Attempt to log in
     *
     * A login attempt is successful if the passed username matches the static
     * username property and the passed password is verified against the hash in
     * the static password property
     *
     * On a successful attempt, will set the 'LOGGED_IN_USER' key in the session
     *
     * Will log all attempts using an instance of the Log class
     *
     * @param string $username the username to check
     * @param string $password the password to check
     */
    
    public static function attempt($username, $password)
    {
        $success = false;
        // TODO: check if the passed username matches the static username
        //       property
        if ($username == self::$username && password_verify($password, static::$password)){
            $success = true;
            $_SESSION['user'] = $_REQUEST['user'];
            echo "Passed!";
            var_dump($_SESSION);
        }
        // TODO: create an instance of the Log class to log a message of whether
        //       or not the login attempt was successful or not
        $log = new Log();

        if ($success){
            $log->info("User ${$_SESSION['user']} logged in!");
        } else {
            $log->error("Failed attempt to login $username");
        }


        // TODO: if the username and password match, set the 'LOGGED_IN_USER'
        //       key in the session to the passed username
    }

    /**
     * Check whether the user is logged in or not
     *
     * @return bool whether or not the user is logged in
     */
    public static function check()
    {
        // TODO: return a boolean value based on whether or not the
        //       'LOGGED_IN_USER' key is present in the session
    }

    /**
     * Get the currently logged in user
     *
     * @return string|null
     */
    public static function user()
    {
        // TODO: return the value associated with the 'LOGGED_IN_USER' key in
        //       the session, or null if it is not set
    }

    /**
     * Log the user out of the applicaiton by recreating the session
     */
    public static function logout()
    {
        // TODO: destroy and re-create the session
    }
}
