(function () {
  const canvas = document.getElementById("acceleration");
  const ctx = canvas.getContext("2d");

  const ball = new Ball();
  ball.y = canvas.height / 2;
  ball.x = canvas.width / 2;
  let vx = 0;
  let ax = 0;
  let vy = 0;
  let ay = 0;
  const gravity = 0.02;

  window.addEventListener("keydown", (event) => {
    switch (event.code) {
      case "ArrowLeft":
        ax = -0.1;
        break;

      case "ArrowRight":
        ax = 0.1;
        break;

      case "ArrowUp":
        ay = -0.1;
        break;

      case "ArrowDown":
        ay = 0.1;
        break;

      default:
        break;
    }
  });

  window.addEventListener("keyup", function () {
    ax = 0;
    ay = 0;
  });

  (function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ball.draw(ctx);

    vx += ax;
    ball.x += vx;

    vy += ay;
    vy += gravity;
    ball.y += vy;

    requestAnimationFrame(animate);
  })();
})();
