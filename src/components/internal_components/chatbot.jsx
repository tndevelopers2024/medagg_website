import React, { useState, useRef, useEffect, useCallback } from 'react';
import { treatments } from '../../data/treatments';
import { Link } from 'react-router-dom';

// Constants defined outside the component
const predefinedResponses = {
  'hello': 'Hello, I\'m Dr. Medagg. How may I assist with your medical inquiries today?',
  'hi': 'Greetings. I\'m Dr. Medagg, a clinical consultant. How can I help with your health concerns?',
  'appointment': 'I can schedule a consultation for you. Would you prefer an in-person visit or telemedicine? We have specialists available in various fields.',
  'services': 'Our clinical services include: Surgical referrals to board-certified specialists, Non-invasive treatment alternatives, and Expert second opinions for complex diagnoses.',
  'non-surgical': 'Our non-invasive treatment modalities include innovative physical therapy protocols, cutting-edge interventional procedures, and evidence-based alternative medicine approaches. May I inquire about your specific condition?',
  'locations': 'We maintain clinical partnerships with over 50 Joint Commission accredited medical centers across 20+ metropolitan areas nationwide.',
  'cost': 'Treatment costs are contingent on your specific procedure and insurance coverage. Our financial counselors can provide a detailed cost breakdown for your specific case.',
  'insurance': 'We accept most major insurance networks including Blue Cross, UnitedHealthcare, Cigna, and Medicare. Our billing department can verify your specific coverage and benefits.',
  'doctors': 'Our medical network comprises over 200 board-certified specialists across numerous subspecialties, each with fellowship training and peer-reviewed publications in their respective fields.',
  'contact': 'For clinical inquiries, please contact our medical affairs office at clinical@medagg.com or call our physician hotline at (555) 123-4567.',
  'hours': 'Our telehealth platform operates 24/7, while our clinical staff is available Monday-Friday (8:00-20:00) and Saturday (9:00-17:00).',
  'emergency': 'If you are experiencing acute symptoms such as chest pain, difficulty breathing, or severe bleeding, please call emergency services (911) or proceed to the nearest emergency department immediately.',
  'thank you': 'You\'re welcome. Is there anything else regarding your health that I can address today?',
  'thanks': 'You\'re welcome. Is there anything else regarding your health that I can address today?',
  'bye': 'Thank you for consulting with me. Take care and maintain good health.',
  'goodbye': 'Thank you for consulting with me. Take care and maintain good health.',
};

const fallbackResponses = [
  'I need more clinical information to properly assess your question. Could you provide additional details?',
  'That\'s beyond my current medical knowledge base. Would you like me to refer you to one of our specialists?',
  'I\'m not able to provide a specific diagnosis without more information. Would you prefer to speak with one of our attending physicians?',
  'Your question requires a more personalized medical assessment. May I connect you with our clinical care team?',
  'I\'d need to review more of your medical history to adequately address that question.',
];

const initialMessages = [
  {
    text: 'Greetings, I\'m Dr. Medagg, your virtual clinical consultant. How may I assist with your healthcare needs today?',
    sender: 'bot',
    timestamp: new Date(),
  },
];

