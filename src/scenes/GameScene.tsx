import { useApplication } from "@pixi/react";
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
  const { app } = useApplication();

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
        x={150}
        y={50}
        numerator={state.currentQuestion.numerator}
        denomirator={state.currentQuestion.denominator}
      />
      <Pizza
        selectedSlices={state.selectedSlices}
        onSliceClick={handleSliceClick}
        radius={150}
        x={VIRTUAL_WIDTH / 2}
        y={VIRTUAL_HEIGHT / 2}
      />
      <Button
        text="リセット"
        x={VIRTUAL_WIDTH / 2 - 200}
        y={525}
        onClick={handleReset}
      />
      <Button text="切る" x={330} y={500} onClick={handleIncreaseDenominator} />
      <Button text="戻す" x={520} y={500} onClick={handleDecreaseDenominator} />
      {state.judgement === "pending" && (
        <Button
          text="これでどうだ！"
          x={710}
          y={500}
          onClick={handleCheckAnswer}
        />
      )}
      {state.judgement !== "pending" && (
        <FeedbackDisplay
          status={state.judgement}
          screenWidth={app.screen.width}
          screenHeight={app.screen.height}
          onNextQuestion={handleNextQuestion}
        />
      )}
    </>
  );
};
