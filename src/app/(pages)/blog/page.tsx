// app/blog/page.tsx

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Understanding IEPF Share Recovery Process",
    category: "Share Recovery",
    date: "14 July 2026",
    image: "/images/blog1.jpg",
    description:
      "Learn the complete process of recovering shares transferred to the Investor Education and Protection Fund (IEPF).",
  },
  {
    id: 2,
    title: "How to Resolve Commercial Disputes Efficiently",
    category: "Commercial Law",
    date: "10 July 2026",
    image: "/images/blog1.jpg",
    description:
      "Explore negotiation, arbitration and litigation methods for resolving business disputes.",
  },
  {
    id: 3,
    title: "Protect Your Intellectual Property Rights",
    category: "IPR",
    date: "05 July 2026",
    image: "/images/blog1.jpg",
    description:
      "Discover how trademarks, copyrights and patents protect your business assets.",
  },
  {
    id: 4,
    title: "Real Estate Legal Checklist Before Buying Property",
    category: "Real Estate",
    date: "30 June 2026",
    image: "/images/blog1.jpg",
    description:
      "Essential legal checks every buyer should perform before investing in property.",
  },
  {
    id: 5,
    title: "Family Law: Know Your Rights",
    category: "Family Law",
    date: "24 June 2026",
    image: "/images/blog1.jpg",
    description:
      "Understand legal rights related to marriage, divorce, child custody and maintenance.",
  },
  {
    id: 6,
    title: "Employment Law for Employers & Employees",
    category: "Employment",
    date: "20 June 2026",
    image: "/images/blog1.jpg",
    description:
      "A practical guide to employment contracts, compliance and workplace rights.",
  },
];

export default function BlogPage() {
  return (
    <main>
      {/* Hero */}

      <section className="bg-[#13224D] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Legal Insights & Blogs
          </h1>

          <div className="w-36 h-2 bg-[#FFC21A] mx-auto rounded-full mt-8 shadow-lg"></div>

          <p className="mt-10 text-xl text-gray-300 max-w-3xl mx-auto leading-9">
            Stay informed with the latest legal news, practical guides,
            expert opinions and case studies from our experienced legal team.
          </p>
        </div>
      </section>

      {/* Featured Blog */}

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative h-[420px] rounded-3xl overflow-hidden">
            <Image
              src="/images/about.jpg"
              alt="Featured Blog"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-medium">
              Featured Article
            </span>

            <h2 className="text-5xl font-bold mt-6">
              Complete Guide to IEPF Share Recovery
            </h2>

            <div className="flex items-center gap-2 text-gray-500 mt-6">
              <CalendarDays size={18} />
              14 July 2026
            </div>

            <p className="mt-8 text-lg text-gray-600 leading-9">
              Recovering shares from the Investor Education and Protection
              Fund can be complicated. This guide explains eligibility,
              required documents and the complete claim procedure.
            </p>

            
          </div>
        </div>
      </section>

      {/* Blogs */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">
            Latest Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition"
              >
                <div className="relative h-60">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-7">
                  <span className="text-sm font-semibold text-[#0D6EFD]">
                    {blog.category}
                  </span>

                  <h3 className="text-2xl font-bold mt-3">
                    {blog.title}
                  </h3>

                  <div className="flex items-center gap-2 text-gray-500 mt-3">
                    <CalendarDays size={16} />
                    {blog.date}
                  </div>

                  <p className="text-gray-600 mt-5 leading-8">
                    {blog.description}
                  </p>

                  <Link
                    href={`/blog/`}
                    className="inline-flex items-center gap-2 mt-8 font-semibold text-[#13224D]"
                  >
                    Read Article
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}

      <section className="bg-[#13224D] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl text-center text-white font-bold">
            Browse by Category
          </h2>

          <div className="flex flex-wrap justify-center gap-5 mt-12">
            {[
              "Share Recovery",
              "Corporate Law",
              "Family Law",
              "Commercial",
              "IPR",
              "Employment",
              "Real Estate",
              "Civil Law",
            ].map((item) => (
              <button
                key={item}
                className="bg-white/10 hover:bg-[#FFC21A] hover:text-black text-white px-7 py-3 rounded-full transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}

      <section className="py-24 bg-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Subscribe to Our Newsletter
          </h2>

          <p className="text-gray-600 mt-6">
            Receive the latest legal insights and updates directly in your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border rounded-full px-6 py-4 outline-none"
            />

            <button className="bg-[#FFC21A] px-8 py-4 rounded-full font-semibold hover:bg-yellow-400">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}