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

    var canvas = document.getElementById("teams");
    var tipcanvas = document.getElementById('tooltip');
    var tipctx = tipcanvas.getContext('2d');

    var waiting = setTimeout(makeCanvas, 1000);
    var offsetX, offsetY;

    var teamOffset = $("#teams").offset();
    offsetX = teamOffset.left;
    offsetY = teamOffset.top;

    // define tooltips for each data point
    var dots = [];
    for (var i = 0; i < data.values.length; i++) {
        dots.push({
            x: data.values[i].X,
            y: data.values[i].Y,
            r: 4,
            rXr: 16,
            color: "red",
            tip: "#text" + (i + 1)
        });
    }

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
        mouseX = parseInt(e.clientX - offsetX);
        mouseY = parseInt(e.clientY - offsetY);
        canvasMouseX = e.clientX - (teamOffset.left - window.pageXOffset);
        canvasMouseY = e.clientY - (teamOffset.top - window.pageYOffset);


        // Put your mousemove stuff here
        var hit = false;
        for (var i = 0; i < dots.length; i++) {
            var dot = dots[i];
            var dx = Math.abs(canvasMouseX - dot.x);
            var dy = Math.abs(canvasMouseY - dot.y);
            if (dx < 5 && dy < 5) {
                alert("#longtran");
                tipcanvas.style.left = (dot.x) + "px";
                tipcanvas.style.top = (dot.y - 40) + "px";
                tipctx.clearRect(0, 0, tipcanvas.width, tipcanvas.height);
                tipctx.fillText($(dot.tip).val(), 5, 15);
                hit = true;
            }
        }
        if (!hit) {
            tipcanvas.style.left = "-200px";
        }
    }

    $("#teams").mousemove(function (e) {
        handleMouseHover(e);
    });

    // Return the x pixel for a canvas point
    function getXPixel(val) {
        return ((canvas.width) / (getMaxX() + 1)) * val + (1.5);
    }

    // Return the y pixel for a canvas point
    function getYPixel(val) {
        return canvas.height - (((canvas.height ) / getMaxY()) * val);
    }

    // Returns the max Y value in our data list
    function getMaxY() {
        var max = 0;

        for (var i = 0; i < data.values.length; i++) {
            if (data.values[i].Y > max) {
                max = data.values[i].Y;
            }
        }

        max += 10 - max % 10;
        return max;
    }

    // Returns the max X value in our data list
    function getMaxX() {
        var max = 0;

        for (var i = 0; i < data.values.length; i++) {
            if (data.values[i].X > max) {
                max = data.values[i].X;
            }
        }

        //max += 10 - max % 10;
        return max;
    }

})();