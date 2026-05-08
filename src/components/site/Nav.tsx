import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#location", label: "Location" },
  { href: "#masterplan", label: "Master Plan" },
  { href: "#opportunity", label: "Builder Opportunity" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ivory/95 backdrop-blur-md border-b border-border/60 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-luxe flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Kadamba Kunjh" className="h-10 w-10 object-contain" width={40} height={40} />
          <div className="leading-tight">
            <div className={`font-display text-xl ${scrolled ? "text-primary" : "text-ivory"}`}>Kadamba Kunjh</div>
            <div className={`text-[10px] tracking-[0.25em] uppercase ${scrolled ? "text-muted-foreground" : "text-ivory/70"}`}>
              Koyal Enclave · Ghaziabad
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-xs uppercase tracking-[0.2em] transition-colors hover:text-accent ${
                scrolled ? "text-foreground/80" : "text-ivory/90"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:9811794750" className="hidden sm:inline-flex">
            <Button variant="luxe" size="sm">
              <Phone className="w-4 h-4 mr-2" /> Call Now
            </Button>
          </a>
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 ${scrolled ? "text-primary" : "text-ivory"}`}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-ivory border-t border-border mt-3 py-6 px-6">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm uppercase tracking-[0.2em] text-foreground/80">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
