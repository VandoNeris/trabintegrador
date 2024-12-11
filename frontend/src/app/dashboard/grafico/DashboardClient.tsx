"use client"; // Indica que este é um Client Component

import dynamic from "next/dynamic";

// Carregar o Chart dinamicamente para garantir que ele só será renderizado no lado do cliente
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface DashboardClientProps {
  tickets: any; // Você pode substituir por um tipo adequado se necessário
}

export default function DashboardClient({ tickets }: DashboardClientProps) {
  // Configurações do gráfico de pizza
  const options = {
    chart: {
      id: "apexchart-example",
    },
    labels: ["Abertos", "Fechados", "Em Andamento"], // Exemplo de categorias para um gráfico de pizza
  };

  // Dados estáticos para o gráfico de pizza
  const series =tickets; // Exemplo de dados (percentual de cada categoria)

  return (
    <>
      <div style={{ width: "500px", margin: "0 auto" , color: "white"}}>
      <h1>Dashboard</h1>
      <Chart type="pie" options={options} series={series} height={300} width="100%" />
      </div>
    </>
  );
}
