export const Header = () => {
  return (
    <header className="w-3/4 flex flex-col p-4 gap-5">
      <h2 className="text-2xl mb-3 mt-2">
        <strong>Rapid</strong> Jobs
      </h2>
      <div className="h-[130px] bg-hero bg-no-repeat bg-center flex justify-center items-center rounded-md">
        <div className="w-3/4 h-2/5 bg-white p-1 flex justify-between rounded">
          <input
            className="w-3/4 bg-transparent focus:outline-none p-2"
            placeholder="Title, companies, expertise or benefits"
            type="text"
          />
          <button className="w-1/4 h-full bg-search px-4 py-1 rounded-md text-white font-bold">
            Search
          </button>
        </div>
      </div>
    </header>
  );
};
