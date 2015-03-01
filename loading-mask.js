(function (root, factory) {
  'use strict';
  // Set up Loading appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
    define(['spin.js', 'exports'], function(Spinner, exports) {
      root.LoadingMask =  factory(root, Spinner);
    });
  }
  // Next for Node.js or CommonJS.
  else if (typeof exports !== 'undefined') {
    exports = factory(root, require('spin.js')).LoadingMask;
  }
  // Finally, as a browser global.
  else {
    root.LoadingMask = factory(root, root.Spinner);
  }
}(this, function (root, Spinner) {
  'use strict';

  function LoadingMask(config) {
    config = config || {};
    this.el = document.createElement('div');
    this.el.className = 'loading-mask';

    var overlay = document.createElement('div');
    overlay.style.backgroundColor = config.backgroundColor || '#000000';
    overlay.style.zIndex = 2000000000;
    overlay.style.opacity = config.opacity || 0.5;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.position = 'absolute';
    overlay.style.top = '0px';
    overlay.style.left = '0px';
    this.el.appendChild(overlay);

    var spinner = new Spinner(config.spinnerConfig).spin();
    this.el.appendChild(spinner.el);
  }
  LoadingMask.prototype.show = function() {
    this.el.style.display = '';
    return this;
  };
  LoadingMask.prototype.hide = function() {
    this.el.style.display = 'none';
    return this;
  };
  LoadingMask.prototype.destroy = function() {
    this.el.parentNode.removeChild(this.el);
    delete(this.el);
    return this;
  };

  root.LoadingMask = LoadingMask;

  return LoadingMask;
}));
