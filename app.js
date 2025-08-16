let currentInstrument = 'guitar';

const chordsDatabase = {
    guitar: [
    {
        id: 'C',
        name: 'C Major',
        type: 'major',
        difficulty: 'beginner',
        frets: [[-1, 3, 3, 2, 0, 1, 0]],
        fingers: '- 3 3 2 - 1 -',
        notes: ['C', 'E', 'G'],
        theory: 'Root: C, Major 3rd: E, Perfect 5th: G'
    },
    {
        id: 'G',
        name: 'G Major',
        type: 'major',
        difficulty: 'beginner',
        frets: [[3, 2, 0, 0, 3, 3]],
        fingers: '3 2 - - 3 3',
        notes: ['G', 'B', 'D'],
        theory: 'Root: G, Major 3rd: B, Perfect 5th: D'
    },
    {
        id: 'D',
        name: 'D Major',
        type: 'major',
        difficulty: 'beginner',
        frets: [[-1, -1, 0, 2, 3, 2]],
        fingers: '- - - 1 3 2',
        notes: ['D', 'F#', 'A'],
        theory: 'Root: D, Major 3rd: F#, Perfect 5th: A'
    },
    {
        id: 'Am',
        name: 'A Minor',
        type: 'minor',
        difficulty: 'beginner',
        frets: [[-1, 0, 2, 2, 1, 0]],
        fingers: '- - 2 3 1 -',
        notes: ['A', 'C', 'E'],
        theory: 'Root: A, Minor 3rd: C, Perfect 5th: E'
    },
    {
        id: 'Em',
        name: 'E Minor',
        type: 'minor',
        difficulty: 'beginner',
        frets: [[0, 2, 2, 0, 0, 0]],
        fingers: '- 2 3 - - -',
        notes: ['E', 'G', 'B'],
        theory: 'Root: E, Minor 3rd: G, Perfect 5th: B'
    },
    {
        id: 'Dm',
        name: 'D Minor',
        type: 'minor',
        difficulty: 'beginner',
        frets: [[-1, -1, 0, 2, 3, 1]],
        fingers: '- - - 2 3 1',
        notes: ['D', 'F', 'A'],
        theory: 'Root: D, Minor 3rd: F, Perfect 5th: A'
    },
    {
        id: 'A',
        name: 'A Major',
        type: 'major',
        difficulty: 'beginner',
        frets: [[-1, 0, 2, 2, 2, 0]],
        fingers: '- - 2 3 4 -',
        notes: ['A', 'C#', 'E'],
        theory: 'Root: A, Major 3rd: C#, Perfect 5th: E'
    },
    {
        id: 'E',
        name: 'E Major',
        type: 'major',
        difficulty: 'beginner',
        frets: [[0, 2, 2, 1, 0, 0]],
        fingers: '- 2 3 1 - -',
        notes: ['E', 'G#', 'B'],
        theory: 'Root: E, Major 3rd: G#, Perfect 5th: B'
    },
    {
        id: 'F',
        name: 'F Major',
        type: 'major',
        difficulty: 'intermediate',
        frets: [[1, 3, 3, 2, 1, 1]],
        fingers: '1 3 4 2 1 1',
        notes: ['F', 'A', 'C'],
        theory: 'Root: F, Major 3rd: A, Perfect 5th: C'
    },
    {
        id: 'G7',
        name: 'G7',
        type: 'seventh',
        difficulty: 'beginner',
        frets: [[3, 2, 0, 0, 0, 1]],
        fingers: '3 2 - - - 1',
        notes: ['G', 'B', 'D', 'F'],
        theory: 'Root: G, Major 3rd: B, Perfect 5th: D, Minor 7th: F'
    },
    {
        id: 'C7',
        name: 'C7',
        type: 'seventh',
        difficulty: 'intermediate',
        frets: [[-1, 3, 2, 3, 1, 0]],
        fingers: '- 3 2 4 1 -',
        notes: ['C', 'E', 'G', 'Bb'],
        theory: 'Root: C, Major 3rd: E, Perfect 5th: G, Minor 7th: Bb'
    },
    {
        id: 'Bm',
        name: 'B Minor',
        type: 'minor',
        difficulty: 'intermediate',
        frets: [[-1, 2, 4, 4, 3, 2]],
        fingers: '- 1 3 4 2 1',
        notes: ['B', 'D', 'F#'],
        theory: 'Root: B, Minor 3rd: D, Perfect 5th: F#'
    }
    ],
    bass: [
        {
            id: 'C',
            name: 'C Major',
            type: 'major',
            difficulty: 'beginner',
            frets: [[-1, -1, 3, 5, -1, -1]],
            fingers: '- - 1 3 - -',
            notes: ['C', 'E', 'G'],
            theory: 'Root: C, Major 3rd: E, Perfect 5th: G'
        },
        {
            id: 'G',
            name: 'G Major',
            type: 'major',
            difficulty: 'beginner',
            frets: [[3, 5, 5, -1, -1, -1]],
            fingers: '1 3 4 - - -',
            notes: ['G', 'B', 'D'],
            theory: 'Root: G, Major 3rd: B, Perfect 5th: D'
        },
        {
            id: 'D',
            name: 'D Major',
            type: 'major',
            difficulty: 'beginner',
            frets: [[-1, -1, -1, 2, 3, 2]],
            fingers: '- - - 1 3 2',
            notes: ['D', 'F#', 'A'],
            theory: 'Root: D, Major 3rd: F#, Perfect 5th: A'
        },
        {
            id: 'Am',
            name: 'A Minor',
            type: 'minor',
            difficulty: 'beginner',
            frets: [[-1, 0, 2, 2, -1, -1]],
            fingers: '- - 1 2 - -',
            notes: ['A', 'C', 'E'],
            theory: 'Root: A, Minor 3rd: C, Perfect 5th: E'
        },
        {
            id: 'Em',
            name: 'E Minor',
            type: 'minor',
            difficulty: 'beginner',
            frets: [[0, 2, 2, -1, -1, -1]],
            fingers: '- 1 2 - - -',
            notes: ['E', 'G', 'B'],
            theory: 'Root: E, Minor 3rd: G, Perfect 5th: B'
        },
        {
            id: 'F',
            name: 'F Major',
            type: 'major',
            difficulty: 'intermediate',
            frets: [[1, 3, 3, -1, -1, -1]],
            fingers: '1 3 4 - - -',
            notes: ['F', 'A', 'C'],
            theory: 'Root: F, Major 3rd: A, Perfect 5th: C'
        }
    ],
    ukulele: [
        {
            id: 'C',
            name: 'C Major',
            type: 'major',
            difficulty: 'beginner',
            frets: [[0, 0, 0, 3]],
            fingers: '- - - 3',
            notes: ['C', 'E', 'G'],
            theory: 'Root: C, Major 3rd: E, Perfect 5th: G'
        },
        {
            id: 'G',
            name: 'G Major',
            type: 'major',
            difficulty: 'beginner',
            frets: [[0, 2, 3, 2]],
            fingers: '- 1 3 2',
            notes: ['G', 'B', 'D'],
            theory: 'Root: G, Major 3rd: B, Perfect 5th: D'
        },
        {
            id: 'Am',
            name: 'A Minor',
            type: 'minor',
            difficulty: 'beginner',
            frets: [[2, 0, 0, 0]],
            fingers: '2 - - -',
            notes: ['A', 'C', 'E'],
            theory: 'Root: A, Minor 3rd: C, Perfect 5th: E'
        },
        {
            id: 'F',
            name: 'F Major',
            type: 'major',
            difficulty: 'beginner',
            frets: [[2, 0, 1, 0]],
            fingers: '2 - 1 -',
            notes: ['F', 'A', 'C'],
            theory: 'Root: F, Major 3rd: A, Perfect 5th: C'
        },
        {
            id: 'D',
            name: 'D Major',
            type: 'major',
            difficulty: 'intermediate',
            frets: [[2, 2, 2, 0]],
            fingers: '1 1 1 -',
            notes: ['D', 'F#', 'A'],
            theory: 'Root: D, Major 3rd: F#, Perfect 5th: A'
        },
        {
            id: 'Em',
            name: 'E Minor',
            type: 'minor',
            difficulty: 'intermediate',
            frets: [[0, 4, 3, 2]],
            fingers: '- 4 3 2',
            notes: ['E', 'G', 'B'],
            theory: 'Root: E, Minor 3rd: G, Perfect 5th: B'
        }
    ]
};

