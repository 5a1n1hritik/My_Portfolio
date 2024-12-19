import React from "react";

const socialLinks = [
  {
    name: "Instagram",
    iconClass:
      "bi-instagram text-pink-600 hover:text-pink-400 transition-colors",
    link: "https://instagram.com/hritik.saini.8",
  },
  {
    name: "Github",
    iconClass: "bi-github text-black hover:text-gray-600",
    link: "https://github.com/5a1n1hritik",
  },
  {
    name: "Linkedin",
    iconClass: "bi-linkedin text-blue-600 hover:text-blue-400",
    link: "https://linkedin.com/in/hritik-saini-559a7b252",
  },
];

const SocialIcons = () => {
  return (
    <>
      <div className="flex flex-col gap-6">
        {socialLinks.map(({ name, iconClass, link }, index) => (
          <a
            href={link}
            key={index}
            className="text-gray-400 hover:text-blue-500 hover:scale-125 transition-transform"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit my ${name} profile`}
          >
            <i className={`bi ${iconClass} text-3xl`} />
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialIcons;
