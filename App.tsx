
import React, { useState } from 'react';

// --- SVG Icon Components ---

const Logo = () => (
  <div className="flex items-center space-x-2">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-500">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <span className="text-2xl font-bold text-slate-800">Vidwaan.ai</span>
  </div>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
  </svg>
);

const CloseIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
);

const ChevronDownIcon = () => (
    <svg className="w-5 h-5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
);


// --- UI Components ---

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "FAQ", href: "#faq" },
    ];

    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#"><Logo /></a>
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-slate-600 hover:text-blue-600 transition-colors duration-300 font-medium">
                            {link.name}
                        </a>
                    ))}
                </nav>
                <div className="hidden md:block">
                    <a href="#" className="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg">
                        Ask Now
                    </a>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-800">
                        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-slate-600 hover:text-blue-600 transition-colors duration-300 font-medium text-lg">
                                {link.name}
                            </a>
                        ))}
                        <a href="#" className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg mt-4">
                            Ask Now
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

const Hero: React.FC = () => (
    <section className="bg-blue-50 py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4 leading-tight">
                Unlock the Wisdom of the Ages
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Vidwaan.ai is your personal AI guide to the sacred texts of Hinduism. Ask any question about the Ramayan, Mahabharat, Vedas, and more, and receive insightful answers instantly.
            </p>
            <a href="#" className="bg-orange-500 text-white font-bold py-4 px-10 rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl text-lg inline-block">
                Begin Your Journey
            </a>
            <div className="mt-16">
              <img src="https://picsum.photos/seed/vidwaan/1200/600" alt="Vedic scriptures illustration" className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl object-cover" />
            </div>
        </div>
    </section>
);

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; colorClasses: string }> = ({ icon, title, description, colorClasses }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <div className={`${colorClasses} rounded-full w-16 h-16 flex items-center justify-center mb-6`}>
            {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
    </div>
);

const Features: React.FC = () => {
    const featureList = [
        {
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v11.494m-9-5.747h18"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.93 19.07A10 10 0 1119.07 4.93 10 10 0 014.93 19.07z"></path></svg>,
            title: "Deep Scriptural Knowledge",
            description: "Access wisdom from Ramayan, Mahabharat, Vedas, Puranas, and Bhagavad Gita."
        },
        {
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>,
            title: "Instant & Accurate",
            description: "Get immediate, context-aware answers to your deepest questions."
        },
        {
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>,
            title: "Conversational Interface",
            description: "Engage in a natural dialogue, as if speaking to a learned scholar."
        },
        {
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"></path></svg>,
            title: "Reference & Sourcing",
            description: "Understand the context with references to specific verses and chapters."
        },
    ];

    const featureColors = [
        "bg-orange-100 text-orange-600",
        "bg-blue-100 text-blue-600",
        "bg-yellow-100 text-yellow-600",
        "bg-teal-100 text-teal-600",
    ];

    return (
        <section id="features" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Explore Ancient Wisdom, Effortlessly</h2>
                    <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">Vidwaan.ai brings millennia of knowledge to your fingertips with powerful features.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featureList.map((feature, index) => 
                        <FeatureCard 
                            key={feature.title} 
                            {...feature} 
                            colorClasses={featureColors[index % featureColors.length]}
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

const HowItWorks: React.FC = () => {
    const steps = [
        {
            step: 1,
            title: "Pose Your Question",
            description: "Ask anything in simple, natural language, from philosophical queries to specific events."
        },
        {
            step: 2,
            title: "AI Analysis",
            description: "Our advanced AI scans millennia of texts to find the most relevant insights for your query."
        },
        {
            step: 3,
            title: "Receive Wisdom",
            description: "Get a clear, concise, and well-sourced answer in seconds, complete with context."
        }
    ];
    const stepColors = ["bg-blue-500", "bg-yellow-500", "bg-orange-500"];

    return (
        <section id="how-it-works" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Get Answers in Three Simple Steps</h2>
                    <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">Our process is designed to be intuitive and fast.</p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                    {steps.map((item, index) => (
                        <React.Fragment key={item.step}>
                            <div className="text-center max-w-sm">
                                <div className={`${stepColors[index]} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold`}>
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                                <p className="text-slate-600">{item.description}</p>
                            </div>
                            {index < steps.length - 1 && <div className="hidden md:block text-slate-300 w-24 h-1 border-t-2 border-dashed border-slate-300 mt-[-3rem]"></div>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

const QuoteSection: React.FC = () => (
    <section className="bg-yellow-50 py-20">
        <div className="container mx-auto px-6 text-center">
            <blockquote className="max-w-4xl mx-auto">
                <p className="font-devanagari text-3xl md:text-4xl text-yellow-900 mb-4">
                    कर्मण्येवाधिकारस्ते मा फलेषु कदाचन | <br /> मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ||
                </p>
                <p className="text-lg md:text-xl text-slate-600 italic mb-6">
                    "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results of your activities, nor be attached to inaction."
                </p>
                <cite className="text-md font-semibold text-slate-800 not-italic">
                    — The Bhagavad Gita, Chapter 2, Verse 47
                </cite>
            </blockquote>
        </div>
    </section>
);

interface FaqItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-slate-200 py-4">
        <button onClick={onClick} className="w-full flex justify-between items-center text-left">
            <h3 className="text-lg font-medium text-slate-800">{question}</h3>
            <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                <ChevronDownIcon />
            </span>
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
            <p className="text-slate-600">{answer}</p>
        </div>
    </div>
);

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqData = [
        {
            question: "What is Vidwaan.ai?",
            answer: "Vidwaan.ai is an advanced AI-powered platform designed to provide answers and insights from a vast collection of Hindu scriptures, including the Vedas, Puranas, Ramayana, Mahabharata, and the Bhagavad Gita."
        },
        {
            question: "Which scriptures can I ask about?",
            answer: "Our AI has been trained on a comprehensive library of major Hindu texts. You can ask about the four Vedas, the 18 major Puranas, the great epics Ramayana and Mahabharata, the Bhagavad Gita, and various Upanishads."
        },
        {
            question: "Is it free to use?",
            answer: "Vidwaan.ai offers a free tier that allows you to ask a certain number of questions per day. For more extensive research and unlimited access, we offer premium subscription plans."
        },
        {
            question: "How accurate are the answers?",
            answer: "Our AI strives for high accuracy by sourcing answers directly from the scriptures and providing context. However, interpretations can vary, and it should be used as a guide for study and exploration, not as a definitive religious authority."
        }
    ];

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Frequently Asked Questions</h2>
                    <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">Have questions? We have answers.</p>
                </div>
                <div className="max-w-3xl mx-auto">
                    {faqData.map((item, index) => (
                        <FaqItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Footer: React.FC = () => (
    <footer className="bg-slate-800 text-slate-300">
        <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-3 gap-8">
                <div>
                    <a href="#" className="flex items-center space-x-2 mb-4">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-400">
                          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-xl font-bold text-white">Vidwaan.ai</span>
                    </a>
                    <p className="text-slate-400">Exploring ancient wisdom with modern technology.</p>
                </div>
                <div className="grid grid-cols-2 md:col-span-2 gap-8">
                    <div>
                        <h4 className="font-semibold text-white mb-4">Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Pricing</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-12 border-t border-slate-700 pt-8 text-center text-slate-400">
                <p>&copy; {new Date().getFullYear()} Vidwaan.ai. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
);


function App() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <QuoteSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
