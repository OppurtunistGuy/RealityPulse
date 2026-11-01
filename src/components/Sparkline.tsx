import React from 'react';

interface SparklineProps {
  data: number[];
  width?: number;
  height?: number;
  showDelta?: boolean;
}

export const Sparkline: React.FC<SparklineProps> = ({
  data,
  width = 68,
  height = 20,
  showDelta = true
}) => {
  if (!data || data.length < 2) return null;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const paddingY = 3;
  const usableHeight = height - paddingY * 2;

  // Compute SVG coordinates
  const points = data.map((val, idx) => {
    const x = Number(((idx / (data.length - 1)) * (width - 4) + 2).toFixed(1));
    const normalizedY = (val - min) / range;
    const y = Number((height - paddingY - normalizedY * usableHeight).toFixed(1));
    return { x, y, val };
  });

  const pointsString = points.map((p) => `${p.x},${p.y}`).join(' ');

  const startPoint = points[0];
  const endPoint = points[points.length - 1];
  const delta = endPoint.val - startPoint.val;
  const isRising = delta > 0;
  const isFalling = delta < 0;

  return (
    <div className="flex items-center gap-2">
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="overflow-visible shrink-0 select-none"
      >
        {/* Subtle reference baseline */}
        <line
          x1={2}
          y1={height - 1}
          x2={width - 2}
          y2={height - 1}
          stroke="#1e293b"
          strokeWidth={1}
          strokeDasharray="2 2"
        />

        {/* Minimalist monochrome sparkline stroke */}
        <polyline
          fill="none"
          stroke="#94a3b8"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          points={pointsString}
        />

        {/* Day 1 Start Point */}
        <circle
          cx={startPoint.x}
          cy={startPoint.y}
          r={1.75}
          fill="#475569"
          stroke="#0f172a"
          strokeWidth={1}
        />

        {/* Day 7 End Point */}
        <circle
          cx={endPoint.x}
          cy={endPoint.y}
          r={2.25}
          fill={isRising ? '#34d399' : isFalling ? '#f43f5e' : '#38bdf8'}
          stroke="#0f172a"
          strokeWidth={1}
        />
      </svg>

      {/* Net 7-day delta tag */}
      {showDelta && (
        <span
          className={`font-mono tabular-nums text-[10px] font-semibold w-8 text-right shrink-0 ${
            isRising ? 'text-emerald-400' : isFalling ? 'text-rose-400' : 'text-slate-400'
          }`}
          title={`Day 1: ${startPoint.val} → Day 7: ${endPoint.val}`}
        >
          {delta > 0 ? `+${delta}` : delta}
        </span>
      )}
    </div>
  );
};
