import { useState, useEffect} from "react";
import { obtenerCategoria } from "../Services/categoriaService";
import GroupCategorias from "../Components/GroupCategorias";




export default function InicioView() {
  const [categoria, setCategoria] = useState([]);
  
  
  const getCategoria = async () => {
    let categoriaObtenida = await obtenerCategoria();
    setCategoria(categoriaObtenida);
  };
  useEffect(() => {
    getCategoria();
  }, []);

  return (
    <div className="container mt-3">
      <GroupCategorias categoria={categoria} />
    </div>
  );
}
