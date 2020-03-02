(function() {
  'use strict';

  var Cookies = window.Cookies.noConflict();

  function changeLang() {
    var lang = this.value;
    var canonical = this.dataset.canonical;
    var path = this.dataset.root;

    Cookies.set('nf_lang', lang, { expires: 365 });
    location.href = path + canonical;
  }
}());
