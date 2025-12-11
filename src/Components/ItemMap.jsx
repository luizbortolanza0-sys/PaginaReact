import { InfoCard } from "./InfoCard";

export function ItemMap({ lista }) {
  return lista.map((item) => {
    const aux = item.tipo === "entrada";

    return (
      <InfoCard
        descricao={item.nome}
        preco={parseFloat(item.valor).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
        categoria={item.categoria}
        data={item.data}
        tipo={aux}
      />
    );
  });
}
