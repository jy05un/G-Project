import React from "react";
import { Link } from "react-router-dom";

const MyPage = () => {
  return (
    <div className="mypage-login">
      <h2>먼저 로그인을 하세요!</h2>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default MyPage;
