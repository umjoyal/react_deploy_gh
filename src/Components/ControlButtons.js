import ControlButton from './ControlButton'
import './ControlButtons.css'
const ControlButtons = ({section, setSection}) => {
  return (
    <header className="header">
        <ControlButton section={section} title='Users' value='users' setSection={setSection}/>
        <ControlButton section={section} title='Posts' value='posts' setSection={setSection}/>
        <ControlButton section={section} title='Comments' value='comments' setSection={setSection}/>
    </header>
  )
}

export default ControlButtons