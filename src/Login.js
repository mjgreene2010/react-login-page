import "./styling/Login.css";

const Login = (props) => {
  // const usernameChangeHandler = (e) => {
  //   console.log(e.target.value);
  // };

  // const passwordChangeHandler = (e) => {
  //   console.log(e.target.value);
  // };

  const submitLoginHandler = (e) => {
    e.preventDefault();
    props.loginHandler(e.target[0].value, e.target[1].value);
    e.target[0].value = "";
    e.target[1].value = "";
  };

  return (
    <div>
      <h1>Login Page</h1>
      <div id="form-container">
        <form id="login-form" onSubmit={submitLoginHandler}>
          <label id="username-label">
            Username:{" "}
            <input
              type="text"
              name="username"
              // onChange={usernameChangeHandler}
            ></input>
          </label>
          <label id="password-label">
            Password:{" "}
            <input
              type="password"
              name="pass_word"
              // onChange={passwordChangeHandler}
            ></input>
          </label>
          <label id="login-submit">
            <input type="submit" value="Login" id="login-button"></input>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Login;
