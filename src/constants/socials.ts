import { Mail, Github, Linkedin, Twitter } from "lucide-react";
interface LinkProps {
  href: string;
  alt: string;
  icon: any;
}
export const links: LinkProps[] = [
  { href: "mailto:wanzpanell@gmail.com", alt: "Email", icon: Mail },
  {
    href: "https://github.com/zeyzofc",
    alt: "Github",
    icon: Github,
  },

  {
    href: "https://www.linkedin.com/",
    alt: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://twitter.com",
    alt: "Twitter",
    icon: Twitter,
  },
];
