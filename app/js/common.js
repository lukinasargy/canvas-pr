
  function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    
    ctx.fillStyle = "rgb(255, 0, 0)";
    ctx.fillRect(100,100,100,100);
    
    ctx.fillStyle = "rgb(255, 60, 60)";
    ctx.fillRect(0,0,100,100);
    
    ctx.fillStyle = "rgba(0, 254, 0 , 0.5)";
    ctx.fillRect(50,100,50,100);
    ctx.strokeStyle = "rgb(0,0,0)";
    ctx.strokeRect(50,100,50,100);
    
    ctx.fillStyle = "rgba(0, 254, 0 , 0.5)";
    ctx.fillRect(30,30,50,100);
    }
  };
