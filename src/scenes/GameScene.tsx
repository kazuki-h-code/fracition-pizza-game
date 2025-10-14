import {
  VIRTUAL_WIDTH,
  VIRTUAL_HEIGHT,
} from "../components/shell/PixiAppShell";
import { useReducer } from "react";
import { reducer, initialState } from "../reducers/gameReducer";
import { Pizza } from "../components/game/Pizza";
import { Button } from "../components/ui/Button";
import { QuestionDisplay } from "../components/ui/QuestionDisplay";
import { FeedbackDisplay } from "../components/ui/FeedbackDisplay";

export const GameScene = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const playerDenominator = state.selectedSlices.length;

  const handleSliceClick = (index: number) => {
    dispatch({ type: "toggle_slice", payload: index });
  };

  const handleIncreaseDenominator = () => {
    if (playerDenominator < 10) {
      dispatch({ type: "set_denominator", payload: playerDenominator + 1 });
    }
  };

  const handleDecreaseDenominator = () => {
    if (playerDenominator > 1) {
      dispatch({ type: "set_denominator", payload: playerDenominator - 1 });
    }
  };

  const handleReset = () => {
    console.log("リセットボタンがクリックされた");
    dispatch({ type: "reset" });
  };

  const handleCheckAnswer = () => {
    dispatch({ type: "check_answer" });
  };

  const handleNextQuestion = () => {
    dispatch({ type: "set_question" });
  };

  return (
    <>
      <QuestionDisplay
        x={VIRTUAL_WIDTH / 2}
        y={80}
        numerator={state.currentQuestion.numerator}
        denomirator={state.currentQuestion.denominator}
      />
      <Pizza
        selectedSlices={state.selectedSlices}
        onSliceClick={handleSliceClick}
        radius={150}
        x={VIRTUAL_WIDTH / 2}
        y={VIRTUAL_HEIGHT / 2 + 30}
      />
      <Button
        text="リセット"
        x={VIRTUAL_WIDTH - 120}
        y={VIRTUAL_HEIGHT / 2 - 60}
        onClick={handleReset}
      />
      <Button
        text="切る"
        x={VIRTUAL_WIDTH - 120}
        y={VIRTUAL_HEIGHT / 2}
        onClick={handleIncreaseDenominator}
      />
      <Button
        text="戻す"
        x={VIRTUAL_WIDTH - 120}
        y={VIRTUAL_HEIGHT / 2 + 60}
        onClick={handleDecreaseDenominator}
      />
      {state.judgement === "pending" && (
        <Button
          text="これでどうだ！"
          x={VIRTUAL_WIDTH / 2}
          y={550}
          onClick={handleCheckAnswer}
        />
      )}
      {state.judgement !== "pending" && (
        <FeedbackDisplay
          status={state.judgement}
          screenWidth={VIRTUAL_WIDTH}
          screenHeight={VIRTUAL_HEIGHT}
          onNextQuestion={handleNextQuestion}
        />
      )}
    </>
  );
};
