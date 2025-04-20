import {menu} from "../constants"
import MenuCard from "../components/MenuCard";

const Menu = () => {
  const handleAddToCart = (item) => {
    console.log(`${item.name} added to cart!`);
};

  return (
      <div className="flex flex-wrap gap-6 justify-center p-6 bg-gray-900">
          {menu.map((item) => (
              <MenuCard
                  key={item.id}
                  image={item.image}
                  title={item.name}
                  description={item.description}
                  price={item.price}
                  enableAdd={false}
                  onAdd={() => handleAddToCart(item)}
              />
          ))}
      </div>
  );
}

export default Menu
