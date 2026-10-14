/**
 * ==============================================================================
 * BACKGROUND CANVAS: Interactive Semiconductor Grid & Particle Field
 * ==============================================================================
 * Features:
 * - Floating glowing micro-particles with network interconnects
 * - Simulated digital circuit traces & traveling signal pulses
 * - Subtle desktop mouse-following neon aura
 * - Automatic performance throttling & prefers-reduced-motion support
 * ==============================================================================
 */

(function () {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let circuitPulses = [];
  let mouse = { x: null, y: null, radius: 140, active: false };

  // Accessibility check for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Particle configuration
  const config = {
    particleCount: prefersReducedMotion ? 25 : (window.innerWidth < 768 ? 40 : 85),
    connectionDist: window.innerWidth < 768 ? 90 : 130,
    colors: ['#00f0ff', '#38bdf8', '#818cf8', '#a855f7'],
    circuitGridSize: 120, // grid spacing for circuit bus traces
    pulseInterval: 80 // frames between pulse generations
  };

  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
  });

  // Track mouse on desktop
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  });

  window.addEventListener('mouseleave', () => {
    mouse.active = false;
  });

  // Particle Class
  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * (prefersReducedMotion ? 0.2 : 0.6);
      this.vy = (Math.random() - 0.5) * (prefersReducedMotion ? 0.2 : 0.6);
      this.radius = Math.random() * 2 + 1;
      this.color = config.colors[Math.floor(Math.random() * config.colors.length)];
      this.baseAlpha = Math.random() * 0.5 + 0.3;
      this.alpha = this.baseAlpha;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Wrap around bounds
      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;

      // Mouse interactivity
      if (mouse.active && mouse.x !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 1.5;
          this.x -= (dx / dist) * force;
          this.y -= (dy / dist) * force;
          this.alpha = Math.min(1, this.baseAlpha + 0.4);
        } else {
          this.alpha = this.baseAlpha;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.alpha;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    }
  }

  // Circuit Bus Pulse Class (Simulating electrical signals along bus traces)
  class CircuitPulse {
    constructor() {
      this.reset();
    }

    reset() {
      // Pick a random grid line
      this.isVertical = Math.random() > 0.5;
      if (this.isVertical) {
        this.coord = Math.floor(Math.random() * (width / config.circuitGridSize)) * config.circuitGridSize;
        this.pos = 0;
        this.speed = Math.random() * 3 + 2;
        this.length = Math.random() * 40 + 30;
      } else {
        this.coord = Math.floor(Math.random() * (height / config.circuitGridSize)) * config.circuitGridSize;
        this.pos = 0;
        this.speed = Math.random() * 3 + 2;
        this.length = Math.random() * 40 + 30;
      }
      this.color = Math.random() > 0.5 ? '#00f0ff' : '#818cf8';
      this.dead = false;
    }

    update() {
      this.pos += this.speed;
      if (this.isVertical && this.pos > height + this.length) this.dead = true;
      if (!this.isVertical && this.pos > width + this.length) this.dead = true;
    }

    draw() {
      ctx.beginPath();
      if (this.isVertical) {
        const startY = Math.max(0, this.pos - this.length);
        const endY = Math.min(height, this.pos);
        const grad = ctx.createLinearGradient(0, startY, 0, endY);
        grad.addColorStop(0, 'rgba(0, 240, 255, 0)');
        grad.addColorStop(1, this.color);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.moveTo(this.coord, startY);
        ctx.lineTo(this.coord, endY);
      } else {
        const startX = Math.max(0, this.pos - this.length);
        const endX = Math.min(width, this.pos);
        const grad = ctx.createLinearGradient(startX, 0, endX, 0);
        grad.addColorStop(0, 'rgba(0, 240, 255, 0)');
        grad.addColorStop(1, this.color);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.moveTo(startX, this.coord);
        ctx.lineTo(endX, this.coord);
      }
      ctx.stroke();
    }
  }

  function initParticles() {
    particles = [];
    const count = window.innerWidth < 768 ? 35 : config.particleCount;
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  // Draw subtle stationary digital grid lines
  function drawSubtleGrid() {
    ctx.strokeStyle = 'rgba(30, 41, 59, 0.22)';
    ctx.lineWidth = 0.6;

    // Vertical lines
    for (let x = 0; x < width; x += config.circuitGridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    // Horizontal lines
    for (let y = 0; y < height; y += config.circuitGridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  }

  // Draw interconnect lines between neighboring particles
  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < config.connectionDist) {
          const alpha = (1 - dist / config.connectionDist) * 0.28;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
  }

  // Draw ambient mouse spotlight
  function drawMouseGlow() {
    if (!mouse.active || mouse.x === null) return;
    const radial = ctx.createRadialGradient(
      mouse.x, mouse.y, 0,
      mouse.x, mouse.y, mouse.radius * 1.6
    );
    radial.addColorStop(0, 'rgba(0, 240, 255, 0.08)');
    radial.addColorStop(0.5, 'rgba(129, 140, 248, 0.03)');
    radial.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = radial;
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, mouse.radius * 1.6, 0, Math.PI * 2);
    ctx.fill();
  }

  let frameCount = 0;

  function animate() {
    ctx.clearRect(0, 0, width, height);

    drawSubtleGrid();
    drawMouseGlow();

    // Circuit pulses
    if (!prefersReducedMotion) {
      frameCount++;
      if (frameCount % config.pulseInterval === 0 && circuitPulses.length < 5) {
        circuitPulses.push(new CircuitPulse());
      }
      for (let i = circuitPulses.length - 1; i >= 0; i--) {
        circuitPulses[i].update();
        circuitPulses[i].draw();
        if (circuitPulses[i].dead) {
          circuitPulses.splice(i, 1);
        }
      }
    }

    // Particles and connections
    drawConnections();
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }

    requestAnimationFrame(animate);
  }

  // Boot
  resizeCanvas();
  initParticles();
  requestAnimationFrame(animate);
})();
