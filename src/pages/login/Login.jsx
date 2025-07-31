export default function Login() {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 mb-3 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 mb-4 rounded"
          />
          <button className="bg-yellow-500 text-black w-full p-2 rounded hover:bg-yellow-600">
            Login
          </button>
        </form>
      </div>
    );
  }
  