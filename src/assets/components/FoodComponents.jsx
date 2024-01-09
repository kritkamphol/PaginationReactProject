export default function FoodComponents({ name, image_url }) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-image">
          <img src={image_url} />
        </div>
      </div>
      <div className="card-title">{name}</div>
    </div>
  );
}
