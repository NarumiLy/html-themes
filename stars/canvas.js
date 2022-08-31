
window.onload = function () {
    let dpi = window.devicePixelRatio;
    const canvas = document.getElementById("theme");
    let ctx = canvas.getContext("2d");
    fix_dpi();

    function fix_dpi() {
        //get CSS height
        //the + prefix casts it to an integer
        //the slice method gets rid of "px"
        let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);//get CSS width
        let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);//scale the canvas
        canvas.setAttribute('height', style_height * dpi);
        canvas.setAttribute('width', style_width * dpi);
        // thanks to Zak Frisch
    }

    function stars(x, y, r, count, boo) {
        this.y = y;
        this.x = x;
        this.r = r;
        this.count = count;
        this.boo = boo;
        ctx.fillStyle = "white";
        ctx.globalAlpha = 0.6
        let circle = Math.PI * 2;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, circle, false);
        ctx.fill()
    }

    stars.prototype.move = function () {
        this.y -= 0.20;

       /* if(this.count % 200 === 0) {
            this.count = 0
            if(this.boo === true) {
                this.boo = false
            } else {
                this.boo = true;
            }
        }

        if(this.boo === true) {
            if(this.count > 160) {

                this.x -= 0.02
            } else if(this.count > 150 && this.count < 160) {
            } else if(this.count > 0 && this.count < 20) {
                this.x -= 0.02

            } else {
                this.x -= 0.05
            }
        } else {
            if(this.count > 160) {

                this.x += 0.02
            } else if(this.count > 150 && this.count < 160) {
            } else if(this.count > 0 && this.count < 20) {
                this.x += 0.02
            } else {
                this.x += 0.05
            }
        }
        this.count += 1; */
        if(this.y <= 0 ) this.y = canvas.height;
        stars(this.x, this.y, this.r, this.count, this.boo)

    }

   /* function constellations(max_star) {

        let circle = Math.PI * 2;
        ctx.fillStyle = "white";
        ctx.globalAlpha = 1;
        let x = Math.abs(Math.floor(Math.random() * 1900));
        let y = Math.abs(Math.floor(Math.random() * 1050));
        let r = Math.floor(Math.random() * 5) + 1;

        let start = [];
        let i = 0;
        while (i < Math.floor(Math.random() * max_star) + 2) {
            if (i >= 1) {
                x = Math.abs(Math.floor(Math.random() * 10)) + star[i - 1].x;
                y = Math.abs(Math.floor(Math.random() * 10)) + star[i - 1].y;
            }
            ctx.beginPath();
            ctx.arc(x, y, r, 0, circle, false);
            ctx.fill();
            start[i] = {"x": x, "y": y}
            i++;
        }
        this.start = start;
    }

    constellations.prototype.rewrite = function () {

        for(let i in this.start) {
            if(i != 0) {
                console.log(i + " test")
                ctx.globalAlpha = 1;
                ctx.strokeStyle = "white";
                ctx.beginPath();
                ctx.moveTo(this.start[i].x, this.start[i].y);
                ctx.lineTo(this.start[i - 1].x, this.start[i - 1].y);
                ctx.stroke();
            }
        }
    } */

    let i = 0;
    let star = [];
   // let constellation = [];

    while (i < 50) {
        star[i] = new stars(Math.abs(Math.floor(Math.random() * 1900)), Math.abs(Math.floor(Math.random() * 1050)), Math.floor(Math.random() * 3)+1, 0, true);
        i++;
    }

   /* i = 0;
    while(i < 5) {
        constellation[i] = new constellations(2);
        constellation[i].rewrite();
        i++;
    } */

    function move() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
       /* for(const i in constellation) {
            constellation[i].rewrite();
        } */
        for(const i in star) {
            star[i].move();
        }
    }

return setInterval(move, 0);

}
