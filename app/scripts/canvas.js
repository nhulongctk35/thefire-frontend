(function () {
    // positions of the icons
    var data = {
        values: [{
            code: 'f21d',
            X: 0,
            Y: 0
        },{
            code: 'f21d',
            X: 100,
            Y: 100
        },{
            code: 'f21d',
            X: 150,
            Y: 200
        },{
            code: 'f21d',
            X: 200,
            Y: 100
        }]
    };
    var tipcanvas = document.getElementById('tooltip');
    var tipctx = tipcanvas.getContext('2d');

    var waiting = setTimeout(makeCanvas, 1000);
    var offsetX, offsetY;

    var teamOffset = $("#teams").offset();
    offsetX = teamOffset.left;
    offsetY = teamOffset.top;

    console.log(offsetY);

    function placeIconFont(values, ctx) {
        for (var i = 0; i<values.length; i++) {
            var value = data.values[i];
            // ctx.save();
            // ctx.translate(value.X, value.Y);

            // ctx.fillText(String.fromCharCode(parseInt(value.code,16)), 0, 0);
            ctx.beginPath();
            ctx.arc(value.X, value.Y, 4, 0, Math.PI * 2, true);
            ctx.fill();
            ctx.restore();
        }
    }

    function makeCanvas() {
      
      var canvas = document.getElementById('teams');

      if (canvas.getContext){
     
        var ctx = canvas.getContext('2d');
        ctx.textAlign = "center";
        // ctx.textBaseline="middle";
        ctx.font  = '48px FontAwesome';
        
        ctx.fillStyle = '#000';

        placeIconFont(data.values, ctx);
        // placeIconFont(stackedIcon, 200, 250, ctx);    
        // placeIconFont(stackedIcon2, 250, 200, ctx);        
        
      }
    }

    function handleMouseHover(e) {
        var mouseX = parseInt(e.clientX - offsetX);
        var mouseY = parseInt(e.clientY - offsetY);
        console.log({
            x: mouseX,
            y: mouseY
        });
        var hint = false;
        for(var i = 0; i<data.values.length; i++) {
            var item = data.values[i];
            var dx = Math.abs(item.X);
            var dy = Math.abs(item.Y);
            if (dx < 5 && dy< 5) {
                alert(dx + ":" + dy);
                tipcanvas.style.left = item.X + "px";
                tipcanvas.style.top = item.Y + "px";
                tipctx.clearRect(0, 0, tipcanvas.width, tipcanvas.height);

                tipctx.fillText("test long tran", 5, 15);
                hint = true;
            }
        }
        if (!hint) {
            tipcanvas.style.left = "-200px";
        }
    }

    $("#teams").mousemove(function (e) {
        handleMouseHover(e);
    });

})();