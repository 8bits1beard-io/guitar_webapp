# 🎸 Professor Riffs Chord Coach

A mobile-first web application for mastering guitar chords with expert guidance from Professor Riffs. Learn chord shapes, discover progressions, and practice with interactive features created to help Professor Riffs' students lookup and practice guitar chords.

![Professor Riffs Chord Coach](https://img.shields.io/badge/Professor%20Riffs-Chord%20Coach-blue?style=for-the-badge&logo=guitar)

**Developed by Joshua Walderbach**

## ✨ Features

### 🎓 **Professor Riffs' Teaching Method**
- Curriculum based on Professor Riffs' extensive teaching experience
- Professional tips from a veteran of the Eastern Iowa music scene
- Interactive lessons with immediate feedback
- Simple, effective learning tools for students

### 🔍 **Smart Chord Search & Lookup**
- Quick search for any chord (C, Am, G7, etc.)
- Advanced filtering by chord type and difficulty level
- Instant results with visual chord diagrams
- Professor's recommended chord variations

### 📱 **Interactive Chord Viewer**
- **Visual chord diagrams** with precise finger positions
- **Audio playback** - hear chords and arpeggios
- Detailed finger positioning and music theory
- Canvas-based diagrams that scale perfectly on any device

### 📚 **Professor Riffs' Chord Academy**
- **Chord Diagram Guide** - Reading chord charts like a pro
- **Open Chord Masterclass** - Essential beginner shapes
- **Barre Chord Academy** - Advanced moveable techniques
- **Smooth Transitions** - Professional change techniques
- **Chord Progressions** - Popular sequences that sound amazing

### 🎵 **Professional Practice Tools**
- **Play Chord** - Hear authentic chord sounds
- **Play Arpeggio** - Individual note playback for ear training
- **Practice Mode** - Built-in metronome for timing
- Save favorite chords to your personal library

### 📊 **Comprehensive Chord Database**
12 essential guitar chords curated by Professor Riffs:
- **Beginner Level**: C, G, D, A, E, Am, Em, Dm, G7
- **Intermediate Level**: F (barre), C7, Bm (barre)

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required - runs perfectly in your browser!

### Running Professor Riffs

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/professor-riffs-chord-coach.git
   cd professor-riffs-chord-coach
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server for the best experience:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Start learning**
   - Open http://localhost:8000 in your browser
   - The app works offline once loaded!

## 📱 Mobile Experience

### Progressive Web App (PWA)
- **Install to home screen** on mobile devices
- **Offline capability** - practice anywhere, anytime
- **Full-screen mode** for distraction-free learning
- **Touch-optimized** interface designed for mobile-first learning

### Mobile Features
- Responsive design that adapts to any screen size
- Touch-friendly chord diagrams and controls
- Swipe navigation between lessons
- Optimized for both portrait and landscape practice modes

## 🎯 How to Use Professor Riffs

### 1. **Finding Chords**
```
Home → Quick Search → Type "Am" → Press Search
```
or
```
Search Tab → Advanced filters → Select "Minor" → Search
```

### 2. **Learning with Professor Riffs**
```
Learn Tab → Choose Academy lesson → Follow expert guidance
```

### 3. **Practice Session**
```
Find chord → View diagram → Listen to audio → Save to library
```

### 4. **Building Your Chord Library**
```
View any chord → Click "Save" → Access in Library tab
```

## 🛠️ Technical Details

### Built With
- **HTML5** - Semantic structure and Canvas API for chord diagrams
- **CSS3** - Modern responsive design with CSS Grid/Flexbox
- **Vanilla JavaScript** - No frameworks, pure performance
- **Web Audio API** - Real-time chord and arpeggio playback
- **Canvas API** - Dynamic chord diagram generation
- **Local Storage** - Persistent user progress and favorites

### Browser Support
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 11+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Performance
- **Lightning fast** - No external dependencies
- **Offline capable** - Learn without internet
- **Smooth animations** - Hardware-accelerated CSS
- **Touch responsive** - Optimized for mobile interaction

## 🎨 Customization

### Adding New Chords
Edit `app.js` and add to the `chordsDatabase` array:

```javascript
{
    id: 'Em7',
    name: 'E Minor 7',
    type: 'seventh',
    difficulty: 'intermediate',
    frets: [[0, 2, 2, 0, 3, 0]],
    fingers: '- 2 3 - 4 -',
    notes: ['E', 'G', 'B', 'D'],
    theory: 'Minor 7th chord built on E - adds jazzy flavor'
}
```

### Customizing Professor Riffs' Teaching Style
- Modify lesson content in the `lessons` object within `app.js`
- Add your own teaching tips and methods
- Customize the visual design in `styles.css`

### Adding Chord Progressions
Add to the `progressions` array in `app.js`:

```javascript
{
    name: 'Professor\'s Jazz Standard',
    chords: ['Cmaj7', 'Am7', 'Dm7', 'G7'],
    description: 'Smooth jazz progression from the Professor'
}
```

## 📂 Project Structure

```
professor-riffs-chord-coach/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling and responsive design
├── app.js              # Core functionality and chord database
├── manifest.json       # PWA configuration
└── README.md           # This documentation
```

## 🤝 Contributing

Contributions are welcome! Help make Professor Riffs even better:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/new-chords`)
3. **Add your improvements** (new chords, features, lessons)
4. **Commit your changes** (`git commit -am 'Add Professor Riffs lesson'`)
5. **Push to the branch** (`git push origin feature/new-chords`)
6. **Open a Pull Request**

### Ideas for Contributions
- 🎵 Add more chord variations (sus2, sus4, add9, maj7, etc.)
- 🎸 Different tuning support (Drop D, DADGAD, Open G)
- 🎼 Chord progression generator
- 🎯 Progressive skill challenges and exercises
- 🌍 Multi-language support for global learners
- 🎤 Integration with backing tracks

## 👨‍🏫 About Professor Riffs

**Professor Riffs (Les)** is a mainstay in the Eastern Iowa/Corridor music scene. During his extensive career, he has performed thousands of gigs, written tons of songs, recorded several albums, taught countless students, and has loved every minute of it.

Whether you're looking for guitar/bass/mandolin/ukulele lessons, or looking to hire someone to play one of those instruments on stage or in the studio, Professor Riffs has you covered!

This chord coach app was created by **Joshua Walderbach**, a good friend of Professor Riffs, who wanted to help Les provide his students with a simple, effective tool to lookup and practice guitar chords.

### Connect with Professor Riffs
- 📷 **Instagram**: [@les_guitar](https://instagram.com/les_guitar) - Daily guitar tips and inspiration
- 📺 **YouTube**: [@Professorriffs](https://youtube.com/@Professorriffs) - In-depth lessons and tutorials
- 🌐 **Website**: [lesohlhausermusic.com](https://lesohlhausermusic.com) - Complete learning resources

### Professor Riffs' Teaching Philosophy
- **Progressive Learning**: Start simple, build complexity gradually
- **Muscle Memory**: Repetition and practice make perfect
- **Musical Context**: Learn chords in the context of real songs
- **Encouragement**: Every guitarist was once a beginner
- **Community**: Learn together, grow together

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Guitar chord fingerings and progressions based on standard guitar education
- Audio synthesis powered by Web Audio API
- Responsive design inspired by modern mobile-first principles
- Special thanks to guitar students who inspired this educational tool

## 📞 Support & Contact

- 🐛 **Report bugs**: Open an issue on GitHub
- 💡 **Feature requests**: Create an issue with the "enhancement" label
- 📧 **Questions about Professor Riffs**: Contact through GitHub discussions
- 🎸 **Guitar learning support**: Check out the Learn section in the app

---

**Keep practicing! 🎸**

*"Every chord you learn is a step closer to musical freedom." - Professor Riffs*

**Developed with ❤️ by Joshua Walderbach**