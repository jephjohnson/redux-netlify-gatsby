import * as TweenLite from "gsap/umd/TweenLite";
import * as TweenMax from "gsap/umd/TweenMax";
import * as Modifiers from "gsap/umd/ModifiersPlugin"; 
import * as Draggable from "gsap/umd/Draggable";
import * as ThrowPropsPlugin from "gsap/umd/ThrowPropsPlugin";

var Slider = (function() {
  return {
      init: function() { 
        console.log("connect")
        var $overflow = document.getElementById("overflow");
        var $viewport = document.getElementsByClassName("viewport");
        var $wrapper  = document.getElementsByClassName("wrapper");
        var $boxes    = document.getElementsByClassName("boxes");
        var $proxy    = document.getElementById("box1");

        var numBoxes  = 3;  
        var boxWidth  = 500;
        var boxHeight = 250;  
        var imgWidth  = boxWidth  - 6;
        var imgHeight = boxHeight - 14;
        var viewWidth = $viewport[0].offsetWidth;
        var wrapWidth = numBoxes * boxWidth;
        var progress  = 0;

        var xMin = 0;
        var xMax = 0;

        TweenLite.set([$wrapper, $viewport], { height: boxHeight, xPercent: -50 });
        TweenLite.set($boxes, { left: -boxWidth });

        TweenLite.set(".box", {
          x:function(i) {
            return i * boxWidth ;
          }
        });

        var animation = TweenMax.to(".box", 1, {
          x: "+=" + wrapWidth, 
          ease: Linear.easeNone,
          paused: true,
          repeat: -1,
          modifiers: {
            x: function(x, target) {
              x = x % wrapWidth;
              target.style.visibility = x - boxWidth > viewWidth ? "hidden" : "visible";
              return x;
            }
          }
        });

        Draggable.create($proxy, {
          type: "x",
          trigger: ".wrapper",
          throwProps: true,
          onDrag: updateProgress,
          onThrowUpdate: updateProgress,
          snap: { 
            x: snapX 
          }
        });

        //document.defaultView.resize(resize);
        window.onresize = () => { resize() };

        function snapX(x) {
          return Math.round(x / boxWidth) * boxWidth;
        }

        function updateProgress() {  
          animation.progress(this.x / wrapWidth);
        }

        function resize() {
          console.log($viewport[0].offsetWidth);
          viewWidth = $viewport[0].offsetWidth;
          animation.render(animation.time(), false, true);
        }

      }
  };
}());

export default Slider;
