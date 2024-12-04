import { useContext } from "react"
import { AppContext } from "../../context/GlobalState"
import IRecord from "../../interfaces/IRecord"

const SexShop = () => {
  const contextValue = useContext(AppContext);

  if (!contextValue) {
    return null;
  }

  const { state, setState } = contextValue;

  const galleryData: Array<IRecord> = state.IsHero || [];
  const sexShopProducts = galleryData.filter(item => item.category.toLowerCase() === "sexshop");

  const addToCart = (id: number) => {
    const updatedGalleryData = galleryData.map(item =>
      item.id === id ? { ...item, quantity: (item.quantity || 0) + 1 } : item
    );

    setState(prevState => ({
      ...prevState,
      IsHero: updatedGalleryData,
    }));
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      {sexShopProducts.map(item => (
        <div key={item.id} className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={item.urlImage} alt={item.title} className="w-full h-48 object-cover" />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-lg font-semibold mb-2">{item.title}</h2>
            <p className="text-sm mb-4">{item.description}</p>
            <p className="text-sm mb-4">$ {item.price}</p>
            <p className="text-sm mb-4">{item.category}</p>
            <div className="card-actions">
              <h4>Consultar Stock : </h4>
              <div className="contact-view-buttons">
                <a href="https://www.facebook.com/people/rashtistore/61569902727603/?rdid=H0OoVXKosw9i9wfQ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F186uE631Hj%2F" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
                <a href="https://www.instagram.com/rashtistore/profilecard/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://wa.me/54270328" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SexShop


