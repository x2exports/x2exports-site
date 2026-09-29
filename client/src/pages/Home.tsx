import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  ArrowUpRight,
  Boxes,
  Check,
  ChevronRight,
  Globe2,
  Menu,
  PackageCheck,
  Phone,
  Ruler,
  ShieldCheck,
  X,
} from "lucide-react";

const heroImage = "/manus-storage/ironforge-hero_772b5aee.jpg";
const racksImage = "/manus-storage/ironforge-racks-lockers_b6bf8a0f.jpg";
const cotsImage = "/manus-storage/ironforge-cots-bunks_cd99b883.jpg";
const wardrobeImage = "/manus-storage/ironforge-wardrobe_f9d60474.jpg";
const markImage = "/manus-storage/ironforge-mark_5f17e14f.png";
const inquiryEndpoint = "https://script.google.com/macros/s/AKfycbzNZYO5YCdeJ8P-bZywiBRnsQ-gO9_H7E0igprgFqDR_cwqUDsX7od0G8Nnu4rXbUA6YQ/exec";
const angleImages = {
  rack: "/manus-storage/x2exports-angle-rack_d90cd259.jpg",
  cot: "/manus-storage/x2exports-angle-cot_71d656a4.jpg",
  locker: "/manus-storage/x2exports-angle-locker_4dfbdda2.jpg",
  wardrobe: "/manus-storage/x2exports-angle-wardrobe_175e00b5.jpg",
  bunk: "/manus-storage/x2exports-angle-bunk_a659675d.jpg",
};

const galleryProducts = [
  { id: "rack", label: "Iron angle rack", base: "/manus-storage/ironforge-racks-lockers_b6bf8a0f.jpg", alternate: angleImages.rack, note: "Storage systems / 01" },
  { id: "cot", label: "Iron cot", base: "/manus-storage/ironforge-cots-bunks_cd99b883.jpg", alternate: angleImages.cot, note: "Accommodation / 02" },
  { id: "locker", label: "Iron file lockers", base: "/manus-storage/ironforge-racks-lockers_b6bf8a0f.jpg", alternate: angleImages.locker, note: "Storage systems / 03" },
  { id: "wardrobe", label: "Iron wardrobes", base: "/manus-storage/ironforge-wardrobe_f9d60474.jpg", alternate: angleImages.wardrobe, note: "Accommodation / 04" },
  { id: "bunk", label: "Iron bunk beds", base: "/manus-storage/ironforge-cots-bunks_cd99b883.jpg", alternate: angleImages.bunk, note: "Accommodation / 05" },
];

function ProductGallery() {
  const [activeId, setActiveId] = useState("rack");
  const [activeAngle, setActiveAngle] = useState<"base" | "alternate">("base");
  const active = galleryProducts.find((product) => product.id === activeId) ?? galleryProducts[0];
  const activeSrc = activeAngle === "base" ? active.base : active.alternate;
  return (
    <section className="gallery-section grain" id="gallery">
      <div className="container">
        <div className="gallery-head"><div><div className="index-rail dark">02A / Product angles</div><h2>See the build<br /><span>from both sides.</span></h2></div><p>Browse the range by product, then switch between a presentation view and a practical alternate angle.</p></div>
        <div className="gallery-layout">
          <div className="gallery-stage"><img src={activeSrc} alt={`${active.label}, ${activeAngle === "base" ? "presentation" : "alternate angle"} view`} /><div className="gallery-stage-label"><span className="upper-label">{active.note}</span><strong>{active.label}</strong></div><span className="gallery-counter">{activeAngle === "base" ? "01" : "02"} / 02</span></div>
          <div className="gallery-controls"><div className="gallery-product-list">{galleryProducts.map((product) => <button className={`gallery-product ${product.id === active.id ? "active" : ""}`} type="button" key={product.id} onClick={() => { setActiveId(product.id); setActiveAngle("base"); }}><span>{product.id === active.id ? "●" : "○"}</span><strong>{product.label}</strong><ChevronRight size={15} /></button>)}</div><div className="angle-switcher"><span className="upper-label text-[var(--steel)]">Select view</span><div className="flex gap-2"><button type="button" className={`angle-button ${activeAngle === "base" ? "active" : ""}`} onClick={() => setActiveAngle("base")}>01 / Presentation</button><button type="button" className={`angle-button ${activeAngle === "alternate" ? "active" : ""}`} onClick={() => setActiveAngle("alternate")}>02 / Alternate</button></div></div></div>
        </div>
      </div>
    </section>
  );
}


