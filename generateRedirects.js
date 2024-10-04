const fs = require('fs');
const path = require('path');

// Define the redirects
const redirects = `
/*    /index.html   200
`;

// Path to the public directory
const publicDir = path.join(__dirname, 'public');

// Ensure the public directory exists
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

// Write the redirects to the _redirects file in the public directory
fs.writeFileSync(path.join(publicDir, '_redirects'), redirects);

console.log('_redirects file generated successfully!');
