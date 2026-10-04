import { useEffect, useState } from "react";

export const PAGES = ["overview", "spending", "analytics", "budgets", "goals", "bills", "settings"] as const;
export type Page = (typeof PAGES)[number] | "home";

const read = (): Page => {
  const h = (location.hash || "#home").slice(1);
  return (PAGES as readonly string[]).includes(h) ? (h as Page) : "home";
};

export function useRoute(): Page {
  const [page, setPage] = useState<Page>(read);
  useEffect(() => {
    const on = () => {
      setPage(read());
      if (!/^#(features|how)$/.test(location.hash)) window.scrollTo(0, 0);
    };
    addEventListener("hashchange", on);
    return () => removeEventListener("hashchange", on);
  }, []);
  return page;
}

export function useTheme() {
  const [dark, setDark] = useState(() => {
    const s = localStorage.getItem("walley-theme");
    return s ? s === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  });
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("walley-theme", dark ? "dark" : "light");
  }, [dark]);
  return [dark, () => setDark((d) => !d)] as const;
}
