;window.CloudflareApps=window.CloudflareApps||{};CloudflareApps.siteId="c556657899fd6b0281b60e8cf4b4fa31";CloudflareApps.installs=CloudflareApps.installs||{};;(function(){'use strict'
CloudflareApps.internal=CloudflareApps.internal||{}
var errors=[]
CloudflareApps.internal.placementErrors=errors
var errorHashes={}
function noteError(options){var hash=options.selector+'::'+options.type+'::'+(options.installId||'')
if(errorHashes[hash]){return}
errorHashes[hash]=true
errors.push(options)}
var initializedSelectors={}
var currentInit=false
CloudflareApps.internal.markSelectors=function markSelectors(){if(!currentInit){check()
currentInit=true
setTimeout(function(){currentInit=false})}}
function check(){var installs=window.CloudflareApps.installs
for(var installId in installs){if(!installs.hasOwnProperty(installId)){continue}
var selectors=installs[installId].selectors
if(!selectors){continue}
for(var key in selectors){if(!selectors.hasOwnProperty(key)){continue}
var hash=installId+'::'+key
if(initializedSelectors[hash]){continue}
var els=document.querySelectorAll(selectors[key])
if(els&&els.length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId})
initializedSelectors[hash]=true
continue}else if(!els||!els.length){continue}
initializedSelectors[hash]=true
els[0].setAttribute('cfapps-selector',selectors[key])}}}
CloudflareApps.querySelector=function querySelector(selector){if(selector==='body'||selector==='head'){return document[selector]}
CloudflareApps.internal.markSelectors()
var els=document.querySelectorAll('[cfapps-selector="'+selector+'"]')
if(!els||!els.length){noteError({type:'select:not-found:by-attribute',selector:selector})
els=document.querySelectorAll(selector)
if(!els||!els.length){noteError({type:'select:not-found:by-query',selector:selector})
return null}else if(els.length>1){noteError({type:'select:too-many:by-query',selector:selector})}
return els[0]}
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector})}
return els[0]}}());(function(){'use strict'
var prevEls={}
CloudflareApps.createElement=function createElement(options,prevEl){options=options||{}
CloudflareApps.internal.markSelectors()
try{if(prevEl&&prevEl.parentNode){var replacedEl
if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId]}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl)
delete prevEls[prevEl.cfAppsElementId]}else{prevEl.parentNode.removeChild(prevEl)}}
var element=document.createElement('cloudflare-app')
var container
if(options.pages&&options.pages.URLPatterns&&!CloudflareApps.matchPage(options.pages.URLPatterns)){return element}
try{container=CloudflareApps.querySelector(options.selector)}catch(e){}
if(!container){return element}
if(!container.parentNode&&(options.method==='after'||options.method==='before'||options.method==='replace')){return element}
if(container===document.body){if(options.method==='after'){options.method='append'}else if(options.method==='before'){options.method='prepend'}}
switch(options.method){case'prepend':if(container.firstChild){container.insertBefore(element,container.firstChild)
break}
case'append':container.appendChild(element)
break
case'after':if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling)}else{container.parentNode.appendChild(element)}
break
case'before':container.parentNode.insertBefore(element,container)
break
case'replace':try{var id=element.cfAppsElementId=Math.random().toString(36)
prevEls[id]=container}catch(e){}
container.parentNode.replaceChild(element,container)}
return element}catch(e){if(typeof console!=='undefined'&&typeof console.error!=='undefined'){console.error('Error creating Cloudflare Apps element',e)}}}}());(function(){'use strict'
CloudflareApps.matchPage=function matchPage(patterns){if(!patterns||!patterns.length){return true}
var loc=document.location.host+document.location.pathname
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed
loc=url.host+url.path}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i')
if(re.test(loc)){return true}}
return false}}());CloudflareApps.installs["AopqhZtE2u7s"]={appId:"q7O-RfZss8-Z",scope:{}};;CloudflareApps.installs["AopqhZtE2u7s"].options={"counts":"none","mobileButtonSize":"large","numPreferredServices":5,"position":{"desktopPosition":"right","mobilePosition":"bottom"},"style":"modern","theme":"transparent"};;CloudflareApps.installs["gfoZ2HIhCyJv"]={appId:"nt4L5NPJq1za",scope:{}};;CloudflareApps.installs["gfoZ2HIhCyJv"].options={"blocks":[{"code":"\u003cdiv class=\"aligncenter\" style=\"margin-left:5%;margin-right:5%;\"\u003e\u003ch2 id=\"feedback\"\u003ePlease Tell Me What You Think\u003c/h2\u003e\u003cscript type=\"text/javascript\" src=\"https://s3.amazonaws.com/assets.freshdesk.com/widget/freshwidget.js\"\u003e\u003c/script\u003e\n\u003cstyle type=\"text/css\" media=\"screen, projection\"\u003e\n\t@import url(https://s3.amazonaws.com/assets.freshdesk.com/widget/freshwidget.css); \n\u003c/style\u003e \n\u003ciframe title=\"Feedback Form\" class=\"freshwidget-embedded-form\" id=\"freshwidget-embedded-form\" src=\"https://keechatay.freshdesk.com/widgets/feedback_widget/new?\u0026widgetType=embedded\u0026formTitle=Help+or+Comments\u0026submitThanks=Thank+you+for+your+feedback.\u0026screenshot=Yes\u0026searchArea=no\u0026captcha=yes\" scrolling=\"no\" height=\"500px\" width=\"100%\" frameborder=\"0\" \u003e\n\u003c/iframe\u003e\u003cp style=\"margin-top:-25px;\"\u003e\u003ca style=\"color:#0066cc; font-size:13px;\" href=\"https://shrewdies.com/freshdesk-alternative-to-wordpress-comments/\"\u003eFreshdesk Alternative to WordPress Comments\u003c/a\u003e\u003c/p\u003e\u003c/div\u003e","location":{"method":"append","selector":"article"}},{"code":"","location":{"method":"append","selector":"body"}}]};;CloudflareApps.installs["gfoZ2HIhCyJv"].selectors={"blocks[0].location.selector":"article","blocks[1].location.selector":"body"};;if(CloudflareApps.matchPage(CloudflareApps.installs['gfoZ2HIhCyJv'].URLPatterns)){(function(){'use strict'
if(!document.addEventListener)return
var options=CloudflareApps.installs['gfoZ2HIhCyJv'].options
var elements={}
var prevElements={}
var initialized=false;function updateElements(){options.blocks.forEach(function(block,index){var locationHash=[block.location.selector,block.location.method,index].join('!')
var element
if(elements[locationHash]){element=elements[locationHash]}else{if(block.location.method==='replace'){prevElements[locationHash]=document.querySelector(block.location.selector)}
element=CloudflareApps.createElement(block.location)
elements[locationHash]=element}
element.foundInBlocks=true
element.innerHTML=block.code
var scripts=Array.prototype.slice.call(element.querySelectorAll('script'))
if(scripts){scripts.forEach(function(script){var newScript=document.createElement('script')
for(var key=script.attributes.length;key--;){var attr=script.attributes[key]
if(attr.specified){newScript.setAttribute(attr.name,attr.value)}}
newScript.innerHTML=script.innerHTML
element.replaceChild(newScript,script)})}})
for(var hash in elements){if(!elements[hash].foundInBlocks){if(prevElements[hash]){elements[hash].parentNode.replaceChild(prevElements[hash],elements[hash])
delete prevElements[hash]}else{elements[hash].parentNode.removeChild(elements[hash])}
delete elements[hash]}else{delete elements[hash].foundInBlocks}}}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',function(){if(initialized==false){initialized=true;updateElements();}})}else{updateElements()}
window.CloudflareApps.installs['gfoZ2HIhCyJv'].scope={setOptions:function(nextOptions){options=nextOptions
updateElements()}}}())}(function(){var script = document.createElement('script');script.src = '/cdn-cgi/apps/body/o49v_fTLGNz4PzORlCvXcBDK68M.js';document.head.appendChild(script);})();