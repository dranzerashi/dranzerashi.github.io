# Ashith Raghunath — Pixels & Code

A personal portfolio website featuring a neo-cyberpunk design with dynamic canvas animations.


## Tech Stack

- **HTML5** - Markup structure
- **CSS3** - Styling with Tailwind CSS
- **JavaScript** - Canvas animations and interactivity
- **Tailwind CSS v4.1.13** - Utility-first CSS framework

## Project Structure

```
├── index.html              # Main webpage
├── package.json            # Project dependencies
├── tailwind.config.js      # Tailwind CSS configuration
├── CNAME                   # GitHub Pages domain configuration
├── src/
│   └── input.css          # Tailwind CSS input file
├── dist/
│   └── output.css         # Compiled Tailwind CSS (generated)
├── asset/                  # Static assets
└── test.html              # Test/preview file
```

## Setup Instructions

### Prerequisites
- Node.js and npm installed

### Installation

1. Install dependencies:
```powershell
npm install
```

2. Build Tailwind CSS:
```powershell
npx tailwindcss -i ./src/input.css -o ./dist/output.css
```

### Development

Watch for CSS changes and rebuild automatically:
```powershell
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

### Serving Locally

Start a local HTTP server:
```powershell
npx http-server
```

Then open `http://localhost:8080` in your browser.

## License

ISC

---

**Author**: Ashith Raghunath  
