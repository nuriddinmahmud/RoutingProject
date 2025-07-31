import { useEffect, useState } from 'react';
import Modal from '../../components/common/Modal';
import FoodDetail from './FoodDetail';

export default function Food() {
  const [recipes, setRecipes] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=12&skip=10')
      .then(res => res.json())
      .then(data => setRecipes(data.products));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Recipes</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {recipes.map(recipe => (
          <div
            key={recipe.id}
            className="bg-white shadow p-4 rounded hover:shadow-lg cursor-pointer"
            onClick={() => setSelected(recipe)}
          >
            <img src={recipe.thumbnail} alt={recipe.title} className="w-full h-32 object-cover rounded" />
            <p className="mt-2 font-semibold">{recipe.title}</p>
          </div>
        ))}
      </div>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && <FoodDetail item={selected} />}
      </Modal>
    </div>
  );
}
