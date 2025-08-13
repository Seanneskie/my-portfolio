"use client";

import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Github,
  FileText,
  Code,
} from "lucide-react";

interface ProfileProps {
  name: string;
  email: string;
  address: string;
  profileImage: string;
  education: {
    level: string;
    institution: string;
    year: string;
  }[];
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
    leetcode?: string;
    resume?: string;
  };
  background: string;
  onHireMe?: () => void;
}

const ProfileSection: React.FC<ProfileProps> = ({
  name,
  email,
  address,
  profileImage,
  education,
  socialLinks,
  background,
  onHireMe,
}) => {
  return (
    <>
      <section id="profile" className="animate-fade-in">
        <div className="flex flex-wrap items-center gap-5 rounded-lg bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 p-6">
          <img
            src={profileImage}
            alt="Profile Picture"
            loading="lazy"
            width={250}
            height={250}
            className="max-w-[250px] rounded-full shadow-md"
          />
          <div className="flex-1 min-w-[200px] space-y-1">
            <h2 className="text-xl font-bold text-primary">Profile</h2>
            <p className="text-foreground">
              <strong className="text-secondary-foreground">Name:</strong> {name}
            </p>
            <p className="text-foreground">
              <strong className="text-secondary-foreground">Email:</strong> {email}
            </p>
            <p className="text-foreground">
              <strong className="text-secondary-foreground">Address:</strong> {address}
            </p>
          </div>
          <div className="flex-1 min-w-[200px] space-y-1">
            <h2 className="text-xl font-bold text-primary">Education</h2>
            {education.map((edu, index) => (
              <p key={index} className="text-foreground">
                <strong className="text-secondary-foreground">{edu.level}:</strong> {edu.institution} - {edu.year}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-12">
          {socialLinks.facebook && (
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-primary"
            >
              <Facebook size={20} />
            </a>
          )}
          {socialLinks.twitter && (
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-primary"
            >
              <Twitter size={20} />
            </a>
          )}
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-primary"
            >
              <Linkedin size={20} />
            </a>
          )}
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-primary"
            >
              <Github size={20} />
            </a>
          )}
          {socialLinks.leetcode && (
            <a
              href={socialLinks.leetcode}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-primary"
            >
              <Code size={20} />
            </a>
          )}
          {socialLinks.resume && (
            <a
              href={socialLinks.resume}
              target="_blank"
              rel="noreferrer"
              download
              className="transition-colors hover:text-primary"
            >
              <FileText size={20} />
            </a>
          )}
        </div>
      </section>

      <section id="background" className="mt-12 animate-fade-in">
        <h2 className="mb-2 text-xl font-bold text-primary">Background</h2>
        <p className="mb-4 text-foreground">{background}</p>
        <button
          className="rounded-md border-2 border-primary px-5 py-2 text-primary bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 animate-gradient-x transition-colors hover:from-primary hover:via-accent hover:to-secondary hover:text-primary-foreground"
          onClick={onHireMe}
        >
          Hire Me
        </button>
      </section>
    </>
  );
};

export default ProfileSection;