const progressions = [
    {
        name: 'Pop Progression',
        chords: ['C', 'G', 'Am', 'F'],
        description: 'I - V - vi - IV progression'
    },
    {
        name: '12 Bar Blues',
        chords: ['E', 'E', 'E', 'E', 'A', 'A', 'E', 'E', 'B7', 'A', 'E', 'E'],
        description: 'Classic blues progression'
    },
    {
        name: 'Folk Standard',
        chords: ['G', 'Em', 'C', 'D'],
        description: 'I - vi - IV - V progression'
    },
    {
        name: '50s Progression',
        chords: ['C', 'Am', 'F', 'G'],
        description: 'Doo-wop progression'
    }
];

let savedChords = JSON.parse(localStorage.getItem('savedChords') || '[]');
let currentChord = null;
let audioContext = null;

function init() {
    setupNavigation();
    setupSearch();
    setupChordViewer();
    setupInstrumentToggle();
    loadPopularChords();
    loadProgressions();
    loadSavedChords();
    setupLessons();
}

function setupInstrumentToggle() {
    const instrumentBtns = document.querySelectorAll('.instrument-btn');
    
    instrumentBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const instrument = btn.dataset.instrument;
            
            // Update active button
            instrumentBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update current instrument
            currentInstrument = instrument;
            
            // Refresh all chord displays
            loadPopularChords();
            loadSavedChords();
            
            // Clear search results
            document.getElementById('searchResults').innerHTML = '';
            
            // Update chord viewer if one is open
            if (currentChord && document.getElementById('viewer').style.display === 'block') {
                const updatedChord = getCurrentInstrumentChords().find(c => c.id === currentChord.id);
                if (updatedChord) {
                    viewChord(updatedChord.id);
                } else {
                    // Chord doesn't exist for this instrument, go back
                    document.getElementById('backBtn').click();
                }
            }
        });
    });
}

