"use client";

import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="grid lg:grid-cols-3 min-h-screen">
      {/* Left Side */}
      <div className="lg:col-span-2 bg-white px-8 md:px-16 lg:px-24 py-16 flex items-center">
        <div className="w-full max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold text-[#232323]">
            Please Get In Touch
          </h2>

          <div className="w-44 h-2 bg-[#FFC21A] rounded-full mt-8 shadow-[0_0_20px_rgba(255,194,26,.8)]"></div>

          <p className="mt-12 text-gray-500 text-xl leading-10 max-w-4xl">
            When, while the lovely valley teems with vapour around me,
            and the meridian sun strikes the upper surface of the
            impenetrable.
          </p>

          <form className="mt-20 space-y-16">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <label className="uppercase text-gray-400 text-3xl">
                  Name
                </label>

                <input
                  type="text"
                  className="w-full border-b border-gray-500 py-3 outline-none text-xl"
                />
              </div>

              <div>
                <label className="uppercase text-gray-400 text-3xl">
                  Email
                </label>

                <input
                  type="email"
                  className="w-full border-b border-gray-500 py-3 outline-none text-xl"
                />
              </div>
            </div>

            <div>
              <label className="uppercase text-gray-400 text-3xl">
                Message
              </label>

              <textarea
                rows={3}
                className="w-full border-b border-gray-500 py-3 outline-none resize-none text-xl"
              />
            </div>

            <button
              type="submit"
              className="mt-8 bg-[#FFC21A] hover:bg-yellow-400 text-[#232323] text-2xl px-16 py-6 rounded-full font-semibold transition shadow-[0_0_35px_rgba(255,194,26,.45)]"
            >
              SEND NOW
            </button>
          </form>
        </div>
      </div>

      {/* Right Side */}
      <div className="bg-[#13224D] text-white px-10 md:px-16 py-16">
        <h2 className="text-5xl font-bold mb-20">
          Contact us
        </h2>

        <div className="space-y-16">
          {/* Address */}

          <div className="flex gap-8">
            <div className="w-24 h-24 rounded-full bg-[#FFC21A] flex items-center justify-center shadow-[0_0_30px_rgba(255,194,26,.6)]">
              <MapPin size={42} className="text-[#13224D]" />
            </div>

            <div>
              <h3 className="text-4xl font-semibold mb-4">
                ADDRESS:
              </h3>

              <p className="text-gray-300 leading-10 text-xl">
                UNITED CYBER PARK
                <br />
                INNOV8 D TOWER 9TH FLOOR
                <br />
                SECTOR 39
                <br />
                GURUGRAM, HARYANA
                <br />
                122001
              </p>
            </div>
          </div>

          {/* Phone */}

          <div className="flex gap-8">
            <div className="w-24 h-24 rounded-full bg-[#FFC21A] flex items-center justify-center shadow-[0_0_30px_rgba(255,194,26,.6)]">
              <Phone size={40} className="text-[#13224D]" />
            </div>

            <div>
              <h3 className="text-4xl font-semibold mb-4">
                PHONE:
              </h3>

              <p className="text-gray-300 text-xl">
              +91 7834993487
              </p>
            </div>
          </div>

          {/* Email */}

          <div className="flex gap-8">
            <div className="w-24 h-24 rounded-full bg-[#FFC21A] flex items-center justify-center shadow-[0_0_30px_rgba(255,194,26,.6)]">
              <Mail size={40} className="text-[#13224D]" />
            </div>

            <div>
              <h3 className="text-4xl font-semibold mb-4">
                EMAIL:
              </h3>

              <p className="text-gray-300 text-xl break-all">
                info@arthalegalsolution.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}