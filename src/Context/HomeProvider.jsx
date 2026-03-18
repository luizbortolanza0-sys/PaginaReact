import { createContext } from "react";
import useHome from "../hooks/useHome.js";

export const HomeContext = createContext();


export const HomeProvider = ({ children }) => {

    const {
        page,
        search,
        lastData,
        lista,
        setGatilho,
        changePage
    } = useHome();

    if (!lista) {
        return <></>;
    }

    return <HomeContext.Provider value={
        { setGatilho, resumo: lista.resumo, lastData, page, search, changePage }}>
        {children}
    </HomeContext.Provider>
}