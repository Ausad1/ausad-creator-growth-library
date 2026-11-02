"use client";

import { useMemo, useState } from "react";

type Resource = {
  title: string; description: string; category: string; format: string;
  file: string; size: string; tag?: string;
};

const resources: Resource[] = [
  { title: "Creator Strategy Workbook", description: "Define your niche, audience, positioning and a clear content strategy.", category: "Strategy", format: "PDF", file: "AUSAD_Creator_Growth_Kit_01_Creator_Strategy_Workbook.pdf", size: "PDF resource" },
  { title: "500 AI Content Prompts", description: "A structured prompt library for ideation, scripting, branding, workflows and promotion.", category: "AI & Prompts", format: "PDF", file: "AUSAD_Creator_Growth_Kit_02_500_AI_Content_Prompts.pdf", size: "500 prompts", tag: "POPULAR" },
  { title: "30-Day Content Calendar", description: "A month of organised content planning to help you publish consistently.", category: "Planning", format: "PDF", file: "AUSAD_Creator_Growth_Kit_03_30_Day_Content_Calendar.pdf", size: "30 days" },
  { title: "100 Viral Hooks Library", description: "Opening lines and hook structures to help earn attention and create curiosity.", category: "Content Creation", format: "PDF", file: "AUSAD_Creator_Growth_Kit_04_100_Viral_Hooks_Library.pdf", size: "100 hooks" },
  { title: "30 Short-Form Video Scripts", description: "Ready-to-adapt scripts with spoken copy, visual direction and calls to action.", category: "Content Creation", format: "PDF", file: "AUSAD_Creator_Growth_Kit_05_30_Short_Form_Video_Scripts.pdf", size: "30 scripts" },
  { title: "Creator Growth Tracker", description: "Track content performance, engagement, leads, sales and monthly goals.", category: "Analytics", format: "XLSX", file: "AUSAD_Creator_Growth_Kit_06_Creator_Growth_Tracker.xlsx", size: "Editable spreadsheet" },
  { title: "Premium Brand Templates", description: "Editable square social post and carousel layouts for a consistent visual identity.", category: "Design", format: "PPTX", file: "AUSAD_Creator_Growth_Kit_07_Premium_Brand_Templates.pptx", size: "12 layouts" },
  { title: "Vertical Story Templates", description: "Editable vertical story layouts for polls, behind-the-scenes, value drops and offers.", category: "Design", format: "PPTX", file: "AUSAD_Creator_Growth_Kit_07_Story_Templates.pptx", size: "5 layouts" },
  { title: "Template Quick Guide", description: "A short guide to customising the brand templates and keeping designs consistent.", category: "Design", format: "PDF", file: "AUSAD_Creator_Growth_Kit_07_Template_Quick_Guide.pdf", size: "Quick guide" },
  { title: "Creator Monetisation Guide", description: "Explore services, digital products, partnerships, pricing and a 30-day action plan.", category: "Monetisation", format: "PDF", file: "AUSAD_Creator_Growth_Kit_08_Creator_Monetisation_Guide.pdf", size: "Premium guide" },
  { title: "The Creator's Blueprint", description: "A free introduction to building a practical creator system.", category: "Free Resource", format: "PDF", file: "AUSAD_Creatives_The_Creators_Blueprint.pdf", size: "Free download", tag: "FREE" },
];

