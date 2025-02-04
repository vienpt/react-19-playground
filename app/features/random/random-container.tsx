import { Suspense, useState } from "react";
import type { RandomItem } from "./interface";
import Random from "./random";

async function fetchRandomData() {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const result = (await response.json()) as RandomItem;

  return result;
}

export default function RandomContainer() {
  return (
    <div>
      <Suspense fallback={<p>⌛Fetching random...</p>}>
        <Random randomPromise={fetchRandomData()} />
      </Suspense>
    </div>
  );
}
