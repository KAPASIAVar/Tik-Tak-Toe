var flag = 1;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var i = 0;
function Set_value(x) {
    if (flag % 2 == 0) {
        document.getElementById(x).innerHTML = "X";
        document.getElementById(x).disabled = true;
    }
    else {
        document.getElementById(x).innerHTML = "O";
        document.getElementById(x).disabled = true;
    }

    update_value(x)
    check_result()
    flag++;

}
function update_value(m) {
    if (flag % 2 == 1) {
        if (m == 1) {
            a = 1
            console.log("a->", a);
        }
        else if (m == 2) {
            b = 1
            console.log("b->", b);
        }
        else if (m == 3) {
            c = 1
            console.log("c->", c);
        }
        else if (m == 4) {
            d = 1
            console.log("d->", d);
        }
        else if (m == 5) {
            e = 1
            console.log("e->", e);
        }
        else if (m == 6) {
            f = 1
            console.log("f->", f);
        }
        else if (m == 7) {
            g = 1
            console.log("g->", g);
        }
        else if (m == 8) {
            h = 1
            console.log("h->", h);
        }
        else {
            i = 1
            console.log("i->", i);
        }


    }
    else {
        if (m == 1) {
            a = 2
            console.log("a->", a);
        }
        else if (m == 2) {
            b = 2
            console.log("b->", b);
        }
        else if (m == 3) {
            c = 2
            console.log("c->", c);
        }
        else if (m == 4) {
            d = 2
            console.log("d->", d);
        }
        else if (m == 5) {
            e = 2
            console.log("e->", e);
        }
        else if (m == 6) {
            f = 2
            console.log("f->", f);
        }
        else if (m == 7) {
            g = 2
            console.log("g->", g);
        }
        else if (m == 8) {
            h = 2
            console.log("h->", h);
        }
        else {
            i = 2
            console.log("i->", i);
        }
    }
}
var Winner = false
function check_result() {
    if (a == b && b == c && c == a && a != 0 && b != 0 && c != 0) {
        Winner = true
        Result(a);
    }
    else if (a == d && d == g && g == a && a != 0 && d != 0 && g != 0) {
        Winner = true
        Result(a);
    }
    else if (c == f && f == i && i == c && i != 0 && f != 0 && c != 0) {
        Winner = true
        Result(c);
    }
    else if (b == e && e == h && h == b && b != 0 && e != 0 && h != 0) {
        Winner = true
        Result(b);
    }
    else if (g == h && h == i && i == g && g != 0 && h != 0 && i != 0) {
        Winner = true
        Result(g);
    }
    else if (d == e && e == f && d != 0 && e !== 0 && f != 0) {
        Winner = true
        Result(d);

    }
    else if (a == e && e == i && i == a && a != 0 && e != 0 && i != 0) {
        Winner = true
        Result(a);
    }
    else if (c == e && e == g && g == c && c != 0 && e != 0 && g != 0) {
        Winner = true
        Result(c);

    }
    else if (Winner == false && flag == 9) {
        document.getElementById("result").innerHTML = "Match Draw";
        document.getElementById("result").className = "alert alert-success text-center";
        disable_buttons();
        
        mySound = new sound("oooh-ooh-hoo-hoo-103144.mp3");
        mySound.play();
    }

}
function Result(m) {
    if (Winner == true) {
        if (m == 1) {
            
            document.getElementById("result").innerHTML = "Player 1 Wins";
            document.getElementById("result").className = "alert alert-success text-center";
            startConfetti();
            mySound = new sound("claps-44774.mp3");
            mySound.play();
             
            disable_buttons();
        }
        else if (m == 2) {
            
            document.getElementById("result").innerHTML = "Player 2 Wins";
            document.getElementById("result").className = "alert alert-success text-center";
            startConfetti();
            mySound = new sound("claps-44774.mp3");
            mySound.play();
            disable_buttons();
        }
    }


}
function disable_buttons() {
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("4").disabled = true;
    document.getElementById("5").disabled = true;
    document.getElementById("6").disabled = true;
    document.getElementById("7").disabled = true;
    document.getElementById("8").disabled = true;
    document.getElementById("9").disabled = true;
}
function startConfetti() {
    const duration = 15 * 10000,
        animationEnd = Date.now() + duration,
        defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        // since particles fall down, start a bit higher than random
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            })
        );
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            })
        );
    }, 250);

}
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  } 