(function (root, factory) {
  'use strict';
  // Set up Loading appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
    define(['spin'], factory);
  }
  // Next for Node.js or CommonJS.
  else if (typeof exports !== 'undefined') {
    module.exports = factory(require('spin.js'));
  }
  // Finally, as a browser global.
  else {
    root.LoadingMask = factory(root.Spinner);
  }
}(this, function (Spinner) {
  'use strict';

  function LoadingMask(config, target) {
    if (config && config.nodeType === 1) {
      target = config;
      config = undefined;
    }
    config = this.config = config || {};
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

    if (target != null) {
      this.showAt(target);
    }
  }
  LoadingMask.prototype.show = function() {
    this.spinner = new Spinner(this.config.spinnerConfig).spin(this.el);
    this.el.style.display = '';
    return this;
  };
  LoadingMask.prototype.showAt = function(el) {
    this.show();
    el.appendChild(this.el);
    return this;
  };
  LoadingMask.prototype.hide = function() {
    if (this.spinner != null) {
      this.spinner.stop();
    }
    this.el.style.display = 'none';
    return this;
  };
  LoadingMask.prototype.remove = function() {
    this.hide();
    this.el.parentNode.removeChild(this.el);
    delete(this.el);
    return this;
  };

  return LoadingMask;
}));