const categories = ["All resources", "Strategy", "AI & Prompts", "Planning", "Content Creation", "Analytics", "Design", "Monetisation", "Free Resource"];

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All resources");
  const filtered = useMemo(() => resources.filter((r) =>
    (category === "All resources" || r.category === category) &&
    (r.title + " " + r.description + " " + r.category).toLowerCase().includes(query.toLowerCase())
  ), [query, category]);

  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#"><span className="brandMark">A</span><span>AUSAD <b>CREATIVES</b><small>CREATOR RESOURCE LIBRARY</small></span></a>
        <div className="navRight"><a href="#library">Explore resources</a><a className="navCta" href="#about">About the kit <span>↗</span></a></div>
      </nav>

      <section className="hero wrap">
        <div className="eyebrow"><span className="dot"/> THE CREATOR GROWTH KIT</div>
        <h1>One library.<br/><em>More room to create.</em></h1>
        <p className="heroText">Your practical creator resources, organised in one place. Explore tools to plan smarter, create better content, understand your growth and build a creator business.</p>
        <div className="heroActions"><a className="primaryBtn" href="#library">Explore the library <span>↓</span></a><a className="textLink" href="#about">Discover the kit <span>↗</span></a></div>
        <div className="heroMeta"><span>11 DOWNLOADABLE RESOURCES</span><i/> <span>PDF · PPTX · XLSX</span><i/> <span>BY AUSAD CREATIVES</span></div>
        <div className="heroDecor"><div className="decorCard decorOne"><span>01 / PLAN</span><b>Build your<br/>strategy.</b><small>CLARITY BEFORE CONTENT</small></div><div className="decorCard decorTwo"><span>02 / CREATE</span><b>Make every<br/>idea count.</b><small>IDEAS INTO ACTION</small></div><div className="decorOrb">AD</div></div>
      </section>

      <section className="stats wrap"><div><b>08</b><span>CORE KIT ASSETS</span></div><div><b>500+</b><span>AI PROMPTS</span></div><div><b>30</b><span>VIDEO SCRIPTS</span></div><div><b>01</b><span>CREATOR LIBRARY</span></div></section>

      <section className="library wrap" id="library">
        <div className="sectionHead"><div><div className="eyebrow">THE RESOURCE COLLECTION</div><h2>Find what you need.<br/><em>Get straight to work.</em></h2></div><p>Choose a resource, download it and put it into practice. No complicated navigation.</p></div>
        <div className="filters">
          <label className="searchBox"><span>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search the library..." aria-label="Search resources"/></label>
          <div className="categoryList">{categories.map((c) => <button key={c} className={category === c ? "chip active" : "chip"} onClick={() => setCategory(c)}>{c}</button>)}</div>
        </div>
        <div className="resourceCount">{filtered.length} RESOURCE{filtered.length === 1 ? "" : "S"} FOUND</div>
        <div className="grid">
          {filtered.map((r, i) => <article className="resourceCard" key={r.file}>
            <div className="cardTop"><span className="fileType">{r.format}</span>{r.tag && <span className={r.tag === "FREE" ? "tag free" : "tag"}>{r.tag}</span>}</div>
            <div className="cardIcon">{r.format === "XLSX" ? "▦" : r.format === "PPTX" ? "▤" : "▱"}</div>
            <div className="cardCategory">{r.category.toUpperCase()} <span> / {String(i+1).padStart(2,"0")}</span></div>
            <h3>{r.title}</h3><p>{r.description}</p>
            <div className="cardBottom"><span>{r.size}</span><a href={"/downloads/" + encodeURIComponent(r.file)} download>Download <b>↗</b></a></div>
          </article>)}
        </div>
        {filtered.length === 0 && <div className="empty">No resources match that search. Try another keyword or category.</div>}
      </section>

      <section className="about" id="about"><div className="wrap aboutInner"><div><div className="eyebrow">A SYSTEM FOR CREATORS</div><h2>Learn. Create.<br/><em>Evolve.</em></h2></div><div className="aboutCopy"><p>The Creator Growth Kit is a practical collection for creators who want more structure behind their content. Use the resources together or start with the one that solves your biggest challenge today.</p><a className="primaryBtn" href="#library">Browse all resources <span>↗</span></a></div></div></section>

      <footer className="footer wrap"><a className="brand" href="#"><span className="brandMark">A</span><span>AUSAD <b>CREATIVES</b><small>CREATE WITH PURPOSE.</small></span></a><div className="footerRight"><span>© {new Date().getFullYear()} AUSAD CREATIVES</span><span>BUILT FOR THE NEXT GENERATION OF CREATORS.</span></div></footer>
    </main>
  );
}
