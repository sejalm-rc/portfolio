import { useMemo, useState } from "react";
import {
  Search,
  FileText,
  ExternalLink,
  Quote,
  BookOpen,
  BarChart3,
  Trophy,
  Calendar,
  X,
} from "lucide-react";
import pubbg from "../assets/pubbg.png";
import publicationsData from "../data/publicationsData";

export default function Publications() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("A to Z");
  const [typeFilter, setTypeFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const papers = useMemo(
    () =>
      publicationsData.map((item, index) => ({
        id: item.EID || index,
        title: item.Title || "Untitled Publication",
        authors: item.Authors || "",
        journal: item["Source title"] || "N/A",
        year: Number(item.Year) || 0,
        volume: item.Volume || "",
        issue: item.Issue || "",
        pages:
          item["Page start"] && item["Page end"]
            ? `${item["Page start"]}-${item["Page end"]}`
            : "",
        citations: Number(item["Cited by"]) || 0,
        doi: item.DOI || "",
        link: item.Link || "",
        type: item["Document Type"] || "Publication",
        source: item.Source || "",
        openAccess: item["Open Access"] || "",
      })),
    []
  );

  const publicationTypes = ["All", ...new Set(papers.map((p) => p.type))];

  const filteredPapers = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();

    return papers
      .filter((paper) => {
        const matchesSearch =
          paper.title.toLowerCase().includes(search) ||
          paper.journal.toLowerCase().includes(search) ||
          paper.authors.toLowerCase().includes(search) ||
          paper.type.toLowerCase().includes(search) ||
          String(paper.year).includes(search) ||
          paper.doi.toLowerCase().includes(search);

        const matchesType = typeFilter === "All" || paper.type === typeFilter;

        return matchesSearch && matchesType;
      })
      .sort((a, b) => {
        if (sortBy === "A to Z") return a.title.localeCompare(b.title);
        if (sortBy === "Oldest First") return a.year - b.year;
        if (sortBy === "Most Cited") return b.citations - a.citations;
        return 0;
      });
  }, [papers, searchTerm, sortBy, typeFilter]);

  const totalPages = Math.ceil(filteredPapers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPapers = filteredPapers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 250, behavior: "smooth" });
    }
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSortBy("A to Z");
    setTypeFilter("All");
    setCurrentPage(1);
  };

  return (
    <section className="bg-[#fbfaf8] text-[#171717] min-h-screen">
      <div
        className="h-[210px] sm:h-[230px] md:h-[245px] lg:h-[300px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${pubbg})` }}
      />

      <div className="max-w-[1080px] mx-auto px-5 sm:px-6 py-7">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 mb-7">
          <div>
           
            <h1 className="font-serif text-[30px] sm:text-[34px] leading-none mb-3">
              Publications
            </h1>
            <p className="text-[11px] sm:text-[12px] text-[#4b5563] max-w-[560px] leading-[1.7]">
              Explore research contributions published in reputed journals,
              conferences, book chapters and indexed sources.
            </p>
          </div>

       <div className="flex gap-8 sm:gap-10">
            {[
              [BookOpen, "300+", "Publications"],
              [BarChart3, "28", "h-index"],
              [Trophy, "3000+", "Citations"],
            ].map(([Icon, num, label]) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={22} strokeWidth={1.8} className="text-[#c77a12]" />
                <div>
                  <p className="text-[13px] font-bold leading-none">{num}</p>
                  <p className="text-[9px] text-[#333] mt-1">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[#eadfd3] rounded-[5px] p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_155px_155px_auto] gap-3">
            <div className="relative">
              <input
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search publications by title, author, journal, year..."
                className="w-full h-[38px] bg-white border border-[#d8d8d8] rounded-[4px] px-4 pr-10 text-[10px] outline-none focus:border-[#b87518]"
              />
              <Search
                size={16}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#777]"
              />
            </div>

            <select
              value={typeFilter}
              onChange={(e) => {
                setTypeFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="h-[38px] bg-white border border-[#d8d8d8] rounded-[4px] px-3 text-[10px] outline-none focus:border-[#b87518]"
            >
              {publicationTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value);
                setCurrentPage(1);
              }}
              className="h-[38px] bg-white border border-[#d8d8d8] rounded-[4px] px-3 text-[10px] outline-none focus:border-[#b87518]"
            >
              <option>A to Z</option>
              <option>Oldest First</option>
              <option>Most Cited</option>
             
            </select>

            <button
              onClick={clearFilters}
              className="h-[38px] px-4 border border-[#b87518] text-[#b87518] rounded-[4px] text-[10px] font-semibold flex items-center justify-center gap-2 hover:bg-[#b87518] hover:text-white transition-all duration-300"
            >
              <X size={13} />
              Clear
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <p className="text-[11px] sm:text-[12px] text-[#555]">
            Showing {filteredPapers.length === 0 ? 0 : startIndex + 1} to{" "}
            {filteredPapers.length === 0
              ? 0
              : Math.min(startIndex + itemsPerPage, filteredPapers.length)}{" "}
            of {filteredPapers.length} publications
          </p>
        </div>

        <div className="space-y-4">
          {currentPapers.length > 0 ? (
            currentPapers.map((paper) => (
              <article
                key={paper.id}
                className="group bg-white border border-[#eadfd3] rounded-[7px] px-4 sm:px-5 lg:px-6 py-5 shadow-[0_4px_18px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_35px_rgba(184,117,24,0.10)] hover:border-[#d8b98d] hover:bg-[#fffdf9] transition-all duration-300"
              >
                <div className="grid grid-cols-1 sm:grid-cols-[52px_1fr] lg:grid-cols-[52px_1fr_auto] gap-4 lg:gap-6 items-start">
                  <div className="w-[46px] h-[56px] border border-[#ddd6cc] rounded-[6px] bg-[#fbfaf8] flex items-center justify-center group-hover:border-[#b87518]/50 transition">
                    <FileText
                      size={21}
                      strokeWidth={1.4}
                      className="text-[#b87518]"
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex text-[9px] px-2 py-[3px] rounded-full font-semibold bg-[#fff6e7] text-[#9a6416]">
                        {paper.type}
                      </span>

                      {paper.source && (
                        <span className="inline-flex text-[9px] px-2 py-[3px] rounded-full font-semibold bg-[#f4f1ec] text-[#555]">
                          {paper.source}
                        </span>
                      )}
                    </div>

                    <h2 className="font-serif text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.35] mt-3 text-[#111] group-hover:text-[#8c5a13] transition-colors capitalize">
                      {paper.title}
                    </h2>

                    <p className="text-[11px] sm:text-[12px] text-[#555] italic mt-1.5">
                      {paper.journal}
                    </p>

                    <p className="text-[10.5px] text-[#777] mt-2 leading-[1.6] line-clamp-2">
                      {paper.authors}
                    </p>

                    <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3 text-[11px] text-[#555]">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} /> {paper.year || "N/A"}
                      </span>

                      {paper.volume && <span>Vol. {paper.volume}</span>}
                      {paper.issue && <span>Issue {paper.issue}</span>}
                      {paper.pages && <span>Pages {paper.pages}</span>}

                      <span className="flex items-center gap-1.5">
                        <Quote size={12} /> Citations: {paper.citations}
                      </span>
                    </div>

                    {paper.doi && (
                      <p className="text-[10.5px] text-[#555] mt-3 break-all">
                        <span className="font-semibold text-[#333]">DOI:</span>{" "}
                        {paper.doi}
                      </p>
                    )}
                  </div>

                  <div className="flex sm:pl-[52px] lg:pl-0 lg:items-center lg:justify-end lg:h-full">
                    {paper.link ? (
                      <a
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-[34px] px-4 border border-[#b87518] text-[#b87518] rounded-[5px] text-[10px] font-semibold flex items-center gap-2 hover:bg-[#b87518] hover:text-white transition-all duration-300"
                      >
                        View <ExternalLink size={11} />
                      </a>
                    ) : (
                      <button className="h-[34px] px-4 border border-[#ddd] text-[#999] rounded-[5px] text-[10px] font-semibold cursor-not-allowed">
                        No Link
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="bg-white border border-[#eadfd3] rounded-[7px] p-10 text-center">
              <p className="text-[15px] font-semibold text-[#333]">
                No publications found
              </p>
              <p className="text-[12px] text-[#777] mt-1">
                Try changing search keyword or filters.
              </p>
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="h-[30px] px-4 rounded-[6px] bg-white border border-[#ddd] text-[10px] font-medium hover:border-[#b87518] hover:text-[#b87518] transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              ← Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(
                (page) =>
                  page === 1 ||
                  page === totalPages ||
                  Math.abs(page - currentPage) <= 1
              )
              .map((page, index, arr) => (
                <span key={page} className="flex items-center gap-2">
                  {index > 0 && page - arr[index - 1] > 1 && (
                    <span className="text-[#999] text-[12px]">...</span>
                  )}

                  <button
                    onClick={() => goToPage(page)}
                    className={`w-[30px] h-[30px] rounded-[6px] border text-[10px] font-semibold transition ${
                      currentPage === page
                        ? "bg-[#b87518] text-white border-[#b87518]"
                        : "bg-white border-[#ddd] text-[#555] hover:border-[#b87518] hover:text-[#b87518]"
                    }`}
                  >
                    {page}
                  </button>
                </span>
              ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="h-[30px] px-4 rounded-[6px] bg-white border border-[#ddd] text-[10px] font-medium hover:border-[#b87518] hover:text-[#b87518] transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}