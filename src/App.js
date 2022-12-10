import "./App.css";
import IconTray from "./components/IconTray/IconTray";
import Intro from "./components/Intro/Intro";
import { Title } from "./components/Title/Title";

function App() {
  return (
    <div className="App bg-[#54BAB9] h-screen flex flex-col px-20">
      <div className="gap-7 flex flex-col justify-around items-baseline relative top-1/2 -translate-y-3/4 p-4 ml-15">
        <Title />
        <Intro />
        <IconTray />
      </div>
    </div>
  );
}

export default App;
