// import {
//   Brain,
//   Cloud,
//   Wifi,
//   ShieldCheck,
//   Leaf,
//   Network,
//   FileText,
//   Trophy,
//   Building2,
//   GraduationCap,
//   ArrowRight,
//   BookOpen,
//   Quote,
//   Award,
//   CheckCircle,
//   Medal,
//   Mic,
//   Globe, 
// } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// import home from "../assets/bghome.png";
// import faq from "../assets/FaqH.png";
// import mriLogo from "../assets/mriLogo.png";
// import rcLogo from "../assets/rc.png";
// import siareLogo from "../assets/Slogo.png";
// import profilePhoto from "../assets/dharmeshphoto.png";

// export default function Home() {
//   const [showHeroBg, setShowHeroBg] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setShowHeroBg(window.innerWidth > 690);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const fadeUp = {
//     hidden: { opacity: 0, y: 35 },
//     visible: (i = 0) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.55,
//         delay: i * 0.08,
//         ease: "easeOut",
//       },
//     }),
//   };

//   const scaleIn = {
//     hidden: { opacity: 0, scale: 0.92 },
//     visible: (i = 0) => ({
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.5,
//         delay: i * 0.07,
//         ease: "easeOut",
//       },
//     }),
//   };

//   const buttonClass =
//     "group relative overflow-hidden h-[42px] px-[22px] w-full sm:w-auto justify-center bg-[linear-gradient(135deg,#d69a22_0%,#b87518_45%,#8e5b0d_100%)] text-white text-[13px] font-semibold rounded-[6px] flex items-center gap-[8px] shadow-[0_8px_22px_rgba(184,117,24,0.28)] transition-all duration-500 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_18px_35px_rgba(184,117,24,0.42)] active:scale-[0.98]";

//   const outlineButtonClass =
//     "group relative overflow-hidden h-[42px] px-[22px] w-full sm:w-auto justify-center border border-[#d6a45a] text-[#b87518] text-[13px] font-semibold rounded-[4px] flex items-center gap-[9px] transition-all duration-500 hover:text-white hover:-translate-y-[2px] hover:shadow-[0_12px_28px_rgba(184,117,24,0.22)]";

//   const stats = [
//     [BookOpen, "300+", "Research Papers"],
//     [Trophy, "Top 2%", "Scientist Worldwide"],
//     [Building2, "3", "startup Founded"],
//     [GraduationCap, "Professor", "University Faculty"],
//   ];

//   const areas = [
//     [Brain, "Artificial Intelligence", "& Machine Learning"],
//     [Cloud, "Cloud Computing", "& Big Data"],
//     [Wifi, "IoT & Cyber", "Physical Systems"],
//     [ShieldCheck, "Cybersecurity", "& Privacy"],
//     [Leaf, "Sustainable", "Technologies"],
//     [Network, "Blockchain &", "Data Analytics"],
//   ];

//   const aboutCards = [
//     [Award, "Top 2%", "Scientist Worldwide", "Stanford University Study"],
//     [FileText, "300+", "Research Papers", "Published in reputed journals & conferences"],
//     [Building2, "3", "Startups Founded", "Focused on innovation and real-world solutions"],
//     [GraduationCap, "Professor", "University Faculty", "Teaching & guiding future researchers"],
//   ];

//   const highlights = [
//     [FileText, "300+", "Research Papers", "Published in top-tier journals & conferences"],
//     [Trophy, "2500+", "Citations", "Google scholar & scopus satabase"],
//     [Building2, "28", "h-index", "Research impact"],
//     [GraduationCap, "Editor", "& Reviewer", "Springer elsevier & reputed publishers"],
//   ];

//   const items = [
//     [Award, "Top 2% Scientist", "Worldwide", "Stanford University Study"],
//     [Medal, "High Impact Researcher", "Award", "For Outstanding Contributions"],
//     [Trophy, "Best Paper Awards", "Multiple International Conferences"],
//     [BookOpen, "Editorial Board Member", "Reputed Journals"],
//     [Mic, "Keynote Speaker", "International Conferences"],
//   ];

//   const publications = [
//     [
//       "An Advantage Actor-Critic and Proximal Policy Optimization Model for Adaptive Scheduling of Heterogeneous Cloud Workloads",
//       "Mathematical Modelling of Engineering Problems",
//       "2024",
//     ],
//     [
//       "Analysis and Simulation of Sound Classification System Using Machine Learning Techniques",
//       "International Conference on Emerging Trends in Engineering and Medical Sciences",
//       "2022",
//     ],
//     [
//       "Cyber-Internet Security Framework to Conquer Energy-Related Attacks on the Internet of Things with Machine Learning Techniques",
//       "Computational Intelligence and Neuroscience",
//       "2022",
//     ],
//     [
//       "Application of Linear Algebra in Image Processing for Medical Electronics",
//       "Communications on Applied Nonlinear Analysis",
//       "2025",
//     ],
//   ];

