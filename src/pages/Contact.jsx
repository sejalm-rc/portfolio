import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Send,
  Users,
  Presentation,
  BookOpen,
  Handshake,
  GraduationCap,
  Briefcase,
  ArrowRight,
} from "lucide-react";

import contactBg from "../assets/contact-page-background-dharmesh-Dhabliya.webp";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const help = [
    [
      Users,
      "Research Collaboration",
      "Joint research projects and academic partnerships.",
    ],
    [
      Presentation,
      "Speaking Engagements",
      "Keynotes, talks, workshops, and panel discussions.",
    ],
    [
      BookOpen,
      "Consulting",
      "Strategic advice on research, innovation, and education.",
    ],
    [
      Handshake,
      "Partnerships",
      "Building impactful partnerships and alliances.",
    ],
    [
      GraduationCap,
      "Mentorship",
      "Guiding students and researchers in their journey.",
    ],
    [
      Briefcase,
      "Entrepreneurial Opportunities",
      "Collaborating on innovative ventures and solutions.",
    ],
  ];

  const socialLinks = [
    {
      label: "IN",
      url: "https://www.linkedin.com/in/dr-dharmesh-dhabliya-69453b7a/",
    },
    {
      label: "GS",
      url: "https://scholar.google.com/citations?user=FhvqepUAAAAJ&hl=en&oi=ao",
    },
    {
      label: "RG",
      url: "https://www.researchgate.net/profile/Dharmesh-Dhabliya",
    },
    {
      label: "WS",
      url: "https://www.webofscience.com/wos/author/record/AAL-3381-2021",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setMessage("Please fill all required fields.");
      setMessageType("error");
      return;
    }

    const emails = JSON.parse(localStorage.getItem("contactEmails")) || [];

    if (emails.includes(formData.email)) {
      setMessage("You have already submitted a message with this email.");
      setMessageType("error");
      return;
    }

    emails.push(formData.email);

    localStorage.setItem("contactEmails", JSON.stringify(emails));

    setMessage("✓ Your message has been sent successfully.");
    setMessageType("success");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="bg-[#fbfaf8] text-[#171717]">
      {/* HERO */}
      <div
        className="min-h-[220px] sm:min-h-[260px] md:min-h-[300px] lg:h-[350px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 w-full">
          <div className="w-full max-w-full sm:max-w-[430px]">
            <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#b87518] mb-[12px]">
              Contact us
            </p>

            <h1 className="font-serif text-[#161616] xl:text-[42px] lg:text-[40px] md:text-[32px] sm:text-[30px] text-[24px] leading-[1.08] font-medium tracking-[-0.4px]">
              Let's Connect
            </h1>

            <div className="w-[38px] h-[3px] bg-[#b87518] mt-[17px] mb-[17px]" />

            <p className="text-[14px] leading-[1.65] text-[#4f4f4f] max-w-full sm:max-w-[390px]">
              I'm always open to collaborations, speaking opportunities,
              partnerships, and discussions that create meaningful impact. Feel
              free to reach out.
            </p>
          </div>
        </div>
      </div>

      {/* CONTACT AREA */}
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-8 sm:gap-10 lg:gap-16">
          {/* FORM */}
          <div>
            <h2 className="font-serif text-[22px] sm:text-[26px] mb-2">Send a Message</h2>
            {message && (
              <div
                className={`mb-5 px-4 py-3 rounded-md text-[13px] font-medium ${
                  messageType === "success"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {message}
              </div>
            )}
            <div className="w-[39px] h-[2px] bg-[#b87518] mb-7" />

            <form onSubmit={handleSubmit} className="space-y-5">
              <Field
                label="Full Name *"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />

              <Field
                label="Email Address *"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
              />

              <Field
                label="Subject *"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
              />

              <div>
                <label className="block text-[14px] font-semibold mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  className="w-full h-[165px] border border-[#ddd] rounded-[6px] bg-white px-4 py-3 text-[13px] outline-none resize-none focus:border-[#b87518]"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  type="submit"
                  className="
                    group
                    relative
                    overflow-hidden
                    h-[42px]
                    px-[22px]
                    bg-[linear-gradient(135deg,#d69a22_0%,#b87518_45%,#8e5b0d_100%)]
                    text-white
                    text-[13px]
                    font-semibold
                    rounded-[6px]
                    flex
                    items-center
                    gap-[8px]
                    shadow-[0_8px_22px_rgba(184,117,24,0.28)]
                    transition-all
                    duration-500
                    hover:-translate-y-[3px]
                    hover:scale-[1.02]
                    hover:shadow-[0_18px_35px_rgba(184,117,24,0.42)]
                    active:scale-[0.98]
                    whitespace-nowrap
                  "
                >
                  <span
                    className="
                      absolute
                      inset-0
                      -translate-x-[120%]
                      bg-[linear-gradient(120deg,transparent,rgba(255,255,255,.35),transparent)]
                      group-hover:translate-x-[220%]
                      transition-transform
                      duration-[1200ms]
                    "
                  />

                  <span className="relative z-10">Send Message</span>

                  <Send
                    size={14}
                    className="
                      relative
                      z-10
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-rotate-6
                    "
                  />
                </button>
              </div>
              <p className="text-[12px] text-[#555]">
                🔒 Your information is safe with us. We respect your privacy.
              </p>
            </form>
          </div>

          {/* CONTACT INFORMATION */}
          <div className="mt-2 lg:mt-0">
            <h2 className="font-serif text-[22px] sm:text-[26px] mb-2">Contact Information</h2>
            <div className="w-[32px] h-[2px] bg-[#b87518] mb-3" />

            <Info
              icon={Mail}
              title="Email"
              value="dharmesh.dhabliya@viit.ac.in"
            />
            <Info icon={Phone} title="Phone" value="+91 9970294396" />
            <Info icon={MapPin} title="Location" value="India" />

            <div className="flex gap-4 py-5 border-b border-[#eadfd3]">
              <div className="w-[52px] h-[52px] shrink-0 bg-[#f7f2ec] rounded-[5px] flex items-center justify-center text-[#b87518]">
                <Globe size={24} />
              </div>

              <div>
                <div>
                  <h3 className="text-[15px] font-semibold mb-2">Connect</h3>

                  <div className="flex flex-wrap gap-2">
                    {socialLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.url}
                        target={
                          item.url.startsWith("http") ? "_blank" : "_self"
                        }
                        rel="noopener noreferrer"
                        className="
                          w-[28px]
                          h-[28px]
                          rounded-full
                          border
                          border-[#ddd]
                          flex
                          items-center
                          justify-center
                          text-[11px]
                          font-semibold
                          hover:bg-[#b87518]
                          hover:text-white
                          transition
                          cursor-pointer
                        "
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* COLLABORATION CARD */}
            <div className="bg-[#f7f2ec] rounded-[5px] p-4 sm:p-6 mt-4 flex flex-col xs:flex-row gap-4 sm:gap-5">
              <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full bg-[#f8e9d7] text-[#b87518] flex items-center justify-center shrink-0">
                <Handshake size={25} />
              </div>

              <div className="min-w-0">
                <h3 className="font-serif text-[18px] sm:text-[20px]">Let's Collaborate</h3>
                <p className="text-[13px] text-[#555] leading-[1.8] mt-1">
                  I welcome opportunities for research collaboration,
                  consulting, mentoring, speaking engagements, and
                  entrepreneurial partnerships.
                </p>

                <button
                  onClick={() =>
                    window.open(
                      "https://mail.google.com/mail/?view=cm&fs=1&to=dharmesh.dhabliya@viit.ac.in&su=Collaboration Inquiry",
                      "_blank"
                    )
                  }
                  className="
                    group
                    relative
                    overflow-hidden
                    mt-2
                    h-[35px]
                    px-4
                    border
                    border-[#b87518]
                    text-[#b87518]
                    text-[11px]
                    font-semibold
                    rounded-[3px]
                    flex
                    items-center
                    gap-2
                    transition-all
                    duration-500
                    hover:bg-[#b87518]
                    hover:text-white
                    hover:-translate-y-[3px]
                    hover:scale-[1.02]
                    active:scale-[0.98]
                    whitespace-nowrap
                    max-w-full
                  "
                >
                  {/* Shine */}
                  <span
                    className="
                      absolute
                      inset-0
                      -translate-x-[120%]
                      bg-[linear-gradient(120deg,transparent,rgba(255,255,255,.35),transparent)]
                      group-hover:translate-x-[220%]
                      transition-transform
                      duration-[1200ms]
                    "
                  />

                  <span className="relative z-10 truncate">
                    Explore Collaboration Opportunities
                  </span>

                  <ArrowRight
                    size={12}
                    className="
                      relative
                      z-10
                      shrink-0
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-rotate-6
                    "
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AREAS I CAN HELP WITH */}
      <div className="bg-white border-y border-[#eadfd3]">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-8">
          <h2 className="font-serif text-[22px] sm:text-[26px] text-center">
            Areas I Can Help With
          </h2>
          <div className="w-[32px] h-[2px] bg-[#b87518] mx-auto my-4" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-8">
            {help.map(([Icon, title, desc], index) => (
              <div
                key={title}
                className={`text-center px-4 sm:px-5 py-5 hover:bg-[#fbfaf8] transition ${
                  index !== 0 ? "lg:border-l border-[#eadfd3]" : ""
                } ${
                  index > 0 && index < 2 ? "sm:border-l" : ""
                } ${
                  index > 0 && index % 3 === 0 ? "md:border-l-0" : index > 0 ? "md:border-l border-[#eadfd3]" : ""
                }`}
              >
                <Icon size={34} className="mx-auto text-[#b87518] mb-4" />
                <h3 className="text-[13px] font-semibold leading-[1.3]">
                  {title}
                </h3>
                <p className="text-[11px] text-[#292828] leading-[1.55] mt-1">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="bg-[#f7f2ec]">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 w-full md:w-auto">
            <div className="w-[52px] h-[52px] sm:w-[68px] sm:h-[68px] rounded-full bg-[#f8eadc] text-[#b87518] flex items-center justify-center shrink-0">
              <Send size={24} className="sm:hidden" />
              <Send size={28} className="hidden sm:block" />
            </div>

            <div className="min-w-0">
              <h3 className="font-serif text-[18px] sm:text-[22px] font-medium">
                Have an Idea or Project in Mind?
              </h3>
              <p className="text-[13px] text-[#2a2929] leading-[1.8] mt-1 w-full md:w-auto lg:w-[400px]">
                I'd love to hear about it. Let's start a conversation and
                explore how we can work together to make a difference.
              </p>
            </div>
          </div>

          <button
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=dharmesh.dhabliya@viit.ac.in&su=Collaboration Inquiry",
                "_blank",
              )
            }
            className="
              group
              relative
              overflow-hidden
              h-[42px]
              px-[22px]
              bg-[linear-gradient(135deg,#d69a22_0%,#b87518_45%,#8e5b0d_100%)]
              text-white
              text-[13px]
              font-semibold
              rounded-[6px]
              flex
              items-center
              gap-[8px]
              shadow-[0_8px_22px_rgba(184,117,24,0.28)]
              transition-all
              duration-500
              hover:-translate-y-[3px]
              hover:scale-[1.02]
              hover:shadow-[0_18px_35px_rgba(184,117,24,0.42)]
              active:scale-[0.98]
              whitespace-nowrap
              self-start
              md:self-auto
              shrink-0
            "
          >
            {/* Shine */}
            <span
              className="
                absolute
                inset-0
                -translate-x-[120%]
                bg-[linear-gradient(120deg,transparent,rgba(255,255,255,.35),transparent)]
                group-hover:translate-x-[220%]
                transition-transform
                duration-[1200ms]
              "
            />

            <span className="relative z-10">Get in Touch</span>

            <ArrowRight
              size={14}
              className="
                relative
                z-10
                transition-all
                duration-300
                group-hover:translate-x-1
                group-hover:-rotate-6
              "
            />
          </button>
        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder, name, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="block text-[14px] font-semibold mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full h-[40px] border border-[#ddd] rounded-[6px] bg-white px-4 text-[13px] outline-none focus:border-[#b87518]"
      />
    </div>
  );
}

function Info({ icon: Icon, title, value }) {
  return (
    <div className="flex gap-4 sm:gap-5 py-5 border-b border-[#eadfd3]">
      <div className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] shrink-0 bg-[#f7f2ec] rounded-[5px] flex items-center justify-center text-[#b87518]">
        <Icon size={22} className="sm:hidden" />
        <Icon size={24} className="hidden sm:block" />
      </div>

      <div className="min-w-0">
        <h3 className="text-[15px] font-semibold">{title}</h3>
        <p className="text-[13px] text-[#555] mt-1 break-words">{value}</p>
      </div>
    </div>
  );
}
