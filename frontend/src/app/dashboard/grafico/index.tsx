'use client'
import { api } from "@/services/api";
import { TotaisProps } from "@/lib/dash.type";
import { getCookieClient } from "@/lib/cookieClient";
import DashboardClient from "./DashboardClient"; // Importe o novo Client Component

async function getTicketsTotais(): Promise<TotaisProps[] | []> {
  try {
    const token = await getCookieClient();

    const response = await api.get("/tickets/totais", {
      headers: {
        Authorization: `Bearer ${token}`
      },
    });
    

    return response.data || [];
  } catch (err) {
    console.log(err);
    return [];
  }
}

export default async function Dashboard() {
  const tickets = await getTicketsTotais(); 

  return (
    <>
      <DashboardClient tickets={tickets} />
    </>
  );
}
