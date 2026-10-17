/**
 * Referring to Nouns - Interactive Quiz Application
 * Comprehensive 20-Question Test with iPad/Mobile Bottom Docked Frame
 */

const QUIZ_DATA = [
  {
    id: 1,
    question: "1. Shall we sit in _______ garden for a while?",
    options: [
      { key: "A", text: "an" },
      { key: "B", text: "the" },
      { key: "C", text: "a" },
      { key: "D", text: "no article" }
    ],
    answer: "B"
  },
  {
    id: 2,
    question: "2. She lives in Alexandra Road. It’s not far from _______ antiques shop.",
    options: [
      { key: "A", text: "an" },
      { key: "B", text: "a" },
      { key: "C", text: "the" },
      { key: "D", text: "no article" }
    ],
    answer: "A"
  },
  {
    id: 3,
    question: "3. My husband collected _______antiques. He’s always going to auctions.",
    options: [
      { key: "A", text: "an" },
      { key: "B", text: "the" },
      { key: "C", text: "a" },
      { key: "D", text: "no article" }
    ],
    answer: "D"
  },
  {
    id: 4,
    question: "4. I’m not sure, but I think I’d like to be _______architect when I grow up.",
    options: [
      { key: "A", text: "an" },
      { key: "B", text: "a" },
      { key: "C", text: "the" },
      { key: "D", text: "no article" }
    ],
    answer: "A"
  },
  {
    id: 5,
    question: "5. I once saw a cat wearing _______ pink coat and boots!",
    options: [
      { key: "A", text: "an" },
      { key: "B", text: "a" },
      { key: "C", text: "the" },
      { key: "D", text: "no article" }
    ],
    answer: "B"
  },
  {
    id: 6,
    question: "6. My father likes _______classical music and listens to it all the time.",
    options: [
      { key: "A", text: "an" },
      { key: "B", text: "the" },
      { key: "C", text: "a" },
      { key: "D", text: "no article" }
    ],
    answer: "D"
  },
  {
    id: 7,
    question: "7. That is _______ problem I told you about.",
    options: [
      { key: "A", text: "an" },
      { key: "B", text: "the" },
      { key: "C", text: "a" },
      { key: "D", text: "no article" }
    ],
    answer: "B"
  },
  {
    id: 8,
    question: "8. Mr. Chang, with _______ work experience and competence, deserves the promotion.",
    options: [
      { key: "A", text: "he" },
      { key: "B", text: "his" },
      { key: "C", text: "him" },
      { key: "D", text: "himself" }
    ],
    answer: "B"
  },
  {
    id: 9,
    question: "9. Business owners should think about what _______ can do for the public.",
    options: [
      { key: "A", text: "he" },
      { key: "B", text: "she" },
      { key: "C", text: "they" },
      { key: "D", text: "you" }
    ],
    answer: "C"
  },
  {
    id: 10,
    question: "10. The first candidate’s qualifications are superior to _______ of the second candidate.",
    options: [
      { key: "A", text: "this" },
      { key: "B", text: "that" },
      { key: "C", text: "them" },
      { key: "D", text: "those" }
    ],
    answer: "D"
  },
  {
    id: 11,
    question: "11. Ann is doing _______homework.",
    options: [
      { key: "A", text: "their" },
      { key: "B", text: "his" },
      { key: "C", text: "her" },
      { key: "D", text: "its" }
    ],
    answer: "C"
  },
  {
    id: 12,
    question: "12. Sandy wrote a letter to her parents and sent it to_______ yesterday.",
    options: [
      { key: "A", text: "it" },
      { key: "B", text: "the parents" },
      { key: "C", text: "herself" },
      { key: "D", text: "them" }
    ],
    answer: "D"
  },
  {
    id: 13,
    question: "13. _______ shoes are too big for me.",
    options: [
      { key: "A", text: "This" },
      { key: "B", text: "That" },
      { key: "C", text: "Then" },
      { key: "D", text: "Those" }
    ],
    answer: "D"
  },
  {
    id: 14,
    question: "14. William and Tracy love _______ dogs so much.",
    options: [
      { key: "A", text: "their" },
      { key: "B", text: "theirs" },
      { key: "C", text: "they" },
      { key: "D", text: "These" }
    ],
    answer: "A"
  },
  {
    id: 15,
    question: "15. _______ are his pens with notebooks.",
    options: [
      { key: "A", text: "This" },
      { key: "B", text: "That" },
      { key: "C", text: "These" },
      { key: "D", text: "There" }
    ],
    answer: "C"
  },
  {
    id: 16,
    question: "16. The teacher told _______an interesting story.",
    options: [
      { key: "A", text: "our" },
      { key: "B", text: "us" },
      { key: "C", text: "his" },
      { key: "D", text: "their" }
    ],
    answer: "B"
  },
  {
    id: 17,
    question: "17. _______ bananas are yellow, but those bananas over there are green.",
    options: [
      { key: "A", text: "This" },
      { key: "B", text: "That" },
      { key: "C", text: "These" },
      { key: "D", text: "Those" }
    ],
    answer: "C"
  },
  {
    id: 18,
    question: "18. Hoa’s pencil case is blue. _______friends’ pencil cases are violet.",
    options: [
      { key: "A", text: "Her" },
      { key: "B", text: "His" },
      { key: "C", text: "Their" },
      { key: "D", text: "My" }
    ],
    answer: "A"
  },
  {
    id: 19,
    question: "19. I want to be a teacher and _______sister wants to be a doctor.",
    options: [
      { key: "A", text: "me" },
      { key: "B", text: "us" },
      { key: "C", text: "them" },
      { key: "D", text: "my" }
    ],
    answer: "D"
  },
  {
    id: 20,
    question: "20. Peter is so realistic. _______ is why she loves his drawing.",
    options: [
      { key: "A", text: "This" },
      { key: "B", text: "The" },
      { key: "C", text: "He" },
      { key: "D", text: "Its" }
    ],
    answer: "A"
  }
];

