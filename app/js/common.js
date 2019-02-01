
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
    ctx.arc(100,150,5, 0, Math.PI*2, true);
    ctx.arc(200,150,5, 0, Math.PI*2, true);
    ctx.fillStyle = "rgb(455,10,0)";
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(150,150,20,0, Math.PI, false);
    ctx.strokeStyle = "rgb(455,10,0)";
    ctx.stroke();
    
    //hat
    ctx.beginPath();
    ctx.moveTo(100,80);
    ctx.lineTo(150,0);
    ctx.lineTo(200,80);
    ctx.lineTo(100,80);
    ctx.fillStyle = "rgb(455,10,0)";
    ctx.fill();
    
    
    ctx.beginPath();
    ctx.moveTo(90,80)
    ctx.quadraticCurveTo(100,70,150,70);
    ctx.quadraticCurveTo(210,70,210,80);
    ctx.quadraticCurveTo(200,90,150,90);
    ctx.quadraticCurveTo(90,90,90,80);
    ctx.fillStyle = "#fff";
    ctx.fill();

    
    
    //snow
    for (var i = 1; i<10;i++) {
      for (var j = 1; j<10;j++) {
        ctx.beginPath();
        ctx.arc(i*30,j*30,3, 0, Math.PI*2, true);
        ctx.fillStyle = "#fff";
        ctx.fill();
      }
      
    }
    
    
    //path Object
    
    

    
    
    }
  };