// Quick response buttons for common questions
const quickResponses = [
  'Book a consultation',
  'Clinical services',
  'Treatment options',
  'Insurance & billing',
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeCondition, setActiveCondition] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);
  const synthRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Memoized function to find the best matching response
  const findBestResponse = useCallback((userInput) => {
    const lowercaseInput = userInput.toLowerCase();

    // Direct match
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowercaseInput.includes(key)) {
        return response;
      }
    }

    // No match found, return a random fallback response
    const randomIndex = Math.floor(Math.random() * fallbackResponses.length);
    return fallbackResponses[randomIndex];
  }, []);

  // Memoized function to speak the response
  const speakResponse = useCallback((text) => {
    if (synthRef.current) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.volume = 1;
      synthRef.current.speak(utterance);
    }
  }, []);

  // Memoized function to generate response
  const generateResponse = useCallback((userInput) => {
    setIsTyping(true);

    setTimeout(() => {
      const response = findBestResponse(userInput);

      const botMessage = {
        text: response,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      speakResponse(response);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  }, [findBestResponse, speakResponse]);

  const handleVoiceInput = useCallback((transcript) => {
    const userMessage = {
      text: transcript,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    generateResponse(transcript);
  }, [generateResponse]);

  useEffect(() => {
    // Initialize speech recognition
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        recognitionRef.current.lang = 'en-US';

        recognitionRef.current.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          setInputValue(transcript);
          handleVoiceInput(transcript);
        };

        recognitionRef.current.onend = () => {
          setIsListening(false);
        };
      }

      // Initialize speech synthesis
      synthRef.current = window.speechSynthesis;
    }
  }, [handleVoiceInput]);

  const startListening = () => {
    if (recognitionRef.current) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  // handleVoiceInput is now defined above with useCallback

  const handleQuickResponse = (response) => {
    const userMessage = {
      text: response,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    generateResponse(response);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const userMessage = {
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    generateResponse(userMessage.text);
  };

  return (
    <div className='fixed bottom-8 right-8 z-50 flex flex-col items-end'>
      {/* Chatbot toggle button */}
      {!isOpen && (
        <div
          onClick={toggleChat}
          className='w-48 h-48 cursor-pointer transition-all duration-300 transform hover:scale-110'
          aria-label='Open chat'
        >
          <img
            src='/animated-chatbot-unscreen.gif'
            alt='Chat with Dr. Medagg'
            className='w-full h-full object-contain'
          />
        </div>
      )}


      {/* Chatbot window */}
      {isOpen && (
        <div className='absolute bottom-0 right-0 w-[380px] h-[600px] bg-white rounded-t-3xl shadow-2xl overflow-hidden flex flex-col border border-gray-100 transform transition-all duration-300'>
          {/* Header */}
          <div className='bg-gradient-to-r from-pink-500 to-pink-400 p-4 text-white flex items-center shadow-md'>
            <div className='flex items-center flex-1'>
              <div className='w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full p-1 mr-3 flex items-center justify-center border-2 border-white/30'>
                <svg className='h-6 w-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.8} d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </div>
              <div>
                <h3 className='font-bold text-lg'>Dr. MedAgg</h3>
                <p className='text-xs text-pink-100 font-medium'>Virtual Health Assistant</p>
              </div>
            </div>
            <div className='flex items-center space-x-2'>
              <button
                onClick={isListening ? stopListening : startListening}
                className={`p-2 rounded-full transition-colors ${isListening ? 'bg-white/20' : 'hover:bg-white/10'}`}
                aria-label={isListening ? 'Stop listening' : 'Start voice input'}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={isListening ? 2 : 1.5}
                    d='M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z'
                    className={isListening ? 'text-white' : 'text-white/80'}
                  />
                </svg>
              </button>
              <button
                onClick={toggleChat}
                className='p-2 rounded-full hover:bg-white/20 transition-colors'
                aria-label='Close chat'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Treatment Navigation */}
          <div className='bg-white border-b border-gray-100'>
            <div className='px-4 py-3'>
              <p className='text-sm font-medium text-gray-700 mb-2'>Browse by treatment:</p>
              <div className='relative'>
                <div className='overflow-x-auto scrollbar-hide'>
                  <div className='flex space-x-2 pb-1'>
                    {treatments.map((treatment, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickResponse(`Tell me more about ${treatment}`)}
                        className='whitespace-nowrap px-4 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md transition-colors border border-gray-200'
                      >
                        {treatment}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              {/* Emergency Assistance button removed */}
            </div>
          </div>
          {/* Quick actions section removed */}

          {/* Messages */}
          <div
            ref={chatContainerRef}
            className='flex-1 p-6 overflow-y-auto bg-gradient-to-b from-white to-gray-50 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent scrollbar-thumb-rounded-full'
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 transition-all duration-200 ${message.sender === 'user' ? 'text-right' : ''}`}
              >
                {message.sender === 'bot' && (
                  <div className='flex items-start group'>
                    <div className='w-11 h-11 bg-pink-100 rounded-full mr-4 flex-shrink-0 flex items-center justify-center shadow-inner border border-pink-200'>
                      <svg className='h-5 w-5 text-pink-600' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.8} d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg>
                    </div>
                    <div className='max-w-[90%]'>
                      <div className='inline-block px-5 py-4 text-base rounded-2xl bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-100 group-hover:shadow-md transition-all'>
                        <div className='prose prose-sm max-w-none text-gray-700'>
                          {message.text.split('\n').map((paragraph, i) => (
                            <p key={i} className='mb-2 last:mb-0'>{paragraph}</p>
                          ))}
                        </div>
                        {message.text.includes('treatment') && (
                          <div className='mt-3'>
                            <Link
                              to='/treatments'
                              className='inline-flex items-center text-sm px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-lg hover:from-pink-600 hover:to-pink-500 transition-all shadow-sm hover:shadow-md'
                            >
                              View Treatment Options
                              <svg className='ml-1.5 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
                              </svg>
                            </Link>
                          </div>
                        )}
                      </div>
                      <div className='text-xs text-gray-400 mt-1 ml-2'>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  </div>
                )}

                {message.sender === 'user' && (
                  <div className='flex items-end justify-end group'>
                    <div className='max-w-[90%]'>
                      <div className='inline-block px-5 py-4 text-base rounded-2xl bg-gradient-to-r from-pink-500 to-pink-400 text-white shadow-sm hover:shadow-md transition-all'>
                        <div className='prose prose-sm max-w-none text-white'>
                          {message.text}
                        </div>
                      </div>
                      <div className='text-xs text-gray-400 mt-1 mr-2 text-right'>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                    <div className='w-11 h-11 bg-white rounded-full ml-4 flex-shrink-0 flex items-center justify-center shadow-inner border border-pink-100'>
                      <svg className='h-5 w-5 text-pink-600' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.8} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className='mb-4 flex items-start'>
                <div className='w-9 h-9 bg-pink-100 rounded-full mr-3 flex-shrink-0 flex items-center justify-center shadow-inner border border-pink-200'>
                  <svg className='h-5 w-5 text-pink-600' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.8} d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                </div>
                <div className='inline-block px-4 py-3 rounded-2xl bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-100'>
                  <div className='flex space-x-1.5'>
                    <div className='w-2.5 h-2.5 bg-pink-400 rounded-full animate-bounce' style={{ animationDelay: '0ms' }}></div>
                    <div className='w-2.5 h-2.5 bg-pink-400 rounded-full animate-bounce' style={{ animationDelay: '150ms' }}></div>
                    <div className='w-2.5 h-2.5 bg-pink-400 rounded-full animate-bounce' style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} className='h-4' />
          </div>

          {/* Quick responses */}
          <div className='px-4 py-3 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100'>
            <div className='flex flex-wrap gap-2 overflow-x-auto pb-1 scrollbar-hide'>
              {quickResponses.map((response, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickResponse(response)}
                  className={`text-xs font-medium px-3.5 py-2 rounded-full transition-all whitespace-nowrap
                    ${
                      response === 'Schedule Your Appointment'
                        ? 'bg-gradient-to-r from-pink-500 to-pink-400 text-white font-semibold shadow-md hover:shadow-lg transform hover:scale-[1.03] border border-white/30 hover:border-white/50'
                        : 'bg-white hover:bg-pink-50 text-pink-600 border border-pink-200 hover:border-pink-300 shadow-sm hover:shadow'
                    }`}
                >
                  {response === 'Schedule Your Appointment' ? (
                    <div className='flex items-center space-x-1.5'>
                      <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 text-white/90' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                      </svg>
                      <span className='font-semibold'>Schedule Appointment</span>
                    </div>
                  ) : (
                    response
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className='p-4 bg-white border-t border-gray-100'>
            <div className='flex items-center px-5 py-3 bg-white rounded-xl border-2 border-pink-100 focus-within:border-pink-300 focus-within:ring-2 focus-within:ring-pink-100 transition-all duration-200 shadow-sm'>
              <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}
                placeholder='Type your medical query or schedule an appointment...'
                className='flex-1 p-2 focus:outline-none text-gray-800 placeholder-gray-500 text-base font-medium'
                aria-label='Type your message'
              />
              <button
                type='button'
                onClick={isListening ? stopListening : startListening}
                className={`p-2 rounded-full transition-colors ${isListening ? 'text-red-500' : 'text-gray-400 hover:text-pink-500'}`}
                aria-label={isListening ? 'Stop listening' : 'Start voice input'}
              >
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={isListening ? 2 : 1.5} d='M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z' />
                </svg>
              </button>
              <button
                type='submit'
                disabled={!inputValue.trim()}
                className={`ml-1 p-2 rounded-full transition-colors ${!inputValue.trim() ? 'text-gray-300' : 'text-pink-500 hover:text-pink-600'}`}
                aria-label='Send message'
              >
                <svg className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8' />
                </svg>
              </button>
            </div>
          </form>
          <div className='mt-2 text-center'>
              <p className='text-xs text-gray-500'>
                <span className='text-medagg-pink'>Disclaimer:</span> This is an AI medical assistant. For emergencies, call 911.
              </p>
            </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
