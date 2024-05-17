import { selectToken } from "../redux/storage/memory";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const BASEURL = String(process.env.NEXT_PUBLIC_API);

export const baseQueryWithAuth = async (args: any, api: any, extra: any) => {
  const token = selectToken(api.getState());

  let headers = {
    ...args.headers,
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return fetchBaseQuery({ baseUrl: BASEURL })(
    {
      ...args,
      headers: headers,
    },
    api,
    extra
  );
};

export const paths = new Map();
paths.set("/", "Dashboard");
paths.set("/devices", "Device Management");
paths.set("/customers", "Customers");
paths.set("/notifications", "Notifications");
paths.set("/billing", "Billing");
paths.set("/report", "Report");
paths.set("/team", "Team");
paths.set("/settings", "Settings");
