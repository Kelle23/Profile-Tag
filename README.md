# Responsive Profile Card
 
A simple, fully responsive, and accessible user profile card built with plain HTML, CSS, and vanilla JavaScript. This project fulfills a set of specific technical requirements, including semantic HTML, modern CSS for responsiveness, and dynamic content with JavaScript.
 
### [**Live Demo URL →**](https://kelle23.github.io/Profile-Tag/)
 
 
 
### Project Overview
 
This project is a clean implementation of a user profile card. It is designed to be both visually appealing and technically robust, adhering to modern web development standards. The card displays a user's avatar, biography, social links, hobbies, and dislikes, along with a real-time clock showing the current time in milliseconds.
 
The layout is fully responsive, transitioning from a stacked, single-column view on mobile devices to a two-column grid on tablets and desktops.
 
### Features
 
- **Semantic HTML5:** The structure uses meaningful tags like &lt;article&gt;, &lt;figure&gt;, &lt;nav&gt;, and &lt;section&gt; for better accessibility and SEO.
- **Responsive Design:** A mobile-first approach ensures the card looks great on all screen sizes.
- **Dynamic Content:** Vanilla JavaScript is used to dynamically update and display the current time in milliseconds every second.
- **Accessibility:** All interactive elements are keyboard-focusable with clear :focus-visible styles. ARIA attributes are used where necessary to improve screen reader experience.
- **Clean, Modern CSS:** Styled using Flexbox and CSS Grid for robust and maintainable layouts.
 
### Core Requirements Checklist
 
This project meets all the specified acceptance criteria:
 
-  All required elements exist with their specified data-testid attributes.
-  HTML uses semantic tags (article, figure, nav, section, etc.).
-  test-user-time value is dynamically updated to Date.now().
- Avatar (test-user-avatar) renders correctly with an alt attribute.
-  Social links are present inside test-user-social-links.
-  Hobbies and dislikes are in distinct lists with their respective data-testids.
-  Keyboard navigation works for all links with visible focus styles.
-  The layout is fully responsive across mobile, tablet, and desktop breakpoints.
 
### Technologies Used
 
- **HTML5**
- **CSS3** (Flexbox, Grid, Custom Properties)
- **Vanilla JavaScript** (DOM Manipulation, setInterval)
 
### How to Run Locally
 
To get a local copy up and running, follow these simple steps.
 
- **Clone the repository:**  
    git clone \[<https://github.com/Kelle23/Profile-Tag.git>)  
 
- **Navigate to the project directory:**  
    cd your-repo-name  
 
- Open the index.html file in your browser:  
    You can do this by double-clicking the file in your file explorer or by right-clicking and selecting "Open with..." your preferred browser.
 
And that's it! The profile card should be displayed in your browser.
 
### File Structure
 
The repository contains the following files:
 
.  
├── index.html # The main HTML structure of the profile card.  
├── styles.css # All styles for layout, responsiveness, and appearance.  
└── script.js # Vanilla JavaScript for dynamic time updates.
