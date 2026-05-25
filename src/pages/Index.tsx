import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Nav } from "@/components/site/Nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Phone, MessageCircle, MapPin, Plane, ShoppingBag, Stethoscope, Store,
  Trees, Footprints, Bike, Lightbulb, DoorOpen, Building2, Droplets, Route, ArrowRight, CheckCircle2,
} from "lucide-react";
import heroImg from "@/assets/hero-aerial.jpg";
import aerialMasterImg from "@/assets/gallery-aerial.png";
import internalRoadImg from "@/assets/gallery-internal-road.png";
import commercialImg from "@/assets/gallery-commercial.png";
import roadSectionImg from "@/assets/road-section.png";
import masterPlanImg from "@/assets/master-plan.jpg";
import logo from "@/assets/logo.png";
import developerLogo from "@/assets/developer-aditya.png";

const CALL_PHONE = "9811794750";
const CALL_PHONE_DISPLAY = "+91 98117 94750";
const PHONE = "8010750750";
const PHONE_DISPLAY = "+91 80 10 750 750";

const Reveal = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const delayClass = delay > 0 ? ` reveal-delay-${Math.min(delay, 4)}` : "";
  return (
    <div ref={ref} className={`reveal${visible ? " visible" : ""}${delayClass} ${className}`}>
      {children}
    </div>
  );
};

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-5">
    <span className="hairline" />
    <span className="eyebrow">{children}</span>
  </div>
);

const Section = ({ id, className = "", children }: { id?: string; className?: string; children: React.ReactNode }) => (
  <section id={id} className={`py-24 md:py-32 ${className}`}>
    <div className="container-luxe">{children}</div>
  </section>
);

