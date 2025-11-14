import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageCircle, Send } from "lucide-react";
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
      icon: <Mail className="h-5 w-5 text-theme-accent" />,
      title: "Email",
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
      icon: <MessageCircle className="h-5 w-5 text-theme-accent" />,
      title: "WhatsApp",
      details: [
        {
          label: "+92 315 263 7573",
          href: "https://api.whatsapp.com/send?phone=923152637573",
        },
      ],
    },
    {
      icon: <Send className="h-5 w-5 text-theme-accent" />,
      title: "Telegram",
      details: [
        {
          label: "@Baloshi69",
          href: "https://t.me/Baloshi69",
        },
      ],
    },
  ];

  return (
    <section id="contact" className="bg-gradient-to-b from-theme-secondary-dark to-theme-dark">
      <div className="container">
        <div className="section-heading">
          <h2 className="text-theme-accent text-center">Contact Us</h2>
          <p>Tell us about the product you want to ship and we will reply within one business day</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">
          <div className="lg:col-span-1 space-y-8 h-full">
            <div className="bg-theme-secondary-dark/50 rounded-xl p-8 border border-theme-accent/10 h-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-6 text-center">Get in Touch</h3>
              
              <div className="space-y-5 flex-1 flex flex-col justify-center">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="flex items-center gap-4 hover:bg-theme-dark rounded-lg p-3 transition-colors group"
                  >
                    <div className="bg-theme-dark p-3 rounded-lg flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-theme-muted-text">{info.title}</p>
                      <div className="space-y-1 mt-1">
                        {info.details?.map((detail) => {
                          const isExternal = detail.href.startsWith("http");
                          return (
                            <a
                              key={detail.label}
                              href={detail.href}
                              className="block text-theme-light transition-colors hover:text-theme-accent"
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
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 h-full">
            <form onSubmit={handleSubmit} className="bg-theme-secondary-dark/50 rounded-xl p-8 border border-theme-accent/10 h-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-4">Tell Us About Your Project</h3>
              <p className="text-sm text-theme-muted-text mb-6">
                Share a few details and we will pass them along to Calendly so you can lock in a call that fits your schedule.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-theme-muted-text mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-theme-dark border-theme-accent/20 focus:border-theme-accent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-theme-muted-text mb-2">
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
                    className="bg-theme-dark border-theme-accent/20 focus:border-theme-accent"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-theme-muted-text mb-2">
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
                  className="bg-theme-dark border-theme-accent/20 focus:border-theme-accent"
                />
              </div>
              
              <Button
                type="submit"
                className="bg-theme-accent hover:bg-theme-accent/90 w-full sm:w-auto mt-auto text-theme-dark font-semibold"
                disabled={isSubmitting}
              >
                <img src={CalendlyLogo} alt="Calendly" className="h-4 w-4" />
                {isSubmitting ? 'Sending...' : 'Book a Discovery Call'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
