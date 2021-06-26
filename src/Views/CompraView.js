import React, { useContext } from "react";
import { CarritoContext } from "../Context/carrito";
import { useForm } from "react-hook-form";
import {pedido} from "../Services/clienteService"
import Swal from 'sweetalert2'
import { useHistory } from "react-router";


export default function CompraView() {
  const { carrito } = useContext(CarritoContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let history = useHistory()

  const recibirSubmit = async (datos) =>{
    console.log(carrito)
      try {
          await pedido(datos)
          Swal.fire({
            icon:'success',
            title:'Su pedido fue agregado exitosamente',
            showConfirmButton:true,
            showDenyButton:false
          }).then((resultado)=>{
            if(resultado.isConfirmed){
              history.push('/')
            }
          })
      } catch (error) {
          console.log(error)
      }
  }

  let total = 0;
  for (let i = 0; i < carrito.length; i++) {
    total += carrito[i].precioPlato * carrito[i].cantidad;
  }

  return (
    <div className="container">
      <h1 className="fw-bold text-center mt-1">Detalle de Pedido</h1>
      <div className="row">
        <div className="col-12 col-lg-6">
          <h4 className="fw-bold">Lista de pedido de platos</h4>
          <ul className="list-group">
            {carrito.map((plato, i) => (
              <li
                className="list-group-item d-flex justify-content-between"
                key={i}
              >
                <div className="me-auto">
                  <span className="fw-bold">{plato.nombrePlato}</span>
                  <br />
                  <small>Cantidad: {plato.cantidad}</small>
                </div>
                <span className="badge bg-dark rounded-pill p-3">
                  S/{plato.cantidad * plato.precioPlato}
                </span>
              </li>
            ))}
          </ul>
          <li className="list-group-item d-flex justify-content-between">
            <div className="me-auto">
              <span className="fw-bold">TOTAL A PAGAR</span>
            </div>
            <span className="badge bg-dark rounded-pill p-3">S/{total}</span>
          </li>
</div>

        <div className="col-12 col-lg-6 mt-2">
          <h4>Datos del Comprador</h4>
          <form onSubmit={handleSubmit(recibirSubmit)}>
            <div className="mb-2">
              <label className="form-label">Nombres y Apellidos:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ej. Jhan Rodriguez"
                {...register("Nombre",{required:true})}
              />
              {errors.Nombre && (<span className="text-danger">Este campo es obligatorio</span>)}
            </div>
            <div className="mb-2">
              <label className="form-label">Numero de Celular</label>
              <input
                type="text"
                className="form-control"
                placeholder="987654321"
                {...register("Numero",{minLength:9})}
              />
              {errors.Numero &&(<span className="text-danger">Longitud minima de 9 digitos </span>)}
            </div>
            <div className="mb-2">
              <label className="form-label">Direccion</label>
              <input
                type="text"
                className="form-control"
                placeholder="Av. Nicolas de Pierola - Cercado de Lima"
                {...register("Direccion",{ pattern: /^[A-Za-z]/i})}
              />
              {errors.Direccion && (<span className="text-danger">Solamente Letras</span>) }
            </div>
            <button type="submit" className="btn btn-dark">
                Confirmar
            </button>
          </form>
        </div>
      
    </div>
    </div>
  );
}
