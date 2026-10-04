import { useMemo, useState, type FormEvent } from "react";
import { PlusCircle, Repeat, Search } from "lucide-react";
import { CATS, inr, type Cat, type Txn } from "../data";
import { CatBadge, Chips, Head } from "../components/ui";
import "./Spending.css";

type Filter = "All" | Cat | "Recurring";
const FILTERS: readonly Filter[] = ["All", ...CATS, "Recurring"];

export default function Spending({ txns, add }: { txns: Txn[]; add: (t: Omit<Txn, "id">) => void }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [q, setQ] = useState("");
  const [f, setF] = useState({ amt: "", cat: "Food" as Cat, date: "", note: "", rep: "One-time" });
  const shown = useMemo(() => txns.filter((t) =>
    (filter === "All" || (filter === "Recurring" ? t.rec : t.cat === filter)) && t.name.toLowerCase().includes(q.toLowerCase())), [txns, filter, q]);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const amt = Number(f.amt);
    if (!amt || amt <= 0) return;
    const d = f.date ? new Date(f.date) : new Date();
    add({ name: f.note.trim() || f.cat, cat: f.cat, amt, rec: f.rep !== "One-time", date: d.toLocaleDateString("en-GB", { day: "numeric", month: "short" }) });
    setF({ ...f, amt: "", note: "" });
  };
  return (
    <div className="sp">
      <Head title="Spending" sub="Add, search and review every transaction." />
      <form className="sp-card sp-form" onSubmit={submit}>
        <h3><PlusCircle size={20} /> Add expense</h3>
        <div className="sp-fields">
          <label>Amount (₹)<input type="number" min="1" placeholder="0.00" value={f.amt} onChange={(e) => setF({ ...f, amt: e.target.value })} required /></label>
          <label>Category<select value={f.cat} onChange={(e) => setF({ ...f, cat: e.target.value as Cat })}>{CATS.map((c) => <option key={c}>{c}</option>)}</select></label>
          <label>Date<input type="date" value={f.date} onChange={(e) => setF({ ...f, date: e.target.value })} /></label>
          <label>Note<input placeholder="e.g. Lunch with friends" value={f.note} onChange={(e) => setF({ ...f, note: e.target.value })} /></label>
          <label>Repeat<select value={f.rep} onChange={(e) => setF({ ...f, rep: e.target.value })}><option>One-time</option><option>Weekly</option><option>Monthly</option></select></label>
          <button className="sp-save">Save expense</button>
        </div>
      </form>
      <section className="sp-card">
        <Chips items={FILTERS} value={filter} onChange={setFilter} />
        <label className="sp-search"><Search size={18} /><input type="search" aria-label="Search transactions" placeholder="Search transactions…" value={q} onChange={(e) => setQ(e.target.value)} /></label>
        <ul className="sp-list">
          {shown.map((t) => (
            <li key={t.id}>
              <CatBadge cat={t.cat} />
              <div><b>{t.name}{t.rec && <Repeat size={14} className="sp-rep" aria-label="Recurring" />}</b><small>{t.cat} · {t.date}</small></div>
              <span>−{inr(t.amt)}</span>
            </li>
          ))}
        </ul>
        {!shown.length && <p className="sp-empty">No transactions match. Clear the search or pick another category.</p>}
      </section>
    </div>
  );
}
