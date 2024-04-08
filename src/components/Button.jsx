import "./Button.css";

export default function Button({ children, onClick, className, type }) {
  const buttonStyle = type == "outline" ? "btn-outline" : "btn";

  return (
    <button className={`custom-button ${buttonStyle} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
