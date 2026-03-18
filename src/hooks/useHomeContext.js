import { HomeContext } from "../Context/HomeProvider";
import { useContext } from "react";

export const useHomeContext = () => {
    return useContext(HomeContext);
}