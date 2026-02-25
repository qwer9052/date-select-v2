import { CATEGORIES } from '../data/gridData';

export default function Cell({ cell, isHighlighted, isSelected }) {
  const cat = CATEGORIES[cell.category];
  const isLabel = cell.isLabel;
  const isDday = cell.category === 'dday';
  const isArrow = cell.isArrow;

  const bgColor = isLabel ? cat.labelColor : cat.color;

  const className = [
    'cell',
    isLabel && 'cell--label',
    isDday && 'cell--dday',
    isArrow && 'cell--arrow',
    isHighlighted && 'cell--highlighted',
    isSelected && 'cell--selected',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={className}
      style={{
        backgroundColor: isDday ? '#333' : bgColor,
        color: isDday ? '#fff' : '#333',
      }}
    >
      <span className="cell__text">
        {cell.text.split('\n').map((line, i) => (
          <span key={i}>
            {line}
            {i < cell.text.split('\n').length - 1 && <br />}
          </span>
        ))}
      </span>
    </div>
  );
}
