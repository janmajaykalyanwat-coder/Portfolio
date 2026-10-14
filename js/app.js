/**
 * ==============================================================================
 * APPLICATION LOGIC & DYNAMIC UI CONTROLLER
 * ==============================================================================
 * Renders data from PORTFOLIO_DATA, handles navigation, animations,
 * certificate modal, and contact form validation.
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error('PORTFOLIO_DATA not found. Please ensure js/portfolio-data.js is loaded.');
    return;
  }

  // ----------------------------------------------------------------------------
  // 1. Navigation & Mobile Menu Setup
  // ----------------------------------------------------------------------------
  const navHeader = document.getElementById('main-nav');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Navbar scroll background change
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navHeader.classList.add('bg-slate-950/80', 'shadow-lg', 'shadow-cyan-950/20');
      navHeader.classList.remove('bg-transparent');
    } else {
      navHeader.classList.remove('bg-slate-950/80', 'shadow-lg', 'shadow-cyan-950/20');
      navHeader.classList.add('bg-transparent');
    }
  });

  // Mobile menu toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu on clicking any link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active link scroll spy
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => navObserver.observe(section));

  // ----------------------------------------------------------------------------
  // 2. Render Hero Section
  // ----------------------------------------------------------------------------
  const heroNameEl = document.getElementById('hero-name');
  const heroTaglineEl = document.getElementById('hero-tagline');
  const heroBioEl = document.getElementById('hero-bio');
  const heroBadgeEl = document.getElementById('hero-role-badge');

  if (heroNameEl) heroNameEl.textContent = data.personal.fullName;
  if (heroTaglineEl) heroTaglineEl.textContent = data.personal.tagline;
  if (heroBioEl) heroBioEl.textContent = data.personal.shortBio;
  if (heroBadgeEl) heroBadgeEl.textContent = data.personal.roleBadge;

  // ----------------------------------------------------------------------------
  // 3. Render About Section
  // ----------------------------------------------------------------------------
  const aboutTextContainer = document.getElementById('about-text-container');
  if (aboutTextContainer) {
    aboutTextContainer.innerHTML = data.about.paragraphs
      .map(p => `<p class="text-slate-300 text-base md:text-lg leading-relaxed mb-4">${p}</p>`)
      .join('');
  }

  const aboutInterestsGrid = document.getElementById('about-interests-grid');
  if (aboutInterestsGrid) {
    aboutInterestsGrid.innerHTML = data.about.interests.map(item => `
      <div class="glass-panel p-6 rounded-2xl flex flex-col justify-between group hover:-translate-y-1 transition-all">
        <div>
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-0.5 mb-4 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
            <div class="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
              <i data-lucide="${item.icon}" class="w-6 h-6 text-cyan-400"></i>
            </div>
          </div>
          <h3 class="text-lg font-bold text-white mb-2 font-space group-hover:text-cyan-300 transition-colors">${item.title}</h3>
          <p class="text-sm text-slate-400 leading-relaxed">${item.description}</p>
        </div>
        <div class="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono-tech">
          <span>INTEREST DOMAIN</span>
          <span class="text-cyan-400 font-bold group-hover:translate-x-1 transition-transform">ACTIVE &rarr;</span>
        </div>
      </div>
    `).join('');
  }

  // ----------------------------------------------------------------------------
  // 4. Render Education Section (Chronological)
  // ----------------------------------------------------------------------------
  const educationTimeline = document.getElementById('education-timeline');
  if (educationTimeline) {
    educationTimeline.innerHTML = data.education.map((edu, idx) => `
      <div class="relative pl-8 md:pl-12 pb-12 last:pb-2 group">
        <!-- Vertical stem node -->
        <div class="absolute left-0 top-1.5 w-6 h-6 -translate-x-1/2 rounded-full ${edu.isCurrent ? 'bg-cyan-500 ring-4 ring-cyan-500/30 shadow-lg shadow-cyan-500' : 'bg-slate-800 border-2 border-slate-600'} flex items-center justify-center transition-all group-hover:scale-125">
          <div class="w-2 h-2 rounded-full ${edu.isCurrent ? 'bg-white animate-ping' : 'bg-slate-400'}"></div>
        </div>

        <!-- Card -->
        <div class="glass-panel ${edu.isCurrent ? 'border-cyan-500/40 bg-slate-900/85 ring-1 ring-cyan-500/20' : ''} p-6 md:p-8 rounded-2xl relative overflow-hidden">
          ${edu.isCurrent ? `
            <div class="absolute top-0 right-0 bg-gradient-to-l from-cyan-500 to-blue-600 text-slate-950 font-mono-tech text-xs font-bold px-4 py-1 rounded-bl-xl shadow-md">
              CURRENT INSTITUTION • UNDERGRADUATE
            </div>
          ` : ''}

          <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span class="font-mono-tech text-xs text-cyan-400 font-semibold px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/40">
              ${edu.qualification}
            </span>
            <span class="text-xs font-mono-tech text-slate-400">
              ${edu.yearBadge}
            </span>
          </div>

          <h3 class="text-xl md:text-2xl font-bold text-white font-space mb-1">
            ${edu.institution}
          </h3>

          ${edu.program ? `
            <p class="text-sm font-semibold text-cyan-300 mb-1">
              Program: <span class="text-white">${edu.program}</span>
            </p>
          ` : ''}

          ${edu.specialization ? `
            <p class="text-sm text-purple-300 font-medium mb-3">
              Focus / Specialization: <span class="text-white font-semibold">${edu.specialization}</span>
            </p>
          ` : ''}

          <p class="text-sm text-slate-300 leading-relaxed mb-4">
            ${edu.description}
          </p>

          <div class="bg-slate-950/50 p-3 rounded-xl border border-slate-800 mb-4 flex items-center justify-between text-xs font-mono-tech">
            <span class="text-slate-400">Academic Status / Evaluation:</span>
            <span class="text-cyan-400 font-semibold">${edu.score}</span>
          </div>

          <div class="space-y-1.5">
            ${edu.highlights.map(h => `
              <div class="flex items-start text-xs md:text-sm text-slate-400">
                <i data-lucide="check-circle-2" class="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0 mt-0.5"></i>
                <span>${h}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  // ----------------------------------------------------------------------------
  // 5. Render College Section (JECRC University)
  // ----------------------------------------------------------------------------
  const collegeHeadingEl = document.getElementById('college-heading');
  const collegeDescEl = document.getElementById('college-desc');
  const collegeWebsiteLink = document.getElementById('college-website-link');
  const collegeFeaturesGrid = document.getElementById('college-features-grid');
  const collegeStatsGrid = document.getElementById('college-stats-grid');

  if (collegeHeadingEl) collegeHeadingEl.textContent = data.college.heading;
  if (collegeDescEl) {
    collegeDescEl.innerHTML = data.college.description
      .split('\n\n')
      .map(p => `<p class="mb-4 leading-relaxed">${p}</p>`)
      .join('');
  }
  if (collegeWebsiteLink) {
    collegeWebsiteLink.href = data.college.officialWebsite;
  }
  if (collegeFeaturesGrid) {
    collegeFeaturesGrid.innerHTML = data.college.features.map(f => `
      <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
        <h4 class="text-white font-semibold text-sm mb-1 flex items-center">
          <i data-lucide="check" class="w-4 h-4 text-cyan-400 mr-2"></i>
          ${f.title}
        </h4>
        <p class="text-xs text-slate-400 leading-relaxed">${f.desc}</p>
      </div>
    `).join('');
  }
  if (collegeStatsGrid) {
    collegeStatsGrid.innerHTML = data.college.stats.map(s => `
      <div class="text-center p-3 rounded-xl bg-slate-950/60 border border-cyan-900/30">
        <div class="text-xs font-mono-tech text-slate-400 uppercase tracking-wider">${s.label}</div>
        <div class="text-base md:text-lg font-bold text-cyan-300 font-space mt-0.5">${s.value}</div>
      </div>
    `).join('');
  }

  // ----------------------------------------------------------------------------
  // 6. Render Google AI Workshop Section
  // ----------------------------------------------------------------------------
  const googleAiHeading = document.getElementById('google-ai-heading');
  const googleAiDesc = document.getElementById('google-ai-desc');
  const googleAiPillars = document.getElementById('google-ai-pillars');

  if (googleAiHeading) googleAiHeading.textContent = data.googleAiWorkshop.heading;
  if (googleAiDesc) googleAiDesc.textContent = data.googleAiWorkshop.description;

  if (googleAiPillars) {
    googleAiPillars.innerHTML = data.googleAiWorkshop.highlights.map(item => `
      <div class="glass-panel-purple p-5 rounded-xl border border-purple-900/40 hover:border-purple-500/50 transition-all">
        <div class="w-10 h-10 rounded-lg bg-purple-900/40 border border-purple-500/30 flex items-center justify-center mb-3">
          <i data-lucide="${item.icon}" class="w-5 h-5 text-purple-300"></i>
        </div>
        <h4 class="text-base font-bold text-white mb-1.5 font-space">${item.title}</h4>
        <p class="text-xs md:text-sm text-slate-400 leading-relaxed">${item.description}</p>
      </div>
    `).join('');
  }

  // ----------------------------------------------------------------------------
  // 7. Render Skills and Interests Grid
  // ----------------------------------------------------------------------------
  const skillsContainer = document.getElementById('skills-container');
  if (skillsContainer) {
    skillsContainer.innerHTML = data.skills.map(cat => `
      <div class="glass-panel p-6 rounded-2xl flex flex-col justify-between hover:border-cyan-500/40 transition-all">
        <div>
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center">
                <i data-lucide="${cat.icon}" class="w-5 h-5 text-cyan-400"></i>
              </div>
              <h3 class="font-bold text-white text-base md:text-lg font-space">${cat.category}</h3>
            </div>
            <span class="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
              ${cat.tag}
            </span>
          </div>

          <div class="space-y-3 mt-4">
            ${cat.items.map(skill => `
              <div class="p-2.5 rounded-lg bg-slate-950/50 border border-slate-800/80 flex items-center justify-between">
                <span class="text-xs md:text-sm text-slate-200 font-medium">${skill.name}</span>
                <span class="text-[11px] font-mono-tech text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-900/50">
                  ${skill.level}
                </span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="mt-5 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400 font-mono-tech flex items-center justify-between">
          <span>Active Learning Domain</span>
          <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
        </div>
      </div>
    `).join('');
  }

  // ----------------------------------------------------------------------------
  // 8. Render Projects Section (3 Editable Placeholders)
  // ----------------------------------------------------------------------------
  const projectsGrid = document.getElementById('projects-grid');
  if (projectsGrid) {
    projectsGrid.innerHTML = data.projects.map((proj, idx) => {
      // Map SVG thumbnail
      let thumbSvg = 'assets/project-semiconductor.svg';
      if (proj.id === 'project-ai') thumbSvg = 'assets/project-ai.svg';
      if (proj.id === 'project-innovation') thumbSvg = 'assets/project-innovation.svg';

      return `
        <div class="glass-panel rounded-2xl overflow-hidden flex flex-col justify-between group hover:-translate-y-1.5 transition-all">
          <div>
            <!-- Thumbnail with overlay -->
            <div class="relative h-48 w-full bg-slate-950 overflow-hidden border-b border-slate-800">
              <img src="${thumbSvg}" alt="${proj.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute top-3 right-3 bg-amber-500/20 backdrop-blur-md text-amber-300 text-[10px] font-mono-tech font-bold px-2.5 py-1 rounded-full border border-amber-500/40 flex items-center">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-400 mr-1.5 animate-pulse"></span>
                ${proj.badge}
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <div class="text-xs font-mono-tech text-cyan-400 uppercase tracking-wider mb-1">${proj.category}</div>
              <h3 class="text-xl font-bold text-white font-space mb-2 group-hover:text-cyan-300 transition-colors">
                ${proj.title}
              </h3>
              <p class="text-sm text-slate-300 leading-relaxed mb-4">
                ${proj.shortDesc}
              </p>

              <!-- Tech Badges -->
              <div class="flex flex-wrap gap-1.5 mb-4">
                ${proj.technologies.map(t => `
                  <span class="text-[11px] font-mono-tech px-2 py-0.5 rounded-md bg-slate-900 border border-slate-700/80 text-slate-300">
                    ${t}
                  </span>
                `).join('')}
              </div>

              <!-- Key Planned Features -->
              <div class="space-y-1 text-xs text-slate-400 pt-2 border-t border-slate-800">
                ${proj.features.map(f => `
                  <div class="flex items-center">
                    <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-cyan-400 mr-1 flex-shrink-0"></i>
                    <span>${f}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Buttons -->
          <div class="p-6 pt-0">
            <div class="flex items-center gap-3">
              <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" 
                 class="flex-1 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-white flex items-center justify-center gap-1.5 transition-colors">
                <i data-lucide="github" class="w-4 h-4"></i>
                <span>GitHub</span>
              </a>
              <button onclick="window.showToast('Project Demo Placeholder: This project slot is ready for your future hardware/software deployment!', 'info')"
                 class="flex-1 py-2 px-3 rounded-xl bg-cyan-950/70 hover:bg-cyan-900/80 border border-cyan-800/60 text-xs font-semibold text-cyan-300 flex items-center justify-center gap-1.5 transition-colors">
                <i data-lucide="external-link" class="w-4 h-4"></i>
                <span>Live Demo</span>
              </button>
            </div>
            <div class="text-[10px] text-center font-mono-tech text-slate-500 mt-2">
              Editable in js/portfolio-data.js
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // ----------------------------------------------------------------------------
  // 9. Render Achievements & Learning Section
  // ----------------------------------------------------------------------------
  const achievementsGrid = document.getElementById('achievements-grid');
  if (achievementsGrid) {
    achievementsGrid.innerHTML = data.achievements.map((ach) => `
      <div class="glass-panel p-6 rounded-2xl flex flex-col justify-between group hover:border-purple-500/40 transition-all">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-mono-tech px-2.5 py-1 rounded bg-purple-950/70 border border-purple-800/60 text-purple-300">
              ${ach.badge}
            </span>
            <span class="text-xs font-mono-tech text-slate-400">
              ${ach.datePlaceholder}
            </span>
          </div>

          <h3 class="text-xl font-bold text-white font-space mb-1 group-hover:text-purple-300 transition-colors">
            ${ach.title}
          </h3>
          <p class="text-xs font-medium text-cyan-400 mb-3">${ach.issuer}</p>

          <p class="text-sm text-slate-300 leading-relaxed mb-4">
            ${ach.description}
          </p>

          <div class="space-y-1.5 mb-5 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
            <div class="text-[11px] font-mono-tech text-slate-400 uppercase tracking-wider mb-1">Key Takeaways &amp; Skills:</div>
            ${ach.skillsLearned.map(skill => `
              <div class="flex items-center text-xs text-slate-300">
                <i data-lucide="check" class="w-3.5 h-3.5 text-cyan-400 mr-2 flex-shrink-0"></i>
                <span>${skill}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div>
          <button onclick="window.openCertificateModal('${ach.title}', '${ach.issuer}', '${ach.datePlaceholder}')" 
                  class="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-900/60 to-blue-900/60 hover:from-purple-800 hover:to-blue-800 border border-purple-500/40 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all shadow-md">
            <i data-lucide="award" class="w-4 h-4 text-purple-300"></i>
            <span>${ach.actionText}</span>
          </button>
          <div class="text-[10px] text-center font-mono-tech text-slate-500 mt-2">
            Fully customizable slot
          </div>
        </div>
      </div>
    `).join('');
  }

  // ----------------------------------------------------------------------------
  // 10. Contact Section Details & Social Links
  // ----------------------------------------------------------------------------
  const contactHeadingEl = document.getElementById('contact-heading');
  const contactMessageEl = document.getElementById('contact-message');
  const contactEmailEl = document.getElementById('contact-email-text');
  const contactLocationEl = document.getElementById('contact-location-text');
  const contactGithubLink = document.getElementById('contact-github-link');
  const contactLinkedinLink = document.getElementById('contact-linkedin-link');

  if (contactHeadingEl) contactHeadingEl.textContent = data.contact.heading;
  if (contactMessageEl) contactMessageEl.textContent = data.contact.message;
  if (contactEmailEl) contactEmailEl.textContent = data.contact.email;
  if (contactLocationEl) contactLocationEl.textContent = data.contact.location;
  if (contactGithubLink) contactGithubLink.href = data.personal.github;
  if (contactLinkedinLink) contactLinkedinLink.href = data.personal.linkedin;

  // ----------------------------------------------------------------------------
  // 11. Contact Form Client-Side Validation & Feedback
  // ----------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const subjectInput = document.getElementById('form-subject');
      const messageInput = document.getElementById('form-message');

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const subject = subjectInput ? subjectInput.value.trim() : 'Portfolio Inquiry';
      const message = messageInput.value.trim();

      // Clear previous error states
      [nameInput, emailInput, messageInput].forEach(inp => {
        inp.classList.remove('border-red-500', 'ring-1', 'ring-red-500');
      });

      // Validation
      if (name.length < 2) {
        nameInput.classList.add('border-red-500', 'ring-1', 'ring-red-500');
        nameInput.focus();
        window.showToast('Please enter your full name (minimum 2 characters).', 'error');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        emailInput.classList.add('border-red-500', 'ring-1', 'ring-red-500');
        emailInput.focus();
        window.showToast('Please provide a valid email address.', 'error');
        return;
      }

      if (message.length < 10) {
        messageInput.classList.add('border-red-500', 'ring-1', 'ring-red-500');
        messageInput.focus();
        window.showToast('Please write a message with at least 10 characters.', 'error');
        return;
      }

      // Success feedback
      window.showToast(
        `Thank you, ${name}! Your message is prepared. As noted, you can link Formspree/EmailJS in config.js or launch your mail client.`,
        'success'
      );

      // Offer direct mailto trigger so the user can actually send the email right now!
      const mailtoUrl = `mailto:${data.contact.email}?subject=${encodeURIComponent(`[Portfolio Contact] ${subject}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      
      const mailFallbackBtn = document.getElementById('mail-client-fallback');
      if (mailFallbackBtn) {
        mailFallbackBtn.href = mailtoUrl;
        mailFallbackBtn.classList.remove('hidden');
      }

      // Reset form fields
      contactForm.reset();
    });
  }

  // ----------------------------------------------------------------------------
  // 12. Certificate Modal Controller
  // ----------------------------------------------------------------------------
  const certModal = document.getElementById('certificate-modal');
  const certCloseBtn = document.getElementById('cert-modal-close');
  const certModalTitle = document.getElementById('cert-modal-title');
  const certModalIssuer = document.getElementById('cert-modal-issuer');
  const certModalDate = document.getElementById('cert-modal-date');

  window.openCertificateModal = function (title, issuer, date) {
    if (!certModal) return;
    if (certModalTitle) certModalTitle.textContent = title;
    if (certModalIssuer) certModalIssuer.textContent = `Issued by: ${issuer}`;
    if (certModalDate) certModalDate.textContent = `Date / Session: ${date}`;
    certModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  window.closeCertificateModal = function () {
    if (!certModal) return;
    certModal.classList.add('hidden');
    document.body.style.overflow = '';
  };

  if (certCloseBtn) {
    certCloseBtn.addEventListener('click', window.closeCertificateModal);
  }

  if (certModal) {
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) {
        window.closeCertificateModal();
      }
    });
  }

  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && certModal && !certModal.classList.contains('hidden')) {
      window.closeCertificateModal();
    }
  });

  // ----------------------------------------------------------------------------
  // 13. Toast Notification Helper
  // ----------------------------------------------------------------------------
  window.showToast = function (message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconName = 'info';
    if (type === 'success') iconName = 'check-circle';
    if (type === 'error') iconName = 'alert-triangle';

    toast.innerHTML = `
      <i data-lucide="${iconName}" class="w-5 h-5 flex-shrink-0"></i>
      <span class="text-xs md:text-sm font-medium leading-relaxed">${message}</span>
    `;

    container.appendChild(toast);
    if (window.lucide) {
      window.lucide.createIcons();
    }

    // Trigger animation in
    setTimeout(() => toast.classList.add('show'), 20);

    // Remove after 5.5s
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 5500);
  };

  // Dynamic footer year
  const yearEl = document.getElementById('year-copy');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
