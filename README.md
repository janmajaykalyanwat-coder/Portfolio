# Janmajay Kalyanwat — Personal Portfolio Website
### Electronics & Communication Engineering (ECE) • Semiconductor Technology Focus • JECRC University

A modern, visually stunning, futuristic, and responsive personal portfolio website crafted specifically for an engineering student specializing in Electronics and Communication Engineering with a core focus on Semiconductor Technology and Artificial Intelligence.

---

## 🌟 Highlights & Features

- **Futuristic Semiconductor & Tech Aesthetic:** Deep obsidian/navy/purple gradient background, interactive silicon die microchip visual, glowing neon cyan and purple accents, glassmorphic cards.
- **Interactive Background Canvas:** HTML5 canvas with floating glowing particles, interconnecting neural/circuit networks, bus trace signal pulses, and desktop mouse-following light spotlight.
- **Hero Section:** Clear introduction, editable name, student role badge, and two primary action buttons ("Explore My Journey" and "Contact Me") with 3D interactive chip tilt.
- **About Me Section:** Engaging academic background text and 5 interactive interest cards (Semiconductor Technology, ECE, Artificial Intelligence, Emerging Technologies, Technical Learning & Innovation).
- **Education Timeline:** Chronological vertical timeline with glowing active nodes highlighting **JECRC University** (Undergraduate, ECE - Semiconductor Technology) along with **Class 10** (The Visionaries Secondary School) and **Class 12** (Radha Children Academy), with editable placeholders for dates/scores.
- **College Section (JECRC University):** Dedicated showcase card, department highlights, stylized campus architectural visual, and a direct button to the official JECRC University portal.
- **Google AI Workshop Section:** Dedicated AI exploration section highlighting machine learning foundations, neural networks, hardware-AI synergy, and an interactive certificate inspection modal.
- **Skills & Learning Tracks:** Modern 6-category technical grid covering electronics fundamentals, semiconductor physics/VLSI, AI, communication engineering, research, and problem-solving without fake percentages.
- **Projects Section:** 3 editable placeholder project cards (Semiconductor & Electronics, Artificial Intelligence, Engineering Innovation) with GitHub and Live Demo buttons.
- **Achievements Section:** Workshop cards and extensible milestone slots.
- **Contact Section & Form:** Professional contact layout with full client-side validation, feedback toast notifications, and a direct email client fallback launcher.
- **Sticky Navigation & Mobile Drawer:** Smooth scrolling, active scroll-spy link tracking, and responsive hamburger menu.

---

## 📁 Project Structure

```text
janmajay-portfolio/
│
├── index.html                   # Main semantic HTML5 webpage
├── README.md                    # Project documentation & editing guide
│
├── css/
│   └── styles.css               # Futuristic styling, glassmorphism, glowing borders & animations
│
├── js/
│   ├── portfolio-data.js        # Centralized configuration (All data editable here!)
│   ├── background-canvas.js     # Glowing particles & circuit bus traces canvas
│   ├── microchip.js             # 3D interactive semiconductor die visualizer
│   └── app.js                   # UI controller, scroll spy, modal & form validation
│
└── assets/
    ├── logo.svg                 # "JK" Monogram with circuit nodes
    ├── semiconductor-chip.svg   # High-tech silicon chip illustration with gold wire bonds
    ├── campus-placeholder.svg   # JECRC University stylized architectural campus card
    ├── certificate-placeholder.svg # Google AI Workshop certificate preview
    ├── project-semiconductor.svg# Thumbnail for semiconductor project slot
    ├── project-ai.svg           # Thumbnail for AI project slot
    └── project-innovation.svg   # Thumbnail for innovation project slot
```

---

## 🚀 How to Run Locally

You can open the website immediately in any web browser without any installation:

1. **Direct File Open:**  
   Double-click `index.html` in file explorer, or right-click `index.html` and select **Open with > Microsoft Edge / Google Chrome**.

2. **Using any local server (optional):**  
   If you have VS Code, right-click `index.html` and choose **Open with Live Server**.

---

## ✏️ How to Edit Your Information

All your personal details, education records, project cards, and links are kept in one single configuration file:  
`js/portfolio-data.js`

### 1. Update Name and Social Links:
Open `js/portfolio-data.js` and edit:
```javascript
personal: {
  fullName: "Janmajay Kalyanwat",
  email: "your.email@example.com",
  linkedin: "https://www.linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
  ...
}
```

### 2. Update Education Scores & Years:
In `portfolio-data.js`, look for `education`:
```javascript
{
  institution: "The Visionaries Secondary School",
  qualification: "Class 10",
  yearBadge: "2021",          // Update your actual completion year
  score: "92% / Grade A",     // Update your actual score/grade
  ...
}
```

### 3. Add Your Real Certificate / Projects:
- Replace `assets/certificate-placeholder.svg` with your actual certificate image or PDF.
- Update `projects` array in `js/portfolio-data.js` when you build new hardware or AI projects!

---

## 🌐 Deploying to the Web (Free)

### GitHub Pages (Recommended)
1. Push this folder to a new GitHub repository (e.g. `janmajay-portfolio`).
2. Go to **Settings** > **Pages**.
3. Under **Branch**, select `main` and root `/`, then click **Save**.
4. Your website will be live at `https://<your-username>.github.io/janmajay-portfolio/`!
