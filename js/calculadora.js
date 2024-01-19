document.addEventListener('DOMContentLoaded', function() {
    let display = document.getElementById('display');
    let clearButton = document.getElementById('clear');
    let equalsButton = document.getElementById('equals');
    
    let buttons = document.querySelectorAll('.calculator button:not(#clear):not(#equals)');
    
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        if (display.textContent === '0') {
          display.textContent = '';
        }
        display.textContent += button.textContent;
      });
    });
    
    clearButton.addEventListener('click', function() {
      display.textContent = '0';
    });
    
    equalsButton.addEventListener('click', function() {
      try {
        display.textContent = eval(display.textContent);
      } catch (error) {
        display.textContent = 'Error';
      }
    });
  });
  