// App State
let currentIndex = 0;
let userAnswers = {}; // { [questionId]: 'A' | 'B' | 'C' | 'D' }
let isSubmitted = false;
let startTime = Date.now();
let timerInterval = null;
let currentDeviceView = 'desktop';

// DOM Elements
const appRoot = document.getElementById('app-root');
const questionPillGrid = document.getElementById('question-pill-grid');
const currentQBadge = document.getElementById('current-q-badge');
const statusTag = document.getElementById('status-tag');
const questionText = document.getElementById('question-text');
const optionsGroup = document.getElementById('options-group');
const answeredCount = document.getElementById('answered-count');
const progressBarFill = document.getElementById('progress-bar-fill');
const timerDisplay = document.getElementById('timer-display');

const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnSubmit = document.getElementById('btn-submit');
const btnQuickSubmit = document.getElementById('btn-quick-submit');

const resultModal = document.getElementById('result-modal');
const confirmModal = document.getElementById('confirm-modal');
const btnCloseResult = document.getElementById('btn-close-result');
const btnCloseConfirm = document.getElementById('btn-close-confirm');
const btnCancelSubmit = document.getElementById('btn-cancel-submit');
const btnConfirmSubmit = document.getElementById('btn-confirm-submit');
const btnReview = document.getElementById('btn-review');
const btnRestart = document.getElementById('btn-restart');

const resultScore = document.getElementById('result-score');
const resultRating = document.getElementById('result-rating');
const statCorrect = document.getElementById('stat-correct');
const statWrong = document.getElementById('stat-wrong');
const statTime = document.getElementById('stat-time');
const breakdownGrid = document.getElementById('breakdown-grid');

const btnThemeToggle = document.getElementById('btn-theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Initialize Application
function initApp() {
  buildNavigatorPills();
  renderQuestion(currentIndex);
  startTimer();
  setupEventListeners();
  loadThemePreference();
}

// Timer Functions
function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  startTime = Date.now();
  timerInterval = setInterval(() => {
    if (isSubmitted) return;
    const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
    const mins = String(Math.floor(elapsedSeconds / 60)).padStart(2, '0');
    const secs = String(elapsedSeconds % 60).padStart(2, '0');
    timerDisplay.textContent = `${mins}:${secs}`;
  }, 1000);
}

function getFormattedTime() {
  return timerDisplay.textContent;
}

// Build 1 to 20 Navigator Pills
function buildNavigatorPills() {
  questionPillGrid.innerHTML = '';
  QUIZ_DATA.forEach((q, index) => {
    const pill = document.createElement('button');
    pill.type = 'button';
    pill.className = 'q-pill';
    pill.dataset.index = index;
    pill.textContent = q.id;
    pill.addEventListener('click', () => {
      currentIndex = index;
      renderQuestion(currentIndex);
    });
    questionPillGrid.appendChild(pill);
  });
  updateProgressUI();
}

