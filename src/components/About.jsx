import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Cpu, Calendar } from 'lucide-react';

const Card = ({ title, desc, icon: Icon, className, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={`glass-panel p-6 rounded-2xl relative overflow-hidden group ${className}`}
    >
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors duration-500" />

        <div className="relative z-10">
            <div className="mb-4 inline-flex p-3 rounded-lg bg-white/5 border border-white/10 text-primary group-hover:text-white group-hover:bg-primary/50 transition-colors duration-300">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
    </motion.div>
);

const About = () => {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center py-20 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:w-1/2"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
                    <p className="text-gray-400 text-lg">
                        I'm Tharindu Madhusanka Sakalasooriya — a multidisciplinary professional with a passion for designing systems and strategies that solve real-world problems. While technology is one of my core strengths, I bring a holistic approach to everything I do, from enterprise asset management to digital commerce.
                    </p>

                    <p className="text-gray-400 text-lg mt-4">
                        Key Expertise: Event Management, Enterprise Solutions, Digital Product Development, and Strategic Planning.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card
                        title="Event Management"
                        desc="Expertise in orchestrating high-impact events, from logistics and ticketing systems to venue management and coordination."
                        icon={Calendar}
                        className=""
                        delay={0.1}
                    />

                    <Card
                        title="Solution Engineering"
                        desc="Designing and implementing tailored systems that streamline complex workflows. From asset registers to automated ticketing."
                        icon={Cpu}
                        className=""
                        delay={0.2}
                    />

                    <Card
                        title="Project Management"
                        desc="Ensuring seamless execution from concept to delivery, with a focus on measurable outcomes and quality."
                        icon={Palette}
                        className=""
                        delay={0.3}
                    />

                    <Card
                        title="Technical Innovation"
                        desc="Exploring new technologies to solve traditional challenges in more efficient and scalable ways."
                        icon={Code}
                        className=""
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
