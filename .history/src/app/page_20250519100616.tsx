"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Zap, Shield, Users, BarChart2, Sparkles } from "lucide-react";
import { useState } from "react";

const stats = [
  { icon: <Users className="h-7 w-7 text-blue-500" />, value: '10,000+', label: 'Active Users' },
  { icon: <BarChart2 className="h-7 w-7 text-cyan-500" />, value: '99.99%', label: 'Uptime' },
  { icon: <Sparkles className="h-7 w-7 text-blue-400" />, value: 'AI-Powered', label: 'Evaluation' },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="w-full min-h-[70vh] flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-100 pb-15">
        {/* Banner */}
        <div className="w-full flex justify-center pt-12 pb-8">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80"
            alt="EvalsOne AI Banner"
            className="rounded-3xl shadow-2xl max-h-[380px] object-cover w-[95vw] max-w-6xl border border-blue-100 animate-fadein"
            style={{ boxShadow: '0 12px 48px 0 rgba(31, 38, 135, 0.18)' }}
          />
        </div>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-blue-900 drop-shadow-lg">
                Welcome to EvalsOne
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-2xl font-medium">
                The Next Generation AI Evaluation Platform
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-x-4"
            >
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 shadow-md">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Intro Section */}
      <section className="w-full bg-white py-12 md:py-20">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">Empowering AI Evaluation for Everyone</h2>
            <p className="text-lg text-gray-700">
              EvalsOne leverages cutting-edge AI to provide fast, accurate, and secure evaluation services for enterprises, developers, and researchers. Our platform is designed for scalability, reliability, and ease of use, making AI evaluation accessible to all.
            </p>
            <ul className="space-y-2 text-base text-blue-800">
              <li>✔️ Real-time, automated evaluation</li>
              <li>✔️ Enterprise-grade security</li>
              <li>✔️ Seamless integration & API</li>
              <li>✔️ Trusted by industry leaders</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col items-center"
          >
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 * i }}
                  viewport={{ once: true }}
                  className="bg-blue-50 rounded-xl shadow p-6 flex flex-col items-center min-w-[120px]"
                >
                  {stat.icon}
                  <span className="text-2xl font-bold text-blue-900 mt-2">
                    {stat.value}
                  </span>
                  <span className="text-sm text-gray-600 mt-1">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12"
          >
            Why Choose EvalsOne?
          </motion.h2>
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-4 text-center bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="rounded-full bg-blue-100 p-4">
                <Brain className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-blue-900">Advanced AI</h3>
              <p className="text-gray-600">
                State-of-the-art AI models for accurate evaluations
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-4 text-center bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="rounded-full bg-blue-100 p-4">
                <Zap className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-blue-900">Lightning Fast</h3>
              <p className="text-gray-600">
                Real-time evaluation results with minimal latency
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-4 text-center bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="rounded-full bg-blue-100 p-4">
                <Shield className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-blue-900">Secure & Reliable</h3>
              <p className="text-gray-600">
                Enterprise-grade security and reliability
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
                Ready to Get Started?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Join thousands of users who trust EvalsOne for their AI evaluation needs
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full py-10 bg-blue-50 border-t border-b border-blue-100">
        <div className="container px-4 md:px-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold text-blue-900 text-center mb-6"
          >
            Trusted by Industry Leaders
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
          >
            {["openai","google","microsoft","amazon","meta","bytedance"].map((brand, i) => (
              <motion.img
                key={brand}
                src={`https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/${brand}.svg`}
                alt={brand}
                className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300 drop-shadow-md bg-white rounded-lg p-2"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-16 bg-white">
        <div className="container px-4 md:px-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-10"
          >
            What Our Clients Say
          </motion.h3>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.18 } } }}
          >
            {[
              {
                name: "Alice Johnson",
                company: "OpenAI",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg",
                text: "EvalsOne's AI evaluation is fast, reliable, and incredibly easy to integrate. Highly recommended!",
              },
              {
                name: "Michael Lee",
                company: "Google",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                text: "The best platform for scalable AI evaluation. The support team is fantastic!",
              },
              {
                name: "Sophia Wang",
                company: "Meta",
                avatar: "https://randomuser.me/api/portraits/women/68.jpg",
                text: "EvalsOne helped us accelerate our AI deployment with confidence and security.",
              },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                className="bg-blue-50 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 * i }}
              >
                <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full border-4 border-white shadow mb-4" />
                <p className="text-gray-700 text-base mb-4">“{t.text}”</p>
                <div className="flex flex-col items-center">
                  <span className="font-bold text-blue-900">{t.name}</span>
                  <span className="text-sm text-blue-500">{t.company}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-16 bg-blue-50 border-t border-blue-100">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-10"
          >
            Frequently Asked Questions
          </motion.h3>
          <div className="space-y-4">
            {[
              {
                q: "What is EvalsOne?",
                a: "EvalsOne is an advanced AI evaluation platform providing fast, secure, and scalable evaluation services for enterprises and developers.",
              },
              {
                q: "How secure is my data?",
                a: "We use enterprise-grade encryption and follow best security practices to ensure your data is always protected.",
              },
              {
                q: "Can I integrate EvalsOne with my workflow?",
                a: "Yes! We provide seamless API integration and detailed documentation for all users.",
              },
            ].map((item, i) => (
              <FAQItem key={item.q} q={item.q} a={item.a} delay={0.2 * i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// FAQItem 组件
function FAQItem({ q, a, delay }: { q: string; a: string; delay: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow p-6 cursor-pointer select-none"
      onClick={() => setOpen((v) => !v)}
      layout
    >
      <div className="flex items-center justify-between">
        <span className="font-semibold text-blue-900 text-lg">{q}</span>
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          className="ml-2 text-blue-500"
        >
          ▶
        </motion.span>
      </div>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden text-gray-700 text-base mt-2"
      >
        {open && <div>{a}</div>}
      </motion.div>
    </motion.div>
  );
}
