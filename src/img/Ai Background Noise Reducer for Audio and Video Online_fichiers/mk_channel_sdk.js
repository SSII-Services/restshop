
// 获取source参数
var hrefParamsMK = {};
location.href.replace(/([^?&=]+)=([^?&=#]*)/g, function (_, $1, $2) {
  hrefParamsMK[$1] = hrefParamsMK[$1] ? hrefParamsMK[$1] : $2;
});
// 获取url上参数
var slugMK = hrefParamsMK['slug']
var m_pidMK = hrefParamsMK['m_pid']
var os_type = 0,product_id_mk = 0,download_url_mk='',business_id_mk=0
if(slugMK&&m_pidMK) {
  // 调用获取下载链接及pid接口
  var xhr_mk = new XMLHttpRequest();
  var url_mk= 'https://prod-web.wondershare.cc/api/v1/prodweb/mk-channel/slug-query?m_pid='+m_pidMK+'&slug='+slugMK;
  xhr_mk.open('GET', url_mk, true);
  xhr_mk.withCredentials = true; // 允许发送跨域请求时携带凭证（如 cookies）
  
  xhr_mk.onload = function() {
    if (xhr_mk.status >= 200 && xhr_mk.status < 400) {
      // 请求成功
      var response_mk = JSON.parse(xhr_mk.responseText);
      // 处理响应数据
      getOSFunction()
      var list = response_mk.data.list
      console.log("list",list,os_type)
      var result_mk = null
      result_mk = list.filter(item => item.platform === os_type);
      if (!result_mk||result_mk.length===0) {
        if (os_type===1) {
          result_mk = list.filter(item => item.platform === 2);
        } else if (os_type===2) {
          result_mk = list.filter(item => item.platform === 1);
        } else if (os_type===3) {
          result_mk = list.filter(item => item.platform === 4);
        } else if (os_type===4) {
          result_mk = list.filter(item => item.platform === 3);
        }
        if (!result_mk||result_mk.length===0) {
          // os_type=7为兜底方案
          result_mk = list.filter(item => item.platform === 7);
        }
      }
      if (result_mk&&result_mk.length>0) {
        download_url_mk = result_mk[0].download_url
        business_id_mk = result_mk[0].business_id
        product_id_mk = result_mk[0].product_id
        // 后端设置cookie
        var url_mk = location.origin+"/trk";
        var data2 = "mk_channel_bid_"+business_id_mk+"="+product_id_mk;
        var xhr2_mk = new XMLHttpRequest();
        xhr2_mk.open('POST', url_mk, true);
        xhr2_mk.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr2_mk.withCredentials = true; // 允许发送跨域请求时携带凭证（如Cookie）
        xhr2_mk.onreadystatechange = function() {
          if (xhr2_mk.readyState === 4 && xhr2_mk.status === 200) {
            console.log("成功种植Cookie：",data2);
          }
        };
        xhr2_mk.send(data2);
      } else {
        // alert('data not found')
      }
    } else {
      //请求失败
      console.error('请求失败：' + xhr_mk.status);
    }
  };
  xhr_mk.onerror = function() {
    // 请求出错
    console.error('请求出错');
  };
  xhr_mk.send();
}

// 获取当前操作系统
function getOSFunction() {
  var userAgentMK = navigator.userAgent;
  var platformMK = navigator.platform;
  if (platformMK.startsWith("Win")) {
    if (userAgentMK.includes("WOW64") || userAgentMK.includes("Win64")) {
      // win_x64
      os_type = 2
    } else {
      // win_x86
      os_type = 1
    }
  } else if (platformMK.startsWith("Mac")) {
    if (userAgentMK.includes("arm")) {
      // mac_arm
      os_type = 3
    } else {
      // mac
      os_type = 4
    }
  } else if (platformMK.startsWith("Linux")) {
    // Linux
    os_type = 8
  } else if (platformMK.startsWith("iPhone")) {
    // iOS
    os_type = 5
  } else if (platformMK.startsWith("Android")) {
    // Android
    os_type = 6
  } else {
    os_type = 7;
  }
}

function getProductIDByCookie(business_id) {
  var businessIDByHost = {
    "kwicut.wondershare.com": 165,
    "www.media.io": 155,
    "virtulook.wondershare.com": 145,
    "zhiyan.wondershare.cn": 135,
    "virbo.wondershare.cn": 105,
    "virbo.wondershare.com": 175,
    "www.hipdf.com": 205,
    "presentory.wondershare.com": 215,
    "www.facengine.ai": 225,
    "momo.wondershare.com":235,
    "decoritt.wondershare.com":235,
		"www.edraw.ai":238

  }
  // business_id为实体ID，可选传参，如果传了取传参
  if (!business_id) {
    business_id = businessIDByHost[location.host]
  }
  var name_mk = 'mk_channel_bid_'+business_id
  if (document.cookie.length > 0) {
    var start_mk = document.cookie.indexOf(name_mk + '=')
    if (start_mk != -1) {
      start_mk = start_mk + name_mk.length + 1
      var end_mk = document.cookie.indexOf(';', start_mk)
      if (end_mk == -1) end_mk = document.cookie.length
      if (!document.cookie.substring(start_mk, end_mk)) return ""
      return decodeURIComponent(document.cookie.substring(start_mk, end_mk))
    } else {
      return ""
    }
  } else {
    return ""
  }
}

function getDownloadURL() {
  return download_url_mk
}