# 7-Day TOSS Trend Sparkline in Eviction Matrix

Incorporate a high-density, minimalist 7-day True Organic Sentiment Score (TOSS) sparkline chart for every housemate in the Eviction Matrix table roster to visualize real-time trajectory (rising momentum versus vulnerability collapse).

## User Review & Critical Decisions

> [!IMPORTANT]
> The following design choices were confirmed during the interactive clarification phase:

- **Confirmed Column Placement**: Dedicated "7-Day TOSS Trend" column in the main tabular roster of the Eviction Matrix view, providing an immediate scannable view of trajectory across all housemates.
- **Confirmed Visual Styling**: Minimalist monochrome stroke with explicit start (Day 1) and end (Day 7) endpoint dots, accompanied by compact net delta indicators (e.g., `+20` or `-24`).

---

## 1. Overview & Core Concept

### What It Does
Visualizes the 7-day temporal evolution of each contestant's True Organic Sentiment Score (TOSS) leading up to the eviction vote. Instead of relying on a single static score, analysts and viewers can immediately determine whether a housemate's organic support is accelerating (safe from eviction) or collapsing (approaching dangerous eviction thresholds) following weekly broadcast controversies.

### Key Value
- **Temporal Directionality**: Distinguishes a contestant whose score is currently at 45 but surging upward from one at 45 whose support has plummeted from 70.
- **Scannable Density**: Fits seamlessly into high-density dashboard rows without horizontal layout shifts or visual clutter.

---

## 2. User Experience & Visual Design

### Visual Layout & Appearance
- **Dedicated Table Column**: Inserted immediately adjacent to the "True TOSS" score column.
- **Minimalist Monochrome Sparkline**:
  - Crisp SVG line rendering with smooth polyline points across 7 daily intervals.
  - Start point marker (Day 1) and highlighted end point marker (Day 7).
  - Subtle hairline baseline indicator and net delta tag (e.g., `+20%` in emerald or `-24%` in rose).
- **Tabular Alignment**: Preserves strict tabular numerals (`font-mono tabular-nums`) and clean vertical alignment.
- **Detailed Modal Extension**: Also reflected within the Contestant Detail Modal to provide an expanded view of the 7-day trend curve.

---

## 3. Technical Architecture & Implementation Steps

### Data Model Extension (`src/types.ts`)
```typescript
export interface Contestant {
  // ... existing fields ...
  tossTrend7d: number[]; // Array of 7 integer scores representing Day 1 to Day 7
}
```

### Dataset Grounding (`src/data/mockRealityData.ts`)
Populate authentic 7-day trend vectors reflecting reality TV plotlines:
- **Karanvir Roy**: `[68, 64, 58, 52, 48, 45, 44]` (Continuous downward drift as viewers rejected artificial neutrality).
- **Simran Kaur**: `[62, 65, 70, 74, 78, 80, 82]` (Steady organic rise powered by family and casual YouTube support).
- **Arjun Deshmukh**: `[50, 54, 48, 60, 62, 65, 66]` (V-shaped bounce back after challenging house hierarchy).
- **Rhea Sharma**: `[45, 42, 38, 35, 34, 32, 31]` (Steady erosion driven by narrative invisibility).
- **Farhan Qureshi**: `[75, 76, 75, 78, 77, 76, 77]` (Rock-solid plateau).
- **Meera Joshi**: `[55, 52, 44, 38, 33, 30, 29]` (Rapid collapse following nomination clash).

### Sparkline Component (`src/components/Sparkline.tsx`)
Create a zero-dependency SVG sparkline component:
- Computes normalized SVG coordinates for 7 points across an `80px x 24px` viewBox.
- Draws smooth polyline with monochrome stroke (`stroke-slate-300`).
- Renders Day 1 circle (`r=1.5`) and Day 7 circle (`r=2`).
- Renders net delta badge with directional indicator.

### EvictionMatrixView Integration (`src/components/EvictionMatrixView.tsx`)
- Add `<th>7-Day Trend</th>` header with sort capability by net 7-day delta.
- Render the `<Sparkline data={c.tossTrend7d} />` in each table row.
- Ensure responsive display (collapses gracefully on mobile viewports).

---

## 4. Verification & Testing
- Run `lint_applet` (`tsc --noEmit`) to verify strict typing.
- Run `compile_applet` to verify zero build errors.
- Verify rendering across all sorting orders (TOSS, Eviction Risk, PR Delta).
