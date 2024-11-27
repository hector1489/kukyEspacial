import SexShop from "../../components/SexShop/SexShop"
import './SexShopView.css'


const SexShopView = () => {


  return (
    <div className="sexshop-view-container">
      <h3 className="bg-base-300">Productos <span className="text-success font-bold">:</span></h3>
      <SexShop />
    </div>
  )
}

export default SexShopView

