import Image from "next/image";
import React from "react";

const Section: React.FC = () => {
  return (
    <main className="flex justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4 w-5/6">
        <div className="md:w-1/2 p-4">
          <h1 className="text-4xl font-bold mb-4">Bruno Rodrigues</h1>
          <p className="text-lg ">
                 Hey there! I&lsquo;m Bruno Rodrigues, a passionate Full Stack Developer
            with a knack for bringing ideas to life through code. With years of
            experience building scalable web applications, I&apos;ve worked with some
            of Brazil&apos;s largest companies, creating APIs and robust solutions to
            enhance user experiences. II&lsquo;m proficient in a wide range of
            technologies like JavaScript, Next.js, React, PHP, and Node.js, and
            I enjoy tackling complex problems head-on. My goal is to use my
            skills to empower people and create impactful solutions that make a
            difference in the tech world.
          </p>
        </div>
        <div className="md:w-1/2 p-4 flex justify-center">
          <Image 
            className="rounded-full"
            src="/me.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
    </main>
  );
};

export default Section;