import "../LoginPage/login.css";
const LoginPage = () => {
  return (
    <div className="login_body">
      <div className="login_container">
        <form>
          <h3 className="login_heading">Login</h3>
          <label>Email</label>
          <input placeholder="xyz@gmail.com"></input>
          <div className="login_pass">
            <label>Password</label>
            <input type="password" placeholder="•••••••••"></input>
            <span className="pass_eye">
              {" "}
              <i class="fa-solid fa-eye-slash"></i>
            </span>
            <div className="form_btn">
              <button className="btn btn-guest">Login</button>
              <button className="btn btn-guest">Login as Guest</button>
              <a href="/signup" className="signupBtn">
                create an new account
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export { LoginPage };
