// チャート準備
$(document).ready(function() {
	// 現在の日付 (YYYY-MM-DD形式)
	var today = new Date();
	var reqdate = today.getFullYear()+'-'+("0"+(today.getMonth()+1)).slice(-2)+'-'+	("0"+today.getDate()).slice(-2);

	// AJAXでチャートデータを取得する
	$.ajax({
	    // リクエストメソッド(GET,POST,PUT,DELETEなど)
		type : "POST",
	    // データタイプ jsonの場合のパースは厳密なので要注意、データの最後に","があるとパースエラーになる
		// http://jsonlint.com/ で確認するとよい
		dataType : 'json',
	    // リクエストURL
		url : "/",
	    // サーバに送信するパラメータ(name: value)
	    data: {
	    	dateTime: reqdate,
	    },
	}).done(function(result) {
	    // 成功時処理
		// チャート表示
		//alert('success!!'+result);
		ccchart.init('graphcontents', result);
	}).fail(function(jqXHR, textStatus ) {
	    // 失敗時処理
		alert( "Request failed: " + textStatus );
	});
});
