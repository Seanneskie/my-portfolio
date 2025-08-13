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
}

const ProfileSection: React.FC<ProfileProps> = ({
  name,
  email,
  address,
  profileImage,
  education,
  socialLinks,
  background,
}) => {
  const handleHireMe = () => {
    window.open(`mailto:${email}`);
  };

  return (
    <>
      <section
        id="profile"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <div className="profile-container">
          <div className="profile-image">
            <img
              src={profileImage}
              alt="Profile Picture"
              loading="lazy"
              width={250}
              height={250}
            />
          </div>
          <div className="profile-content">
            <h2>Profile</h2>
            <p className="card-text">
              <strong>Name:</strong> {name}
            </p>
            <p className="card-text">
              <strong>Email:</strong> {email}
            </p>
            <p className="card-text">
              <strong>Address:</strong> {address}
            </p>
          </div>
          <div className="educ-bg">
            <h2>Education</h2>
            {education.map((edu, index) => (
              <p key={index} className="card-text">
                <strong>{edu.level}:</strong> {edu.institution} - {edu.year}
              </p>
            ))}
          </div>
        </div>

        <div className="social-links flex gap-3">
          {socialLinks.facebook && (
            <a href={socialLinks.facebook} target="_blank" rel="noreferrer">
              <Facebook size={20} />
            </a>
          )}
          {socialLinks.twitter && (
            <a href={socialLinks.twitter} target="_blank" rel="noreferrer">
              <Twitter size={20} />
            </a>
          )}
          {socialLinks.linkedin && (
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={20} />
            </a>
          )}
          {socialLinks.github && (
            <a href={socialLinks.github} target="_blank" rel="noreferrer">
              <Github size={20} />
            </a>
          )}
          {socialLinks.leetcode && (
            <a href={socialLinks.leetcode} target="_blank" rel="noreferrer">
              <Code size={20} />
            </a>
          )}
          {socialLinks.resume && (
            <a
              href={socialLinks.resume}
              target="_blank"
              rel="noreferrer"
              download
            >
              <FileText size={20} />
            </a>
          )}
        </div>
      </section>

      <section
        id="background"
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <h2>Background</h2>
        <p>{background}</p>
        <button className="hire-me" onClick={handleHireMe}>
          Hire Me
        </button>
      </section>
    </>
  );
};

export default ProfileSection;
