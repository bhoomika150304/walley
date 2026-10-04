import type { ReactNode } from "react";
import { Bell, Coins, LayoutDashboard, Moon, PieChart, PiggyBank, Receipt, Settings, Sun, Target, Wallet, type LucideIcon } from "lucide-react";
import { PAGES, type Page } from "../hooks";
import "./Layout.css";

const NAV: Record<string, [string, LucideIcon]> = {
  overview: ["Overview", LayoutDashboard], spending: ["Spending", Wallet], analytics: ["Analytics", PieChart],
  budgets: ["Budgets", Target], goals: ["Goals", PiggyBank], bills: ["Bills", Receipt], settings: ["Settings", Settings],
};

export default function Layout({ page, dark, toggle, children }: { page: Page; dark: boolean; toggle: () => void; children: ReactNode }) {
  return (
    <div className="ly-app">
      <aside className="ly-side">
        <a className="ly-logo" href="#home"><Coins size={22} strokeWidth={2.4} />Walley</a>
        <nav className="ly-nav" aria-label="Main">
          {PAGES.map((p) => {
            const [label, I] = NAV[p];
            return (
              <a key={p} href={`#${p}`} className={p === page ? "on" : ""} aria-current={p === page ? "page" : undefined}>
                <I size={22} strokeWidth={2.2} /><span>{label}</span>
              </a>
            );
          })}
        </nav>
        <div className="ly-tip"><PiggyBank size={26} /><p>Set a budget for every category to unlock smarter insights.</p></div>
      </aside>
      <main className="ly-main">
        <div className="ly-tools">
          <button type="button" className="ly-ib" aria-label="Notifications"><Bell size={20} /></button>
          <button type="button" className="ly-ib" onClick={toggle} aria-label="Toggle dark mode">{dark ? <Moon size={20} /> : <Sun size={20} />}</button>
          <div className="ly-av">B</div>
        </div>
        {children}
      </main>
    </div>
  );
}
