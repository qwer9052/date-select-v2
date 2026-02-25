import { CATEGORIES } from '../data/gridData';

export default function Cell({
  cell,
  isHighlighted,
  isSelected,
  trailIndex,
  isSpinning,
  cornerRadius,
  isCategoryButton,
  isCategoryActive,
  onCategoryToggle,
}) {
  const cat = CATEGORIES[cell.category];
  const isLabel = cell.isLabel;
  const isDday = cell.category === 'dday';
  const isInTrail = trailIndex > 0;

  const bgColor = isLabel ? cat.labelColor : cat.color;

  const className = [
    'cell',
    isLabel && 'cell--label',
    isDday && 'cell--dday',
    cell.isArrow && 'cell--arrow',
    isHighlighted && 'cell--highlighted',
    isInTrail && 'cell--trail',
    isSelected && 'cell--selected',
    isSpinning && !isHighlighted && !isInTrail && 'cell--dimmed',
    isCategoryButton && 'cell--category-btn',
    isCategoryActive && 'cell--category-active',
  ]
    .filter(Boolean)
    .join(' ');

  const trailOpacity = isInTrail ? 1 - trailIndex * 0.25 : undefined;

  const handleClick = () => {
    if (isCategoryButton && onCategoryToggle) {
      onCategoryToggle(cell.category);
    }
  };

  return (
    <div
      className={className}
      style={{
        backgroundColor: isDday ? '#333' : bgColor,
        color: isDday ? '#fff' : '#333',
        '--trail-opacity': trailOpacity,
        borderRadius: cornerRadius,
      }}
      onClick={handleClick}
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
