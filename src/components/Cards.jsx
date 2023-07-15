const Cards = ({cars}) => {
  return (
    <div className="card-container">
      {cars.map(car => (
        <div key={car.title} className={`w-full bg-${car.color} h-full p-[48px]`}>
          <img src={car.logo} alt={`logo ${car.title.toLowerCase()}`} />
          <h1 className="title">{car.title}</h1>
          <p className="text">{car.text}</p>
          <button className="btn btn-hover">Learn More</button>
        </div>
      ))}
    </div>
  )
}

export default Cards