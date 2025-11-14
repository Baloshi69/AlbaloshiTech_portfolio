import React from "react";
import { Github, Linkedin, Send, Mail, Twitter, Facebook } from "lucide-react";

const BubbleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 14 14" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M8.439 3.635c-1.258 0-2.498.54-3.445 1.602V0H3.12v8.817c0 .001 0 .001 0 .002 0 2.862 2.32 5.183 5.183 5.183 2.862 0 5.182-2.32 5.182-5.183 0-2.862-2.184-5.183-5.046-5.183ZM8.303 12.004c-1.76 0-3.187-1.427-3.187-3.187 0-1.76 1.427-3.187 3.187-3.187s3.186 1.427 3.186 3.187-1.427 3.187-3.186 3.187Z" />
    <path d="M1.759 11.437a1.282 1.282 0 1 0 0 2.563 1.282 1.282 0 0 0 0-2.563Z" />
  </svg>
);

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52s.198-.298.298-.497c.099-.198.05-.371-.025-.52s-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51a13 13 0 0 0-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074s2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413s.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.9 11.9 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413"/>
  </svg>
);

export const socialLinks = [
  {
    label: 'Bubble Forum',
    href: 'https://forum.bubble.io/u/baloshi69/summary',
    Icon: BubbleIcon,
  },
  {
    label: 'WhatsApp',
    href: 'https://api.whatsapp.com/send?phone=923152637573',
    Icon: WhatsappIcon,
  },
  {
    label: 'Email',
    href: 'mailto:thebalosh69@gmail.com',
    Icon: Mail,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Baloshi69/',
    Icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/Baloshi69',
    Icon: Linkedin,
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/Baloshi69',
    Icon: Twitter,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/Baloxhi69/',
    Icon: Facebook,
  },
  {
    label: 'Telegram',
    href: 'https://t.me/Baloshi69',
    Icon: Send,
  },
];
