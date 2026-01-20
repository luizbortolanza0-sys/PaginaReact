import { Theme } from "../themes/theme";
import { InfoCard } from "./InfoCard";

export function ItemMap({ lista }) {
  if(lista == ""){
    return(<p style={{
      color:Theme.palette.primary.contrastText
    }}>Nenhuma transação encontrada!</p>);
  }

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
