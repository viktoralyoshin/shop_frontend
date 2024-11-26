import { cookies } from "next/headers";

const verify = async () => {

  const tokens = cookies().toString();

  const data = await fetch("http://localhost:5000/api/user/verify", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json", Cookie: tokens },
  });

  const response = await data.json();

  if (data.status === 401 && response === "TokenExpiredError") {
    const refreshData = await fetch(
      "http://localhost:5000/api/user/refreshToken",
      {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json", Cookie: tokens },
      }
    );

    localStorage.setItem("accessToken", "123")

    console.log(await refreshData.json());

    if (refreshData.status === 200) {
      return true;
    } else {
      return false;
    }
  } else if (data.status === 200) {
    return true;
  } else {
    return false;
  }
};

const fetchWithAuth = async (url: string, options: Object) => {
  console.log(url, options);

  if (await verify()) {
    const data = await fetch(url, options);

    return data;
  } else {
    return "NotAuth";
  }
};

export default fetchWithAuth;
