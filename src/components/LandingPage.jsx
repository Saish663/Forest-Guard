import React from 'react';
import { motion } from 'framer-motion';
import { Flame, AlertTriangle, Satellite, ShieldAlert, MapPin } from 'lucide-react';
import HeroSection from './HeroSection';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    variants={item}
    className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 h-full"
    whileHover={{ y: -5 }}
  >
    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 text-orange-500">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const LandingPage = () => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121014] to-[#1A1A1A] text-white">
      {/* Hero Section with Parallax */}
      <HeroSection />

      {/* What is a Forest Fire? */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={item} className="space-y-6">
              <h2 className="text-4xl font-bold">What is a Forest Fire?</h2>
              <p className="text-lg text-gray-300">
                Forest fires, also known as wildfires, are uncontrolled fires that rapidly spread across vegetation and forest areas. 
                They can cause significant damage to ecosystems, wildlife, and human communities.
              </p>
              <p className="text-gray-400">
                These devastating events not only destroy millions of acres of forest each year but also release massive amounts of 
                carbon dioxide into the atmosphere, contributing to climate change and air pollution.
              </p>
            </motion.div>
            <motion.div 
              variants={item}
              className="relative overflow-hidden rounded-xl border border-gray-700/50"
            >
              <div className="aspect-video">
                <img 
                  src="/images/forestfire.jpeg" 
                  alt="Forest fire" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How Do Forest Fires Occur? */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">How Do Forest Fires Occur?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Understanding the causes is the first step in prevention
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div 
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <AlertTriangle className="text-orange-500" size={24} />
                </div>
                <h3 className="text-2xl font-semibold">Natural Causes</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Lightning strikes during dry thunderstorms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Spontaneous combustion of dry vegetation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Volcanic eruptions and lava flows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Extreme heat waves and drought conditions</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-500/10 rounded-lg">
                  <Flame className="text-red-500" size={24} />
                </div>
                <h3 className="text-2xl font-semibold">Human-Induced Causes</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Unattended campfires and bonfires</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Careless disposal of cigarettes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Agricultural burning and land clearing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Arson and intentional fire-setting</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What This Website Does */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">What This Website Does</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Empowering communities with technology to combat forest fires
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <FeatureCard
              icon={Satellite}
              title="Advanced Fire Prediction"
              description="Utilizes satellite imagery and machine learning to predict potential fire outbreaks with high accuracy."
            />
            <FeatureCard
              icon={MapPin}
              title="Interactive Risk Maps"
              description="Real-time heatmaps showing fire risk levels across different regions and states."
            />
            <FeatureCard
              icon={AlertTriangle}
              title="Early Warning System"
              description="Get instant alerts when fire risks increase in your area of interest."
            />
            <FeatureCard
              icon={ShieldAlert}
              title="Prevention Resources"
              description="Educational materials and guidelines to help prevent forest fires in your community."
            />
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent to-gray-900/50">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Be Part of the Solution</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Stay informed about fire risks in your area and take action to protect our forests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="bg-transparent hover:bg-gray-800 text-white font-semibold py-4 px-8 border border-gray-700 rounded-full text-lg transition-all duration-300 hover:border-orange-500">
              Learn More
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default LandingPage;
