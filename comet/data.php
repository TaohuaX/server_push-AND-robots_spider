<?php 
    header('Content-Type:application/json;charset=utf-8');
// 方式一
// sleep(1);
// header('Cache-Control:max-age=0');
// while(true){
//     $arr = array('success' => 'ok', "text"=> '我是测试文件');
//     echo json_encode($arr);
//     exit();
// }
// 方式二
// echo json_encode($arr);
    $i = 0;
    while($i < 9){
        echo $i.'/';
        $i++;
        sleep(1);
        // print_r($i .'/'); //输出新数组
        ob_flush();
        flush();
    }
// ?>