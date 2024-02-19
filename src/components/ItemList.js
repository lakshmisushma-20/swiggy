import { CDN_URL2 } from "../utils/constant";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-gray-400 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div>
              <span className="font-bold">{item.card.info.name}</span>
              <span>- ₹ {item.card.info.price / 100}</span>
            </div>
            <p className="text-xs"> {item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 ">
            <div className="absolute">
              <button
                className="p-2 mx-16   rounded-lg bg-black
             shadow-lg  text-white"
              >
                Add+
              </button>
            </div>
            <img src={CDN_URL2 + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
