"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Zap, Shield } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-100">
        {/* Banner */}
        <div className="w-full flex justify-center pt-8 pb-4">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
            alt="EvalsOne AI Banner"
            className="rounded-2xl shadow-lg max-h-64 object-cover w-[90vw] max-w-4xl border border-blue-100"
            style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-900">
                Welcome to EvalsOne
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                The Next Generation AI Evaluation Platform
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-x-4"
            >
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="rounded-full bg-blue-100 p-4">
                <Brain className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-blue-900">Advanced AI</h3>
              <p className="text-gray-600">
                State-of-the-art AI models for accurate evaluations
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="rounded-full bg-blue-100 p-4">
                <Zap className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-blue-900">Lightning Fast</h3>
              <p className="text-gray-600">
                Real-time evaluation results with minimal latency
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="rounded-full bg-blue-100 p-4">
                <Shield className="h-6 w-6 text-blue-700" />
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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
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
    </main>
  );
}
