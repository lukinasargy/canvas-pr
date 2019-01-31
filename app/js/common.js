
  function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    
    ctx.fillStyle = "rgb(255, 0, 0)";
    ctx.fillRect(100,100,100,100);
    
    ctx.fillStyle = "rgb(255, 60, 60)";
    ctx.fillRect(0,0,100,100);
    
    ctx.fillStyle = "rgba(0, 254, 0 , 0.5)";
    ctx.fillRect(150,150,150,150);
    ctx.strokeStyle = "rgb(100,150,0)";
    ctx.strokeRect(150,150,150,150);
    
    ctx.fillStyle = "rgba(0, 254, 0 , 0.5)";
    ctx.clearRect(50,140,150,100);
    
    ctx.beginPath();
    ctx.moveTo(0,0);    
    ctx.lineTo(100,80);
    ctx.lineTo(150,0);
    ctx.lineTo(200,80);
    ctx.lineTo(300, 0);
    ctx.lineTo(250, 150);
    ctx.lineTo(300,300);
    ctx.lineTo(150,230);
    ctx.lineTo(0,300);
    ctx.lineTo(50,150);
    ctx.lineTo(0,0);
    ctx.strokeStyle = "rgb(455,10,0)";
    ctx.stroke();
    ctx.fillStyle = "pink";
    ctx.fill();
   
    
    ctx.beginPath();
//    ctx.moveTo(105, 150);
    ctx.arc(100,150,5, 0, Math.PI*2, true);
//    ctx.moveTo(205, 150);
    ctx.arc(200,150,5, 0, Math.PI*2, true);
    ctx.fillStyle = "rgb(455,10,0)";
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(150,150,20,0, Math.PI, false);
    ctx.strokeStyle = "rgb(455,10,0)";
    ctx.stroke();

    
    }
  };
