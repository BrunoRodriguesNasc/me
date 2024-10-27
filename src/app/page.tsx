import Section from "./components/section";
import Navbar from "./components/navbar";
import WorkedWith from "./components/workedWith";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Section></Section>
      <WorkedWith></WorkedWith>
    </div>
  );
}
