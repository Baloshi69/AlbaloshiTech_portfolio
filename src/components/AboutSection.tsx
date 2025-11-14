import React from 'react';
import BrandName from "@/components/BrandName";
import HighlightText from "@/components/HighlightText";

const AboutSection = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-theme-dark to-theme-secondary-dark">
      <div className="container">
        <div className="section-heading space-y-3">
          <h2 className="flex flex-wrap items-baseline justify-center gap-3">
            <span>About</span>
            <BrandName
              showIcon={false}
              className="gap-2"
              textClassName="text-3xl sm:text-4xl"
            />
          </h2>
          <p className="text-theme-muted-text text-base sm:text-lg max-w-2xl mx-auto">
            Building products at the speed of ideas with <span className="text-theme-accent font-semibold">No-Code</span>, <span className="text-theme-accent font-semibold">Vibe Coding</span>, and <span className="text-theme-accent font-semibold">Automation</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div
                className="absolute -inset-6 rounded-[32px] bg-gradient-to-tr from-theme-accent/30 via-blue-400/20 to-transparent blur-3xl"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[28px] border border-theme-accent/20 shadow-2xl shadow-theme-accent/10">
                <img
                  src="/lovable-uploads/Nasir%20Portrait.jpg"
                  alt="Nasir Nawaz portrait"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-theme-dark/95 via-theme-dark/60 to-transparent p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-theme-accent/80">
                    Nasir Nawaz
                  </p>
                  <p className="text-base font-bold text-theme-light">
                    Founder
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-8 max-w-[220px] rounded-xl border border-theme-accent/40 bg-theme-dark/95 px-4 py-3 text-left shadow-xl shadow-theme-accent/20 backdrop-blur-lg">
                <p className="text-base font-bold text-theme-light leading-tight">
                  4+ Years
                </p>
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-theme-muted-text">
                  Product Delivery Experience
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-6">
            <h3 className="text-3xl font-bold text-theme-light">
              We build the launch-ready version of your vision without compromising craft.
            </h3>

            <p className="text-theme-muted-text">
              <BrandName
                showIcon={false}
                className="gap-1"
                textClassName="text-base sm:text-lg text-theme-light"
              />{" "}
              is led by maker and builder Nasir Nawaz. We operate as a fractional product team for founders and business owners who want to bring ideas to life quickly—without the slow timelines and overhead of traditional development.
            </p>

            <p className="text-theme-muted-text">
              We use no-code platforms enhanced with vibe coding and automation-first playbooks to build powerful web applications, launch-ready MVPs, and fully automated systems. Whether you prefer cloud hosting or your own server, we help you deploy and maintain your product with full control and flexibility.
            </p>

            <div className="space-y-4 rounded-2xl border border-theme-accent/15 bg-theme-dark/70 p-6">
              <h4 className="text-lg font-semibold text-theme-light flex items-center gap-2">
                <span role="img" aria-label="rocket">
                  🚀
                </span>
                How We Work
              </h4>
              <ul className="space-y-3 text-theme-muted-text text-sm sm:text-base leading-relaxed list-disc pl-5">
                <li>
                  <span className="font-semibold text-theme-accent">No-Code development</span> for rapid delivery.
                </li>
                <li>
                  <span className="font-semibold text-theme-accent">Vibe Coding</span> to extend functionality beyond platform limits.
                </li>
                <li>
                  <span className="font-semibold text-theme-accent">Automation-first systems</span> to reduce manual work and increase efficiency.
                </li>
                <li>
                  <span className="font-semibold text-theme-accent">Flexible hosting</span> options that match your preferences—third-party or self-hosted.
                </li>
              </ul>
              <p className="text-theme-muted-text text-sm sm:text-base">
                This approach ensures speed, scalability, and ownership without sacrificing quality.
              </p>
            </div>

            <div className="space-y-4 rounded-2xl border border-theme-accent/15 bg-theme-dark/70 p-6">
              <h4 className="text-lg font-semibold text-theme-light flex items-center gap-2">
                <span role="img" aria-label="handshake">
                  🤝
                </span>
                A Collaborative Partnership
              </h4>
              <p className="text-theme-muted-text text-sm sm:text-base leading-relaxed">
                We work closely with you throughout the journey—from idea validation to launch—ensuring every phase is clear, transparent, and aligned with your vision. When your product goes live, we provide documentation, training, and a roadmap to help you maintain momentum.
              </p>
              <p className="text-theme-muted-text text-sm sm:text-base leading-relaxed">
                <span className="font-semibold text-theme-accent">Our mission is simple:</span> turn your vision into a working product—faster, smarter, and with long-term scalability built in.
              </p>
              <p className="text-theme-muted-text text-sm sm:text-base leading-relaxed italic">
                “We don’t just build apps. We help you build long-term leverage.”
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
