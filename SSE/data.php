<?php
    header('Content-Type:text/event-stream;charset=utf-8');
    header('Access-Control-Origin: http://192.168.6.169/');
    echo "data:现在时间为".date("H:i:s")."\r\n\r\n";
?>