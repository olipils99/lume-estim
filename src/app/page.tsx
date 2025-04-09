'use client';
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white px-6 py-10 font-sans overflow-x-hidden">
      <div className="max-w-6xl mx-auto grid gap-32">

        {/* Hero Section */}
        <motion.section
          className="text-center space-y-10 pt-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-500 text-transparent bg-clip-text tracking-tight animate-pulse">
            Lume Estim
          </h1>
          <p className="text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
            The AI Estimator built for the construction world. Upload your plans, get your quotes. Faster. Smarter. Simpler.
          </p>
          <a href="#contact">
            <button className="text-lg px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-semibold rounded-full shadow-xl hover:scale-105 transition-all">
              Book a Demo
            </button>
          </a>
        </motion.section>

        {/* Scroll Reveal Animation - How it works */}
        <motion.section
          className="space-y-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-white">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {["Upload PDF", "AI Analysis", "Instant Estimate", "Export PDF/Excel"].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 * i }}>
                <div className="bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition-all">
                  <h3 className="text-xl font-semibold mb-2 text-indigo-300">Step {i + 1}</h3>
                  <p className="text-gray-400">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Quote Section */}
        <motion.section
          className="bg-gradient-to-r from-indigo-900 to-indigo-800 py-12 px-6 rounded-3xl shadow-xl text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-indigo-100 mb-4">“Estimating is no longer a bottleneck”</h2>
          <p className="text-xl max-w-3xl mx-auto text-indigo-300">
            Imagine quoting a project while sipping coffee, not drowning in plans. Lume makes it happen.
          </p>
        </motion.section>

        {/* Section Divider */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-indigo-600 to-transparent animate-pulse" />

        {/* Stats Section */}
        <motion.section
          className="text-center space-y-10 py-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-white">Trusted Estimating Intelligence</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[{
              label: "Plans Processed",
              value: "10,000+"
            }, {
              label: "Estimates Created",
              value: "6,500+"
            }, {
              label: "Time Saved",
              value: "200,000+ hours"
            }].map((stat, i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-5xl font-extrabold text-indigo-400">{stat.value}</h3>
                <p className="text-gray-400 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* About Founder */}
        <motion.section
          className="grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">Meet the Founder</h2>
            <p className="text-gray-400 text-lg">
              I’m Olivier Pilon — a 17-year-old in construction, building the future of estimating with AI. I’ve lived the pain of manual quoting, so I created a smarter way. Lume is my vision for the next generation of estimators.
            </p>
          </div>
          <Image src="/pic.jpeg" alt="Olivier Pilon" width={400} height={400} className="rounded-xl shadow-lg mx-auto" />
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="text-center space-y-6 pt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
          <p className="text-lg text-gray-300">Want to try Lume or collaborate? Let’s connect.</p>
          <a
            href="mailto:olivier.pilon@lume.com"
            className="text-lg px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:scale-105 transition-all shadow-xl inline-block"
          >
            olivier.pilon@lume.com
          </a>
        </motion.section>

      </div>
    </main>
  );
}
