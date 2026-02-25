import React from "react";

function MissionVision() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800">
          Our Mission & Vision
        </h2>
        <p className="text-gray-500 mt-2">
          Guided by a commitment to better health outcomes for everyone.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          
          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-5 text-left">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
              alt="Mission"
              className="rounded-xl w-full h-48 object-cover"
            />

            <div className="mt-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <h3 className="font-semibold text-gray-800">Our Mission</h3>
            </div>

            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              To empower a seamless, reliable reminder system that ensures no
              dose is ever missed, giving you peace of mind every single day.
              We bridge the gap between prescription and adherence.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-5 text-left">
            <img
              src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528"
              alt="Vision"
              className="rounded-xl w-full h-48 object-cover"
            />

            <div className="mt-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <h3 className="font-semibold text-gray-800">Our Vision</h3>
            </div>

            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              A world where medical adherence is simple, stress-free, and
              accessible to everyone, empowering patients to take full control
              of their health journey without anxiety.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default MissionVision;
