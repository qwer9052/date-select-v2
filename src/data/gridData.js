// 카테고리 색상 정의
export const CATEGORIES = {
  culture: { name: '문화생활', color: '#E8D5F5', labelColor: '#D4B8E8' },
  activity: { name: '액티비티', color: '#FFD6E0', labelColor: '#FFB8C9' },
  shopping: { name: '쇼핑', color: '#D5E8F5', labelColor: '#B8D4E8' },
  craft: { name: '체험', color: '#D5F5D5', labelColor: '#B8E8B8' },
  food: { name: '맛집', color: '#FFF5D5', labelColor: '#FFE8A0' },
  nature: { name: '자연힐링', color: '#D5F5E8', labelColor: '#B8E8D4' },
  home: { name: '집콕', color: '#E8E0F0', labelColor: '#D4C8E0' },
  entertainment: { name: '오락', color: '#FFE8D5', labelColor: '#FFD4B8' },
  dday: { name: 'D-day', color: '#333333', labelColor: '#333333' },
  arrow: { name: 'arrow', color: 'transparent', labelColor: 'transparent' },
};

// 9x9 그리드 데이터 (이미지 기반)
// isLabel: 카테고리 라벨 셀 (선택 불가)
// isSelectable: false인 셀은 랜덤 선택에서 제외
export const gridData = [
  // Row 0
  [
    { text: '전시회', category: 'culture' },
    { text: '박물관', category: 'culture' },
    { text: '영화관', category: 'culture' },
    { text: '실내\n낚시장', category: 'activity' },
    { text: '레이\n저건', category: 'activity' },
    { text: '아이스\n링크장', category: 'activity' },
    { text: '백화점', category: 'shopping' },
    { text: '플리\n마켓', category: 'shopping' },
    { text: '소품샵', category: 'shopping' },
  ],
  // Row 1
  [
    { text: '뮤지컬', category: 'culture' },
    { text: '문화\n생활', category: 'culture', isLabel: true },
    { text: '독립\n영화', category: 'culture' },
    { text: '실내\n수영장', category: 'activity' },
    { text: '액티\n비티', category: 'activity', isLabel: true },
    { text: '놀이\n공원', category: 'activity' },
    { text: '아울렛', category: 'shopping' },
    { text: '쇼핑', category: 'shopping', isLabel: true },
    { text: '지하\n상가', category: 'shopping' },
  ],
  // Row 2
  [
    { text: '연극', category: 'culture' },
    { text: '도서관', category: 'culture' },
    { text: '아쿠아\n리움', category: 'culture' },
    { text: '실내\n서핑', category: 'activity' },
    { text: '트램\n폴린', category: 'activity' },
    { text: '클라\n이밍', category: 'activity' },
    { text: '골목\n시장', category: 'shopping' },
    { text: '다이소', category: 'shopping' },
    { text: '초대형\n복합몰', category: 'shopping' },
  ],
  // Row 3
  [
    { text: '뜨개', category: 'craft' },
    { text: '가죽\n공방', category: 'craft' },
    { text: '베이킹', category: 'craft' },
    { text: '문화\n생활', category: 'culture', isLabel: true, isArrow: true },
    { text: '액티\n비티', category: 'activity', isLabel: true, isArrow: true },
    { text: '쇼핑', category: 'shopping', isLabel: true, isArrow: true },
    { text: '감성\n카페', category: 'food' },
    { text: '노상\n포차', category: 'food' },
    { text: '레스\n토랑', category: 'food' },
  ],
  // Row 4 (중앙 행 - D-day)
  [
    { text: '향수\n공방', category: 'craft' },
    { text: '체험', category: 'craft', isLabel: true },
    { text: '그림', category: 'craft' },
    { text: '← 체험', category: 'craft', isLabel: true, isArrow: true },
    { text: 'D-day', category: 'dday', isLabel: true },
    { text: '맛집 →', category: 'food', isLabel: true, isArrow: true },
    { text: '한식\n주점', category: 'food' },
    { text: '맛집', category: 'food', isLabel: true },
    { text: '브런치', category: 'food' },
  ],
  // Row 5
  [
    { text: '유리\n공예', category: 'craft' },
    { text: '도자기\n공예', category: 'craft' },
    { text: '반지', category: 'craft' },
    { text: '자연\n힐링', category: 'nature', isLabel: true, isArrow: true },
    { text: '집콕', category: 'home', isLabel: true, isArrow: true },
    { text: '오락', category: 'entertainment', isLabel: true, isArrow: true },
    { text: '야시장', category: 'food' },
    { text: '인스타\n맛집', category: 'food' },
    { text: '이자\n카야', category: 'food' },
  ],
  // Row 6
  [
    { text: '공원\n산책로', category: 'nature' },
    { text: '천문대', category: 'nature' },
    { text: '야경', category: 'nature' },
    { text: '청소\n돕기', category: 'home' },
    { text: '낮잠', category: 'home' },
    { text: '소주\n칵테일', category: 'entertainment' },
    { text: '코노', category: 'entertainment' },
    { text: '보드\n게임', category: 'entertainment' },
    { text: '스크린\n야구', category: 'entertainment' },
  ],
  // Row 7
  [
    { text: '수목원', category: 'nature' },
    { text: '자연\n힐링', category: 'nature', isLabel: true },
    { text: '등산', category: 'nature' },
    { text: '추억\n팔이', category: 'home' },
    { text: '집콕', category: 'home', isLabel: true },
    { text: '요리\n하기', category: 'home' },
    { text: '볼링', category: 'entertainment' },
    { text: '오락', category: 'entertainment', isLabel: true },
    { text: '피시방', category: 'entertainment' },
  ],
  // Row 8
  [
    { text: '호수\n강변', category: 'nature' },
    { text: '바다', category: 'nature' },
    { text: '숲', category: 'nature' },
    { text: '돼지\n파티', category: 'home' },
    { text: '게임', category: 'home' },
    { text: '넷플', category: 'home' },
    { text: '방탈출', category: 'entertainment' },
    { text: '플스방', category: 'entertainment' },
    { text: '게임장', category: 'entertainment' },
  ],
];

// 선택 가능한 셀만 필터링 (D-day, 카테고리 라벨, 화살표 셀 제외)
export function getSelectableCells() {
  const cells = [];
  gridData.forEach((row, rowIdx) => {
    row.forEach((cell, colIdx) => {
      if (!cell.isLabel && !cell.isArrow && cell.category !== 'dday') {
        cells.push({ ...cell, row: rowIdx, col: colIdx });
      }
    });
  });
  return cells;
}
