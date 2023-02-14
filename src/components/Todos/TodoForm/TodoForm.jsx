import React, { useEffect, useState } from "react";

import { SubmitButton } from "components/common/SubmitButton/SubmitButton";
import * as S from "./styles";

export const TodoForm = () => {
  const [isFilled, setIsFilled] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, [value, setIsFilled]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <S.FormWrap>
      <S.Input
        data-testid="new-todo-input"
        value={value}
        placeholder="what is your plan?"
        onChange={handleChange}
      />
      <SubmitButton data-testid="new-todo-add-button" isEnabled={isFilled}>
        추가
      </SubmitButton>
    </S.FormWrap>
  );
};
