import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Dlogo from "../assets/dharmesh-Dhabliya-logo.webp";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: "About", path: "/about" },
    { label: "Research", path: "/research" },
    { label: "Publications", path: "/publications" },
    { label: "Projects", path: "/projects" },
    { label: "Media", path: "/media" },
    { label: "Achievements", path: "/achievements" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-[0_4px_18px_rgba(0,0,0,0.025)]">
        <div className="max-w-[1240px] mx-auto h-[56px] sm:h-[70px] px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-2 shrink-0 text-left"
          >
            <img
              src={Dlogo}
              alt="Logo"
              className="w-[32px] h-[30px] sm:w-[38px] sm:h-[36px] object-contain group-hover:scale-105 transition-transform duration-300"
            />

            <div className="block leading-none">
              <div className="leading-none">
                <h1 className="font-serif text-[11px] sm:text-[16px] font-semibold text-[#1d1d1d] leading-[16px] sm:leading-[22px] transition-colors duration-300">
                  Dr. Dharmesh Dhabliya
                </h1>

                <p className="text-[7px] sm:text-[10px] text-[#626060] font-medium">
                  Researcher • Professor • Entrepreneur
                </p>
              </div>
            </div>
          </button>

          <div className="hidden xl:flex items-center gap-8">
            <nav className="flex items-center gap-5">
              {navItems.map((item) => (
                <NavLink key={item.path} to={item.path}>
                  {({ isActive }) => (
                    <div
                      className={`group relative px-1 py-1 text-[13.5px] font-semibold transition-all duration-300 hover:-translate-y-[1px] ${
                        isActive
                          ? "text-[#b87518]"
                          : "text-[#111] hover:text-[#b87518]"
                      }`}
                    >
                      {item.label}

                      <span
                        className={`absolute left-1/2 -bottom-[1px] h-[2px] bg-[#b87518] rounded-full transition-all duration-500 ${
                          isActive
                            ? "w-full -translate-x-1/2 opacity-100"
                            : "w-0 -translate-x-1/2 opacity-0 group-hover:w-full group-hover:opacity-100"
                        }`}
                      />
                    </div>
                  )}
                </NavLink>
              ))}
            </nav>

            <button
              onClick={() => navigate("/contact")}
              className="group relative overflow-hidden h-[38px] px-4 rounded-[4px] bg-[linear-gradient(135deg,#d69a22_0%,#b87518_45%,#8e5b0d_100%)] text-white text-[12px] font-semibold flex items-center gap-2 shadow-[0_8px_22px_rgba(184,117,24,0.20)] hover:-translate-y-[2px] hover:shadow-[0_14px_30px_rgba(184,117,24,0.32)] active:scale-[0.98] transition-all duration-300"
            >
              <span className="absolute inset-0 -translate-x-[120%] bg-[linear-gradient(120deg,transparent,rgba(255,255,255,.35),transparent)] group-hover:translate-x-[220%] transition-transform duration-[1100ms]" />
              <span className="relative z-10">Get In Touch</span>
              <ArrowRight
                size={13}
                className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="xl:hidden w-8 h-8 flex items-center justify-center rounded-[6px] text-[#222] hover:bg-[#f7f2eb] hover:text-[#b87518] transition-all duration-300"
            aria-label="Open Menu"
          >
            <Menu size={21} />
          </button>
        </div>
      </header>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[60] xl:hidden transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <aside
        className={`fixed top-0 right-0 h-dvh w-[84vw] max-w-[330px] min-w-[255px] bg-white z-[70] xl:hidden shadow-[-12px_0_35px_rgba(0,0,0,0.18)] transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-[58px] px-4 flex items-center justify-between border-b border-[#eee2d4]">
          <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-2 shrink-0 text-left max-w-[240px] sm:max-w-none"
          >
            <img
              src={Dlogo}
              alt="Logo"
              className="w-[32px] h-[30px] sm:w-[38px] sm:h-[36px] object-contain shrink-0 group-hover:scale-105 transition-transform duration-300"
            />

            <div className="leading-none min-w-0">
              <h1 className="font-serif text-[11px] sm:text-[16px] font-semibold text-[#1d1d1d] leading-[15px] sm:leading-[22px] truncate transition-colors duration-300">
                Dr. Dharmesh Dhabliya
              </h1>

              <p className="text-[7px] sm:text-[10px] text-[#626060] font-medium truncate">
                Researcher • Professor • Entrepreneur
              </p>
            </div>
          </button>

          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-[6px] hover:bg-[#f7f2eb] hover:text-[#b87518] transition-all duration-300"
            aria-label="Close Menu"
          >
            <X size={21} />
          </button>
        </div>

        <nav className="h-[calc(100dvh-58px)] overflow-y-auto px-4 py-4 flex flex-col gap-2">
          {navItems.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              style={{
                transitionDelay: open ? `${index * 45}ms` : "0ms",
              }}
              className={({ isActive }) =>
                `group relative overflow-hidden px-4 py-[11px] rounded-[7px] text-[13px] font-medium transition-all duration-500 ${
                  open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                } ${
                  isActive
                    ? "bg-[#f7efe4] text-[#b87518] shadow-sm"
                    : "text-[#111] hover:bg-[#fbfaf8] hover:text-[#b87518]"
                }`
              }
            >
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-[60%] bg-[#b87518] rounded-r-full group-hover:w-[3px] transition-all duration-300" />
              {item.label}
            </NavLink>
          ))}

          <button
            onClick={() => {
              setOpen(false);
              navigate("/contact");
            }}
            className="group relative overflow-hidden mt-4 h-[40px] bg-[linear-gradient(135deg,#d69a22_0%,#b87518_45%,#8e5b0d_100%)] text-white text-[12px] font-semibold rounded-[6px] flex items-center justify-center gap-2 shadow-[0_8px_22px_rgba(184,117,24,0.28)] hover:-translate-y-1 active:scale-[0.98] transition-all duration-300"
          >
            <span className="absolute inset-0 -translate-x-[120%] bg-[linear-gradient(120deg,transparent,rgba(255,255,255,.35),transparent)] group-hover:translate-x-[220%] transition-transform duration-[1200ms]" />
            <span className="relative z-10">Get In Touch</span>
            <ArrowRight
              size={13}
              className="relative z-10 transition-all duration-300 group-hover:translate-x-1"
            />
          </button>
        </nav>
      </aside>
    </>
  );
}
