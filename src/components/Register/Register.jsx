import React, { useState } from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="container-register">
      <h1>회원가입</h1>
      <div className="input-container">
        <div className="register-id">
          <input
            className="register-input"
            id="id"
            name="id"
            placeholder="아이디"
          />
          <button className="btn-validate">중복 확인</button>
        </div>
        <input
          className="register-input"
          id="name"
          name="name"
          placeholder="닉네임"
        />
        <input
          className="register-input"
          id="nickname"
          name="nickname"
          placeholder="비밀번호"
        />
        <input
          className="register-input"
          id="email"
          name="email"
          placeholder="이메일"
        />
        <button className="btn-register">회원가입</button>
      </div>
    </div>
  );
};

export default Register;
