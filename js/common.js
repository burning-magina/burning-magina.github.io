/*ִ���¼�*/
$(function () {

    // ���ֻ�Ч��
    var str = '���!\n';
    str += 'nice to meet you!\n';
    str += '����ֻ��è~\n';
    str += '��ʱ��Ҳ��С����- -\n';
	str += '������꣬�Ҳ���ܾ�(��3��)\n';
	str += '��ҲԸ������������~\n';
    str += '��ӭ��!';
    Printer.init(str, {
        selector: 'text_typewriter'
    }).print();

    setTimeout(function() {
        _init();
    }, str.length * 100);
	 function _init(){
        //����loadingҳ��
        $('.loading_typewriter').fadeOut(5000);
		window.location="my_page.html";
	 }
});