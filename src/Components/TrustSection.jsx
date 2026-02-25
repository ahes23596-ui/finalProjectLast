import React from "react";
import { CheckCircle } from "lucide-react";

export default function TrustSection() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Side */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-600 text-sm px-4 py-1 rounded-full mb-4">
              Real Benefits
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Why thousands trust us
            </h2>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1" size={20} />
                <span className="text-gray-600">
                  Reduced anxiety about missing doses
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1" size={20} />
                <span className="text-gray-600">
                  Better health outcomes through consistency
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1" size={20} />
                <span className="text-gray-600">
                  Peace of mind for family caregivers
                </span>
              </li>
            </ul>
          </div>

          {/* Right Side - Testimonial */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-inner">
            <p className="text-gray-600 italic leading-relaxed mb-6">
              “Before HealthRemind, I was constantly worried about my mom’s
              medication. Now I get a notification when she takes her pills,
              and the stress is completely gone. It’s not just an app, it’s a
              lifesaver.”
            </p>

            <div className="flex items-center gap-4">
              <img
                src="https://i.pravatar.cc/100?img=32"
                alt="Sarah Jenkins"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="text-gray-800 font-semibold">
                  Sarah Jenkins
                </h4>
                <p className="text-gray-500 text-sm">
                  Caregiver of elderly parent
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
