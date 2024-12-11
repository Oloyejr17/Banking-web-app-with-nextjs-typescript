interface HeaderBoxProps {
  type: "title" | "greeting";
  title: string;
  subtext: string;
  user?: string; // Optional user prop for greeting
}

const HeaderBox = ({ type = "title", title, subtext, user }: HeaderBoxProps) => {
  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {title}
        {type === 'greeting' && user && ( // Ensure user exists for greeting
          <span className="text-bankGradient">
            &nbsp;{user}
          </span>
        )}
      </h1>
      <p className="header-box-subtext">{subtext}</p>
    </div>
  );
};

export default HeaderBox;
