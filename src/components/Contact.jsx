import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { EarthCanvas } from './canvas'
import { slideIn } from "../utils/motion"

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({...form, [name]: value})
  }
    //5njePOeA6jKl3xD86
  //template_4rfivlc
 // service_woj3sk9
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      'service_woj3sk9',
      'template_4rfivlc',
    {
      from_name: form.name,
      to_name: 'Bemnet',
      from_email: form.email,
      to_email: 'hannabemnet94@gmail.com',
      message: form.message
    },
      '5njePOeA6jKl3xD86').then(() => {
        setIsLoading(false);
        alert('Thank You.I will get back to you as soon as possible');
        setForm({
            name: '',
            email: '',
            message: '',
        }, (error) => {
          setIsLoading(false);
          console.log(error);
          alert('Something went wrong.')
        })
      })
  }
  return (
    <div className="xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden" >
      <motion.div variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] p-8 rounded-2xl bg-black-100"
      >
        <p className={`${styles.sectionSubText} `}>Get In Touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8 mt-12">
          <label className="flex flex-col">
            <span className="font-medium mb-4 text-white">Your Name</span>
               <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's Your Name ?"
            className="bg-tertiary py-4 px-6 
            placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
          />
          </label>
       
          <label className="flex flex-col">
            <span className="font-medium mb-4 text-white">Your Email</span>
                <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="bg-tertiary py-4 px-6 
            placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
          />
          </label>
      
          <label className="flex flex-col">
            <span className="font-medium mb-4 text-white">Your Message</span>
                <textarea
            rows="7"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What Do You Want To Say ?"
            className="bg-tertiary py-4 px-6 
            placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />
          </label>
      
          <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
            {isLoading ? "sending" : "send"}
          </button>
        </form>
      </motion.div> 

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,'contact') 