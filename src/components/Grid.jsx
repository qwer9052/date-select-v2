import { gridData } from '../data/gridData';
import Cell from './Cell';

export default function Grid({ highlightedCell, selectedCell }) {
  return (
    <div className="grid">
      {gridData.map((row, rowIdx) =>
        row.map((cell, colIdx) => (
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
          />
        ))
      )}
    </div>
  );
}