const products = [
  { number: "01", name: "Iron angle rack", description: "Modular storage built around clean bays, practical access, and repeatable fabrication." },
  { number: "02", name: "Iron cot", description: "Straightforward sleeping frames for staff housing, institutions, and high-use facilities." },
  { number: "03", name: "Iron file lockers", description: "Secure, ventilated storage with a footprint that works hard in every square metre." },
  { number: "04", name: "Iron wardrobes", description: "Durable personal storage with configurable shelves, rails, and door layouts." },
  { number: "05", name: "Iron bunk beds", description: "Space-efficient frames engineered for stable stacking and straightforward assembly." },
];

function InquiryModal({ onClose }: { onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    const payload = new URLSearchParams();
    ["name", "email", "product", "message"].forEach((key) => {
      const value = formData.get(key);
      if (typeof value === "string") payload.append(key, value);
    });

    try {
      await fetch(inquiryEndpoint, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: payload.toString(),
        keepalive: true,
      });
      toast.success("Requirement sent", { description: "Your inquiry has been sent to the x2exports export desk." });
      onClose();
    } catch {
      setIsSubmitting(false);
      toast.error("Could not send inquiry", { description: "Please try again or contact contact@x2exports.com directly." });
    }
  };

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="inquiry-title">
        <div className="modal-top">
          <div>
            <div className="index-rail dark">Export desk</div>
            <h2 id="inquiry-title">Start a<br /><span style={{ color: "var(--orange)" }}>requirement</span></h2>
          </div>
          <button className="modal-close" type="button" onClick={onClose} aria-label="Close inquiry form"><X size={18} /></button>
        </div>
        <form onSubmit={submit}>
          <div className="form-grid">
            <div className="form-field"><label htmlFor="name">Your name</label><input id="name" name="name" required placeholder="Name" /></div>
            <div className="form-field"><label htmlFor="email">Work email</label><input id="email" type="email" name="email" required placeholder="name@company.com" /></div>
            <div className="form-field full"><label htmlFor="product">Product</label><input id="product" name="product" placeholder="e.g. bunk beds" /></div>
            <div className="form-field full"><label htmlFor="message">Requirement</label><textarea id="message" name="message" placeholder="Tell us quantities, dimensions, finish, or destination." /></div>
          </div>
          <button className="button-primary form-submit" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending…" : "Send to export desk"} {!isSubmitting && <ArrowUpRight size={16} />}</button>
        </form>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openInquiry = () => { setInquiryOpen(true); setMenuOpen(false); };
  const navTo = (id: string) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <div className="min-h-screen bg-[var(--bone)]">
      <header className={`site-nav fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${scrolled ? "scrolled" : "bg-[var(--graphite)]/90"}`}>
        <div className="container h-full flex items-center justify-between">
          <button className="flex items-center gap-3" type="button" onClick={() => navTo("top")} aria-label="Back to top">
            <img className="logo-mark" src={markImage} alt="x2exports mark" />
            <span className="font-display text-[1.2rem] font-bold tracking-[.04em] text-[var(--bone)]">x2<span className="text-[var(--orange)]">exports</span></span>
          </button>
          <nav className="desktop-nav flex items-center gap-8" aria-label="Primary navigation">
            <button className="nav-link" type="button" onClick={() => navTo("catalog")}>The range</button>
            <button className="nav-link" type="button" onClick={() => navTo("method")}>How we work</button>
            <button className="nav-link" type="button" onClick={() => navTo("contact")}>Export desk</button>
            <button className="nav-cta" type="button" onClick={openInquiry}>Request a quote <ArrowUpRight className="inline ml-1" size={14} /></button>
          </nav>
          <button className="grid h-10 w-10 place-items-center border border-white/20 text-[var(--bone)] md:hidden" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && <div className="border-t border-white/15 bg-[var(--graphite)] px-5 py-5 md:hidden"><div className="grid gap-5"><button className="text-left font-display text-xl uppercase text-[var(--bone)]" onClick={() => navTo("catalog")}>The range</button><button className="text-left font-display text-xl uppercase text-[var(--bone)]" onClick={() => navTo("method")}>How we work</button><button className="text-left font-display text-xl uppercase text-[var(--bone)]" onClick={() => navTo("contact")}>Export desk</button><button className="button-primary justify-center" onClick={openInquiry}>Request a quote <ArrowUpRight size={15} /></button></div></div>}
      </header>

      <main id="top">
        <section className="hero relative overflow-hidden">
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-grid-lines" aria-hidden="true" />
          <div className="container hero-content">
            <div className="hero-kicker upper-label">Industrial furniture / worldwide supply</div>
            <h1 className="hero-title">Built for<br /><em>the shift.</em><br />Packed for<br />the world.</h1>
            <p className="hero-copy">Iron furniture for the spaces that keep industry moving — specified with care, fabricated for repeatability, and prepared for export.</p>
            <div className="hero-actions"><button className="button-primary" type="button" onClick={() => navTo("catalog")}>View the range <ArrowUpRight size={16} /></button><button className="button-outline" type="button" onClick={openInquiry}>Send your requirement <ChevronRight size={16} /></button></div>
            <div className="hero-foot">
              <div className="hero-foot-stat"><strong>05</strong><span>Core product lines</span></div>
              <div className="hero-foot-stat"><strong>01</strong><span>Clear export desk</span></div>
              <div className="hero-foot-stat"><strong>→</strong><span>Built to your brief</span></div>
            </div>
            <div className="hero-index upper-label"><span>01 /</span><span>x2exports Exports</span></div>
          </div>
        </section>

        <section className="intro-section grain" id="about">
          <div className="container intro-layout">
            <div><div className="index-rail">01 / The brief</div></div>
            <div>
              <h2 className="intro-heading">Furniture that<br /><span>holds its line.</span></h2>
              <p className="intro-lede">Industrial spaces need more than furniture. They need dependable geometry, sensible finishes, and a supply partner who understands that the details do the heavy lifting.</p>
              <p className="intro-note">From a single specification to a repeat container program, our job is to make the next step easy to define.</p>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="x2exports capabilities">
          <div className="container proof-grid">
            <div className="proof-item"><ShieldCheck size={18} color="var(--orange)" /><strong>Built to brief</strong><span>Dimensions & finish considered</span></div>
            <div className="proof-item"><Ruler size={18} color="var(--orange)" /><strong>Repeatable</strong><span>Consistent fabrication logic</span></div>
            <div className="proof-item"><PackageCheck size={18} color="var(--orange)" /><strong>Export ready</strong><span>Prepared for practical shipping</span></div>
            <div className="proof-item"><Globe2 size={18} color="var(--orange)" /><strong>Worldwide</strong><span>One desk for global inquiries</span></div>
          </div>
        </section>

        <section className="catalog-section" id="catalog">
          <div className="container">
            <div className="catalog-head"><div><div className="index-rail dark">02 / The range</div><h2>Five forms.<br /><span>One standard.</span></h2></div><p>Simple silhouettes. Practical footprints. A range built for offices, facilities, workshops, dormitories, and the work between them.</p></div>
            <div className="product-list">
              {products.map((product) => <button key={product.number} className="product-item w-full text-left" type="button" onClick={openInquiry}><span className="product-num">{product.number}</span><span className="product-name">{product.name}</span><span className="product-desc">{product.description}</span><span className="product-arrow"><ArrowUpRight size={18} /></span></button>)}
            </div>
            <div className="mt-12 grid items-stretch gap-0 border border-[var(--line)] lg:grid-cols-[1.15fr_1fr]">
              <div className="relative min-h-[280px] overflow-hidden bg-[var(--graphite)]"><img src={wardrobeImage} alt="Iron wardrobe in a workshop showroom" className="absolute inset-0 h-full w-full object-cover opacity-80" /><div className="absolute inset-0 bg-gradient-to-r from-[var(--graphite)]/85 via-[var(--graphite)]/20 to-transparent" /><div className="relative flex h-full min-h-[280px] flex-col justify-between p-6"><span className="upper-label text-[var(--orange)]">Spec note / 04</span><span className="font-display text-4xl font-bold uppercase leading-[.9] text-[var(--bone)]">Storage that<br />stays orderly.</span></div></div>
              <div className="blueprint-grid flex flex-col justify-between bg-[var(--zinc)] p-6"><div><span className="upper-label text-[var(--steel)]">For procurement teams</span><p className="mt-4 max-w-md text-[1.05rem] leading-[1.6] text-[var(--graphite)]">Tell us the environment, quantities, and constraints. We’ll help translate the brief into a clean product mix.</p></div><button className="mt-8 inline-flex items-center gap-2 self-start font-display text-lg font-bold uppercase tracking-[.08em] text-[var(--graphite)]" type="button" onClick={openInquiry}>Build a product mix <ArrowUpRight size={17} className="text-[var(--orange)]" /></button></div>
            </div>
          </div>
        </section>

        <ProductGallery />

        <section className="visuals-section" id="method">
          <div className="container">
            <div className="visuals-head"><div><div className="index-rail">03 / In the material</div><h2>Made to<br /><span>work.</span></h2></div><p>Good industrial furniture doesn’t ask for attention. It earns trust through proportion, finish, and the quiet confidence of a frame that does what it should.</p></div>
            <div className="visual-grid"><figure className="visual-card tall"><img src={racksImage} alt="Iron angle rack and file lockers in a workshop" /><figcaption className="visual-caption"><div><span className="upper-label visual-tag">Storage systems</span><h3>Order<br />at scale.</h3></div><p>Modular rack and locker solutions for busy floors.</p></figcaption></figure><figure className="visual-card"><img src={cotsImage} alt="Iron cot and bunk beds in an industrial showroom" /><figcaption className="visual-caption"><div><span className="upper-label visual-tag">Accommodation</span><h3>Rest<br />well.</h3></div><p>Stable frames for staff and institutional spaces.</p></figcaption></figure></div>
          </div>
        </section>

        <section className="story-section">
          <div className="container story-layout">
            <div><div className="index-rail dark">04 / The method</div></div>
            <div className="story-content"><h2 className="story-title">A clear desk<br /><span>for hard work.</span></h2><p className="story-copy">Every inquiry starts with the same practical questions: what needs to be stored, where will it live, how often will it be used, and how should it arrive? That clarity keeps the conversation useful from the first message to the final packed unit.</p><div className="story-points"><div className="story-point"><Boxes size={20} /><strong>Brief</strong><span>We read the environment before recommending a range.</span></div><div className="story-point"><Ruler size={20} /><strong>Build</strong><span>We work from repeatable shapes, finishes, and quantities.</span></div><div className="story-point"><Check size={20} /><strong>Dispatch</strong><span>We keep the export handoff practical and legible.</span></div></div></div>
          </div>
        </section>

        <section className="inquiry-section" id="contact">
          <div className="container inquiry-layout"><div><div className="upper-label">05 / Export desk</div><h2 className="inquiry-title">Have a brief?<br /><span>Make it real.</span></h2><p className="inquiry-copy">Send the quantities, dimensions, finish, or destination you already know. We’ll meet you where the specification is and help shape the rest.</p><button className="button-outline" type="button" onClick={openInquiry}>Open the inquiry form <ArrowUpRight size={16} /></button></div><div className="inquiry-side"><Phone size={20} /><p>Prefer a direct conversation? Leave a note and our export desk will come back with the next practical question.</p><a href="tel:+919003942315">+91 9003942315 <ArrowUpRight size={18} /></a><a href="mailto:contact@x2exports.com">contact@x2exports.com <ArrowUpRight size={18} /></a><address className="inquiry-address"><span className="upper-label">Office address</span><br />388(47), 7th street,<br />Sivagurunathapuram,<br />Surandai - 627859</address></div></div>
        </section>
      </main>

      <footer className="site-footer"><div className="container"><div className="footer-top"><div className="footer-brand"><img src={markImage} alt="x2exports mark" /><div><strong>x2exports</strong><span>Industrial furniture / exports</span></div></div><nav className="footer-nav" aria-label="Footer navigation"><button type="button" onClick={() => navTo("catalog")}>The range</button><button type="button" onClick={() => navTo("method")}>How we work</button><button type="button" onClick={openInquiry}>Request a quote</button></nav></div><div className="footer-bottom"><span>© 2026 x2exports</span><span>Built for the shift. Packed for the world.</span></div></div></footer>
      {inquiryOpen && <InquiryModal onClose={() => setInquiryOpen(false)} />}
    </div>
  );
}
