const fs = require('fs');
const path = 'd:/Affiliate/next-app/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Remove the floating music player from the bottom
const floatingPlayerOld = /{\/\* Floating Music Player \*\/}[\s\S]+?<div\s+className="music-player-trigger"[\s\S]+?<\/div>/;
content = content.replace(floatingPlayerOld, '');

// 2. Insert the music player into the sticky-nav-container
// We'll place it inside the social-links-sticky wrapper but with absolute positioning
const socialLinksOld = /<div className="social-links-sticky">/;
const socialLinksNew = `<div className="social-links-sticky" style={{ position: 'relative', width: '100%', maxWidth: '1200px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', width: '100%' }}>`;

content = content.replace(socialLinksOld, socialLinksNew);

// Close the new inner div and add the music player at the end of social-links-sticky
const socialLinksEndOld = /settings\.tiktok && \([\s\S]+?<\/a>[\s\S]+?\)}\s+<\/div>/;
const socialLinksEndNew = `settings\.tiktok && (
                        <a href={settings.tiktok} target="_blank" rel="noopener noreferrer" className="social-icon-mini tiktok">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                        </a>
                    )}
                </div>

                {/* Music Player moved to right side of sticky bar */}
                <div 
                    className="music-player-trigger"
                    onClick={() => {
                        if (!ytPlayer) return
                        if (isPlaying) {
                            ytPlayer.pauseVideo()
                            setIsPlaying(false)
                        } else {
                            ytPlayer.playVideo()
                            setIsPlaying(true)
                        }
                    }}
                    style={{
                        position: 'absolute',
                        right: '15px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '42px',
                        height: '42px',
                        background: isPlaying ? '#ff0050' : 'rgba(255,255,255,0.05)',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: isPlaying ? '0 0 15px rgba(255,0,80,0.3)' : 'none',
                        border: '2px solid rgba(255,255,255,0.8)',
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
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                            <path d="M9 18V5l12-2v13"></path>
                            <circle cx="6" cy="18" r="3"></circle>
                            <circle cx="18" cy="16" r="3"></circle>
                        </svg>
                    )}
                </div>
            </div>`;

content = content.replace(socialLinksEndOld, socialLinksEndNew);

fs.writeFileSync(path, content, 'utf8');
console.log('Moved music player to the far right of the sticky navigation bar');
