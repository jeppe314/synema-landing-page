"use client";

import { motion } from "framer-motion";
import { MessageCircle, Popcorn, Users, Layers } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Swipe together",
    description: "Everyone swipes. Only mutual likes move forward.",
  },
  {
    icon: Layers,
    title: "Smart matches",
    description: "Movies your group is actually excited about.",
  },
  {
    icon: MessageCircle,
    title: "Discuss together",
    description: "React, chat and decide before movie night.",
  },
  {
    icon: Popcorn,
    title: "Less arguing",
    description: "Spend less time deciding and more time watching.",
  },
];

export function FeatureCards() {
  return (
    <section id="features" className="px-5 py-16 md:px-12 md:py-[5.5rem] lg:px-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-3 min-[600px]:grid-cols-2 md:grid-cols-4 md:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-border bg-card p-4 md:p-6"
            >
              <feature.icon className="mb-3 h-6 w-6 text-primary md:mb-4" strokeWidth={1.5} />
              <h3 className="text-base font-semibold md:text-xl">{feature.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-text-secondary md:mt-2 md:text-[15px]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
