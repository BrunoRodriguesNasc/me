import React from "react";

const WorkedWith: React.FC = () => {
  const companies = ["Ahgora Sistemas"];

  return (
    <div className="flex justify-center items-center mb-5">
      <div className="w-5/6">
        <h3 className="font-bold mb-4">Worked At</h3>
        <div className="flex items-start flex-wrap gap-2.5 mt-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="w-60 p-4 rounded-lg border-2 border-[#9C9C9C] text-[#9C9C9C]">
              {company}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkedWith;
