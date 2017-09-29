/* 
* @Author: Marte
* @Date:   2017-09-15 11:25:44
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-27 09:43:45
*/
// jQuery(function($){

  function JA(options){
        var {
            // 图片列表
            imgs,

            // 容器
            container='',

            width,
            height,

            // 索引值
            index=0,
            
           

            // 页码
            page=true,

            // 图片切换时间间隔
            duration=2500,

           // 前后页
           dianj=true
        } = options;
       
        // 属性无缝
        this.container = container;
        this.width = width;
        this.height = height;
        this.imgs = imgs;
        
        
        this.page = page;
        this.duration = duration;
        
        this.dianj = dianj;
        this.len = this.imgs.length;

        // 默认显示索引值
        this.index = index;
        this.init(options);
    }

    /*
        初始化
        * 生成html节点
        * 绑定事件
     */
    JA.prototype.init = function(){
        
        this.container = document.querySelector(this.container);
        $(this.container).css('width',this.width).css('height',this.height);
        // @生成html结构
        var ul = document.createElement('ul');
       
        ul.innerHTML = this.imgs.map(item=>{
            
            return `
                <img src="${item}" height="${this.height}" width="${this.width}">
            `;
        }).join('');

        // 写入页面
        this.container.appendChild(ul);

        if(this.dianj){
            var dian =document.createElement('div');
            var qian = document.createElement('div');
            var hou = document.createElement('div');
            qian.innerHTML='<';
            hou.innerHTML ='>';
            qian.className = 'qian';
            hou.className = 'hou';
            dian.className = 'dian';
            dian.appendChild(qian);
            dian.appendChild(hou);
            this.container.appendChild(dian);
        }



        // 生成页码
        if(this.page){
            var page = document.createElement('div');
            page.className = 'page';

            for(var i=0;i<this.len;i++){
                var span = document.createElement('span');

                span.className = i+1;

                // 高亮
                if(i===this.index){
                    span.className = '1 active';
                }

                page.appendChild(span);
            }

            this.container.appendChild(page);
        }
        $img = $(this.container).find('img');
        $img.first().show().siblings('img').hide();
        this.aup();

       // console.log($(this.ul).children().first()[0].naturalWidth);

        // @绑定事件
       
        $(dian).children().hover(function() {
            $(dian).children().css('background-color','rgba(255,255,255,0.8)').css('color','black');
        }, function() {
            $(dian).children().css('background-color','rgba(255,255,255,0.3)').css('color','#ddd');
        });



        // this.container.onclick = (e)=>{
        //     if(e.target.parentNode.className === 'page'){
        //         this.index = e.target.className-1;
        //         this.show();
        //     }
        // }
        
       $(page).find('span').mouseenter((e)=>{
           this.index=(e.target.className.slice(0, 2))*1-1;
           this.show();
       })

        $(dian).children().on("click",(e)=>{
            clearInterval(this.timer);
            
            // console.log($e==$qian.get());
            if(e.target.classList.contains('qian')){
                this.index--;
                if(this.index<0){
                    this.index=this.len;
                }
                this.show(this.index); 
                // console.log(index);
            }else if(e.target.classList.contains('hou')){
                this.index++;
                this.show(this.index);
               
                if(this.index>this.len-2){this.index=-1};
            }
            this.aup();
        })
        // 鼠标移入移出
      
        $(this.container).hover(()=> {
            clearInterval(this.timer);
            $(dian).children().show(500);
        }, ()=> {
            clearInterval(this.timer);
            $(dian).children().hide(500);
            this.aup();
        });
        return this;
        
    }
    JA.prototype.move = function(){

        clearInterval(this.timer);
            this.aup();
        
        return this;
    }


    JA.prototype.stop = function(){
       
       clearInterval(this.timer);
        return this;
    }

    // 滚动动画方法
    JA.prototype.show = function(){
        
        var wValue=1.1 * this.width;
        var hValue=1.1 * this.height;

        $ul = $(this.container).find("ul");
        // console.log($ul.children('img').eq(1));
        // var tarw=this.width*0.99;
      
        $ul.children('img').eq(this.index).fadeIn(300).animate({
        width: wValue,
        height: hValue,
        left:("-"+(0.1 * this.width)/2),
        top:("-"+(0.1 * this.height)/2)}, 2000).siblings('img').css('display','none').css('width',this.width).css('height',this.height).css('top','0').css('left','0');

        
        // console.log(this.index)
        // console.log(this.page);
        // console.log(page);
        $sp = $(this.container).find('span');
        $sp.eq(this.index).addClass('active').siblings('span').removeClass('active');
        
        return this;    
    }

    // 自动切换图片
    JA.prototype.aup = function(){
        this.timer=setInterval(()=>{
            this.show(this.index);
            this.index++;
            
            if(this.index==this.len){this.index=0;}
        },this.duration)
        
        return this; 
        
    }
    function an(options){
      return new JA(options);
    }
  
// })
      

    