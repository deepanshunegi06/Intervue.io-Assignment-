import { useState } from 'react';

const FAQ_ITEMS = [
  {
    id: 1,
    question: 'How do I schedule an interview?',
    answer: 'Visit the scheduling page and select your preferred time slot. Our system will match you with available interviewers based on your preferences and experience level.',
  },
  {
    id: 2,
    question: 'Will I be charged per interview?',
    answer: 'Yes, each interview session is charged based on our pricing plans. You can choose a plan that best fits your needs and usage.',
  },
  {
    id: 3,
    question: 'Can I get a trial for On-demand interviews?',
    answer: 'Yes, chat support is available 24/7 for all users. You can reach our support team anytime for assistance.',
  },
];

const FAQItem = ({ question, answer, isExpanded, onToggle, isLast }) => (
  <div className={`${isLast ? '' : 'border-b-2 border-black'}`}>
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between hover:opacity-80 transition-opacity py-4"
      aria-expanded={isExpanded}
    >
      <span className="text-left font-semibold text-gray-900 text-base">
        {question}
      </span>
      <span 
        className="text-gray-900 text-2xl transition-transform duration-300 flex-shrink-0 ml-4" 
        style={{ transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)' }}
      >
        +
      </span>
    </button>
    {isExpanded && (
      <div className="pb-4">
        <p className="text-gray-600 text-sm leading-relaxed">
          {answer}
        </p>
      </div>
    )}
  </div>
);

export default function FAQs() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpanded = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#f5e7e7' }}>
      <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Left Section - Desktop Only */}
          <div className="hidden lg:block lg:col-span-1">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              FAQs
            </h2>
            <p className="text-gray-600 text-sm mb-12 leading-relaxed">
              Here are frequently asked questions to clear all your doubts.
            </p>
            <div>
              <p className="text-gray-900 font-medium text-sm mb-2">
                Still have doubts?
              </p>
              <a 
                href="#" 
                className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-1.5 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Talk to our representative
              </a>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="lg:col-span-3 lg:pl-24">
            {/* Mobile: Title and Description */}
            <div className="lg:hidden mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                FAQs
              </h2>
              <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                Here are frequently asked questions to clear all your doubts.
              </p>
            </div>

            {/* FAQ Items Container */}
            <div className="border-t-2 border-black">
              {FAQ_ITEMS.map((item, index) => (
                <FAQItem
                  key={item.id}
                  question={item.question}
                  answer={item.answer}
                  isExpanded={expandedId === item.id}
                  onToggle={() => toggleExpanded(item.id)}
                  isLast={index === FAQ_ITEMS.length - 1}
                />
              ))}
            </div>

            {/* Mobile: Still Have Doubts - After FAQ Items */}
            <div className="lg:hidden mt-8 pt-8">
              <p className="text-gray-900 font-medium text-sm mb-3">
                Still have doubts?
              </p>
              <a 
                href="#" 
                className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-1.5 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Talk to our representative
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
