import { render, screen } from '@testing-library/react';
import ShapeIcon from '../ShapeIcon';

// Helper to check shape by tag name
const getShapeByTestId = () => screen.getByTestId('shape');

test('renders circle with correct color', () => {
  render(<ShapeIcon shape="circle" color="#ff0000" />);
  const shapeElement = getShapeByTestId();
  expect(shapeElement.tagName.toLowerCase()).toBe('circle');
  expect(shapeElement).toHaveStyle('fill: #ff0000');
});

test('renders square with correct color', () => {
  render(<ShapeIcon shape="square" color="#00ff00" />);
  const shapeElement = getShapeByTestId();
  expect(shapeElement.tagName.toLowerCase()).toBe('rect');
  expect(shapeElement).toHaveStyle('fill: #00ff00');
});

test('renders triangle with correct color', () => {
  render(<ShapeIcon shape="triangle" color="#0000ff" />);
  const shapeElement = getShapeByTestId();
  expect(shapeElement.tagName.toLowerCase()).toBe('polygon');
  expect(shapeElement).toHaveStyle('fill: #0000ff');
});

test('renders fallback text for unknown shape', () => {
  render(<ShapeIcon shape="hexagon" color="#123456" />);
  const fallback = screen.getByText('?');
  expect(fallback).toBeInTheDocument();
});
