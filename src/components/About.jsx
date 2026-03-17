import { motion as Motion } from "framer-motion";
import profile  from "./../assets/Gemini_Generated_Image_bgf6ozbgf6ozbgf6.png";

export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-screen w-full items-center justify-center bg-[var(--portfolio-gradient)] px-6 py-16 sm:px-8 lg:px-12"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-16">
        <Motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="mx-auto w-full max-w-[340px] overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] sm:max-w-[380px]"
        >
          <img src={profile} alt="profile" className="h-[430px] w-full object-cover sm:h-[520px]" />
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="w-full max-w-3xl text-center lg:text-left"
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            About Me
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[1.15] text-[var(--color-ink)] sm:text-5xl lg:text-[3.2rem]">
            My name is Tanushree and I <span className="text-[var(--color-accent)]">design</span> and{" "}
            <span className="text-[var(--color-accent)]">build</span> clean digital experiences.
          </h2>
          <p className="mt-6 max-w-3xl text-sm leading-[1.8] text-[var(--color-muted)] sm:text-[15px]">
            I&apos;m a software developer and IT trainer who enjoys creating web experiences that feel
            thoughtful, modern, and easy to use. My work blends frontend design, practical
            implementation, and a calm visual style so each project feels both polished and useful.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-[1.8] text-[var(--color-muted)] sm:text-[15px]">
            Beyond building interfaces, I also love helping people learn technology with more clarity and
            confidence. I care about details, readability, and making products that leave a strong first
            impression.
          </p>
        </Motion.div>
      </div>
    </section>
  );
}
