var google_onetap_address = window.location.href;
var google_onetap_page_from
var google_onetap_psource
var google_onetap_ga_id

window.onload=function(){
  if(!handleCookieOneTap('user_identity')) {
    loadScriptStringOneTap();
    // scEvent();
  }
}

// ga埋点上报配置
var google_onetap_gtmReportObj = {
  GTM_ID_SUFFIX: "WPNBJKV",
  TID: "UA-4839360-64",
};

// 加载script
function loadScriptStringOneTap(){
  var script=document.createElement("script");
  script.id="googleonetap_script";
  script.type="text/javascript";
  script.src="https://accounts.google.com/gsi/client";
  script.async = true;
  script.defer = true;
  document.getElementsByTagName('body')[0].appendChild(script);
}

// 加载dom
function loadDom(urlAll, url, client_id, scParams){
  if(!scParams){
    scParams=''
  }
  if (!client_id||client_id==='') {
    client_id = '402150438060-mvb4nhmp3o8rh83452qqlqq8bch09bnt.apps.googleusercontent.com'
  }
  if (document.getElementById('g_id_onload')) {
    document.getElementById('g_id_onload').remove()
  }
	if(document.getElementById('googleonetap_script')){
		document.getElementById('googleonetap_script').remove()
    loadScriptStringOneTap()
	}else{
		loadScriptStringOneTap()
	}
  // 获取source参数
  var hrefParams = {};
  urlAll.replace(/([^?&=]+)=([^?&=#]*)/g, function (_, $1, $2) {
    hrefParams[$1] = hrefParams[$1] ? hrefParams[$1] : $2;
  });
  // 取链接的redirect_uri参数
  google_onetap_psource = hrefParams['source'] || ''

  // url?后字符串
  var paramsString = ''
  if (urlAll.indexOf("?")>-1) {
    paramsString = urlAll.slice(urlAll.indexOf("?")+1)
  }
  var urlJump = geturlJumpOneTap(url);
  if (urlJump.includes('?')) {
    urlJump = urlJump + '&tap_version=v2'
  } else {
    urlJump = urlJump + '?tap_version=v2'
  }
  if (google_onetap_address.indexOf('accounts.wondershare')>-1) {
    google_onetap_page_from = 'account_center'
  } else {
    google_onetap_page_from = 'website'
  }
  google_onetap_ga_id = handleCookieOneTap("_ga") || ""
  var div=document.createElement("div");
  div.id="g_id_onload";
  div.setAttribute('data-cancel_on_tap_outside','false')
  div.setAttribute('data-client_id',client_id)
  div.setAttribute('data-login_uri',urlJump)
  // 后端不需要用到，可以暂时写死
  div.setAttribute('data-url','/api/v3/social/login/google?redirect_url=https%3A%2F%2Fpdf.wondershare.com%2F&verify=no')
  // div.setAttribute('data-moment_callback','notifyOneTap')
  div.setAttribute('data-onetap_page_from',google_onetap_page_from)
  div.setAttribute('data-onetap_page_address',google_onetap_address)
  div.setAttribute('data-onetap_page_params',paramsString)
  div.setAttribute('data-gaid',google_onetap_ga_id)
  div.setAttribute('data-sc_params',scParams)
  div.setAttribute('data-use_fedcm_for_prompt','true')
  document.getElementsByTagName('body')[0].appendChild(div);
}


// 关闭组件
function closeDom() {
  console.log('🌭关闭组件')
  google.accounts.id.cancel();
}

// 监听事件，埋点 —— 废用
function notifyOneTap(notification) {
  console.log('qwe')
  console.log('notification',notification)
  console.log('getDismissedReason',notification.getDismissedReason())
  console.log('getMomentType',notification.getMomentType())
  // console.log('getNotDisplayedReason',notification.getNotDisplayedReason())
  // console.log('getSkippedReason',notification.getSkippedReason())
  console.log('isDismissedMoment',notification.isDismissedMoment())
  // console.log('isDisplayMoment',notification.isDisplayMoment())
  // console.log('isDisplayed',notification.isDisplayed())
  // console.log('isNotDisplayed',notification.isNotDisplayed())
  console.log('isSkippedMoment',notification.isSkippedMoment())
  // if (notification.isDisplayed()) {
  //   sendGTMRequestOneTap('google_login', 'google_login_view', google_onetap_psource)
  // } else if (notification.isSkippedMoment()&&notification.getSkippedReason()==='user_cancel') {
  //   sendGTMRequestOneTap('google_login', 'google_login_close', google_onetap_psource)
  // } else if (notification.isNotDisplayed()) {
  //   // 没有展示组件
  //   document.dispatchEvent(new Event('onetapNodisplay'));
  // }
}

// 判断登录态
function handleCookieOneTap(c_name) {
  if (document.cookie.length > 0) {
    var c_start = document.cookie.indexOf(c_name + '=') 
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1
      var c_end = document.cookie.indexOf(';', c_start) 
      if (c_end == -1) c_end = document.cookie.length
      return decodeURIComponent(document.cookie.substring(c_start, c_end))
    }
  }
}