function getCurrentInstrumentChords() {
    return chordsDatabase[currentInstrument] || [];
}

function setupNavigation() {
    const navBtns = document.querySelectorAll('.nav-btn');
    const panels = document.querySelectorAll('.tab-panel');
    
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;
            
            navBtns.forEach(b => b.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

function setupSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const quickSearch = document.getElementById('quickSearch');
    const doSearch = document.getElementById('doSearch');
    const searchInput = document.getElementById('searchInput');
    
    searchBtn.addEventListener('click', () => {
        performSearch(quickSearch.value);
    });
    
    quickSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch(quickSearch.value);
        }
    });
    
    doSearch.addEventListener('click', () => {
        const type = document.getElementById('chordType').value;
        const difficulty = document.getElementById('difficulty').value;
        performSearch(searchInput.value, type, difficulty);
    });
}

function performSearch(query, type = '', difficulty = '') {
    const currentChords = getCurrentInstrumentChords();
    const results = currentChords.filter(chord => {
        const matchesQuery = !query || 
            chord.id.toLowerCase().includes(query.toLowerCase()) ||
            chord.name.toLowerCase().includes(query.toLowerCase());
        const matchesType = !type || chord.type === type;
        const matchesDifficulty = !difficulty || chord.difficulty === difficulty;
        return matchesQuery && matchesType && matchesDifficulty;
    });
    
    displaySearchResults(results);
    document.querySelector('[data-tab="search"]').click();
}

function displaySearchResults(results) {
    const container = document.getElementById('searchResults');
    
    if (results.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 2rem;">No chords found</p>';
        return;
    }
    
    container.innerHTML = results.map(chord => `
        <div class="chord-card" onclick="viewChord('${chord.id}')">
            <div class="chord-mini">
                <canvas id="mini-${chord.id}" width="80" height="100"></canvas>
            </div>
            <div class="chord-card-info">
                <h3>${chord.name}</h3>
                <span class="difficulty">${chord.difficulty}</span>
            </div>
        </div>
    `).join('');
    
    results.forEach(chord => {
        drawMiniChord(`mini-${chord.id}`, chord);
    });
}

function loadPopularChords() {
    const container = document.getElementById('popularChords');
    const currentChords = getCurrentInstrumentChords();
    const popularChords = currentChords.filter(c => c.difficulty === 'beginner').slice(0, 8);
    
    container.innerHTML = popularChords.map(chord => `
        <div class="chord-card" onclick="viewChord('${chord.id}')">
            <div class="chord-mini">
                <canvas id="popular-${chord.id}-${currentInstrument}" width="80" height="100"></canvas>
            </div>
            <div class="chord-card-info">
                <h3>${chord.name}</h3>
                <span class="difficulty">${chord.difficulty}</span>
            </div>
        </div>
    `).join('');
    
    popularChords.forEach(chord => {
        drawMiniChord(`popular-${chord.id}-${currentInstrument}`, chord);
    });
}

