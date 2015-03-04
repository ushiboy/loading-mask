(function() {
  'use strict';
  var LoadingMask = require('../../loading-mask');

  var loadingBody = new LoadingMask(document.body);
  var loading1 = new LoadingMask();
  var loading2 = new LoadingMask();
  loading1.showAt(document.getElementById('panel-1st'));
  loading2.showAt(document.getElementById('panel-3rd'));
  setTimeout(function() {
    loadingBody.remove();
  }, 3000);

  setTimeout(function() {
    loading1.hide();
    setTimeout(function() {
      loading1.show();
    }, 1000);
  }, 5000);
  setTimeout(function() {
    loading2.remove();
  }, 7000);

})(this);
