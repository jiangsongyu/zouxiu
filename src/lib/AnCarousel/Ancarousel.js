require(['config'],function(){
    require(['jquery'],function($){
	// $.xCarousel = function(){}
	// $.prototype.xCarousel = function(options){}
		$.fn.xCarousel = function(options){
			// 属性
			var defaults = {
				// 宽高
				width:320,
				height:320,

				// 自动轮播
				autoPlay:true,

				// 显示小图
				showSmall:true,

				// 显示左右按钮
				showButton:true,

				// 是否显示页码
				showPage:false,

				// 播放间隔
				duration:3000,

				// 轮播类型：fade:淡入淡出, vertial:垂直滚动, horizontal:水平滚动, show:幻灯片
				type:'vertical',

				// 默认显示图片索引
				index:0
			}

			// 这里的this,jquery对象
			this.each(function(){
				//这里的this为DOM节点
				var $this = $(this);

				var opt = $.extend({},defaults,options);


				var carousel = {
					init:function(){
						

						// 生成html结构
						var $ul = $('<ul/>');
						$ul.html(opt.imgs.map(function(item){
							return `<li><img src="${item}"/></li>`;
						}).join(''));

						$this.append($ul);

						// 添加插件样式
						$this.addClass('xcarousel');
						$ul.addClass(opt.type);
						if(opt.type === 'horizontal'){
							$ul.width(opt.width*opt.imgs.length);
						}else if(opt.type === 'fade'){
							$ul.css({
								width:opt.width,
								height:opt.height
							});
						}

						// 设置宽高
						if(opt.showSmall){
							$this.css({
								width:opt.width,
								height:opt.height+opt.height/5
							});
						}else{
							$this.css({
								width:opt.width,
								height:opt.height
							});
						}
						

						// 页码
						if(opt.showPage){
							var $page = $('<div/>').addClass('page');

							// 重复生成span标签
							var page_html = '<span></span>'.repeat(opt.imgs.length);
							$page.html(page_html);

							// 当前分页添加高亮
							// $page.children().eq(opt.index).addClass('active');

							// $this.append($page);
							$page.appendTo($this);
						}else if(opt.showSmall){
							var $small = $('<div/>').addClass('small');
							var $cloneUl = $ul.clone().removeClass().attr('style','');
							$cloneUl.find('img').width(opt.width/5);

							$cloneUl.appendTo($small);
							$small.height(opt.height/5);
							$small.appendTo($this);

							var $btnPrev = $('<span/>').addClass('btn-prev').html('&lt;');
							var $btnNext = $('<span/>').addClass('btn-next').html('&gt;');
							var $simg = $cloneUl.find('li');
							var i=0;
							var k=0;
						
								console.log();
							var $Bimg = $ul.find('li').find('img');
							var tagrw = opt.width*1.6;
							var tagrh = opt.height*1.6;
							$ul.mouseenter(function() {
								
								$Bimg.css('width',tagrw).css('height',tagrh);
								$ul.find('li').css('left',-(0.8*opt.width)/2).css('top',-(0.2 * opt.height)/2);
								
							}).mouseleave(function(e) {
								$Bimg.css('width',opt.width).css('height',opt.height);
								$ul.find('li').css('left',0).css('top',0);
							});
						    $ul.mousemove(function(e) {
						    		var BW = $ul.parent().offset().left;
						    		console.log(BW);
									var left = -((e.clientX-opt.width/2-BW));
									var top = -(e.clientY-opt.height/2);
									if(top<-(tagrh-opt.height)){
										top=-(tagrh-opt.height);
									}else if(top>0){
										top=0;
									}
									// console.log(e.clientX-opt.width*2)
									$ul.find('li').css('top',top);
									if(left<-(tagrw-opt.width)){
										left=-(tagrw-opt.width);
									}else if(left>0){
										left=0;
									}
									console.log(left,top);
									$ul.find('li').css('left',left);
									// console.log(e.clientX,e.clientY);
								});
							if(opt.imgs.length>5){
								$btnPrev.on('click',function(){
									if(i==0){
										$simg.slice(0, 5).hide();
										$simg.eq(5).addClass('on').siblings('li').removeClass();
										console.log($ul.find('img').eq(5));
										$ul.children().eq(5).animate({opacity:1}).siblings('li').animate({opacity:0});
										i++;
									}else{
										$simg.slice(0, 5).show();
										$simg.eq(0).addClass('on').siblings('li').removeClass();
										$ul.children().eq(0).animate({opacity:1}).siblings('li').animate({opacity:0});
										i=0;
									}	
									
								});
								$btnNext.on('click',function(){
									if(k==0){
										$simg.slice(0, 5).hide();
										$simg.eq(5).addClass('on').siblings('li').removeClass();
										$ul.children().eq(5).animate({opacity:1}).siblings('li').animate({opacity:0});
										k++;
									}else{
										$simg.slice(0, 5).show();
										$simg.eq(0).addClass('on').siblings('li').removeClass();
										$ul.children().eq(0).animate({opacity:1}).siblings('li').animate({opacity:0});
										k=0;
									}	
								})
							}

								
							$simg.click(function() {
								var index = $simg.index(this);
								$simg.eq(index).addClass('on').siblings('li').removeClass();
								$ul.children().eq(index).animate({opacity:1}).siblings('li').animate({opacity:0});
							});
							$simg.eq(opt.index).addClass('on').siblings('li').removeClass();
							$small.append([$btnNext,$btnPrev]);
							$small.width($ul.width());
						}

						// 左右按钮
						if(opt.showButton){
							var $btnPrev = $('<span/>').addClass('btn-prev').html('&lt;');
							var $btnNext = $('<span/>').addClass('btn-next').html('&gt;');

							$this.append([$btnNext,$btnPrev]);

						}

						// 自动轮播
						if(opt.autoPlay){
							this.start();
							// $this.trigger('mouseleave');

							$this.on('mouseenter',()=>{
								this.stop();
							}).on('mouseleave',()=>{
								this.start();
							})
						}
						
						

						// 点击页码
						$this.on('click','.page span',function(){
							opt.index = $(this).index();
							carousel.move();

						})

						// 左右按钮
						.on('click','.btn-prev',function(){
							if(opt.showSmall){
								return
							}else{
								opt.index--;
								carousel.move();
							}
							

						}).on('click','.btn-next',function(){
							if(opt.showSmall){
								return
							}else{
								opt.index++;
								carousel.move();
							}
						});


						// 显示当前图片
						this.move();
					},
					move:function(){
						// 处理index值
						if(opt.index>=opt.imgs.length){
							opt.index = 0;
						}else if(opt.index<0){
							opt.index = opt.imgs.length-1;
						}

						var $ul = $this.find('ul');

						// 动画属性
						var params = {};

						// 水平垂直
						if(opt.type === 'vertical'){
							params.top = -opt.index*opt.height;
							$ul.animate(params);
						}else if(opt.type === 'horizontal'){
							params.left = -opt.index*opt.width;
							$ul.animate(params);
						}

						// 淡入淡出
						else if(opt.type === 'fade'){
							$ul.children().eq(opt.index).animate({opacity:1}).siblings('li').animate({opacity:0});
						}

						

						// 高亮显示页码
						if(opt.showPage){
							$this.find('.page').children().eq(opt.index).addClass('active').siblings('span').removeClass();
						}
					},
					stop:function(){
						clearInterval(opt.timer);
					},
					start:function(){
						opt.timer = setInterval(function(){
							opt.index++;
							this.move();
						}.bind(this),opt.duration);
					}
				}

				carousel.init();
			});
			
			// 为了链式调用
			return this;
		}
    })
})





// $('.box').xCarousel();