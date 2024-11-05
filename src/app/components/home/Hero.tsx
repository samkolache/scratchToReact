import Image from "next/image";

const Hero = () => {
  return (
    <section className="py-10 mt-12">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 md:px-8">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold">
            From Raw Code to React Components
          </h1>
          <p className="text-base md:text-lg">
            Strengthen your web development foundations by mastering the basics.
            Start by learning to create essential web components with HTML, CSS,
            and JavaScript. Then, take your skills to the next level by building
            those same components using the powerful React framework, unlocking
            new possibilities for dynamic, modern applications.
          </p>
        </div>
        <div className="hidden md:block">
          <Image
            src="/hero-ill.svg"
            alt="Web design illustration"
            width={400}
            height={250}
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
