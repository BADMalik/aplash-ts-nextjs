"use client";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import anime from "animejs";
import "reactjs-popup/dist/index.css";
const ScrambleComponentNoSSR = dynamic(() => import("../components/scramble"), {
  ssr: false,
});

// ------------

const Home = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const phrases = [
      "APLASH OFFICIAL",
      "UNLIMITED CHOICES",
      "SIMPLE IDEA   BEST SOLUTIONS",
      "CHOOSE US",
    ];

    // const el = document.querySelector(".text-home");
    // class TextScramble {
    //   constructor(el) {
    //     this.el = el;
    //     this.chars = "!<>@%&-_\\/[]{}—=+*^?#________";
    //     this.update = this.update.bind(this);
    //   }
    //   setText(newText) {
    //     const oldText = this.el.innerText;
    //     const length = Math.max(oldText.length, newText.length);
    //     const promise = new Promise((resolve) => (this.resolve = resolve));
    //     this.queue = [];
    //     for (let i = 0; i < length; i++) {
    //       const from = oldText[i] || "";
    //       const to = newText[i] || "";
    //       const start = Math.floor(Math.random() * 40);
    //       const end = start + Math.floor(Math.random() * 40);
    //       // sleep(2000);
    //       this.queue.push({ from, to, start, end });
    //     }
    //     cancelAnimationFrame(this.frameRequest);
    //     this.frame = 0;
    //     this.update();
    //     return promise;
    //   }
    //   update() {
    //     let output = "";
    //     let complete = 0;
    //     for (let i = 0, n = this.queue.length; i < n; i++) {
    //       let { from, to, start, end, char } = this.queue[i];
    //       if (this.frame >= end) {
    //         complete++;
    //         output += to;
    //       } else if (this.frame >= start) {
    //         if (!char || Math.random() < 0.28) {
    //           char = this.randomChar();
    //           this.queue[i].char = char;
    //         }
    //         output += `<span class="dud">${char}</span>`;
    //       } else {
    //         output += from;
    //       }
    //       // sleep(2000);
    //     }
    //     this.el.innerHTML = output;
    //     if (complete === this.queue.length) {
    //       this.resolve();
    //     } else {
    //       this.frameRequest = requestAnimationFrame(this.update);
    //       this.frame++;
    //     }
    //   }
    //   randomChar() {
    //     return this.chars[Math.floor(Math.random() * this.chars.length)];
    //   }
    // }
    // const fx = new TextScramble(el);

    // let counter = 0;
    // const next = () => {
    //   fx.setText(phrases[counter]).then(() => {
    //     setTimeout(next, 2000);
    //   });
    //   counter = (counter + 1) % phrases.length;
    // };

    // window.onload = function () {
    //   next();
    // };

    // function sleep(milliseconds) {
    //   const date = Date.now();
    //   let currentDate = null;
    //   do {
    //     currentDate = Date.now();
    //   } while (currentDate - date < milliseconds);
    // }

    {
      /* window.onload = function(){
		next();
		$(function() {
			$('.intro').addClass('go');

			$('.reload').click(function() {
				$('.intro').removeClass('go').delay(200).queue(function(next) {
					$('.intro').addClass('go');
					next();
				});
			});
		})
	} */
    }

    var c = document.getElementById("c");
    var ctx = c.getContext("2d");
    var cH;
    var cW;
    var bgColor = "#ffffff";
    var animations = [];
    var circles = [];

    var colorPicker = (function () {
      var colors = ["#e1e8f6", "#FFFFFF", "#f0d7b2", "#b7e2db"];
      var txt_colors = ["#3c4759", "#000000", "#56534d", "#3e5f59"];
      var index = 0;
      function next() {
        index = index++ < colors.length - 1 ? index : 0;
        return colors[index];
      }
      function current_txt() {
        return txt_colors[index];
      }
      function current() {
        return colors[index];
      }
      return {
        next: next,
        current_txt: current_txt,
        current: current,
      };
    })();

    function removeAnimation(animation) {
      var index = animations.indexOf(animation);
      if (index > -1) animations.splice(index, 1);
    }

    function calcPageFillRadius(x, y) {
      var l = Math.max(x - 0, cW - x);
      var h = Math.max(y - 0, cH - y);
      return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
    }

    function addClickListeners() {
      document.getElementById("c").addEventListener("touchstart", handleEvent);
      // document.getElementById('c').addEventListener("mousedown", handleEvent);
      document.getElementById("c").addEventListener("click", handleEvent);
    }

    function handleEvent(e) {
      let randX = getRandom("x");
      let randY = getRandom("y");

      if (e.touches) {
        e.preventDefault();
        e = e.touches[0];
      }
      var currentColor = colorPicker.current();
      var nextColor = colorPicker.next();
      var targetR = calcPageFillRadius(randX, randY);
      var rippleSize = Math.min(200, cW * 0.4);
      var minCoverDuration = 750;
      // jQuery('.text-stroke-2').css('stroke', colorPicker.current_txt());
      //   jQuery(".text").css("color", colorPicker.current_txt());
      console.log(randX, " : ", e.pageX);
      console.log(randY, " : ", e.pageY);

      var pageFill = new Circle({
        x: randX,
        y: randY,
        r: 0,
        fill: nextColor,
      });
      var fillAnimation = anime({
        targets: pageFill,
        r: targetR,
        duration: Math.max(targetR / 2, minCoverDuration),
        easing: "easeOutQuart",
        complete: function () {
          bgColor = pageFill.fill;
          removeAnimation(fillAnimation);
          // console.log('colorPicker.current_txt() : ', colorPicker.current_txt(), " : " , currentColor);
        },
      });

      var ripple = new Circle({
        x: randX,
        y: randY,
        r: 0,
        fill: currentColor,
        stroke: {
          width: 3,
          color: currentColor,
        },
        opacity: 1,
      });
      var rippleAnimation = anime({
        targets: ripple,
        r: rippleSize,
        opacity: 0,
        easing: "easeOutExpo",
        duration: 900,
        complete: removeAnimation,
      });

      var particles = [];
      for (var i = 0; i < 32; i++) {
        var particle = new Circle({
          x: randX,
          y: randY,
          fill: currentColor,
          r: anime.random(24, 48),
        });
        particles.push(particle);
      }
      var particlesAnimation = anime({
        targets: particles,
        x: function (particle) {
          return particle.x + anime.random(rippleSize, -rippleSize);
        },
        y: function (particle) {
          return (
            particle.y + anime.random(rippleSize * 1.15, -rippleSize * 1.15)
          );
        },
        r: 0,
        easing: "easeOutExpo",
        duration: anime.random(2000, 4300),
        complete: removeAnimation,
      });
      animations.push(fillAnimation, rippleAnimation, particlesAnimation);
    }

    function extend(a, b) {
      for (var key in b) {
        if (b.hasOwnProperty(key)) {
          a[key] = b[key];
        }
      }
      return a;
    }

    var Circle = function (opts) {
      extend(this, opts);
    };

    Circle.prototype.draw = function () {
      ctx.globalAlpha = this.opacity || 1;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
      if (this.stroke) {
        ctx.strokeStyle = this.stroke.color;
        ctx.lineWidth = this.stroke.width;
        ctx.stroke();
      }
      if (this.fill) {
        ctx.fillStyle = this.fill;
        ctx.fill();
      }
      ctx.closePath();
      ctx.globalAlpha = 1;
    };

    var animate = anime({
      duration: Infinity,
      update: function () {
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, cW, cH);
        animations.forEach(function (anim) {
          anim.animatables.forEach(function (animatable) {
            animatable.target.draw();
          });
        });
      },
    });

    var resizeCanvas = function () {
      cW = window.innerWidth;
      cH = window.innerHeight;
      c.width = cW * devicePixelRatio;
      c.height = cH * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    (function init() {
      resizeCanvas();
      if (window.CP) {
        window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 6000;
      }
      window.addEventListener("resize", resizeCanvas);
      addClickListeners();
      if (!!window.location.pathname.match(/fullcpgrid/)) {
        // startFauxClicking();
      }
      handleInactiveUser();
    })();

    function handleInactiveUser() {
      var inactive = setTimeout(function () {
        fauxClick(cW / 2, cH / 2);
      }, 2000);

      function clearInactiveTimeout() {
        clearTimeout(inactive);
        document.removeEventListener("mousedown", clearInactiveTimeout);
        document.removeEventListener("touchstart", clearInactiveTimeout);
      }

      document.addEventListener("mousedown", clearInactiveTimeout);
      document.addEventListener("touchstart", clearInactiveTimeout);
    }

    function startFauxClicking() {
      setTimeout(function () {
        fauxClick(
          anime.random(cW * 0.2, cW * 0.8),
          anime.random(cH * 0.2, cH * 0.8)
        );
        startFauxClicking();
      }, anime.random(200, 900));
    }

    function fauxClick(x, y) {
      var fauxClick = new Event("mousedown");
      fauxClick.pageX = x;
      fauxClick.pageY = y;
      document.dispatchEvent(fauxClick);
    }
    const intervalId = setInterval(() => {
      if (canvasRef.current) {
        canvasRef.current.click();
      }
    }, 5000);

    function getRandom(which) {
      console.clear();
      console.log(
        "Your screen resolution is: " +
          window.screen.width * window.devicePixelRatio +
          " x " +
          window.screen.height * window.devicePixelRatio
      );
      var screenHeight = window.screen.height * window.devicePixelRatio;
      var screenWidth = window.screen.width * window.devicePixelRatio;
      var random = 0;
      if (which == "y") {
        random =
          screenHeight < screenWidth ? parseInt(screenHeight) * 0.8 : 500;
      } else {
        random = screenHeight < screenWidth ? parseInt(screenWidth) * 0.5 : 300;
      }
      var maxRandom = Math.floor(Math.random() * random);
      return maxRandom;
    }
    return () => {
      // clearInterval(scrambleInterval);
      window.removeEventListener("resize", handleResize);
      clearInterval(intervalId);
      window.removeEventListener("touchstart", handleEvent);
      window.removeEventListener("click", handleEvent);
    };
  }, []);

  return (
    <>
      <main
        className="page-background"
        style={{
          position: "relative",
        }}
      >
        <canvas ref={canvasRef} id="c" />
        <ScrambleComponentNoSSR />
      </main>
    </>
  );
};

export default Home;
