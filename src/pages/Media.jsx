import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mic,
  Headphones,
  Newspaper,
  Radio,
  Play,
  Image,
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

import bg7 from "../assets/bg 7.png";
import image from "../assets/media1.png";
import image2 from "../assets/media2.jpeg";
import image3 from "../assets/media3.jpeg";
import image4 from "../assets/media4.jpeg";
import image5 from "../assets/media5.jpeg";
import image6 from "../assets/media6.jpeg";
import image7 from "../assets/media7.jpeg";
import image8 from "../assets/media8.jpeg";
import image9 from "../assets/media9.jpeg";
import image10 from "../assets/media10.jpeg";
import image11 from "../assets/media11.jpeg";




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

const featured = [
  {
    image: image,
    type: "Interview",
    date: "May 15, 2024",
    title: "Interview on AI & the Future of Smart Cities",
    source: "elets TV",
  },
  {
    image: image2,
    type: "Podcast",
    date: "Apr 22, 2024",
    title: "Podcast: Research, Innovation & Real-World Impact",
    source: "The Research Matters",
  },
  {
    image: image3,
    type: "Talk",
    date: "Mar 10, 2024",
    title: "Keynote Talk at International Conference on Data Engineering",
    source: "ICDE 2024",
  },
  {
    image: image4,
    type: "Feature",
    date: "Feb 5, 2024",
    title: "Top 2% Scientist in the World: Elsevier Stanford List 2024",
    source: "Times of India",
  },
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
            className="h-full w-full object-cover object-right opacity-25 md:opacity-100"
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
        <div className="max-w-9xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`relative min-w-[120px] h-[58px] px-4 flex flex-col items-center justify-center gap-1.5 text-[11px] font-semibold transition-all duration-300 hover:bg-[#FAF8F4] ${
                  activeTab === tab.label
                    ? "text-[#C8922A]"
                    : "text-[#374151] hover:text-[#C8922A]"
                }`}
              >
                <span className="[&_svg]:w-[18px] [&_svg]:h-[18px]">
                  {tab.icon}
                </span>
                {tab.label}
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
          {/* Featured */}
          {/* <div>
            <SectionHead title="Featured Media" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {featured.map((item, i) => (
                <motion.article
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={i}
                  variants={fadeUp}
                  className="group bg-white border border-[#e8e3dc] rounded-[7px] overflow-hidden shadow-[0_3px_12px_rgba(0,0,0,0.04)] hover:-translate-y-2 hover:border-[#C8922A]/60 hover:shadow-[0_18px_40px_rgba(200,146,42,0.15)] transition-all duration-500"
                >
                  <div className="relative h-[160px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute left-3 bottom-3 bg-white/90 text-[#8e5b0d] text-[10px] font-semibold px-2 py-[4px] rounded-[3px]">
                      {item.type}
                    </span>
                  </div>

                  <div className="px-4 py-4">
                    <p className="text-[11px] text-[#8a8f98] mb-2">
                      {item.date}
                    </p>
                    <h4 className="font-serif text-[15px] text-[#1A1A1A] leading-[1.4] min-h-[62px] group-hover:text-[#C8922A] transition-colors duration-300">
                      {item.title}
                    </h4>

                    <div className="flex items-center justify-between mt-4">
                      <span className="text-[11px] font-semibold text-[#C8922A]">
                        {item.source}
                      </span>
                      <ExternalLink
                        size={13}
                        className="text-[#777] group-hover:text-[#C8922A]"
                      />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div> */}

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