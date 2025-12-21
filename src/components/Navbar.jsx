import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Folder, Mail } from 'lucide-react';

const Navbar = () => {
    const navItems = [
        { id: 'hero', icon: <Home size={20} />, label: 'Home' },
        { id: 'about', icon: <User size={20} />, label: 'About' },
        { id: 'projects', icon: <Folder size={20} />, label: 'Work' },
        { id: 'contact', icon: <Mail size={20} />, label: 'Contact' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40"
        >

            <div className="glass-panel rounded-full px-6 py-3 flex items-center space-x-8">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="text-gray-400 hover:text-white transition-colors duration-300 relative group flex flex-col items-center"
                    >
                        <span className="p-2 rounded-full group-hover:bg-white/10 transition-all duration-300">
                            {item.icon}
                        </span>
                        <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform duration-300 bg-surface px-2 py-1 rounded text-xs text-white whitespace-nowrap border border-white/10">
                            {item.label}
                        </span>
                    </button>
                ))}
            </div>
        </motion.div>
    );
};

export default Navbar;
