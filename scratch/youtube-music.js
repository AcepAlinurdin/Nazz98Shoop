const fs = require('fs');
const path = 'd:/Affiliate/next-app/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Add YouTube Player state and script loading
const stateOld = /const \[audio, setAudio\] = useState<HTMLAudioElement \| null>\(null\)/;
const stateNew = `const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
    const [ytPlayer, setYtPlayer] = useState<any>(null)`;

content = content.replace(stateOld, stateNew);

// 2. Add YouTube API script loading in useEffect
const useEffectOld = /\/\/ Initialize Audio \(Using a more reliable source\)[\s\S]+?setAudio\(bgMusic\)/;
const useEffectNew = `// Load YouTube IFrame API
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
        }

        window.onYouTubeIframeAPIReady = () => {
            const player = new window.YT.Player('youtube-player', {
                height: '0',
                width: '0',
                videoId: 'jfKfPfyJRdk', // Lofi Girl - Relaxing Beats
                playerVars: {
                    autoplay: 0,
                    controls: 0,
                    loop: 1,
                    playlist: 'jfKfPfyJRdk'
                },
                events: {
                    onReady: (event: any) => {
                        setYtPlayer(event.target);
                        event.target.setVolume(40);
                    },
                    onStateChange: (event: any) => {
                        if (event.data === window.YT.PlayerState.PLAYING) setIsPlaying(true);
                        else setIsPlaying(false);
                    }
                }
            });
        };

        const handleFirstInteraction = () => {
            if (window.YT && window.YT.Player) {
                // If player is already ready
                const player = window.YT.get('youtube-player');
                if (player && typeof player.playVideo === 'function') {
                    player.playVideo();
                    setIsPlaying(true);
                }
            }
            document.removeEventListener('click', handleFirstInteraction);
        };

        document.addEventListener('click', handleFirstInteraction);`;

// We also need to add window.YT to TypeScript interface or just use any
// I'll wrap the useEffect content better.
content = content.replace(useEffectOld, useEffectNew);

// 3. Update the Music Player Click logic
const clickOld = /if \(!audio\) return[\s\S]+?isPlaying\s\?[\s\S]+?audio\.pause\(\)[\s\S]+?setIsPlaying\(false\)[\s\S]+?\} else \{[\s\S]+?audio\.play\(\)[\s\S]+?setIsPlaying\(true\)[\s\S]+?\}/;
const clickNew = `if (!ytPlayer) return
                    if (isPlaying) {
                        ytPlayer.pauseVideo()
                        setIsPlaying(false)
                    } else {
                        ytPlayer.playVideo()
                        setIsPlaying(true)
                    }`;

content = content.replace(clickOld, clickNew);

// 4. Add the hidden div for YouTube player
const mainOld = /<main className="container">/;
const mainNew = `<div id="youtube-player" style={{ display: 'none' }}></div>
            <main className="container">`;

content = content.replace(mainOld, mainNew);

fs.writeFileSync(path, content, 'utf8');
console.log('Implemented YouTube background music player');
