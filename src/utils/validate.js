export const validate = (values) => {
  let errors = {};

  const emailRegExp = /^.*@.*$/i;
  const passwordRegExp = /^.{8,}/i;

  // 이메일 조건 확인
  if (!values.email) {
    errors.email = "이메일을 입력해주세요.";
  } else if (!emailRegExp.test(values.email)) {
    errors.email = "😓 @를 포함하여 작성해주세요.";
  } else {
    errors.email = "";
  }

  // 비밀번호 조건 확인
  if (!values.password) {
    errors.password = "비밀번호를 입력해주세요.";
  } else if (!passwordRegExp.test(values.password)) {
    errors.password = "😓 비밀번호는 8자 이상 입력해주세요.";
  } else {
    errors.password = "";
  }

  return errors;
};
