import Image from "next/image";
import React from "react";

const Main: React.FC = () => {
  return (
    <main className="flex justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4 w-5/6">
        <div className="md:w-1/2 p-4">
          <h1 className="text-4xl font-bold mb-4">Bruno Rodrigues</h1>
          <p className="text-lg ">
            Hey there! Im Bruno Rodrigues, a passionate Full Stack Developer
            with a knack for bringing ideas to life through code. With years of
            experience building scalable web applications, I've worked with some
            of Brazil largest companies, creating APIs and robust solutions to
            enhance user experiences. I’m proficient in a wide range of
            technologies like JavaScript, Next.js, React, PHP, and Node.js, and
            I enjoy tackling complex problems head-on. My goal is to use my
            skills to empower people and create impactful solutions that make a
            difference in the tech world.
          </p>
        </div>
        <div className="md:w-1/2 p-4 flex justify-center">
          <Image
            className="rounded-full"
            src="/portfolio.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
