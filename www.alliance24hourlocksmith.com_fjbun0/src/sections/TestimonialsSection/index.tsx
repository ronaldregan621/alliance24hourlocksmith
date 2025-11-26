export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Locked my keys in the car at the grocery store. They arrived in 22 minutes and had me back in within 5 minutes. Super professional and friendly!",
      author: "Sarah M.",
      location: "White Plains",
      rating: 5
    },
    {
      quote: "Lost my only car key at 3 AM. They came out, cut and programmed a new key right there in the parking lot. Saved me from a huge towing bill!",
      author: "Michael R.",
      location: "Scarsdale",
      rating: 5
    },
    {
      quote: "Key broke off in my ignition. They extracted it and made me a new key on the spot. Fast, professional, and reasonably priced. Highly recommend!",
      author: "Jennifer L.",
      location: "Yonkers",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Real experiences from real customers across Westchester County
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 shadow-lg border-2 border-slate-100 hover:border-blue-200 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-600">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-green-50 border-2 border-green-200 text-green-700 px-8 py-4 rounded-2xl font-bold">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Licensed & Insured • Serving Westchester Since 2010
          </div>
        </div>
      </div>
    </section>
  );
};
