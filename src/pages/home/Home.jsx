import { useEffect, useState } from 'react';
import Modal from '../../components/common/Modal';
import HomeDetail from './HomeDetail';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products.map(p => (
          <div
            key={p.id}
            className="bg-white shadow p-4 rounded cursor-pointer hover:shadow-lg"
            onClick={() => setSelected(p)}
          >
            <img src={p.thumbnail} alt={p.title} className="w-full h-32 object-cover rounded" />
            <p className="mt-2 font-semibold">{p.title}</p>
            <p className="text-gray-600 text-sm">${p.price}</p>
          </div>
        ))}
      </div>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && <HomeDetail item={selected} />}
      </Modal>
    </div>
  );
}
