import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BookOpen, Globe, GraduationCap, ArrowRight,
} from 'lucide-react';
import bg2 from '../assets/dharmesh-Dhabliya-about-section-background.webp';
import sign from '../assets/dharmesh-Dhabliya-signature.webp';
import rcLogo from "../assets/researcher-connect-logo.webp";
import ctaBg from "../assets/academic-research-background-banner-1.webp";
import springerLogo from "../assets/springer-publications-logo..webp"
import elsevierLogo from "../assets/academic-research-network-banner.webp"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const stats = [
  {
    icon: <StatPaperIcon />,
    value: "300+",
    label: "Scopus Publications",
  },
  {
    icon: <StatChartIcon />,
    value: "28",
    label: "h-index",
  },
  {
    icon: <StatQuoteIcon />,
    value: "2500+",
    label: "Citations",
  },
  {
    icon: <StatLaurelIcon />,
    value: "Top 2%",
    label: "Scientist in 2024",
    sub: "Elsevier Stanford List",
  },
  {
    icon: <StatBookIcon />,
    value: "Editor",
    label: "Elsevier & Springer",
    sub: "Journals",
  },
];

const roles = [
  {
    icon: <BookOpen size={18} className="text-[#C8922A]" />,
    title: 'Passionate Researcher',
    desc: 'Exploring mathematical modeling, intelligent systems, and data-driven technologies.',
  },
  {
    icon: <GraduationCap size={18} className="text-[#C8922A]" />,
    title: 'Dedicated Educator',
    desc: 'Teaching and mentoring students, inspiring innovation and critical thinking.',
  },
  {
    icon: <Globe size={18} className="text-[#C8922A]" />,
    title: 'Impactful Entrepreneur',
    desc: 'Building organizations that bridge research, industry and society.',
  },
  {
    icon: <Globe size={18} className="text-[#C8922A]" />,
    title: 'Global Collaborator',
    desc: 'Working with researchers and institutions worldwide to drive innovation.',
  },
];

  function IconUsers() {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C8922A"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }
  function IconBulb() {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C8922A"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="2" x2="12" y2="3" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="2" y1="12" x2="3" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <path d="M9 21h6" />
        <path d="M9 18h6" />
        <path d="M15 9.354a4 4 0 1 0-6 3.46V18h6v-5.186A4 4 0 0 0 15 9.354z" />
      </svg>
    );
  }
  function IconChart() {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C8922A"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    );
  }
  function IconTarget() {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C8922A"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    );
  }
  function IconEye() {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C8922A"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }

const organizations = [
   {
      id: "rcLogo",
      fullName: "Researcher Connect",
      subtitle: "Innovation and Impact Private Limited",
      subtitleColor: "#C8922A",
      sub: "",
      desc: "We bridge the gap between researchers, industry, and society by fostering collaborations, driving innovation, and delivering impactful solutions through research and technology.",
      url: "https://www.researcherconnect.com",
      vision:
        "To create a global ecosystem where researchers and innovators collaborate to solve real-world problems and generate sustainable impact.",
      features: [
        {
          icon: <IconUsers />,
          title: "Researcher Network",
          desc: "Connecting researchers across disciplines.",
        },
        {
          icon: <IconBulb />,
          title: "Innovation Solutions",
          desc: "Transforming ideas into practical solutions.",
        },
        {
          icon: <IconChart />,
          title: "Impact Projects",
          desc: "Executing projects that create real-world impact.",
        },
        {
          icon: <IconTarget />,
          title: "Industry Collaboration",
          desc: "Working with industry to solve critical challenges.",
        },
      ],
    },
];

const academicRoles = [
  {
    icon: <GraduationCap size={20} className="text-white" />,
    title: 'Professor',
    org: 'Vishwakarma Institute of Technology',
    desc: 'Teaching, guiding and mentoring students while contributing to research and innovation.',
  },
  {
    icon: <BookOpen size={20} className="text-white" />,
    title: 'PostDoctoral Guide',
    org: 'Lincoln University Malaysia',
    desc: 'Guiding postdoctoral researchers and collaborating on advanced research projects.',
  },
  {
    icon: <Globe size={20} className="text-white" />,
    title: 'Researcher & Innovator',
    org: '',
    desc: 'Continuously exploring emerging technologies and publishing research that contributes to global knowledge and societal advancement.',
  },
];

const iconColor = "#C8922A";

function StatPaperIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 48 48" fill="none">
      <path d="M12 8h18l6 6v26H12V8z" stroke={iconColor} strokeWidth="2.2" />
      <path d="M30 8v8h8" stroke={iconColor} strokeWidth="2.2" />
      <path d="M17 22h14M17 28h14M17 34h10" stroke={iconColor} strokeWidth="2" />
      <path d="M34 18h5v20H17" stroke={iconColor} strokeWidth="2" />
    </svg>
  );
}

function StatChartIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 48 48" fill="none">
      <path d="M10 38h30" stroke={iconColor} strokeWidth="2.2" />
      <path d="M15 34V23M24 34V17M33 34V12" stroke={iconColor} strokeWidth="2.2" />
      <path d="M12 25l9-8 7 5 10-13" stroke={iconColor} strokeWidth="2.2" />
      <path d="M34 9h6v6" stroke={iconColor} strokeWidth="2.2" />
    </svg>
  );
}

function StatQuoteIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 48 48" fill={iconColor}>
      <path d="M20 12c-6 3-10 9-10 16 0 5 3 8 7 8 4 0 7-3 7-7 0-3-2-6-6-6 1-4 4-7 7-9l-5-2z" />
      <path d="M38 12c-6 3-10 9-10 16 0 5 3 8 7 8 4 0 7-3 7-7 0-3-2-6-6-6 1-4 4-7 7-9l-5-2z" />
    </svg>
  );
}

function StatLaurelIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 48 48" fill="none">
      <path d="M18 36c-7-5-9-14-5-23M30 36c7-5 9-14 5-23" stroke={iconColor} strokeWidth="2.2" />
      <path d="M14 17c-4 1-6 4-6 8 4-1 6-4 6-8zM15 25c-4 2-5 5-4 9 4-2 5-5 4-9zM18 32c-3 3-3 6-1 9 3-3 3-6 1-9z" fill={iconColor} />
      <path d="M34 17c4 1 6 4 6 8-4-1-6-4-6-8zM33 25c4 2 5 5 4 9-4-2-5-5-4-9zM30 32c3 3 3 6 1 9-3-3-3-6-1-9z" fill={iconColor} />
    </svg>
  );
}

function StatBookIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 48 48" fill="none">
      <path d="M8 13c8 0 12 2 16 6v22c-4-4-8-6-16-6V13z" stroke={iconColor} strokeWidth="2.2" />
      <path d="M40 13c-8 0-12 2-16 6v22c4-4 8-6 16-6V13z" stroke={iconColor} strokeWidth="2.2" />
      <path d="M24 19v22" stroke={iconColor} strokeWidth="2.2" />
    </svg>
  );
}