//   const organizations = [
//     {
//       logo: mriLogo,
//       fullName: "Multidisciplinary Research Institute of India",
//       desc: "A research organization dedicated to advancing mathematical research and its real-world applications.",
//       url: "mriindia.com",
//       link: "https://journals.mriindia.com",
//     },
//     {
//       logo: rcLogo,
//       fullName: "Researcher Connect Innovation and Impact Private Limited",
//       desc: "An innovation-driven company fostering researcher collaboration and delivering impactful solutions.",
//       url: "researcherconnect.com",
//       link: "https://www.researcherconnect.com",
//     },
//     {
//       logo: siareLogo,
//       fullName: "Society of Integrated Academic Research and Education",
//       desc: "A society working for social impact through education, research and community development initiatives.",
//       url: "siaresociety.org",
//       link: "https://siaresociety.org",
//     },
//   ];

//   return (
//     <main className="bg-[#fbfaf8] text-[#1f1f1f] overflow-hidden">
//       {/* HERO */}
//       <section
//         className="relative min-h-[560px] sm:min-h-[520px] md:min-h-[440px] lg:min-h-[520px] overflow-hidden flex items-center bg-[#fbfaf8] bg-cover bg-center bg-no-repeat py-12 sm:py-14 md:py-0"
//         style={{ backgroundImage: showHeroBg ? `url(${home})` : "none" }}
//       >
//         <div className="relative z-20 max-w-[1180px] mx-auto w-full px-4 sm:px-6 lg:px-[46px]">
//           <motion.div
//             initial={{ opacity: 0, y: 45 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.75, ease: "easeOut" }}
//             className="w-full max-w-[455px]"
//           >
//             <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#b87518] mb-[12px]">
//               Researcher. Educator. Entrepreneur.
//             </p>

//             <h1 className="font-serif text-[#161616] text-[28px] sm:text-[34px] md:text-[32px] lg:text-[40px] xl:text-[42px] leading-[1.08] font-medium tracking-[-0.4px]">
//               Advancing Knowledge.
//               <br />
//               Creating Impact.
//               <br />
//               Inspiring Future.
//             </h1>

//             <div className="w-[38px] h-[3px] bg-[#b87518] mt-[17px] mb-[17px]" />

//             <p className="text-[13px] sm:text-[14px] leading-[1.7] text-[#4f4f4f] max-w-[390px]">
//               Ranked in the Top 2% of Scientists Worldwide for scientific impact
//               and innovation with 300+ research papers in reputed journals and
//               conferences.
//             </p>

//             <div className="grid grid-cols-2 sm:grid-cols-4 mt-[30px] w-full max-w-[470px] gap-4 sm:gap-0">
//               {stats.map(([Icon, num, label], index) => (
//                 <motion.div
//                   key={label}
//                   initial="hidden"
//                   animate="visible"
//                   custom={index}
//                   variants={scaleIn}
//                   className={`text-center px-2 sm:px-3 ${
//                     index !== 0 ? "sm:border-l sm:border-[#ddcdbb]" : ""
//                   }`}
//                 >
//                   <div className="flex justify-center text-[#b87518] mb-[8px]">
//                     <Icon size={21} strokeWidth={1.6} />
//                   </div>
//                   <p className="text-[14px] leading-none font-bold text-[#111]">
//                     {num}
//                   </p>
//                   <p className="text-[9px] leading-[1.25] text-[#555] mt-[5px]">
//                     {label}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>

//             <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-[29px]">
//               <Link to="/publications" className="w-full sm:w-auto">
//                 <button className={buttonClass}>
//                   <span className="absolute inset-0 -translate-x-[120%] bg-[linear-gradient(120deg,transparent,rgba(255,255,255,.35),transparent)] group-hover:translate-x-[220%] transition-transform duration-[1200ms]" />
//                   <span className="relative z-10">Explore My Work</span>
//                   <ArrowRight
//                     size={14}
//                     className="relative z-10 transition-all duration-300 group-hover:translate-x-1 group-hover:-rotate-6"
//                   />
//                 </button>
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ABOUT */}
//       <section className="bg-white py-12 sm:py-[54px]">
//         <div className="max-w-[1120px] mx-auto px-4 sm:px-5">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.25 }}
//             variants={fadeUp}
//           >
//             <p className="text-center text-[12px] uppercase tracking-[1.8px] text-[#b87518] font-bold mb-2">
//               About Me
//             </p>
//             <h2 className="text-center font-serif text-[22px] md:text-[26px] font-bold text-[#171717]">
//               Passionate About Research and Real-World Impact
//             </h2>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-8 lg:gap-12 mt-9 items-start">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.25 }}
//               variants={fadeUp}
//               className="w-full"
//             >
//               <p className="text-[14px] leading-[1.85] text-[#3f3e3e] max-w-[430px]">
//                 I am a researcher, educator, and entrepreneur dedicated to
//                 solving real-world challenges through innovative research and
//                 emerging technologies. My work spans multiple domains with a
//                 mission to create sustainable and scalable impact for society.
//               </p>

//               <ul className="mt-6 space-y-[13px] text-[14px] text-[#333]">
//                 {[
//                   "Top 2% Scientist in the World identified by Stanford University",
//                   "Expert in Emerging Technologies & Innovation",
//                   "Mentor, Professor & Editorial Board Member",
//                   "Strong Industry-Academia Collaboration",
//                 ].map((item, i) => (
//                   <motion.li
//                     key={item}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                     custom={i}
//                     variants={fadeUp}
//                     className="flex items-start gap-3"
//                   >
//                     <CheckCircle
//                       size={15}
//                       className="text-[#b87518] mt-[3px] shrink-0"
//                     />
//                     <span>{item}</span>
//                   </motion.li>
//                 ))}
//               </ul>

