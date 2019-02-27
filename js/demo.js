"use strict";
$(function () {
    init();

    function init() {
        allOutlets();
        if (!CookieEnable()) {
            alert("sorry your cookie is been forbidden,please start it");
        }
    }
});

function CookieEnable() {
    var result = false;
    if (navigator.cookieEnabled) return true;
    document.cookie = "testcookie=yes;";
    var cookieSet = document.cookie;
    if (cookieSet.indexOf("testcookie=yes") > -1) result = true;
    document.cookie = "";
    return result;
}

// 获取全部网点列表
function allOutlets() {
    var outlets = $('#outlets-list')
    var mapx = [22.277880, 22.530550, 39.923001];
    var mapy = [114.168260, 113.944488, 116.347522];
    var length = mapx.length;
    outlets.empty('');
    for (var i = 0; i < length; i++) {
        var list = ' <div class="ol-md content">' + '<div class="ol-md-up">' +
            ' <p class="f-26 color-66 tel"> 这是第' + i + '张地图' +
            '</div>' + '<div class="ol-md-bt">' + ' </div></div>';
        outlets.append(list);
        initMap(mapx[i],
            mapy[i], i);
    }

}


// 腾讯地图接口
// x,y  经纬度
// i.......
function initMap(x, y, i) {
    var center = new qq.maps.LatLng(x, y); // 地图的中心地理坐标。
    var map = new qq.maps.Map(document.getElementsByClassName('ol-md-bt')[i], {
        center: center, // 地图的中心地理坐标。
        zoom: 18 //地图的缩放级别（最大18）
    })
    // 创建一个Marker
    var marker = new qq.maps.Marker({
        // 设置Marker的位置坐标
        position: center,
        // 设置显示Marker的地图
        map: map,
    });
    // marker.setTitle('k');
    // 设置Marker的可见性，为true时可见，false时不可拖曳，默认属性为false
    marker.setVisible(true);
    // 设置Marker的动画属性为落下
    marker.setAnimation(qq.maps.MarkerAnimation.DOWN);
    // 设置Marker是否可以被拖曳，为true时可拖曳，false时不可拖曳，默认属性为false
    marker.setDraggable(false);
}