import {
  Briefcase,
  Scale,
  HeartHandshake,
  Home,
  Lightbulb,
  Pill,
  RotateCcw,
  Landmark,
  Users,
  Handshake,
} from "lucide-react";

const services = [
  { icon: Briefcase, title: "Business & Corporate" },
  { icon: Scale, title: "Arbitration" },
  { icon: HeartHandshake, title: "Family Law" },
  { icon: Home, title: "Real Estate" },
  { icon: Lightbulb, title: "Intellectual Property" },
  { icon: Pill, title: "Pharmaceutical" },
  { icon: RotateCcw, title: "Recovery of Shares" },
  { icon: Landmark, title: "Bankruptcy & Insolvency" },
  { icon: Users, title: "HR & Employment" },
  { icon: Handshake, title: "Dispute Resolution" },
];

export default function Overview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold uppercase text-[#28355E]">
            Overview
          </h2>

          <div className="w-24 h-1 bg-[#2E73B8] mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto space-y-7 text-gray-700 leading-9 text-lg">

          <p>
            <strong>Artha Legal Solutions</strong> is one of the leading law
            firms headquartered in Gurgaon (Haryana), providing practical, strategic,
            and result-oriented legal services to individuals, startups,
            businesses, and corporate organizations across India.
          </p>

          <p>
            At Artha Legal Solutions, our experienced team of Advocates,
            Legal Consultants, and Company Secretaries delivers reliable
            legal advice that is timely, cost-effective, and tailored to
            every client&apos;s unique requirements.
          </p>

          <p>
            We provide comprehensive legal services in Corporate &
            Commercial Law, Startup Advisory, Arbitration, Recovery of
            Shares, Bankruptcy & Insolvency, Pharmaceutical Law, Family
            Law, Real Estate, Intellectual Property Rights, Cyber Law,
            HR & Employment, and Dispute Resolution before various Courts,
            Tribunals, and Regulatory Authorities across India.
          </p>

          <p>
            Our commitment is to provide practical legal solutions,
            transparent advice, and professional representation that help
            our clients achieve long-term success while safeguarding their
            legal interests.
          </p>

          <p>
            We believe that trust, integrity, and excellence are the
            foundation of every successful legal relationship. Our goal is
            to deliver quality legal services with dedication, efficiency,
            and complete client satisfaction.
          </p>

        </div>

        {/* Services */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group bg-white border rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 text-center hover:-translate-y-2"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-[#091e61] transition">

                  <Icon
                    size={34}
                    className="text-[#28355E] group-hover:text-white"
                  />

                </div>

                <h3 className="mt-6 font-semibold text-gray-800 leading-7">
                  {service.title}
                </h3>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}