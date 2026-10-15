(function(){
var KEY='mwConsent',w=window;
w.dataLayer=w.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
var D={ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'granted',security_storage:'granted'};
function map(c){var a=c.analytics?'granted':'denied',m=c.marketing?'granted':'denied';return{analytics_storage:a,ad_storage:m,ad_user_data:m,ad_personalization:m};}
function load(){try{return JSON.parse(localStorage.getItem(KEY));}catch(e){return null;}}
gtag('consent','default',Object.assign({wait_for_update:500},D));
var saved=load();
if(saved)gtag('consent','default',map(saved)); // applied before GTM loads
var T={
nl:{t:'Cookies op Mister Window',p:'Wij gebruiken analytische cookies om onze website te verbeteren en marketingcookies om advertenties te meten. Zonder toestemming plaatsen we ze niet.',a:'Alles accepteren',r:'Alleen noodzakelijk',s:'Instellingen',sv:'Keuze opslaan',n:'Noodzakelijk',nd:'Taalkeuze en formulieren. Altijd actief.',an:'Analytisch',ad:'Anonieme statistieken over websitegebruik.',m:'Marketing',md:'Advertenties meten en relevanter maken.',l:'Privacybeleid'},
en:{t:'Cookies at Mister Window',p:'We use analytics cookies to improve our website and marketing cookies to measure ads. We only set them with your consent.',a:'Accept all',r:'Necessary only',s:'Settings',sv:'Save choice',n:'Necessary',nd:'Language choice and forms. Always on.',an:'Analytics',ad:'Anonymous statistics about website use.',m:'Marketing',md:'Measuring and improving ads.',l:'Privacy policy'}
};
function lang(){var l=localStorage.getItem('siteLang')||'nl';return T[l]?l:'en';}
function save(c){localStorage.setItem(KEY,JSON.stringify(c));gtag('consent','update',map(c));dataLayer.push({event:'consent_update',consent_analytics:c.analytics,consent_marketing:c.marketing});close();}
function links(){var nl=lang()==='nl';document.querySelectorAll('.mw-cookie-link').forEach(function(a){a.textContent=nl?'Cookie-instellingen':'Cookie settings';});}
function close(){var e=document.getElementById('mw-consent');if(e)e.remove();}
function open(det){
 close();var t=T[lang()],c=load()||{analytics:false,marketing:false};
 var b=document.createElement('div');b.id='mw-consent';b.setAttribute('role','dialog');b.setAttribute('aria-label',t.t);
 b.style.cssText='position:fixed;left:12px;right:12px;bottom:12px;z-index:2147483000;max-width:520px;margin:0 auto;background:#fff;color:#13202B;border:1px solid rgba(19,32,43,.12);border-radius:14px;box-shadow:0 12px 40px rgba(19,32,43,.22);padding:18px;font:14px/1.5 Inter,system-ui,sans-serif;';
 var bs='flex:1 1 140px;min-height:44px;padding:10px 14px;border-radius:10px;font:600 14px Inter,system-ui,sans-serif;cursor:pointer;border:2px solid #13202B;';
 var row=function(id,n,d,on,dis){return '<label style="display:flex;gap:12px;align-items:flex-start;padding:8px 0;border-top:1px solid rgba(19,32,43,.1)"><input type="checkbox" id="'+id+'" '+(on?'checked ':'')+(dis?'disabled ':'')+'style="width:22px;height:22px;margin:0;accent-color:#386B66;flex-shrink:0"><span><b>'+n+'</b><br><span style="color:#54626B;font-size:13px">'+d+'</span></span></label>';};
 b.innerHTML='<div style="font:800 17px Archivo,Inter,sans-serif;margin-bottom:6px">'+t.t+'</div><p style="margin:0 0 12px;color:#54626B">'+t.p+' <a href="privacy.html" style="color:#264C48;text-decoration:underline">'+t.l+'</a></p>'+
 '<div id="mw-c-det" style="display:'+(det?'block':'none')+';margin-bottom:12px">'+row('mw-n',t.n,t.nd,true,true)+row('mw-an',t.an,t.ad,c.analytics)+row('mw-mk',t.m,t.md,c.marketing)+'</div>'+
 '<div style="display:flex;flex-wrap:wrap;gap:8px"><button id="mw-acc" style="'+bs+'background:#386B66;border-color:#386B66;color:#fff">'+t.a+'</button><button id="mw-rej" style="'+bs+'background:#fff;color:#13202B">'+t.r+'</button>'+
 '<button id="mw-set" style="'+bs+'background:none;border-color:transparent;text-decoration:underline;flex-basis:100%;min-height:44px">'+(det?t.sv:t.s)+'</button></div>';
 document.body.appendChild(b);
 b.querySelector('#mw-acc').onclick=function(){save({analytics:true,marketing:true});};
 b.querySelector('#mw-rej').onclick=function(){save({analytics:false,marketing:false});};
 b.querySelector('#mw-set').onclick=function(){if(det){save({analytics:b.querySelector('#mw-an').checked,marketing:b.querySelector('#mw-mk').checked});}else open(true);};
}
w.mwConsentOpen=function(){open(true);};
document.addEventListener('DOMContentLoaded',function(){
 links();
 if(!saved)open(false);
 document.addEventListener('click',function(e){if(e.target.closest&&e.target.closest('.lang-opt')&&document.getElementById('mw-consent')){var d=document.getElementById('mw-c-det').style.display==='block';setTimeout(function(){links();if(document.getElementById('mw-consent'))open(d);},50);}else if(e.target.closest&&e.target.closest('.lang-opt')){setTimeout(links,50);}});
 document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('[data-cookie-settings]');if(a){e.preventDefault();open(true);}});
});
})();