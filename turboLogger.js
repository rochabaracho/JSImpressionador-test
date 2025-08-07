// Hashtag Programação.
// JavaScript Impressionador.
// Luiz Roberto Baracho Rocha.
// 2025 August, 07.
// 24. Git, Github and Version Control.
// 24.5. The Git Workflow.

export const turboLogger = (message, color = "blue") => {
  const textStyle = `color: ${color}`;
  console.log(`%c${message}`, textStyle);
};
