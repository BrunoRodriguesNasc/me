import React from "react";
import Image from "next/image";

const Section: React.FC = () => {
  return (
    <main className="flex justify-center min-h-screen items-center p-4">
      <div className="terminal-window w-full max-w-4xl flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <div className="mb-8">
            <p className="text-gray-400 text-sm md:text-base">Hi all. I am</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Bruno Rodrigues</h1>
            <div className="text-lg md:text-xl text-[#8A8AFF]">
              {'>'} <span className="typing">Full Stack Developer</span>
            </div>
          </div>
          
          <div className="text-gray-300 mt-6">
            <p className="mb-4 text-sm md:text-base">// about me</p>
            <div className="pl-4 text-sm md:text-base">
              Hey there! I'm Bruno Rodrigues, a passionate Full Stack Developer
              with a knack for bringing ideas to life through code.
            </div>
          </div>

          <div className="mt-6">
            <p className="text-gray-400 text-sm md:text-base">// find my profile on Github</p>
            <div className="text-[#8A8AFF] text-sm md:text-base break-all">
              const <span className="text-[#FF8C42]">githubLink</span> = 
              "<a href="https://github.com/BrunoRodriguesNasc" 
                  className="hover:text-[#FF8C42]">
                https://github.com/BrunoRodriguesNasc
              </a>"
            </div>
          </div>
        </div>

        <div className="md:flex-shrink-0 order-first md:order-last mb-8 md:mb-0">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#8A8AFF]">
            <Image
              src="/me.jpg"
              alt="Bruno Rodrigues"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Section;