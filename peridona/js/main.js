$(document).ready(function () {
 
    var show = true;
    var countbox = ".page5";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var c_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var c_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 600 >= c_top || w_height + w_top == d_height || c_height + c_top < w_height) {
            $('.number').css('opacity', '1');
            $('.number').spincrement({
                thousandSeparator: "",
                duration: 1200
            });
             
            show = false;
        }
    });

    var show2 = true;
    var countbox2 = ".numbers";
    $(window).on("scroll load resize", function () {
        if (!show2) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top2 = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var c_top2 = $(countbox2).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height2 = $(window).height(); // Высота окна браузера
        var d_height2 = $(document).height(); // Высота всего документа
        var c_height2 = $(countbox2).outerHeight(); // Полная высота блока со счетчиками
        if (w_top2 + 900 >= c_top2 || w_height2 + w_top2 == d_height2 || c_height2 + c_top2 < w_height2) {
            $('.numb').css('opacity', '1');
            $('.numb').spincrement({
                thousandSeparator: "",
                duration: 1200
            });
             
            show2 = false;
        }
    });
 
});