import React from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";

// all available props
const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#EF6C00",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#EF6C00",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

const steps = [
  {
    id: "1",
    message: "hi, this is yu chatbot",
    trigger: "2",
  },
  {
    id: "2",
    options: [{ value: 1, label: "오늘 학식은?", trigger: "3" }],
  },
  {
    id: "3",
    message: "오늘 학식은 라면입니다.",
    trigger: "4",
  },
  {
    id: 4,
    component: (
      <div>
        <a>돌아가기</a>
        <a>연결하기</a>
      </div>
    ),
  },
];

const Chatbot = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} hideHeader={true} />;
  </ThemeProvider>
);

export default Chatbot;
