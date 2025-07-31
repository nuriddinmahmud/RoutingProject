import { useEffect, useState } from 'react';
import Modal from '../../components/common/Modal';
import UserDetail from './UserDetail';

export default function User() {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => setUsers(data.users));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {users.map(user => (
          <div
            key={user.id}
            className="bg-white shadow p-4 rounded cursor-pointer hover:shadow-lg"
            onClick={() => setSelected(user)}
          >
            <img src={user.image} alt={user.firstName} className="w-full h-32 object-cover rounded" />
            <p className="mt-2 font-semibold">{user.firstName} {user.lastName}</p>
            <p className="text-gray-600 text-sm">{user.email}</p>
          </div>
        ))}
      </div>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && <UserDetail item={selected} />}
      </Modal>
    </div>
  );
}
