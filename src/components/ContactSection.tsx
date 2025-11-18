import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { buildCalendlyLink } from "@/lib/calendly";
import CalendlyLogo from "@/assets/logos/calendly.svg";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const calendlyLink = buildCalendlyLink(formData);

    toast({
      title: "Redirecting to Calendly",
      description: "Pick a time that works best for you.",
    });

    window.open(calendlyLink, "_blank", "noopener,noreferrer");

    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-[#ff8c4c]" />,
      title: "Email me directly",
      description: "Share your brief and I'll respond within one business day.",
      details: [
        {
          label: "thebalosh69@gmail.com",
          href: "mailto:thebalosh69@gmail.com",
        },
        {
          label: "NasirNawaz@albaloshi.tech",
          href: "mailto:NasirNawaz@albaloshi.tech",
        },
      ],
    },
    {
      icon: <MessageCircle className="h-5 w-5 text-[#ff8c4c]" />,
      title: "WhatsApp / Phone",
      description: "Best channel for quick questions or sharing voice notes.",
      details: [
        {
          label: "+92 315 263 7573",
          href: "https://api.whatsapp.com/send?phone=923152637573",
        },
      ],
    },
    {
      icon: <MapPin className="h-5 w-5 text-[#ff8c4c]" />,
      title: "Location & timezone",
      description: "Gwadar, Pakistan -- collaborating with teams worldwide.",
      details: [
        {
          label: "GMT+5 • Flexible for US/EU hours",
          href: "https://maps.app.goo.gl/tJE8AQqXFDTXJ3X79",
        },
      ],
    },
  ];

  return (
    <section id="contact" className="bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="text-slate-900">Contact me directly</h2>
          <p>Tell me about the product you want to ship and I&rsquo;ll reply with a plan within one business day.</p>
        </div>
        
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1 h-full">
            <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-[#F3F6FF] p-8 shadow-[0_40px_120px_-70px_rgba(15,23,42,0.55)]">
              <h3 className="text-2xl font-semibold text-slate-900">Book a call or drop a note</h3>
              <p className="mt-2 text-sm text-slate-600">
                Share a few lines about your product, or just send a quick message. I respond personally.
              </p>
              <div className="mt-6 space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.title} className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff4ec] text-[#ff8c4c]">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">{info.title}</p>
                        <p className="mt-1 text-sm text-slate-600">{info.description}</p>
                        <div className="mt-3 space-y-1">
                          {info.details?.map((detail) => {
                            const isExternal = detail.href.startsWith("http");
                            return (
                              <a
                                key={detail.label}
                                href={detail.href}
                                className="block text-base font-semibold text-slate-900 transition-colors hover:text-theme-blue"
                                target={isExternal ? "_blank" : undefined}
                                rel={isExternal ? "noreferrer" : undefined}
                              >
                                {detail.label}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 h-full">
            <form onSubmit={handleSubmit} className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_45px_140px_-80px_rgba(15,23,42,0.55)]">
              <h3 className="text-2xl font-semibold text-slate-900">Tell me about your build</h3>
              <p className="mb-6 text-sm text-slate-600">
                I&rsquo;ll use this brief to prep for our call and share a scoped plan with timelines and pricing.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-600">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="border-slate-200 focus:border-theme-blue focus:ring-theme-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-600">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="border-slate-200 focus:border-theme-blue focus:ring-theme-blue"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-600">
                  Project Details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share goals, timelines, must-have features, and any existing stack so we can hit the ground running."
                  rows={6}
                  required
                  className="border-slate-200 focus:border-theme-blue focus:ring-theme-blue"
                />
              </div>
              
              <Button
                type="submit"
                className="mt-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff8c4c] via-[#f96f4a] to-[#ffb347] px-8 py-4 text-base font-semibold text-white shadow-[0_18px_45px_rgba(249,111,74,0.33)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(249,111,74,0.42)]"
                disabled={isSubmitting}
              >
                <img src={CalendlyLogo} alt="Calendly" className="h-4 w-4" />
                {isSubmitting ? "Sending..." : "Book a Discovery Call"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
