import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mic,
  Headphones,
  Newspaper,
  Radio,
  Play,
  Image,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

import bg7 from "../assets/media-coverage-background.webp";
import image from "../assets/dharmesh-Dhabliya-media-interview-1.webp";
import image2 from "../assets/dharmesh-Dhabliya-news-coverage-2.webp";
import image3 from "../assets/dharmesh-Dhabliya-research-feature-3.webp";
import image4 from "../assets/dharmesh-Dhabliya-academic-event-4.webp";
import image5 from "../assets/dharmesh-Dhabliya-conference-coverage-5.webp";
import image6 from "../assets/dharmesh-Dhabliya-research-award-6.webp";
import image7 from "../assets/dharmesh-Dhabliya-media-appearance-7.webp";
import image8 from "../assets/dharmesh-Dhabliya-academic-recognition-8.webp";
import image9 from "../assets/dharmesh-Dhabliya-research-news-9.webp";
import image10 from "../assets/dharmesh-Dhabliya-publication-feature-10.webp";
import image11 from "../assets/dharmesh-Dhabliya-academic-achievement-11.webp";
import image12 from "../assets/dharmesh-Dhabliya-research-impact-12.webp";
import image13 from "../assets/dharmesh-Dhabliya-conference-speaker-13.webp";
import image14 from "../assets/dharmesh-Dhabliya-award-ceremony-14.webp";
import image15 from "../assets/dharmesh-Dhabliya-research-excellence-15.webp";
import image16 from "../assets/dharmesh-Dhabliya-press-coverage-16.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: "easeOut",
    },
  }),
};

const tabs = [
  { label: "All Media", icon: <span className="text-[11px]">⊙</span> },
  { label: "Interviews", icon: <Mic size={14} /> },
  { label: "Talks & Podcasts", icon: <Headphones size={14} /> },
  { label: "News & Features", icon: <Newspaper size={14} /> },
  { label: "Press Releases", icon: <Radio size={14} /> },
  { label: "Videos", icon: <Play size={14} /> },
  { label: "Gallery", icon: <Image size={14} /> },
];

const latest = [
  {
    videoId: "Ezk2wp7d1Ao",
    videoUrl: "https://www.youtube.com/watch?v=Ezk2wp7d1Ao",
    title:
      "Introduction to Research | Research के basic steps क्या है? | How should a beginner start research",
    desc: "A beginner-friendly guide explaining the fundamentals of research, key research steps, and how to start a successful research journey.",
    type: "Feature",
    date: "Jan 28, 2024",
  },
  {
    videoId: "Gp4JIWNMjsM",
    videoUrl: "https://www.youtube.com/watch?v=Gp4JIWNMjsM",
    title:
      "Introduction to Research and Publications | What is Research | Process From Research to Publication",
    desc: "An overview of research concepts and the complete process from conducting research to publishing in academic journals.",
    type: "Feature",
    date: "Jan 15, 2024",
  },
  {
    videoId: "NjZ9U_NkcEE",
    videoUrl: "https://www.youtube.com/watch?v=NjZ9U_NkcEE",
    title: "Types Of Research Paper | Research Paper कितने प्रकार के होते हैं ?",
    desc: "Explains various types of research papers and their purposes, helping researchers choose the right publication format.",
    type: "Feature",
    date: "Dec 30, 2023",
  },
  {
    videoId: "gAnSDL30aU8",
    videoUrl: "https://www.youtube.com/watch?v=gAnSDL30aU8",
    title: "Qualitative and Quantitative Research | Research | Publication",
    desc: "A concise comparison of qualitative and quantitative research approaches, methodologies, and practical applications.",
    type: "Feature",
    date: "Dec 12, 2023",
  },
  {
    videoId: "fBKQyQSzNjo",
    videoUrl: "https://www.youtube.com/watch?v=fBKQyQSzNjo",
    title:
      "What is Research Myths | Research Myths क्या होता है | Research research methodology",
    desc: "Discusses common misconceptions about research and clarifies essential research methodology concepts for scholars.",
    type: "Feature",
    date: "Nov 25, 2023",
  },
];

const gallery = [
  { image: image, alt: "Conference Speech" },
  { image: image2, alt: "Interview Session" },
  { image: image3, alt: "Conference Hall" },
  { image: image4, alt: "Camera Recording" },
  { image: image5, alt: "Keynote Talk" },
  { image: image6, alt: "Research Presentation" },
  { image: image7, alt: "Research Conference" },
  { image: image8, alt: "Academic Symposium" },
  { image: image9, alt: "Scientific Workshop" },
  { image: image10, alt: "Media Interaction" },
  { image: image11, alt: "Public Lecture" },
  { image: image12, alt: "Public Lecture" },
  { image: image13, alt: "Public Lecture" },
  { image: image14, alt: "Public Lecture" },
  { image: image15, alt: "Public Lecture" },
   { image: image16, alt: "Public Lecture" },
];

