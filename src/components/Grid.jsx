import { gridData } from '../data/gridData';
import Cell from './Cell';

export default function Grid({
  highlightedCell,
  selectedCell,
  trail,
  isSpinning,
  selectedCategories,
  onCategoryToggle,
}) {
  return (
    <div className={`grid ${isSpinning ? 'grid--spinning' : ''}`}>
      {gridData.map((row, rowIdx) =>
        row.map((cell, colIdx) => {
          const trailIndex = trail
            ? trail.findIndex((t) => t.row === rowIdx && t.col === colIdx)
            : -1;

          const isTopLeft = rowIdx === 0 && colIdx === 0;
          const isTopRight = rowIdx === 0 && colIdx === 8;
          const isBottomLeft = rowIdx === 8 && colIdx === 0;
          const isBottomRight = rowIdx === 8 && colIdx === 8;
          const cornerRadius = isTopLeft
            ? '6px 0 0 0'
            : isTopRight
              ? '0 6px 0 0'
              : isBottomLeft
                ? '0 0 0 6px'
                : isBottomRight
                  ? '0 0 6px 0'
                  : undefined;

          // isArrow 셀 = D-day 주변 카테고리 선택 버튼
          const isCategoryButton = cell.isArrow;
          const isCategoryActive =
            isCategoryButton && selectedCategories.includes(cell.category);

          return (
            <Cell
              key={`${rowIdx}-${colIdx}`}
              cell={cell}
              isHighlighted={
                highlightedCell &&
                highlightedCell.row === rowIdx &&
                highlightedCell.col === colIdx
              }
              isSelected={
                selectedCell &&
                selectedCell.row === rowIdx &&
                selectedCell.col === colIdx
              }
              trailIndex={trailIndex}
              isSpinning={isSpinning}
              cornerRadius={cornerRadius}
              isCategoryButton={isCategoryButton}
              isCategoryActive={isCategoryActive}
              onCategoryToggle={onCategoryToggle}
            />
          );
        })
      )}
    </div>
  );
}
