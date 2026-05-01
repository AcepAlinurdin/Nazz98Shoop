const fs = require('fs');
const path = 'd:/Affiliate/next-app/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// The better Push Pin SVG path
const betterPinSVG = `<svg width="11" height="11" viewBox="0 0 24 24" fill="white">
                                                            <path d="M16 12V4l1 1V2H7v2l1-1v8c0 2.21-1.79 4-4 4v2h7v5l1 1 1-1v-5h7v-2c-2.21 0-4-1.79-4-4z" />
                                                        </svg>`;

const betterPinSVG_Large = `<svg width="16" height="16" viewBox="0 0 24 24" fill="#ff0050">
                                                    <path d="M16 12V4l1 1V2H7v2l1-1v8c0 2.21-1.79 4-4 4v2h7v5l1 1 1-1v-5h7v-2c-2.21 0-4-1.79-4-4z" />
                                                </svg>`;

// We'll replace the existing SVG path inside the premium badge block
// The previous SVG path started with <path d="M16 3c-1.1 0-2 .9-2 2v3.17c-2.12.83-3.61 2.82-3.83 5.16H5.17l-.83.83 1.41 1.41.83-.83h5.17c.22 2.34 1.71 4.33 3.83 5.16V22h2v-3.17c2.12-.83 3.61-2.82 3.83-5.16h5.17l.83-.83-1.41-1.41-.83.83H18.17c-.22-2.34-1.71-4.33-3.83-5.16V5c0-1.1-.9-2-2-2z" />

const oldPath = /<path d="M16 3c-1\.1 0-2 \.9-2 2v3\.17c-2\.12\.83-3\.61 2\.82-3\.83 5\.16H5\.17l-\.83\.83 1\.41 1\.41\.83-\.83h5\.17c\.22 2\.34 1\.71 4\.33 3\.83 5\.16V22h2v-3\.17c2\.12-\.83 3\.61-2\.82 3\.83-5\.16h5\.17l\.83-\.83-1\.41-1\.41-\.83\.83H18\.17c-\.22-2\.34-1\.71-4\.33-3\.83-5\.16V5c0-1\.1-\.9-2-2-2z" \/>/g;
const newPath = `<path d="M16 12V4l1 1V2H7v2l1-1v8c0 2.21-1.79 4-4 4v2h7v5l1 1 1-1v-5h7v-2c-2.21 0-4-1.79-4-4z" />`;

const newContent = content.replace(oldPath, newPath);

if (newContent !== content) {
    fs.writeFileSync(path, newContent, 'utf8');
    console.log('Successfully updated Pin icon to a clearer Push Pin SVG');
} else {
    console.log('Old Pin SVG path not found in page.tsx');
}
