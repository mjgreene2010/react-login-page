import "./styling/login.css";

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <div id="form-container">
        <form id="login-form">
          <label id="username-label">
            Username: <input type="text" name="username"></input>
          </label>
          <label id="password-label">
            Password: <input type="password" name="password"></input>
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
