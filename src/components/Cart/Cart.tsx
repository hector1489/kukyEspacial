import { useContext } from "react"
import { AppContext } from "../../context/GlobalState"
import IRecord from "../../interfaces/IRecord"

const Cart = () => {
  const contextValue = useContext(AppContext);

  if (!contextValue) {
    return null;
  }

  const { state, removeFromCart } = contextValue;
  const cartItems: Array<IRecord> = state.IsHero.filter(item => item.quantity > 0);

  const handleRemoveFromCart = (itemId: number) => {
    removeFromCart(itemId);
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Conteo</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Total</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>{item.quantity}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.quantity * item.price}</td>
              <td>
                <button className="btn btn-error" onClick={() => handleRemoveFromCart(item.id)}>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}



export default Cart