function loadProgressions() {
    const container = document.getElementById('progressions');
    
    container.innerHTML = progressions.map((prog, idx) => `
        <div class="progression-card" onclick="viewProgression(${idx})">
            <h3>${prog.name}</h3>
            <p>${prog.chords.join(' - ')}</p>
            <span class="description">${prog.description}</span>
        </div>
    `).join('');
}

function viewChord(chordId) {
    const currentChords = getCurrentInstrumentChords();
    const chord = currentChords.find(c => c.id === chordId);
    if (!chord) return;
    
    currentChord = chord;
    
    document.getElementById('chordName').textContent = chord.name;
    document.getElementById('chordType').textContent = `Type: ${chord.type} | Difficulty: ${chord.difficulty}`;
    
    drawChordDiagram(chord);
    
    document.getElementById('fingerInfo').innerHTML = `
        <p>Finger positions: ${chord.fingers}</p>
        <p>Fret positions: ${chord.frets[0].map(f => f === -1 ? 'X' : f).join(' ')}</p>
    `;
    
    document.getElementById('theoryInfo').innerHTML = `
        <p>Notes: ${chord.notes.join(' - ')}</p>
        <p>${chord.theory}</p>
    `;
    
    loadVariations(chord);
    
    document.querySelectorAll('.tab-panel').forEach(p => {
        p.classList.remove('active');
        p.style.display = p.id === 'viewer' ? 'block' : 'none';
    });
    
    updateSaveButton();
}

function drawChordDiagram(chord) {
    const canvas = document.getElementById('chordDiagram');
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    ctx.clearRect(0, 0, width, height);
    
    // Get instrument-specific settings
    const instrumentSettings = getInstrumentSettings();
    const numStrings = instrumentSettings.strings.length;
    const stringSpacing = width / (numStrings + 1);
    const fretSpacing = height / 6;
    const startX = stringSpacing;
    const startY = fretSpacing;
    
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    
    // Draw strings
    for (let i = 0; i < numStrings; i++) {
        ctx.beginPath();
        ctx.moveTo(startX + i * stringSpacing, startY);
        ctx.lineTo(startX + i * stringSpacing, startY + 4 * fretSpacing);
        ctx.stroke();
    }
    
    // Draw frets
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(startX, startY + i * fretSpacing);
        ctx.lineTo(startX + (numStrings - 1) * stringSpacing, startY + i * fretSpacing);
        ctx.stroke();
    }
    
    // Draw chord positions
    ctx.fillStyle = '#2563eb';
    chord.frets[0].forEach((fret, string) => {
        if (string >= numStrings) return; // Skip if string doesn't exist for this instrument
        
        if (fret > 0) {
            const x = startX + (numStrings - 1 - string) * stringSpacing;
            const y = startY + (fret - 0.5) * fretSpacing;
            ctx.beginPath();
            ctx.arc(x, y, 12, 0, Math.PI * 2);
            ctx.fill();
        } else if (fret === 0) {
            const x = startX + (numStrings - 1 - string) * stringSpacing;
            const y = startY - 15;
            ctx.beginPath();
            ctx.arc(x, y, 8, 0, Math.PI * 2);
            ctx.stroke();
        } else {
            const x = startX + (numStrings - 1 - string) * stringSpacing;
            const y = startY - 15;
            ctx.font = '20px Arial';
            ctx.fillText('X', x - 7, y + 7);
        }
    });
    
    // Draw string labels
    ctx.font = '14px Arial';
    ctx.fillStyle = '#666';
    instrumentSettings.strings.forEach((note, i) => {
        ctx.fillText(note, startX + (numStrings - 1 - i) * stringSpacing - 5, height - 10);
    });
}

function getInstrumentSettings() {
    const settings = {
        guitar: { strings: ['E', 'A', 'D', 'G', 'B', 'E'] },
        bass: { strings: ['E', 'A', 'D', 'G'] },
        ukulele: { strings: ['G', 'C', 'E', 'A'] }
    };
    return settings[currentInstrument] || settings.guitar;
}

