import "./App.css";
import { Title } from "./components/Title/Title";
import Intro from "./components/Intro/Intro";
import IconTray from "./components/IconTray/IconTray";

function App() {
  return (
    <div className="App bg-emerald-300 h-screen flex flex-col px-20">
      <div className="gap-7 flex flex-col justify-around items-baseline relative top-1/2 -translate-y-full p-4 ml-15">
        <Title />
        <Intro />
        <IconTray />
      </div>
    </div>
  );
}

export default App;
