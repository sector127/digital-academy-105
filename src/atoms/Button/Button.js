export const Button = ({ className, text, onClick, type = 'button' }) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {text}
    </button>
  );
};
