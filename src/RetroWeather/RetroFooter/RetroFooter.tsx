import './retro-footer.css'

export const RetroFooter = ({ tickerMessages }) => {

  console.log(tickerMessages)

  return (
    <div className="retro-footer">
      <div className="ticker">
        { tickerMessages?.map((message: string, i) => (
          <div key={`ticker-item-${i}`} className="ticker-item">{message}</div>
        ))}
      </div>
    </div>
  )
}
