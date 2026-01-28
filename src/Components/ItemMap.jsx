import { Theme } from "../themes/theme";
import { InfoCard } from "./InfoCard";

export function ItemMap({ lista, setGatilho }) {
  if(lista == ""){
    return(<p style={{
      color:Theme.palette.primary.contrastText
    }}>Nenhuma transação encontrada!</p>);
  }
  return lista.map((item) => {
    const auxBooleanoParaTipo = item.tipo === "entrada";

    return (
      <InfoCard
        key={item.id}
        descricao={item.nome}
        preco={parseFloat(item.valor).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
        categoria={item.categoria}
        data={new Date(item.data).toLocaleDateString("pt-BR")}
        tipo={auxBooleanoParaTipo}
        id={item.id}
        setGatilho={setGatilho}
      />
    );
  });
}
