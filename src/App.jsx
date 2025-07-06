import { useState } from "react";
import "./App.css";
import { About } from "./components/About";
import { Job } from "./components/Job";
import { TaskList } from "./components/TaskList";
import { ThemeSwitch } from "./components/ThemeSwitch/ThemeSwitch";
import { Counter } from "./components/Counter/Counter";

const tasks = [
  {
    id: 1,
    title: "Farben",
    deadline: "23:59",
    completed: true,
  },
  {
    id: 2,
    deadline: "01-01-2026",
    title: "Digital",
  },
];

function App() {
  const [count, setCount] = useState(0);
  const incCount = () => setCount((x) => x + 1);

  return (
    <>
      <Counter count={count} onIncrement={incCount}/>
      <ThemeSwitch />
      <About />
      <Job
        title="Kino Union Filmtheater. Berlin"
        post="Praktikantin"
        description="Entwicklung von Layouts für Außen- und Innenwerbung"
      />
      <Job
        title="Freiberuflerin"
        post="Illustratorin"
        description="Motion Design und Animation, entwicklung interaktiver 2D-Hintergründe für Theaterstück "
      />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