// Render Current Question inside the Bottom Docked Frame
function renderQuestion(index) {
  const currentQ = QUIZ_DATA[index];
  
  // Update header info inside question frame
  currentQBadge.textContent = `CÂU ${currentQ.id} / ${QUIZ_DATA.length}`;
  
  const hasAnswered = !!userAnswers[currentQ.id];
  statusTag.textContent = hasAnswered ? 'Đã chọn' : 'Chưa làm';
  if (hasAnswered) {
    statusTag.classList.add('done');
  } else {
    statusTag.classList.remove('done');
  }

  // Set question text cleanly - NO hints
  questionText.textContent = currentQ.question;

  // Render options A, B, C, D
  optionsGroup.innerHTML = '';
  currentQ.options.forEach(opt => {
    const optBtn = document.createElement('button');
    optBtn.type = 'button';
    optBtn.className = 'option-btn';
    optBtn.dataset.key = opt.key;

    // Check if previously selected
    const isSelected = userAnswers[currentQ.id] === opt.key;
    if (isSelected) {
      optBtn.classList.add('selected');
    }

    // If already submitted (Review mode)
    if (isSubmitted) {
      optBtn.disabled = true;
      if (opt.key === currentQ.answer) {
        optBtn.classList.add('correct-ans');
      } else if (isSelected && opt.key !== currentQ.answer) {
        optBtn.classList.add('wrong-ans');
      }
    } else {
      optBtn.addEventListener('click', () => {
        selectOption(currentQ.id, opt.key);
      });
    }

    optBtn.innerHTML = `
      <span class="option-prefix">${opt.key}</span>
      <span class="option-text">${opt.text}</span>
    `;

    optionsGroup.appendChild(optBtn);
  });

  // Update navigation buttons state
  btnPrev.disabled = index === 0;
  if (index === QUIZ_DATA.length - 1) {
    btnNext.innerHTML = `<span>Nộp bài</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;
  } else {
    btnNext.innerHTML = `<span>Câu tiếp</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>`;
  }

  updateProgressUI();
}

// User selects an option
function selectOption(questionId, selectedKey) {
  if (isSubmitted) return;

  userAnswers[questionId] = selectedKey;
  renderQuestion(currentIndex);

  // Optional: Auto advance to next question smoothly after 300ms if not on last question
  /*
  if (currentIndex < QUIZ_DATA.length - 1) {
    setTimeout(() => {
      currentIndex++;
      renderQuestion(currentIndex);
    }, 320);
  }
  */
}

// Update Top Progress Bar and Navigator Pills
function updateProgressUI() {
  const answeredTotal = Object.keys(userAnswers).length;
  answeredCount.textContent = answeredTotal;
  
  const percentage = (answeredTotal / QUIZ_DATA.length) * 100;
  progressBarFill.style.width = `${percentage}%`;

  // Update all pills
  const pills = questionPillGrid.querySelectorAll('.q-pill');
  pills.forEach((pill, idx) => {
    const qId = QUIZ_DATA[idx].id;
    const isAnswered = !!userAnswers[qId];

    pill.classList.toggle('active', idx === currentIndex);
    pill.classList.toggle('answered', isAnswered);

    // If submitted, show review colors in navigator
    if (isSubmitted) {
      const isCorrect = userAnswers[qId] === QUIZ_DATA[idx].answer;
      if (isCorrect) {
        pill.style.backgroundColor = 'var(--success-light)';
        pill.style.borderColor = 'var(--success)';
        pill.style.color = '#065f46';
      } else {
        pill.style.backgroundColor = 'var(--danger-light)';
        pill.style.borderColor = 'var(--danger)';
        pill.style.color = '#991b1b';
      }
    }
  });
}

// Submission Flow
function handleOpenSubmitModal() {
  const answeredTotal = Object.keys(userAnswers).length;
  const confirmText = document.getElementById('confirm-text');
  if (answeredTotal < QUIZ_DATA.length) {
    confirmText.innerHTML = `Bạn mới hoàn thành <strong>${answeredTotal}/${QUIZ_DATA.length}</strong> câu hỏi.<br>Còn lại <strong>${QUIZ_DATA.length - answeredTotal}</strong> câu chưa chọn. Bạn có chắc muốn nộp bài bây giờ?`;
  } else {
    confirmText.innerHTML = `Bạn đã hoàn thành đủ <strong>20/20</strong> câu hỏi.<br>Bạn có muốn nộp bài và xem điểm số ngay bây giờ?`;
  }
  confirmModal.classList.add('show');
}

function submitQuiz() {
  isSubmitted = true;
  confirmModal.classList.remove('show');
  clearInterval(timerInterval);

  let correctCount = 0;
  breakdownGrid.innerHTML = '';

  QUIZ_DATA.forEach((q, idx) => {
    const userChoice = userAnswers[q.id];
    const isCorrect = userChoice === q.answer;
    if (isCorrect) correctCount++;

    const item = document.createElement('div');
    item.className = `breakdown-item ${isCorrect ? 'correct' : 'wrong'}`;
    item.innerHTML = `
      <span>Câu ${q.id}</span>
      <span>${isCorrect ? '✓ Đúng' : `✗ (${q.answer})`}</span>
    `;
    item.addEventListener('click', () => {
      resultModal.classList.remove('show');
      currentIndex = idx;
      renderQuestion(currentIndex);
    });
    breakdownGrid.appendChild(item);
  });

  const wrongCount = QUIZ_DATA.length - correctCount;
  const timeTaken = getFormattedTime();

  resultScore.textContent = correctCount;
  statCorrect.textContent = correctCount;
  statWrong.textContent = wrongCount;
  statTime.textContent = timeTaken;

  if (correctCount >= 18) {
    resultRating.textContent = '🌟 Xuất sắc!';
    resultRating.style.color = '#10b981';
  } else if (correctCount >= 14) {
    resultRating.textContent = '👍 Giỏi!';
    resultRating.style.color = '#4f46e5';
  } else if (correctCount >= 10) {
    resultRating.textContent = '⚡ Đạt yêu cầu';
    resultRating.style.color = '#f59e0b';
  } else {
    resultRating.textContent = '📖 Cần ôn tập lại';
    resultRating.style.color = '#ef4444';
  }

  resultModal.classList.add('show');
  renderQuestion(currentIndex);
}

// Reset / Retake Quiz
function restartQuiz() {
  userAnswers = {};
  isSubmitted = false;
  currentIndex = 0;
  resultModal.classList.remove('show');

  // Reset pill styles
  const pills = questionPillGrid.querySelectorAll('.q-pill');
  pills.forEach(pill => {
    pill.style.backgroundColor = '';
    pill.style.borderColor = '';
    pill.style.color = '';
    pill.classList.remove('answered', 'active');
  });

  startTimer();
  renderQuestion(currentIndex);
}

// Device View Switcher for Testing (Desktop / iPad / Mobile)
function setDeviceView(view) {
  currentDeviceView = view;
  appRoot.classList.remove('desktop-mode', 'ipad-mode', 'mobile-mode');
  appRoot.classList.add(`${view}-mode`);

  document.querySelectorAll('.dev-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === view);
  });
}

// Theme Handling
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', nextTheme);
  themeIcon.textContent = nextTheme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('referring_quiz_theme', nextTheme);
}

function loadThemePreference() {
  const savedTheme = localStorage.getItem('referring_quiz_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

// Event Listeners Setup
function setupEventListeners() {
  // Navigation
  btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      renderQuestion(currentIndex);
    }
  });

  btnNext.addEventListener('click', () => {
    if (currentIndex < QUIZ_DATA.length - 1) {
      currentIndex++;
      renderQuestion(currentIndex);
    } else {
      handleOpenSubmitModal();
    }
  });

  btnSubmit.addEventListener('click', handleOpenSubmitModal);
  btnQuickSubmit.addEventListener('click', handleOpenSubmitModal);

  // Modals
  btnCloseResult.addEventListener('click', () => resultModal.classList.remove('show'));
  btnCloseConfirm.addEventListener('click', () => confirmModal.classList.remove('show'));
  btnCancelSubmit.addEventListener('click', () => confirmModal.classList.remove('show'));
  btnConfirmSubmit.addEventListener('click', submitQuiz);

  btnReview.addEventListener('click', () => {
    resultModal.classList.remove('show');
    renderQuestion(currentIndex);
  });

  btnRestart.addEventListener('click', restartQuiz);

  // Theme
  btnThemeToggle.addEventListener('click', toggleTheme);

  // Device Switcher
  document.querySelectorAll('.dev-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const view = btn.dataset.view;
      setDeviceView(view);
    });
  });

  // Keyboard navigation & quick answer selection
  document.addEventListener('keydown', (e) => {
    if (resultModal.classList.contains('show') || confirmModal.classList.contains('show')) return;

    if (e.key === 'ArrowLeft' && currentIndex > 0) {
      currentIndex--;
      renderQuestion(currentIndex);
    } else if (e.key === 'ArrowRight' && currentIndex < QUIZ_DATA.length - 1) {
      currentIndex++;
      renderQuestion(currentIndex);
    } else if (['1', 'a', 'A'].includes(e.key)) {
      selectOption(QUIZ_DATA[currentIndex].id, 'A');
    } else if (['2', 'b', 'B'].includes(e.key)) {
      selectOption(QUIZ_DATA[currentIndex].id, 'B');
    } else if (['3', 'c', 'C'].includes(e.key)) {
      selectOption(QUIZ_DATA[currentIndex].id, 'C');
    } else if (['4', 'd', 'D'].includes(e.key)) {
      selectOption(QUIZ_DATA[currentIndex].id, 'D');
    }
  });
}

// Start
document.addEventListener('DOMContentLoaded', initApp);
