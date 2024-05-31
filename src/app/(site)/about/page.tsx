import Link from "next/link";
import Container from "@/components/container";

export default function About() {
  return (
    <Container title="About – Girish Chaudhari">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          /about
        </h1>
        <p className="text-black dark:text-white mb-4">
          My name is Girish Chaudhari, and I am a Web Developer from{" "}
          <a
            href="https://en.wikipedia.org/wiki/Jalgaon_district"
            target="blank"
            rel="noopener noreferrer"
          >
            Maharashtra, India
          </a>
          .
        </p>
        <p className="text-black dark:text-white mb-4">
          I am currently a Software Developer at Visaero India. Before this, I
          worked full-time as a web developer for a local company. Here’s a
          summary of my journey and experience.
        </p>
        <h4>Visaero India</h4>
        <h5 className="text-gray-400/80 dark:text-slate-400 font-normal">Software Developer</h5>
        <p className="text-black dark:text-white mb-6">
          Since joining Visaero India, I have been involved in various projects,
          primarily focusing on web development using modern technologies like
          Next.js, React.js, and Prisma. My work includes developing scalable
          web applications, optimizing frontend performance, and collaborating
          with cross-functional teams to deliver high-quality software
          solutions.
        </p>
        <h4>Reflections and Lessons Learned: </h4>
        <p className="text-black dark:text-white mb-6">
          In the final section, I'll reflect on my journey so far and share the
          key lessons I've learned. I'll discuss the importance of perseverance,
          adaptability, and a growth mindset in the software development
          industry. Additionally, I'll provide insights into building a
          successful career as a software developer, maintaining work-life
          balance, and setting realistic goals for professional growth.
        </p>
        <h4>ITCode Infotech</h4>
        <h5 className="text-gray-400/80 dark:text-slate-400 font-normal">Web Developer, sep, 2021 - sep - 2022</h5>
        <p className="text-black dark:text-white mb-6">
          At my previous job, I transitioned from completing my Bachelor's
          degree in Computer Applications to joining the workforce as a web
          developer. During this time, I gained valuable experience in the
          industry, working on diverse projects that enhanced my technical
          skills and industry knowledge.
        </p>

        <p className="text-black dark:text-white mb-6">
          Throughout my career, I have focused on continuous learning and
          improvement. I have worked on several personal coding projects, which
          have allowed me to acquire new skills and stay updated with the latest
          developments in web technologies.
        </p>

        <h2>Reflections and Lessons Learned: </h2>
        <p className="text-black dark:text-white mb-6">
          Reflecting on my journey so far, I have learned the importance of
          perseverance, adaptability, and maintaining a growth mindset in the
          software development industry. Key lessons include the significance of
          continuous learning, building a successful career through dedication
          and hard work, maintaining work-life balance, and setting realistic
          goals for professional growth.
        </p>
        <h2 className="text-black dark:text-white mb-4">Get in contact</h2>
        <ul>
          <li>
            {">  "}
            <a
              href="https://www.linkedin.com/in/girish-chaudhari-1595871aa/"
              target="blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            {">  "}
            <a
              href="mailto:girishvishnuc98@gmail.com"
              target="blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
}
