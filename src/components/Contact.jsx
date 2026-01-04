import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, CheckCircle2 } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        // EmailJS Configuration
        const SERVICE_ID = 'service_x0xp66q';
        const TEMPLATE_ID = 'template_6ql9ohs';
        const PUBLIC_KEY = 'gohXAOZLr1K6OpnCe';

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            to_name: 'Tharindu Madhusanka',
            message: formData.message,
            reply_to: formData.email,
        };

        try {
            const result = await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                templateParams,
                PUBLIC_KEY
            );

            if (result.status === 200) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16">

                <div className="flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-7xl font-bold mb-8">Let's <br /><span className="text-gradient">Interact</span></h2>

                        <div className="space-y-6 text-gray-400">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-white/5 rounded-full"><Mail size={24} className="text-primary" /></div>
                                <span className="text-xl">tharindumadhusanka2001@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-white/5 rounded-full"><Phone size={24} className="text-secondary" /></div>
                                <span className="text-xl">077 195 0405</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-white/5 rounded-full"><MapPin size={24} className="text-accent" /></div>
                                <span className="text-xl">Colombo, Sri Lanka</span>
                            </div>

                            <div className="flex items-center space-x-6 mt-6">
                                <a href="https://github.com/DevSSTM" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xl text-gray-300 hover:text-white transition-colors">
                                    <Github size={24} /> GitHub
                                </a>
                                <a href="https://www.linkedin.com/in/tharindu-madhusanka-8215a1305/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xl text-gray-300 hover:text-white transition-colors">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel p-8 rounded-3xl"
                >
                    {status === 'success' ? (
                        <div className="flex flex-col items-center justify-center h-full space-y-4 py-20 text-center">
                            <CheckCircle2 size={64} className="text-green-500 animate-bounce" />
                            <h3 className="text-2xl font-bold">Message Sent!</h3>
                            <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="px-6 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                            >
                                Send another
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 uppercase tracking-wider">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 uppercase tracking-wider">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 uppercase tracking-wider">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-bold text-lg flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                            >
                                <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                                <Send size={20} />
                            </button>
                        </form>
                    )}
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
