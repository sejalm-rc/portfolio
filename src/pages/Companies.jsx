import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import bg6 from "../assets/company-collaborations-background.webp";
import rcLogo from "../assets/researcher-connect-logo.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

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
const companies = [
  {
    id: "rc",
    fullName: "Researcher Connect",
    subtitle: "Innovation and Impact Private Limited",
    subtitleColor: "#C8922A",
    sub: "",
    desc: "We bridge the gap between researchers, industry, and society by fostering collaborations, driving innovation, and delivering impactful solutions through research and technology.",
    url: "researcherconnection.in",
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

export default function Companies() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-[#FAF8F4] overflow-hidden min-h-[360px] sm:min-h-[350px]">
        {/* Right image */}
        <div className="absolute right-0 top-0 h-full w-full md:w-[52%] opacity-25 md:opacity-100">
          <img
            src={bg6}
            alt=""
            className="h-full min-h-[360px] sm:min-h-[350px] w-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #FAF8F4 0%, #FAF8F4 20%, rgba(250,248,244,0.75) 45%, transparent 75%)",
            }}
          />
        </div>

        {/* Left content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12 sm:py-16">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-[#C8922A] text-[10px] font-bold tracking-[0.2em] uppercase mb-5"
          >
            MY COMPANIES
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="font-serif text-[#161616] xl:text-[42px] lg:text-[40px] md:text-[32px] sm:text-[30px] text-[24px] leading-[1.08] font-medium tracking-[-0.4px] mb-4"
            style={{ maxWidth: 440 }}
          >
            Building Organizations.
            <br />
            Driving Impact.
          </motion.h1>
          <div className="w-12 h-0.5 bg-[#C8922A] mb-6" />
          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="text-[#6B7280] text-[14px] sm:text-[16px] leading-[1.8]"
            style={{ maxWidth: 380 }}
          >
            Through innovation, research, and collaboration, my organizations
            aim to create meaningful impact in academia, industry, and society.
          </motion.p>
        </div>
      </section>

      {/* ── Company Cards ── */}
      <section className="py-8 sm:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 space-y-5 sm:space-y-6">
          {companies.map((c, i) => (
            <motion.div
              key={c.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.1}
              variants={fadeUp}
              className="group border border-[#e6e2dc] rounded-[4px] bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] hover:border-[#C8922A]/50"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[170px_1fr_220px]">
                {/* LEFT LOGO */}
                <div className="flex flex-col items-center justify-center text-center px-6 sm:px-8 py-6 sm:py-8 ">
                  <img
                    src={rcLogo}
                    alt={c.fullName}
                    className="max-h-[70px] sm:max-h-[78px] max-w-[140px] sm:max-w-[150px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* CENTER */}
                <div className="px-5 sm:px-6 md:px-6 lg:px-0 py-6 sm:py-8">
                  <h3 className="font-serif text-[20px] sm:text-[21px] font-semibold text-[#1A1A1A] leading-tight transition-colors duration-300 ">
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
                    {c.features.map((f, j) => (
                      <div
                        key={j}
                        className="
    flex flex-col items-center
    text-center
    min-h-[120px]
    px-2
  "
                      >
                        <div className="h-[32px] flex items-center justify-center mb-3">
                          {f.icon}
                        </div>

                        <h4 className="text-[14px] font-semibold text-[#1A1A1A] leading-[1.25] min-h-[22px]">
                          {f.title}
                        </h4>

                        <p className="text-[12px] text-[#4b5563] leading-[1.45]  max-w-[140px]">
                          {f.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT VISION */}
                <div className="px-5 sm:px-7 py-6 sm:py-8 flex flex-col items-start md:col-span-2 lg:col-span-1 ">
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
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-1.5 border border-[#C8922A] text-[#C8922A] text-[13px] font-semibold px-4 py-2 rounded-[3px] transition-all duration-300 hover:bg-[#C8922A] hover:text-white hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-[#C8922A]/30"
                  >
                    Visit Website <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
