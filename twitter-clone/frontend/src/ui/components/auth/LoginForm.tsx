export const LoginForm = () => {
  return (
    <form className="w-full flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <input
          className="border-2 focus:outline-none border-slate-300 p-2 rounded"
          type="email"
          placeholder="Email"
        />
        <input
          className="border-2 focus:outline-none border-slate-300 p-2 rounded"
          type="password"
          placeholder="Password"
        />
      </div>
      <button
        className="bg-black p-2 rounded-full text-white"
        type="submit"
      >
        Sign in
      </button>
    </form>
  );
};
