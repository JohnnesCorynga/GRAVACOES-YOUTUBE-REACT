
import styles from './moreless.sass'
import { useRef } from 'react'
import imgReact from './imgReact.png'
const MoreLess = () => {
  const articleRef = useRef(null)
  const buttonRef = useRef(null)
  const readMore = () => {
    if(articleRef.current.className=="open"){
      articleRef.current.className = "close"
    }else {
      articleRef.current.className = "open"
    }
  }
    
  return (
    <section className="secao">
      <article ref={articleRef} className="close">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perspiciatis unde voluptate rerum ullam ab architecto? Quia, culpa beatae saepe ullam non, sed quod debitis ex suscipit eius veritatis repellendus?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perspiciatis unde voluptate rerum ullam ab architecto? Quia, culpa beatae saepe ullam non, sed quod debitis ex suscipit eius veritatis repellendus?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perspiciatis unde voluptate rerum ullam ab architecto? Quia, culpa beatae saepe ullam non, sed quod debitis ex suscipit eius veritatis repellendus?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perspiciatis unde voluptate rerum ullam ab architecto? Quia, culpa beatae saepe ullam non, sed quod debitis ex suscipit eius veritatis repellendus?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perspiciatis unde voluptate rerum ullam ab architecto? Quia, culpa beatae saepe ullam non, sed quod debitis ex suscipit eius veritatis repellendus?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perspiciatis unde voluptate rerum ullam ab architecto? Quia, culpa beatae saepe ullam non, sed quod debitis ex suscipit eius veritatis repellendus?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perspiciatis unde voluptate rerum ullam ab architecto? Quia, culpa beatae saepe ullam non, sed quod debitis ex suscipit eius veritatis repellendus?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perspiciatis unde voluptate rerum ullam ab architecto? Quia, culpa beatae saepe ullam non, sed quod debitis ex suscipit eius veritatis repellendus?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perspiciatis unde voluptate rerum ullam ab architecto? Quia, culpa beatae saepe ullam non, sed quod debitis ex suscipit eius veritatis repellendus?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perspiciatis unde voluptate rerum ullam ab architecto? Quia, culpa beatae saepe ullam non, sed quod debitis ex suscipit eius veritatis repellendus?</p>
      </article>
      <button ref={buttonRef} onClick={readMore} className='btn'>Mostrar</button>

      <img src={imgReact} alt="Logo React+Sass+Vite" />
    </section>
  )
}

export default MoreLess