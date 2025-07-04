export const Task = ({ completed, children, deadline }) => {
    const className = completed ? "completed" : "";
    return (
    <div className={className}>
        (bis {deadline}) {children}
        </div>
    );
};