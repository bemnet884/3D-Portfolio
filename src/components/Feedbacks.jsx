import { motion } from "framer-motion"

import { styles } from '../styles'
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"
import { testimonials } from "../constants"
const FeedbackCard = ({index,name,testimonial,designation,company,image}) => {
  return (
    <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)} className="bg-black-200 p-10 rounded-3xl w-full sm:w-[320px]">
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1">
        <p className="text-white tracking-wide text-[18px]">
          {testimonial}
        </p>
       
        <div className="flex justify-between items-center gap-1 mt-7">
          <div className="felx-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p> 
            <p className="text-secondary mt-1 text-[14px]">
              {designation} of {company}
            </p>
          </div>
          <img src={ image} alt={`feedback-by-${name}`}  className="h-10 w-10 rounded-full object-cover"/>
        </div>

      </div>
    </motion.div>
  )
}
const Feedbacks = () => {
  return (
    <div className="bg-black-100 mt-12 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>What Others Say</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}

      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks,"")