const Hero = () => (
  <section id="top" className="relative min-h-screen flex items-end overflow-hidden">
    <div className="absolute inset-0 animate-ken-burns">
      <img src={heroImg} alt="Kadamba Kunjh aerial artistic impression" className="w-full h-full object-cover" width={1920} height={1080} />
    </div>
    <div className="absolute inset-0 bg-gradient-hero" />
    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />

    <div className="container-luxe relative pb-20 md:pb-28 pt-40">
      <div className="max-w-4xl animate-fade-up">
        <Eyebrow>Exclusive Sales Mandate · Kumar Linkers Realty</Eyebrow>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-ivory leading-[1.05] mb-6">
          Kadamba Kunjh
          <span className="block text-2xl md:text-3xl lg:text-4xl text-accent-soft mt-4 font-light italic">
            A Premium Plotted Development Opportunity in Koyal Enclave, Ghaziabad
          </span>
        </h1>
        <p className="text-ivory/85 text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
          Exclusively for <span className="text-accent">Basement + Stilt + 4</span> multi-unit floor builders. A rare,
          organized plotted estate in an established residential catchment.
        </p>
        <div className="flex flex-wrap gap-4 mb-14">
          <a href="#contact"><Button variant="gold" size="lg">Request Project Details <ArrowRight className="w-4 h-4 ml-1" /></Button></a>
          <a href={`tel:${CALL_PHONE}`}><Button variant="outlineIvory" size="lg"><Phone className="w-4 h-4 mr-2" /> Call Now</Button></a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ivory/10 border border-ivory/15 backdrop-blur-sm">
          {[
            { v: "24,143", l: "sqm Development" },
            { v: "45 m", l: "Wide Road Frontage" },
            { v: "12 m", l: "Internal Roads" },
            { v: "Prime", l: "Residential Catchment" },
          ].map((s) => (
            <div key={s.l} className="bg-primary/40 backdrop-blur-md p-5 md:p-6">
              <div className="font-display text-2xl md:text-3xl text-accent">{s.v}</div>
              <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-ivory/70 mt-1">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-8 border border-ivory/15 bg-ivory/5 backdrop-blur-sm p-5 md:p-6 rounded-sm">
          <div className="text-[10px] uppercase tracking-[0.35em] text-ivory/70">Developed By</div>
          <div className="hidden md:block h-8 w-px bg-ivory/20" />
          <img
            src={developerLogo}
            alt="Aditya — Building Trust Since 1979"
            className="h-12 md:h-14 w-auto object-contain"
            loading="lazy"
          />
          <div className="hidden md:block h-8 w-px bg-ivory/20" />
          <p className="text-sm text-ivory/80 leading-relaxed text-center md:text-left">
            A development by <span className="font-display text-ivory">Aditya</span> — building trust since
            <span className="text-accent"> 1979</span>.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const DeveloperStrip = () => (
  <section className="bg-ivory border-y border-border/60">
    <div className="container-luxe py-8 md:py-10">
      <Reveal>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-center md:text-left">
          <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
            Developed By
          </div>
          <div className="hidden md:block h-10 w-px bg-border" />
          <img
            src={developerLogo}
            alt="Aditya — Building Trust Since 1979"
            className="h-16 md:h-20 w-auto object-contain"
            loading="lazy"
          />
          <div className="hidden md:block h-10 w-px bg-border" />
          <p className="max-w-md text-sm text-foreground/70 leading-relaxed">
            A development by <span className="font-display text-primary">Aditya</span> — building trust since
            <span className="text-accent"> 1979</span>. Four decades of delivered real estate craftsmanship.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

const EligibilityCallout = () => (
  <Section className="bg-ivory">
    <Reveal>
      <div className="luxe-card p-10 md:p-16 bg-gradient-emerald text-primary-foreground relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative grid md:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-12 bg-accent/80" />
              <span className="text-xs uppercase tracking-[0.3em] text-accent">Eligibility</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl mb-6 leading-tight">
              For B+S+4 Multi-Unit <span className="italic text-accent-soft">Floor Builders</span> Only
            </h2>
            <p className="text-ivory/85 max-w-2xl text-base md:text-lg leading-relaxed">
              Kadamba Kunjh is positioned for experienced builders and developers looking to create premium low-rise
              builder-floor inventory in a high-connectivity Ghaziabad micro-market. This is not an individual plot
              retail offering.
            </p>
          </div>
          <a href="#contact" className="shrink-0">
            <Button variant="gold" size="lg">Check Builder Inventory</Button>
          </a>
        </div>
      </div>
    </Reveal>
  </Section>
);

const Location = () => {
  const stats = [
    { icon: Plane, time: "5 min", place: "Hindon International Airport" },
    { icon: ShoppingBag, time: "2 min", place: "Oxy Rich Mall" },
    { icon: Stethoscope, time: "4 min", place: "Yashoda Hospital" },
    { icon: Store, time: "7 min", place: "DMart" },
  ];
  return (
    <Section id="location" className="bg-background">
      <Reveal>
        <div className="max-w-3xl mb-16">
          <Eyebrow>Location Advantage</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-5">A Location Built for Fast Decision-Making</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Located in Koyal Enclave, Ghaziabad, within an established residential neighborhood with social
            infrastructure already in place.
          </p>
        </div>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <Reveal key={s.place} delay={i + 1}>
            <div className="luxe-card p-8 group">
              <s.icon className="w-7 h-7 text-accent mb-6" strokeWidth={1.2} />
              <div className="font-display text-4xl text-primary mb-2">{s.time}</div>
              <div className="text-sm text-muted-foreground leading-snug">from {s.place}</div>
              <div className="h-px w-8 bg-accent/60 mt-6 group-hover:w-16 transition-all duration-500" />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

const MasterPlan = () => (
  <Section id="masterplan" className="bg-ivory-deep/40">
    <Reveal>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Eyebrow>Master Plan · Scale</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-6 leading-tight">
            Designed for movement, visibility, livability, and <em className="text-accent">builder-floor viability</em>.
          </h2>
          <ul className="space-y-4 mb-8">
            {[
              "Approx. 24,143.46 sqm site area",
              "45 m wide arterial road frontage",
              "12 m internal roads with hierarchy",
              "Residential plots, commercial plots & kiosks",
            ].map((t) => (
              <li key={t} className="flex gap-3 text-foreground/85">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="luxe-card overflow-hidden">
          <img src={masterPlanImg} alt="Kadamba Kunjh master layout plan" className="w-full h-auto" loading="lazy" width={1408} height={1024} />
        </div>
      </div>
    </Reveal>
  </Section>
);

const Infrastructure = () => {
  const items = [
    { icon: Trees, title: "Grand Tree-Lined Boulevards" },
    { icon: Footprints, title: "Walkable, Wellness-Oriented Streets" },
    { icon: Bike, title: "Cycling-Friendly Internal Roads" },
    { icon: Lightbulb, title: "Smart, Well-Lit Infrastructure" },
    { icon: DoorOpen, title: "Distinctive Entrance & Identity" },
    { icon: Building2, title: "Vibrant Commercial Frontage" },
    { icon: Droplets, title: "Eco-Sensitive Drainage & Design" },
    { icon: Route, title: "Organized Road Hierarchy" },
  ];
  return (
    <Section className="bg-background">
      <Reveal>
        <div className="max-w-3xl mb-16">
          <Eyebrow>Infrastructure & Lifestyle</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight">
            A community designed around <em className="text-accent">thoughtful infrastructure</em>.
          </h2>
        </div>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={(i % 4) + 1}>
            <div className="bg-card p-8 hover:bg-ivory-deep/50 transition-colors duration-500 group h-full">
              <it.icon className="w-8 h-8 text-accent mb-6" strokeWidth={1.2} />
              <div className="font-display text-xl text-primary leading-snug">{it.title}</div>
              <div className="h-px w-6 bg-accent/50 mt-5 group-hover:w-12 transition-all duration-500" />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

const WhyBuilders = () => {
  const points = [
    "Scarcity of organized low-rise plotted land in Ghaziabad.",
    "Established residential catchment supports end-user demand.",
    "Connectivity to airport, hospital, mall, retail, and daily conveniences.",
    "Planned 12 m internal roads and 45 m frontage improve project perception and access.",
    "Commercial frontage and kiosks add liveliness to the development.",
    "Premium community design helps builders command stronger resale positioning.",
  ];
  return (
    <Section id="opportunity" className="bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary-glow/30 blur-3xl" />
      <Reveal>
        <div className="relative grid lg:grid-cols-[1fr_2fr] gap-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-12 bg-accent/80" />
              <span className="text-xs uppercase tracking-[0.3em] text-accent">The Opportunity</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
              Why Builders Should Look at <em className="text-accent-soft">Kadamba Kunjh</em>
            </h2>
            <p className="text-ivory/70 leading-relaxed">
              A boutique plotted estate meets institutional real estate opportunity — engineered for builder-floor economics.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
            {points.map((p, i) => (
              <Reveal key={i} delay={(i % 2) + 1}>
                <div className="border-t border-ivory/20 pt-6">
                  <div className="font-display text-3xl text-accent mb-3">{String(i + 1).padStart(2, "0")}</div>
                  <p className="text-ivory/85 leading-relaxed">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
};

const Gallery = () => {
  const tiles = [
    { src: internalRoadImg, eyebrow: "Streetscape", caption: "12 m Wide Road View" },
    { src: commercialImg, eyebrow: "Retail Frontage", caption: "Commercial Plot & Kiosks" },
  ];
  return (
    <Section id="gallery" className="bg-ivory-deep/40">
      <Reveal>
        <div className="max-w-3xl mb-16">
          <Eyebrow>Gallery</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight">
            A glimpse of the <em className="text-accent">vision</em>.
          </h2>
          <p className="text-muted-foreground mt-5 text-sm italic">All visuals are artistic impressions for representation only.</p>
        </div>
      </Reveal>

      {/* Hero aerial */}
      <Reveal>
        <figure className="relative overflow-hidden luxe-card group mb-4">
          <img
            src={aerialMasterImg}
            alt="Kadamba Kunjh aerial master view artistic impression"
            loading="lazy"
            className="w-full h-[420px] md:h-[620px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent p-6 md:p-8">
            <div className="text-[10px] uppercase tracking-[0.3em] text-accent mb-2">Aerial Master View</div>
            <div className="font-display text-ivory text-xl md:text-2xl">Residential & Commercial Plots, 12 m Roads, Kiosks</div>
          </figcaption>
        </figure>
      </Reveal>

      {/* Two streetscape tiles */}
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        {tiles.map((t, i) => (
          <Reveal key={t.caption} delay={i + 1}>
            <figure className="relative overflow-hidden luxe-card group">
              <img
                src={t.src}
                alt={t.caption}
                loading="lazy"
                className="w-full h-[280px] md:h-[360px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/95 via-primary/55 to-transparent p-5">
                <div className="text-[10px] uppercase tracking-[0.3em] text-accent mb-1.5">{t.eyebrow}</div>
                <div className="font-display text-ivory text-lg md:text-xl">{t.caption}</div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      {/* Road section diagram — object-contain to preserve technical drawing */}
      <Reveal>
        <figure className="luxe-card overflow-hidden bg-ivory">
          <div className="grid md:grid-cols-[1fr_1.4fr]">
            <div className="p-8 md:p-10 bg-gradient-emerald text-primary-foreground flex flex-col justify-center">
              <div className="text-[10px] uppercase tracking-[0.3em] text-accent mb-3">Road Engineering</div>
              <div className="font-display text-2xl md:text-3xl mb-4 leading-tight">12 m Wide Road Section</div>
              <p className="text-ivory/80 text-sm leading-relaxed">
                1.5 m sidewalk · 1 m bike lane · 3 m drive lane (each side), with integrated sewage and rain water drainage —
                engineered for walkability, cycling, and orderly traffic flow.
              </p>
            </div>
            <img
              src={roadSectionImg}
              alt="12 m wide road section diagram"
              loading="lazy"
              className="w-full h-full object-contain bg-ivory p-4"
            />
          </div>
        </figure>
      </Reveal>
    </Section>
  );
};

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [type, setType] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const { error } = await supabase.from("leads").insert({
      name: data.name,
      company: data.company || null,
      phone: data.phone,
      email: data.email,
      buyer_type: type || null,
      message: data.message || null,
    });
    if (error) {
      toast.error("Could not submit. Please call us directly.");
      setSubmitting(false);
      return;
    }
    toast.success("Enquiry received. Our project team will reach out shortly.");
    form.reset();
    setType("");
    setSubmitting(false);
  };

  return (
    <Section id="contact" className="bg-background">
      <Reveal>
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-6 leading-tight">
              Request Builder <em className="text-accent">Inventory Details</em>
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Share your enquiry and a project advisor will respond with the curated inventory note, layout, and commercial terms.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-primary/5 border border-accent/40 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-accent" strokeWidth={1.3} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1">Mandate</div>
                  <div className="font-display text-xl text-primary">Kumar Linkers Realty</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-primary/5 border border-accent/40 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-accent" strokeWidth={1.3} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1">Project Desk</div>
                  <a href={`tel:${CALL_PHONE}`} className="font-display text-xl text-primary hover:text-accent block">{CALL_PHONE_DISPLAY}</a>
                  <a href={`tel:${PHONE}`} className="text-sm text-muted-foreground hover:text-accent block mt-1">{PHONE_DISPLAY}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-primary/5 border border-accent/40 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" strokeWidth={1.3} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1">Web</div>
                  <a href="https://kumarlinkers.in" className="font-display text-xl text-primary hover:text-accent">kumarlinkers.in</a>
                </div>
              </div>
            </div>

            <a href={`tel:${CALL_PHONE}`}>
              <Button variant="luxe" size="lg"><Phone className="w-4 h-4 mr-2" /> Call Project Team</Button>
            </a>
          </div>

          <form onSubmit={onSubmit} className="luxe-card p-8 md:p-10 bg-card space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="name" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Name</Label>
                <Input id="name" name="name" required className="mt-2 border-border bg-background" />
              </div>
              <div>
                <Label htmlFor="company" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Company</Label>
                <Input id="company" name="company" className="mt-2 border-border bg-background" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="phone" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Phone</Label>
                <Input id="phone" name="phone" type="tel" required className="mt-2 border-border bg-background" />
              </div>
              <div>
                <Label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</Label>
                <Input id="email" name="email" type="email" required className="mt-2 border-border bg-background" />
              </div>
            </div>
            <div>
              <Label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Buyer Type</Label>
              <Select value={type} onValueChange={setType}>
                <SelectTrigger className="mt-2 bg-background"><SelectValue placeholder="Select category" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="builder">Builder</SelectItem>
                  <SelectItem value="developer">Developer</SelectItem>
                  <SelectItem value="broker">Broker</SelectItem>
                  <SelectItem value="investor">Investor</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="message" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Message</Label>
              <Textarea id="message" name="message" rows={4} className="mt-2 border-border bg-background" />
            </div>
            <Button type="submit" variant="luxe" size="lg" className="w-full" disabled={submitting}>
              {submitting ? "Submitting…" : "Submit Enquiry"}
            </Button>
            <p className="text-[11px] text-muted-foreground leading-relaxed pt-2">
              Availability, pricing, approvals, payment plans, and final terms are subject to confirmation. Images shown
              are artistic impressions / project presentation visuals.
            </p>
          </form>
        </div>
      </Reveal>
    </Section>
  );
};

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-16">
    <div className="container-luxe">
      <Reveal>
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <div className="flex items-start gap-4">
            <img src={logo} alt="Kadamba Kunjh" className="h-14 w-14 object-contain" width={56} height={56} />
            <div>
              <div className="font-display text-2xl mb-2">Kadamba Kunjh</div>
              <p className="text-ivory/70 text-sm max-w-md italic">A community designed around thoughtful infrastructure.</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 md:justify-end items-start">
            {["Location", "Master Plan", "Builder Opportunity", "Gallery", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/ /g, "")}`} className="text-xs uppercase tracking-[0.2em] text-ivory/80 hover:text-accent">
                {l}
              </a>
            ))}
          </nav>
        </div>
      </Reveal>
      <div className="border-t border-ivory/15 pt-8 flex flex-col md:flex-row gap-6 justify-between items-center text-xs text-ivory/60">
        <div>© {new Date().getFullYear()} Kumar Linkers Realty · Exclusive Sales Mandate</div>
        <div className="flex items-center gap-3">
          <span className="uppercase tracking-[0.25em] text-[10px]">Developed by</span>
          <div className="bg-ivory rounded-sm px-3 py-2">
            <img src={developerLogo} alt="Aditya" className="h-7 w-auto object-contain" />
          </div>
        </div>
        <div>Koyal Enclave, Ghaziabad, Uttar Pradesh</div>
      </div>
    </div>
  </footer>
);

const FloatingCTA = () => (
  <a
    href={`tel:${CALL_PHONE}`}
    className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-5 h-14 rounded-full bg-gradient-emerald text-primary-foreground shadow-luxe hover:scale-105 transition-transform"
    aria-label="Call Now"
  >
    <Phone className="w-5 h-5" />
    <span className="font-display text-sm tracking-wide">Call Now</span>
  </a>
);

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Nav />
      <Hero />
      <DeveloperStrip />
      <EligibilityCallout />
      <Location />
      <MasterPlan />
      <Infrastructure />
      <WhyBuilders />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
};

export default Index;
