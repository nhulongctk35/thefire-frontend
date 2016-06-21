$(function(){
    var cw,ch;

    draw("canvas", "\uf21d");
    draw("canvas2", "\uF1ae"); // map
    draw("canvas3", "\uF1ae"); // home
    draw("canvas4", "\uF1ae"); // coffee
    draw("canvas5", "\uf21d"); // code
    draw("canvas6", "\uF1ae"); // a man
    draw("canvas7", "\uf21d");
    draw("canvas8", "\uf21d"); // laptop
    draw("canvas9", "\uf21d");

    function draw(id, icon, color) {
        var canvas=document.getElementById(id);
        var ctx=canvas.getContext("2d");

        if (!color) {
            color = "white";
        }
        AwesomeFontOnload(start.bind(ctx, icon, color),3000);
    }

    function start(icon, color){
        this.font='48px fontawesome';
        this.fillStyle = color;

        this.fillText(icon,20,75);
    }

    function AwesomeFontOnload(callback,failAfterMS){
        var c=document.createElement("canvas");
        var cctx=c.getContext("2d");
        var ccw,cch;
        var fontsize=36;
        var testCharacter='\uF047';
        ccw=c.width=fontsize*1.5;
        cch=c.height=fontsize*1.5;
        cctx.font=fontsize+'px fontawesome';
        cctx.textAlign='center';
        cctx.textBaseline='middle';
        var startCount=pixcount();
        var t1=performance.now();
        var failtime=t1+failAfterMS;
        //
        requestAnimationFrame(fontOnload);
        //
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
            cctx.fillText(testCharacter,ccw/2,cch/2);
            var data=cctx.getImageData(0,0,ccw,cch).data;
            var count=0;
            for(var i=3;i<data.length;i+=4){
                if(data[i]>10){count++;}
            }
            return(count);
        }
    }

}); // end $(function(){});