function drawMiniChord(canvasId, chord) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    ctx.clearRect(0, 0, width, height);
    
    // Get instrument-specific settings
    const instrumentSettings = getInstrumentSettings();
    const numStrings = instrumentSettings.strings.length;
    const stringSpacing = width / (numStrings + 1);
    const fretSpacing = height / 6;
    const startX = stringSpacing;
    const startY = fretSpacing;
    
    ctx.strokeStyle = '#999';
    ctx.lineWidth = 1;
    
    // Draw strings
    for (let i = 0; i < numStrings; i++) {
        ctx.beginPath();
        ctx.moveTo(startX + i * stringSpacing, startY);
        ctx.lineTo(startX + i * stringSpacing, startY + 3 * fretSpacing);
        ctx.stroke();
    }
    
    // Draw frets
    for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(startX, startY + i * fretSpacing);
        ctx.lineTo(startX + (numStrings - 1) * stringSpacing, startY + i * fretSpacing);
        ctx.stroke();
    }
    
    // Draw chord positions
    ctx.fillStyle = '#2563eb';
    chord.frets[0].forEach((fret, string) => {
        if (string >= numStrings) return; // Skip if string doesn't exist for this instrument
        
        if (fret > 0) {
            const x = startX + (numStrings - 1 - string) * stringSpacing;
            const y = startY + (fret - 0.5) * fretSpacing;
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fill();
        }
    });
}

function loadVariations(chord) {
    const container = document.getElementById('variations');
    container.innerHTML = '<p>Additional positions coming soon</p>';
}

function setupChordViewer() {
    document.getElementById('backBtn').addEventListener('click', () => {
        document.getElementById('viewer').style.display = 'none';
        document.querySelectorAll('.tab-panel').forEach(p => {
            p.style.display = '';
        });
        document.getElementById('home').classList.add('active');
        document.querySelector('[data-tab="home"]').classList.add('active');
    });
    
    document.getElementById('saveBtn').addEventListener('click', toggleSaveChord);
    document.getElementById('playChord').addEventListener('click', playChord);
    document.getElementById('playArpeggio').addEventListener('click', playArpeggio);
    document.getElementById('metronome').addEventListener('click', startPracticeMode);
    
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterSavedChords(btn.dataset.filter);
        });
    });
}

function toggleSaveChord() {
    if (!currentChord) return;
    
    const index = savedChords.findIndex(c => c.id === currentChord.id);
    
    if (index === -1) {
        savedChords.push({...currentChord, savedAt: Date.now()});
    } else {
        savedChords.splice(index, 1);
    }
    
    localStorage.setItem('savedChords', JSON.stringify(savedChords));
    updateSaveButton();
    loadSavedChords();
}

function updateSaveButton() {
    const saveBtn = document.getElementById('saveBtn');
    const isSaved = savedChords.some(c => c.id === currentChord?.id);
    saveBtn.textContent = isSaved ? '★ Saved' : '☆ Save';
    saveBtn.style.background = isSaved ? '#10b981' : '#6b7280';
}

function loadSavedChords() {
    const container = document.getElementById('savedChords');
    
    if (savedChords.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 2rem;">No saved chords yet</p>';
        return;
    }
    
    container.innerHTML = savedChords.map(chord => `
        <div class="chord-card" onclick="viewChord('${chord.id}')">
            <div class="chord-mini">
                <canvas id="saved-${chord.id}" width="80" height="100"></canvas>
            </div>
            <div class="chord-card-info">
                <h3>${chord.name}</h3>
                <span class="difficulty">${chord.difficulty}</span>
            </div>
        </div>
    `).join('');
    
    savedChords.forEach(chord => {
        drawMiniChord(`saved-${chord.id}`, chord);
    });
}

function filterSavedChords(filter) {
    let filtered = savedChords;
    
    if (filter === 'recent') {
        filtered = savedChords.slice().sort((a, b) => b.savedAt - a.savedAt).slice(0, 10);
    } else if (filter === 'favorites') {
        filtered = savedChords.filter(c => c.favorite);
    }
    
    const container = document.getElementById('savedChords');
    
    if (filtered.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 2rem;">No chords in this category</p>';
        return;
    }
    
    container.innerHTML = filtered.map(chord => `
        <div class="chord-card" onclick="viewChord('${chord.id}')">
            <div class="chord-mini">
                <canvas id="filtered-${chord.id}" width="80" height="100"></canvas>
            </div>
            <div class="chord-card-info">
                <h3>${chord.name}</h3>
                <span class="difficulty">${chord.difficulty}</span>
            </div>
        </div>
    `).join('');
    
    setTimeout(() => {
        filtered.forEach(chord => {
            drawMiniChord(`filtered-${chord.id}`, chord);
        });
    }, 100);
}

