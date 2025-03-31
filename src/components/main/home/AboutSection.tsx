import SectionName from "@/components/common/SectionName";

const AboutSection = () => {
  return (
    <section className="space-y-3 pr-3 text-balance">
      <SectionName name="About Me" />
      <p className="text-2xl font-medium text-white">
        I’m a <span className="text-gradient-top">Full Stack Developer</span>{" "}
        and creator of courses, templates, wireframe kits, and the occasionally
        useful side-project.
      </p>
      <p className="text-white2 text-lg">
        I&apos;m a skilled Full Stack software developer with experience in
        TypeScript and JavaScript, and expertise in frameworks like React,
        Node.js, MongoDB and Express.js. I&apos;m a quick learner and
        collaborate closely with clients to create efficient, scalable, and
        user-friendly solutions that solve real-world problems. Let&apos;s work
        together to bring your ideas to life! web-development Frontend Developer
        web-development React.js Developer web-development Backend Developer
      </p>
    </section>
  );
};

export default AboutSection;
