import React from 'react';
import './ShapeIcon.css';

const hexToName = {
  '#ff0000': 'Red',
  '#0000ff': 'Blue',
  '#00ff00': 'Green',
  '#ffff00': 'Yellow',
  '#000000': 'Black',
  '#ffffff': 'White'
};

const ShapeIcon = ({ shape, color, size = 50 }) => {
  const shapeStyle = {
    fill: color.toLowerCase(),
    stroke: 'black',
    strokeWidth: 1,
  };

  const colorName = hexToName[color.toLowerCase()] || color;
  const tooltip = `Shape: ${shape}, Color: ${colorName}`;

  const renderShape = () => {
    const center = size / 2;
    const half = size / 2.5;

    switch (shape.toLowerCase()) {
      case 'circle':
        return <circle cx={center} cy={center} r={half} style={shapeStyle} data-testid="shape" />;
      case 'square':
        return <rect x={size * 0.2} y={size * 0.2} width={size * 0.6} height={size * 0.6} style={shapeStyle} data-testid="shape" />;
      case 'triangle':
        const top = `${center},${size * 0.1}`;
        const left = `${size * 0.9},${size * 0.9}`;
        const right = `${size * 0.1},${size * 0.9}`;
        return <polygon points={`${top} ${left} ${right}`} style={shapeStyle} data-testid="shape" />;
      default:
        return <text x="10" y={center} fontSize="20" fill="gray">?</text>;
    }
  };

  return (
    <div className="tooltip-wrapper">
      <svg width={size} height={size}>
        {renderShape()}
      </svg>
      <span className="tooltip-text">{tooltip}</span>
    </div>
  );
};

export default ShapeIcon;
