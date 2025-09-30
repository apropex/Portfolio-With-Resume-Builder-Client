//

"use server";

import apiLink from "@/utils/apiLink";
import { FieldValues } from "react-hook-form";

export const register = async (data: FieldValues) => {
  const res = await fetch(apiLink("/user"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res?.ok) console.log("user reg failed", await res.text());

  return await res.json();
};

export const login = async (data: FieldValues) => {
  const res = await fetch(apiLink("/auth/login"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res?.ok) console.log("user login failed", await res.text());

  return await res.json();
};
