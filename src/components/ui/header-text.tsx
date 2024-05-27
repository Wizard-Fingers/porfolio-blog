interface HeaderTextProps {
  text: string;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

const HeaderText = ({
  text,
  level = "h1",
  className = "",
}: HeaderTextProps) => {
  const headerClasses = {
    h1: "space-grotesk text-4xl lg:text-5xl xl:text-6xl font-bold drop-shadow-lg tracking-tight",
    h2: "space-grotesk text-3xl lg:text-4xl xl:text-5xl font-bold drop-shadow-lg tracking-tight",
    h3: "space-grotesk text-2xl lg:text-3xl xl:text-4xl font-bold drop-shadow-lg tracking-tight",
    h4: "space-grotesk text-xl lg:text-2xl xl:text-3xl font-bold drop-shadow-lg tracking-tight",
    h5: "space-grotesk text-lg lg:text-xl xl:text-2xl font-bold drop-shadow-lg tracking-tight",
    h6: "space-grotesk text-base lg:text-lg xl:text-xl font-bold drop-shadow-lg tracking-tight",
  };

  const HeaderTag = level;

  return (
    <div className="opacity-0 animate-fade-in">
      <HeaderTag
        className={`text-lightCol2 dark:text-darkCol2 ${headerClasses[level]} ${className}`}
      >
        {text.split("").map((letter, index) => (
          <span
            key={index}
            className="inline-block opacity-0 animate-fade-in-up hover:scale-150 hover:text-lightCol3 dark:hover:text-darkCol4 transition-all duration-300"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {letter}
            {letter === " " && <span>&nbsp;</span>}
          </span>
        ))}
      </HeaderTag>
    </div>
  );
};

export default HeaderText;
