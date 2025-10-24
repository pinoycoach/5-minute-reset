// Get React hooks from global React object
const { useState, useEffect, useCallback } = React;

// Lucide icons as simple SVG components
const Brain = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>;
const Timer = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>;
const AlertTriangle = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>;
const Heart = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>;
const Mail = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>;
const Check = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>;
const Edit3 = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>;
const Lightbulb = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>;
const Sparkles = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>;
const PlayCircle = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>;
const PauseCircle = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>;
const RotateCcw = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/></svg>;
const Copy = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>;
const CheckCircle = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>;

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

  // 🆕 GUMROAD CHECKOUT FUNCTION - THE MISSING PIECE!
  const handleGumroadCheckout = useCallback(() => {
    if (!email) {
      alert('Please enter your email first!');
      return;
    }
    
    // Build Gumroad URL with user data as URL parameters
    const gumroadUrl = new URL('https://hourofgenius.gumroad.com/l/rmwnr');
    
    // Add parameters that Gumroad can use
    gumroadUrl.searchParams.append('wanted', 'true');
    gumroadUrl.searchParams.append('email', email);
    
    // Add custom fields (these will appear in Gumroad purchase info)
    gumroadUrl.searchParams.append('real_question', realQuestion);
    gumroadUrl.searchParams.append('commitment', chosenPushUp || chosenPermissionSlip || 'Not specified');
    gumroadUrl.searchParams.append('goal', goal);
    gumroadUrl.searchParams.append('fear', fear);
    gumroadUrl.searchParams.append('prize', prize);
    
    // Open Gumroad checkout in new window
    window.open(gumroadUrl.toString(), '_blank');
  }, [email, realQuestion, chosenPushUp, chosenPermissionSlip, goal, fear, prize]);

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
          prompt: `You are the Genius Catalyst from Napoleon Beltran's GENIUS:60 framework.

PHILOSOPHY:
- Users don't need solutions, they need CLARITY
- Sometimes acceptance IS the action - waiting can break inertia
- The first domino is enough - they don't need the whole path  
- The act of reframing creates transformation

Their initial Real Question is:
"${initial}"

Context:
- Goal: ${goal}
- Fear: ${fear}
- Real Prize: ${prize}

STEP 1 - VERBAL SAMPLING ANALYSIS:
Before refining, analyze their language patterns:

1. LANGUAGE STYLE:
   - "I want" = motivated, ready for action
   - "I need" = desperate, urgent energy
   - "I should" = obligated, external pressure
   - Concrete details = clear, action-ready
   - Vague/abstract = confused, needs acceptance

2. EMOTIONAL STATE:
   - Urgent language = needs one small step
   - Resigned language = needs permission to pause
   - Hopeful language = needs to see possibilities
   - Conflicted language = needs integration

3. CORE VALUE (from their "prize"):
   - Freedom/independence = identity-focused refinement
   - Security/safety = acceptance-focused refinement  
   - Pride/respect = legacy-focused refinement
   - Connection = integration-focused refinement

STEP 2 - DETERMINE WHAT THEY NEED:

Based on your verbal sampling analysis above, determine:

IF "I want" language → They need ACTION-READY refinement (small, specific, doable today)
IF "I need" language → They need CLARITY refinement (cut through confusion, see one simple thing)
IF "I should" language → They need PERMISSION refinement (give them permission to not be obligated)
IF conflicted/both-and → They need INTEGRATION refinement (show these aren't competing)
IF vague/abstract → They need OUTCOME-INDEPENDENT refinement (remove the fear of failing)
IF desperate/scared → They need PRESENCE refinement (move from future worry to now)

STEP 3 - GENERATE 2-3 CUSTOM REFINEMENTS:

(NOT the 3 fixed types - generate what THEY actually need based on their language)

Each refinement must:
- Shift from EXTERNAL OUTCOMES to INTERNAL IDENTITY
- Remove fear-dependency (use phrases like "regardless of outcome", "what if this isn't about...")
- Reframe competing priorities as ONE INTEGRATED PATH
- Make it about PURPOSE and WHO THEY BECOME, not what they get
- Provoke an "OH... THAT'S what this is about!" moment
- Match their emotional energy (urgent people get small steps, confused people get clarity, obligated people get permission)

CRITICAL: Don't force all 3 types. Generate 2-3 refinements based on what THEY need.

POSSIBLE REFINEMENT TYPES (generate what fits, not all of these):

1. **Action-Ready**: For motivated "I want" energy
   - Move them from wanting to doing
   - One small, specific, provable action
   - Example: "What if I just [one tiny thing] today to prove I can start?"

2. **Permission-Based**: For obligated "I should" language
   - Release them from false rules
   - Give permission to be themselves
   - Example: "What if it's OK to [do it your way] instead of how everyone expects?"

3. **Clarity-Seeking**: For confused, vague language
   - Cut through the fog
   - One simple, clear direction
   - Example: "What if the real question is just: Can I [one simple thing]?"

4. **Integration-Focused**: For conflicted, both-and language
   - Show how conflicts ARE the path
   - Unified mission, not competing priorities
   - Example: "What if [goal A] IS how I [goal B]?"

5. **Outcome-Independent**: For desperate, fear-driven language
   - Remove the fear requirement
   - Focus on being, not getting
   - Example: "What if it doesn't matter if [bad thing happens]... what matters is if I [prize]?"

6. **Presence-Focused**: For future-obsessed, worried language
   - Bring them from "what if" to "what now"
   - Focus on this moment, not tomorrow
   - Example: "What if the answer isn't about the future... it's about what I do right now?"

7. **Identity-Shift**: When they need to see who they're becoming
   - Move from doing to being
   - Example: "What if I'm already the kind of person who [prize]?"

CRITICAL WRITING RULES:
- Write at a 5th grade reading level
- Use short, simple words (no jargon, no therapy-speak)
- Clear sentences under 15 words
- Active voice: "I can..." not "It would be possible..."
- Sound like THEM, not a therapist

BAD (too complex):
- "How might I cultivate worthiness?"
- "What if I could embrace vulnerability?"

GOOD (clear and simple):
- "What if I'm enough right now?"
- "Can I try one small thing today?"

For each refinement provide:
- The type (based on what they need, not a preset)
- The question (in their voice, simple words)
- Why this resonates (based on their language patterns - what made you choose THIS type)
- Confidence score (0-100)

Return ONLY valid JSON array:
[
  {
    "type": "Type-Name-Based-On-What-They-Need",
    "question": "refined question in simple words that matches their energy",
    "why": "Explanation of why you chose this type based on their language patterns. What did you notice?",
    "confidence": 85
  },
  {
    "type": "Another-Type-If-Needed",
    "question": "another refined question", 
    "why": "Explanation of why this second refinement adds value...",
    "confidence": 78
  }
]

Generate 2-3 refinements. Skip any that don't fit.
Make it transformative. Make them see it differently.
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
          type: "Action-Ready",
          question: `What if I just start with one small step today?`,
          why: "Sometimes action creates clarity. One tiny step breaks the inertia.",
          confidence: 75
        },
        {
          type: "Permission-Based",
          question: `What if it's OK to feel ${prize} right now, even before achieving ${goal}?`,
          why: "You might be waiting for permission you can give yourself.",
          confidence: 70
        },
        {
          type: "Clarity-Seeking",
          question: `What if the real question is: Am I ready to choose this, regardless of outcome?`,
          why: "The fear of ${fear} might be blocking clarity. What if you could move forward anyway?",
          confidence: 68
        }
      ];
      
      setRefinedQuestions(fallbackRefinements);
      setRealQuestion(fallbackRefinements[0].question);
      setQuestionSource('refined-0');
    } finally {
      setIsGenerating(false);
    }
  }, [goal, fear, prize]);

  // Generate Path Options with Verbalized Sampling
  const generatePathOptions = useCallback(async () => {
    setIsGenerating(true);
    setShowSuggestions(false);
    
    try {
      const response = await fetch('/.netlify/functions/gemini-proxy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `You are the Genius Catalyst. The user has their Real Question and chose "${questionChoice === 'action' ? 'ACTION' : 'ACCEPTANCE'}" path.

Real Question: "${realQuestion}"
Original Context:
- Goal: ${goal}
- Fear: ${fear}
- Prize: ${prize}

Generate 5 diverse path suggestions using Verbalized Sampling.

${questionChoice === 'action' ? `
ACTION PATH - Generate 5 "One Push-Up" options:
Each must be:
- ONE specific, tiny action they can do TODAY
- So small it feels silly to NOT do it
- Binary: did it or didn't
- Takes under 15 minutes
- Proves they CAN start

Examples:
- "Write 3 sentences in a journal tonight"
- "Send one 2-line text to someone who matters"
- "Spend 5 minutes sketching one idea"
- "Delete one app that wastes your time"
- "Say 'no' to one small thing today"

For each, provide:
- The tiny action (under 10 words)
- Why it matters (one sentence)
- Probability score (0-100) based on how well it matches their Real Question
` : `
ACCEPTANCE PATH - Generate 5 "Permission Slip" options:
Each must be:
- ONE permission they need to give themselves
- Starts with "I'm allowed to..."
- Removes a fake rule they're following
- Gives them back their agency
- Makes waiting/pausing a VALID choice

Examples:
- "I'm allowed to rest before I prove I deserve it"
- "I'm allowed to want something different than my parents wanted"
- "I'm allowed to be messy while I figure this out"
- "I'm allowed to say 'not yet' without being lazy"
- "I'm allowed to change my mind about what success means"

For each, provide:
- The permission statement (under 12 words)
- Why this matters (one sentence)
- Probability score (0-100) based on how well it addresses their Real Question
`}

Return ONLY valid JSON array (NO markdown, NO backticks):
[
  {
    "option": "the action or permission",
    "why": "why this matters",
    "probability": 85
  }
]

Generate 5 options. Make them SPECIFIC to their situation.
Use simple, clear language. No jargon.`,
          temperature: 1.0,
          useStructuredOutput: true
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const parsed = Array.isArray(data) ? data : (data.paths || []);
      
      if (parsed && parsed.length > 0) {
        setPathOptions(parsed);
        setShowSuggestions(true);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Error generating paths:', error);
      
      // Fallback options
      const fallbackPaths = questionChoice === 'action' ? [
        { option: "Write 2 sentences about this tonight", why: "Starting small proves you can begin.", probability: 80 },
        { option: "Tell one person about your Real Question", why: "Speaking it out loud makes it real.", probability: 75 },
        { option: "Set a 10-minute timer and just think about it", why: "Giving it space creates clarity.", probability: 70 },
        { option: "Delete one distraction from your phone today", why: "Removing blocks creates momentum.", probability: 68 },
        { option: "Do one tiny thing toward your goal right now", why: "Action breaks inertia.", probability: 65 }
      ] : [
        { option: "I'm allowed to rest before I prove I deserve it", why: "Rest isn't earned. It's required.", probability: 80 },
        { option: "I'm allowed to want something different", why: "Your path doesn't need approval.", probability: 75 },
        { option: "I'm allowed to be messy while I figure this out", why: "Progress isn't linear or clean.", probability: 72 },
        { option: "I'm allowed to say 'not yet' without being lazy", why: "Timing matters. Patience is brave.", probability: 70 },
        { option: "I'm allowed to change my mind about success", why: "Your definition doesn't have to be theirs.", probability: 68 }
      ];
      
      setPathOptions(fallbackPaths);
      setShowSuggestions(true);
    } finally {
      setIsGenerating(false);
    }
  }, [realQuestion, questionChoice, goal, fear, prize]);

  // Render functions would go here...
  // (Rest of the component JSX - keeping it the same as your original file)
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-8 px-4">
      {/* Success notification */}
      {showCopySuccess && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50 animate-fade-in">
          <CheckCircle className="w-5 h-5" />
          <span className="font-semibold">Copied to clipboard!</span>
        </div>
      )}

      <div className="max-w-3xl mx-auto">
        
        {/* DISCLAIMER SCREEN */}
        {step === 'disclaimer' && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-6">
            <div className="text-center mb-6">
              <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Before We Begin...</h1>
              <p className="text-lg text-gray-600">A moment of honesty</p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-2xl space-y-4">
              <h2 className="text-2xl font-bold text-amber-900 mb-3">This Tool Is a Friend, Not a Therapist</h2>
              
              <div className="space-y-3 text-amber-900">
                <p className="font-semibold">What this IS:</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>A 5-minute reflection to help you find clarity</li>
                  <li>A compassionate reframe of what you're actually asking</li>
                  <li>A way to see your situation differently</li>
                </ul>

                <p className="font-semibold mt-4">What this is NOT:</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Medical advice or mental health treatment</li>
                  <li>A replacement for therapy or professional support</li>
                  <li>A solution to clinical depression, anxiety, or trauma</li>
                </ul>

                <div className="bg-white p-4 rounded-lg mt-4">
                  <p className="font-bold text-red-700 mb-2">If you're in crisis:</p>
                  <p className="text-sm">Please reach out to a mental health professional, call a crisis helpline, or go to your nearest emergency room. You matter, and real help is available.</p>
                  <p className="text-sm mt-2">
                    <strong>Crisis resources:</strong><br/>
                    • National Suicide Prevention Lifeline: 988<br/>
                    • Crisis Text Line: Text HOME to 741741
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-2xl">
              <h3 className="font-bold text-blue-900 mb-3">What to expect:</h3>
              <ol className="space-y-2 ml-6 list-decimal text-blue-800">
                <li><strong>3-minute brain dump</strong> - Answer 3 simple questions</li>
                <li><strong>AI helps you reframe</strong> - See your Real Question emerge</li>
                <li><strong>Choose your path</strong> - Action or Acceptance (both are valid)</li>
                <li><strong>Optional: $1 worksheet</strong> - A template to commit by hand</li>
              </ol>
            </div>

            <div className="text-center pt-4">
              <label className="flex items-center justify-center gap-3 mb-6">
                <input 
                  type="checkbox" 
                  className="w-5 h-5 rounded border-gray-300"
                  onChange={(e) => {
                    if (e.target.checked) {
                      document.getElementById('start-btn').disabled = false;
                    }
                  }}
                />
                <span className="text-sm text-gray-700">I understand this is a reflection tool, not medical advice</span>
              </label>

              <button
                id="start-btn"
                disabled
                onClick={startBrainDump}
                className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-2xl shadow-lg transition-all text-lg transform hover:scale-[1.02]"
              >
                Start Your 5-Minute Reset
              </button>
            </div>

            <p className="text-xs text-center text-gray-500 pt-4">
              Based on GENIUS:60 by Napoleon Beltran • This tool is designed to complement, not replace, professional guidance
            </p>
          </div>
        )}

        {/* BRAIN DUMP SCREEN */}
        {step === 'braindump' && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-6">
            {/* Timer */}
            <div className="flex items-center justify-between bg-indigo-50 p-4 rounded-2xl">
              <div className="flex items-center gap-3">
                <Timer className="w-6 h-6 text-indigo-600" />
                <span className="text-2xl font-bold text-indigo-900">{formatTime(timeLeft)}</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={toggleTimer}
                  className="p-2 bg-white rounded-lg hover:bg-indigo-100 transition"
                >
                  {isTimerActive ? <PauseCircle className="w-6 h-6 text-indigo-600" /> : <PlayCircle className="w-6 h-6 text-indigo-600" />}
                </button>
                <button
                  onClick={resetTimer}
                  className="p-2 bg-white rounded-lg hover:bg-indigo-100 transition"
                >
                  <RotateCcw className="w-6 h-6 text-indigo-600" />
                </button>
              </div>
            </div>

            <div className="text-center mb-6">
              <Brain className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Your 3-Minute Brain Dump</h2>
              <p className="text-gray-600">No thinking. Just write what comes to mind.</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block font-semibold text-gray-900 mb-2">
                  1. What do you THINK you want? (Your surface goal)
                </label>
                <textarea
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="e.g., 'I want to launch my business' or 'I want to feel less anxious'"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                  rows={2}
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-900 mb-2">
                  2. What's the SCARY part? (What you're avoiding)
                </label>
                <textarea
                  value={fear}
                  onChange={(e) => setFear(e.target.value)}
                  placeholder="e.g., 'failing publicly' or 'being judged' or 'never being enough'"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                  rows={2}
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-900 mb-2">
                  3. What do you REALLY want to FEEL? (The prize beneath it all)
                </label>
                <textarea
                  value={prize}
                  onChange={(e) => setPrize(e.target.value)}
                  placeholder="e.g., 'free' or 'respected' or 'proud of myself' or 'at peace'"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                  rows={2}
                  required
                />
              </div>
            </div>

            <button
              onClick={generateRealQuestion}
              disabled={!goal || !fear || !prize || isGenerating}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-2xl shadow-lg transition-all transform hover:scale-[1.01]"
            >
              {isGenerating ? 'Finding Your Real Question...' : 'Show Me My Real Question'}
            </button>
          </div>
        )}

        {/* QUESTION REFINEMENT SCREEN */}
        {step === 'question-refinement' && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-6">
            <div className="text-center mb-6">
              <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Real Question</h2>
              <p className="text-gray-600">The AI analyzed your language. Here's what it found.</p>
            </div>

            {isGenerating ? (
              <div className="text-center py-12">
                <Sparkles className="w-12 h-12 text-indigo-500 mx-auto mb-4 animate-spin" />
                <p className="text-gray-600">Analyzing your words...</p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Initial Question */}
                <div className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${questionSource === 'initial' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-indigo-300'}`}
                     onClick={() => { setRealQuestion(initialQuestion); setQuestionSource('initial'); }}>
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-sm font-bold text-gray-500 uppercase">Your Original</span>
                    {questionSource === 'initial' && <CheckCircle className="w-5 h-5 text-indigo-600" />}
                  </div>
                  <p className="text-lg font-medium text-gray-900">{initialQuestion}</p>
                </div>

                {/* Refined Questions */}
                {refinedQuestions.map((refined, index) => (
                  <div key={index} className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${questionSource === `refined-${index}` ? 'border-green-600 bg-green-50' : 'border-gray-200 hover:border-green-300'}`}
                       onClick={() => { setRealQuestion(refined.question); setQuestionSource(`refined-${index}`); }}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="text-sm font-bold text-green-600 uppercase">{refined.type}</span>
                        <span className="text-xs text-gray-500 ml-2">Confidence: {refined.confidence}%</span>
                      </div>
                      {questionSource === `refined-${index}` && <CheckCircle className="w-5 h-5 text-green-600" />}
                    </div>
                    <p className="text-lg font-medium text-gray-900 mb-2">{refined.question}</p>
                    <p className="text-sm text-gray-600 italic">{refined.why}</p>
                  </div>
                ))}

                {/* Custom Question Option */}
                <div className={`p-6 rounded-2xl border-2 ${questionSource === 'custom' ? 'border-purple-600 bg-purple-50' : 'border-gray-200'}`}>
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-sm font-bold text-purple-600 uppercase">Write Your Own</span>
                    {questionSource === 'custom' && <CheckCircle className="w-5 h-5 text-purple-600" />}
                  </div>
                  <textarea
                    value={customQuestion}
                    onChange={(e) => {
                      setCustomQuestion(e.target.value);
                      setRealQuestion(e.target.value);
                      setQuestionSource('custom');
                    }}
                    placeholder="If none of these feel right, write your own Real Question here..."
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                    rows={3}
                  />
                </div>
              </div>
            )}

            {!isGenerating && (
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-2xl">
                <h3 className="font-bold text-blue-900 mb-2">Body Check</h3>
                <p className="text-sm text-blue-800 mb-4">Check the boxes that feel true:</p>
                <div className="space-y-2">
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={bodyCheck.true}
                      onChange={(e) => setBodyCheck({...bodyCheck, true: e.target.checked})}
                      className="w-4 h-4 rounded"
                    />
                    <span className="text-blue-900">This feels TRUE (even if uncomfortable)</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={bodyCheck.yours}
                      onChange={(e) => setBodyCheck({...bodyCheck, yours: e.target.checked})}
                      className="w-4 h-4 rounded"
                    />
                    <span className="text-blue-900">This feels like MY question (not someone else's)</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={bodyCheck.scary}
                      onChange={(e) => setBodyCheck({...bodyCheck, scary: e.target.checked})}
                      className="w-4 h-4 rounded"
                    />
                    <span className="text-blue-900">This makes me a little scared (in a good way)</span>
                  </label>
                </div>
              </div>
            )}

            <button
              onClick={() => setStep('path-choice')}
              disabled={!realQuestion || isGenerating}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-2xl shadow-lg transition-all transform hover:scale-[1.01]"
            >
              This Is My Real Question - What Next?
            </button>
          </div>
        )}

        {/* PATH CHOICE SCREEN */}
        {step === 'path-choice' && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Real Question Is:</h2>
              <div className="bg-indigo-50 p-6 rounded-2xl">
                <p className="text-xl font-medium text-indigo-900">{realQuestion}</p>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-2xl">
              <h3 className="font-bold text-amber-900 mb-3">Now, what do you need?</h3>
              <p className="text-amber-800">Choose the path that feels right TODAY. Both are valid.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Action Path */}
              <button
                onClick={() => {
                  setQuestionChoice('action');
                  setStep('commitment-action');
                  generatePathOptions();
                }}
                className="p-8 border-2 border-green-200 hover:border-green-500 rounded-2xl text-left transition-all bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <Sparkles className="w-10 h-10 text-green-600" />
                  <span className="text-sm font-bold text-green-700 bg-green-200 px-3 py-1 rounded-full">ACTION</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">I'm Ready to Move</h3>
                <p className="text-gray-700 mb-4">I want one small, specific thing I can do today to prove I can start.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                    <span>Get one tiny "push-up" action</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                    <span>Something you can do in under 15 minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                    <span>Break the inertia</span>
                  </li>
                </ul>
              </button>

              {/* Acceptance Path */}
              <button
                onClick={() => {
                  setQuestionChoice('acceptance');
                  setStep('commitment-acceptance');
                  generatePathOptions();
                }}
                className="p-8 border-2 border-purple-200 hover:border-purple-500 rounded-2xl text-left transition-all bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <Heart className="w-10 h-10 text-purple-600" />
                  <span className="text-sm font-bold text-purple-700 bg-purple-200 px-3 py-1 rounded-full">ACCEPTANCE</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">I Need Permission</h3>
                <p className="text-gray-700 mb-4">I need to give myself permission to pause, to be messy, to do this my way.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-600" />
                    <span>Get one "permission slip"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-600" />
                    <span>Remove a fake rule you're following</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-600" />
                    <span>Waiting can break inertia too</span>
                  </li>
                </ul>
              </button>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl text-center">
              <p className="text-sm text-blue-800">
                <strong>Remember:</strong> Both paths are valid. Acceptance IS action. Choose what feels right for TODAY.
              </p>
            </div>
          </div>
        )}

        {/* COMMITMENT ACTION SCREEN */}
        {step === 'commitment-action' && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-6">
            <div className="text-center mb-6">
              <Sparkles className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Your One Push-Up</h2>
              <p className="text-gray-600">One tiny action to prove you can start</p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-2xl mb-6">
              <p className="text-sm font-bold text-indigo-900 mb-2">Your Real Question:</p>
              <p className="text-lg text-indigo-800">{realQuestion}</p>
            </div>

            {isGenerating ? (
              <div className="text-center py-12">
                <Sparkles className="w-12 h-12 text-green-500 mx-auto mb-4 animate-spin" />
                <p className="text-gray-600">Generating your options...</p>
              </div>
            ) : showSuggestions && (
              <div className="space-y-4">
                <h3 className="font-bold text-gray-900 mb-4">AI-Generated Suggestions (Pick one or write your own):</h3>
                {pathOptions.map((path, index) => (
                  <button
                    key={index}
                    onClick={() => setChosenPushUp(path.option)}
                    className={`w-full text-left p-6 rounded-2xl border-2 transition-all ${chosenPushUp === path.option ? 'border-green-600 bg-green-50' : 'border-gray-200 hover:border-green-300'}`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <p className="text-lg font-semibold text-gray-900">{path.option}</p>
                      {chosenPushUp === path.option && <CheckCircle className="w-5 h-5 text-green-600" />}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{path.why}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: `${path.probability}%`}}></div>
                      </div>
                      <span className="text-xs text-gray-500">{path.probability}% match</span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-2xl">
              <h3 className="font-bold text-purple-900 mb-3">Or Write Your Own One Push-Up:</h3>
              <textarea
                value={chosenPushUp}
                onChange={(e) => setChosenPushUp(e.target.value)}
                placeholder="What's ONE tiny thing you can do TODAY? (Be specific: 'Write 3 sentences in my journal tonight')"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                rows={3}
                required
              />
            </div>
            
            <button
              onClick={() => setStep('worksheet-offer')}
              disabled={!chosenPushUp}
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-2xl shadow-lg transition-all transform hover:scale-[1.01]"
            >
              I've Chosen My One Push-Up - Get My Worksheet
            </button>
          </div>
        )}

        {/* COMMITMENT ACCEPTANCE SCREEN */}
        {step === 'commitment-acceptance' && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-6">
            <div className="text-center mb-6">
              <Heart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Permission Slip</h2>
              <p className="text-gray-600">What do you need permission to do (or not do)?</p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-2xl mb-6">
              <p className="text-sm font-bold text-indigo-900 mb-2">Your Real Question:</p>
              <p className="text-lg text-indigo-800">{realQuestion}</p>
            </div>

            {isGenerating ? (
              <div className="text-center py-12">
                <Sparkles className="w-12 h-12 text-purple-500 mx-auto mb-4 animate-spin" />
                <p className="text-gray-600">Generating your options...</p>
              </div>
            ) : showSuggestions && (
              <div className="space-y-4">
                <h3 className="font-bold text-gray-900 mb-4">AI-Generated Suggestions (Pick one or write your own):</h3>
                {pathOptions.map((path, index) => (
                  <button
                    key={index}
                    onClick={() => setChosenPermissionSlip(path.option)}
                    className={`w-full text-left p-6 rounded-2xl border-2 transition-all ${chosenPermissionSlip === path.option ? 'border-purple-600 bg-purple-50' : 'border-gray-200 hover:border-purple-300'}`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <p className="text-lg font-semibold text-gray-900">{path.option}</p>
                      {chosenPermissionSlip === path.option && <CheckCircle className="w-5 h-5 text-purple-600" />}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{path.why}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{width: `${path.probability}%`}}></div>
                      </div>
                      <span className="text-xs text-gray-500">{path.probability}% match</span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-2xl">
              <h3 className="font-bold text-green-900 mb-3">Or Write Your Own Permission Slip:</h3>
              <p className="text-sm text-green-800 mb-3">Start with "I'm allowed to..."</p>
              <textarea
                value={chosenPermissionSlip}
                onChange={(e) => setChosenPermissionSlip(e.target.value)}
                placeholder="I'm allowed to... (Example: 'I'm allowed to rest before I prove I deserve it')"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                rows={3}
                required
              />
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
