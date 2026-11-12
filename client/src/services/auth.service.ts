import { IUser } from "../types/user";

export async function registerUser(userData: IUser) {
  const response = await fetch("http://localhost:5000/api/user/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    console.log("status:", response.status, "body:", result);
    throw new Error(result.error || `Failed with status ${response.status}`);
  }

  return result;
}
