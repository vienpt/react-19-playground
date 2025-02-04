import { use } from "react";
import type { RandomItem } from "./interface";

export default function Random({
  randomPromise,
}: {
  randomPromise: Promise<RandomItem>;
}) {
  const result = use(randomPromise);
  let data = JSON.stringify(result, null, 2);

  return (
    <div className="p-4">
      <pre className="bg-zinc-300 p-1 rounded overflow-auto text-lg">
        {data}
      </pre>
    </div>
  );
}
