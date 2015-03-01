(function() {

  'use strict';

  var $ = require('jquery');
  var LoadingMask = require('../../loading-mask').LoadingMask;


  var loading1 = new LoadingMask();
  var loading2 = new LoadingMask();
  document.getElementById('panel-1st').appendChild(loading1.el);
  document.getElementById('panel-3rd').appendChild(loading2.el);

  setTimeout(function() {
    loading1.destroy();
  }, 3000);
  setTimeout(function() {
    loading2.destroy();
  }, 3000);

  document.body.appendChild(new LoadingMask().el);


})(this);
