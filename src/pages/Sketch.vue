<template>
  <div class="sketch">
    <h1>hello</h1>
    <vue-p5 
      @setup="setup"
      @draw="draw">
    </vue-p5>
  </div>
</template>

<script>
import VueP5 from "vue-p5";
export default {
  components: {
    VueP5,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      bgcolor: [255],
      drops: [],
    };
  },
  methods: {
    windowResized(sketch) {
      sketch.resizeCanvas(this.windowWidth, this.windowHeight);
    },
    setup(sketch) {
      let canvas = sketch.createCanvas(this.windowWidth, this.windowHeight);
      canvas.position(0, 0);
      canvas.style("z-index", "-1");

      for (let i = 0; i < 50; i++) {
        this.drops[i] = new this.drop(Math.floor(Math.random() * 5));
      }
    },
    draw(sketch) {
      sketch.background(...this.bgcolor);
      for (let i = 0; i < this.drops.length; i++) {
        this.drops[i].fall()  ;
        this.drops[i].show();
      }
    },

    // METHOD untuk Drop
    drop(index) {
      this.index = index;
      this.vel = Math.floor(Math.random(3, 6));
      this.colors = ['#6CD9CC', '#FB6578', '#FE5A8F', '#FC9574', '#9A8DF2'];
      this.len = Math.floor(Math.random(20, 25));
      this.x = Math.floor(Math.random() * this.windowWidth);
      this.y = Math.floor(Math.random(-500, 50));

      this.fall = function() {
        this.y += this.vel;
        if (this.y > this.windowHeight) {
          this.y = Math.floor(Math.random(-200, -100));
          this.vel = Math.floor(Math.random(3, 6));
        }
      }

      this.show = function(sketch) {
        // sketch.strokeWeight(2);
        sketch.stroke(this.colors[this.index]);
        sketch.line(this.x, this.y, this.x - this.len / 3, this.y + this.len);
        sketch.stroke(0);
        // sketch.strokeWeight(1);
      }
    },
  },
  render(h) {
    return h(VueP5);
  },
};
</script>
