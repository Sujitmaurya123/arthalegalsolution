// pages/recovery-of-share-iepf.tsx or app/recovery-of-share-iepf/page.tsx
import React from 'react';
import {
  RotateCcw,
  Shield,
  FileCheck,
  Building2,
  Users,
  Clock,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Award,
  Scale,
  TrendingUp,
  FileText,
  UserCheck,
  Building,
  Banknote,
  HelpCircle,
} from 'lucide-react';

const ShareRecoveryPage: React.FC = () => {
  const recoverySteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Schedule a confidential consultation to discuss your share recovery needs. Our experts assess your case and provide clear guidance on the best approach.",
      icon: Users,
    },
    {
      step: "02",
      title: "Document Verification",
      description: "We help you gather and verify all necessary documents, including share certificates, proof of identity, and succession certificates if applicable.",
      icon: FileCheck,
    },
    {
      step: "03",
      title: "Legal Filing & Application",
      description: "Our legal team files the required applications with the concerned authorities, including IEPF Authority, ROC, or company registrars.",
      icon: Building2,
    },
    {
      step: "04",
      title: "Follow-up & Resolution",
      description: "We track your application, coordinate with regulatory bodies, and ensure your shares or unclaimed dividends are recovered efficiently.",
      icon: Clock,
    },
  ];

  const servicesOffered = [
    {
      icon: RotateCcw,
      title: "Recovery of Physical Shares",
      description: "Expert assistance in recovering lost, stolen, or misplaced physical share certificates.",
    },
    {
      icon: Building,
      title: "IEPF Share Recovery",
      description: "Claim your unclaimed shares and dividends from the Investor Education and Protection Fund Authority.",
    },
    {
      icon: UserCheck,
      title: "Transmission of Shares",
      description: "Seamless transfer of shares to legal heirs in case of the shareholder's demise.",
    },
    {
      icon: FileText,
      title: "Duplicate Share Certificates",
      description: "Guidance on obtaining duplicate share certificates for lost or damaged originals.",
    },
    {
      icon: Banknote,
      title: "Unclaimed Dividend Recovery",
      description: "Recover unclaimed dividends that have been transferred to the IEPF or are pending with companies.",
    },
    {
      icon: Scale,
      title: "Name Correction in Records",
      description: "Correction of shareholder names in company records due to spelling errors or legal name changes.",
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "10+ Years of Experience",
      description: "Specialized expertise in share recovery and investor assistance",
    },
    {
      icon: Shield,
      title: "100% Transparency",
      description: "Clear communication and regular updates throughout the process",
    },
    {
      icon: TrendingUp,
      title: "High Success Rate",
      description: "Proven track record of successfully recovering shares and dividends",
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "Personalized solutions tailored to your specific needs",
    },
  ];

  const faqs = [
    {
      q: "What is IEPF and why are my shares there?",
      a: "The Investor Education and Protection Fund (IEPF) is a fund established by the Government of India to protect investor interests. Shares and dividends that remain unclaimed for 7 years are transferred to IEPF. You can claim them back through a proper application process.",
    },
    {
      q: "How long does the recovery process take?",
      a: "The timeline varies depending on the complexity of the case and the authorities involved. Typically, the process takes 3-6 months. Our team works diligently to expedite the process while ensuring all legal requirements are met.",
    },
    {
      q: "What documents are required for share recovery?",
      a: "Key documents include original share certificates (if available), PAN card, Aadhar card, proof of address, bank account details, and succession certificates (for legal heirs). Our team will provide you with a comprehensive list based on your specific case.",
    },
    {
      q: "Can legal heirs claim shares of deceased shareholders?",
      a: "Yes, legal heirs can claim shares through a proper transmission process. We assist in obtaining succession certificates and filing the necessary applications with the company or IEPF Authority.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header/Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-800 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <RotateCcw className="w-5 h-5" />
            <span className="text-sm font-medium">Share Recovery Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Share Recovery & <br />
            <span className="text-indigo-300">IEPF Assistance</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Recover your lost, unclaimed, or physical shares with expert legal guidance. 
            We help shareholders, legal heirs, and families reclaim their rightful financial assets.
          </p>
         
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-blue-200">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Professional Legal Assistance
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              End-to-End Support
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              No Hidden Charges
            </span>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white border-b border-gray-100 py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "100+", label: "Cases Resolved" },
              { value: "50+", label: "Companies Assisted" },
              { value: "10+", label: "Years Experience" },
              { value: "95%", label: "Success Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-indigo-700">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Share Recovery Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for all your share recovery and investor assistance needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesOffered.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-indigo-200 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-indigo-700" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recovery Process */}
      <section className="bg-indigo-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              How We Help You Recover Your Shares
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures efficient and successful share recovery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recoverySteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm relative">
                <div className="absolute -top-3 -right-3 text-4xl font-bold text-indigo-100">
                  {step.step}
                </div>
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-indigo-700" strokeWidth={1.5} />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Why Choose Artha Legal Solutions?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted partner for share recovery and investor protection
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-indigo-700" strokeWidth={1.5} />
              </div>
              <h4 className="font-semibold text-gray-800">{item.title}</h4>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Common questions about share recovery and IEPF process
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  {faq.q}
                </h4>
                <p className="text-gray-600 text-sm ml-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center space-y-2">
              <Phone className="w-8 h-8 text-indigo-600" strokeWidth={1.5} />
              <span className="text-gray-600">+91 7834993487</span>
              <span className="text-sm text-gray-400">Mon-Sat 9AM - 7PM</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Mail className="w-8 h-8 text-indigo-600" strokeWidth={1.5} />
              <span className="text-gray-600">info@arthalegalsolution.com</span>
              <span className="text-sm text-gray-400">We reply within 24 hours</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <MapPin className="w-8 h-8 text-indigo-600" strokeWidth={1.5} />
              <span className="text-gray-600">Innov8 UCP, 9th Floor, Tower D, Unitech Cyber Park, Sector 39, Gurgaon (Haryana) 122001</span>
              <span className="text-sm text-gray-400">India</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShareRecoveryPage;