const fs = require('fs');
const path = 'd:/Affiliate/next-app/src/app/globals.css';
let content = fs.readFileSync(path, 'utf8');

// Find the position of the first corrupted character (null byte or weird pattern)
// Or just truncate at the end of the good part
const goodPartEnd = content.indexOf('.reveal.active {\n    opacity: 1;\n    transform: translateY(0);\n}');
if (goodPartEnd !== -1) {
    const finalContent = content.substring(0, goodPartEnd + 63) + `

/* Custom Masonry Split Layout */
.masonry-grid {
    display: flex;
    gap: 20px;
    align-items: flex-start;
}

.masonry-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

@media (max-width: 768px) {
    .masonry-grid {
        gap: 10px;
    }
    .masonry-column {
        gap: 10px;
    }
}
`;
    fs.writeFileSync(path, finalContent, 'utf8');
    console.log('Fixed globals.css successfully');
} else {
    console.log('Could not find the target string to fix');
}
