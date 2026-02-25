import { useState, useCallback, useRef } from 'react';
import Grid from './components/Grid';
import { getSelectableCells } from './data/gridData';
import './App.css';

const TRAIL_LENGTH = 4;

function App() {
  const [highlightedCell, setHighlightedCell] = useState(null);
  const [trail, setTrail] = useState([]);
  const [selectedCell, setSelectedCell] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const animationRef = useRef(null);
  const trailRef = useRef([]);

  const handleCategoryToggle = useCallback(
    (category) => {
      if (isSpinning) return;
      setSelectedCategories((prev) =>
        prev.includes(category)
          ? prev.filter((c) => c !== category)
          : [...prev, category]
      );
    },
    [isSpinning]
  );

  const startRandomSelect = useCallback(() => {
    if (isSpinning) return;

    setIsSpinning(true);
    setSelectedCell(null);
    setShowConfetti(false);
    trailRef.current = [];
    setTrail([]);

    const selectableCells = getSelectableCells(selectedCategories);
    if (selectableCells.length === 0) {
      setIsSpinning(false);
      return;
    }

    const totalSteps = 35 + Math.floor(Math.random() * 15);
    const finalIndex = Math.floor(Math.random() * selectableCells.length);
    let step = 0;

    const animate = () => {
      const idx = (finalIndex + totalSteps - step) % selectableCells.length;
      const cell = selectableCells[idx];

      trailRef.current = [cell, ...trailRef.current].slice(0, TRAIL_LENGTH);
      setTrail([...trailRef.current]);
      setHighlightedCell(cell);

      step++;

      if (step <= totalSteps) {
        const progress = step / totalSteps;
        const delay = 40 + 500 * Math.pow(progress, 4);
        animationRef.current = setTimeout(animate, delay);
      } else {
        setTimeout(() => {
          const finalCell = selectableCells[finalIndex];
          setHighlightedCell(null);
          setTrail([]);
          setSelectedCell(finalCell);
          setShowConfetti(true);
          setIsSpinning(false);

          setTimeout(() => setShowConfetti(false), 2000);
        }, 200);
      }
    };

    animate();
  }, [isSpinning, selectedCategories]);

  return (
    <div className="app">
      <h1 className="title">데이트 코스 뽑기</h1>
      <div className="grid-wrapper">
        <Grid
          highlightedCell={highlightedCell}
          selectedCell={selectedCell}
          trail={trail}
          isSpinning={isSpinning}
          selectedCategories={selectedCategories}
          onCategoryToggle={handleCategoryToggle}
        />
        {showConfetti && (
          <div className="confetti-container">
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="confetti-piece"
                style={{
                  '--x': `${Math.random() * 100}%`,
                  '--delay': `${Math.random() * 0.3}s`,
                  '--rotation': `${Math.random() * 720 - 360}deg`,
                  '--color': ['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#ff6bcb', '#a66cff'][i % 6],
                }}
              />
            ))}
          </div>
        )}
      </div>
      {selectedCategories.length > 0 && (
        <div className="filter-info">
          {selectedCategories.length}개 카테고리 선택됨
          <button
            className="filter-clear"
            onClick={() => setSelectedCategories([])}
            disabled={isSpinning}
          >
            초기화
          </button>
        </div>
      )}
      <button
        className={`spin-button ${isSpinning ? 'spin-button--spinning' : ''}`}
        onClick={startRandomSelect}
        disabled={isSpinning}
      >
        {isSpinning ? '선택 중...' : '랜덤 선택!'}
      </button>
      {selectedCell && !isSpinning && (
        <div className="result">
          <span className="result__text">
            오늘의 데이트: <strong>{selectedCell.text.replace('\n', '')}</strong>
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
