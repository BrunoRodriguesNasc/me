import Main from "./components/main";
import Navbar from "./components/navbar";
import WorkedWith from "./components/workedWith";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Main></Main>
      <WorkedWith></WorkedWith>
    </div>
  );
}
