/**
 * 
 */
// チャート準備
var chart1 = {

  "config": {
    "title": "Temperature Chart",
    "subTitle": "Temperature sensor data",
    "width": 800,
    "height": 700,
    "type": "line",
    "lineWidth": 2,
    "maxY": 40,
    "minY": -10,
    "paddingTop": 80,
    "paddingBottom": 110,
    "useVal": "yes",
    "useMarker": "css-ring",
    "useCssToolTip": "yes",
    "markerWidth": 10,
    "xScaleRotate": -90,
    "xScaleYOffset": 55,
    "maxWsColLen": 18,
    "colorSet": 
          ["#DDA0DD","#3CB000"],
  },

  "data": [
    ["DateTime"],
    ["℃"],
  ]
};
				
// チャート用データ設定
var time2temp = {"2016-08-10 14:10":25.5,"2016-08-10 14:15":25.6,"2016-08-10 14:20":27.3,"2016-08-10 14:25":28.4,"2016-08-10 14:30":27.9,"2016-08-10 14:35":26.7,"2016-08-10 14:40":25.8};

var i = 0;
for (key in time2temp){
  i++;
  chart1["data"][0][i] = key;
  chart1["data"][1][i] = time2temp[key];
}


// チャート初期化
ccchart.init('graphcontents', chart1);