//               <Link to="/about" className="inline-block w-full sm:w-auto">
//                 <button className={`${buttonClass} mt-7`}>
//                   <span className="absolute inset-0 -translate-x-[120%] bg-[linear-gradient(120deg,transparent,rgba(255,255,255,.35),transparent)] group-hover:translate-x-[220%] transition-transform duration-[1200ms]" />
//                   <span className="relative z-10">Read More About Me</span>
//                   <ArrowRight
//                     size={14}
//                     className="relative z-10 transition-all duration-300 group-hover:translate-x-1"
//                   />
//                 </button>
//               </Link>
//             </motion.div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//               {aboutCards.map(([Icon, title, sub, desc], i) => (
//                 <motion.div
//                   key={sub}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true, amount: 0.2 }}
//                   custom={i}
//                   variants={scaleIn}
//                   className="group min-h-[128px] bg-white border border-[#e9e2da] rounded-[10px] px-5 sm:px-7 py-6 flex items-center gap-5 sm:gap-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#d69a22] hover:shadow-[0_18px_45px_rgba(184,117,24,0.16)]"
//                 >
//                   <Icon
//                     size={46}
//                     strokeWidth={1.9}
//                     className="text-[#b87518] shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:text-[#d69a22]"
//                   />
//                   <div>
//                     <h3 className="text-[19px] font-semibold text-[#222] leading-none">
//                       {title}
//                     </h3>
//                     <p className="text-[13px] font-bold text-[#222] mt-2">
//                       {sub}
//                     </p>
//                     <p className="text-[12px] text-[#2b2b2b] leading-[1.6] mt-3 max-w-[220px]">
//                       {desc}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* RESEARCH AREAS */}
//       <section className="py-12 bg-[#fbfaf8]">
//         <div className="max-w-[1120px] mx-auto px-4 sm:px-5">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.25 }}
//             variants={fadeUp}
//           >
//             <p className="text-center text-[12px] uppercase tracking-[1.8px] text-[#b87518] font-bold mb-[8px]">
//               Research Areas
//             </p>
//             <h2 className="text-center font-serif text-[22px] md:text-[26px] font-bold text-[#171717] leading-tight">
//               Exploring. Innovating. Impacting.
//             </h2>
//           </motion.div>

//           <div className="grid grid-cols-1 min-[381px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-[18px] mt-[34px]">
//             {areas.map(([Icon, title, sub], i) => (
//               <motion.div
//                 key={title}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.2 }}
//                 custom={i}
//                 variants={scaleIn}
//                 className="group bg-white border border-[#e9e2da] rounded-[10px] min-h-[150px] flex flex-col items-center justify-center text-center px-4 transition-all duration-500 hover:-translate-y-2 hover:border-[#d69a22] hover:shadow-[0_18px_45px_rgba(184,117,24,0.16)]"
//               >
//                 <Icon
//                   size={46}
//                   strokeWidth={1.5}
//                   className="text-[#b87518] mb-[18px] transition-all duration-300 group-hover:scale-110 group-hover:text-[#d69a22]"
//                 />
//                 <p className="text-[13px] font-bold text-[#222] leading-[1.35]">
//                   {title}
//                 </p>
//                 <p className="text-[13px] font-bold text-[#222] leading-[1.35]">
//                   {sub}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* HIGHLIGHTS */}
//       <section className="py-12 sm:py-[50px] bg-white">
//         <div className="max-w-[1120px] mx-auto px-4 sm:px-5">
//           <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-[34px]">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeUp}
//             >
//               <p className="text-[12px] uppercase tracking-[2px] text-[#b87518] font-bold mb-[8px]">
//                 Research Highlights
//               </p>
//               <h2 className="font-serif text-[22px] md:text-[26px] leading-tight text-[#171717] font-semibold">
//                 Selected Highlights
//               </h2>
//             </motion.div>

