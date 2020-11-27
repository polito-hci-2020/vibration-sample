$(document).ready(function(){

    var pattern1 = [2000];
    var pattern2 = [1000, 1000, 1000, 1000, 1000];
    var pattern3 = [100, 100, 100, 100];

    $('#btn_pattern1').on('click', function () {
        window.navigator.vibrate(pattern1);
    });
    $('#btn_pattern2').on('click', function () {
        window.navigator.vibrate(pattern2);
    });
    $('#btn_pattern3').on('click', function () {
        window.navigator.vibrate(pattern3);
    });


});
