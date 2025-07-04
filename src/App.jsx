import './App.css'
import { About } from './components/About';
import { Job } from './components/Job';
import { TaskList } from './components/TaskList';

const tasks = [
    {
        id: 1,
        title: "Farben",
        deadline: '23:59',
        completed: true,
    },
    {
        id: 2,
        deadline: '01-01-2026',
        title: "Digital",
    },
];

function App() {
  return (
    <>
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
