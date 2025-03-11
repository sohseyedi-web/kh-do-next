import { Suspense } from "react";
import StatsWrapper from "../_/components/stats/StatsWrapper";
import LatesBlog from "../_/components/blogs/LatesBlog";

export default async function PanelHome() {
  return (
    <section className="max-w-7xl mx-auto">
      <Suspense>
        <StatsWrapper />
      </Suspense>
      <hr className="my-3 bg-zinc-700" />
      <Suspense>
        <LatesBlog />
      </Suspense>
    </section>
  );
}
