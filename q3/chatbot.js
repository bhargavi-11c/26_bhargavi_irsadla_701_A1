// chatbot.js
class WeatherChatbot {
    constructor() {
      this.responses = {
        'hello': 'Hello! How can I help you with weather information?',
        'how is the weather today?': 'Today, it is sunny with a high of 25°C.',
        'will it rain tomorrow?': 'No, there is no rain forecast for tomorrow.',
        'bye': 'Goodbye! Have a nice day.',
      };
    }
  
    getResponse(input) {
      input = input.toLowerCase().trim();
      return this.responses[input] || "Sorry, I don't understand that. Please ask about the weather.";
    }
  }
  
  module.exports = WeatherChatbot;
  
