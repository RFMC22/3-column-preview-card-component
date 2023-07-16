const Cards = ({cars}) => {
  const colors = {
    'bright-orange': 'bg-bright-orange',
    'dark-cyan': 'bg-dark-cyan',
    'very-dark-cyan': 'bg-very-dark-cyan'
  }
  return (
    <div className="card-container">
      <h1 className="sr-only">3-column preview card component</h1>
      {cars.map(car => (
        <div key={car.title} className={`w-full ${colors[car.color]} h-full p-[48px]`}>
          <img src={car.logo} alt={`logo ${car.title.toLowerCase()}`} />
          <h2 className="title">{car.title}</h2>
          <p className="text">{car.text}</p>
          <button className="btn btn-hover">Learn More</button>
        </div>
      ))}
    </div>
  )
}

export default Cards