const { useState, useEffect, useCallback } = React;

const Brain = (props) => <svg {...props} className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>;
const Timer = (props) => <svg {...props} className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>;
const AlertTriangle = (props) => <svg {...props} className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>;
const Heart = (props) => <svg {...props} className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>;
const Mail = (props) => <svg {...props} className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>;
const Check = (props) => <svg {...props} className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>;
const Edit3 = (props) => <svg {...props} className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>;
const Lightbulb = (props) => <svg {...props} className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>;
const Sparkles = (props) => <svg {...props} className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>;
const PlayCircle = (props) => <svg {...props} className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>;
const PauseCircle = (props) => <svg {...props} className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>;
const RotateCcw = (props) => <svg {...props} className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/></svg>;
const Copy = (props) => <svg {...props} className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>;
const CheckCircle = (props) => <svg {...props} className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>;

function FiveMinuteResetUltimate() {
  const [step, setStep] = useState('disclaimer');
  const [timeLeft, setTimeLeft] = useState(180);
  const [isTimerActive, setIsTimerActive] = useState(false);
  
  // Brain dump data
  const [goal, setGoal] = useState('');
  const [fear, setFear] = useState('');
  const [prize, setPrize] = useState('');
  
  // Real Question - THREE versions with VS scores
  const [initialQuestion, setInitialQuestion] = useState('');
  const [refinedQuestions, setRefinedQuestions] = useState([]); // Array of 3 refined versions with confidence
  const [customQuestion, setCustomQuestion] = useState('');
  const [realQuestion, setRealQuestion] = useState('');
  const [questionSource, setQuestionSource] = useState(''); // 'initial', 'refined-0', 'custom'
  
  const [questionChoice, setQuestionChoice] = useState(null); // 'action' or 'acceptance'
  const [bodyCheck, setBodyCheck] = useState({ true: false, yours: false, scary: false });
  const [pathOptions, setPathOptions] = useState([]); // 5 paths with probability scores
  
  // 🆕 USER COMMITMENT - THE MISSING PIECE!
  const [chosenPushUp, setChosenPushUp] = useState(''); // For action path
  const [chosenPermissionSlip, setChosenPermissionSlip] = useState(''); // For acceptance path
  
  const [email, setEmail] = useState('');
  
  // 🆕 COPY SUCCESS STATE
  const [showCopySuccess, setShowCopySuccess] = useState(false);
  
  // Loading states
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // 🆕 COPY TO CLIPBOARD FUNCTION
  const copyToClipboard = useCallback((text) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
      document.execCommand('copy');
      setShowCopySuccess(true);
      setTimeout(() => setShowCopySuccess(false), 3000);
    } catch (err) {
      console.error('Failed to copy:', err);
      // Fallback: try navigator.clipboard if available
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
          setShowCopySuccess(true);
          setTimeout(() => setShowCopySuccess(false), 3000);
        }).catch(e => console.error('Clipboard fallback failed:', e));
      }
    }
    
    document.body.removeChild(textarea);
  }, []);

  // Timer controls
  const toggleTimer = useCallback(() => setIsTimerActive(prev => !prev), []);
  const resetTimer = useCallback(() => {
    setTimeLeft(180);
    setIsTimerActive(false);
  }, []);

  // Timer effect
  useEffect(() => {
    let timer;
    if (isTimerActive && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && isTimerActive) {
      setIsTimerActive(false);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isTimerActive, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startBrainDump = useCallback(() => {
    setStep('braindump');
    setTimeLeft(180);
    setIsTimerActive(true);
  }, []);

  // Generate Real Question with Verbalized Sampling (3 diverse refinements)
  // 🆕 WITH STRUCTURED JSON SCHEMA & AUTO-SELECT HIGHEST CONFIDENCE
  const generateRealQuestion = useCallback(async () => {
    const initial = `So, the real question isn't about ${goal}... it's really about how I can finally feel ${prize}... without having to ${fear}.`;
    setInitialQuestion(initial);
    setStep('question-refinement');
    
    // Generate 3 diverse refinements with VS
    setIsGenerating(true);
    try {
      const response = await fetch('/.netlify/functions/gemini-proxy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `You are a compassionate friend helping someone find clarity.

Their initial Real Question is:
"${initial}"

Context:
- Goal: ${goal}
- Fear: ${fear}
- Real Prize: ${prize}

Using Verbalized Sampling, generate 3 DIVERSE refinements of this question. Each should take a different approach:
1. Action-Focused: Emphasizes taking steps, agency, movement forward
2. Acceptance-Focused: Emphasizes self-compassion, permission, being vs doing
3. Minimalist: The simplest, most elegant version possible

CRITICAL: Write at a 5th grade reading level. Use:
- Short, simple words (avoid jargon, psychology terms, or complex vocabulary)
- Clear, direct sentences (no more than 15 words per sentence)
- Everyday language a 10-year-old would understand
- Active voice ("I can..." not "It would be possible for me to...")
- Concrete words, not abstract concepts

BAD examples (too complex):
- "How might I cultivate a sense of worthiness?"
- "What if I could embrace vulnerability without catastrophizing?"
- "How can I navigate this transition authentically?"

GOOD examples (clear and simple):
- "How can I feel good about myself?"
- "What if I'm scared and that's okay?"
- "What small thing can I do today?"

For each refinement, provide:
- The refined question (simple, clear, their voice)
- A confidence score (0-100) indicating how well this approach fits their context

Return ONLY valid JSON array:
[
  {
    "type": "Action-Focused",
    "question": "refined question here in simple words",
    "confidence": 85
  },
  {
    "type": "Acceptance-Focused", 
    "question": "refined question here in simple words",
    "confidence": 72
  },
  {
    "type": "Minimalist",
    "question": "refined question here in simple words",
    "confidence": 91
  }
]

Make it sound like THEM talking to themselves, not a therapist talking to them.
Use "I" and "me" (first person). Use real, human words.
NO markdown, NO backticks, ONLY valid JSON array.`,
          temperature: 1.0,
          useStructuredOutput: true // Flag for Netlify function to use schema
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Raw API response:', data);
      
      const parsed = Array.isArray(data) ? data : (data.refinements || []);
      console.log('Parsed refinements:', parsed);
      
      if (parsed && parsed.length > 0) {
        setRefinedQuestions(parsed);
        
        // 🆕 AUTO-SELECT HIGHEST CONFIDENCE QUESTION
        const highestConfidence = parsed.reduce((prev, current) => 
          (prev.confidence > current.confidence) ? prev : current
        );
        const selectedIndex = parsed.findIndex(q => q.question === highestConfidence.question);
        
        setRealQuestion(highestConfidence.question);
        setQuestionSource(`refined-${selectedIndex}`);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Error generating refinements:', error);
      
      // Fallback: Show generic refinements in simple language
      const fallbackRefinements = [
        { 
          type: "Action-Focused", 
          question: `What small step can I take to feel ${prize}, even if ${fear} still scares me?`,
          confidence: 85 
        },
        { 
          type: "Acceptance-Focused", 
          question: `What if it's okay that I want ${prize} but I'm not ready to face ${fear} yet?`,
          confidence: 72 
        },
        { 
          type: "Minimalist",
          question: `Can I feel ${prize} without fixing ${fear} first?`,
          confidence: 91 
        }
      ];
      
      setRefinedQuestions(fallbackRefinements);
      // Auto-select highest confidence from fallback
      setRealQuestion(fallbackRefinements[2].question); // Minimalist has 91
      setQuestionSource('refined-2');
      
      alert('Having trouble connecting to AI. Showing general question refinements. (Check console for details)');
    }
    setIsGenerating(false);
  }, [goal, fear, prize]);

  const confirmQuestion = useCallback(() => {
    if (questionSource === 'custom') {
      setRealQuestion(customQuestion);
    }
    setStep('question-test');
  }, [questionSource, customQuestion]);

  // Generate 5 path suggestions with VS (probability scores)
  const generatePathSuggestions = useCallback(async () => {
    setIsGenerating(true);
    try {
      const response = await fetch('/.netlify/functions/gemini-proxy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `You are a compassionate friend. The user's Real Question is:

"${realQuestion}"

Context:
- Goal: ${goal}
- Fear: ${fear}
- Real Prize: ${prize}

Using Verbalized Sampling, generate 5 HIGHLY DIVERSE suggestions for their "One Push-Up" (tiny first action).

Each suggestion should be genuinely different in TYPE:
1. Safe & Obvious: Low risk, easy to start
2. Minimalist: Smallest possible move
3. Acceptance: Permission to not act yet (this is valid!)
4. Connection: Reaching out to another human
5. Ambitious: Bolder move if they're ready

CRITICAL: Write at a 5th grade reading level. Use:
- Short, simple words (no jargon or complex vocabulary)
- Clear, direct sentences (no more than 15 words)
- Everyday language a 10-year-old would understand
- Gentle starters: "What if you...", "Maybe try...", "You could..."
- Concrete, specific actions (not vague concepts)

BAD examples (too complex):
- "Cultivate a journaling practice to explore your emotional landscape"
- "Initiate a dialogue with a mentor regarding your professional trajectory"
- "Establish boundaries to protect your energetic capacity"

GOOD examples (clear and simple):
- "Write down three things that went well today"
- "Ask one friend what they think about your idea"
- "Say no to one thing you don't want to do"

For each, provide:
- The suggestion (simple words, gentle tone)
- Why this might feel right (1 short sentence, simple words)
- A probability score (0-100) showing how diverse/distinct this option is

Return ONLY valid JSON array:
[
  {
    "type": "Safe & Obvious",
    "suggestion": "suggestion in simple, clear words",
    "why": "reason in simple words",
    "probability": 85
  },
  {
    "type": "Minimalist",
    "suggestion": "suggestion in simple, clear words",
    "why": "reason in simple words",
    "probability": 78
  },
  {
    "type": "Acceptance",
    "suggestion": "suggestion in simple, clear words",
    "why": "reason in simple words",
    "probability": 65
  },
  {
    "type": "Connection",
    "suggestion": "suggestion in simple, clear words",
    "why": "reason in simple words",
    "probability": 92
  },
  {
    "type": "Ambitious",
    "suggestion": "suggestion in simple, clear words",
    "why": "reason in simple words",
    "probability": 73
  }
]

NO commanding language ("You should", "You must", "You need to").
Use friendly language like talking to a friend.
NO markdown, NO backticks, ONLY valid JSON array.`,
          temperature: 1.2,
          useStructuredOutput: true
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Raw API response:', data);
      
      const parsed = Array.isArray(data) ? data : (data.paths || []);
      console.log('Parsed paths:', parsed);
      
      if (parsed && parsed.length > 0) {
        setPathOptions(parsed);
        setShowSuggestions(true);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Error generating suggestions:', error);
      
      // Fallback: Show generic suggestions in simple language
      setPathOptions([
        {
          type: "Safe & Obvious",
          suggestion: "What if you write down three things this would look like when it's real?",
          why: "Writing it down helps you see what you really want.",
          probability: 85
        },
        {
          type: "Minimalist",
          suggestion: "Maybe just tell one person you trust about this question today.",
          why: "Saying it out loud makes it feel more real.",
          probability: 78
        },
        {
          type: "Acceptance",
          suggestion: "You could give yourself a whole week to just think about this before doing anything.",
          why: "Sometimes waiting is the brave thing to do.",
          probability: 65
        },
        {
          type: "Connection",
          suggestion: "What if you ask someone who did something like this one question about how they did it?",
          why: "Learning from others can help you see your own path.",
          probability: 92
        },
        {
          type: "Ambitious",
          suggestion: "Maybe spend 30 minutes this week reading or trying out one small part of this.",
          why: "Taking one small step can help you know if this is right.",
          probability: 73
        }
      ]);
      setShowSuggestions(true);
      
      alert('Having trouble connecting to AI suggestions. Showing general guidance instead. (Check console for details)');
    }
    setIsGenerating(false);
  }, [realQuestion, goal, fear, prize]);

  // Gumroad checkout with user's Real Question
  const handleGumroadCheckout = useCallback(() => {
    const commitment = chosenPushUp || chosenPermissionSlip;
    const gumroadUrl = `https://gum.co/5-minute-reset-worksheet?wanted=true&real_question=${encodeURIComponent(realQuestion)}&commitment=${encodeURIComponent(commitment)}&email=${encodeURIComponent(email)}`;
    window.open(gumroadUrl, '_blank');
  }, [realQuestion, chosenPushUp, chosenPermissionSlip, email]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-3">
            <Brain className="w-12 h-12 text-blue-600" />
            <div className="text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">The 5-Minute Reset</h1>
              <p className="text-sm text-gray-600">Based on GENIUS:60 by Napoleon Beltran</p>
            </div>
          </div>
        </div>

        {/* 🆕 COPY SUCCESS NOTIFICATION */}
        {showCopySuccess && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-2 animate-fade-in z-50">
            <CheckCircle className="w-5 h-5" />
            <span className="font-semibold">Copied to clipboard!</span>
          </div>
        )}

        {/* DISCLAIMER SCREEN */}
        {step === 'disclaimer' && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-6">
            <div className="flex items-start gap-4 p-6 bg-amber-50 border-l-4 border-amber-500 rounded-2xl">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-amber-900 mb-2">Important: This is a Friend, Not a Professional</h3>
                <div className="text-sm text-amber-800 space-y-2">
                  <p><strong>This is a productivity tool, not professional therapy or medical advice.</strong></p>
                  <p>We are not licensed therapists, psychologists, or mental health professionals. This framework is a friend offering you a mirror to see yourself more clearly.</p>
                  <p><strong>If you are experiencing mental health challenges, crisis, or distress, please seek help from a qualified professional.</strong></p>
                  <ul className="list-disc ml-5 space-y-1 mt-2">
                    <li><strong>National Suicide Prevention Lifeline:</strong> 988</li>
                    <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
                    <li><strong>SAMHSA National Helpline:</strong> 1-800-662-4357</li>
                  </ul>
                  <p className="font-semibold mt-3 text-amber-900">All decisions are yours. This tool can only offer questions, never answers.</p>
                </div>
              </div>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Heart className="w-6 h-6 text-blue-600" />
                Our Philosophy
              </h2>
              <div className="text-gray-700 space-y-3">
                <p className="text-lg">
                  <strong>"You are the genius. This tool is the catalyst."</strong>
                </p>
                <p>
                  The 5-Minute Reset from GENIUS:60 by Napoleon Beltran helps you find the question that matters. 
                  Not the answer—the <em>question</em>. Because the quality of your life is determined by the quality 
                  of the questions you ask.
                </p>
                <p>
                  <strong>This tool will never tell you what to do.</strong> It will only help you see what you 
                  already know. Sometimes the answer is action. Sometimes it's acceptance. Sometimes it's permission 
                  to not be ready yet.
                </p>
                <div className="text-blue-800 bg-blue-50 p-4 rounded-xl border-l-4 border-blue-600">
                  <strong>The decision is always yours.</strong> We are a friend holding space, not a bully pushing you forward.
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">The 3-Step Process:</h3>
              <ol className="space-y-2 text-gray-700">
                <li><strong>Dump (3 minutes):</strong> Tell the truth about what you want, fear, and feel</li>
                <li><strong>Distill (2 minutes):</strong> Find your Real Question (AI helps, you decide)</li>
                <li><strong>Decide (your choice):</strong> Action, acceptance, or wait</li>
              </ol>
            </div>

            <button
              onClick={() => setStep('welcome')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all shadow-lg hover:shadow-xl"
            >
              I Understand - Begin My Reset
            </button>
          </div>
        )}

        {/* WELCOME SCREEN */}
        {step === 'welcome' && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-6">
            <div className="text-center">
              <Sparkles className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Find Your Real Question?</h2>
              <p className="text-lg text-gray-600">
                In 5 minutes, you'll discover what you're actually trying to solve.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-2xl">
              <h3 className="font-bold text-blue-900 mb-3">What You'll Discover:</h3>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Your <strong>Real Prize</strong> - what you actually want to feel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Your <strong>Hidden Fear</strong> - what's really holding you back</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Your <strong>Real Question</strong> - the one that unlocks clarity</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <p className="text-sm text-gray-600 mb-3">
                <strong>From the book:</strong> "Most of us stay stuck because we keep answering the wrong question."
              </p>
              <p className="text-xs text-gray-500 italic">— The 5-Minute Reset, Chapter 1</p>
            </div>

            <button
              onClick={startBrainDump}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Timer className="w-5 h-5" />
              Start Your 3-Minute Brain Dump
            </button>
          </div>
        )}

        {/* BRAIN DUMP SCREEN WITH TIMER CONTROLS */}
        {step === 'braindump' && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-6">
            
            {/* Timer with controls */}
            <div className="text-center pb-6 border-b border-gray-200">
              <div className={`text-6xl font-bold mb-4 transition-all ${
                timeLeft < 30 ? 'text-red-500' : timeLeft < 60 ? 'text-amber-500' : 'text-blue-600'
              }`}>
                {formatTime(timeLeft)}
              </div>
              <p className="text-gray-600 mb-4">
                {timeLeft > 0 ? 'Brain Dump in Progress - Be Honest' : 'Time to Distill Your Question'}
              </p>
              
              {/* Timer Controls */}
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={toggleTimer}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl transition"
                >
                  {isTimerActive ? (
                    <><PauseCircle className="w-5 h-5" /> Pause</>
                  ) : (
                    <><PlayCircle className="w-5 h-5" /> Resume</>
                  )}
                </button>
                <button
                  onClick={resetTimer}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl transition"
                >
                  <RotateCcw className="w-5 h-5" /> Reset
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block font-semibold text-gray-900 mb-2">
                  1. The Goal (What you think you want)
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  What result are you trying to get? Be specific.
                </p>
                <textarea
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="Example: Get promoted, launch my business, fix my relationship..."
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows={3}
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-900 mb-2">
                  2. The Fear (What you're really afraid of)
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  What's the scary thing underneath? Be brutally honest.
                </p>
                <textarea
                  value={fear}
                  onChange={(e) => setFear(e.target.value)}
                  placeholder="Example: Looking like a fraud, being rejected, wasting time..."
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows={3}
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-900 mb-2">
                  3. The Real Prize (What feeling you're actually after)
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  If you got The Goal, what would it FEEL like? Look deeper.
                </p>
                <textarea
                  value={prize}
                  onChange={(e) => setPrize(e.target.value)}
                  placeholder="Example: Confident, worthy, free, secure, respected..."
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows={3}
                />
              </div>
            </div>

            <button
              onClick={generateRealQuestion}
              disabled={!goal || !fear || !prize}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-2xl transition-all shadow-lg"
            >
              Find My Real Question
            </button>
          </div>
        )}

        {/* QUESTION REFINEMENT SCREEN - WITH AUTO-SELECT */}
        {step === 'question-refinement' && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-6">
            <div className="text-center mb-6">
              <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Real Question</h2>
              <p className="text-gray-600">AI selected its best guess - but you decide what feels right</p>
            </div>

            {/* Option 1: Initial Question */}
            <div 
              onClick={() => {
                setRealQuestion(initialQuestion);
                setQuestionSource('initial');
              }}
              className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                questionSource === 'initial' 
                  ? 'border-blue-600 bg-blue-50 shadow-lg' 
                  : 'border-gray-300 bg-white hover:border-blue-400 hover:shadow-md'
              }`}
            >
              <div className="flex items-start gap-3">
                <input
                  type="radio"
                  checked={questionSource === 'initial'}
                  onChange={() => {}}
                  className="mt-1 w-5 h-5"
                />
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 mb-2">Your Original Question</div>
                  <p className="text-gray-700 leading-relaxed italic">"{initialQuestion}"</p>
                </div>
              </div>
            </div>

            {/* Options 2-4: AI Refined Questions with VS Scores - WITH AUTO-SELECT */}
            {isGenerating ? (
              <div className="p-8 bg-gray-50 rounded-2xl text-center">
                <Sparkles className="w-8 h-8 text-blue-600 mx-auto mb-3 animate-pulse" />
                <div className="text-gray-600">AI is reflecting on your question...</div>
                <div className="text-sm text-gray-500 mt-2">Finding the clearest way to say it</div>
              </div>
            ) : (
              <>
                {refinedQuestions.map((refined, idx) => (
                  <div 
                    key={idx}
                    onClick={() => {
                      setRealQuestion(refined.question);
                      setQuestionSource(`refined-${idx}`);
                    }}
                    className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                      questionSource === `refined-${idx}`
                        ? 'border-green-600 bg-green-50 shadow-lg' 
                        : 'border-gray-300 bg-white hover:border-green-400 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="radio"
                        checked={questionSource === `refined-${idx}`}
                        onChange={() => {}}
                        className="mt-1 w-5 h-5"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-semibold text-gray-900 flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-green-600" />
                            AI Suggestion: {refined.type}
                            {/* 🆕 SHOW IF AUTO-SELECTED */}
                            {questionSource === `refined-${idx}` && refinedQuestions.length > 0 && refined.confidence === Math.max(...refinedQuestions.map(r => r.confidence)) && (
                              <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full ml-2">
                                AI's Top Pick
                              </span>
                            )}
                          </div>
                          <div className="text-sm font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                            {refined.confidence}% Confidence
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed italic">"{refined.question}"</p>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}

            {/* Option: Custom/Blend */}
            <div 
              onClick={() => setQuestionSource('custom')}
              className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                questionSource === 'custom' 
                  ? 'border-purple-600 bg-purple-50 shadow-lg' 
                  : 'border-gray-300 bg-white hover:border-purple-400 hover:shadow-md'
              }`}
            >
              <div className="flex items-start gap-3">
                <input
                  type="radio"
                  checked={questionSource === 'custom'}
                  onChange={() => {}}
                  className="mt-1 w-5 h-5"
                />
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Edit3 className="w-4 h-4 text-purple-600" />
                    Write My Own (or Blend Them)
                  </div>
                  {questionSource === 'custom' ? (
                    <textarea
                      value={customQuestion}
                      onChange={(e) => {
                        setCustomQuestion(e.target.value);
                        setRealQuestion(e.target.value);
                      }}
                      placeholder="Write your question here... or blend the versions above into something that feels perfectly YOU"
                      className="w-full p-4 border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none mt-2"
                      rows={3}
                      autoFocus
                    />
                  ) : (
                    <p className="text-gray-600 text-sm">
                      Click here to write your own version or blend the suggestions above
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Helper Text */}
            <div className="bg-gray-50 rounded-2xl p-4">
              <p className="text-sm text-gray-600">
                <strong>About the scores:</strong> Confidence shows how well each approach fits your situation. 
                AI pre-selected its top pick, but higher scores aren't always "better" - pick what resonates with YOUR gut.
              </p>
            </div>

            <button
              onClick={confirmQuestion}
              disabled={!realQuestion && (!customQuestion || questionSource !== 'custom')}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-2xl transition-all shadow-lg"
            >
              This Is My Real Question
            </button>
          </div>
        )}

        {/* QUESTION TEST SCREEN */}
        {step === 'question-test' && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-6">
            <div className="text-center mb-6">
              <Sparkles className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Real Question</h2>
              <p className="text-gray-600">Let's test if this feels true for you</p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-8 rounded-2xl">
              <p className="text-xl md:text-2xl text-gray-900 leading-relaxed font-medium">
                {realQuestion}
              </p>
            </div>

            {/* Body Check Questions */}
            <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-gray-900 mb-3">Test Your Question:</h3>
              <p className="text-sm text-gray-600 mb-4">Check the ones that feel true (no right answer):</p>
              
              <label className="flex items-start gap-3 cursor-pointer p-3 rounded-xl hover:bg-white transition">
                <input
                  type="checkbox"
                  checked={bodyCheck.true}
                  onChange={(e) => setBodyCheck({...bodyCheck, true: e.target.checked})}
                  className="mt-1 w-5 h-5 rounded border-gray-300"
                />
                <span className="text-gray-700">When I read this question, something in my body says "yes, that's it"</span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer p-3 rounded-xl hover:bg-white transition">
                <input
                  type="checkbox"
                  checked={bodyCheck.yours}
                  onChange={(e) => setBodyCheck({...bodyCheck, yours: e.target.checked})}
                  className="mt-1 w-5 h-5 rounded border-gray-300"
                />
                <span className="text-gray-700">This is MY question, not someone else's expectation</span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer p-3 rounded-xl hover:bg-white transition">
                <input
                  type="checkbox"
                  checked={bodyCheck.scary}
                  onChange={(e) => setBodyCheck({...bodyCheck, scary: e.target.checked})}
                  className="mt-1 w-5 h-5 rounded border-gray-300"
                />
                <span className="text-gray-700">This question scares me a little (in a good way)</span>
              </label>
            </div>

            {/* Choice: Action or Acceptance */}
            <div className="bg-blue-50 rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-blue-900 mb-3">What does this question call for?</h3>
              <p className="text-sm text-blue-800 mb-4">
                Listen to yourself. Does this question want you to move, or to rest?
              </p>
              
              <div className="space-y-3">
                <button
                  onClick={() => { setQuestionChoice('action'); setStep('choose-path'); }}
                  className={`w-full p-5 text-left rounded-2xl border-2 transition-all ${
                    questionChoice === 'action' 
                      ? 'border-blue-600 bg-blue-100 shadow-lg' 
                      : 'border-gray-300 bg-white hover:border-blue-400 hover:shadow-md'
                  }`}
                >
                  <div className="font-semibold text-gray-900">ACTION - I'm ready to move forward</div>
                  <div className="text-sm text-gray-600 mt-1">This question calls for a first small step</div>
                </button>

                <button
                  onClick={() => { setQuestionChoice('acceptance'); setStep('acceptance-path'); }}
                  className={`w-full p-5 text-left rounded-2xl border-2 transition-all ${
                    questionChoice === 'acceptance' 
                      ? 'border-green-600 bg-green-100 shadow-lg' 
                      : 'border-gray-300 bg-white hover:border-green-400 hover:shadow-md'
                  }`}
                >
                  <div className="font-semibold text-gray-900">ACCEPTANCE - I'm not ready yet, and that's okay</div>
                  <div className="text-sm text-gray-600 mt-1">This question shows me I need permission to wait</div>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CHOOSE PATH SCREEN (Action) - WITH USER COMMITMENT! */}
        {step === 'choose-path' && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-6">
            <div className="text-center mb-6">
              <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Your One Push-Up</h2>
              <p className="text-gray-600">What's one action so small it feels silly?</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-2xl">
              <p className="text-sm text-blue-800 mb-2">
                <strong>Your Real Question:</strong>
              </p>
              <p className="text-blue-900 italic leading-relaxed">"{realQuestion}"</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">You choose your first domino:</h3>
              <p className="text-sm text-gray-600 mb-4">
                What's one tiny action that would answer this question? Trust yourself.
              </p>
              <p className="text-sm text-gray-500 italic">
                "The smallest move that proves the question is answerable in your real life" — Chapter 1
              </p>
            </div>

            {!showSuggestions && (
              <button
                onClick={generatePathSuggestions}
                disabled={isGenerating}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-4 px-4 rounded-2xl transition-all flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <Sparkles className="w-5 h-5 animate-pulse" />
                    Generating 5 diverse suggestions...
                  </>
                ) : (
                  <>
                    <Lightbulb className="w-5 h-5" />
                    Need ideas? See 5 gentle suggestions
                  </>
                )}
              </button>
            )}

            {showSuggestions && pathOptions.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 text-sm mb-4">5 paths to consider (choose what feels right):</h4>
                {pathOptions.map((option, idx) => (
                  <div key={idx} className="bg-white border-2 border-gray-300 rounded-2xl p-5 hover:border-blue-400 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between mb-2">
                      <div className="font-semibold text-gray-900 text-sm">{option.type}</div>
                      <div className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                        P: {option.probability}%
                      </div>
                    </div>
                    <div className="text-gray-700 mb-2 leading-relaxed">{option.suggestion}</div>
                    <div className="text-xs text-gray-500 italic">{option.why}</div>
                  </div>
                ))}
                <p className="text-xs text-gray-500 text-center mt-4 bg-gray-50 p-3 rounded-xl">
                  <strong>About P scores:</strong> They show diversity - higher P means more unique from others. 
                  These are suggestions, not commands. Choose what feels right, blend them, or ignore them completely.
                </p>
              </div>
            )}

            {/* 🆕 USER COMMITMENT - TYPE YOUR ONE PUSH-UP */}
            <div className="pt-6 border-t border-gray-200 space-y-4">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-xl">
                <p className="text-sm font-semibold text-yellow-900 mb-1">
                  ⚡ The First Domino Moment
                </p>
                <p className="text-sm text-yellow-800">
                  Write the EXACT action you'll take. Be specific. Make it so small it feels silly.
                </p>
              </div>

              <div>
                <label htmlFor="chosen-pushup" className="block font-bold text-gray-900 mb-2">
                  My One Push-Up (I commit to this):
                </label>
                <p className="text-sm text-gray-600 mb-3">
                  Type the tiny action you choose. This is your contract with yourself.
                </p>
                <input
                  type="text"
                  id="chosen-pushup"
                  value={chosenPushUp}
                  onChange={(e) => setChosenPushUp(e.target.value)}
                  placeholder="E.g., I will open the file, I will send one text, I will write one sentence..."
                  className="w-full p-4 border border-blue-400 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 shadow-inner"
                  required
                />
              </div>
            </div>

            <button
              onClick={() => setStep('worksheet-offer')}
              disabled={!chosenPushUp}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-2xl shadow-lg transition-all transform hover:scale-[1.01]"
            >
              I've Committed My First Step - Get My Worksheet
            </button>
          </div>
        )}

        {/* ACCEPTANCE PATH SCREEN - WITH USER COMMITMENT */}
        {step === 'acceptance-path' && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-6">
            <div className="text-center mb-6">
              <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Permission to Wait</h2>
              <p className="text-gray-600">Sometimes not-ready is the right answer</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-2xl">
              <p className="text-green-900 leading-relaxed text-lg font-semibold">
                Your Real Question revealed something important: you're not ready yet, and that's okay.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-gray-900">Your One Push-Up is acceptance:</h3>
              <p className="text-gray-700">
                This isn't giving up—it's honoring where you are. Write the exact permission you need.
              </p>
              <p className="text-sm text-gray-600 italic">
                "Action can also mean acceptance of not being ready"
              </p>
            </div>

            {/* 🆕 USER COMMITMENT - PERMISSION SLIP */}
            <div className="pt-4 border-t border-gray-100 space-y-4">
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-xl">
                <p className="text-sm font-semibold text-green-900 mb-1">
                  ✨ Your Permission Slip
                </p>
                <p className="text-sm text-green-800">
                  Write the exact words that give you relief. This is your first action.
                </p>
              </div>

              <div>
                <label htmlFor="chosen-permission-slip" className="block font-bold text-gray-900 mb-2">
                  I Give Myself Permission To:
                </label>
                <p className="text-sm text-gray-600 mb-3">
                  Be specific. What are you allowing yourself to not do, or to feel?
                </p>
                <textarea
                  id="chosen-permission-slip"
                  value={chosenPermissionSlip}
                  onChange={(e) => setChosenPermissionSlip(e.target.value)}
                  placeholder="E.g., I give myself permission to wait until next week, to feel scared without judging myself, to not have an answer yet..."
                  className="w-full p-4 border border-green-400 rounded-xl focus:ring-4 focus:ring-green-200 focus:border-green-500 resize-none shadow-inner"
                  rows={3}
                  required
                />
              </div>
            </div>
            
            <button
              onClick={() => setStep('worksheet-offer')}
              disabled={!chosenPermissionSlip}
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-2xl shadow-lg transition-all transform hover:scale-[1.01]"
            >
              I've Claimed My Permission - Get My Worksheet
            </button>
          </div>
        )}

        {/* WORKSHEET OFFER SCREEN - WITH COPY-TO-CLIPBOARD */}
        {step === 'worksheet-offer' && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-6">
            <div className="text-center mb-6">
              <Edit3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Blank Worksheet</h2>
              <p className="text-gray-600">A template for you to commit by hand</p>
            </div>

            {/* 🆕 SAVE YOUR WORK WARNING - COPY TO CLIPBOARD */}
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-2xl shadow-md space-y-4">
              <h3 className="font-bold text-red-900 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                IMPORTANT: Save Your Clarity (We Don't Store It!)
              </h3>
              <p className="text-sm text-red-800">
                Because we <strong>do not save your personal data</strong>, you must copy your insights before purchasing. 
                Your privacy matters more than our data collection.
              </p>
              <button
                onClick={() => copyToClipboard(`🧠 MY 5-MINUTE RESET

Real Question:
${realQuestion}

My Commitment:
${chosenPushUp || chosenPermissionSlip || 'Not specified'}

From: The 5-Minute Reset
Date: ${new Date().toLocaleDateString()}`)}
                className="w-full flex items-center justify-center gap-2 p-4 bg-red-100 rounded-xl border-2 border-red-300 cursor-pointer hover:bg-red-200 transition shadow-inner"
              >
                <Copy className="w-5 h-5 text-red-900" />
                <span className="text-sm font-bold text-red-900">
                  Copy Your Session Summary (Click Here!)
                </span>
              </button>
              <p className="text-xs text-red-700 italic">
                <strong>Your Commitment:</strong> {chosenPushUp || chosenPermissionSlip || 'No action/acceptance written yet.'}
              </p>
            </div>

            {/* Why Handwriting Matters */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-2xl">
              <h3 className="font-bold text-amber-900 mb-3">Why write it by hand?</h3>
              <div className="text-sm text-amber-800 space-y-2">
                <p>The act of handwriting translates your clarity from the screen into your life. Your commitments are yours to write.</p>
                <p className="font-semibold">AI helped you see. Now you choose what to do.</p>
              </div>
            </div>

            {/* What's In The Worksheet */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-2xl">
              <h3 className="font-bold text-blue-900 mb-4">Your $1 Blank Worksheet Includes:</h3>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span><strong>Your Real Question</strong> (pre-filled at top)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span><strong>Your Chosen Commitment</strong> (the one you just wrote)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span><strong>14-Day Evidence Log</strong> (track your tiny wins by hand)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span><strong>Inner Critic Box</strong> (name the voice, then prove it wrong)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span><strong>Make It Real</strong> (when, where, who knows)</span>
                </li>
              </ul>
            </div>

            {/* Pricing */}
            <div className="text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6">
              <div className="text-5xl font-bold text-gray-900 mb-2">$1</div>
              <p className="text-gray-600">One worksheet. One commitment. One moment of clarity.</p>
              <p className="text-sm text-gray-500 mt-2">Come back anytime you're stuck again.</p>
            </div>

            {/* Email Input */}
            <div>
              <label className="block font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email (to receive your PDF)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Gumroad Button */}
            <button
              onClick={handleGumroadCheckout}
              disabled={!email}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed text-white font-bold py-5 px-6 rounded-2xl transition-all shadow-lg hover:shadow-xl text-lg transform hover:scale-[1.01]"
            >
              Get My Worksheet - $1 (Secure Gumroad Checkout)
            </button>

            <p className="text-xs text-center text-gray-500">
              Secure payment via Gumroad • Instant PDF download • Your data stays private • Print and fill by hand
            </p>

            {/* Trust & Attribution */}
            <div className="border-t border-gray-200 pt-6 space-y-3">
              <p className="text-sm text-gray-600 text-center">
                <strong>Based on GENIUS:60</strong> by Napoleon Beltran
              </p>
              <p className="text-xs text-gray-500 text-center">
                This tool is a friend, not a bully. The decision is always yours. 🙏
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


// Render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FiveMinuteResetUltimate />);