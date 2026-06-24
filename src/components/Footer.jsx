import { useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

import { FaLinkedinIn } from "react-icons/fa";

import logo from "../assets/dharmesh-Dhabliya-logo.webp";
import { Link } from "react-router-dom";

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group w-[34px] h-[34px] rounded-full border border-[#8e6a3a] bg-white flex items-center justify-center text-[10px] font-bold text-[#333] hover:bg-[#b87518] hover:text-white hover:border-[#b87518] hover:-translate-y-1 hover:shadow-[0_10px_22px_rgba(184,117,24,0.28)] transition-all duration-300"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const links = [
    { name: "About Me", path: "/about" },
    { name: "Research", path: "/research" },
    { name: "Publications", path: "/publications" },
    { name: "Startups", path: "/startups" },
    { name: "Media", path: "/media" },
    { name: "Achievements", path: "/achievements" },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      setMessageType("error");
      return;
    }

    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      setMessageType("error");
      return;
    }

    const subscribers =
      JSON.parse(localStorage.getItem("footerSubscribers")) || [];

    if (subscribers.includes(email)) {
      setMessage("You are already subscribed.");
      setMessageType("error");
      return;
    }

    localStorage.setItem(
      "footerSubscribers",
      JSON.stringify([...subscribers, email]),
    );

    setMessage("Thank you! You have subscribed successfully.");
    setMessageType("success");
    setEmail("");

    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 3500);
  };

  return (
    <footer className="bg-[#fbfaf8] border-t border-[#eee2d4] overflow-hidden">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-9 sm:py-[22px]">
        <div className="grid grid-cols-1 min-[520px]:grid-cols-2 lg:grid-cols-[1.35fr_0.7fr_1fr_1.25fr] gap-8 lg:gap-0">
          {/* Brand */}
          <div className="lg:pr-10 animate-[fadeUp_.6s_ease-out]">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Logo"
                className="w-[44px] h-[44px] object-contain hover:scale-105 transition-transform duration-300"
              />
              <div>
                <h3 className="font-serif text-[15px] font-semibold text-[#1d1d1d] leading-tight">
                  Dr. Dharmesh Dhabliya
                </h3>
                <p className="text-[10px] text-[#444] mt-1">
                  Researcher • Professor • Entrepreneur
                </p>
              </div>
            </div>

            <p className="text-[13px] text-[#444] leading-[1.75] mt-5 max-w-[310px]">
              Dedicated to advancing knowledge, fostering innovation, and
              inspiring the next generation of researchers and entrepreneurs.
            </p>

            <div className="flex flex-wrap gap-3 mt-5">
              <SocialIcon
                href="https://www.linkedin.com/in/dr-dharmesh-dhabliya-69453b7a/"
                label="LinkedIn"
              >
                <FaLinkedinIn size={15} />
              </SocialIcon>

              <SocialIcon
                href="https://www.scopus.com/authid/detail.uri?authorId=57222241738"
                label="Scopus"
              >
                {/* <SiScopus size={15} />  */}
                <p className="text-[14px] font-bold">SC</p>
              </SocialIcon>

              <SocialIcon
                href="https://www.webofscience.com/wos/author/record/AAL-3381-2021"
                label="Web of Science"
              >
                {/* <GraduationCap size={15} /> */}
                <p className="text-[14px] font-bold">WS</p>
              </SocialIcon>

              <SocialIcon
                href="https://scholar.google.com/citations?user=FhvqepUAAAAJ&hl=en&oi=ao"
                label="Google Scholar"
              >
                {/* <GraduationCap size={15} /> */}
                <p className="text-[14px] font-bold">GS</p>
              </SocialIcon>
            </div>
          </div>

          {/* Links */}
          <div className="lg:border-l lg:border-[#e0d2bf] lg:px-10">
            <h4 className="text-[14px] font-bold text-[#222] mb-4">
              Quick Links
            </h4>

            <div className="space-y-[8px]">
              {links.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="group flex items-center gap-2 text-[12px] text-[#444] hover:text-[#b87518] hover:translate-x-1 transition-all duration-300"
                >
                  <span className="w-0 group-hover:w-[10px] h-[1px] bg-[#b87518] transition-all duration-300" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:border-l lg:border-[#e0d2bf] lg:px-10">
            <h4 className="text-[14px] font-bold text-[#222] mb-4">
              Contact Info
            </h4>

            <div className="space-y-4">
              <p className="flex items-start gap-3 text-[12px] text-[#444]">
                <Mail size={15} className="text-[#b87518] mt-[2px] shrink-0" />
                dharmesh.dhabliya@viit.ac.in
              </p>

              <p className="flex items-start gap-3 text-[12px] text-[#444]">
                <Phone size={15} className="text-[#b87518] mt-[2px] shrink-0" />
                +91 9970294396
              </p>

              <p className="flex items-start gap-3 text-[12px] text-[#444]">
                <MapPin
                  size={15}
                  className="text-[#b87518] mt-[2px] shrink-0"
                />
                India
              </p>
            </div>

            <Link to="/contact" className="inline-block w-full sm:w-auto">
              <button className="group mt-5 h-[40px] px-5 w-full sm:w-auto justify-center rounded-[4px] bg-[linear-gradient(135deg,#d69a22_0%,#b87518_45%,#8e5b0d_100%)] text-white text-[12px] font-semibold flex items-center gap-2 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(184,117,24,0.28)] transition-all duration-300">
                Let’s Connect
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
            </Link>
          </div>

          {/* Subscribe */}
          <div className="lg:border-l lg:border-[#e0d2bf] lg:pl-10">
            <h4 className="text-[14px] font-bold text-[#222] mb-4">
              Stay Updated
            </h4>

            <p className="text-[12px] text-[#444] leading-[1.75] max-w-[290px] mb-5">
              Subscribe to get the latest updates on my research and
              publications.
            </p>

            <form onSubmit={handleSubscribe} className="w-full max-w-[310px]">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full h-[40px] bg-white border border-[#ddd] rounded-[4px] px-4 pr-10 text-[12px] outline-none focus:border-[#b87518] focus:shadow-[0_0_0_3px_rgba(184,117,24,0.10)] transition-all duration-300"
                />
                <Mail
                  size={14}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#999]"
                />
              </div>

              {message && (
                <p
                  className={`flex items-center gap-2 text-[11px] mt-3 ${
                    messageType === "success"
                      ? "text-[#1d8a4d]"
                      : "text-[#b42318]"
                  }`}
                >
                  {messageType === "success" ? (
                    <CheckCircle size={13} />
                  ) : (
                    <AlertCircle size={13} />
                  )}
                  {message}
                </p>
              )}

              <button
                type="submit"
                className="group mt-4 h-[40px] px-6 w-full sm:w-auto rounded-[4px] bg-[linear-gradient(135deg,#d69a22_0%,#b87518_45%,#8e5b0d_100%)] text-white text-[12px] font-semibold flex items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(184,117,24,0.28)] active:scale-[0.98] transition-all duration-300"
              >
                Subscribe
                <ExternalLink
                  size={13}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-[#eee2d4] bg-[#f7f1e9]">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 min-h-[36px] py-1 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-[#555] text-center sm:text-left">
            © {new Date().getFullYear()} Dr. Dharmesh Dhabliya. All Rights
            Reserved.
          </p>

          <div className="flex gap-5">
            <Link
              to="/privacy-policy"
              className="text-[11px] text-[#555] hover:text-[#b87518] transition"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-[11px] text-[#555] hover:text-[#b87518] transition"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </footer>
  );
}
