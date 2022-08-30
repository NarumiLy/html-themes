
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

    let i = 0;
    let star = [];
    while (i < 50) {
        star[i] = new stars(Math.abs(Math.floor(Math.random() * 1900)), Math.abs(Math.floor(Math.random() * 1050)), Math.floor(Math.random() * 3)+1, 0, true);
        i++;
    }

    function move() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        for(const ii in star) {
            star[ii].move();
    }}

return setInterval(move, 0);

}
