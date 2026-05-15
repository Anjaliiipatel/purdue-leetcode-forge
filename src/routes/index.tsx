import { createFileRoute } from "@tanstack/react-router";
import collabImg from "@/assets/collab.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LeetCode Club at Purdue — Master technical interviews together" },
      {
        name: "description",
        content:
          "Purdue's community of programmers collaborating to develop and strengthen the technical knowledge required for LeetCode problems.",
      },
      { property: "og:title", content: "LeetCode Club at Purdue" },
      {
        property: "og:description",
        content:
          "A community of Boilermakers across all skill levels mastering algorithms, data structures, and technical interview prep.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "LeetCode Club at Purdue",
          description:
            "Community of programmers from all skill levels collaborating to develop technical knowledge required for LeetCode problems.",
          parentOrganization: { "@type": "CollegeOrUniversity", name: "Purdue University" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-8 py-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="size-8 bg-purdue rounded flex items-center justify-center text-primary-foreground font-bold text-sm tracking-tighter">
            P
          </div>
          <span className="font-mono text-xs sm:text-sm tracking-wider font-medium uppercase">
            LeetCode Club @ Purdue
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-muted-foreground">
          <a href="#pillars" className="hover:text-purdue transition-colors">
            The Board
          </a>
          <a href="#community" className="hover:text-purdue transition-colors">
            Weekly Challenges
          </a>
          <a href="#resources" className="hover:text-purdue transition-colors">
            Resources
          </a>
          <a
            href="#join"
            className="bg-purdue/10 text-purdue px-4 py-2 border border-purdue/20 rounded-md hover:bg-purdue hover:text-primary-foreground transition-all"
          >
            Join Session
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative px-6 md:px-8 pt-20 md:pt-24 pb-16 max-w-7xl mx-auto grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purdue/10 border border-purdue/20 rounded-full mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-purdue">
              Next Session: Thursday 6:00PM @ Lawson
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6 leading-[0.9] text-balance">
            Crack the <span className="text-purdue">Code.</span>
            <br />
            Build the <span className="text-muted-foreground italic">Future.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            A community of programmers from all skill levels and experiences collaborating with one
            another to develop and strengthen the technical knowledge required for LeetCode problems.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#join"
              className="px-8 py-4 bg-foreground text-background font-bold text-sm uppercase tracking-widest hover:bg-purdue hover:text-primary-foreground transition-colors"
            >
              Start Practicing
            </a>
            <a
              href="#pillars"
              className="px-8 py-4 border border-border text-foreground font-bold text-sm uppercase tracking-widest hover:border-purdue transition-colors"
            >
              Browse Archives
            </a>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <div className="bg-surface border border-border rounded-xl p-1 overflow-hidden shadow-2xl shadow-black/50">
            <div className="flex gap-1.5 p-3 border-b border-border bg-surface/50">
              <div className="size-2.5 rounded-full bg-destructive/30" />
              <div className="size-2.5 rounded-full bg-purdue/40" />
              <div className="size-2.5 rounded-full bg-success/40" />
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
              <CodeLine n="01">
                <span className="text-success">class</span>{" "}
                <span className="text-foreground">BoilermakerSolution:</span>
              </CodeLine>
              <CodeLine n="02">
                <span className="pl-4 text-success">def</span>{" "}
                <span className="text-sky-400">two_sum</span>
                <span className="text-muted-foreground">(self, nums, target):</span>
              </CodeLine>
              <CodeLine n="03">
                <span className="pl-8 text-muted-foreground italic">
                  # Collaborate. Iterate. Optimize.
                </span>
              </CodeLine>
              <CodeLine n="04">
                <span className="pl-8 text-success">return</span>{" "}
                <span className="text-purdue">"Accepted"</span>
              </CodeLine>
            </div>
          </div>
        </div>
      </header>

      {/* Pillars */}
      <section id="pillars" className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-purdue mb-3">
            // What we do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-2xl text-balance">
            Three pillars of technical mastery.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          {[
            {
              n: "01",
              title: "Weekly Whiteboarding",
              body: "Get comfortable explaining your logic on the big screen with peer-led mock interview sessions.",
            },
            {
              n: "02",
              title: "Skill-Based Sprints",
              body: "Whether you're a DP expert or just learning your first array, we group members by skill level for effective learning.",
            },
            {
              n: "03",
              title: "FAANG Networking",
              body: "Connect with Purdue alumni currently working at top-tier tech companies and learn how they cracked the loop.",
            },
          ].map((p) => (
            <div
              key={p.n}
              className="bg-background p-10 hover:bg-surface transition-colors"
            >
              <div className="text-purdue font-mono text-xs mb-6 tracking-tighter">[{p.n}]</div>
              <h3 className="text-xl font-bold text-foreground mb-4">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community */}
      <section id="community" className="border-t border-border bg-card py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2 space-y-12">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-purdue mb-3">
                  // The community
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight text-balance">
                  Collaborative growth, not solo grinding.
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our sessions aren't just about solving problems — they're about building a
                  community of programmers who push each other to excel, regardless of where you
                  start.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <Stat value="500+" label="Problems Solved" />
                <Stat value="120+" label="Active Members" />
                <Stat value="2x" label="Sessions / Week" />
                <Stat value="All" label="Skill Levels" />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full aspect-[4/3] bg-surface border border-border rounded-lg overflow-hidden">
                <img
                  src={collabImg}
                  alt="Purdue students collaborating on LeetCode problems around whiteboards and laptops"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting / Join */}
      <section id="join" className="border-t border-border py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="border border-border rounded-xl p-10 md:p-16 bg-surface flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-purdue mb-4">
                // Next runtime
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-6 text-balance">
                Pull up a chair. Bring a laptop.
              </h2>
              <div className="flex flex-wrap gap-x-10 gap-y-4 font-mono text-sm">
                <Field label="When" value="Thursdays · 6:00 PM EST" />
                <Field label="Where" value="Lawson Hall · Purdue WL" />
                <Field label="Bring" value="Laptop + curiosity" />
              </div>
            </div>
            <a
              href="#"
              className="shrink-0 px-8 py-4 bg-purdue text-primary-foreground font-bold text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors rounded-md"
            >
              Join the Discord
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="resources"
        className="border-t border-border px-6 md:px-8 py-12"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="size-6 bg-secondary rounded flex items-center justify-center text-[10px] text-foreground">
              P
            </div>
            <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
              © 2025 LeetCode Club at Purdue · Established at Lawson Hall
            </p>
          </div>
          <div className="flex gap-8 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            <a href="#" className="hover:text-purdue transition-colors">
              Discord
            </a>
            <a href="#" className="hover:text-purdue transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-purdue transition-colors">
              BoilerLink
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CodeLine({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="text-muted-foreground/60 select-none">{n}</span>
      <span>{children}</span>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-mono tracking-tighter">
        {value}
      </div>
      <div className="text-xs text-muted-foreground uppercase tracking-widest font-mono">
        {label}
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">
        {label}
      </div>
      <div className="text-foreground">{value}</div>
    </div>
  );
}
