
export const GifTimeline = ({ categories, handleCategory }) => {
  return (
    <>
        <h3 className='text-center'>TimeLine</h3>
        <hr />
        {
          categories.map( (category, index) => {
            return (
              <div
                onClick={() => handleCategory(category)}
                className={`timeline_item pointer ${ index === 0 ? 'selected' : ''}`}
                key={ index }
              >
                <p className='text-center'>{ category }</p>
              </div>
            )
          })
        }
    </>
  )
}
