import type { CSSProperties, ReactNode } from "react";
import { Utensils, Plane, ShoppingBag, FileText, type LucideIcon } from "lucide-react";
import type { Cat } from "../data";
import "./ui.css";

export const cx = (...a: (string | false | undefined)[]) => a.filter(Boolean).join(" ");
export const cssVars = (v: Record<string, string | undefined>) => v as CSSProperties;
export const catVar = (c: Cat) => `var(--c-${c.toLowerCase()})`;
export const CAT_ICON: Record<Cat, LucideIcon> = { Food: Utensils, Travel: Plane, Shopping: ShoppingBag, Bills: FileText };

export const Coin = ({ size = 40, children = "₹" }: { size?: number; children?: ReactNode }) => (
  <span className="ui-coin" style={cssVars({ "--s": `${size}px` })}>{children}</span>
);
export const CatBadge = ({ cat }: { cat: Cat }) => {
  const I = CAT_ICON[cat];
  return <span className="ui-cat" style={cssVars({ "--c": catVar(cat) })}><I size={18} strokeWidth={2.4} /></span>;
};
export const Bar = ({ v, tone, color }: { v: number; tone?: string; color?: string }) => (
  <div className={cx("ui-bar", tone)} style={cssVars({ "--v": `${Math.min(v, 100)}%`, "--c": color })}><i /></div>
);
export const Insight = ({ tone, title, body }: { tone: string; title: string; body: string }) => (
  <div className={cx("ui-ins", tone)}><h3>{title}</h3><p>{body}</p></div>
);
export const Head = ({ title, sub, children }: { title: string; sub: string; children?: ReactNode }) => (
  <div className="ui-head"><div><h2>{title}</h2><p>{sub}</p></div>{children}</div>
);
export function Chips<T extends string>({ items, value, onChange }: { items: readonly T[]; value: T; onChange: (v: T) => void }) {
  return (
    <div className="ui-chips">{items.map((i) => (
      <button key={i} type="button" className={cx("ui-chip", i === value && "on")} onClick={() => onChange(i)}>{i}</button>
    ))}</div>
  );
}
export const Toggle = ({ on, onClick, label }: { on: boolean; onClick: () => void; label: string }) => (
  <button type="button" role="switch" aria-checked={on} aria-label={label} className={cx("ui-tog", !on && "off")} onClick={onClick} />
);
