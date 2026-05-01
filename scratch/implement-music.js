const fs = require('fs');
const path = 'd:/Affiliate/next-app/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Add state for music
const stateOld = /const \[settings, setSettings\] = useState\(\{ instagram: '', facebook: '', tiktok: '' \}\)/;
const stateNew = `const [settings, setSettings] = useState({ instagram: '', facebook: '', tiktok: '' })
    const [isPlaying, setIsPlaying] = useState(false)
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null)`;

content = content.replace(stateOld, stateNew);

// 2. Add useEffect for audio initialization
const useEffectOld = /fetchSettings\(\)/;
const useEffectNew = `fetchSettings()
        
        // Initialize Audio
        const bgMusic = new Audio('https://cdn.pixabay.com/audio/2022/05/27/audio_1808f3030e.mp3') // Relaxing Lofi
        bgMusic.loop = true
        bgMusic.volume = 0.4
        setAudio(bgMusic)

        const handleFirstInteraction = () => {
            bgMusic.play().then(() => {
                setIsPlaying(true)
            }).catch(err => console.log("Autoplay prevented"))
            document.removeEventListener('click', handleFirstInteraction)
        }

        document.addEventListener('click', handleFirstInteraction)`;

content = content.replace(useEffectOld, useEffectNew);

// 3. Add Music Player UI at the end of the return
const returnOld = /<\/main>/;
const returnNew = `</main>
            
            {/* Floating Music Player */}
            <div 
                className="music-player-trigger"
                onClick={() => {
                    if (!audio) return
                    if (isPlaying) {
                        audio.pause()
                        setIsPlaying(false)
                    } else {
                        audio.play()
                        setIsPlaying(true)
                    }
                }}
                style={{
                    position: 'fixed',
                    bottom: '25px',
                    right: '25px',
                    zIndex: 1000,
                    width: '50px',
                    height: '50px',
                    background: isPlaying ? '#ff0050' : 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: isPlaying ? '0 0 20px rgba(255,0,80,0.5)' : '0 4px 15px rgba(0,0,0,0.3)',
                    border: '2px solid #fff',
                    transition: 'all 0.3s ease'
                }}
            >
                {isPlaying ? (
                    <div className="music-waves">
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                    </div>
                ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M9 18V5l12-2v13"></path>
                        <circle cx="6" cy="18" r="3"></circle>
                        <circle cx="18" cy="16" r="3"></circle>
                    </svg>
                )}
            </div>`;

content = content.replace(returnOld, returnNew);

fs.writeFileSync(path, content, 'utf8');
console.log('Implemented floating music player and auto-play logic');
