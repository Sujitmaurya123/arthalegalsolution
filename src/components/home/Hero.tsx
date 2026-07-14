import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div className="flex justify-center order-2 lg:order-1">
            <Image
              src="/images/hero.png"
              alt="AMA Legal Solutions"
              width={700}
              height={600}
              priority
              className="w-full h-auto max-w-2xl"
            />
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">

            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-[#28355E] font-semibold mb-6">
              Trusted Legal Experts
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="text-[#28355E]">Artha</span>{" "}
              <span className="text-gray-900">
                Legal Solutions
              </span>
            </h1>

            <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-[#28355E]">
              Your Justice, Our Motto
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">
              We provide trusted legal consultation and professional legal
              services with integrity, dedication, and years of experience.
              Whether it&apos;s recovery of shares, corporate matters, property
              disputes, or legal advisory, our team is committed to protecting
              your rights.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <Link
                href="/contact"
                className=" bg-[#28355E] hover:bg-[#0e2264] text-white px-8 py-4 rounded-md font-semibold transition"
              >
                Book Consultation
              </Link>

              <Link
                href="/practice-area"
                className="border-2 border-[#28355E] text-[#28355E] hover:bg-[#28355E] hover:text-white px-8 py-4 rounded-md font-semibold transition"
              >
                Practice Areas
              </Link>

            </div>

            <div className="grid grid-cols-3 gap-6 mt-14 text-center lg:text-left">

              <div>
                <h3 className="text-3xl font-bold text-[#28355E]">
                  15+
                </h3>
                <p className="text-gray-600 mt-2">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#28355E]">
                  500+
                </h3>
                <p className="text-gray-600 mt-2">
                  Cases Solved
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#28355E]">
                  100%
                </h3>
                <p className="text-gray-600 mt-2">
                  Client Support
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}