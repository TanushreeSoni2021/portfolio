import { motion as Motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiArrowRight, HiSparkles } from "react-icons/hi2";
import { profile, contactInfo } from "../data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: d, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden px-6 lg:px-16"
      style={{ background: "linear-gradient(135deg, #2a1a0e 0%, #1a0f06 60%, #0f0804 100%)" }}
    >
      {/* Background glow blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-orange-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-orange-500/15 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2">
        {/* LEFT */}
        <Motion.div initial="hidden" animate="visible" className="flex flex-col">
          <Motion.p
            custom={0}
            variants={fadeUp}
            className="mb-4 text-sm font-medium tracking-widest text-orange-400/70 uppercase"
          >
            {profile.badge}
          </Motion.p>

          <Motion.p custom={0.08} variants={fadeUp} className="text-xl font-medium text-orange-200/80">
            Hey, I am{" "}
            <span className="font-bold text-orange-400">Tanushree</span>
          </Motion.p>

          <Motion.h1
            custom={0.16}
            variants={fadeUp}
            className="mt-2 text-5xl font-black leading-tight text-[#f5ede0] sm:text-6xl lg:text-7xl"
          >
            UI/UX{" "}
            <span className="text-orange-500">Designer</span>
          </Motion.h1>

          <Motion.p
            custom={0.24}
            variants={fadeUp}
            className="mt-5 max-w-md text-base leading-7 text-orange-100/50"
          >
            {profile.intro}
          </Motion.p>

          <Motion.div custom={0.32} variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-b from-orange-400 to-orange-600 px-7 py-3 text-sm font-semibold text-[#1a0f06] shadow-[0_8px_24px_rgba(249,115,22,0.35)] transition hover:-translate-y-0.5"
            >
              Hire Me
            </a>
            <a
              href="/Tanushree-Soni-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 px-7 py-3 text-sm font-semibold text-orange-200 transition hover:-translate-y-0.5 hover:border-orange-400"
            >
              Download CV <HiArrowRight />
            </a>
          </Motion.div>

          {/* Testimonial card */}
          <Motion.div
            custom={0.4}
            variants={fadeUp}
            className="mt-10 max-w-xs rounded-2xl border border-orange-500/20 bg-[rgba(255,237,213,0.06)] p-4 backdrop-blur-sm"
          >
            <p className="text-xs leading-5 text-orange-100/50">
              I want to take myself to the next level by working on elegant interfaces, strong visual systems, and practical products.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-b from-orange-400 to-orange-600 text-xs font-bold text-[#1a0f06]">
                TS
              </div>
              <div>
                <p className="text-sm font-semibold text-orange-100">Tanushree Soni</p>
                <p className="text-xs text-orange-400/60">Creative frontend portfolio</p>
              </div>
            </div>
          </Motion.div>

          {/* Social links */}
          <Motion.div custom={0.48} variants={fadeUp} className="mt-8 flex gap-3">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-500/25 text-orange-300 transition hover:border-orange-400 hover:text-orange-400"
            >
              <FaGithub />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-500/25 text-orange-300 transition hover:border-orange-400 hover:text-orange-400"
            >
              <FaLinkedinIn />
            </a>
          </Motion.div>
        </Motion.div>

        {/* RIGHT — avatar card */}
        <Motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative flex min-h-[480px] items-end justify-center overflow-hidden rounded-[2.5rem] border border-orange-500/20"
          style={{ background: "linear-gradient(180deg, rgba(255,237,213,0.07) 0%, rgba(234,88,12,0.12) 100%)" }}
        >
          {/* Lightning bolts */}
          <div className="absolute -left-5 top-10 h-28 w-14 skew-y-[-18deg] rounded-lg bg-gradient-to-b from-orange-400 to-orange-600 shadow-[0_12px_28px_rgba(249,115,22,0.3)]" />
          <div className="absolute left-7 top-28 h-18 w-9 skew-y-[18deg] rounded-lg bg-gradient-to-b from-orange-300 to-orange-500 opacity-80" />
          <div className="absolute right-6 top-8 flex h-28 w-14 rotate-[18deg] flex-col justify-between">
            <span className="h-10 w-full skew-y-[22deg] rounded-lg bg-gradient-to-b from-orange-400 to-orange-600 shadow-[0_10px_24px_rgba(249,115,22,0.2)]" />
            <span className="h-12 w-9 self-end skew-y-[-22deg] rounded-lg bg-gradient-to-b from-orange-400 to-orange-600 shadow-[0_10px_24px_rgba(249,115,22,0.2)]" />
          </div>

          {/* Orbit rings */}
          <div className="absolute inset-x-8 bottom-16 top-14 rounded-full border border-orange-500/15" />
          <div className="absolute inset-x-16 bottom-16 top-20 rounded-full border border-orange-500/10" />
          <div className="absolute inset-x-24 bottom-16 top-28 rounded-full border border-orange-500/08" />

          {/* Floating skill badges */}
          <div className="absolute left-8 top-1/2 flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/20 bg-[rgba(255,237,213,0.08)] text-xs font-black text-orange-200 backdrop-blur-sm">
            AI
          </div>
          <div className="absolute left-24 top-20 flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/20 bg-[rgba(255,237,213,0.08)] text-orange-400 backdrop-blur-sm">
            <HiSparkles />
          </div>
          <div className="absolute right-14 top-24 flex h-10 w-10 items-center justify-center rounded-full border border-orange-500/20 bg-[rgba(255,237,213,0.08)] text-orange-400 backdrop-blur-sm">
            <FaLinkedinIn />
          </div>

          {/* Avatar figure */}
          <div className="relative z-10 flex flex-col items-center pb-6">
            {/* Head */}
            <div className="h-24 w-24 rounded-full bg-gradient-to-b from-[#f5c5a3] to-[#e8a07a] shadow-[0_8px_20px_rgba(0,0,0,0.3)]" />
            {/* Neck */}
            <div className="-mt-3 h-8 w-12 rounded-b-full bg-[#e8a07a]" />
            {/* Body / hoodie */}
            <div className="-mt-1 h-52 w-60 rounded-t-[4rem] rounded-b-[2rem] bg-gradient-to-b from-orange-500 to-orange-700 shadow-[0_20px_40px_rgba(234,88,12,0.35)]" />
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
