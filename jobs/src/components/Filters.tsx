export const Filters = () => {
  return (
    <div className="w-1/4">
      <input type="checkbox" />
      <label htmlFor=""> Full time</label>
      <h4>Location</h4>
      <input placeholder="City, state, zip code or country" type="text" />
      <ul>
        <li>
          <input type="radio" />
          <label htmlFor="">London</label>
        </li>
        <li>
          <input type="radio" />
          <label htmlFor="">Amsterdam</label>
        </li>
        <li>
          <input type="radio" />
          <label htmlFor="">Amsterdam</label>
        </li>
        <li>
          <input type="radio" />
          <label htmlFor="">Berlin</label>
        </li>
      </ul>
    </div>
  );
};
