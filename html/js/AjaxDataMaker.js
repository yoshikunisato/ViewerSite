// チャート準備
$(document).ready(function() {
	$.ajax({
	    // リクエストメソッド(GET,POST,PUT,DELETEなど)
		type : "POST",
	    // データタイプ jsonの場合のパースは厳密なので要注意、データの最後に","があるとパースエラーになる
		// http://jsonlint.com/ で確認するとよい
		dataType : 'json',
	    // リクエストURL
		url : "/",
	    // サーバに送信するデータ(name: value)
	    data: {
	    	dateTime: "2016-08-10",
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
