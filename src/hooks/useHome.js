import { lastDate } from "../functions/lastDate.js";
import { useEffect, useState } from "react";
import { getTransacoes } from "../service/get/getTransacoes.js";

const MaxPerPagina = 10;


const useHome = () => {
    const [page, setPage] = useState(1);
    const [gatilho, setGatilho] = useState(false);
    const [lista, setLista] = useState(null);
    const [search, setSearch] = useState(null);
    const [lastData, setLastData] = useState({});

    useEffect(() => {
        async function fetchApi() {
            let trans = await getTransacoes(page, MaxPerPagina);
            let transTotal = await getTransacoes(1, trans.paginacao.total);
            setLista(transTotal);
            setSearch(trans);
            setLastData(lastDate(transTotal.transacoes));
        }
        fetchApi();
    }, [page, gatilho]);


    const changePage = ( _ ,value) => {
        setPage(value);
    }


    function searchGet(text) {

        if (!text || text.trim() === "") {
            setGatilho(prev=> !prev);
            return;
        }

        setSearch({
            ...search,
            transacoes: lista.transacoes.filter((item) =>
                item.nome.toLowerCase().includes(text.toLowerCase()),
            ),
        }
        );
    }
    return {
        page,
        search,
        lista,
        lastData,
        setGatilho,
        searchGet,
        changePage
    };

}

export default useHome;