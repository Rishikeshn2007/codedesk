# GeeksforGeeks - Code Desk

A modern, clean, and user-friendly code library for browsing programming tutorials and lab programs organized by subject with a beautiful mango green and white theme.

## 🎨 Design Features

- **GeeksforGeeks Branding**: Professional design inspired by the popular GeeksforGeeks website
- **Mango Green + White Theme**: Modern, simple, and clean color scheme (#FF6B35 mango green with white)
- **No 3D Animations**: Clean, minimal interface focusing on content over effects
- **Three-Column Layout**:
  - Left Sidebar: Accordion menu for program categories (Matlab, DSA, Python, DBMS)
  - Main Content: Single program display area
  - Right Sidebar: Dummy advertisements with mango-themed cards

## ✨ Functionality

- **Dropdown Subject Menus**: Accordion-style dropdown menus for each subject
- **Single Program Display**: View one program at a time for focused learning
- **Program List**: All programs listed under their respective subject categories
- **Smart Search**: Search by program serial number, title, description, or keywords
- **Copy Code**: One-click code copying with visual feedback
- **Dummy Advertisements**: Randomly placed promotional cards on the right sidebar
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Status Updates**: Real-time status messages showing current program and search results

## 📁 File Structure

```
codedesk/
├── index.html          # Main HTML structure (three-column layout)
├── styles.css          # Mango green + white theme styling
├── app.js              # Logic for accordions, program display, and ads
├── data/
│   ├── matlab.json     # Matlab programs
│   ├── dsa.json        # DSA programs
│   ├── python.json     # Python programs
│   └── dbms.json       # DBMS programs
├── start-server.sh     # Server startup script
└── sample.png          # Reference design image
```

## 🚀 Getting Started

### Prerequisites
- Python 3.6+ (for local development server)
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation & Running

1. Navigate to the project directory:
   ```bash
   cd /home/rishi/Desktop/codedesk
   ```

2. Start the local development server:
   ```bash
   python3 -m http.server 8000
   ```
   Or use the provided script:
   ```bash
   bash start-server.sh
   ```

3. Open your browser and visit:
   ```
   http://localhost:8000
   ```

## 🎯 How to Use

1. **Select a Subject**: Click on any subject category (Matlab, DSA, Python, DBMS) to expand the accordion
2. **Choose a Program**: Click on any program from the expanded list to display its details
3. **View Details**: See the program's explanation, example input/output, keywords, and code
4. **Copy Code**: Click the "Copy Code" button to copy the program to your clipboard
5. **Search**: Use the search box to filter programs by keyword (searches the currently displayed program)

## 🎨 Color Scheme

- **Mango (Primary)**: `#FF6B35` - Used for buttons, accents, and active states
- **Mango Dark**: `#E55A25` - Hover states and darker accents
- **Mango Light**: `#FFE5D9` - Light backgrounds and soft highlights
- **White**: `#FFFFFF` - Main background
- **Light Gray**: `#F5F5F5` - Secondary backgrounds
- **Dark Text**: `#2C2C2C` - Primary text color

## 📊 Advertisement System

The right sidebar displays dummy advertisements randomly. Each ad card includes:
- Title
- Description
- Call-to-action button

Ads are displayed with a mango gradient background for visual appeal and brand consistency.

## 🔧 Customization

### Adding New Programs

Edit the JSON files in `data/` directory to add new programs:

```json
{
  "serial": 11,
  "title": "Program Title",
  "description": "Brief description",
  "explanation": "Detailed explanation of what the program does",
  "example": {
    "input": "Sample input",
    "output": "Expected output"
  },
  "keywords": ["keyword1", "keyword2"],
  "code": "// C++ code here"
}
```

### Changing Colors

Modify the CSS variables in `styles.css`:

```css
:root {
  --mango: #FF6B35;
  --mango-dark: #E55A25;
  --mango-light: #FFE5D9;
  --white: #FFFFFF;
  /* ... etc */
}
```

## 📱 Responsive Breakpoints

- Desktop: 1200px and above (3-column layout)
- Tablet: 992px - 1199px (2-column layout)
- Mobile: Below 992px (Single column stacked layout)

## ✅ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source. Feel free to use and modify as needed.

## 👨‍💻 Development

The application is built with vanilla JavaScript, HTML5, and CSS3. No frameworks or build tools are required - just open a terminal and run the server!

### Key Technologies

- **HTML5**: Semantic markup with proper accessibility
- **CSS3**: Grid layout, flexbox, and CSS variables for theming
- **Vanilla JavaScript**: No dependencies, lightweight and fast

## 🐛 Known Issues

None currently reported.

## 🚀 Future Enhancements

- Add more subjects and programs
- Implement syntax highlighting for code
- Add user-saved favorites
- Export/download code features
- Dark mode toggle (optional)
- Multi-language support