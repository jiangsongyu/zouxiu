<?php
    include 'connect.php';
    $pageNo = isset($_GET['pageNo']) ? $_GET['pageNo'] : 1;
    $qty = isset($_GET['qty']) ? $_GET['qty'] : 32; 

    $paixu = isset($_GET['paixu']) ? $_GET['paixu'] : 1;

    if($paixu==1){
        $sql = 'select * from goods order by cast(id as decimal)';
    }else if($paixu==2){
        $sql = 'select * from goods order by cast(new_price as decimal)';
    }else if($paixu==3){
        $sql = 'select * from goods order by cast(new_price as decimal) desc';
    }
    
// SELECT * FROM goods ORDER BY CAST(id AS DECIMAL) 
    // 利用sql语句查询数据库
    // 查询结果集
    $result = $conn->query($sql);


    // 使用查询结果集
    $row = $result->fetch_all(MYSQLI_ASSOC);

    // var_dump($row);
    $res = array(
        'data' => array_slice($row, ($pageNo-1)*$qty,$qty), 
        'total' => count($row),
        'pageNo' => $pageNo,
        'qty' => $qty
    );
    // var_dump($res);
    echo json_encode($res,JSON_UNESCAPED_UNICODE);
    
?>