// 生成唯一ID
function uuidOneTap() {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";

  var uuid = s.join("");
  return uuid;
}

function buildParamsObj2StringOneTap(eventCatagory, eventAction, eventLabel) {
  google_onetap_ga_id = handleCookieOneTap("_ga") || ""
  var gackv = google_onetap_ga_id || "";
  if (gackv && gackv.indexOf("GA1.1.") === 0) {
      gackv = gackv.split("GA1.1.")[1];
  }
  if (gackv && gackv.indexOf("GA1.2.") === 0) {
      gackv = gackv.split("GA1.2.")[1];
  }
  if (gackv && gackv.indexOf("GA1.3.") === 0) {
      gackv = gackv.split("GA1.3.")[1];
  }
  var paramsObj = {
      v: 1,
      _v: "j87",
      a: uuidOneTap(),
      t: "event",
      ni: 0,
      ds: "web_GTM-" + google_onetap_gtmReportObj.GTM_ID_SUFFIX + "_15",
      _s: 1,
      dl: window.location.href,
      dp: window.location.pathname,
      ul: "zh-cn",
      de: "UTF-8",
      sd: "24-bit",
      je: 0,
      ec: eventCatagory,
      ea: eventAction,
      el: eventLabel,
      _u: "SCCAAEALAAAAAC~",
      jid: uuidOneTap(),
      gjid: uuidOneTap(),
      cid: gackv,
      tid: google_onetap_gtmReportObj.TID,
      _r: 1,
      gtm: "2wgbu0" + google_onetap_gtmReportObj.GTM_ID_SUFFIX,
      cd2: gackv,
      cd3: new Date().getTime(), // hitTimeStamp
      z: uuidOneTap(),
  };
  var res = "";
  for (var key in paramsObj) {
      res += key + "=" + paramsObj[key] + "&";
  }
  var lens = res.length;
  if (res.length > 0 && res[lens - 1] === "&") {
      res = res.slice(0, lens - 1); // 去掉多余的&
  }
  return res;
}

// GA埋点事件
function sendGTMRequestOneTap(eventCatagory, eventAction, eventLabel) {
  if ("function" !== typeof fetch || "function" !== typeof Headers) {
      return false;
  }
  var myHeaders = new Headers();
  myHeaders.append("accept", " */*");
  myHeaders.append("accept-encoding", " gzip, deflate, br");
  myHeaders.append("accept-language", " zh-CN,zh;q=0.9,en;q=0.8");
  myHeaders.append("cache-control", " no-cache");
  myHeaders.append("content-length", " 0");
  myHeaders.append("content-type", " text/plain");
  myHeaders.append("pragma", " no-cache");
  myHeaders.append("sec-fetch-dest", " empty");
  myHeaders.append("sec-fetch-mode", " no-cors");
  myHeaders.append("sec-fetch-site", " cross-site");

  var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: "",
      mode: "no-cors",
  };

  var params = buildParamsObj2StringOneTap(eventCatagory, eventAction, eventLabel);

  fetch(
      "https://www.google-analytics.com/j/collect?" + params,
      requestOptions
  )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
}

function geturlJumpOneTap(url) {
  var jumpDomin = document.domain.substring(document.domain.indexOf('.')+1)
  var accountSupportDomian = [
    "iskysoft.com",
    "iskysoft.us",
    "wondershare.ae",
    "wondershare.cc",
    "wondershare.cn",
    "wondershare.com",
    "wondershare.com.br",
    "wondershare.de",
    "wondershare.es",
    "wondershare.fr",
    "wondershare.hk",
    "wondershare.it",
    "wondershare.jp",
    "wondershare.kr",
    "wondershare.net",
    "wondershare.tw",
    "wondershare.co.jp",
    "wondershare.co.id",
    "wondershare.com.ru",
  ];
  if (!accountSupportDomian.includes(jumpDomin)) {
    jumpDomin = "wondershare.com"
  }
  const regex = /^(https?:\/\/)/;
  const isMatch = regex.test(url);
  if (isMatch) {
    url = encodeURIComponent(url)
  }
  return `https://accounts.${jumpDomin}/api/v3/social/one-tap/google?redirect_url=${url}&verify=no`
}