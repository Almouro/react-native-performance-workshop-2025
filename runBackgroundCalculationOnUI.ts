import { runOnUI } from "react-native-reanimated";

const killUI = () => {
  runOnUI(() => {
    const fibo = (n: number): number => {
      if (n <= 1) {
        return n;
      }
      return fibo(n - 1) + fibo(n - 2);
    };
    fibo(30);
  })();
};

let interval: ReturnType<typeof setInterval>;

export const runBackgroundUIProcess = () => {
  interval = setInterval(() => {
    killUI();
  }, 200);
};

export const stopBackgroundUIProcess = () => {
  clearInterval(interval);
};
