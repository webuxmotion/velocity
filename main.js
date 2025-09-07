const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
const mouse = utils.captureMouse(canvas);
const arrow = new Arrow();

arrow.x = canvas.width / 2;
arrow.y = canvas.height / 2;

const ball = new Ball();
const pixelPerFrame = 3;

const arrowSpeed = 2;


var obj = {
    angle: 45
};
const gui = new dat.GUI();
gui.remember(obj);

gui.add(obj, 'angle').min(0).max(360).step(1);

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let vx = Math.cos(obj.angle * Math.PI / 180) * pixelPerFrame;
    let vy = Math.sin(obj.angle * Math.PI / 180) * pixelPerFrame;
    
    ball.x += vx;
    ball.y += vy;
    ball.draw(ctx);

    const dx = mouse.x - arrow.x;
    const dy = mouse.y - arrow.y;

    const angle = Math.atan2(dy, dx);

    const arrowVx = Math.cos(angle) * arrowSpeed;
    const arrowVy = Math.sin(angle) * arrowSpeed;

    arrow.x += arrowVx;
    arrow.y += arrowVy;

    arrow.rotation = angle;
    arrow.draw(ctx);

    requestAnimationFrame(animate);
}

animate();