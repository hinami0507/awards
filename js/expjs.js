// JavaScript Document
//���������������
var EventUtil = {

    addHandler: function(element, type, handler){
        if (element.addEventListener){
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent){
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    
    getButton: function(event){
        if (document.implementation.hasFeature("MouseEvents", "2.0")){
            return event.button;
        } else {
            switch(event.button){
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4: return 1;
            }
        }
    },
    
    getCharCode: function(event){
        if (typeof event.charCode == "number"){
            return event.charCode;
        } else {
            return event.keyCode;
        }
    },
    
    getClipboardText: function(event){
        var clipboardData =  (event.clipboardData || window.clipboardData);
        return clipboardData.getData("text");
    },
    
    getEvent: function(event){
        return event ? event : window.event;
    },
    
    getRelatedTarget: function(event){
        if (event.relatedTarget){
            return event.relatedTarget;
        } else if (event.toElement){
            return event.toElement;
        } else if (event.fromElement){
            return event.fromElement;
        } else {
            return null;
        }
    
    },
    
    getTarget: function(event){
        return event.target || event.srcElement;
    },
    
    getWheelDelta: function(event){
        if (event.wheelDelta){
            return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
        } else {
            return -event.detail * 40;
        }
    },
    
    preventDefault: function(event){
        if (event.preventDefault){
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    removeHandler: function(element, type, handler){
        if (element.removeEventListener){
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent){
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },
    
    setClipboardText: function(event, value){
        if (event.clipboardData){
            event.clipboardData.setData("text/plain", value);
        } else if (window.clipboardData){
            window.clipboardData.setData("text", value);
        }
    },
    
    stopPropagation: function(event){
        if (event.stopPropagation){
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }

};


$(document).ready(function(){
	$(function() {
//��������a��banner��
		function scroll(a) {

			var loc = -a * Bwidth;

			$(".ban1 ul").stop(1,0).animate({left: loc},300);

			$(".ban1 .btn span").stop(1,0).animate({opacity: "0.4"},300)

			.eq(a).stop(1,0).animate({opacity: "1"},300)

		}
//����ѭ������num����ť
		var BTNgroup = "<div class='btn'>",num = $(".ban1 ul li").length;
		for (var i = 0; i<num; i++) {
			BTNgroup += "<span></span>";
		}
		BTNgroup += "</div>";
		$(".ban1").append(BTNgroup);

		var banClock, Bwidth = $(".ban1").width(), portal = 0;
//��ת���������Ǹ�bannerλ��
		$(".ban1 .btn span").hover(function() {
			portal = $(".ban1 .btn span").index(this),
			scroll(portal)
		}).eq(0).trigger("hover");
//��������banner���ܳ���
		$(".ban1 ul").css("width", Bwidth * num);
//�����ָ��banner��ʱ�����ָ��ʱ�����ʱ����ֹͣ����

		$("#arrow1").click(function(){
			if(portal<=0)
				portal=num-1;
			else
				portal--
			scroll(portal);
		})
		$("#arrow2").click(function(){
			if(portal>num-2)
				portal=0;
			else
				portal++;
			scroll(portal);
			
		})

	});


//�ڶ���banner
		$(function() {
//��������a��banner��
		function scroll(a) {

			var loc = -a * Bwidth;

			$(".ban2 ul").stop(1,0).animate({left: loc},300);

			$(".ban2 .btn span").stop(1,0).animate({opacity: "0.4"},300)

			.eq(a).stop(1,0).animate({opacity: "1"},300)

		}
//����ѭ������num����ť
		var BTNgroup = "<div class='btn'>",num = $(".ban2 ul li").length;
		for (var i = 0; i<num; i++) {
			BTNgroup += "<span></span>";
		}
		BTNgroup += "</div>";
		$(".ban2").append(BTNgroup);
//���峤��
		var banClock, Bwidth = 215, portal = 0;
//��ת���������Ǹ�bannerλ��
		$(".ban2 .btn span").hover(function() {
			portal = $(".ban2 .btn span").index(this),
			scroll(portal)
		}).eq(0).trigger("hover");
//��������banner���ܳ���
		$(".ban2 ul").css("width", Bwidth * num);
//�����ָ��banner��ʱ�����ָ��ʱ�����ʱ����ֹͣ����
		num-=2;
		$(".cehua #arrow1").click(function(){
			if(portal<=0)
				portal=num-1;
			else
				portal--
			scroll(portal);
		})
		$(".cehua #arrow2").click(function(){
			if(portal>num-2)
				portal=0;
			else
				portal++;
			scroll(portal);
			
		})
		$(".cehua").hover(function() {
			clearInterval(banClock)
		},    //��겻ָ��ʱ�����ü�ʱ������ʼ����
		function() {
			banClock = setInterval(function() {
				scroll(portal);
				portal++;
				if(portal == num) {portal = 0}
			},1500)
		}).trigger("mouseleave")
	});
		




/*������banner*/

	$(function() {
//��������a��banner��
		function scroll(a) {

			var loc = -a * Bwidth;

			$(".ban3 ul").stop(1,0).animate({left: loc},300);

			$(".ban3 .btn span").stop(1,0).animate({opacity: "0.4"},300)

			.eq(a).stop(1,0).animate({opacity: "1"},300)

		}
//����ѭ������num����ť
		var BTNgroup = "<div class='btn'>",num = $(".ban3 ul li").length;
		for (var i = 0; i<num; i++) {
			BTNgroup += "<span></span>";
		}
		BTNgroup += "</div>";
		$(".ban3").append(BTNgroup);

		var banClock, Bwidth = $(".ban3 ul li").width(), portal = 0;
//��ת���������Ǹ�bannerλ��
		$(".ban3 .btn span").hover(function() {
			portal = $(".ban3 .btn span").index(this),
			scroll(portal)
		}).eq(0).trigger("hover");
//��������banner���ܳ���
		$(".ban3 ul").css("width", Bwidth * num);
//�����ָ��banner��ʱ�����ָ��ʱ�����ʱ����ֹͣ����
		$("#arrow21").click(function(){
			if(portal<=0)
				portal=num-1;
			else
				portal--
			scroll(portal);
		})
		$("#arrow22").click(function(){
			if(portal>num-2)
				portal=0;
			else
				portal++;
			scroll(portal);
			
		})
	});

$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');// ������ Opera �Ĳ���, ������ Opera ��ֱ�������Ķ��һ�����˸ by willin

$('.nav1 ul').click(function(e){
	var getid = $(e.target).attr("id");
	chaid='#'+getid.substring(2,getid.length);
	$body.animate({scrollTop: $(chaid).offset().top}, 500);
});

$('#totop').click(function(e){
	$body.animate({scrollTop: $('#top').offset().top}, 500);
	return false;// ����false���Ա�����ԭ���Ӻ����#
});

});




var awa = document.getElementsByClassName('awards-left')[0];
var length = awa.children.length;
	for(var i=2;i<=length;i++)
	{
		$("#aw1-"+i).hide();
	}
EventUtil.addHandler(awa,"mouseover",function(){
	var tar = EventUtil.getTarget(event).className;
	if(tar != 'awards-left')
	{	
		for(var i=0;i<=length;i++)
		{
			$("#aw1-"+i).hide();
		}
	}
	$("#"+tar).show();
});

/*���ҽ�ѧ��*/
var dex0 = 0;
var win0 = document.getElementsByClassName('win-left')[dex0];
var length0 = win0.children.length;
	for(var i=2;i<=length0;i++)
	{
		$("#win"+dex0+"-"+i).hide();
	}
EventUtil.addHandler(win0,"mouseover",function(){
	var tar1 = EventUtil.getTarget(event).className;
	if(tar1 != 'win-left')
	{
		for(var i=0;i<=length0;i++)
		{
			$("#win"+dex0+"-"+i).hide();
		}
	}
	$("#"+tar1).show();
});


/*�ۺϽ�ѧ��*/
var dex1 = 1;
var win1 = document.getElementsByClassName('win-left')[dex1];
var length1 = win1.children.length;
	for(var i=2;i<=length1;i++)
	{
		$("#win"+dex1+"-"+i).hide();
	}
EventUtil.addHandler(win1,"mouseover",function(){
	var tar1 = EventUtil.getTarget(event).className;
	if(tar1 != 'win-left')
	{
		for(var i=0;i<=length1;i++)
		{
			$("#win"+dex1+"-"+i).hide();
		}
	}
	$("#"+tar1).show();
});

/*������ѧ��*/
var dex2 = 2;
var win2 = document.getElementsByClassName('win-left')[dex2];
var length2 = win2.children.length;
	for(var i=2;i<=length2;i++)
	{
		$("#win"+dex2+"-"+i).hide();
	}
EventUtil.addHandler(win2,"mouseover",function(){
	var tar1 = EventUtil.getTarget(event).className;
	if(tar1 != 'win-left')
	{
		for(var i=0;i<=length2;i++)
		{
			$("#win"+dex2+"-"+i).hide();
		}
	}
	$("#"+tar1).show();
});

/*��������ѧ��*/
var dex3 = 3;
var win3 = document.getElementsByClassName('win-left')[dex3];
var length3 = win3.children.length;
	for(var i=2;i<=length3;i++)
	{
		$("#win"+dex3+"-"+i).hide();
	}
EventUtil.addHandler(win3,"mouseover",function(){
	var tar1 = EventUtil.getTarget(event).className;
	if(tar1 != 'win-left')
	{
		for(var i=0;i<=length3;i++)
		{
			$("#win"+dex3+"-"+i).hide();
		}
	}
	$("#"+tar1).show();
});


//�������ı���Ƶ·��
var vd1 = document.getElementById('vd1');
var vd2 = document.getElementById('vd2');
var mp = document.getElementById('mpfour');

EventUtil.addHandler(vd1,"click",function(){
	mp.setAttribute("src",'img/one7.mp4');
})

EventUtil.addHandler(vd2,"click",function(){
	mp.setAttribute("src",'img/one8.mp4');
})