//             <Link to="/achievements" className="w-full sm:w-auto">
//               <button className={outlineButtonClass}>
//                 <span className="absolute inset-0 bg-[linear-gradient(135deg,#d69a22_0%,#b87518_45%,#8e5b0d_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 <span className="relative z-10">View All Achievements</span>
//                 <ArrowRight
//                   size={15}
//                   className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
//                 />
//               </button>
//             </Link>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//             {highlights.map(([Icon, title, sub, desc], i) => (
//               <motion.div
//                 key={sub}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.2 }}
//                 custom={i}
//                 variants={fadeUp}
//                 className="group bg-white border border-[#e9e2da] rounded-[10px] min-h-[160px] px-5 py-6 flex items-center gap-5 transition-all duration-500 hover:-translate-y-2 hover:border-[#d69a22] hover:shadow-[0_18px_45px_rgba(184,117,24,0.16)]"
//               >
//                 <div className="w-[62px] h-[62px] rounded-full bg-[#f5eee6] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110">
//                   <Icon
//                     size={32}
//                     strokeWidth={1.5}
//                     className="text-[#b87518]"
//                   />
//                 </div>
//                 <div>
//                   <h3 className="text-[16px] font-semibold text-[#222] leading-none">
//                     {title}
//                   </h3>
//                   <p className="text-[14px] font-semibold text-[#222] mt-[8px] leading-[1.3]">
//                     {sub}
//                   </p>
//                   <p className="text-[13px] text-[#555] leading-[1.55] mt-[12px]">
//                     {desc}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* COMPANIES */}
//       <section className="py-12 sm:py-[50px] bg-[#fbfaf8]">
//         <div className="max-w-[1120px] mx-auto px-4 sm:px-5">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//           >
//             <p className="text-center text-[12px] uppercase tracking-[2px] text-[#b87518] font-bold mb-[8px]">
//               Startups Founded
//             </p>
//             <h2 className="text-center font-serif text-[22px] md:text-[26px] font-bold text-[#171717] leading-tight">
//               Building Innovation. Creating Impact.
//             </h2>
//           </motion.div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
//             {organizations.map((o, i) => (
//               <motion.div
//                 key={o.fullName}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.2 }}
//                 custom={i}
//                 variants={fadeUp}
//                 className="group bg-white border border-[#ede8de] rounded-xl p-5 sm:p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#d69a22] hover:shadow-[0_18px_45px_rgba(184,117,24,0.16)]"
//               >
//                 <div className="flex items-start gap-4 mb-4">
//                   <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center shrink-0 overflow-hidden transition-all duration-300 group-hover:scale-105">
//                     <img
//                       src={o.logo}
//                       alt={`${o.fullName} Logo`}
//                       className="w-14 h-14 object-contain"
//                     />
//                   </div>
//                   <p className="text-[15px] font-semibold text-[#1A1A1A] leading-snug">
//                     {o.fullName}
//                   </p>
//                 </div>

//                 <p className="text-[13.5px] text-[#1A1A1A] leading-[1.75] mb-5">
//                   {o.desc}
//                 </p>

//                 <a
//                   href={o.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-[12px] text-[#6B7280] flex items-center gap-1.5 hover:text-[#C8922A] transition-colors"
//                 >
//                   <Globe size={13} />
//                   {o.url}
//                 </a>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PUBLICATIONS */}
//       <section className="py-12 bg-white">
//         <div className="max-w-[1120px] mx-auto px-4 sm:px-5">
//           <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-[26px]">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeUp}
//             >
//               <p className="text-[12px] uppercase tracking-[2px] text-[#b87518] font-bold mb-[8px]">
//                 Recent Publications
//               </p>
//               <h2 className="font-serif text-[22px] md:text-[26px] leading-tight text-[#171717] font-semibold">
//                 Latest Research Contributions
//               </h2>
//             </motion.div>

//             <Link to="/publications" className="w-full sm:w-auto">
//               <button className={outlineButtonClass}>
//                 <span className="absolute inset-0 bg-[linear-gradient(135deg,#d69a22_0%,#b87518_45%,#8e5b0d_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 <span className="relative z-10">View All Publications</span>
//               </button>
//             </Link>
//           </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//   {publications.map(([title, journal, year], i) => (
//     <motion.div
//       key={title}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       custom={i}
//       variants={fadeUp}
//       className="
//         group
//         bg-white
//         border border-[#e9e2da]
//         rounded-[10px]
//         h-[255px]
//         px-5 py-5
//         flex flex-col
//         transition-all duration-500
//         hover:-translate-y-2
//         hover:border-[#d69a22]
//         hover:shadow-[0_18px_45px_rgba(184,117,24,0.16)]
//       "
//     >
//       {/* Icon fixed */}
//       {/* <div className="h-[32px] flex items-start">
//         <FileText size={23} className="text-[#b87518]" />
//       </div> */}

//       {/* Title fixed height */}
//       <div className="h-[96px] mt-3 overflow-hidden">
//         <h3 className="text-[15px] font-semibold text-[#171717] leading-[1.45] line-clamp-4">
//           {title}
//         </h3>
//       </div>

//       {/* Journal fixed height */}
//       <div className="h-[48px] mt-3 overflow-hidden">
//         <p className="text-[12px] text-[#373737] leading-[1.5] line-clamp-2">
//           {journal}
//         </p>
//       </div>

//       {/* Year fixed bottom */}
//       <div className="mt-auto pt-3 ">
//         <p className="text-[13px] font-semibold text-[#b87518]">
//           {year}
//         </p>
//       </div>
//     </motion.div>
//   ))}
// </div>
//         </div>
//       </section>

//       {/* AWARDS STRIP */}
//       <section className="bg-white py-[26px]">
//         <div className="max-w-[1120px] mx-auto px-4 sm:px-5">
//           <div className="grid grid-cols-1 min-[381px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//             {items.map(([Icon, title, sub, desc], i) => (
//               <motion.div
//                 key={title}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 custom={i}
//                 variants={scaleIn}
//                 className="group flex items-center gap-3 rounded-lg p-2 transition-all duration-500 hover:-translate-y-1 hover:bg-[#fbfaf8]"
//               >
//                 <Icon
//                   size={34}
//                   strokeWidth={1.6}
//                   className="text-[#b87518] shrink-0 transition-all duration-300 group-hover:scale-110"
//                 />
//                 <div>
                  
