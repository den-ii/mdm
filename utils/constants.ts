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
paths.set("/customers", "Customer Management");
paths.set("/notifications/devices", "Notifications and Messaging");
paths.set("/notifications/messages", "Notifications and Messaging");
paths.set("/billings/subcriptions", "Billings");
paths.set("/billings/invoices", "Billings");
paths.set("/billings/payments", "Billings");

paths.set("/reports", "Reports");
paths.set("/team", "Team Management");
paths.set("/settings", "Settings");
