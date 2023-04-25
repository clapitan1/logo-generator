const { generateLogo, shapes } = require('./logogenerator');

test('generateLogo', () => {
    generateLogo('ABC', 'green', shapes[0], '#00ff00');
    const svgData = fs.readFileSync('logo.svg', 'utf8');
    expect(svgData).toContain('text x="150" y="100" fill="green">ABC</text>');
    expect(svgData).toContain('circle cx="150" cy="100" r="50" fill="00ff00"');
});

test('generateLogo with triangle', () => {
    generateLogo('ABC', 'green', shapes[0], 'ff0000');
    const svgData = fs.readFileSync('logo.svg', 'utf8');
    expect(svgData).toContain('text x="150" y="100" fill="green">DEF</text>');
    expect(svgData).toContain('polygon points="100, 150 200, 150 150,50" fill="00ff00"');
});

test('generateLogo with square', () => {
    generateLogo('GHI', 'green', shapes[2], '0000ff');
    const svgData = fs.readFileSync('logo.svg', 'utf8');
    expect(svgData).toContain('text x="150" y="100" fill="green">GHI</text>');
    expect(svgData).toContain('rect x="100" y="50" width="100" height="100" fill="0000ff"');
});