//                   <h4 className="text-[12px] font-bold text-[#222] leading-[1.2]">
//                     {title}
//                   </h4>
//                   {sub && (
//                     <p className="text-[11px] font-semibold text-[#333] leading-[1.2]">
//                       {sub}
//                     </p>
//                   )}
//                   <p className="text-[10px] text-[#555] mt-[2px] leading-[1.2]">
//                     {desc}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* QUOTE */}
//       <section
//         className="relative min-h-[220px] bg-[#efe2d1] bg-cover bg-center bg-no-repeat overflow-hidden flex items-center py-10"
//         style={{ backgroundImage: `url(${faq})` }}
//       >
//         <div className="absolute inset-0 bg-white/0 max-md:bg-white/60" />

//         <div className="relative z-10 max-w-[1120px] mx-auto w-full px-4 sm:px-5">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//             className="flex flex-col sm:flex-row items-start gap-4 sm:gap-[18px] max-w-[620px]"
//           >
//             <Quote
//               size={38}
//               className="text-[#b87518] shrink-0 mt-[2px]"
//               fill="#b87518"
//               strokeWidth={0}
//             />

//             <div>
//               <p className="font-sans text-[18px] sm:text-[20px] leading-[1.55] font-semibold text-[#333]">
//                 Research is not just about discovering new knowledge,
//                 <br className="hidden md:block" />
//                 but about creating a better future for humanity.
//               </p>

//               <p className="text-[#b87518] font-semibold text-[15px] mt-[12px]">
//                 — Dr. Dharmesh Dhabliya
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   );
// }

