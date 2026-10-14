/**
 * ==============================================================================
 * INTERACTIVE SEMICONDUCTOR CHIP VISUALIZER
 * ==============================================================================
 * Interactive silicon die simulation in the Hero Section.
 * Features:
 * - Dynamic pin telemetry readout on hover
 * - Real-time clock pulse indicator
 * - 3D tilt reaction on mouse move
 * ==============================================================================
 */

(function () {
  const chipContainer = document.getElementById('hero-chip-container');
  if (!chipContainer) return;

  const telemetryDisplay = document.getElementById('chip-telemetry-text');
  const clockIndicator = document.getElementById('chip-clock-rate');
  const dieStatus = document.getElementById('chip-die-status');

  const chipSpecs = [
    "SILICON NODE: 28nm FinFET Architecture",
    "BUS PROTOCOL: PCIe Gen4 / SPI Interconnect",
    "CORE TOPOLOGY: Dual-ALU + Signal Processor",
    "VOLTAGE DOMAIN: 1.05V Core / 3.3V I/O",
    "DIE TEMP: 36.4°C Nominal",
    "CLOCK STATE: Synchronous Phase Locked"
  ];

  let specIndex = 0;

  // Rotate telemetry text every 3.5 seconds
  if (telemetryDisplay) {
    setInterval(() => {
      specIndex = (specIndex + 1) % chipSpecs.length;
      telemetryDisplay.style.opacity = '0';
      setTimeout(() => {
        telemetryDisplay.textContent = chipSpecs[specIndex];
        telemetryDisplay.style.opacity = '1';
      }, 300);
    }, 3500);
  }

  // 3D Parallax tilt effect on container
  chipContainer.addEventListener('mousemove', (e) => {
    const rect = chipContainer.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / rect.height) * 16;
    const rotateY = (x / rect.width) * 16;

    const chipEl = chipContainer.querySelector('.chip-card');
    if (chipEl) {
      chipEl.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    }
  });

  chipContainer.addEventListener('mouseleave', () => {
    const chipEl = chipContainer.querySelector('.chip-card');
    if (chipEl) {
      chipEl.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    }
  });
})();
