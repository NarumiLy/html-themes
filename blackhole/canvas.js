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

    let center = { "x": (canvas.width / 2), "y": (canvas.height / 2)  }

    function Dot() {

        this.x = Math.floor(Math.random() * 1200)+400;
        this.y = Math.floor(Math.random() * 1000);
        this.r = 1;
        this.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        this.circle = Math.PI * 2;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, this.circle, false);
        ctx.fill();
    }

    Dot.prototype.move = function () {
        let t = Math.acos((this.x - center.x) / (Math.sqrt(Math.pow((this.x - center.x),2) + Math.pow((this.y - center.y),2)))) + 1;
        let angle = t * Math.PI / 360;
        this.x = (this.x - center.x) * Math.cos(angle) + (this.y - center.y) * Math.sin(angle) + center.x;
        this.y = - (this.x - center.x) * Math.sin(angle) + (this.y - center.y) * Math.cos(angle) + center.y;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, this.circle, false);
        ctx.fill();
    }

    let dot = [];
    let i = 0;

    while(i < 200) {
        dot[i] = new Dot();
        i++;
    }

    function move() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for(const i in dot) {
            dot[i].move();
        }
    }

return setInterval(move, 15);
}