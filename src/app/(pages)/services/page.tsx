// pages/services.tsx or app/services/page.tsx
import React from 'react';
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
  ArrowRight,
  CheckCircle,
  Mail,
} from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const ServicesPage: React.FC = () => {
  const services: Service[] = [
    {
      icon: Briefcase,
      title: "Business & Corporate",
      description: "Comprehensive legal solutions for businesses of all sizes, from startups to established corporations.",
      features: ["Company formation", "Contract drafting", "Mergers & acquisitions", "Corporate compliance"],
      popular: true,
    },
    {
      icon: Scale,
      title: "Arbitration",
      description: "Expert arbitration services for efficient dispute resolution outside traditional court systems.",
      features: ["Commercial arbitration", "Construction disputes", "International arbitration", "Mediation"],
    },
    {
      icon: HeartHandshake,
      title: "Family Law",
      description: "Compassionate legal guidance for sensitive family matters with a focus on protecting your loved ones.",
      features: ["Divorce & separation", "Child custody", "Alimony & support", "Adoption"],
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Expert legal support for all property transactions, from residential purchases to commercial developments.",
      features: ["Property transfers", "Lease agreements", "Title verification", "Real estate disputes"],
    },
    {
      icon: Lightbulb,
      title: "Intellectual Property",
      description: "Protect your innovations and creative works with comprehensive IP legal services.",
      features: ["Patent registration", "Trademark protection", "Copyright", "IP litigation"],
      popular: true,
    },
    {
      icon: Pill,
      title: "Pharmaceutical",
      description: "Specialized legal services for the pharmaceutical and healthcare industry.",
      features: ["Regulatory compliance", "FDA approvals", "Drug patents", "Healthcare litigation"],
    },
    {
      icon: RotateCcw,
      title: "Recovery of Shares",
      description: "Expert assistance in recovering lost, unclaimed, or physical shares and investor rights protection.",
      features: ["Share transmission", "IEPF recovery", "Duplicate certificates", "Dematerialization"],
      popular: true,
    },
    {
      icon: Landmark,
      title: "Bankruptcy & Insolvency",
      description: "Strategic legal guidance for financial restructuring, bankruptcy, and insolvency proceedings.",
      features: ["Corporate insolvency", "Personal bankruptcy", "Creditor rights", "Debt restructuring"],
    },
    {
      icon: Users,
      title: "HR & Employment",
      description: "Comprehensive employment law services for employers and employees to maintain workplace harmony.",
      features: ["Employment contracts", "Workplace policies", "Labor disputes", "Termination guidance"],
    },
    {
      icon: Handshake,
      title: "Dispute Resolution",
      description: "Strategic dispute resolution services to settle conflicts efficiently and cost-effectively.",
      features: ["Litigation", "Mediation", "Negotiation", "Settlement agreements"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-800 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <span className="inline-block bg-indigo-500/20 backdrop-blur-sm text-indigo-200 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Comprehensive Legal Solutions
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our Legal Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Expert legal guidance across multiple practice areas, delivered with professionalism and integrity
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                group bg-white rounded-2xl shadow-sm hover:shadow-xl 
                transition-all duration-300 border border-gray-100 
                hover:border-indigo-200 hover:-translate-y-1
                ${service.popular ? 'ring-2 ring-indigo-500/20 relative' : ''}
              `}
            >
              {service.popular && (
                <div className="absolute -top-3 right-6">
                  <span className="bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              )}
              
              <div className="p-6">
                {/* Icon */}
                <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors">
                  <service.icon className="w-7 h-7 text-indigo-700" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <span className="text-sm text-indigo-600 font-medium ml-6">
                      +{service.features.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <button className="w-full flex items-center justify-center gap-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium py-2.5 px-4 rounded-lg transition-colors text-sm">
                  Learn More
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-indigo-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Our Legal Services?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine legal expertise with personalized attention to deliver the best outcomes for our clients
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Expert Team", desc: "20+ years of combined legal experience" },
              { title: "Client-Focused", desc: "Personalized solutions for every case" },
              { title: "Transparent Pricing", desc: "Clear fee structures with no hidden costs" },
              { title: "Proven Results", desc: "Thousands of successful cases resolved" },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-indigo-600" strokeWidth={1.5} />
                </div>
                <h4 className="font-semibold text-gray-800">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Contact us today for a confidential consultation about your legal needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
    </div>
  );
};

export default ServicesPage;