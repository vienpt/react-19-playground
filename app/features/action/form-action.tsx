import { useActionState, useRef } from "react";
import { updateEmail } from "./action";
import { common } from "~/lang/en-US.json";
import type { FormEmailData } from "./interface";

export default function FormAction({
  updateData,
}: {
  updateData: (item: FormEmailData | null) => void;
}) {
  const [formState, formAction, isPending] = useActionState(updateEmail, null);
  const input = useRef(null);

  if (formState?.success) {
    updateData(formState?.data);
  }

  return (
    <>
      <form action={formAction} className="grid min-w-sm mx-auto gap-2">
        <input
          ref={input}
          autoFocus
          className="border-rounded p-1 h-8 focus:border-blue-400"
          type="text"
          name="email"
        />
        <button
          type="submit"
          disabled={isPending}
          className="font-bold bg-orange-500 p-1 rounded-md px-4 border hover:cursor-pointer hover:bg-orange-400"
        >
          {isPending ? common.loadingText : common.update}
        </button>
        <p
          className={
            !formState?.success ? "pb-10 text-red-500" : "pb-10 text-green-500"
          }
        >
          {formState?.message}
        </p>
      </form>

      {/* <pre>{JSON.stringify(formState?.data, null, 2)}</pre> */}
    </>
  );
}
