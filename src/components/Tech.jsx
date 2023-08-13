import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import {motion} from 'framer-motion';
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
   <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
        Login to continue for free 7 day trial!
        </p>
        
       
       
      </motion.div>
    <br />
   <div className="flex flex-row flex-wrap justify-center gap-10">
    {technologies.map((technology)=>(
      <div className="w-28 h-28" key={technology.name}>
        <BallCanvas icon={technology.icon}/>
       </div> 
    ))}
   </div>
    </>
  )
}

export default SectionWrapper(Tech, "");