"use client";

import React from 'react';
import { GraduationCap, Briefcase, Palette, Database, Cpu, Users, Target, Rocket, Star, Linkedin, Github, Mail } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
} from "@/components/ui/timeline";
import Image from 'next/image';

const teamMembers = [
  {
    name: "Channa Laksen Karawita",
    role: "Project Lead & Scrum Master",
    id: "20232310",
    specialty: "Backend Development",
    linkedin: "https://www.linkedin.com/in/channa-karawita-5a2924211/",
    github: "https://github.com/channa-karawita",
    email: "mailto:channa.20232310@iit.ac.lk ",
    image: "/team/channa.jpg" // Add image path
  },
  {
    name: "P.V. Didula Muthumal",
    role: "Frontend Developer",
    id: "20222096",
    specialty: "UI/UX Design",
    linkedin: "https://www.linkedin.com/in/didula-muthumal-6455222ab/",
    github: "https://github.com/didula-muthumal",
    email: "mailto:didula.20222096@iit.ac.lk ",
    image: "/team/didula-muthumal.jpg" // Add image path
  },
  {
    name: "J.A.D.S.N Jayakody",
    role: "Product Owner & Developer",
    id: "20222284",
    specialty: "System Architecture",
    linkedin: "https://www.linkedin.com/in/sanithu-jayakody-a541142ab/",
    github: "https://github.com/jadsn-jayakody",
    email: "mailto:sanithu.20222284@iit.ac.lk ",
    image: "/team/jadsn-jayakody.jpg" // Add image path
  },
  {
    name: "Don Kehan Hasnaka Liyanage",
    role: "Developer",
    id: "20222087",
    specialty: "API Integration",
    linkedin: "https://linkedin.com/in/kehan-liyanage",
    github: "https://github.com/kehan-liyanage",
    email: "mailto:kehan.20222087@iit.ac.lk ",
    image: "/team/kehan-liyanage.jpg" // Add image path
  },
  {
    name: "Thihan Jinajith Ranwella",
    role: "Developer",
    id: "20222265",
    specialty: "Database Design",
    linkedin: "https://www.linkedin.com/in/thihanjr/",
    github: "https://github.com/thihan-ranwella",
    email: "mailto:thihan.20222265@iit.ac.lk ",
    image: "/team/thihan-ranwella.jpg" // Add image path
  },
  {
    name: "Piumal Gunathilaka",
    role: "Developer",
    id: "20222440",
    specialty: "Testing & QA",
    linkedin: "https://www.linkedin.com/in/piumal-gunathilaka-38152b2b8/",
    github: "https://github.com/piumal-gunathilaka",
    email: "mailto:piumal.20222440@iit.ac.lk ",
    image: "/team/piumal-gunathilaka.jpg" // Add image path
  }
];
const features = [
  { icon: <GraduationCap className="h-8 w-8" />, title: "Education Focus", description: "Empowering academic success with specialized tools." },
  { icon: <Briefcase className="h-8 w-8" />, title: "Task Isolation", description: "Organize tasks effectively and minimize distractions." },
  { icon: <Palette className="h-8 w-8" />, title: "Intuitive UI", description: "User-friendly design for seamless navigation." },
  { icon: <Database className="h-8 w-8" />, title: "Secure Storage", description: "Keep your data safe with state-of-the-art security." },
  { icon: <Cpu className="h-8 w-8" />, title: "AI Integration", description: "Advanced AI tools for smarter productivity." },
  { icon: <Users className="h-8 w-8" />, title: "Collaboration", description: "Connect and work together effortlessly." }
];

function VisionSection() {
  const visionPoints = [
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: "Our Mission",
      description: "To create an intelligent workspace that streamlines academic workflows and enhances student productivity."
    },
    {
      icon: <Rocket className="h-8 w-8 text-purple-500" />,
      title: "Our Goals",
      description: "Building a platform that adapts to individual needs while fostering collaboration and innovation in education."
    },
    {
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      title: "Our Values",
      description: "Committed to excellence, user privacy, and continuous improvement in educational technology."
    }
  ];
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">Our Vision</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visionPoints.map((point, index) => (
          <div
            key={index}
            className="bg-card rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 bg-background rounded-full p-4">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
              <p className="text-muted-foreground">{point.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 text-center">
        <p className="text-lg max-w-3xl mx-auto">
          FusionSpace aims to revolutionize how students interact with digital tools,
          creating a seamless experience that transforms educational workflows while
          maintaining security and efficiency.
        </p>
      </div>
    </section>
  );
}


