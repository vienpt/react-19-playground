import { Suspense } from "react";
import type { RandomItem } from "./interface";
import Random from "./random";
import { pageFetchPromise } from "~/lang/en-US.json";

async function fetchRandomData() {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const result = (await response.json()) as RandomItem;

  return result;
}

export default function RandomContainer() {
  return (
    <div>
      <Suspense fallback={<p>⌛{pageFetchPromise.fetchingRandom}...</p>}>
        <Random randomPromise={fetchRandomData()} />
      </Suspense>
    </div>
  );
}
