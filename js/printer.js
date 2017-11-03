(function(root, factory){
	if(typeof define === 'function' && define.amd){
		define([], factory);
	}else{
		root.Printer = factory(root);
	}
}(this, function(root){
	var Printer = {};
	Printer.printer = {"version": "0.0.1"};
	var init_options = {
		"speed" : 100,		//���ֵ��ٶ�
		"selector" : 'canvas',		//Ҫ��ӡ���ı�ǩ��ID			
		"startIndex" : 0,		//�ӵڼ����ַ���ʼ��ӡ
		"endIndex" : 0,		//��ӡ���ڼ����ַ�����
		"hasCur" : true,		//�Ƿ��й��
		"curId" : 'cur',		//����ID
		"curStr" : '|',		//����ַ�
		"curStyle" : 'font-weight: bold;',	//������ʽ��CSS��ʽ��
		"curSpeed" : 500,		//�����ٶȣ�ms��
		"lnStr": ""
	};



	var str = "", options = init_options;
	var flwCurTimer, dom, curObj, reStr='', curSwitch,index=0;

	Printer.init = function(arg_str, arg_options){
		str = arg_str;
		for( var option in arg_options ){
			options[option] = arg_options[option];
		}
		dom = document.getElementById(options.selector) || document.getElementsByClassName(options.selector);
		index = options.startIndex;
		options.endIndex = options.endIndex == 0 ? str.length : options.endIndex
		options.hasCur && flwCur();
		return this;
	}


	Printer.print = function(callback){	//��ӡ����
		for(var i=0; i<str.length; i++) {
			(function(index){
				setTimeout(function(){	
					if (str.charAt(index) === '\n'){
						reStr += '<br>' + options.lnStr;
					} else {
						reStr += str.charAt(index);
					}
					dom.innerHTML= options.lnStr + reStr;
				}, options.speed * (index + 1));
			})(i);
		}

		setTimeout(function(){
			if(options.hasCur){
				var element = document.createElement("span");
				element.id = options.curId
				dom.appendChild(element);

				curObj = document.getElementById(options.curId);
				clearTimeout(flwCurTimer);
				setInterval(chCur, options.curSpeed);
			}
		}, options.speed * str.length);
	}

	function flwCur(){	//������
		dom.innerHTML += '<span id="'+options.curId+'" style="'+options.curStyle+'">'+options.curStr+'</span>';
		flwCurTimer = setTimeout(flwCur, 1.5 * options.speed);
	}

	function chCur(){	//��˸���
		curObj.innerHTML = curSwitch ? options.curStr : "";
		curSwitch = !curSwitch
	}

	return Printer;
}));


