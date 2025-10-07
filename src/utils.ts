import { MESSAGES } from "./consts";

export function loadMessages() {
  const message15: Array<string> = [];
  const message30: Array<string> = [];
  const message60: Array<string> = [];
  Object.entries(MESSAGES).forEach((value) => {
    if (value[0] === "15seconds") {
      value[1].map((message) => {
        message15.push(message);
      });
    } else if (value[0] === "30seconds") {
      value[1].map((message) => {
        message30.push(message);
      });
    } else if (value[0] === "60seconds") {
      value[1].map((message) => {
        message60.push(message);
      });
    }
  });
  return { message15, message30, message60 };
}
