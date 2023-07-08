import './ControlButton.css'
const ControlButton = ({ title, value, setSection, section }) => {
  return (
    <button
      className="controlButton"
      value={value}
      onClick={(e) => setSection(e.target.value)}
      style={section===value? {backgroundColor: 'black', color:'white'} : null}>
      {title}
    </button>
  )
}

export default ControlButton