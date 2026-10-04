import { AlertTriangle, Plus } from "lucide-react";
import { BUDGETS, inr } from "../data";
import { Bar, CatBadge, Head, catVar } from "../components/ui";
import "./Budgets.css";

export default function Budgets() {
  return (
    <div className="bu">
      <Head title="Budgets" sub="Monthly limits for every category."><button className="bu-new"><Plus size={18} /> New budget</button></Head>
      <div className="bu-alert"><AlertTriangle size={24} /><div><b>Shopping is at 87%</b><p>Only 9 days left this month — slow down to stay on track.</p></div></div>
      <div className="bu-grid">
        {BUDGETS.map((b) => {
          const pct = Math.round((b.used / b.limit) * 100);
          const tone = pct > 100 ? "bad" : pct >= 80 ? "warn" : "";
          const label = pct > 100 ? "Over budget" : pct >= 80 ? "Almost there" : "On track";
          return (
            <section className="bu-card" key={b.cat}>
              <div className="bu-top"><CatBadge cat={b.cat} /><h3>{b.cat}</h3><span className={`bu-pill ${tone}`}>{label}</span></div>
              <Bar v={pct} tone={tone} color={tone ? undefined : catVar(b.cat)} />
              <p>{inr(b.used)} of {inr(b.limit)} · {pct > 100 ? `${inr(b.used - b.limit)} over` : `${inr(b.limit - b.used)} left`}</p>
            </section>
          );
        })}
      </div>
    </div>
  );
}
