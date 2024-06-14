import { selectToken } from "../redux/storage/memory";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
paths.set("/customers/view", "Customer Management");
paths.set("/notifications/devices", "Notifications and Messaging");
paths.set("/notifications/messages", "Notifications and Messaging");
paths.set("/billings/subcriptions", "Billings");
paths.set("/billings/invoices", "Billings");
paths.set("/billings/payments", "Billings");
paths.set("/reports", "Reports");
paths.set("/team", "Team Management");
paths.set("/team/all", "Team Management");
paths.set("/team/available", "Team Management");
paths.set("/team/blocked", "Team Management");
paths.set("/team/pending-invite", "Team Management");
paths.set("/settings", "Settings");
paths.set("/settings/account", "Settings");
paths.set("/settings/security", "Settings");
paths.set("/settings/preferences", "Settings");
