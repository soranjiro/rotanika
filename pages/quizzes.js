const genres = ['数', '原子'];

const quizzesNumber = [
  {
    question: '奇数ですか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [1, 4],
    finalAnswer: [-1, -1]
  },
  {
    question: '素数ですか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [2, 3],
    finalAnswer: [-1, -1]
  },
  {
    question: 'メルセンヌ素数ですか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [0, 1],
    finalAnswer: [0, 1]
  },
  {
    question: '約数は7つ以上ありますか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [0, 1],
    finalAnswer: [2, 3]
  },
  {
    question: '平方数ですか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [5, 6],
    finalAnswer: [-1, -1]
  },
  {
    question: '2^nで表せますか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [0, 1],
    finalAnswer: [4, 5]
  },
  {
    question: '完全数ですか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [0, 1],
    finalAnswer: [6, 7]
  },
  // 他の問題を追加
];

const keywordsNumber = [2147483647,6904303451,9458583811,2047088711,4294967296,2952183556,8589869056,6655983616];

const quizzesElement = [
  {
    question: '常温で気体ですか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [1, 4],
    finalAnswer: [-1, -1]
  },
  {
    question: '-150°Fでも気体ですか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [2, 3],
    finalAnswer: [-1, -1]
  },
  {
    question: 'カメラのフラッシュに使われていますか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [0, 1],
    finalAnswer: [0, 1]
  },
  {
    question: '気体の中で最も重たい元素ですか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [0, 1],
    finalAnswer: [2, 3]
  },
  {
    question: '原子番号は100以下ですか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [5, 6],
    finalAnswer: [-1, -1]
  },
  {
    question: '酸素と結合して黄色になりますか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [0, 1],
    finalAnswer: [4, 5]
  },
  {
    question: '発見したのは女性ですか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [0, 1],
    finalAnswer: [6, 7]
  },
]

const keywordsElement = ['Kr', 'Xe', 'Rn', 'Cl', 'Pr', 'Dy', 'Mt', 'Fl'];

export default genres;
export { quizzesNumber };
export { keywordsNumber };
export { quizzesElement };
export { keywordsElement };

