// import Link from "next/link";
import DyslexicTextToggle from "./dyslexic-text-toggle";
import ThemeToggle from "./theme-toggle";
export default function MainNavbarComponent() {
  return (
    <>
      <div className="flex justify-evenly">
        <p>Logo</p>
        <div className="flex">
          <ThemeToggle />
          <DyslexicTextToggle />
        </div>
      </div>
    </>
  );
}
