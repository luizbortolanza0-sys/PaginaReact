
const mostRecent = (data1, data2) => (new Date(data1).getTime()) > (new Date(data2).getTime()) ? data1 : data2;


export const lastDate = (lista)=>{
    var arrayUltimasDatas = {
        lastEntrada:"",
        lastSaida:"",
        lastTotal:""
    }
    for(const item of lista){
        if(item.tipo == "entrada"){
            arrayUltimasDatas.lastEntrada = item.data; 
            break;
        }
    }

    for(const item of lista){
        if(item.tipo == "saida"){
            arrayUltimasDatas.lastSaida = item.data; 
            break;
        }
    }

    arrayUltimasDatas.lastTotal = mostRecent(arrayUltimasDatas.lastEntrada, arrayUltimasDatas.lastSaida);
    return arrayUltimasDatas;

}