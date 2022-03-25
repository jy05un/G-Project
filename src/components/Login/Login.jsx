import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="login-all">
      <div className="intro">
        <h2>우리 서비스를 쓰세용!!!</h2>
        <h5>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
          architecto et enim necessitatibus provident, delectus quia ducimus
          veritatis exercitationem ad expedita quibusdam quam, praesentium odit
          molestiae reprehenderit amet libero at.
        </h5>
      </div>
      <div className="container">
        <div className="input-container">
          <input
            className="login-input"
            id="id"
            name="name"
            placeholder="아이디"
          />
          <input
            className="login-input"
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호"
          />
        </div>
        <button className="btn-login">로그인</button>
        <Link className="btn-signup" to="/register">
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default Login;
