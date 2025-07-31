export default function UserDetail({ item }) {
    return (
      <div>
        <h2 className="text-xl font-bold mb-2">{item.firstName} {item.lastName}</h2>
        <img src={item.image} alt={item.firstName} className="w-full h-48 object-cover rounded mb-4" />
        <p className="text-gray-700">Email: {item.email}</p>
        <p className="text-gray-700">Phone: {item.phone}</p>
        <p className="text-gray-700">Age: {item.age}</p>
        <p className="text-gray-700">City: {item.address.city}</p>
      </div>
    );
  }
  