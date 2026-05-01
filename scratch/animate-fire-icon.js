const fs = require('fs');
const path = 'd:/Affiliate/next-app/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace the pin icon with a flame (fire) icon and add animation class
const flameIcon = `<div className="flame-icon">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                                                            <path d="M12 2C12 2 12 7 9 9C6 11 6 14 6 16C6 19.31 8.69 22 12 22C15.31 22 18 19.31 18 16C18 12 15 9 15 9C15 9 15 5 12 2Z" />
                                                        </svg>
                                                    </div>`;

// Find where the pin SVG is and replace it with our flame icon structure
// We look for the pin SVG specifically for the badge
const pinBadgeOld = /<svg width="10" height="10" viewBox="0 0 24 24" fill="white">[\s\S]+?<path d="M16 12V4l1 1V2H7v2l1-1v8c0 2.21-1.79 4-4 4v2h7v5l1 1 1-1v-5h7v-2c-2.21 0-4-1.79-4-4z" \/>\s+<\/svg>/g;

content = content.replace(pinBadgeOld, flameIcon);

// Also replace the other pin SVG for the case without custom label
const pinSoloOld = /<svg width="16" height="16" viewBox="0 0 24 24" fill="#ff0050">[\s\S]+?<path d="M16 12V4l1 1V2H7v2l1-1v8c0 2.21-1.79 4-4 4v2h7v5l1 1 1-1v-5h7v-2c-2.21 0-4-1.79-4-4z" \/>\s+<\/svg>/g;

const flameSolo = `<div className="flame-icon-solo">
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#ff0050">
                                                        <path d="M12 2C12 2 12 7 9 9C6 11 6 14 6 16C6 19.31 8.69 22 12 22C15.31 22 18 19.31 18 16C18 12 15 9 15 9C15 9 15 5 12 2Z" />
                                                    </svg>
                                                </div>`;

content = content.replace(pinSoloOld, flameSolo);

fs.writeFileSync(path, content, 'utf8');
console.log('Replaced pin icons with animated flame icons');
