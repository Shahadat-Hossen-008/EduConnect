"use server";
import bcrypt from 'bcryptjs';
export const registerUser = async (payload) => {
  const { name, email, password } = payload;

  if (!email || !password) {
    return { success: false, message: "Email and password are required." };
  }

  try {
    const hashedpassword = await bcrypt.hash(password, 10)
    const res = await fetch("http://localhost:5000/user-collection", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, hashedpassword }),
    });

    if (!res.ok) {
      throw new Error(`Failed to register user: ${res.statusText}`);
    }
    const responseData = await res.json();
    console.log(responseData)
    return { success: true, data: responseData };
  } catch (error) {
    console.error("Registration error:", error);
    return { success: false, message: error.message };
  }
};
