//

"use server";

import apiLink from "@/utils/apiLink";
import { FieldValues } from "react-hook-form";

export const register = async (data: FieldValues) => {
  try {
    const res = await fetch(apiLink("/user"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`User registration failed: ${text}`);
    }

    const result = await res.json();

    if (!result.success) {
      throw new Error(result.message || "Registration failed");
    }

    return result;
  } catch (error) {
    console.error("Register Error:", error);
    throw error; // Caller can handle it
  }
};

export const login = async (data: FieldValues) => {
  try {
    const res = await fetch(apiLink("/auth/login"), {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`User login failed: ${text}`);
    }

    const result = await res.json();

    if (!result.success) {
      throw new Error(result.message || "Login failed");
    }

    return result.data;
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
};
