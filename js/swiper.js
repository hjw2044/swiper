$(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        loop: true,

        // �����Ҫ��ҳ��
        pagination: {
            el: '.swiper-pagination',
        },

        // �����Ҫǰ�����˰�ť
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // �����Ҫ������
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })


});

