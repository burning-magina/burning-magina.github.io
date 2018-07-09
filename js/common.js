/*执行事件*/
$(function () {

    // 打字机效果
  var str = '你好!\n';
    str += 'nice to meet you!\n';
    str += '我是只懒猫~\n';
    str += '有时候也是小白鼠- -\n';
	str += '\n';
	str += '\n';
	str += '\n';
    str += '欢迎你!\n';
	str += '...........';
    Printer.init(str, {
        selector: 'text_typewriter'
    }).print();

    setTimeout(function() {
        _init();
    }, str.length * 100);
	 function _init(){
        //隐藏loading页面
        $('.loading_typewriter').fadeOut(1000);
		window.location="../pages/myHome.html";
	 }
});