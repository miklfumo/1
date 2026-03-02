const header=document.querySelector('.site-header');
const btn=document.querySelector('.menu-toggle');
const links=document.querySelector('.nav-links');
btn?.addEventListener('click',()=>{const open=links.classList.toggle('open');btn.setAttribute('aria-expanded',open);});
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>50));
if (window.smartCaptcha) {
  window.smartCaptcha.render('smartcaptcha-container', {
    sitekey: 'YOUR_SMARTCAPTCHA_SITEKEY',
    callback: token => { const i=document.getElementById('smart-token'); if(i) i.value=token; }
  });
}
