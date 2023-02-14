import React from "react";
import * as S from "./styles";

export const SubmitButton = ({ isEnabled, children }) => {
  return (
    <S.SubmitButton
      type="submit"
      disabled={!isEnabled}
      className={`${isEnabled ? "" : "disable"}`}
    >
      {children}
    </S.SubmitButton>
  );
};
