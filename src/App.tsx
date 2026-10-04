import { useState } from "react";
import { useRoute, useTheme } from "./hooks";
import { TXNS, type Txn } from "./data";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import Overview from "./pages/Overview";
import Spending from "./pages/Spending";
import Analytics from "./pages/Analytics";
import Budgets from "./pages/Budgets";
import Goals from "./pages/Goals";
import Bills from "./pages/Bills";
import Settings from "./pages/Settings";

export default function App() {
  const page = useRoute();
  const [dark, toggle] = useTheme();
  const [txns, setTxns] = useState<Txn[]>(TXNS);
  const add = (t: Omit<Txn, "id">) => setTxns((l) => [{ ...t, id: Date.now() }, ...l]);

  if (page === "home") return <Landing />;
  return (
    <Layout page={page} dark={dark} toggle={toggle}>
      {page === "overview" && <Overview txns={txns} />}
      {page === "spending" && <Spending txns={txns} add={add} />}
      {page === "analytics" && <Analytics />}
      {page === "budgets" && <Budgets />}
      {page === "goals" && <Goals />}
      {page === "bills" && <Bills />}
      {page === "settings" && <Settings />}
    </Layout>
  );
}
