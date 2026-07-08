import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  
} from "lucide-react";
import {
  FaFacebookF,
   FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Logo & About */}
          <div>

            <Image
              src="/logo.png"
              alt="Artha Legal Solutions"
              width={130}
              height={130}
            />

            <h2 className="text-4xl font-bold text-yellow-700 mt-6">
              Our Aim
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Our primary goal is to assist our clients in their legal matters
              in the most efficient manner. We strive to provide practical,
              transparent, and reliable legal solutions while protecting our
              clients&apos; interests and privacy.
            </p>

          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <Link href="/" className="hover:text-[#2E73B8]">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-[#2E73B8]">
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/practice-area"
                  className="hover:text-[#2E73B8]"
                >
                  Practice Areas
                </Link>
              </li>

              <li>
                <Link
                  href="/recovery-of-share"
                  className="hover:text-[#2E73B8]"
                >
                  Recovery of Shares
                </Link>
              </li>

              <li>
                <Link href="/blog" className="hover:text-[#2E73B8]">
                  Blog
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-[#2E73B8]">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Contact Us
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">
                <Phone className="text-yellow-700 mt-1" />
                <div>
                  <h4 className="font-semibold">
                    Phone
                  </h4>
                  <p className="text-gray-600">
                   +91 7834993487
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-yellow-700 mt-1" />
                <div>
                  <h4 className="font-semibold">
                    Address
                  </h4>
                  <p className="text-gray-600">
                    <span>
                Innov8 UCP, 9th Floor, Tower D, Unitech Cyber Park, Sector 39, Gurgaon (Haryana) 122001
              </span>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-yellow-700 mt-1" />
                <div>
                  <h4 className="font-semibold">
                    Email
                  </h4>
                  <p className="text-gray-600">
                    info@arthalegalsolution.com
                  </p>
                </div>
              </div>

            </div>

            {/* Social */}

            <div className="flex gap-4 mt-8">

              <Link
                href="https://arthalegalsolution.com/#"
                className="w-11 h-11 rounded-full bg-yellow-700 text-white flex items-center justify-center hover:bg-blue-700 transition"
              >
                <FaFacebookF size={18} />
              </Link>

              <Link
                href="https://arthalegalsolution.com/#"
                className="w-11 h-11 rounded-full bg-yellow-700 text-white flex items-center justify-center hover:bg-blue-700 transition"
              >
                <FaTwitter size={18} />
              </Link>

             

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-600 text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold">
              Artha Legal Solutions
            </span>
            . All Rights Reserved.
          </p>

          <div className="flex gap-6">

            <Link
              href="/privacy-policy"
              className="hover:text-[#2E73B8]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-[#2E73B8]"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>
      </div>
    </footer>
  );
}