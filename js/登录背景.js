var curIndex = 0;
//ʱ����(��λ����)��ÿ������ʾһ�ţ����鹲��3��ͼƬ����img�ļ����¡�
var timeInterval = 1000;

                        //����һ�������Ƭλ�õ����飬���Է���������������3��
var arr = new Array();
arr[0] = "images/��¼����1.jpg";
arr[1] = "images/��¼����2.jpg"
arr[2] = "images/��¼����3.jpg"
setInterval(changeImg, timeInterval);
function changeImg() {

                                //���id��Ϊd1�Ķ���
var obj = document.getElementById("d1");
if (curIndex == arr.length - 1) {
curIndex = 0;
} else {
curIndex += 1;
}
                        //����d1�ı���ͼƬ
obj.style.backgroundImage= "URL("+arr[curIndex]+")";       //��ʾ��Ӧ��ͼƬ
}