export default function Media() {
  const [activeTab, setActiveTab] = useState("All Media");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#FAF8F4] overflow-hidden min-h-[310px] sm:min-h-[330px]">
        <div className="absolute inset-0 md:left-auto md:right-0 md:w-[58%]">
          <img
            src={bg7}
            alt=""
            className="h-full w-full object-cover object-right"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg,#FAF8F4 0%,#FAF8F4 16%,rgba(250,248,244,.94) 34%,rgba(250,248,244,.68) 52%,transparent 78%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12 sm:py-14">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-[#C8922A] text-[10px] font-bold tracking-[0.2em] uppercase mb-5"
          >
            In The Media
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="font-serif text-[#161616] text-[26px] sm:text-[34px] md:text-[38px] lg:text-[42px] leading-[1.08] font-medium tracking-[-0.4px] mb-4"
          >
            Sharing Ideas.
            <br />
            Inspiring Change.
          </motion.h1>

          <div className="w-12 h-0.5 bg-[#C8922A] mb-5" />

          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="text-[#374151] text-[13px] sm:text-[14px] leading-[1.8] max-w-[430px]"
          >
            Explore interviews, talks, features, and press coverage across
            platforms where research, innovation, and impact are shared.
          </motion.p>
        </div>
      </section>

{/* Tabs */}
<section className="hidden md:block bg-white border-b border-[#e8e4dd] sticky top-[56px] sm:top-[60px] z-30">
  <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          onClick={() => setActiveTab(tab.label)}
          className={`relative flex-1 h-[58px] px-3 flex flex-col items-center justify-center gap-1.5 text-[11px] font-medium transition-all duration-300 hover:bg-[#FAF8F4] ${
            activeTab === tab.label
              ? "text-[#C8922A]"
              : "text-[#1f2937] hover:text-[#C8922A]"
          }`}
        >
          <span className="[&_svg]:w-[17px] [&_svg]:h-[17px]">
            {tab.icon}
          </span>

          <span className="whitespace-nowrap">{tab.label}</span>

          {activeTab === tab.label && (
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[82px] h-[2px] bg-[#C8922A]" />
          )}
        </button>
      ))}
    </div>
  </div>
</section>

      {/* Content */}
      <section className="py-9 sm:py-11 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 space-y-11 sm:space-y-14">
          
          {/* Latest */}
          <div>
            <SectionHead title="Latest Media" />

            <div className="space-y-4">
              {latest.map((item, i) => (
                <motion.article
                  key={item.videoId}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.18 }}
                  custom={i}
                  variants={fadeUp}
                  className="group grid grid-cols-1 sm:grid-cols-[150px_1fr] lg:grid-cols-[170px_1fr_90px_118px_24px] gap-4 lg:gap-5 items-start lg:items-center p-3 sm:p-4 lg:px-0 lg:py-4 bg-white border border-[#e8e4dd] lg:border-x-0 lg:border-t-0 rounded-[7px] lg:rounded-none hover:border-[#C8922A]/40 transition-all duration-300"
                >
                  <a
                    href={item.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block w-full sm:w-[150px] lg:w-[150px] h-[160px] sm:h-[86px] rounded-[5px] overflow-hidden bg-black"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Play
                          size={18}
                          className="text-[#C8922A] ml-[2px]"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                  </a>

                  <div>
                    <h4 className="font-serif text-[15px] font-medium text-[#1A1A1A] leading-[1.35]  transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[12.5px] text-[#374151] leading-[1.6] mt-1 max-w-[580px]">
                      {item.desc}
                    </p>
                  </div>

                  <span className="inline-flex w-fit items-center justify-center text-[11px] font-semibold px-3 py-[4px] rounded-[4px] bg-[#FDF8F0] text-[#C8922A] border border-[#C8922A]/20">
                    {item.type}
                  </span>

                  <span className="text-[12px] text-[#555]">{item.date}</span>

                  <ExternalLink
                    size={14}
                    className="hidden lg:block text-[#777] group-hover:text-[#C8922A]"
                  />
                </motion.article>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div>
            <SectionHead title="Media Gallery" />

            <div className="relative">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border border-[#eadfd3] shadow-md flex items-center justify-center hover:bg-[#FAF8F4] hover:text-[#C8922A] transition-all"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="overflow-hidden mx-10 sm:mx-12" ref={emblaRef}>
                <div className="flex">
                  {gallery.map((item, i) => (
                    <div
                      key={i}
                      className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] px-2"
                    >
                      <div className="h-[155px] rounded-[7px] overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.08)] group">
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => emblaApi?.scrollNext()}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border border-[#eadfd3] shadow-md flex items-center justify-center hover:bg-[#FAF8F4] hover:text-[#C8922A] transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHead({ title }) {
  return (
    <div className="flex items-center justify-between gap-4 mb-5">
      <h2 className="font-serif text-[21px] sm:text-[24px] font-medium text-[#1A1A1A]">
        {title}
      </h2>

      {/* <a
        href="#"
        className="group text-[#C8922A] text-[12px] font-semibold flex items-center gap-1 hover:gap-2 transition-all shrink-0"
      >
        View All
        <ArrowRight
          size={12}
          className="group-hover:translate-x-1 transition-transform duration-300"
        />
      </a> */}
    </div>
  );
}