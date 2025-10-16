// stateの型
export type GameState = {
  selectedSlices: boolean[];
  currentQuestion: {
    numerator: number;
    denominator: number;
  };
  judgement: "pending" | "correct" | "wrong";
};

// actionの型
export type GameAction =
  | { type: "toggle_slice"; payload: number }
  | { type: "set_denominator"; payload: number }
  | { type: "reset" }
  | { type: "check_answer" }
  | { type: "set_question" };

// 初期状態
export const initialState: GameState = {
  selectedSlices: [false],
  currentQuestion: { numerator: 1, denominator: 2 },
  judgement: "pending",
};

// reducer関数
export function reducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "toggle_slice": {
      const newSelectedSlices = [...state.selectedSlices];
      newSelectedSlices[action.payload] = !newSelectedSlices[action.payload];
      return { ...state, selectedSlices: newSelectedSlices };
    }
    case "set_denominator": {
      return { ...state, selectedSlices: Array(action.payload).fill(false) };
    }
    case "reset": {
      return { ...state, selectedSlices: [false] };
    }
    case "check_answer": {
      const selectedCount = state.selectedSlices.filter(Boolean).length;
      const isCorrect =
        selectedCount === state.currentQuestion.numerator &&
        state.selectedSlices.length === state.currentQuestion.denominator;
      return {
        ...state,
        judgement: isCorrect ? "correct" : "wrong",
      };
    }
    case "set_question": {
      const newDenominator = Math.floor(Math.random() * 9) + 2;
      const newNumerator = Math.floor(Math.random() * newDenominator) + 1;

      return {
        ...initialState,
        currentQuestion: {
          numerator: newNumerator,
          denominator: newDenominator,
        },
      };
    }
    default:
      throw new Error("Unkown action type");
  }
}
