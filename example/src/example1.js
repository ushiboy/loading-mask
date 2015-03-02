(function() {
  'use strict';
  var LoadingMask = require('../../loading-mask');

  var loadingBody = new LoadingMask();
  var loading1 = new LoadingMask();
  var loading2 = new LoadingMask();
  document.body.appendChild(loadingBody.el);
  document.getElementById('panel-1st').appendChild(loading1.el);
  document.getElementById('panel-3rd').appendChild(loading2.el);
  setTimeout(function() {
    loadingBody.remove();
  }, 3000);
  setTimeout(function() {
    loading1.remove();
  }, 5000);
  setTimeout(function() {
    loading2.remove();
  }, 7000);

})(this);
