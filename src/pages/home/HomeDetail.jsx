export default function HomeDetail({ item }) {
    return (
      <div>
        <h2 className="text-xl font-bold mb-2">{item.title}</h2>
        <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-cover rounded mb-4" />
        <p className="text-gray-700">{item.description}</p>
        <p className="mt-2 font-semibold text-lg">${item.price}</p>
        <p className="text-sm text-gray-500 mt-1">Brand: {item.brand}</p>
        <p className="text-sm text-gray-500">Category: {item.category}</p>
      </div>
    );
  }
  