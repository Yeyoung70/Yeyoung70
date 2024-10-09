// 버튼 0 누르면
// 모든 버튼에 붙은 orange 클래스명 제거
// 버튼 0에 오렌지 클래스명 추가
// 모든 div show 클래스명 제거
// div 0에 show 클래스명 추가

var 버튼 = $('.tab-button');
var 쇼 = $('.tab-content');

$('.tab-button').eq(0).on('click', function(){
	버튼.removeClass('orange');
	버튼.eq(0).addClass('orange');
	쇼.removeClass('show');
	쇼.eq(0).addClass('show');
});

// 버튼 1 누르면
// 모든 버튼에 붙은 orange 클래스명 제거
// 버튼 1에 오렌지 클래스명 추가
// 모든 div show 클래스명 제거
// div 1에 show 클래스명 추가

$('.tab-button').eq(1).on('click', function(){
	$('.tab-button').removeClass('orange');
	$('.tab-button').eq(1).addClass('orange');
	$('.tab-content').removeClass('show');
	$('.tab-content').eq(1).addClass('show');
});

$('.tab-button').eq(2).on('click', function(){
	$('.tab-button').removeClass('orange');
	$('.tab-button').eq(2).addClass('orange');
	$('.tab-content').removeClass('show');
	$('.tab-content').eq(2).addClass('show');
});

// for (let i = 0; i < $('.tab-button').length; i++){
// 	버튼.eq(i).on('click', function(){
// 		버튼.removeClass('orange');
// 		버튼.eq(i).addClass('orange');
// 		버튼.removeClass('show');
// 		버튼.eq(i).addClass('show');
// 	});
// };