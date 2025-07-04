import { Task } from "./Task";

export const TaskList = ({ tasks }) => {
    return (
        <div>
            {tasks.map((task) => (
                /* <Task key={task.id} completed={task.completed} deadline={task.deadline}>{task.title}</Task> */
                <Task key={task.id} {...task}>
                    {task.title}
                    </Task>
            ))}
            {/* <Task completed>Farben</Task>
            <Task>Digital</Task> */}
        </div>
    );
}