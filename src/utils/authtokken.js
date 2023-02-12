class AuthToken {
  constructor() {
    this._token = "";
  }

  getToken() {
    return localStorage.getItem("todo_token");
  }

  setToken(newToken) {
    localStorage.setItem("todo_token", newToken);
    this._token = newToken;
  }
}

export const authToken = new AuthToken();
