import { useState, useCallback, useRef } from 'react';
import Grid from './components/Grid';
import { getSelectableCells } from './data/gridData';
import './App.css';

function App() {
  const [highlightedCell, setHighlightedCell] = useState(null);
  const [selectedCell, setSelectedCell] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const animationRef = useRef(null);

  const startRandomSelect = useCallback(() => {
    if (isSpinning) return;

    setIsSpinning(true);
    setSelectedCell(null);

    const selectableCells = getSelectableCells();
    const totalSteps = 30 + Math.floor(Math.random() * 15);
    const finalIndex = Math.floor(Math.random() * selectableCells.length);
    let step = 0;

    const animate = () => {
      const cell =
        selectableCells[(finalIndex + totalSteps - step) % selectableCells.length];
      setHighlightedCell(cell);

      step++;

      if (step <= totalSteps) {
        const progress = step / totalSteps;
        const delay = 50 + 400 * Math.pow(progress, 3);
        animationRef.current = setTimeout(animate, delay);
      } else {
        const finalCell = selectableCells[finalIndex];
        setHighlightedCell(null);
        setSelectedCell(finalCell);
        setIsSpinning(false);
      }
    };

    animate();
  }, [isSpinning]);

  return (
    <div className="app">
      <h1 className="title">데이트 코스 뽑기</h1>
      <Grid highlightedCell={highlightedCell} selectedCell={selectedCell} />
      <button
        className="spin-button"
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
