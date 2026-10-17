/**
 * Referring to Nouns - Interactive Quiz Application
 * Comprehensive 20-Question Test with Explanations & Vietnamese Translations
 * Optimized for Desktop, iPad, and Mobile Bottom-Docked Frame
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
    answer: "B",
    translation: "Chúng ta ra ngoài vườn ngồi một lát nhé?",
    explanation: "Dùng mạo từ xác định \"the\" (\"the garden\") vì trong ngữ cảnh này, khu vườn là đối tượng cụ thể mà cả người nói và người nghe đều biết rõ (khu vườn của ngôi nhà họ đang ở hoặc đang ghé thăm)."
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
    answer: "A",
    translation: "Cô ấy sống ở đường Alexandra. Nơi đó cách không xa một cửa hàng bán đồ cổ.",
    explanation: "Dùng mạo từ bất định \"an\" trước cụm danh từ đếm được số ít \"antiques shop\" được nhắc đến lần đầu tiên (người nghe chưa xác định cụ thể là tiệm đồ cổ nào), và từ \"antiques\" bắt đầu bằng nguyên âm /æ/."
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
    answer: "D",
    translation: "Chồng tôi sưu tầm đồ cổ. Anh ấy lúc nào cũng đi dự các buổi đấu giá.",
    explanation: "Không dùng mạo từ (no article) trước danh từ số nhiều \"antiques\" khi mang nghĩa chỉ chung các món đồ cổ (sở thích sưu tầm đồ cổ nói chung, không chỉ đích danh món đồ cổ cụ thể nào)."
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
    answer: "A",
    translation: "Tôi không chắc lắm, nhưng tôi nghĩ mình muốn trở thành một kiến trúc sư khi lớn lên.",
    explanation: "Trong tiếng Anh, trước danh từ chỉ nghề nghiệp số ít phải dùng mạo từ bất định \"a/an\". Vì danh từ \"architect\" bắt đầu bằng nguyên âm /ɑː/ nên ta dùng \"an\"."
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
    answer: "B",
    translation: "Tôi từng nhìn thấy một chú mèo mặc một chiếc áo khoác màu hồng và đi ủng!",
    explanation: "Dùng mạo từ bất định \"a\" trước cụm danh từ đếm được số ít \"pink coat\" được đề cập lần đầu tiên, và từ \"pink\" bắt đầu bằng phụ âm /p/."
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
    answer: "D",
    translation: "Bố tôi rất thích nhạc cổ điển và nghe thể loại này suốt ngày.",
    explanation: "\"Music\" là danh từ không đếm được. Khi diễn đạt sở thích chung đối với một thể loại âm nhạc (\"classical music\" - nhạc cổ điển nói chung), quy tắc ngữ pháp là không dùng mạo từ (no article)."
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
    answer: "B",
    translation: "Đó chính là vấn đề mà tôi đã nói với bạn.",
    explanation: "Dùng mạo từ xác định \"the\" (\"the problem\") vì danh từ \"problem\" đã được xác định cụ thể bởi mệnh đề quan hệ theo sau (\"I told you about\" - vấn đề mà tôi đã kể cho bạn)."
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
    answer: "B",
    translation: "Ông Chang, với kinh nghiệm làm việc và năng lực của mình, rất xứng đáng được thăng chức.",
    explanation: "Chỗ trống đứng trước cụm danh từ \"work experience and competence\" nên cần một tính từ sở hữu (possessive adjective) bổ nghĩa. Do chủ ngữ là \"Mr. Chang\" (nam giới, số ít) nên chọn \"his\"."
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
    answer: "C",
    translation: "Các chủ doanh nghiệp nên suy nghĩ về những gì họ có thể làm cho cộng đồng.",
    explanation: "Chỗ trống đóng vai trò đại từ chủ ngữ (subject pronoun) trong mệnh đề danh từ \"what ... can do\", thay thế cho danh từ số nhiều đứng trước là \"Business owners\" (các chủ doanh nghiệp), vì vậy phải dùng \"they\"."
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
    answer: "D",
    translation: "Bằng cấp và năng lực chuyên môn của ứng viên thứ nhất vượt trội hơn năng lực của ứng viên thứ hai.",
    explanation: "Trong cấu trúc so sánh, để tránh lặp lại danh từ số nhiều \"qualifications\", ta dùng đại từ chỉ định thay thế \"those\" (\"those of...\" = \"the qualifications of...\"). Nếu thay cho danh từ số ít thì dùng \"that\"."
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
    answer: "C",
    translation: "Ann đang làm bài tập về nhà của cô ấy.",
    explanation: "Chủ ngữ \"Ann\" là danh từ riêng chỉ nữ giới số ít. Chỗ trống đứng trước danh từ \"homework\" nên cần tính từ sở hữu (possessive adjective) tương ứng là \"her\"."
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
    answer: "D",
    translation: "Sandy đã viết một bức thư cho bố mẹ mình và gửi nó cho họ vào ngày hôm qua.",
    explanation: "Chỗ trống đứng sau giới từ \"to\" và thay thế cho tân ngữ số nhiều chỉ người đã được nhắc trước đó là \"her parents\" (bố mẹ cô ấy), vì vậy ta dùng đại từ tân ngữ (object pronoun) là \"them\"."
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
    answer: "D",
    translation: "Những đôi giày kia quá rộng đối với tôi.",
    explanation: "Danh từ \"shoes\" là danh từ số nhiều. Trong các phương án, chỉ có \"Those\" là từ hạn định chỉ định số nhiều (This/That chỉ dùng cho danh từ số ít; Then là trạng từ chỉ thời gian)."
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
    answer: "A",
    translation: "William và Tracy rất yêu quý những chú chó của họ.",
    explanation: "Cần một tính từ sở hữu (possessive adjective) bổ nghĩa cho danh từ \"dogs\". Chủ ngữ \"William and Tracy\" là ngôi thứ ba số nhiều, nên tính từ sở hữu đúng là \"their\" (\"theirs\" là đại từ sở hữu đứng độc lập, không đi kèm danh từ)."
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
    answer: "C",
    translation: "Đây là những cây bút cùng vở ghi của anh ấy.",
    explanation: "Động từ theo sau là to be số nhiều \"are\". Do đó cần một đại từ chỉ định số nhiều làm chủ ngữ. Trong 4 phương án, chỉ có \"These\" là đại từ chỉ định số nhiều phù hợp (This/That là số ít)."
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
    answer: "B",
    translation: "Thầy/Cô giáo đã kể cho chúng tôi nghe một câu chuyện thú vị.",
    explanation: "Cấu trúc: \"tell + somebody + something\" (kể cho ai điều gì). Vị trí sau động từ \"told\" đóng vai trò là tân ngữ gián tiếp (indirect object), do đó cần đại từ tân ngữ (object pronoun) \"us\" (our/his/their là các tính từ sở hữu)."
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
    answer: "C",
    translation: "Những quả chuối ở đây đã chín vàng, còn những quả chuối ở đằng kia thì vẫn còn xanh.",
    explanation: "Danh từ \"bananas\" là số nhiều, và vế sau có sự đối lập với \"those bananas over there\" (những quả chuối ở đằng kia - ở khoảng cách xa). Vì vậy vế đầu dùng để chỉ những quả ở gần người nói, dùng đại từ chỉ định số nhiều \"These\"."
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
    answer: "A",
    translation: "Hộp bút của Hoa màu xanh lam. Hộp bút của các bạn cô ấy có màu tím.",
    explanation: "\"Hoa\" là danh từ riêng chỉ nữ giới số ít. Vị trí cần điền bổ nghĩa cho danh từ \"friends\" (những người bạn của Hoa), do đó dùng tính từ sở hữu \"Her\" (\"Her friends' pencil cases\" = Hộp bút của những người bạn của cô ấy)."
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
    answer: "D",
    translation: "Tôi muốn trở thành một giáo viên và chị/em gái của tôi muốn trở thành bác sĩ.",
    explanation: "Chỗ trống đứng trước danh từ \"sister\" nên cần một tính từ sở hữu (possessive adjective). Với chủ ngữ vế trước là \"I\", tính từ sở hữu tương ứng là \"my\" (\"my sister\" = chị/em gái của tôi)."
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
    answer: "A",
    translation: "Peter vẽ rất chân thực. Đây chính là lý do tại sao cô ấy yêu thích các bức tranh của anh ấy.",
    explanation: "Cấu trúc: \"This is why + S + V...\" (Đây chính là lý do vì sao...). Đại từ chỉ định \"This\" được dùng để quy chiếu/thay thế cho cả một sự việc hoặc phát biểu đã nêu ở câu liền trước (\"Peter is so realistic\")."
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

// Explanation Box DOM
const explanationBox = document.getElementById('explanation-box');
const expBadge = document.getElementById('exp-badge');
const expTranslation = document.getElementById('exp-translation');
const expExplanation = document.getElementById('exp-explanation');

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
  
  const userChoice = userAnswers[currentQ.id];
  const hasAnswered = !!userChoice;

  // Status tag update
  if (!isSubmitted) {
    statusTag.textContent = hasAnswered ? 'Đã chọn' : 'Chưa làm';
    statusTag.className = 'status-tag' + (hasAnswered ? ' done' : '');
  } else {
    // Review mode status tag
    const isCorrect = userChoice === currentQ.answer;
    if (!hasAnswered) {
      statusTag.textContent = 'Chưa làm';
      statusTag.className = 'status-tag';
    } else if (isCorrect) {
      statusTag.textContent = '✓ Chính xác';
      statusTag.className = 'status-tag done';
    } else {
      statusTag.textContent = '✗ Chưa đúng';
      statusTag.className = 'status-tag tag-wrong';
    }
  }

  // Set question text cleanly - NO hints during quiz
  questionText.textContent = currentQ.question;

  // Render options A, B, C, D
  optionsGroup.innerHTML = '';
  currentQ.options.forEach(opt => {
    const optBtn = document.createElement('button');
    optBtn.type = 'button';
    optBtn.className = 'option-btn';
    optBtn.dataset.key = opt.key;

    const isSelected = userChoice === opt.key;
    if (isSelected) {
      optBtn.classList.add('selected');
    }

    let badgeHTML = '';

    // If already submitted (Review mode)
    if (isSubmitted) {
      optBtn.disabled = true;
      if (opt.key === currentQ.answer) {
        optBtn.classList.add('correct-ans');
        badgeHTML = `<span class="option-badge-tag badge-correct">✓ Đáp án đúng</span>`;
      } else if (isSelected && opt.key !== currentQ.answer) {
        optBtn.classList.add('wrong-ans');
        badgeHTML = `<span class="option-badge-tag badge-user-wrong">✗ Lựa chọn của bạn</span>`;
      }
    } else {
      optBtn.addEventListener('click', () => {
        selectOption(currentQ.id, opt.key);
      });
    }

    optBtn.innerHTML = `
      <span class="option-prefix">${opt.key}</span>
      <span class="option-text">${opt.text}</span>
      ${badgeHTML}
    `;

    optionsGroup.appendChild(optBtn);
  });

  // Explanation & Translation Box (Chỉ hiển thị sau khi đã nộp bài)
  if (isSubmitted) {
    explanationBox.style.display = 'flex';
    expBadge.textContent = `Đáp án đúng: ${currentQ.answer}`;
    expTranslation.textContent = currentQ.translation;
    expExplanation.textContent = currentQ.explanation;
  } else {
    explanationBox.style.display = 'none';
  }

  // Update navigation buttons state
  btnPrev.disabled = index === 0;
  if (!isSubmitted) {
    if (index === QUIZ_DATA.length - 1) {
      btnNext.innerHTML = `<span>Nộp bài</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;
    } else {
      btnNext.innerHTML = `<span>Câu tiếp</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>`;
    }
  } else {
    // In review mode, button says Câu tiếp until the end
    btnNext.disabled = index === QUIZ_DATA.length - 1;
    btnNext.innerHTML = `<span>Câu tiếp</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>`;
    btnSubmit.textContent = 'Xem lại kết quả';
  }

  updateProgressUI();
}

// User selects an option
function selectOption(questionId, selectedKey) {
  if (isSubmitted) return;

  userAnswers[questionId] = selectedKey;
  renderQuestion(currentIndex);
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
  if (isSubmitted) {
    // Re-open results modal in review mode
    resultModal.classList.add('show');
    return;
  }

  const answeredTotal = Object.keys(userAnswers).length;
  const confirmText = document.getElementById('confirm-text');
  if (answeredTotal < QUIZ_DATA.length) {
    confirmText.innerHTML = `Bạn mới hoàn thành <strong>${answeredTotal}/${QUIZ_DATA.length}</strong> câu hỏi.<br>Còn lại <strong>${QUIZ_DATA.length - answeredTotal}</strong> câu chưa chọn. Bạn có chắc muốn nộp bài bây giờ?`;
  } else {
    confirmText.innerHTML = `Bạn đã hoàn thành đủ <strong>20/20</strong> câu hỏi.<br>Bạn có muốn nộp bài và xem điểm số, đáp án đúng & giải thích chi tiết ngay bây giờ?`;
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
    item.title = 'Nhấp để xem chi tiết câu này';
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

  btnSubmit.textContent = 'Xem lại kết quả';
  resultModal.classList.add('show');
  renderQuestion(currentIndex);
}

// Reset / Retake Quiz
function restartQuiz() {
  userAnswers = {};
  isSubmitted = false;
  currentIndex = 0;
  resultModal.classList.remove('show');
  btnSubmit.textContent = 'Nộp bài thi';

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
    } else if (!isSubmitted) {
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
    btn.addEventListener('click', () => {
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
