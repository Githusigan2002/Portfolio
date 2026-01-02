import profilePic from "../../public/assets/profile-pic.png";

const About = () => {
  const stats = [
    { label: "Years Exp.", value: "1+" },
    { label: "Proj. Completed", value: "3+" },
    { label: "Technologies", value: "8+" },
  ];

  return (
    <section
      id="about"
      className="bg-bg-primary py-24 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="text-accent-primary font-bold tracking-widest uppercase text-sm">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary">
            Transforming Ideas into{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Digital Reality
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl text-center space-y-6">
              <div className="relative inline-block">
                <div className="w-32 h-32 rounded-full bg-bg-tertiary flex items-center justify-center border-2 border-transparent bg-origin-border bg-clip-padding p-1 bg-gradient-accent">
                  <div className="w-full h-full rounded-full bg-bg-tertiary flex items-center justify-center overflow-hidden">
                    <img src={profilePic} alt="Profile" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-text-primary">
                  Githusigan Jeyarupan
                </h3>
                <p className="text-accent-primary font-medium mt-1">
                  Software Developer
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 py-6 border-y border-white/5">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-text-tertiary tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="block w-full bg-gradient-primary py-3 rounded-xl font-bold text-white shadow-lg hover:opacity-90 transition-all hover:scale-[1.02] active:scale-95"
              >
                Work with Me
              </a>

              <div className="flex justify-center gap-4">
                <SocialIcon
                  href="https://github.com/githusigan2002"
                  icon="github"
                  target="_blank"
                  rel="noopener noreferrer"
                />
                <SocialIcon
                  href="https://linkedin.com/in/githusigan"
                  icon="linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                />
                <SocialIcon
                  href="https://www.instagram.com/j_kithusikan"
                  icon="instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-8 flex flex-col space-y-10">
            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-medium text-text-primary leading-tight">
                Comprehensive program covering full-stack development, database
                management, software engineering principles, and modern
                development practices.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                Passionate software engineering student specializing in
                full-stack web development. I build responsive, user-friendly
                applications using the MERN stack and modern technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <FeatureItem
                title="Web Development"
                desc="Modern and responsive web applications built with the latest technologies."
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                }
              />
              <FeatureItem
                title="UI/UX Design"
                desc="User-centered designs focused on providing the best possible experience."
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ href, icon = "default", target, rel }) => {
  const icons = {
    github: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    linkedin: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),
    instagram: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110.002 2.881 1.44 1.44 0 01-.002-2.881z" />
      </svg>
    ),
    twitter: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s-3 .5-5 .5H2s9-11 15-11z" />
      </svg>
    ),
    default: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
      </svg>
    ),
  };
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="text-text-tertiary hover:text-accent-primary transition-colors duration-300"
    >
      {icons[icon]}
    </a>
  );
};

const FeatureItem = ({ title, desc, icon }) => (
  <div className="flex gap-6 p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-accent-primary/30 transition-all group">
    <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-primary flex items-center justify-center text-white shadow-lg shadow-accent-primary/20 transition-transform group-hover:scale-110">
      {icon}
    </div>
    <div className="space-y-1">
      <h4 className="text-xl font-bold text-text-primary">{title}</h4>
      <p className="text-sm text-text-tertiary leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default About;
