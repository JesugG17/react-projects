export const GifCardItem = ({ title, url, category }) => {
  return (
    <div className="gif_card" >
      <img src={url} />
      <p className="text-center">{title ? title : `${category} GIF`}</p>
    </div>
  );
};
