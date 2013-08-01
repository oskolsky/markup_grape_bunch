var Marker = function() {

  this.initialize = function(text) {    
    this.imgObj = document.getElementById('marker');
    this.createOn();
    this.drawImg();
    this.drawText(text);
    this.getPNG();
    return this.dataURL;
  };

  this.createOn = function() {
    this.canvas = document.createElement('canvas'),
    this.ctx    = this.canvas.getContext('2d');
    this.canvas.width  = 54;
    this.canvas.height = 72;
    document.getElementById('canvas').appendChild(this.canvas);
    return this;
  };

  this.drawImg = function() {
    this.ctx.drawImage(this.imgObj, 0, 0);
    return this;
  };

  this.drawText = function(text) {
    this.ctx.fillStyle = '#fff';
    this.ctx.font = 'bold 14px Arial';
    this.ctx.fillText(text, 28, 33);
    return this;
  };

  this.getPNG = function() {
    this.dataURL = this.canvas.toDataURL();
    return this;
  };

};