import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Artha Legal Solutions",
  description:
    "Read the Terms & Conditions governing the use of the Artha Legal Solutions website and legal services.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Terms & Conditions
          </h1>

          <p className="mt-4 text-sm text-gray-500">
            Effective Date: 01 July 2026
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Welcome to{" "}
            <span className="font-semibold text-gray-900">
              Artha Legal Solutions
            </span>
            . By accessing or using our website, you agree to comply with and
            be bound by these Terms & Conditions. If you do not agree with any
            part of these terms, please discontinue the use of our website.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              1. About Us
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              Artha Legal Solutions is a law firm headquartered in Gurgaon,
              Haryana, providing legal advisory, litigation, compliance,
              arbitration, documentation, and corporate legal services across
              India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              2. Acceptance of Terms
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              By using this website, you acknowledge that you have read,
              understood, and agreed to these Terms & Conditions and our Privacy
              Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              3. Legal Information Only
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              The information published on this website is provided for general
              informational purposes only and should not be considered legal
              advice. Viewing this website or contacting us through it does not
              establish an attorney-client relationship.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              4. Professional Engagement
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              Legal services will only be provided after a formal engagement,
              conflict check (where applicable), and mutual acceptance of the
              terms of engagement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              5. User Responsibilities
            </h2>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              <li>Provide accurate information when contacting us.</li>
              <li>Use the website only for lawful purposes.</li>
              <li>Do not attempt to compromise website security.</li>
              <li>
                Do not upload malicious software, spam, or unauthorized content.
              </li>
              <li>Respect all applicable laws while using this website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              6. Intellectual Property
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              All content on this website, including text, graphics, logos,
              icons, images, and design, is the property of Artha Legal
              Solutions unless otherwise stated and is protected under
              applicable intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              7. Limitation of Liability
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              Artha Legal Solutions shall not be liable for any direct,
              indirect, incidental, or consequential damages arising from the
              use of this website or reliance upon its contents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              8. Third-Party Links
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              This website may contain links to third-party websites. We are not
              responsible for the content, privacy practices, or services
              offered by such external websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              9. Privacy
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              Your use of this website is also governed by our Privacy Policy,
              which explains how we collect, use, and safeguard your personal
              information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              10. Changes to Terms
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              We reserve the right to update these Terms & Conditions at any
              time without prior notice. Continued use of the website after any
              changes constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              11. Governing Law
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              These Terms & Conditions shall be governed by and interpreted in
              accordance with the laws of India. Any disputes arising from the
              use of this website shall be subject to the exclusive jurisdiction
              of the courts in Gurgaon, Haryana.
            </p>
          </section>

          <section className="rounded-xl border bg-gray-50 p-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              Contact Information
            </h2>

            <div className="mt-6 space-y-2 text-gray-600">
              <p className="font-semibold text-gray-900">
                Artha Legal Solutions
              </p>
              <p>Innov8 UCP, 9th Floor, Tower D, Unitech Cyber Park, Sector 39, Gurgaon (Haryana) 122001</p>
              <p>Email: info@arthalegalsolutions.com</p>
              <p>Phone: +91 7834993487</p>
              <p>Website: www.arthalegalsolutions.com</p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}