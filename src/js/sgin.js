/* 
* @Author: Marte
* @Date:   2017-10-07 22:35:46
* @Last Modified by:   Marte
* @Last Modified time: 2017-10-08 09:51:13
*/

require(['config'],function(){
    require(['jquery'],function($){
        var $btn = $('#nav .her #btn1');
        $btn.on('click',function(){
            var use = document.querySelector('#nav .her #email').value;
            var psw = document.querySelector('#nav .her #psw').value;
            var $use = $('#nav .her #email');
            var $psw = $('#nav .her #psw');
            $.ajax({
                url: '../api/reg.php',
                data: {"username": use,"password": psw},
                success:function(res){
                    if(res=='ok'){
                        window.location.href="../html/login.html";
                    }else{
                        alert('用户名重复！请重新输出！');
                        $use.val('');
                        $psw.val('');
                    }
                }
            })
        })
    })
})