import {
  Brain,
  Cloud,
  Wifi,
  ShieldCheck,
  Leaf,
  Network,
  FileText,
  Trophy,
  Building2,
  GraduationCap,
  ArrowRight,
  BookOpen,
  Quote,
  Award,
  CheckCircle,
  Medal,
  Mic,
  Globe, 
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import home from "../assets/bghome.png";
import faq from "../assets/FaqH.png";
import mriLogo from "../assets/mriLogo.png";
import rcLogo from "../assets/rc.png";
import siareLogo from "../assets/Slogo.png";
import profilePhoto from "../assets/dharmeshphoto.png";

export default function Home() {
  const [showHeroBg, setShowHeroBg] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowHeroBg(window.innerWidth > 690);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        delay: i * 0.08,
        ease: "easeOut",
      },
    }),
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: (i = 0) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.07,
        ease: "easeOut",
      },
    }),
  };

  const buttonClass =
    "group relative overflow-hidden h-[42px] px-[22px] w-full sm:w-auto justify-center bg-[linear-gradient(135deg,#d69a22_0%,#b87518_45%,#8e5b0d_100%)] text-white text-[13px] font-semibold rounded-[6px] flex items-center gap-[8px] shadow-[0_8px_22px_rgba(184,117,24,0.28)] transition-all duration-500 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_18px_35px_rgba(184,117,24,0.42)] active:scale-[0.98]";

  const outlineButtonClass =
    "group relative overflow-hidden h-[42px] px-[22px] w-full sm:w-auto justify-center border border-[#d6a45a] text-[#b87518] text-[13px] font-semibold rounded-[4px] flex items-center gap-[9px] transition-all duration-500 hover:text-white hover:-translate-y-[2px] hover:shadow-[0_12px_28px_rgba(184,117,24,0.22)]";

  const stats = [
    [BookOpen, "300+", "Research Papers"],
    [Trophy, "Top 2%", "Scientist Worldwide"],
    [Building2, "3", "startup Founded"],
    [GraduationCap, "Professor", "University Faculty"],
  ];

  const areas = [
    [Brain, "Artificial Intelligence", "& Machine Learning"],
    [Cloud, "Cloud Computing", "& Big Data"],
    [Wifi, "IoT & Cyber", "Physical Systems"],
    [ShieldCheck, "Cybersecurity", "& Privacy"],
    [Leaf, "Sustainable", "Technologies"],
    [Network, "Blockchain &", "Data Analytics"],
  ];

  const aboutCards = [
    [Award, "Top 2%", "Scientist Worldwide", "Stanford University Study"],
    [FileText, "300+", "Research Papers", "Published in reputed journals & conferences"],
    [Building2, "3", "Startups Founded", "Focused on innovation and real-world solutions"],
    [GraduationCap, "Professor", "University Faculty", "Teaching & guiding future researchers"],
  ];

  const highlights = [
    [FileText, "300+", "Research Papers", "Published in top-tier journals & conferences"],
    [Trophy, "2500+", "Citations", "Google scholar & scopus satabase"],
    [Building2, "28", "h-index", "Research impact"],
    [GraduationCap, "Editor", "& Reviewer", "Springer elsevier & reputed publishers"],
  ];

  const items = [
    [Award, "Top 2% Scientist", "Worldwide", "Stanford University Study"],
    [Medal, "High Impact Researcher", "Award", "For Outstanding Contributions"],
    [Trophy, "Best Paper Awards", "Multiple International Conferences"],
    [BookOpen, "Editorial Board Member", "Reputed Journals"],
    [Mic, "Keynote Speaker", "International Conferences"],
  ];

  const publications = [
    [
      "An Advantage Actor-Critic and Proximal Policy Optimization Model for Adaptive Scheduling of Heterogeneous Cloud Workloads",
      "Mathematical Modelling of Engineering Problems",
      "2024",
    ],
    [
      "Analysis and Simulation of Sound Classification System Using Machine Learning Techniques",
      "International Conference on Emerging Trends in Engineering and Medical Sciences",
      "2022",
    ],
    [
      "Cyber-Internet Security Framework to Conquer Energy-Related Attacks on the Internet of Things with Machine Learning Techniques",
      "Computational Intelligence and Neuroscience",
      "2022",
    ],
    [
      "Application of Linear Algebra in Image Processing for Medical Electronics",
      "Communications on Applied Nonlinear Analysis",
      "2025",
    ],
  ];

  const organizations = [
    {
      logo: mriLogo,
      fullName: "Multidisciplinary Research Institute of India",
      desc: "A research organization dedicated to advancing mathematical research and its real-world applications.",
      url: "mriindia.com",
      link: "https://journals.mriindia.com",
    },
    {
      logo: rcLogo,
      fullName: "Researcher Connect Innovation and Impact Private Limited",
      desc: "An innovation-driven company fostering researcher collaboration and delivering impactful solutions.",
      url: "researcherconnect.com",
      link: "https://www.researcherconnect.com",
    },
    {
      logo: siareLogo,
      fullName: "Society of Integrated Academic Research and Education",
      desc: "A society working for social impact through education, research and community development initiatives.",
      url: "siaresociety.org",
      link: "https://siaresociety.org",
    },
  ];

  return (
    <main className="bg-[#fbfaf8] text-[#1f1f1f] overflow-hidden">
      {/* HERO */}
      <section
        className="relative min-h-[560px] sm:min-h-[520px] md:min-h-[440px] lg:min-h-[520px] overflow-hidden flex items-center bg-[#fbfaf8] bg-cover bg-center bg-no-repeat py-12 sm:py-14 md:py-0"
        style={{ backgroundImage: showHeroBg ? `url(${home})` : "none" }}
      >
        <div className="relative z-20 max-w-[1180px] mx-auto w-full px-5 sm:px-6 lg:px-[46px]">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="w-full max-w-[455px]"
          >
            <div className="min-[691px]:hidden flex justify-center mb-6 -mt-5">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-[140px] h-[140px] rounded-full object-cover object-center shadow-[0_14px_35px_rgba(0,0,0,0.16)] border-[6px] border-white"
              />
            </div>

            <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#b87518] mb-[12px]">
              Researcher. Educator. Entrepreneur.
            </p>

            <h1 className="font-serif text-[#161616] text-[26px] sm:text-[34px] md:text-[32px] lg:text-[40px] xl:text-[42px] leading-[1.08] font-medium tracking-[-0.4px]">
              Advancing Knowledge.
              <br />
              Creating Impact.
              <br />
              Inspiring Future.
            </h1>

            <div className="w-[38px] h-[3px] bg-[#b87518] mt-[17px] mb-[17px]" />

            <p className="text-[13px] sm:text-[14px] leading-[1.7] text-[#4f4f4f] max-w-[390px]">
              Ranked in the Top 2% of Scientists Worldwide for scientific impact
              and innovation with 300+ research papers in reputed journals and
              conferences.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 mt-[30px] w-full max-w-[470px] gap-4 sm:gap-0">
              {stats.map(([Icon, num, label], index) => (
                <motion.div
                  key={label}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  variants={scaleIn}
                  className={`text-center px-2 sm:px-3 ${
                    index !== 0 ? "sm:border-l sm:border-[#ddcdbb]" : ""
                  }`}
                >
                  <div className="flex justify-center text-[#b87518] mb-[8px]">
                    <Icon size={21} strokeWidth={1.6} />
                  </div>
                  <p className="text-[14px] leading-none font-bold text-[#111]">
                    {num}
                  </p>
                  <p className="text-[9px] leading-[1.25] text-[#555] mt-[5px]">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-[29px]">
              <Link to="/publications" className="w-full sm:w-auto">
                <button className={buttonClass}>
                  <span className="absolute inset-0 -translate-x-[120%] bg-[linear-gradient(120deg,transparent,rgba(255,255,255,.35),transparent)] group-hover:translate-x-[220%] transition-transform duration-[1200ms]" />
                  <span className="relative z-10">Explore My Work</span>
                  <ArrowRight
                    size={14}
                    className="relative z-10 transition-all duration-300 group-hover:translate-x-1 group-hover:-rotate-6"
                  />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white py-12 sm:py-[54px]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
          >
            <p className="text-center text-[12px] uppercase tracking-[1.8px] text-[#b87518] font-bold mb-2">
              About Me
            </p>
            <h2 className="text-center font-serif text-[22px] md:text-[26px] font-bold text-[#171717]">
              Passionate About Research and Real-World Impact
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-8 lg:gap-12 mt-9 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              className="w-full"
            >
              <p className="text-[14px] leading-[1.85] text-[#3f3e3e] max-w-[430px]">
                I am a researcher, educator, and entrepreneur dedicated to
                solving real-world challenges through innovative research and
                emerging technologies. My work spans multiple domains with a
                mission to create sustainable and scalable impact for society.
              </p>

              <ul className="mt-6 space-y-[13px] text-[14px] text-[#333]">
                {[
                  "Top 2% Scientist in the World identified by Stanford University",
                  "Expert in Emerging Technologies & Innovation",
                  "Mentor, Professor & Editorial Board Member",
                  "Strong Industry-Academia Collaboration",
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    variants={fadeUp}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle
                      size={15}
                      className="text-[#b87518] mt-[3px] shrink-0"
                    />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <Link to="/about" className="inline-block w-full sm:w-auto">
                <button className={`${buttonClass} mt-7`}>
                  <span className="absolute inset-0 -translate-x-[120%] bg-[linear-gradient(120deg,transparent,rgba(255,255,255,.35),transparent)] group-hover:translate-x-[220%] transition-transform duration-[1200ms]" />
                  <span className="relative z-10">Read More About Me</span>
                  <ArrowRight
                    size={14}
                    className="relative z-10 transition-all duration-300 group-hover:translate-x-1"
                  />
                </button>
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {aboutCards.map(([Icon, title, sub, desc], i) => (
                <motion.div
                  key={sub}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={i}
                  variants={scaleIn}
                  className="group min-h-[128px] bg-white border border-[#e9e2da] rounded-[10px] px-5 sm:px-7 py-6 flex items-center gap-5 sm:gap-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#d69a22] hover:shadow-[0_18px_45px_rgba(184,117,24,0.16)]"
                >
                  <Icon
                    size={46}
                    strokeWidth={1.9}
                    className="text-[#b87518] shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:text-[#d69a22]"
                  />
                  <div>
                    <h3 className="text-[19px] font-semibold text-[#222] leading-none">
                      {title}
                    </h3>
                    <p className="text-[13px] font-bold text-[#222] mt-2">
                      {sub}
                    </p>
                    <p className="text-[12px] text-[#2b2b2b] leading-[1.6] mt-3 max-w-[220px]">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH AREAS */}
      <section className="py-12 bg-[#fbfaf8]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
          >
            <p className="text-center text-[12px] uppercase tracking-[1.8px] text-[#b87518] font-bold mb-[8px]">
              Research Areas
            </p>
            <h2 className="text-center font-serif text-[22px] md:text-[26px] font-bold text-[#171717] leading-tight">
              Exploring. Innovating. Impacting.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 min-[381px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-[18px] mt-[34px]">
            {areas.map(([Icon, title, sub], i) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
                variants={scaleIn}
                className="group bg-white border border-[#e9e2da] rounded-[10px] min-h-[150px] flex flex-col items-center justify-center text-center px-4 transition-all duration-500 hover:-translate-y-2 hover:border-[#d69a22] hover:shadow-[0_18px_45px_rgba(184,117,24,0.16)]"
              >
                <Icon
                  size={46}
                  strokeWidth={1.5}
                  className="text-[#b87518] mb-[18px] transition-all duration-300 group-hover:scale-110 group-hover:text-[#d69a22]"
                />
                <p className="text-[13px] font-bold text-[#222] leading-[1.35]">
                  {title}
                </p>
                <p className="text-[13px] font-bold text-[#222] leading-[1.35]">
                  {sub}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-12 sm:py-[50px] bg-white">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-5">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-[34px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-[12px] uppercase tracking-[2px] text-[#b87518] font-bold mb-[8px]">
                Research Highlights
              </p>
              <h2 className="font-serif text-[22px] md:text-[26px] leading-tight text-[#171717] font-semibold">
                Selected Highlights
              </h2>
            </motion.div>

            <Link to="/achievements" className="w-full sm:w-auto">
              <button className={outlineButtonClass}>
                <span className="absolute inset-0 bg-[linear-gradient(135deg,#d69a22_0%,#b87518_45%,#8e5b0d_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10">View All Achievements</span>
                <ArrowRight
                  size={15}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map(([Icon, title, sub, desc], i) => (
              <motion.div
                key={sub}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
                variants={fadeUp}
                className="group bg-white border border-[#e9e2da] rounded-[10px] min-h-[160px] px-5 py-6 flex items-center gap-5 transition-all duration-500 hover:-translate-y-2 hover:border-[#d69a22] hover:shadow-[0_18px_45px_rgba(184,117,24,0.16)]"
              >
                <div className="w-[62px] h-[62px] rounded-full bg-[#f5eee6] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110">
                  <Icon
                    size={32}
                    strokeWidth={1.5}
                    className="text-[#b87518]"
                  />
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold text-[#222] leading-none">
                    {title}
                  </h3>
                  <p className="text-[14px] font-semibold text-[#222] mt-[8px] leading-[1.3]">
                    {sub}
                  </p>
                  <p className="text-[13px] text-[#555] leading-[1.55] mt-[12px]">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANIES */}
      <section className="py-12 sm:py-[50px] bg-[#fbfaf8]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-center text-[12px] uppercase tracking-[2px] text-[#b87518] font-bold mb-[8px]">
              Startups Founded
            </p>
            <h2 className="text-center font-serif text-[22px] md:text-[26px] font-bold text-[#171717] leading-tight">
              Building Innovation. Creating Impact.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {organizations.map((o, i) => (
              <motion.div
                key={o.fullName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
                variants={fadeUp}
                className="group bg-white border border-[#ede8de] rounded-xl p-5 sm:p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#d69a22] hover:shadow-[0_18px_45px_rgba(184,117,24,0.16)]"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center shrink-0 overflow-hidden transition-all duration-300 group-hover:scale-105">
                    <img
                      src={o.logo}
                      alt={`${o.fullName} Logo`}
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                  <p className="text-[15px] font-semibold text-[#1A1A1A] leading-snug">
                    {o.fullName}
                  </p>
                </div>

                <p className="text-[13.5px] text-[#1A1A1A] leading-[1.75] mb-5">
                  {o.desc}
                </p>

                <a
                  href={o.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] text-[#6B7280] flex items-center gap-1.5 hover:text-[#C8922A] transition-colors"
                >
                  <Globe size={13} />
                  {o.url}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section className="py-12 bg-white">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-5">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-[26px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-[12px] uppercase tracking-[2px] text-[#b87518] font-bold mb-[8px]">
                Recent Publications
              </p>
              <h2 className="font-serif text-[22px] md:text-[26px] leading-tight text-[#171717] font-semibold">
                Latest Research Contributions
              </h2>
            </motion.div>

            <Link to="/publications" className="w-full sm:w-auto">
              <button className={outlineButtonClass}>
                <span className="absolute inset-0 bg-[linear-gradient(135deg,#d69a22_0%,#b87518_45%,#8e5b0d_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10">View All Publications</span>
              </button>
            </Link>
          </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
  {publications.map(([title, journal, year], i) => (
    <motion.div
      key={title}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={i}
      variants={fadeUp}
      className="
        group
        bg-white
        border border-[#e9e2da]
        rounded-[10px]
        h-[255px]
        px-5 py-5
        flex flex-col
        transition-all duration-500
        hover:-translate-y-2
        hover:border-[#d69a22]
        hover:shadow-[0_18px_45px_rgba(184,117,24,0.16)]
      "
    >
      {/* Icon fixed */}
      {/* <div className="h-[32px] flex items-start">
        <FileText size={23} className="text-[#b87518]" />
      </div> */}

      {/* Title fixed height */}
      <div className="h-[96px] mt-3 overflow-hidden">
        <h3 className="text-[15px] font-semibold text-[#171717] leading-[1.45] line-clamp-4">
          {title}
        </h3>
      </div>

      {/* Journal fixed height */}
      <div className="h-[48px] mt-3 overflow-hidden">
        <p className="text-[12px] text-[#373737] leading-[1.5] line-clamp-2">
          {journal}
        </p>
      </div>

      {/* Year fixed bottom */}
      <div className="mt-auto pt-3 ">
        <p className="text-[13px] font-semibold text-[#b87518]">
          {year}
        </p>
      </div>
    </motion.div>
  ))}
</div>
        </div>
      </section>

      {/* AWARDS STRIP */}
      <section className="bg-white py-[26px]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-5">
          <div className="grid grid-cols-1 min-[381px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {items.map(([Icon, title, sub, desc], i) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={scaleIn}
                className="group flex items-center gap-3 rounded-lg p-2 transition-all duration-500 hover:-translate-y-1 hover:bg-[#fbfaf8]"
              >
                <Icon
                  size={34}
                  strokeWidth={1.6}
                  className="text-[#b87518] shrink-0 transition-all duration-300 group-hover:scale-110"
                />
                <div>
                  
                  <h4 className="text-[12px] font-bold text-[#222] leading-[1.2]">
                    {title}
                  </h4>
                  {sub && (
                    <p className="text-[11px] font-semibold text-[#333] leading-[1.2]">
                      {sub}
                    </p>
                  )}
                  <p className="text-[10px] text-[#555] mt-[2px] leading-[1.2]">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section
        className="relative min-h-[220px] bg-[#efe2d1] bg-cover bg-center bg-no-repeat overflow-hidden flex items-center py-10"
        style={{ backgroundImage: `url(${faq})` }}
      >
        <div className="absolute inset-0 bg-white/0 max-md:bg-white/60" />

        <div className="relative z-10 max-w-[1120px] mx-auto w-full px-4 sm:px-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-start gap-4 sm:gap-[18px] max-w-[620px]"
          >
            <Quote
              size={38}
              className="text-[#b87518] shrink-0 mt-[2px]"
              fill="#b87518"
              strokeWidth={0}
            />

            <div>
              <p className="font-sans text-[18px] sm:text-[20px] leading-[1.55] font-semibold text-[#333]">
                Research is not just about discovering new knowledge,
                <br className="hidden md:block" />
                but about creating a better future for humanity.
              </p>

              <p className="text-[#b87518] font-semibold text-[15px] mt-[12px]">
                — Dr. Dharmesh Dhabliya
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}