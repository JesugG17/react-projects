
export const Filter = () => {
  return (
    <section className="w-3/5 md:w-1/4 lg:w-1/5">
        <select
            className="w-full p-4 bg-primary-dark text-white text-xs shadow-lg" 
            placeholder="Filter by region"
        >
            <option value="all">Filter by region</option>
        </select>
    </section>
  )
}
