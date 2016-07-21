(function(){
    var fontsize=16;
    var ccw=fontsize*1.5;
    var cch=fontsize*1.5;
    var canvas=document.getElementById("teams");
    var cctx=canvas.getContext("2d");
    // cctx.fillColor = '#333';
    cctx.font=fontsize+'px FontAwesome';
    cctx.textAlign='center';
    // cctx.textBaseline='middle';

    // positions of the icons
    var data = {
        values: [{
            code: '\uf21d',
            X: 50,
            Y: 12
        }, {
            code: '\uF1ae',
            X: 50,
            Y: 100
        }, {
            code: '\uF1ae',
            X: 10,
            Y: 100
        }, {
            code: '\uf21d',
            X: 200,
            Y: 34
        }]
    };

    for (var i = 0; i<data.values.length; i++) {
        var canvas = data.values[i];
        AwesomeFontOnload(start.bind(cctx, canvas.code, canvas.X, canvas.Y));
    }

    function start(icon, x, y){
        cctx.fillText(icon,x,y);
    }

    function AwesomeFontOnload(callback,failAfterMS){
        var startCount=pixcount();
        var t1=performance.now();
        var failtime=t1+failAfterMS;
        requestAnimationFrame(fontOnload);

        function fontOnload(time){
            var currentCount=pixcount();
            if(time>failtime){
                console.log("Font Awsome failed to load after '+failAfterMS+'ms.");
            }else if(currentCount==startCount){
                requestAnimationFrame(fontOnload);
            }else{
                callback();
            }
        }
        //
        function pixcount(){
            cctx.clearRect(0,0,ccw,cch);
            cctx.fillText('\uF047',ccw/2,cch/2);
            var data=cctx.getImageData(0,0,ccw,cch).data;
            var count=0;
            for(var i=3;i<data.length;i+=4){
                if(data[i]>10){count++;}
            }
            return(count);
        }
    }

})();