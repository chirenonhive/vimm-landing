import React from 'react';
import { ArrowRight, Code, Globe, Layers, Lock, Users } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="text-2xl font-bold">VIMM Framework</div>
          <div className="space-x-6">
            <a href="#features" className="hover:text-blue-400">Features</a>
            <a href="#timeline" className="hover:text-blue-400">Timeline</a>
            <a href="https://github.com/vimm-framework" className="hover:text-blue-400">GitHub</a>
          </div>
        </nav>
        
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Open Source Streaming Framework for Hive</h1>
          <p className="text-xl text-gray-300 mb-8">
            Build your own streaming platform on the Hive blockchain with our comprehensive, open-source framework.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium inline-flex items-center">
            Get Started
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Core Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code size={32} />,
                title: "Core Framework",
                description: "Complete streaming server implementation with WebRTC and HLS capabilities"
              },
              {
                icon: <Globe size={32} />,
                title: "Hive Integration",
                description: "Seamless blockchain integration for authentication and rewards"
              },
              {
                icon: <Users size={32} />,
                title: "Community Focused",
                description: "Built for developers, by developers, with extensive documentation"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <div className="text-blue-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Development Timeline</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                phase: "Phase 1 (Months 1-2)",
                items: ["Core streaming server", "Basic Hive integration", "Initial documentation"]
              },
              {
                phase: "Phase 2 (Months 3-4)",
                items: ["Reference frontend", "API documentation", "Deployment guides"]
              },
              {
                phase: "Phase 3 (Months 5-6)",
                items: ["Testing framework", "Development tools", "Community guidelines"]
              }
            ].map((phase, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{phase.phase}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-300">
                      <ArrowRight className="mr-2 text-blue-400" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 VIMM Framework. Released under MIT License.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;