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
  const animationRef = useRef(null);
  const trailRef = useRef([]);

  const startRandomSelect = useCallback(() => {
    if (isSpinning) return;

    setIsSpinning(true);
    setSelectedCell(null);
    setShowConfetti(false);
    trailRef.current = [];
    setTrail([]);

    const selectableCells = getSelectableCells();
    const totalSteps = 35 + Math.floor(Math.random() * 15);
    const finalIndex = Math.floor(Math.random() * selectableCells.length);
    let step = 0;

    const animate = () => {
      const idx = (finalIndex + totalSteps - step) % selectableCells.length;
      const cell = selectableCells[idx];

      // 트레일 업데이트
      trailRef.current = [cell, ...trailRef.current].slice(0, TRAIL_LENGTH);
      setTrail([...trailRef.current]);
      setHighlightedCell(cell);

      step++;

      if (step <= totalSteps) {
        const progress = step / totalSteps;
        // 더 부드러운 감속 커브
        const delay = 40 + 500 * Math.pow(progress, 4);
        animationRef.current = setTimeout(animate, delay);
      } else {
        // 최종 선택 연출: 짧은 대기 후 결과 표시
        setTimeout(() => {
          const finalCell = selectableCells[finalIndex];
          setHighlightedCell(null);
          setTrail([]);
          setSelectedCell(finalCell);
          setShowConfetti(true);
          setIsSpinning(false);

          // 컨페티 제거
          setTimeout(() => setShowConfetti(false), 2000);
        }, 200);
      }
    };

    animate();
  }, [isSpinning]);

  return (
    <div className="app">
      <h1 className="title">데이트 코스 뽑기</h1>
      <div className="grid-wrapper">
        <Grid
          highlightedCell={highlightedCell}
          selectedCell={selectedCell}
          trail={trail}
          isSpinning={isSpinning}
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
