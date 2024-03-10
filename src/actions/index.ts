"use server";
import * as auth from "@/auth";

// Server action to sign in/out
export async function signIn() {
  return auth.signIn("github");
}

export async function signOut() {
  return auth.signOut();
}
