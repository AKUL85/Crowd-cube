

const Login = () => {
  

  const handleLogin = (e) => {
    e.preventDefault();
    
  };

  

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-900 rounded shadow">
      <h2 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
       
          className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 px-4 py-2 rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
       
          className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 px-4 py-2 rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-gray-600 dark:text-gray-300">Or</p>
        <button
      
          className="mt-2 w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
