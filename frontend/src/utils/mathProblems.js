export function generateProblem(difficulty) {
    let num1, num2, operator;
  
    switch (difficulty) {
      case 'easy':
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        operator = ['+', '-'][Math.floor(Math.random() * 2)];
        break;
      case 'medium':
        num1 = Math.floor(Math.random() * 50) + 1;
        num2 = Math.floor(Math.random() * 50) + 1;
        operator = ['+', '-', '*'][Math.floor(Math.random() * 3)];
        break;
      case 'hard':
        num1 = Math.floor(Math.random() * 100) + 1;
        num2 = Math.floor(Math.random() * 100) + 1;
        operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
        if (operator === '/') {
          // Ensure clean division
          num1 = num2 * (Math.floor(Math.random() * 10) + 1);
        }
        break;
      default:
        throw new Error('Invalid difficulty level');
    }
  
    let answer;
    switch (operator) {
      case '+':
        answer = num1 + num2;
        break;
      case '-':
        answer = num1 - num2;
        break;
      case '*':
        answer = num1 * num2;
        break;
      case '/':
        answer = num1 / num2;
        break;
    }
  
    return {
      problem: `${num1} ${operator} ${num2} = ?`,
      answer: answer
    };
  }
  
  