export default function About() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-[#FAF4F1] overflow-hidden min-h-[560px] lg:min-h-[420px]">
        {/* background image fills right portion */}
        <div className="absolute w-full h-full">
          <img
            src={bg2}
            alt=""
            className="absolute right-0 top-0 h-full w-full lg:w-[65%] object-cover object-center lg:object-left " 
          />
          {/* left fade overlay */}
          <div
            className="absolute "
            style={{
              background: 'linear-gradient(to right, #f5f0e8 0%, #f5f0e8e6 45%, transparent 20%)',
            }}
          />
        </div>

        {/* Hero text */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-12 sm:pt-16 pb-8 lg:pb-52">
          <p className="text-[#C8922A] text-[11px] font-bold tracking-[0.18em] uppercase mb-5">
            ABOUT ME
          </p>
          <h1
            className="font-serif text-[#161616] xl:text-[42px] lg:text-[40px] md:text-[32px] sm:text-[30px] text-[24px] leading-[1.08] font-medium tracking-[-0.4px] mb-4 max-w-[460px]"
          >
            Driven by curiosity.<br />
            Guided by impact.
          </h1>
          <div className="w-10 h-0.5 bg-[#C8922A] mb-8" />
          <p className="text-[#374151] text-[13px] sm:text-[14px] leading-[1.85] font-medium max-w-[440px]">
            I am a researcher, educator and entrepreneur committed to advancing knowledge,
            building impactful solutions and mentoring the next generation of innovators.
          </p>
        </div>

        {/* Stats bar pinned to hero bottom */}
        <div className="relative lg:absolute lg:bottom-0 lg:left-0 lg:right-0 z-10 w-full lg:w-[65%] border-t border-[#e5ded2] bg-[#f5f0e8]/95 lg:bg-transparent">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center justify-center text-center py-5 sm:py-7 lg:py-8 px-3 sm:px-4 border-[#e5ded2] ${i < stats.length - 1 ? 'sm:border-r' : ''} ${i < stats.length - 2 ? 'border-b sm:border-b-0' : ''}`}
                >
                  <div className="flex items-center justify-center mb-3" style={{ height: 36 }}>
                    {s.icon}
                  </div>
                  <div className="font-serif text-[20px] font-semibold text-[#111827] leading-none mb-2">
                    {s.value}
                  </div>
                  <div className="text-[12px] leading-[1.5] text-[#374151] font-medium whitespace-pre-line">
                    {s.label}
                  </div>
                  {s.sub && (
                    <div className="text-[11px] text-[#374151] font-medium mt-0.5">{s.sub}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── My Story ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Left */}
            <div>
              <p className="text-[#C8922A] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
                My Story
              </p>
              <h2 className="font-serif text-[24px] sm:text-[30px] font-medium text-[#1A1A1A] leading-[1.2] mb-5">
                A Journey of Learning, Creating and Contributing
              </h2>
              <p className="text-[#6B7280] text-[13.5px] leading-[1.85] mb-6">
                From mathematics and computing to emerging technologies and real-world applications,
                my journey has been about solving meaningful problems and creating value through
                research, innovation and collaboration.
              </p>
              {/* Signature */}
<div className="mb-4">
  <img
    src= {sign}
    alt="Dharmesh Dhabliya Signature"
    className="h-12 sm:h-14 w-[200px] sm:w-[250px] object-contain"
  />
</div>
              {/* Dot grid */}
              <div className="grid gap-1.5" style={{ gridTemplateColumns: 'repeat(25, 8px)' }}>
                {Array.from({ length: 100 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#C8922A] opacity-25" />
                ))}
              </div>
            </div>

            {/* Middle — roles */}
            <div className="space-y-6">
              {roles.map((r, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.1}
                  variants={fadeUp}
                  className="flex gap-4 items-start"
                >
                  <div className="w-9 h-9 rounded-full border border-[#C8922A]/30 flex items-center justify-center shrink-0 mt-0.5 bg-[#FDF8F0]">
                    {r.icon}
                  </div>
                  <div>
                    <h4 className="text-[13.5px] font-semibold text-[#1A1A1A] mb-1">{r.title}</h4>
                    <p className="text-[12.5px] text-[#6B7280] leading-[1.7]">{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right — quote card */}
            <div className="bg-[#FAF8F4] rounded-xl p-7 flex flex-col justify-between border border-[#ede8de]">
              <div>
                <div className="text-[#C8922A] font-serif leading-none" style={{ fontSize: 48 }}>"</div>
                <p className="font-serif text-[18px] sm:text-[20px] max-w-[260px] text-[#1A1A1A] leading-[1.7] mb-4">
                  I believe in the power of collaboration, curiosity and consistency to create sustainable impact.
                </p>
              </div>
              <div>
              <div className="w-10 h-0.5 bg-[#C8922A] mb-4"/>
              {/* Signature */}
              <div className="mb-2">
              <img
              src= {sign}
              alt="Dharmesh Dhabliya Signature"
              className="h-12 sm:h-14 w-[190px] sm:w-[230px] object-contain"
              />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Organizations ── */}
      <section className="py-12 sm:py-[50px] bg-[#fbfaf8]">
              <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <p className="text-center text-[12px] uppercase tracking-[2px] text-[#b87518] font-bold mb-[8px]">
                    Founded Projects
                  </p>
                  <h2 className="text-center font-serif text-[22px] md:text-[26px] font-bold text-[#171717] leading-tight">
                    Building Innovation. Creating Impact.
                  </h2>
                </motion.div>
      
                <div className="mt-8 space-y-5 sm:space-y-6">
                  {organizations.map((c, i) => (
                    <motion.div
                      key={c.id || c.fullName}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={i}
                      variants={fadeUp}
                      className="group border border-[#e6e2dc] rounded-[4px] bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] hover:border-[#C8922A]/50"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-[170px_1fr_220px]">
                        {/* LEFT LOGO */}
                        <div className="flex flex-col items-center justify-center text-center px-6 sm:px-8 py-6 sm:py-8">
                          <img
                            src={c.logo || rcLogo}
                            alt={c.fullName}
                            className="max-h-[70px] sm:max-h-[78px] max-w-[140px] sm:max-w-[150px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
      
                        {/* CENTER */}
                        <div className="px-5 sm:px-6 lg:px-0 py-6 sm:py-8">
                          <h3 className="font-serif text-[20px] sm:text-[21px] font-semibold text-[#1A1A1A] leading-tight">
                            {c.fullName}
                          </h3>
      
                          {c.subtitle && (
                            <p className="text-[14px] sm:text-[16px] font-semibold mb-3 text-[#C8922A]">
                              {c.subtitle}
                            </p>
                          )}
      
                          <p className="text-[14px] text-[#111827] leading-[1.75] max-w-[720px] mb-8">
                            {c.desc}
                          </p>
      
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                            {c.features?.map((f, j) => (
                              <div
                                key={j}
                                className="flex flex-col items-center text-center min-h-[120px] px-2"
                              >
                                <div className="h-[32px] flex items-center justify-center mb-3">
                                  {f.icon}
                                </div>
      
                                <h4 className="text-[14px] font-semibold text-[#1A1A1A] leading-[1.25]">
                                  {f.title}
                                </h4>
      
                                <p className="text-[12px] text-[#4b5563] leading-[1.45] max-w-[140px]">
                                  {f.desc}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
      
                        {/* RIGHT VISION */}
                        <div className="px-5 sm:px-7 py-6 sm:py-8 flex flex-col items-start md:col-span-2 lg:col-span-1">
                          <div className="bg-[#f8f4eb] rounded-[4px] px-5 py-5 w-full min-h-[130px] sm:min-h-[150px] transition-all duration-300 group-hover:bg-[#fffaf0]">
                            <div className="flex items-center gap-2 mb-3">
                              <IconEye />
                              <span className="text-[13px] font-semibold text-[#1A1A1A]">
                                Vision
                              </span>
                            </div>
      
                            <p className="text-[12px] text-[#111827] leading-[1.65]">
                              {c.vision}
                            </p>
                          </div>
      
                          <a
                            href={`https://${c.url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex items-center justify-center gap-1.5 border border-[#C8922A] text-[#C8922A] text-[13px] font-semibold px-4 py-2 rounded-[3px] transition-all duration-300 hover:bg-[#C8922A] hover:text-white hover:translate-x-1"
                          >
                            Visit Website <Globe size={10} />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

{/* ── Academic Roles ── */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
    <p className="text-[#C8922A] text-[11px] font-bold tracking-[0.2em] uppercase mb-6">
      Academic & Professional Roles
    </p>

    <div className="bg-[#FAF8F4] rounded-[14px] overflow-hidden">
      <div className="grid md:grid-cols-3">
        {academicRoles.map((r, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i * 0.1}
            variants={fadeUp}
            whileHover={{
              y: -4,
            }}
className={`group relative p-6 sm:p-8 border-[#e7dfd2] ${
  i !== academicRoles.length - 1
    ? "border-b md:border-b-0 md:border-r"
    : ""
}`}
          >
<div className="flex flex-col sm:flex-row items-start gap-5">
  {/* Icon */}
  <div
    className="
      w-[52px] h-[52px]
      rounded-full
      bg-[#C8922A]
      flex items-center justify-center
      shrink-0
      transition-all duration-300
      group-hover:scale-110
      group-hover:shadow-[0_8px_20px_rgba(200,146,42,0.25)]
    "
  >
    {r.icon}
  </div>

  {/* Content */}
  <div className="flex-1">
    <h4 className="text-[20px] font-semibold text-[#1A1A1A] mb-1 transition-colors duration-300 group-hover:text-[#C8922A]">
      {r.title}
    </h4>

    {r.org && (
      <p className="text-[14px] text-[#555] leading-[1.5] mb-3">
        {r.org}
      </p>
    )}

    <p className="text-[14px] text-[#444] leading-[1.9]">
      {r.desc}
    </p>
  </div>
</div>

            {/* Hover Accent */}
            <div
              className="
                absolute left-0 top-0
                h-full w-[3px]
                bg-[#C8922A]
                scale-y-0
                origin-top
                transition-transform duration-300
                group-hover:scale-y-100
              "
            />
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* ── Editorial Roles ── */}
<section className=" bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
    <p className="text-[#C8922A] text-[11px] font-bold tracking-[0.2em] uppercase mb-8">
      Editorial & Review Roles
    </p>

    <div className="grid md:grid-cols-2 gap-6">
      {/* Elsevier */}
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.25 }}
        className="group relative bg-[#FAF8F4] border border-[#ede8de] rounded-[14px] px-5 sm:px-8 py-6 sm:py-7 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8 overflow-hidden hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
      >
        {/* Top Hover Line */}
        <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#C8922A] transition-all duration-500 group-hover:w-full" />

        {/* Logo */}
        <div className="w-[100px] sm:w-[110px] shrink-0 flex items-center justify-center">
          <img
            src={elsevierLogo}
            alt="Elsevier"
            className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div>
          <h4 className="text-[20px] sm:text-[22px] font-semibold text-[#1A1A1A] mb-2 transition-colors duration-300 group-hover:text-[#C8922A]">
            Editor
          </h4>

          <p className="text-[14px] sm:text-[15px] text-[#4B5563] leading-[1.8] max-w-[320px]">
            Serving as Editor for reputed journals published by Elsevier.
          </p>
        </div>
      </motion.div>

      {/* Springer */}
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.25 }}
        className="group relative bg-[#FAF8F4] border border-[#ede8de] rounded-[14px] px-5 sm:px-8 py-6 sm:py-7 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8 overflow-hidden hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
      >
        {/* Top Hover Line */}
        <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#C8922A] transition-all duration-500 group-hover:w-full" />

        {/* Logo */}
        <div className="w-[110px] sm:w-[130px] shrink-0 flex items-center justify-center">
          <img
            src={springerLogo}
            alt="Springer"
            className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div>
          <h4 className="text-[20px] sm:text-[22px] font-semibold text-[#1A1A1A] mb-2 transition-colors duration-300 group-hover:text-[#C8922A]">
            Editor
          </h4>

          <p className="text-[14px] sm:text-[15px] text-[#4B5563] leading-[1.8] max-w-[320px]">
            Serving as Editor for reputed journals published by Springer.
          </p>
        </div>
      </motion.div>
    </div>
  </div>
</section>

{/* ── CTA ── */}
<section className="pt-14 bg-white">
  <div className="w-full">
    <div
      className="
        relative overflow-hidden
        min-h-[260px] sm:min-h-[220px]
        flex items-center
        group
        py-8 sm:py-6
      "
      style={{
        backgroundImage: `url(${ctaBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/15" />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-12 lg:px-16 max-w-[560px]">
        <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
          {/* Icon */}
          <div
            className="
              w-[64px] h-[64px]
              rounded-full
              bg-white/70
              backdrop-blur-sm
              flex items-center justify-center
              shrink-0
              transition-all duration-300
              group-hover:scale-105
              group-hover:bg-white
            "
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C8922A"
              strokeWidth="1.8"
            >
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
              <path d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          {/* Text */}
          <div>
            <h3 className="font-serif text-[18px] sm:text-[15px] leading-[1.45] sm:leading-[1.35] font-medium text-[#1A1A1A] mb-6">
              Let's collaborate to solve real-world problems
              <br />
              and create a better tomorrow.
            </h3>

            <Link
              to="/contact"
              className="
                inline-flex items-center gap-3
                bg-[#C8922A]
                text-white
                text-[14px]
                font-semibold
                px-7 py-2
                rounded-md
                transition-all duration-300
                hover:bg-[#A9781F]
                hover:translate-x-1
              "
            >
              Let's Connect
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>
  );
}