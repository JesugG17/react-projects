export const RegisterForm = () => {
  return (
    <form className="w-full flex flex-col gap-5">
      <input
        className="border-2 p-2 rounded border-slate-300"
        type="text"
        placeholder="Fullname"
      />
      <input
        className="border-2 p-2 rounded border-slate-300"
        type="email"
        placeholder="Email"
      />
      <input
        className="border-2 p-2 rounded border-slate-300"
        type="Password"
        placeholder="Password"
      />
      <button className="bg-black text-white p-2 rounded-full">Sign up</button>
    </form>
  );
};
