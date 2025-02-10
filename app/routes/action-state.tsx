import { useState } from "react";
import { NavLink } from "react-router";
import FormAction from "~/features/action/form-action";
import { common } from "~/lang/en-US.json";
import { pageActionState } from "~/lang/en-US.json";

export default function ActionState() {
  const [updateEmailData, setUpdateEmailData] = useState<string | undefined>();

  return (
    <div className="flex flex-col">
      <span>{pageActionState.title}</span>
      <FormAction updateData={(item) => setUpdateEmailData(item?.email)} />

      <pre>{updateEmailData}</pre>

      <NavLink to={"/"} className="font-bold text-blue-400 underline">
        {common.backHome}
      </NavLink>
    </div>
  );
}
