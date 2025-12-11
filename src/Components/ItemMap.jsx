import { InfoCard } from "./InfoCard";

export function ItemMap({ lista }) {
  return lista.map((item) => {
    const aux = item.tipo === "entrada";

    return (
      <InfoCard
        descricao={item.nome}
        preco={item.valor}
        categoria={item.categoria}
        data={item.data}
        tipo={aux}
      />
    );
  });
}
