export interface ScrambleState {
  words: string[]
  currentWord: string
  scrambledWord: string
  guess: string
  points: number
  errorCounter: number
  maxAllowErrors: number
  skipCounter: number
  maxSkips: number
  isGameOver: boolean
  totalWords: number
}

const GAME_WORDS = [
  'REACT',
  'JAVASCRIPT',
  'TYPESCRIPT',
  'HTML',
  'ANGULAR',
  'SOLID',
  'NODE',
  'VUEJS',
  'SVELTE',
  'EXPRESS',
  'MONGODB',
  'POSTGRES',
  'DOCKER',
  'KUBERNETES',
  'WEBPACK',
  'VITE',
  'TAILWIND',
];

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = '') => {
  return word
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
};

export const getInitialState = (): ScrambleState => {

  const shuffleWords = shuffleArray([...GAME_WORDS])

  return {
    words: shuffleWords,
    currentWord: shuffleWords[0],
    scrambledWord: scrambleWord(shuffleWords[0]),
    guess: '',
    points: 0,
    errorCounter: 0,
    maxAllowErrors: 3,
    skipCounter: 0,
    maxSkips: 3,
    isGameOver: false,
    totalWords: shuffleWords.length,
  }
}

export type ScrambleAction =
  | { type: 'SET_GUESS', payload: string }
  | { type: 'CHECK_ANSWER' }
  | { type: 'SKIP_WORD' }
  | { type: 'START_NEW_GAME', payload: ScrambleState }

export const scrambleReducer = (state: ScrambleState, action: ScrambleAction): ScrambleState => {

  switch (action.type) {
    case 'SET_GUESS':
      return {
        ...state,
        guess: action.payload.trim().toUpperCase(),
      }
    case 'CHECK_ANSWER': {
      if (state.currentWord === state.guess) {
        const newWords = state.words.slice(1)
        return {
          ...state,
          words: newWords,
          points: state.points + 1,
          errorCounter: 0,
          guess: '',
          currentWord: newWords[0],
          scrambledWord: scrambleWord(newWords[0]),
        }
      }
      return {
        ...state,
        guess: '',
        errorCounter: state.errorCounter + 1,
        isGameOver: (state.errorCounter + 1) >= state.maxAllowErrors || state.skipCounter >= state.maxSkips,
      }
    }
    case "SKIP_WORD": {
      if (state.skipCounter >= state.maxSkips) return state

      const updateWords = state.words.slice(1)

      return {
        ...state,
        skipCounter: state.skipCounter + 1,
        words: updateWords,
        currentWord: updateWords[0],
        scrambledWord: scrambleWord(updateWords[0]),
        guess: '',
      }
    }
    case "START_NEW_GAME":
      return action.payload
    default:
      return state;
  }

}