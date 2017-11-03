/*执行事件*/
$(function () {

    // 打字机效果
    var str = '你好!\n';
    str += 'nice to meet you!\n';
    str += '我是只懒猫~\n';
    str += '有时候也是小白鼠- -\n';
	str += '你的情谊，我不会拒绝(ˇ3ˇ)\n';
	str += '我也愿意陪伴在你身边~\n';
    str += '欢迎你!';
    Printer.init(str, {
        selector: 'text_typewriter'
    }).print();

    setTimeout(function() {
        _init();
    }, str.length * 5000);
	 function _init(){
        //隐藏loading页面
        $('.loading_typewriter').fadeOut(1000);
		window.location="my_page.html";
	 }
});