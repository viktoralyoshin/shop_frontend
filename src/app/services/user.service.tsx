import fetchWithAuth from "@/utils/fetchWithAuth";
import { cookies } from "next/headers";

class UserService {
  checkAuth = async () => {
    const tokens = cookies().toString();

    const data = await fetchWithAuth("http://localhost:5000/api/user/verify", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json", Cookie: tokens },
    });

    if (data != "NotAuth") {
      const user = await data.json();
      return user;
    } else {
      console.log("NotAuth");
    }
  };
}

export default new UserService();
