if(CE_USER_SCRIPT=!0,"object"==typeof CE2&&(CE2.uid||CE2.data))throw Error("CE: multiple userscripts installed");if((CE2="undefined"==typeof CE2?{}:CE2).userDataToJs=function(t){for(var e=[["uid","uid"],["snapshots","snapshots"],["status","status"],["flows","flows"],["sites","sites"],["USER_SCRIPT_VERSION","updated_at"],["__CE_HOST__","ce_app_url"],["COMMON_SCRIPT","common_script_url"],["COMMON_SCRIPT_SECURE","common_script_url"],["TRACKING_SCRIPT","tracking_script_url"],["TRACKING_SCRIPT_SECURE","tracking_script_url"],["AUTH_KEY","hud_auth_key"],["HUD","hud"],["GLOBAL_IP_BLOCK_LIST","global_ip_block_list"],["IS_USING_IP_BLOCKING","is_using_ip_blocking"],["TRACKING_DEST_NEW","v6_tracking_dest"],["TRACKING_DEST_NEW_SECURE","v6_secure_tracking_dest"],["DEST_V11","v11_tracking_dest"],["FT_DEST","flow_tracking_dest"],["PAGE_VIEWS_LIMIT_REACHED","page_views_limit_reached"],["NUMBER_OF_RECORDINGS","recordings_number"],["RECORDINGS_ACTIVATION","recordings_activation"],["ERROR_TRACKING","error_tracking"],["DEST_ERRORS_API","error_tracking_dest"],["DEST_ERRORS_API_DOMAIN","error_tracking_script_url"]],a=0;a<e.length;a++){var r=e[a];CE2.data[r[1]]&&(CE2[r[0]]=CE2.data[r[1]])}CE2.data.recordings_dest&&(CE2.SREC_DEST={record:CE2.data.recordings_dest,sample:CE2.data.recordings_sampling_dest})},"undefined"==typeof CE_USER_DATA&&(CE_USER_SITE_DATA_URL="https://script.crazyegg.com/pages/data-scripts/0104/8432/site/SITENAME.json"),"undefined"==typeof CE_USER_DATA_URL&&"undefined"!=typeof CE_USER_SITE_DATA_URL&&CE_USER_SITE_DATA_URL&&(CE_USER_DATA_URL=CE_USER_SITE_DATA_URL.replace("SITENAME",window.location.host)),CE2.debugEnabled=function(){return"undefined"!=typeof CE_DEBUG&&CE_DEBUG||!!~window.location.href.indexOf("ced=b1136c244609cca59359b59765a2806c")},CE2.debug=function(t){if(!CE2.debugEnabled())return!1;t="string"==typeof t?"CE: "+t:t;console.log(t)},CE2.benchmarks=[],CE2.benchmark={start:(e,t=[])=>{CE2.benchmark.stopped||CE2.benchmarks.find(t=>t.name===e)||CE2.benchmarks.push({name:e,tags:t,startedAt:new Date})},stop:e=>{var t;CE2.benchmark.stopped||(t=CE2.benchmarks.find(t=>t.name===e))&&!t.diff&&(t.diff=+new Date-+t.startedAt)},report:()=>{CE2.benchmarks=[],CE2.benchmark.stopped=!0}},CE2.runLoadedScriptCallbacks=function(t){for(var e;e=CE2.LOADED_SCRIPTS_CALLBACKS[t].shift();)e()},CE2.loadScript=function(t,e){var a,r=t.match(/versioned\/(.+?)-scripts/);let n=r?r[1]:"unknown";return CE2.benchmark.start("navigation|crazyegg|load-"+n),CE2.LOADED_SCRIPTS||(CE2.LOADED_SCRIPTS=[]),CE2.INCLUDED_SCRIPTS||(CE2.INCLUDED_SCRIPTS=[]),CE2.LOADED_SCRIPTS_CALLBACKS||(CE2.LOADED_SCRIPTS_CALLBACKS={}),CE2.LOADED_SCRIPTS_CALLBACKS[t]||(CE2.LOADED_SCRIPTS_CALLBACKS[t]=[]),e&&CE2.LOADED_SCRIPTS_CALLBACKS[t].push(e),~CE2.LOADED_SCRIPTS.indexOf(t)?CE2.runLoadedScriptCallbacks(t):~CE2.INCLUDED_SCRIPTS.indexOf(t)?void 0:((a=document.createElement("script")).src=t,a.type="text/javascript",a.async=!0,(r=document.getElementsByTagName("script")[0]).parentNode.insertBefore(a,r),a.onload=a.onreadystatechange=function(){a.readyState&&!/complete|loaded/.test(a.readyState)||(CE2.benchmark.stop("navigation|crazyegg|load-"+n),CE2.LOADED_SCRIPTS.push(t),CE2.runLoadedScriptCallbacks(t),a.onload=null,a.onreadystatechange=null)},CE2.INCLUDED_SCRIPTS.push(t),!1)},CE2.loadCommonScript=function(t){if(CE2.userMain)return t();CE2.loadScript(CE2.data.common_script_url,t)},CE2.loadTrackingScript=function(t){if(CE2.V11Tracker)return t();CE2.loadScript(CE2.data.tracking_script_url,t)},CE2.loadSessionTrackingScript=function(t){if(CE2.pageState)return t();CE2.loadScript(CE2.data.trackingpagestate_script_url,function(){CE2.loadTrackingScript(t)})},CE2.getUserDataTime=function(){if(window.performance&&performance.getEntriesByType){var t=performance.getEntriesByType("navigation");if(t&&t[0])return"back_forward"===t[0].type?parseInt(+new Date/3e5,10):1}return parseInt(+new Date/36e5,10)},CE2.isNativeFunction=function(t){return!!t&&/\{\s+\[native code\]/.test(Function.prototype.toString.call(t))},CE2.cleanPrototype=function(t){var e,a;return("undefined"==typeof window?CE2.s:(e="ce_proto_iframe",(a=document.getElementById(e))||((a=document.createElement("iframe")).id=e,a.title="CrazyEgg Tracking iframe",a.style.display="none",document.documentElement.appendChild(a)),a.contentWindow))[t]},CE2.getNativeXMLHttpRequest=function(){return new(CE2.isNativeFunction(XMLHttpRequest.prototype.send)?XMLHttpRequest:CE2.cleanPrototype("XMLHttpRequest"))},CE2.afterUserDataLoaded=function(){var t;"undefined"!=typeof CE_LOCAL_SCRIPT_HOST&&(CE2.data.common_script_url=CE_LOCAL_SCRIPT_HOST+"/pages/versioned/common-scripts-source/latest.js",CE2.data.transformations_script_url=CE_LOCAL_SCRIPT_HOST+"/pages/versioned/transformations-scripts-source/latest.js",CE2.data.tracking_script_url=CE_LOCAL_SCRIPT_HOST+"/pages/versioned/tracking-scripts-source/latest.js",CE2.data.trackingpagestate_script_url=CE_LOCAL_SCRIPT_HOST+"/pages/versioned/trackingpagestate-scripts-source/latest.js"),window.CE_USER_COMMON_SCRIPT_URL||(window.CE_USER_COMMON_SCRIPT_URL=CE2.data.common_script_url,window.CE_USER_THIRDPARTY_SCRIPT_URL=CE2.data.thirdparty_script_url),CE2.userDataToJs(CE2.data),"ok"===CE2.data.status?CE2.loadCommonScript():(t=document.location.hash.match(/#ce-(?:survey|cta)-(.+)/))&&t[1]?(CE2.commonScriptForceLoaded=!0,CE2.loadCommonScript()):CE2.checkLoadCommonScript()},CE2.loadUserData=function(t){CE2.benchmark.start("navigation|crazyegg|load-userdata"),CE2.userDataStatus="loading";var e=CE2.getNativeXMLHttpRequest();e.onreadystatechange=function(){if(4==e.readyState)try{200==e.status&&e.responseText&&(CE2.data=JSON.parse(e.responseText),CE2.benchmark.stop("navigation|crazyegg|load-userdata"),CE2.afterUserDataLoaded(),CE2.userDataStatus="ok")}catch(t){CE2.debug("Error loading user data: "+t.message)}},CE2.debug("[Loading] User data",CE_USER_DATA_URL),e.open("GET",CE_USER_DATA_URL+"?t="+CE2.getUserDataTime(),!0),e.send()},CE2.loadUserDataInline=function(){CE2.debug("[Loading] User data inline"),CE2.data=JSON.parse(CE_USER_DATA),CE2.afterUserDataLoaded(),CE2.userDataStatus="ok"},CE2.checkLoadCommonScript=function(){window.opener&&window.addEventListener("message",function t(e){try{e.source===window.opener&&(a=e.origin,r=CE2.data,a===r.ce_app_url||~(r.hud&&r.hud.launch_origins||[]).indexOf(a)||~(r.survey_launch_origins||r.addon_launch_origins||[]).indexOf(a))&&(CE2.commonScriptForceLoaded=!0,CE2.loadCommonScript(),window.removeEventListener("message",t))}catch(t){CE2.debug(t)}var a,r})},0===CE2.benchmarks.length&&performance.timeOrigin&&(CE2.benchmarks.push({name:"navigation",startedAt:Math.trunc(performance.timeOrigin)}),CE2.benchmark.start("navigation|crazyegg")),CE2.debug("[Loading] Boot"),CE2.userDataStatus)throw Error("CE: multiple userscripts installed");"undefined"!=typeof CE_USER_DATA_URL&&CE_USER_DATA_URL?CE2.loadUserData():"undefined"!=typeof CE_USER_DATA&&CE_USER_DATA?CE2.loadUserDataInline():CE2.debugEnabled()&&CE2.debug("Missing CE_USER_DATA_URL");