function ProjectTimeline() {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">Project Timeline</h2>
      <Timeline positions="center">
        <TimelineItem status="done">
          <TimelineHeading side="left">Planning Phase</TimelineHeading>
          <TimelineHeading side="right" variant="secondary">
            Completed (05/04/2024)
          </TimelineHeading>
          <TimelineDot status="done" />
          <TimelineLine done />
          <TimelineContent side="left">
            Initial research, defining project scope, and setting milestones.
            Requirements gathering and brainstorming sessions to ensure feasibility.
          </TimelineContent>
        </TimelineItem>
        <TimelineItem status="done">
          <TimelineHeading side="right">Design Phase</TimelineHeading>
          <TimelineHeading side="left" variant="secondary">
            Completed (10/04/2024)
          </TimelineHeading>
          <TimelineDot status="done" />
          <TimelineLine done />
          <TimelineContent>
            UI/UX wireframing, prototyping, and refining the user experience to ensure an intuitive design.
          </TimelineContent>
        </TimelineItem>
        <TimelineItem status="done">
          <TimelineHeading side="left">Development Phase</TimelineHeading>
          <TimelineHeading side="right" variant="secondary">
            In Progress
          </TimelineHeading>
          <TimelineDot status="current" />
          <TimelineLine />
          <TimelineContent side="left">
            Active coding, feature implementation, and system integrations. Testing and debugging in real-time.
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeading>Testing & QA</TimelineHeading>
          <TimelineHeading side="left" variant="secondary">
            Upcoming
          </TimelineHeading>
          <TimelineDot />
          <TimelineLine />
          <TimelineContent>
            Comprehensive testing of features, performance checks, and bug fixes to ensure system reliability.
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeading side="left">Deployment & Launch</TimelineHeading>
          <TimelineHeading side="right" variant="secondary">
            Scheduled (05/10/2024)
          </TimelineHeading>
          <TimelineDot />
          <TimelineLine />
          <TimelineContent side="left">
            Deploying the application to production, final security checks, and post-launch support.
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineDot />
          <TimelineHeading>Project Completion</TimelineHeading>
          <TimelineHeading side="left" variant="secondary">
            Finalized
          </TimelineHeading>
        </TimelineItem>
      </Timeline>
    </section>
  );
}
export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-4xl font-bold mb-6 md:text-5xl lg:text-6xl">About FusionSpace</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16">{
            `We're building the future of digital workspaces, making it easier for students
            to manage their academic life and collaborate effectively.`
          }
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 flex flex-col items-center text-center relative group transition-transform duration-300 cursor-pointer bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg"
              >
                <div className="mb-4 text-gray-800 dark:text-gray-200">{feature.icon}</div>
                <span className="font-medium text-gray-900 dark:text-gray-100">{feature.title}</span>
                {/* Tooltip Popup */}
                <div
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-700 dark:bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 w-48 text-center shadow-lg"
                >
                  {feature.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <ProjectTimeline />

        {/* Vision Section */}
        <VisionSection />

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-card overflow-hidden">
                <div className="aspect-square w-full overflow-hidden">
                  <Image
                    fill
                    src={member.image}
                    alt={`Photo of ${member.name}`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-muted-foreground mb-1">{member.role}</p>
                  <p className="text-sm text-muted-foreground">ID: {member.id}</p>
                  <p className="text-sm mt-4 text-muted-foreground">Specialty: {member.specialty}</p>
                  <div className="flex justify-center gap-4 mt-4">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-current hover:text-blue-600">
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-current hover:text-gray-800 dark:hover:text-gray-400">
                      <Github className="h-6 w-6" />
                    </a>
                    <a href={member.email} className="text-current hover:text-red-500">
                      <Mail className="h-6 w-6" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
