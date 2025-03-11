// 퀴즈 문제 데이터
const quizData = [
  {
    question: 'HTML에서 목록을 만들 때 사용하는 태그가 아닌 것은?',
    options: ['ul', 'ol', 'dl', 'ml'],
    answer: 3, // <ml>
    explanation:
      '<ul>은 순서가 없는 목록, <ol>은 순서가 있는 목록, <dl>은 정의 목록을 만드는 태그입니다. <ml>은 존재하지 않는 태그입니다.',
  },
  {
    question: 'CSS에서 요소의 외부 여백을 설정하는 속성은?',
    options: ['padding', 'margin', 'border', 'spacing'],
    answer: 1, // margin
    explanation:
      'margin은 요소의 외부 여백, padding은 요소의 내부 여백, border는 테두리를 설정합니다.',
  },
  {
    question: 'JavaScript에서 변수를 선언하는 키워드가 아닌 것은?',
    options: ['var', 'let', 'const', 'function'],
    answer: 3, // function
    explanation:
      'var, let, const는 변수 선언 키워드입니다. function은 함수를 선언하는 키워드입니다.',
  },
  {
    question: 'HTML5에서 추가된 의미론적(Semantic) 태그는?',
    options: ['div', 'span', 'section', 'pre'],
    answer: 2, // <section>
    explanation:
      'section은 HTML5에서 추가된 의미론적 태그입니다. div와 span은 기존 HTML에도 있던 비의미론적 태그입니다. <content>는 존재하지 않는 태그입니다.',
  },
  {
    question:
      'CSS에서 flexbox 레이아웃의 주축(main axis) 방향을 설정하는 속성은?',
    options: ['flex-wrap', 'flex-direction', 'justify-content', 'align-items'],
    answer: 1, // flex-direction
    explanation:
      'flex-direction은 주축 방향을 설정합니다. flex-wrap은 아이템의 줄바꿈, justify-content는 주축 기준 정렬, align-items는 교차축 기준 정렬을 담당합니다.',
  },
  {
    question: 'JavaScript에서 배열의 끝에 새 요소를 추가하는 메서드는?',
    options: [
      'array.push()',
      'array.pop()',
      'array.shift()',
      'array.unshift()',
    ],
    answer: 0, // array.push()
    explanation:
      'push()는 배열 끝에 요소를 추가합니다. pop()은 배열 끝 요소를 제거, shift()는 배열 앞 요소를 제거, unshift()는 배열 앞에 요소를 추가합니다.',
  },
  {
    question: 'HTML에서 이미지를 삽입하는 태그는?',
    options: ['image', 'img', 'picture', 'figure'],
    answer: 1, // <img>
    explanation:
      'img는 이미지를 삽입하는 기본 태그입니다. picture는 반응형 이미지를 위한 컨테이너, figure는 독립적인 콘텐츠를 위한 컨테이너입니다.',
  },
  {
    question: 'CSS에서 요소를 화면에서 완전히 사라지게 하는 속성과 값은?',
    options: [
      'visibility: hidden',
      'opacity: 0',
      'display: none',
      'position: absolute',
    ],
    answer: 2, // display: none
    explanation:
      'display: none은 요소를 화면에서 완전히 제거합니다. visibility: hidden은 요소를 보이지 않게 하지만 공간은 유지, opacity: 0은 투명하게 만듭니다.',
  },
  {
    question: 'JavaScript에서 조건에 따라 코드를 실행하는 문법이 아닌 것은?',
    options: ['if-else', 'switch', 'for', 'try-catch'],
    answer: 2, // for
    explanation:
      'for는 반복문입니다. if-else, switch는 조건문, try-catch는 예외처리를 위한 구문입니다.',
  },
  {
    question: 'HTML 문서의 메타데이터를 포함하는 태그는?',
    options: ['body', 'main', 'head', 'header'],
    answer: 2, // <head>
    explanation:
      '<head>는 문서의 메타데이터를 포함합니다. body는 문서의 내용, main은 주요 콘텐츠, header는 소개나 탐색 링크를 포함합니다.',
  },
];

// 변수 초기화
let currentQuestion = 0; //현재 문제가 몇 번인지
let score = 0;
let userAnswers = new Array(quizData.length).fill(-1);
let quizCompleted = false;

// DOM 요소 선택
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const submitButton = document.getElementById('submit-btn');
const restartButton = document.getElementById('restart-btn');
const resultMessage = document.getElementById('result-message');
const quizElement = document.getElementById('quiz');
const resultsElement = document.getElementById('results');
const scoreElement = document.getElementById('score');
const summaryElement = document.getElementById('summary');
const retryButton = document.getElementById('retry-btn');

// 퀴즈 시작 시 초기화
function initQuiz() {
  currentQuestion = 0;
  score = 0;
  userAnswers = new Array(quizData.length).fill(-1);
  quizCompleted = false;

  loadQuestion();
  updateUI();

  quizElement.classList.remove('hide');
  resultsElement.classList.add('hide');
  resultMessage.textContent = '';
  resultMessage.className = '';
}

function loadQuestion(){
  questionElement.textContent=quizData[currentQuestion++];
  optionsContainer.innerHTML = '';

  currentQuizData.options.forEach((option, index) => {
    const optionElement = document.createElement('div');
    optionElement.className = 'option';
    if (userAnswers[currentQuestion] === index) {
      optionElement.classList.add('selected');
    }
    optionElement.textContent = option;
    optionElement.dataset.index = index;

    optionElement.addEventListener('click', selectOption);
    optionsContainer.appendChild(optionElement);
  }
}