function playChord() {
    if (!currentChord) return;
    
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    const noteFrequencies = {
        'C': 261.63, 'C#': 277.18, 'D': 293.66, 'D#': 311.13,
        'E': 329.63, 'F': 349.23, 'F#': 369.99, 'G': 392.00,
        'G#': 415.30, 'A': 440.00, 'A#': 466.16, 'B': 493.88
    };
    
    currentChord.notes.forEach((note, i) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        const baseNote = note.replace('#', '#');
        oscillator.frequency.value = noteFrequencies[baseNote] || 440;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 1);
    });
}

function playArpeggio() {
    if (!currentChord) return;
    
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    const noteFrequencies = {
        'C': 261.63, 'C#': 277.18, 'D': 293.66, 'D#': 311.13,
        'E': 329.63, 'F': 349.23, 'F#': 369.99, 'G': 392.00,
        'G#': 415.30, 'A': 440.00, 'A#': 466.16, 'B': 493.88
    };
    
    currentChord.notes.forEach((note, i) => {
        setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            const baseNote = note.replace('#', '#');
            oscillator.frequency.value = noteFrequencies[baseNote] || 440;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
        }, i * 200);
    });
}

let practiceInterval = null;

function startPracticeMode() {
    const btn = document.getElementById('metronome');
    
    if (practiceInterval) {
        clearInterval(practiceInterval);
        practiceInterval = null;
        btn.textContent = '🎵 Practice Mode';
        return;
    }
    
    btn.textContent = '⏹ Stop Practice';
    
    let beat = 0;
    practiceInterval = setInterval(() => {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = beat % 4 === 0 ? 1000 : 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.05);
        
        beat++;
    }, 500);
}

function viewProgression(index) {
    const progression = progressions[index];
    if (!progression) return;
    
    alert(`Playing ${progression.name}: ${progression.chords.join(' - ')}\n\n${progression.description}\n\nTap each chord to view and practice!`);
}

function setupLessons() {
    const lessonCards = document.querySelectorAll('.lesson-card');
    
    lessonCards.forEach(card => {
        card.addEventListener('click', () => {
            const lesson = card.dataset.lesson;
            showLesson(lesson);
        });
    });
}

function showLesson(lessonType) {
    const lessons = {
        basics: `
# Professor Riffs' Chord Diagram Guide

Welcome to your first lesson! Chord diagrams show you where to place your fingers:

• Vertical lines = Strings (E A D G B E)
• Horizontal lines = Frets
• Dots = Where to press
• Numbers = Which finger to use
• X = Don't play this string
• O = Play open string

Professor's tip: Start with one finger at a time and build muscle memory!`,
        
        open: `
# Professor Riffs' Open Chord Masterclass

Essential beginner chords using open strings:
• C Major - The professor's favorite first chord
• G Major - Rock and roll foundation
• D Major - Bright and cheerful
• A Major - Full, rich sound
• E Major - Power chord foundation
• Am - The melancholic beauty
• Em - The easiest starter
• Dm - Jazz and blues essential

Professor's wisdom: Master these 8 chords and you'll be able to play thousands of songs! Practice 10 minutes daily.`,
        
        barre: `
# Professor Riffs' Barre Chord Academy

Advanced technique using your index finger as a movable capo:
• F Major - The gateway to advanced playing
• Bm - Essential minor barre chord
• F#m - Transpose any chord shape

Professor's proven method:
1. Build finger strength gradually - no rushing!
2. Roll your index finger slightly for better contact
3. Keep thumb positioned behind the neck
4. Practice daily in 5-minute focused sessions
5. Remember: Every guitarist struggles with barre chords at first!`,
        
        transitions: `
# Smooth Chord Changes

Tips for faster transitions:
1. Keep fingers close to strings
2. Move fingers together, not one by one
3. Practice without strumming first
4. Use pivot fingers when possible
5. Visualize the next chord shape

Common transitions to practice:
• G → C → D
• Am → F → C → G
• Em → Am → D → G`,
        
        progressions: `
# Common Progressions

Popular chord sequences:

I-V-vi-IV (Pop):
• C - G - Am - F
• G - D - Em - C

12 Bar Blues:
• E - E - E - E
• A - A - E - E  
• B7 - A - E - E

ii-V-I (Jazz):
• Dm - G7 - C

Practice these to jam with any band!`
    };
    
    const lesson = lessons[lessonType];
    if (lesson) {
        alert(lesson);
    }
}

document.addEventListener('DOMContentLoaded', init);