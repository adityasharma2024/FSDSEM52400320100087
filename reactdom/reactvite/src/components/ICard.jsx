function ICard({data, onOpen}) {
  return (
    <article
      className="student-card"
      role="button"
      tabIndex="0"
      onClick={() => onOpen(data)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onOpen(data)
        }
      }}
      aria-label={`Open profile for ${data.name}`}
    >
      <div className="student-card__topline">
        <span className="student-card__label">Student profile</span>
        <span className="student-card__dot" aria-hidden="true" />
      </div>
      <div className="student-card__identity">
        <div className="student-card__avatar-wrap">
          <img className="student-card__avatar" src={data.pic} alt={`${data.name} profile`} />
        </div>
        <div>
          <h2>{data.name}</h2>
          <p className="student-card__college">{data.college}</p>
        </div>
      </div>
      <div className="student-card__details">
        <div>
          <span>Roll number</span>
          <strong>{data.roll}</strong>
        </div>
        <div>
          <span>Branch</span>
          <strong>{data.branch}</strong>
        </div>
      </div>
      <span className="student-card__action">View profile <span aria-hidden="true">↗</span></span>
    </article>
  )
}

export default ICard