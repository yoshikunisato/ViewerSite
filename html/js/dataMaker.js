/**
 * 
 */
// チャート用データ設定  
var 1 = {4:10, 5:30, 6:40, 7:30, 8:60, 9:50};
var temp1 = {4:10, 5:30, 6:40, 7:30, 8:60, 9:50};

var i = 0;
for (key in sales1){
  i++;
  chart_sample1["data"][0][i] = key;
  chart_sample1["data"][1][i] = sales1[key];
}