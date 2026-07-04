"use client";

import { motion } from "framer-motion";
import { Layers, Popcorn, Users } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Users,
    title: "Create a room",
    description: "Invite friends with a link or code.",
  },
  {
    number: 2,
    icon: Layers,
    title: "Swipe movies",
    description: "Like or pass on movies together.",
  },
  {
    number: 3,
    icon: Popcorn,
    title: "Get a match",
    description: "When everyone likes it, it's a match.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background-secondary px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-12 text-center text-[32px] font-bold tracking-tight">
          How it works
        </h2>
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-lg font-bold">
                {step.number}
              </div>
              <step.icon className="mx-auto mb-3 h-6 w-6 text-primary" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-[15px] text-text-secondary">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
