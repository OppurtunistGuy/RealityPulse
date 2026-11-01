import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

// Test sparkline mathematical and normalization coordinate logic
describe('Sparkline Component Logic - Edge Tests', () => {
  const computeSparklineCoordinates = (
    data: number[],
    width = 68,
    height = 20,
    paddingY = 3
  ) => {
    if (!data || data.length < 2) return null;

    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const usableHeight = height - paddingY * 2;

    const points = data.map((val, idx) => {
      const x = Number(((idx / (data.length - 1)) * (width - 4) + 2).toFixed(1));
      const normalizedY = (val - min) / range;
      const y = Number((height - paddingY - normalizedY * usableHeight).toFixed(1));
      return { x, y, val };
    });

    const startPoint = points[0];
    const endPoint = points[points.length - 1];
    const delta = endPoint.val - startPoint.val;

    return { points, startPoint, endPoint, delta };
  };

  it('returns null for empty data or single-point arrays', () => {
    assert.equal(computeSparklineCoordinates([]), null);
    assert.equal(computeSparklineCoordinates([50]), null);
  });

  it('handles flat constant values without division by zero or NaN', () => {
    const flat = [50, 50, 50, 50, 50, 50, 50];
    const result = computeSparklineCoordinates(flat);

    assert.ok(result !== null);
    assert.equal(result.delta, 0);
    assert.equal(result.points.length, 7);
    for (const pt of result.points) {
      assert.ok(!Number.isNaN(pt.x));
      assert.ok(!Number.isNaN(pt.y));
      assert.equal(pt.val, 50);
    }
  });

  it('correctly computes positive delta for rising trends', () => {
    const rising = [60, 62, 65, 70, 75, 78, 82];
    const result = computeSparklineCoordinates(rising);

    assert.ok(result !== null);
    assert.equal(result.delta, 22);
    assert.equal(result.startPoint.val, 60);
    assert.equal(result.endPoint.val, 82);
    assert.ok(result.points[0].x < result.points[6].x);
    // In SVG, higher values have lower Y coordinates (top of screen)
    assert.ok(result.endPoint.y < result.startPoint.y);
  });

  it('correctly computes negative delta for collapsing trends', () => {
    const falling = [70, 65, 58, 50, 42, 38, 30];
    const result = computeSparklineCoordinates(falling);

    assert.ok(result !== null);
    assert.equal(result.delta, -40);
    assert.equal(result.startPoint.val, 70);
    assert.equal(result.endPoint.val, 30);
    assert.ok(result.endPoint.y > result.startPoint.y);
  });
});

