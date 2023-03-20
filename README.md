# 프리온보딩 인턴쉽 선발과제: Todo App

안녕하세요, 프론트엔드 개발자를 준비 중인 **조정준**입니다.<br/>
해당 repository는 원티드 프리온보딩 인턴쉽의 선발과제인 Todo App 결과물입니다.<br/>
요구 사항에 따라 해당 결과물의 기능을 만들었으며,
화면을 구성하는 UI는 제작자 임의로 작성되었습니다.

---

<br/>

## 📝 진행 가이드

- 진행 간 문의사항은 이 레파지토리의 Issue로 등록해주세요
- Create React App을 이용해 과제를 구현해주세요
- 함수 컴포넌트를 이용해서 진행해주세요
- UI는 지원자 개인이 생각했을 때 자연스러운 형태로 구현해주세요, UI는 평가에 영향을 미치지 않습니다.
- README.md 작성은 필수입니다. 아래의 사항은 반드시 포함되도록 해주세요
  - 프로젝트의 실행 방법
  - 데모 영상
  - 데모 영상은 배포 링크로 대체 가능하며, 배포가 되었고 배포된 사이트에서 기능이 모두 동작하면 가산점이 부여됩니다.
- 기능구현에 직접적으로 연관된 라이브러리 사용은 허용되지 않습니다.(React-Query 등)
- 사용가능한 라이브러리 목록은 아래와 같습니다.
  - React Router
  - HTTP Client 라이브러리(Axios 등)
  - 스타일링 관련 라이브러리(Sass, Styled Components, Emotion 등)
  - 아이콘 등 UI 관련 라이브러리(Font-Awesome, React-Icons, Bootstrap 등)
  - 기능과 직접적인 연관이 없는 설정관련 라이브러리(craco, dotenv 등)

<br/>

> [📃요구 사항](https://github.com/walking-sunset/selection-task) 확인: 자세한 요구 사항 확인 가능

<br/>
<br/>

## 🏠 배포 페이지 바로가기

- 배포 URL: https://jeong-jj.github.io/wanted-pre-onboarding-frontend/

<br/>

## 🚀 설치 방법

파일 다운로드 혹은 fork 및 clone 후 다음 명령어 실행

```
npm install
npm start
```

<br/>

## 👀 구현 사항(preview)

### 메인 페이지 `/`

![main page](https://user-images.githubusercontent.com/96231175/226337284-d93ee797-9d05-4d4a-ad25-044812399c2b.jpg)

- 로그인 및 회원가입 버튼으로 해당 페이지 이동 가능
- TodoApp의 깃허브와 요구사항 링크 연결

<br/>
<br/>

### 회원가입 페이지 `/signup`

![join page](https://user-images.githubusercontent.com/96231175/226337304-43f4f0b6-cffa-4b0b-8396-47c5783d1c98.jpg)

- 유효성 검사 불통과 시엔 버튼 비활성화(disabled)
  - 이메일 조건: `@` 포함
  - 비밀번호 조건: 8자 이상
- 이미 가입된 이메일이 있을 시엔 경고창 메세지 알림
- 만약 로그인된 상태라면 `/todo`로 redirect
  - localstorage의 token값으로 확인
  - 저장된 token값이 있다면 로그인되어 있는 것으로 간주

<br/>
<br/>

### 로그인 페이지 `/signin`

![login page](https://user-images.githubusercontent.com/96231175/226337302-9ccf2521-90a9-49b2-a0ab-5582b194fe5f.jpg)

- 로그인 실패 시 경고창 메세지 알림
  - ex) `해당 사용자가 존재하지 않습니다.` or `비밀번호를 다시 확인해주세요.`
- 로그인 성공 시 `/todo`로 redirect
  - JWT token은 localstorage에 저장
- 만약 로그인된 상태라면 `/todo`로 redirect
  - localstorage의 token값으로 확인
  - 저장된 token값이 있다면 로그인되어 있는 것으로 간주

<br/>
<br/>

### Todo 페이지 `/todo`

- Form의 input에 값 입력 후 submit시 데이터 전송 및 반영
  - 아무 값도 없을 시엔 버튼 비활성화
- 저장된 token이 없을 때 접근 시에는 `/signin`으로 redirect
- Logout버튼으로 로그아웃 가능
  - 로그아웃 시 localstorage에 저장된 token 삭제
  - 로그아웃 시 `/signin`으로 redirect

#### 1) 아직 작성된 내용이 없을 때

![todo page1](https://user-images.githubusercontent.com/96231175/226337298-97da8175-3c39-4df6-88f7-a3729a5889b1.jpg)

- 받아온 데이터에 내용이 없을 시 알림 문구 띄워줌

<br/>

#### 2) 할 일이 작성되어 있을 때

![todo page2](https://user-images.githubusercontent.com/96231175/226337294-11b7b1f4-a56f-404b-9558-c72e0f905e98.jpg)

- 데이터가 있을 시 TodoList 작성
- 체크박스 클릭을 통해 체크 사항 수정 가능
- 삭제 버튼(휴지통)으로 해당 목록 삭제 가능

<br/>

#### 3) 할 일 목록 수정하기

![todo editing](https://user-images.githubusercontent.com/96231175/226337321-4b2fac23-e109-4c0a-9767-da6995aaec32.jpg)

- 수정 버튼 클릭시 editing 상태 돌입
  - 기존 내용이 그대로 input안에 value값으로 들어오도록 함
- 내용 수정 후 확인 클릭 시 수정 내용 반영 및 리렌더링
- 취소 버튼 클릭시 기존 List 화면으로 돌아오도록 함

<br/>
<br/>

## ⚙ 기술 스택

- axios
- react-router
- styled-componenet
- react-icons
