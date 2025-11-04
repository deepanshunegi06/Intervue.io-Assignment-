const PRODUCTS = [
  {
    title: 'Matching Interviewer',
    subtitle: 'On-demand',
    description: 'Save 90% of engineering & recruitment bandwidth, outsource candidate interviews to us',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
    alt: 'Team Meeting',
  },
  {
    title: 'Live Interviews',
    subtitle: 'Live interviews',
    description: 'Assess candidates in real-time with our live coding environment & integrated video calls',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop',
    alt: 'Coding Interview',
  },
  {
    title: 'Assessments',
    subtitle: 'Assessments',
    description: 'Share assessments across batches with MCQ, Programming and Subjective questions.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=400&fit=crop',
    alt: 'Assessment Report',
  },
];

export default function Products() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 sm:mb-10 lg:mb-12 text-center">
          Explore more products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {PRODUCTS.map((product, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="m-3 sm:m-4 rounded-lg shadow-md bg-white overflow-hidden h-40 sm:h-48 lg:h-52">
                <img 
                  src={product.image} 
                  alt={product.alt} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="px-4 sm:px-6 py-3 sm:py-4">
                <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-1.5 sm:mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-xs font-medium mb-1.5 sm:mb-2">
                  {product.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-2.5 sm:mb-3">
                  {product.description}
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-1.5 transition-colors">
                  Know more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
