// 버튼 0 누르면
// 모든 버튼에 붙은 orange 클래스명 제거
// 버튼 0에 오렌지 클래스명 추가
// 모든 div show 클래스명 제거
// div 0에 show 클래스명 추가

var 버튼 = $('.tab-button');

// 버튼.eq(0).on('click', function(){
// 	버튼.removeClass('orange');
// 	버튼.eq(0).addClass('orange');
// 	버튼.removeClass('show');
// 	버튼.eq(0).addClass('show');
// });

// 버튼 1 누르면
// 모든 버튼에 붙은 orange 클래스명 제거
// 버튼 1에 오렌지 클래스명 추가
// 모든 div show 클래스명 제거
// div 1에 show 클래스명 추가

// $('.tab-button').eq(1).on('click', function(){
// 	$('.tab-button').removeClass('orange');
// 	$('.tab-button').eq(1).addClass('orange');
// 	$('.tab-content').removeClass('show');
// 	$('.tab-content').eq(1).addClass('show');
// });

// $('.tab-button').eq(2).on('click', function(){
// 	$('.tab-button').removeClass('orange');
// 	$('.tab-button').eq(2).addClass('orange');
// 	$('.tab-content').removeClass('show');
// 	$('.tab-content').eq(2).addClass('show');
// });

// for (let i = 0; i < $('.tab-button').length; i++){
// 	버튼.eq(i).on('click', function(){
// 		탭열기(i)
// 	});
// };

// $('.list').click(function(e) {
// 	// 지금 누른게 버튼0이면 탭열기(0)
// 	if (e.target == document.querySelectorAll('.tab-button')[0]) { 
// 		탭열기(0)
// 	}
// 	// 지금 누른게 버튼1이면 탭열기(1)
// 	if (e.target == document.querySelectorAll('.tab-button')[1]) { 
// 		탭열기(1)
// 	}
// 	// 지금 누른게 버튼2이면 탭열기(2)
// 	if (e.target == document.querySelectorAll('.tab-button')[2]) { 
// 		탭열기(2)
// 	}
// })

$('.list').click(function(e) {
	탭열기(e.target.dataset.id)
})

function 탭열기(숫자) {
	버튼.removeClass('orange');
	버튼.eq(숫자).addClass('orange');
	버튼.removeClass('show');
	버튼.eq(숫자).addClass('show');
}