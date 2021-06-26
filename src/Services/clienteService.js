import axios from "axios"

const URL = "https://60b2f448e0275c0017bfc898.mockapi.io/Venta"

const pedido= async(nuevoPedido) =>{
    try {
        let cabeceras={
            "Content-Type" : "application/json",
        }
        let {data} = await axios.post(URL, nuevoPedido, {cabeceras});
        return data
    } catch (error) {
        throw error
    }
}

export{
    pedido
}