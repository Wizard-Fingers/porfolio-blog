import ThemeToggle from "./theme-toggle";
import DyslexicTextToggle from "./dyslexic-text-toggle";
export default function MobileNavLayout() {
  return (
    <>
      <div>
        <p>Logo</p>
        <div>
          <ThemeToggle />
          <DyslexicTextToggle />
        </div>
      </div>
    </>
  );
}
