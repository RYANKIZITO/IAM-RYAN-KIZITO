"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Blocks,
  CalendarCheck,
  Code2,
  CreditCard,
  Cpu,
  Database,
  ExternalLink,
  GraduationCap,
  LayoutDashboard,
  Mail,
  Plane,
  PhoneCall,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";

const services = [
  {
    title: "Learning Management Systems",
    desc: "Course portals with student dashboards, instructor workflows, certificates, payments, and measurable learning progress.",
    icon: GraduationCap,
  },
  {
    title: "School Management Systems",
    desc: "Admissions, fees, records, reports, user roles, and parent-facing workflows for education teams.",
    icon: ShieldCheck,
  },
  {
    title: "Tourism & Booking Platforms",
    desc: "Destination websites and booking flows designed to convert visitors into inquiries and reservations.",
    icon: Plane,
  },
  {
    title: "Admin Dashboards",
    desc: "Clean operational dashboards for teams that need to manage users, content, analytics, and internal workflows.",
    icon: LayoutDashboard,
  },
  {
    title: "Payment Integrations",
    desc: "Stripe, Pesapal, and payment verification flows connected to useful records, receipts, and reports.",
    icon: CreditCard,
  },
  {
    title: "Business Automation Systems",
    desc: "Custom portals, CRMs, loan systems, notifications, reports, and workflows that reduce manual work.",
    icon: Workflow,
  },
  {
    title: "AI-powered Applications",
    desc: "Practical AI features for search, content workflows, customer support, document handling, and internal tools.",
    icon: Bot,
  },
  {
    title: "SaaS & Web Platforms",
    desc: "Subscription-ready products with roles, databases, APIs, responsive interfaces, and reliable deployment.",
    icon: Blocks,
  },
];

type Project = {
  name: string;
  category: string;
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
  url?: string;
  image?: string;
  status?: string;
  highlights?: string[];
};

const projects: Project[] = [
  {
    name: "Bilge Online Institute",
    category: "Education Platform",
    problem:
      "Bilge needed a public gateway where learners could review programmes, admissions details, tuition guidance, faculty information, and contact channels before registration.",
    solution:
      "Built and launched a responsive institute website connected to the Bilge learning journey, with programme discovery, admissions CTAs, login/signup paths, multilingual access, careers, insights, and support touchpoints.",
    impact:
      "The live site now presents 67 published programmes across active categories and gives students a clear route from exploration to enrollment and LMS access.",
    stack: ["Next.js", "React", "Tailwind CSS", "Responsive UI", "LMS"],
    url: "https://bilgeonline.institute/",
    image: "/bilge-online-institute.png",
    status: "Live system",
    highlights: [
      "67 published programmes",
      "Admissions and tuition guidance",
      "Login, signup, and LMS pathway",
    ],
  },
  {
    name: "PROBA Safaris",
    category: "Tourism Website",
    problem:
      "Travel brands need to convert destination interest into qualified trip inquiries.",
    solution:
      "Built a tourism website direction with clear safari packages, destination storytelling, and inquiry-focused flows.",
    impact:
      "Improves trust, search visibility, and the visitor journey from browsing to booking.",
    stack: ["HTML", "Bootstrap", "JavaScript", "SEO"],
  },
  {
    name: "Kamagara Concepts",
    category: "Photography Portfolio",
    problem:
      "Creative professionals need a portfolio that sells credibility without distracting from the work.",
    solution:
      "Created a premium portfolio direction for documentary photography, events, editorial storytelling, and visual identity.",
    impact:
      "Helps prospects understand the brand, inspect the work, and start a serious conversation.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Loan Management System",
    category: "Business Web App",
    problem:
      "Loan teams often lose time reconciling borrowers, balances, payments, reports, and receipts manually.",
    solution:
      "Built a practical web app for borrowers, ledgers, payments, balances, transaction reports, and receipts.",
    impact:
      "Improves accuracy, accountability, and day-to-day visibility for finance operations.",
    stack: ["Node.js", "Express", "EJS", "Database"],
  },
];

const testimonials = [
  {
    quote:
      "Project feedback and client outcomes can be featured here as new engagements go live.",
    person: "Client testimonial placeholder",
    role: "Available for verified results",
  },
  {
    quote:
      "The goal is always the same: clear communication, useful systems, and products that feel dependable.",
    person: "Delivery approach",
    role: "Built around business value",
  },
];

