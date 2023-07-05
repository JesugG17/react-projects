export const Card = () => {
  return (
    <section className="card">
      <figure>
        <img src="./adventure.svg" alt="" />
      </figure>
      <h4>This is the question</h4>
      <ul className="questions__container">
        {["resp1", "resp2", "resp2", "resp4"].map((resp) => {
          return(
            <div
                className="question" 
                key={resp}
            >
                <p>B</p>
                <li>
                    {resp}
                </li>
            </div>
          ) 
        })}
      </ul>
      <div className="button__container">
        <button className="next__button">
            Next
        </button>
      </div>
    </section>
  );
};
