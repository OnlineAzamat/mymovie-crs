const Card = ({ title, img, year, likes }) => {
  return (
    <div className="card">
      <div className="title">
        <h2>{title}</h2> {/* Title */}
      </div>
      <img src={img} alt="image" /> {/* image movie */}
      <div className="breadcrumbs">
        <div className="likes">
          <div className="icon">
            <i className="bi bi-heart-fill"></i>
          </div>
          {likes}
        </div>
        <div className="year">
          {year}
        </div>
      </div>
    </div>
  )
}

export default Card