const techStack = [
  "JavaScript",
  "HTML5",
  "CSS",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Motion",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Prisma",
  "Framer Motion",
  "CI/CD",
  "MongoDB",
  "Mongoose",
  "MySQL",
  "SQLite",
  "GitHub",
  "Render",
  "Vercel",
  "Stripe",
  "Pesapal",
  "Cloudflare",
];

const process = [
  "Discovery",
  "UI/UX Planning",
  "Development",
  "Testing",
  "Deployment",
  "Maintenance",
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200"
    >
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </motion.div>
  );
}

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 1600, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplay(Math.round(latest));
    });

    return () => unsubscribe();
  }, [springValue]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function FloatingCard({
  className,
  delay = 0,
  children,
}: {
  className?: string;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      className={cn(
        "rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

function OrbitItem({
  tech,
  angle,
  radius,
}: {
  tech: string;
  angle: number;
  radius: number;
}) {
  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{
        transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
      }}
    >
      <motion.span
        whileHover={{ scale: 1.12, y: -4 }}
        className="inline-flex whitespace-nowrap rounded-full border border-cyan-300/20 bg-slate-950/80 px-4 py-2 text-xs font-black text-cyan-100 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl sm:text-sm"
      >
        {tech}
      </motion.span>
    </div>
  );
}

function TechOrbit({ items }: { items: string[] }) {
  const outerItems = items.slice(0, 10);
  const innerItems = items.slice(10, 18);
  const snakeItems = [...items.slice(18), ...items.slice(0, 8)];

  return (
    <div className="relative min-h-[620px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl sm:p-8 lg:min-h-[600px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(103,232,249,0.16),transparent_42%)]" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10" />
      <div className="absolute left-1/2 top-1/2 h-[27rem] w-[27rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/10" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-[46%] h-[27rem] w-[27rem] -translate-x-1/2 -translate-y-1/2"
      >
        {outerItems.map((tech, index) => (
          <OrbitItem
            key={`outer-${tech}`}
            tech={tech}
            angle={(360 / outerItems.length) * index}
            radius={205}
          />
        ))}
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-[46%] h-72 w-72 -translate-x-1/2 -translate-y-1/2"
      >
        {innerItems.map((tech, index) => (
          <OrbitItem
            key={`inner-${tech}`}
            tech={tech}
            angle={(360 / innerItems.length) * index}
            radius={126}
          />
        ))}
      </motion.div>

      <div className="absolute left-1/2 top-[46%] z-10 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[2rem] border border-cyan-300/20 bg-slate-950/90 p-5 text-center shadow-2xl shadow-cyan-950/40 backdrop-blur-xl">
        <Code2 className="mb-3 h-7 w-7 text-cyan-200" />
        <p className="text-sm font-black text-white">Full-Stack</p>
        <p className="mt-1 text-xs leading-5 text-slate-400">
          Frontend, backend, database, deployment
        </p>
      </div>

      <div className="absolute bottom-6 left-0 right-0 overflow-hidden border-y border-white/10 bg-black/20 py-4">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="flex w-max gap-3 px-6"
        >
          {[...snakeItems, ...snakeItems].map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-bold text-slate-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default function RyanKizitoPortfolio() {
  const stats = useMemo(
    () => [
      { value: 15, suffix: "+", label: "Projects Built" },
      { value: 5, suffix: "+", label: "Business Systems" },
      { value: 10, suffix: "+", label: "Technologies Used" },
      { value: 100, suffix: "%", label: "Custom Solutions" },
    ],
    []
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute left-[-10%] top-[-10%] h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute right-[-10%] top-[20%] h-[30rem] w-[30rem] rounded-full bg-violet-600/20 blur-[130px]" />
        <div className="absolute bottom-[-20%] left-[20%] h-[35rem] w-[35rem] rounded-full bg-amber-500/10 blur-[150px]" />
      </div>

      <header className="relative z-30 mx-auto flex max-w-[1800px] items-start justify-between px-5 py-5 sm:px-8 xl:px-10">
        <a href="#home" className="group flex items-center gap-4 pt-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-white/10 shadow-lg shadow-cyan-500/10 transition group-hover:-translate-y-0.5 group-hover:border-cyan-300/35">
            <Code2 className="h-5 w-5 text-cyan-200" />
          </div>
          <div>
            <p className="text-base font-black tracking-wide text-white sm:text-lg lg:text-xl">
              Ryan Kizito
            </p>
            <p className="text-sm leading-5 text-slate-400 sm:text-base">
              Business Systems Developer
            </p>
          </div>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-slate-300 backdrop-blur-xl md:flex lg:gap-8 lg:text-[15px]">
          <a className="relative transition after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-cyan-200 after:transition-all hover:text-white hover:after:w-full" href="#services">
            What I Build
          </a>
          <a className="relative transition after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-cyan-200 after:transition-all hover:text-white hover:after:w-full" href="#projects">
            Projects
          </a>
          <a className="relative transition after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-cyan-200 after:transition-all hover:text-white hover:after:w-full" href="#stack">
            Stack
          </a>
          <a className="relative transition after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-cyan-200 after:transition-all hover:text-white hover:after:w-full" href="#contact">
            Contact
          </a>
          <a
            className="rounded-full bg-cyan-300 px-4 py-2 font-black text-slate-950 shadow-lg shadow-cyan-500/15 transition hover:-translate-y-0.5 hover:bg-cyan-200"
            href="mailto:webchemydevelopers@gmail.com"
          >
            Hire Me
          </a>
        </nav>

        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, 1.2, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute right-5 top-5 z-40 hidden h-32 w-32 overflow-hidden rounded-[2.5rem] border border-cyan-300/25 bg-white/10 p-1.5 shadow-2xl shadow-cyan-500/20 backdrop-blur-xl md:block lg:right-8 lg:h-40 lg:w-40 xl:h-48 xl:w-48 2xl:h-52 2xl:w-52"
        >
          <Image
            src="/ryan-profile.png"
            alt="Ryan Kizito profile photo"
            width={412}
            height={606}
            loading="eager"
            sizes="(min-width: 1280px) 208px, (min-width: 1024px) 192px, 160px"
            className="h-full w-full rounded-[2rem] object-cover"
          />
          <div className="absolute inset-0 rounded-[2.4rem] bg-gradient-to-t from-slate-950/25 to-transparent" />
        </motion.div>

        <div className="pointer-events-none absolute right-4 top-4 z-50 md:hidden">
          {Array.from({ length: 14 }).map((_, index) => {
            const angle = (Math.PI * 2 * index) / 14;
            const distance = index % 2 === 0 ? 58 : 78;
            const colors = ["#67e8f9", "#a78bfa", "#fbbf24", "#22d3ee", "#f472b6"];

            return (
              <motion.span
                key={index}
                className="absolute left-1/2 top-1/2 h-2.5 w-2.5 rounded-full shadow-lg"
                style={{ backgroundColor: colors[index % colors.length] }}
                initial={{ opacity: 0, x: 0, y: 0, scale: 0.2 }}
                animate={{
                  opacity: [0, 0, 0, 1, 0],
                  x: [
                    0,
                    0,
                    0,
                    Math.cos(angle) * distance,
                    Math.cos(angle) * (distance + 18),
                  ],
                  y: [
                    0,
                    0,
                    0,
                    Math.sin(angle) * distance,
                    Math.sin(angle) * (distance + 18),
                  ],
                  scale: [0.2, 0.2, 0.2, 1.25, 0],
                }}
                transition={{
                  duration: 6.8,
                  times: [0, 0.56, 0.72, 0.84, 1],
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: index * 0.018,
                }}
              />
            );
          })}

          <motion.div
            initial={{ opacity: 0, scale: 0.86, y: -170 }}
            animate={{
              opacity: [0, 1, 1, 1, 0],
              scale: [0.86, 1, 1, 1.04, 0.94],
              y: [-170, 0, 0, 0, -28],
            }}
            transition={{
              duration: 6.8,
              times: [0, 0.3, 0.7, 0.84, 1],
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative h-24 w-24 overflow-hidden rounded-[2rem] border border-cyan-300/30 bg-slate-950/70 p-1.5 shadow-2xl shadow-cyan-500/25 backdrop-blur-xl"
          >
            <Image
              src="/ryan-profile.png"
              alt="Ryan Kizito profile photo"
              width={412}
              height={606}
              loading="eager"
              sizes="96px"
              className="h-full w-full rounded-[1.55rem] object-cover"
            />
            <div className="absolute inset-0 rounded-[1.9rem] bg-gradient-to-t from-slate-950/30 to-transparent" />
          </motion.div>
        </div>
      </header>

      <section
        id="home"
        className="relative z-10 mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-12 px-5 pb-20 pt-8 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:pt-2"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm leading-5 text-slate-300 shadow-lg shadow-cyan-950/10 backdrop-blur-xl"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" />
            </span>
            Available for client work, SaaS builds, dashboards & automation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl xl:text-[5.35rem]"
          >
            I build scalable digital platforms that solve real business problems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9"
          >
            Full-stack software developer focused on modern web systems,
            AI-powered workflows, payment-ready platforms, and automation tools
            that help organizations move faster with cleaner operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-7 py-4 text-sm font-black text-slate-950 shadow-xl shadow-cyan-500/25 transition duration-300 hover:-translate-y-1 hover:bg-cyan-200 hover:shadow-cyan-400/35 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="https://wa.me/256770327098"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-black/10 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <PhoneCall className="h-4 w-4" />
              Start a Project
            </a>
            <a
              href="mailto:webchemydevelopers@gmail.com?subject=CV%20Request%20for%20Ryan%20Kizito"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-7 py-4 text-sm font-bold text-cyan-100 shadow-lg shadow-cyan-950/15 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-cyan-300/15 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <Mail className="h-4 w-4" />
              Request CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-3 text-sm leading-6 text-slate-400"
          >
            <BadgeCheck className="h-5 w-5 text-cyan-200" />
            <span>Strategy, UI, backend, database, deployment, and long-term maintenance.</span>
          </motion.div>
        </div>

        <div className="relative min-h-[470px] sm:min-h-[560px]">
          

          <motion.div
            animate={{ y: [0, -16, 0], rotate: [0, 1.2, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-2 top-10 w-[85%] rounded-[2rem] border border-white/10 bg-slate-950/80 p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl sm:left-10"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200">
                Live Dashboard
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["Revenue", "UGX 12.8M"],
                ["Users", "2,430"],
                ["Growth", "+38%"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                >
                  <p className="text-xs text-slate-400">{label}</p>
                  <p className="mt-2 text-xl font-black">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 h-36 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-300/20 via-violet-500/10 to-transparent p-4">
              <div className="flex h-full items-end gap-2">
                {[42, 68, 50, 84, 72, 92, 78, 96].map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 1.1, delay: 0.4 + index * 0.08 }}
                    className="flex-1 rounded-t-xl bg-cyan-200/70"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <FloatingCard className="absolute bottom-16 left-0 w-64" delay={0.55}>
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-violet-400/15 p-3 text-violet-200">
                <Server className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold">Backend API</p>
                <p className="text-sm text-slate-400">Node + PostgreSQL</p>
              </div>
            </div>
            <div className="mt-4 space-y-2 font-mono text-xs text-cyan-100/80">
              <p>POST /payments/verify</p>
              <p>GET /dashboard/analytics</p>
              <p>PATCH /users/:id</p>
            </div>
          </FloatingCard>

          <FloatingCard className="absolute bottom-4 right-0 w-72" delay={0.7}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Mobile Preview</p>
                <p className="mt-1 font-black">Booking App</p>
              </div>
              <Smartphone className="h-6 w-6 text-cyan-200" />
            </div>
            <div className="mt-4 rounded-3xl border border-white/10 bg-black/30 p-3">
              <div className="h-24 rounded-2xl bg-gradient-to-br from-cyan-300/30 to-violet-500/20" />
              <div className="mt-3 h-3 w-3/4 rounded-full bg-white/20" />
              <div className="mt-2 h-3 w-1/2 rounded-full bg-white/10" />
            </div>
          </FloatingCard>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-white/[0.03] py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 sm:px-8 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xl"
            >
              <p className="text-4xl font-black text-white sm:text-5xl">
                <CountUp value={item.value} suffix={item.suffix} />
              </p>
              <p className="mt-2 text-sm text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="services"
        className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28"
      >
        <SectionLabel>What I Build</SectionLabel>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
          >
            <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Digital products built for real operations, not just nice screens.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              I build practical systems that help businesses collect data,
              manage clients, receive payments, automate workflows, and make
              better decisions from one reliable digital platform.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-xl shadow-black/10 backdrop-blur-xl transition duration-300 hover:border-cyan-300/30 hover:bg-white/[0.08] hover:shadow-cyan-950/20"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-cyan-300/10 p-3 text-cyan-200 transition group-hover:bg-cyan-300 group-hover:text-slate-950">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black leading-7">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{service.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="relative z-10 bg-white/[0.03] py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionLabel>Featured Projects</SectionLabel>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Real work, real systems, real business problems.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                These projects show the kind of work I focus on: systems that
                improve operations, support growth, and make digital experiences
                easier to trust.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-cyan-200 transition hover:text-cyan-100"
            >
              Discuss a similar project <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/75 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:border-cyan-300/25 hover:shadow-cyan-950/25"
              >
                <div className="relative h-48 overflow-hidden border-b border-white/10 bg-gradient-to-br from-cyan-300/20 via-violet-500/15 to-amber-300/10 p-5">
                  {project.image ? (
                    <>
                      <Image
                        src={project.image}
                        alt={`${project.name} live website screenshot`}
                        width={1900}
                        height={868}
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/10" />
                    </>
                  ) : null}
                  <div className="relative flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-black/20 p-4 transition duration-300 group-hover:border-cyan-200/20 group-hover:bg-black/25">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs font-bold text-slate-100 backdrop-blur">
                        {project.status ?? project.category}
                      </span>
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Visit ${project.name}`}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-200/25 bg-cyan-300/15 text-cyan-100 backdrop-blur transition hover:-translate-y-0.5 hover:bg-cyan-300/25"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      ) : (
                        <Rocket className="h-5 w-5 text-cyan-200 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      )}
                    </div>
                    <div className="max-w-sm">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-100/90">
                        {project.category}
                      </p>
                      <p className="mt-2 text-lg font-black leading-6 text-white">
                        {project.url ? "Production website and student pathway" : project.name}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-7">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="text-2xl font-black leading-8">{project.name}</h3>
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-fit items-center gap-1.5 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100 transition hover:border-cyan-200/40 hover:bg-cyan-300/15"
                      >
                        Visit live <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <span className="w-fit rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100">
                        Case Study
                      </span>
                    )}
                  </div>
                  {project.highlights ? (
                    <div className="mt-5 grid gap-2 sm:grid-cols-3">
                      {project.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-bold leading-5 text-slate-200"
                        >
                          {highlight}
                        </div>
                      ))}
                    </div>
                  ) : null}
                  <div className="mt-5 space-y-4 text-sm leading-7 text-slate-400 sm:text-[15px]">
                    <p>
                      <span className="font-bold text-slate-200">Problem:</span>{" "}
                      {project.problem}
                    </p>
                    <p>
                      <span className="font-bold text-slate-200">Solution:</span>{" "}
                      {project.solution}
                    </p>
                    <p>
                      <span className="font-bold text-slate-200">Impact:</span>{" "}
                      {project.impact}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-slate-300 transition group-hover:border-white/15 group-hover:bg-white/[0.07]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="stack"
        className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8"
      >
        <SectionLabel>Tech Stack</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Modern tools for modern business systems.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              My stack is focused on speed, clean UI, reliable backend logic,
              databases, deployment, and production maintenance.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3 text-center text-sm text-slate-300">
              {[
                [Cpu, "Frontend"],
                [Database, "Database"],
                [Workflow, "Deploy"],
              ].map(([Icon, label]) => {
                const TypedIcon = Icon as typeof Cpu;
                return (
                  <div
                    key={label as string}
                    className="rounded-3xl border border-white/10 bg-white/[0.05] p-5"
                  >
                    <TypedIcon className="mx-auto mb-3 h-6 w-6 text-cyan-200" />
                    {label as string}
                  </div>
                );
              })}
            </div>
          </div>

          <TechOrbit items={techStack} />
        </div>
      </section>

      <section className="relative z-10 bg-white/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionLabel>My Process</SectionLabel>
          <h2 className="max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
            I turn ideas into planned, designed, developed, and deployed products.
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {process.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="relative rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl"
              >
                <span className="mb-8 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-sm font-black text-cyan-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-black">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
          >
            <SectionLabel>Trust Signals</SectionLabel>
            <h2 className="max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Built with the standards clients expect from serious software.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Clear communication, responsive interfaces, reliable backend
              foundations, accessible markup, and launch-ready deployment are
              part of the build from day one.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {testimonials.map((item, index) => (
              <motion.figure
                key={item.person}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-xl shadow-black/10 backdrop-blur-xl transition duration-300 hover:border-cyan-300/25 hover:bg-white/[0.07]"
              >
                <div className="mb-5 flex items-center gap-2 text-cyan-200">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Sparkles key={starIndex} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="leading-7 text-slate-300">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-black text-white">{item.person}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.role}</p>
                </figcaption>
              </motion.figure>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6 shadow-xl shadow-cyan-950/15 backdrop-blur-xl sm:col-span-2"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950">
                    <CalendarCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-black text-white">
                      Available for freelance and client projects
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      Best fit: business systems, dashboards, websites, booking
                      platforms, payment flows, and automation tools.
                    </p>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-1 hover:bg-cyan-200"
                >
                  Check Availability
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8"
      >
        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-cyan-300/15 via-violet-500/10 to-white/[0.04] p-8 shadow-2xl shadow-cyan-950/20 sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <SectionLabel>Let’s Build</SectionLabel>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-bold text-emerald-100">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                Open to freelance and client work
              </div>
              <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-6xl">
                Let’s build something great for your business.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Bring the idea, workflow, or business problem. I will help turn
                it into a clean, premium, functional product people can actually
                use.
              </p>
              <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
                {["Business-first planning", "Responsive implementation", "Launch support"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                    >
                      <BadgeCheck className="mb-3 h-5 w-5 text-cyan-200" />
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="space-y-4">
              <a
                href="https://wa.me/256770327098"
                className="group flex items-center justify-between rounded-3xl border border-white/10 bg-white/10 p-5 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/15"
              >
                <span className="flex items-center gap-3 font-bold">
                  <PhoneCall className="h-5 w-5 text-cyan-200" /> WhatsApp Me
                </span>
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a
                href="mailto:webchemydevelopers@gmail.com"
                className="group flex items-center justify-between rounded-3xl border border-white/10 bg-white/10 p-5 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/15"
              >
                <span className="flex items-center gap-3 font-bold">
                  <Mail className="h-5 w-5 text-cyan-200" /> Send Email
                </span>
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a
                href="https://github.com/RYANKIZITO"
                className="group flex items-center justify-between rounded-3xl border border-white/10 bg-white/10 p-5 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/15"
              >
                <span className="flex items-center gap-3 font-bold">
                  <svg
                    className="h-5 w-5 text-cyan-200"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.586 2 12.253c0 4.506 2.865 8.329 6.839 9.681.5.095.683-.222.683-.494 0-.244-.009-.89-.014-1.747-2.782.62-3.369-1.375-3.369-1.375-.455-1.186-1.11-1.502-1.11-1.502-.908-.636.069-.623.069-.623 1.004.073 1.532 1.057 1.532 1.057.892 1.566 2.341 1.114 2.91.852.091-.663.349-1.114.635-1.37-2.221-.259-4.555-1.139-4.555-5.066 0-1.119.39-2.034 1.03-2.751-.103-.259-.446-1.302.098-2.714 0 0 .84-.276 2.75 1.051A9.367 9.367 0 0 1 12 6.906a9.36 9.36 0 0 1 2.504.346c1.909-1.327 2.748-1.051 2.748-1.051.546 1.412.203 2.455.1 2.714.64.717 1.028 1.632 1.028 2.751 0 3.937-2.337 4.804-4.565 5.058.359.317.678.943.678 1.901 0 1.371-.013 2.477-.013 2.815 0 .274.18.594.688.493C19.138 20.579 22 16.758 22 12.253 22 6.586 17.523 2 12 2Z"
                    />
                  </svg>
                  View GitHub
                </span>
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500 sm:px-8">
        <p>
          © {new Date().getFullYear()} Ryan Kizito. Full-Stack Software
          Developer.
        </p>
      </footer>
    </main>
  );
}
