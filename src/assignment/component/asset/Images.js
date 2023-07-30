import ForImage from "../asset/cam-guy.png"
import '../header/Navstyle.module.css'

export const Images = ({changeSize}) => {
  return (
    <div>
      <img className={changeSize} src={ForImage} alt=""/>
    </div>
  )
}
export default Images;