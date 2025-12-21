import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
    };

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full mix-blend-screen" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full mix-blend-screen" />

            <div className="max-w-7xl w-full z-10 grid md:grid-cols-2 gap-12 items-center px-4">
                <motion.div
                    className="text-center md:text-left order-2 md:order-1"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div variants={itemVariants} className="mb-4 flex items-center justify-center md:justify-start space-x-2">
                        <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full" />
                        <span className="text-gray-400 tracking-widest uppercase text-sm font-semibold">Multidisciplinary Professional</span>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Hi, I'm <span className="text-gradient">Tharindu Madhusanka Sakalasooriya</span>
                        <br />
                        <span className="text-3xl block mt-2 font-medium text-gray-300">Bringing Vision to Life through Strategy & Tech</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-lg text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        I am a versatile professional with a diverse skill set ranging from technical development to strategic planning. My approach combines creative problem-solving with a focus on delivering impactful, high-quality results across various domains.
                    </motion.p>

                    <div className="flex items-center gap-4 justify-center md:justify-start">
                        <motion.button
                            variants={itemVariants}
                            onClick={() => scrollToSection('projects')}
                            className="group relative px-6 py-3 bg-surface border border-white/10 rounded-full overflow-hidden"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                            <span className="relative flex items-center space-x-2 font-semibold">
                                <span>View My Work</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </motion.button>

                        <a href="/CV/S.T.M.Sakalasooriya (CV).pdf" download className="inline-block text-sm text-gray-300 hover:text-white border-b border-transparent hover:border-white transition-colors">Download CV</a>
                    </div>
                </motion.div>

                <motion.div
                    className="order-1 md:order-2 flex justify-center items-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] group">
                        {/* Multiple Decorative Halo Rings */}
                        <div className="absolute inset-[-10%] border border-white/5 rounded-full animate-[spin_25s_linear_infinite]" />
                        <div className="absolute inset-[-5%] border border-white/10 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
                        <div className="absolute inset-0 border border-white/20 rounded-full opacity-50" />

                        {/* Main Vibrant Purple Ring */}
                        <div className="absolute inset-[5%] rounded-full border-[18px] border-[#6366f1] shadow-[0_0_80px_rgba(99,102,241,0.5),inset_0_0_30px_rgba(99,102,241,0.3)] z-10 pointer-events-none" />

                        {/* Inner Glowing Background Sphere */}
                        <div className="absolute inset-[8%] rounded-full bg-gradient-to-b from-[#6366f1]/30 via-surface to-black overflow-hidden shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]">
                            <img
                                src="/image/profile.jpg"
                                alt="Tharindu Madhusanka"
                                className="w-full h-full object-cover object-top filter contrast-[1.1] brightness-[1.1] group-hover:scale-110 transition-transform duration-1000 ease-out"
                            />
                            {/* Inner Shine Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                        </div>

                        {/* High Power Glow Spots */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#6366f1]/30 blur-[80px] rounded-full animate-pulse" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/30 blur-[80px] rounded-full animate-pulse delay-1000" />

                        {/* Floating Badge */}
                        <div className="absolute bottom-4 right-4 z-20 glass-panel px-4 py-2 rounded-xl border border-white/10 animate-float">
                            <span className="text-sm font-bold text-white">Available for Projects</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative vertical line */}
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: "40%" }}
                transition={{ duration: 1.5, delay: 1 }}
                className="absolute right-10 bottom-0 w-px bg-gradient-to-t from-white/20 to-transparent hidden md:block"
            />
        </section>
    );
};

export default Hero;
