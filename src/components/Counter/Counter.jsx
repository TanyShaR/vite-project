import "./Counter.css";

export const Counter = ({ count, onIncrement }) => {
  return (
    <div className="counter">
      <div className="counter__value">{count}</div>
      <div className="counter__icon">🩵</div>
      <button className="counter__button" onClick={onIncrement}>
        Like
      </button>
    </div>
  );
};
