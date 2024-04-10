import "./Button.css";

export default function Button({ children, onClick, className, variant }) {
  const buttonStyle = variant == "outline" ? "btn-outline" : "btn";

  return (
    <button className={`custom-button ${buttonStyle} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
