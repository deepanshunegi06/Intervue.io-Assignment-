const CARDS = [
  {
    id: 1,
    badge: 'Easy',
    color: 'blue',
    title: 'Design a Free Food App',
    description: 'We created this guide after speaking with our community of interviewees, which includes over 100 current and former Amazon engineers.',
  },
  {
    id: 2,
    badge: 'Medium',
    color: 'orange',
    title: 'Design a Free Food App',
    description: 'We created this guide after speaking with our community of interviewees, which includes over 100 current and former Amazon engineers.',
  },
  {
    id: 3,
    badge: 'Hard',
    color: 'green',
    title: 'Design a Free Food App',
    description: 'We created this guide after speaking with our community of interviewees, which includes over 100 current and former Amazon engineers.',
  },
  {
    id: 4,
    badge: 'Easy',
    color: 'blue',
    title: 'Design a Free Food App',
    description: 'We created this guide after speaking with our community of interviewees, which includes over 100 current and former Amazon engineers.',
  },
  {
    id: 5,
    badge: 'Medium',
    color: 'orange',
    title: 'Design a Free Food App',
    description: 'We created this guide after speaking with our community of interviewees, which includes over 100 current and former Amazon engineers.',
  },
  {
    id: 6,
    badge: 'Hard',
    color: 'green',
    title: 'Design a Free Food App',
    description: 'We created this guide after speaking with our community of interviewees, which includes over 100 current and former Amazon engineers.',
  },
  {
    id: 7,
    badge: 'Easy',
    color: 'blue',
    title: 'Design a Free Food App',
    description: 'We created this guide after speaking with our community of interviewees, which includes over 100 current and former Amazon engineers.',
  },
  {
    id: 8,
    badge: 'Medium',
    color: 'orange',
    title: 'Design a Free Food App',
    description: 'We created this guide after speaking with our community of interviewees, which includes over 100 current and former Amazon engineers.',
  },
  {
    id: 9,
    badge: 'Hard',
    color: 'green',
    title: 'Design a Free Food App',
    description: 'We created this guide after speaking with our community of interviewees, which includes over 100 current and former Amazon engineers.',
  },
];

const COLOR_MAP = {
  blue: 'bg-blue-100 text-blue-800',
  orange: 'bg-orange-100 text-orange-800',
  green: 'bg-green-100 text-green-800',
};

export default function ResourceCards() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-16">
        {/* Mobile: 3 cards */}
        <div className="lg:hidden grid grid-cols-1 gap-6">
          {CARDS.slice(0, 3).map((card) => (
            <article 
              key={card.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-3 mb-4 flex-wrap">
                <span className={`inline-block px-3 py-1 rounded text-xs font-semibold ${COLOR_MAP[card.color]}`}>
                  {card.badge}
                </span>
                <span className="text-xs text-gray-500 font-medium">DATA STRUCTURES</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.description}
              </p>
            </article>
          ))}
        </div>

        {/* Desktop: 9 cards in 3x3 grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6 lg:gap-8">
          {CARDS.map((card) => (
            <article 
              key={card.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-3 mb-4 flex-wrap">
                <span className={`inline-block px-3 py-1 rounded text-xs font-semibold ${COLOR_MAP[card.color]}`}>
                  {card.badge}
                </span>
                <span className="text-xs text-gray-500 font-medium">DATA STRUCTURES</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
