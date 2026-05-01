const fs = require('fs');
const path = 'd:/Affiliate/next-app/src/app/globals.css';

const pinnedCss = `

/* Highlight Pinned Products */
.product-card.pinned {
    border: 2px solid var(--primary) !important;
    background: linear-gradient(180deg, rgba(255, 0, 80, 0.08) 0%, var(--glass-bg) 100%) !important;
    box-shadow: 0 10px 40px rgba(255, 0, 80, 0.2);
    transform: scale(1.01);
    z-index: 5;
}

.product-card.pinned:hover {
    box-shadow: 0 20px 50px rgba(255, 0, 80, 0.4);
    transform: scale(1.03) translateY(-10px);
    border-color: #fff !important;
}

/* Pulsing effect for pinned badges */
@keyframes pulse-red {
    0% { box-shadow: 0 0 0 0 rgba(255, 0, 80, 0.7); }
    70% { box-shadow: 0 0 0 10px rgba(255, 0, 80, 0); }
    100% { box-shadow: 0 0 0 0 rgba(255, 0, 80, 0); }
}
`;

fs.appendFileSync(path, pinnedCss);
console.log('Successfully added highlight styles for pinned products');
