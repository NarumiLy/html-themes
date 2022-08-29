
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
    function stars(x, y, r, count) {
        this.y = y;
        this.x = x;
        this.r = r;
        this.count = count;
        ctx.fillStyle = "white";
        let circle = Math.PI * 2;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, circle, false);
        ctx.fill()
    }

    stars.prototype.move = function () {

        this.y -= 0.20;

        /* if() {
            this.x = this.x - 0.20;
        } else {
            this.x = this.x + 0.20;
        } */
        this.count += 1;
        if(this.y <= 0 ) this.y = canvas.height;
        stars(this.x, this.y, this.r, this.count)

    }
    let i = 0;
    let star = [];
    while (i < 50) {
        star[i] = new stars(Math.abs(Math.floor(Math.random() * 1900)), Math.abs(Math.floor(Math.random() * 1050)), Math.floor(Math.random() * 3)+1, 0);
        i++;
    }

    function move() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        for(const ii in star) {
            star[ii].move();
    }}
return setInterval(move, 0);

}
