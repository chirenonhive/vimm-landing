'use client';

import React from 'react';
import { ArrowRight, Code, Globe, Users, Twitch, Youtube, Vote, ExternalLink } from 'lucide-react';

// Types for configuration
interface SectionConfig {
  hero?: boolean;
  features?: boolean;
  timeline?: boolean;
  projects?: boolean;
  funding?: boolean;
}

// Navigation Component
const Navigation = () => (
  <nav className="flex justify-between items-center mb-16">
    <div className="text-2xl font-bold">VIMM Framework</div>
    <div className="space-x-6">
      <a href="#features" className="hover:text-blue-400">Features</a>
      <a href="#projects" className="hover:text-blue-400">Projects</a>
      <a href="#funding" className="hover:text-blue-400">Funding</a>
      <a href="https://github.com/VIMM-TV" className="hover:text-blue-400">GitHub</a>
    </div>
  </nav>
);

// Hero Section Component
const HeroSection = () => (
  <header className="container mx-auto px-4 py-16">
    <Navigation />
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
);

// Features Section Component
const FeaturesSection = () => {
  const features = [
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
  ];

  return (
    <section id="features" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Core Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <div className="text-blue-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
        <div id="frame" style={{
          width: '300px',
          margin: 'auto',
          paddingTop: '2em'
        }}>
          <iframe 
            data-aa="2374197" 
            src="//ad.a-ads.com/2374197?size=300x250" 
            style={{
              width: '300px',
              height: '250px',
              border: '0px',
              padding: '0',
              overflow: 'hidden',
              backgroundColor: 'transparent'
            }}
          />
          <a 
            style={{
              display: 'block',
              textAlign: 'right',
              fontSize: '12px'
            }} 
            id="frame-link" 
            href="https://aads.com/campaigns/new/?source_id=2374197&source_type=ad_unit&partner=2374197"
          >
            Advertise here
          </a>
        </div>
      </div>
    </section>
  );
};

// Timeline Section Component
const TimelineSection = () => {
  const phases = [
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
  ];

  return (
    <section id="timeline" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Development Timeline</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {phases.map((phase, index) => (
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
  );
};

// Projects Section Component
const ProjectsSection = () => {
  const projects = [
    {
      name: "DaGamers",
      icon: <Twitch className="h-8 w-8" />,
      description: "Gaming-focused streaming platform built on Hive",
      url: "https://dagamers.xyz",
      status: "Active",
      tags: ["Gaming", "Live Streaming"]
    },
    {
      name: "3Speak",
      icon: <Youtube className="h-8 w-8" />,
      description: "Decentralized video platform focusing on censorship resistance",
      url: "https://3speak.tv",
      status: "Active",
      tags: ["Video", "Content Creation"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Streaming on Hive</h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">
          Discover platforms building the future of decentralized streaming on the Hive blockchain
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-200">
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="block p-6">
                <div className="flex items-center mb-4">
                  <div className="text-blue-400 mr-3">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                    <span className="inline-block px-2 py-1 text-xs bg-green-500/10 text-green-400 rounded">
                      {project.status}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 text-xs bg-blue-500/10 text-blue-400 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-4">Building a streaming platform on Hive?</p>
          <a 
            href="https://github.com/VIMM-TV"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors"
            target="_blank"
          >
            Join the Ecosystem
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

// Funding Section Component
const FundingSection = () => (
  <section id="funding" className="py-20">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Powered by the Community</h2>
            <p className="text-gray-300 mb-6">
              This project is made possible through the Hive Decentralized Funding system (DHF). 
              Your support through proposal #320 helps build the future of decentralized streaming.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-300">
                <Vote className="text-blue-400" size={20} />
                <span>Current Proposal: #320</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Users className="text-blue-400" size={20} />
                <span>Community Driven Development</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            {[
              { text: "Vote on PeakD", url: "https://peakd.com/proposals/320", bgColor: "bg-blue-600 hover:bg-blue-700" },
              { text: "Vote on Ecency", url: "https://ecency.com/proposals/320", bgColor: "bg-purple-600 hover:bg-purple-700" },
              { text: "Vote with Hivesigner", url: "https://hivesigner.com/sign/update_proposal_votes?proposal_ids=320", bgColor: "bg-gray-700 hover:bg-gray-600" }
            ].map((button, index) => (
              <a 
                key={index}
                href={button.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`inline-flex items-center px-6 py-3 ${button.bgColor} rounded-lg font-medium transition-colors text-center`}
              >
                {button.text}
                <ExternalLink className="ml-2" size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Footer Component
const Footer = () => (
  <footer className="bg-gray-900 py-8">
    <div className="container mx-auto px-4 text-center text-gray-400">
      <p>© 2024 VIMM Framework. Released under MIT License.</p>
    </div>
  </footer>
);

// Default configuration
const defaultConfig: SectionConfig = {
  hero: true,
  features: true,
  timeline: true,
  projects: true,
  funding: true,
};

// Main Page Component
export default function Page() {
  const config = defaultConfig;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {config.hero && <HeroSection />}
      {config.features && <FeaturesSection />}
      {config.timeline && <TimelineSection />}
      {config.projects && <ProjectsSection />}
      {config.funding && <FundingSection />}
      <Footer />
    </div>
  );
}