const fs = require('fs');
const svgwrite = require('svgwrite');

const shapes = ['circle', 'triangle', 'square'];

function generateLogo(text, textColor, shape, shapeColor) {
    const dwg = svgwrite,drawing(300, 200);
    dwg.add(dwg.text(text, {x:  150 y: 100, fill: textColor}));
    if (shape === 'circle') {
        dwg.add(dwg.circle({ cx: 150, cy: 100, r: 50, fill: shapeColor }));
    } else if (shape === 'triangle') {
        dwg.add(
            dwg.polygon({
                points: [[100, 150], [200, 150], [150, 50]],
                fill: shapeColor,
            })
        )
    } else if (shape === 'square') {
        dwg.add(dwg.rect({ x: 100, y:50, width: 100, height: 100, fill: shapeColor }));
    }

    
}