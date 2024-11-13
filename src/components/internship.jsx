import React from 'react';
import {
  Shield,
  Code2,
  Network,
  Lock,
  Terminal,
  ChevronRight,
  GraduationCap
} from 'lucide-react';


export default function internship() {
  const roadmapData = [
    {
      day: 1,
      title: "Security Fundamentals & Network Basics",
      description: "Deep dive into cybersecurity fundamentals, network protocols, and basic security concepts. Hands-on experience with network scanning tools and understanding network architecture.",
      icon: Shield,
      color: "bg-[#00ff00]"
    },
    {
      day: 2,
      title: "Vulnerability Assessment",
      description: "Learn to identify and analyze security vulnerabilities. Practice with industry-standard vulnerability scanning tools and understand risk assessment methodologies.",
      icon: Code2,
      color: "bg-[#00ff00]"
    },
    {
      day: 3,
      title: "Penetration Testing Basics",
      description: "Introduction to ethical hacking concepts and penetration testing methodologies. Hands-on experience with controlled testing environments.",
      icon: Terminal,
      color: "bg-[#00ff00]"
    },
    {
      day: 4,
      title: "Security Incident Response",
      description: "Learn about incident detection, response procedures, and forensics basics. Practice handling simulated security incidents and creating response plans.",
      icon: Network,
      color: "bg-[#00ff00]"
    },
    {
      day: 5,
      title: "Security Best Practices & Final Project",
      description: "Cover security hardening, compliance, and best practices. Complete a final project implementing learned concepts in a real-world scenario.",
      icon: Lock,
      color: "bg-[#00ff00]"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-[#00ff00] p-8 font-mono">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="w-12 h-12 text-[#00ff00] animate-pulse" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-[#00ff00]">
            Cybersecurity Internship Roadmap
          </h1>
          <p className="text-[#00ff00]/90 text-lg max-w-2xl mx-auto">
            &#62; An intensive 5-day journey into the world of cybersecurity, featuring hands-on experience
            and real-world applications_
          </p>
        </div>

        <div className="space-y-8">
          {roadmapData.map((day, index) => {
            const Icon = day.icon;
            return (
              <div
                key={day.day}
                className="relative flex items-start group"
              >
                <div className={`
                  ${day.color} rounded-full p-3 shadow-lg shadow-[#00ff00]/20
                  transform transition-all duration-300
                  group-hover:scale-110 group-hover:rotate-12
                `}>
                  <Icon className="w-6 h-6 text-black" />
                </div>

                <div className="ml-6 flex-1">
                  <div className="bg-[#001a00] rounded-lg p-6 border border-[#00ff00]/20
                    transform transition-all duration-300
                    hover:bg-[#002600] hover:translate-x-2 hover:border-[#00ff00]/40"
                  >
                    <div className="flex items-center mb-2">
                      <span className="text-[#00ff00] font-bold text-lg">
                        &#62; Day_{day.day}
                      </span>
                      <ChevronRight className="w-4 h-4 mx-2 text-[#00ff00]" />
                      <h3 className="text-xl font-semibold text-[#00ff00]">{day.title}</h3>
                    </div>
                    <p className="text-[#00ff00]/80 leading-relaxed">
                      {day.description}
                    </p>
                  </div>
                </div>

                {index < roadmapData.length - 1 && (
                  <div className="absolute left-6 top-14 w-0.5 h-24 bg-gradient-to-b from-[#00ff00]/50 to-transparent" />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#00ff00]/80">
            &#62; Ready to start your cybersecurity journey? This comprehensive program will give you
            the foundation you need to excel in the field_
          </p>
        </div>
      </div>
    </div>
  );
}

