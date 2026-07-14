// app/components/AboutSection.tsx
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-white">
      {/* Banner */}
      <div className="relative h-[180px] md:h-[240px] lg:h-[300px] overflow-hidden">
        <Image
          src="/images/about.jpg"
          alt="About Artha Legal Solutions"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute top-0 right-0 h-full w-[260px] bg-[#223B77]">
          <div className="absolute bottom-0 left-0 h-20 w-full bg-[#0D7CC4]" />
          <h2 className="absolute bottom-4 left-8 text-5xl font-extrabold uppercase italic text-white">
            ABOUT US
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-center text-4xl font-bold text-[#2872C8]">
          About Artha Legal Solutions
        </h2>

        <div className="mt-10 space-y-8 text-[18px] leading-9 text-gray-800">
          <p>
            Artha Legal Solutions is India&apos;s most reputed and recognized law
            firm headquartered in Gurgaon(Haryana) . Artha has a vast client base and is
            dedicated to provide legal solutions to its clients in the most
            efficient manner keeping the requirements of clients as the top
            priority to curate solutions best suitable to their legal issues.
          </p>

          <p>
            Our team of lawyers holding in depth knowledge and experience in
            different fields of law offer extensive legal services in Corporate
            and Business, Civil, Criminal, Commercial, IPR, Bankruptcy and
            Insolvency, HR and Employment, Real Estate, Family Law and are
            actively involved in all kinds of Dispute Resolution mechanisms
            through Litigation in various courts including Hon&apos;ble Supreme
            Court of India, High Courts and District Courts and judicial forums
            along with Alternate Dispute Resolution being Arbitration.
          </p>

          <p>
            We thrive at providing high quality, economical and systematic legal
            solutions, and also to keep our clients well acquainted with the
            current legal system, laying special emphasis on ethics and timely
            accomplishments of tasks.
          </p>

          <p>
            Artha stands tall with its motto{" "}
            <span className="font-bold text-[#2872C8]">
              YOUR JUSTICE, OUR MOTTO
            </span>{" "}
            and will always devote itself towards indemnification of its
            clients. We can confidently say that we are always on your side and
            know what you are going through.
          </p>
        </div>

        {/* What we do */}
        <div className="mt-20">
          <h2 className="text-center text-4xl font-bold text-[#2872C8]">
            What do we do?
          </h2>

          <ul className="mt-10 space-y-5 list-disc pl-6 text-[18px] leading-9 text-gray-800 marker:text-black">
            <li>
              We believe in time saving solutions, hard work and cost effective
              methods of operations.
            </li>

            <li>
              We understand differences of opinions and provide advisory,
              practical legal solutions and dispute resolutions through various
              legal forums.
            </li>

            <li>
              We aspire to provide quality legal services to our clients and
              stand with them until justice is served.
            </li>

            <li>
              Our team always works to protect your interests, values and
              assets while ensuring the best possible legal outcome.
            </li>

            <li>
              We assist in debt recovery, share recovery, IEPF claims and
              investor support by handling documentation and legal procedures
              on behalf of our clients.
            </li>

            <li>
              We are a purpose-driven law firm focused on delivering value to
              society through ethical legal practices.
            </li>

            <li>
              Our lawyers possess unmatched knowledge, skills and experience
              and always strive to deliver the highest standard of legal
              advisory services.
            </li>

            <li>
              We are an equal opportunity organization that promotes diversity,
              fairness and inclusion.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}