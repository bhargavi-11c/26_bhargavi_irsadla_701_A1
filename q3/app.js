const readline = require('readline');
const WeatherChatbot = require('./chatbot');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'You> '
});

const bot = new WeatherChatbot();

console.log("Weather Chatbot started! Ask me about the weather or type 'bye' to exit.");
rl.prompt();

rl.on('line', (line) => {
  const userInput = line.trim();

  const botResponse = bot.getResponse(userInput);
  console.log(`Bot> ${botResponse}`);

  if (userInput.toLowerCase() === 'bye') {
    rl.close();
  } else {
    rl.prompt();
  }
}).on('close', () => {
  console.log('Chatbot session ended.');
  process.exit(0);
});
