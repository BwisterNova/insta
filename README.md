# Instagram Form UI

A modern, responsive login and signup form inspired by Instagram's design. Built with HTML, CSS, and JavaScript with a sleek dark theme and interactive features.

## Features

✨ **Modern Design**

- Dark theme with gradient accents
- Instagram-inspired color scheme (pink, purple, orange, blue)
- Animated background blobs for visual appeal
- Responsive layout (works on desktop and mobile)

🔐 **Security & Validation**

- Password strength meter with visual feedback
- Show/hide password toggle
- Form validation and error handling
- Real-time password strength assessment

📱 **Responsive UI**

- Mobile-first design approach
- Phone mockup display on larger screens
- Fully responsive form layout
- Touch-friendly input fields

⚡ **Interactive Features**

- Smooth animations and transitions
- Loading states for form submission
- Password complexity indicators
- Smooth scrolling behavior

## Project Structure

```
├── login.html          # Login page
├── signup.html         # Sign up page
├── styles.css          # Shared styling
├── scripts.js          # Interactive functionality
└── README.md           # Project documentation
```

## Files Overview

### login.html

Login form with email/username and password fields, featuring a phone mockup display on desktop view showing Instagram-like content.

### signup.html

Sign up form with email, password, and password confirmation fields, includes password strength meter for enhanced security feedback.

### styles.css

- CSS custom properties for theming
- Flexbox and Grid layouts
- Animations and gradient effects
- Mobile responsiveness with media queries

### scripts.js

- Password visibility toggle functionality
- Password strength calculation algorithm
- Form interaction handlers
- DOM event listeners

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build tools required

### Running Locally

1. Clone or download this repository
2. Open `login.html` or `signup.html` in your browser
3. Interact with the forms to test features

```bash
# Simply open in browser
# Mac/Linux
open login.html

# Windows
start login.html
```

## Usage

### Login Form

- Enter email/username and password
- Click "Log in" to submit (front-end only, no backend integration)
- Click "Forgot password?" for password recovery flow
- Switch to signup with the provided link

### Sign Up Form

- Enter email, password, and confirm password
- Password strength meter updates in real-time
- View password strength as you type
- Click "Sign up" to submit
- Switch back to login with the provided link

### Password Toggle

- Click "Show" or "Hide" next to password fields to toggle visibility
- Applies to all password inputs on the page

## Customization

### Colors

Edit the CSS custom properties in `styles.css`:

```css
:root {
  --ig-pink: #e1306c;
  --ig-purple: #833ab4;
  --ig-orange: #f77737;
  /* ... more colors */
}
```

### Fonts

The project uses Google Fonts "Inter". Change in HTML `<head>`:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

### Form Fields

Edit the HTML in `login.html` or `signup.html` to add/modify form fields.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- This is a **front-end only** project (no backend)
- Form submissions don't store data anywhere
- To add backend functionality, connect to a backend API in `scripts.js`
- Fully self-contained (no external dependencies needed)

## Future Enhancements

- [ ] Backend API integration
- [ ] Form data persistence
- [ ] Email verification flow
- [ ] Two-factor authentication UI
- [ ] Password reset functionality
- [ ] Social login buttons

## License

Free to use and modify for personal and commercial projects.

## Author

Created as a modern Instagram-inspired form UI project.

---

**Built by Bright Ayomide as a UI/UX practice project**
