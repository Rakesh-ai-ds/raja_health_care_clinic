import { useEffect } from "react";
import theme from "../theme.json";

export function ThemeInitializer() {
    useEffect(() => {
        const root = document.documentElement;

        // Apply Light Mode Colors
        Object.entries(theme.light).forEach(([key, value]) => {
            root.style.setProperty(`--${key}`, value);
        });

        // We can't easily use media queries or .dark class purely via inline styles for all variables 
        // without a more complex listener, but for the most direct client-friendly approach, 
        // we inject the variables that Tailwind uses.

        // To handle dark mode specifically if the .dark class is present:
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "attributes" && mutation.attributeName === "class") {
                    const isDark = root.classList.contains("dark");
                    const activeTheme = isDark ? theme.dark : theme.light;

                    Object.entries(activeTheme).forEach(([key, value]) => {
                        root.style.setProperty(`--${key}`, value);
                    });
                }
            });
        });

        observer.observe(root, { attributes: true });

        // Initial check
        const isDark = root.classList.contains("dark");
        const initialTheme = isDark ? theme.dark : theme.light;
        Object.entries(initialTheme).forEach(([key, value]) => {
            root.style.setProperty(`--${key}`, value);
        });

        return () => observer.disconnect();
    }, []);

    return null;
}
