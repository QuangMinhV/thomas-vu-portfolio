import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const KEY = "theme";

/** Runs in <head> before first paint so a saved light theme never flashes dark. */
export const themeInitScript = `try{if(localStorage.getItem("${KEY}")==="light")document.documentElement.classList.add("light")}catch(e){}`;

/** Sun/moon button that switches between the dark (default) and light theme. */
export function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    setLight(document.documentElement.classList.contains("light"));
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem(KEY, next ? "light" : "dark");
    } catch {
      /* storage unavailable: theme still switches for this visit */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
      title={light ? "Dark mode" : "Light mode"}
      className="rounded-full p-1.5 text-muted-foreground transition-colors hover:text-primary"
    >
      {light ? <Moon className="h-4 w-4" aria-hidden="true" /> : <Sun className="h-4 w-4" aria-hidden="true" />}
    </button>
  );
}
