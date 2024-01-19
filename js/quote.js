const quotes = [
    { text: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.", author: "John Lennon" },
    { text: "El único modo de hacer un gran trabajo es amar lo que haces.", author: "Steve Jobs" },
    { text: "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.", author: "Winston Churchill" },
    { text: "La creatividad es la inteligencia divirtiéndose.", author: "Albert Einstein" },
    { text: "La vida es corta, sonríe mientras todavía tienes dientes.", author: "Autor Desconocido" }
  ];
  
  function generateQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomNumber];
    const quoteElement = document.getElementById("text");
    const authorElement = document.getElementById("author");
    const tweetElement = document.getElementById("tweet-quote");
  
    quoteElement.textContent = quote.text;
    authorElement.textContent = `- ${quote.author}`;
    
    tweetElement.href = `https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`;
  }
  
  window.addEventListener('DOMContentLoaded', (event) => {
    generateQuote();
  });
  