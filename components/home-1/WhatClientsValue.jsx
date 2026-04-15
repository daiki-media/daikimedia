import { Star, Quote, Heart, Sparkles } from "lucide-react";

const WhatClientsValue = () => {
  const clientValues = [
    "A team that understands the business",
    "Communication that makes sense",
    "Strategy that feels grounded",
    "Execution that is consistent",
    "Digital marketing that supports growth instead of creating confusion",
  ];

  const testimonials = [
    {
      id: 1,
      text: "DaikiMedia helped us bring more clarity to our digital strategy and improve how our brand showed up online.",
      author: "Sarah Chen",
      role: "Marketing Director",
      company: "Wellness Clinic Group",
    },
    {
      id: 2,
      text: "The team was easy to work with, clear in communication, and strong on both strategy and execution.",
      author: "Ahmad Rizal",
      role: "Founder",
      company: "GrowthLabs Malaysia",
    },
    {
      id: 3,
      text: "We saw better structure, better visibility, and a much more focused direction for growth.",
      author: "Priya Sharma",
      role: "CEO",
      company: "Elevate Brands",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-red-50 dark:from-dark-300 dark:via-dark-300 dark:to-rose-950/20 py-20">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200/30 dark:bg-rose-500/10 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-200/30 dark:bg-red-500/10 rounded-full blur-3xl -z-0"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-100/20 dark:bg-rose-400/5 rounded-full blur-3xl -z-0"></div>
      
      <div className="container relative z-10">
        {/* Header Section with Decorative Elements */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 text-sm font-semibold mb-4">
            <Heart className="w-4 h-4 fill-rose-500" />
            What Clients Value
            <Sparkles className="w-3 h-3" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            A Working Relationship That Feels{" "}
            <span className="bg-gradient-to-r from-rose-600 to-red-600 bg-clip-text text-transparent">
              Clear, Practical, and Reliable
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
            Clients do not just want output. They want confidence in the people behind the work.
          </p>
        </div>

        {/* Client Values Grid - Redesigned with Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {clientValues.map((value, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-rose-50 dark:from-dark-200 dark:to-rose-950/20 p-6 shadow-lg hover:shadow-rose-200/50 dark:hover:shadow-rose-900/30 transition-all duration-500 hover:-translate-y-2 border border-rose-100 dark:border-rose-800/30"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-rose-400/10 to-red-400/10 rounded-bl-3xl -z-0"></div>
              <div className="flex items-start gap-3 relative z-10">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-red-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium text-lg leading-tight">
                  {value}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 to-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Closing Statement - Eye-catching Banner */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-rose-500 to-red-500 rounded-2xl px-10 py-5 shadow-xl shadow-rose-200/50 dark:shadow-rose-900/30 transform hover:scale-105 transition-transform duration-300">
            <p className="text-white font-bold text-xl">
              ✦ That is exactly what we aim to deliver ✦
            </p>
          </div>
        </div>

        {/* Testimonials Section - Redesigned */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
              What Our Clients Say
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-rose-500 to-red-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group relative bg-gradient-to-br from-white to-rose-50/50 dark:from-dark-200 dark:to-rose-950/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-rose-100 dark:border-rose-800/30"
              >
                {/* Decorative Quote Background */}
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-rose-100 to-red-100 dark:from-rose-900/30 dark:to-red-900/30 rounded-full opacity-60 group-hover:scale-110 transition-transform duration-500"></div>
                
                {/* Quote Icon */}
                <div className="relative mb-4">
                  <Quote className="w-10 h-10 text-rose-400/40 dark:text-rose-500/30" />
                </div>
                
                {/* Rating Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-rose-400 text-rose-400" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 relative z-10 text-base leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                {/* Author Info with Avatar */}
                <div className="border-t border-rose-100 dark:border-rose-800/30 pt-4 mt-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-red-500 flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-rose-600 dark:text-rose-400">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-rose-300/50 dark:group-hover:border-rose-700/50 transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
    
      </div>
    </section>
  );
};

export default WhatClientsValue;