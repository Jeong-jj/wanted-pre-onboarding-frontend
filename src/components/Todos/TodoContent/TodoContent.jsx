import React from "react";

import { EditDeleteButtons } from "../EditDeleteButtons/EditDeleteButtons";
import * as S from "./styles";

export const TodoContent = ({ data }) => {
  const handleChecked = () => {};

  return (
    <S.ListWrap key={data.id}>
      <label>
        <input
          type="checkbox"
          checked={data.isCompleted}
          onChange={handleChecked}
        />
        <span>{data.todo}</span>
      </label>

      <EditDeleteButtons />
    </S.ListWrap>
  );
};
