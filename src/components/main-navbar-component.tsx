import MobileNavLayout from "./ui/mobile-nav-layout";
import DesktopNavLayout from "./ui/desktop-nav-layout";

// styles
const styles = {
  nav: "w-full h-10",
  mobileDiv: "lg:hidden w-full h-10",
  desktopDiv: "hidden lg:block w-full h-10",
};

export default function MainNavbarComponent() {
  return (
    <nav className={styles.nav}>
      <div className={styles.mobileDiv}>
        <MobileNavLayout />
      </div>
      <div className={styles.desktopDiv}>
        <DesktopNavLayout />
      </div>
    </nav>
  );
}
