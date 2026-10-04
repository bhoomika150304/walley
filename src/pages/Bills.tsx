import { Clapperboard, CalendarClock, Home, Plus, Repeat, ShieldCheck, Smartphone, Zap, type LucideIcon } from "lucide-react";
import { BILLS, inr } from "../data";
import { Head } from "../components/ui";
import "./Bills.css";

const ICONS: Record<string, LucideIcon> = { home: Home, zap: Zap, film: Clapperboard, phone: Smartphone, shield: ShieldCheck, repeat: Repeat };

export default function Bills() {
  return (
    <div className="bi">
      <Head title="Bills & subscriptions" sub="Never miss a payment again."><button className="bi-new"><Plus size={18} /> Add bill</button></Head>
      <div className="bi-stats">
        {[["Due this week", 1648], ["Monthly total", 17940]].map(([l, v]) => <div className="bi-stat" key={l}><CalendarClock size={22} /><small>{l}</small><b>{inr(v as number)}</b></div>)}
        <div className="bi-stat"><Repeat size={22} /><small>Active bills</small><b>6</b></div>
      </div>
      <section className="bi-list">
        {BILLS.map((b) => {
          const I = ICONS[b.icon];
          return (
            <div className="bi-row" key={b.name}>
              <span className="bi-ic"><I size={22} strokeWidth={2.2} /></span>
              <div><b>{b.name}</b><small>{b.sub}</small></div>
              <span className={`bi-pill ${b.tone}`}>{b.when}</span>
              <strong>{inr(b.amt)}</strong>
            </div>
          );
        })}
      </section>
    </div>
  );
}
