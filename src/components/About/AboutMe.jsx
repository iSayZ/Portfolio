import { useState } from 'react';
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skills from './Skills.jsx'
import CV from './CV.jsx';

function AboutMe() {

    gsap.registerPlugin(ScrollTrigger);

    const title = useRef(null);
    const aboutMe = useRef(null);
    const btn = useRef(null);
    const skills = useRef(null);
  
    useEffect(() => {
      gsap.fromTo(title.current, {
        opacity: 0,
        y: 10
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: "#about-me",
            start: "top center",
            end: "bottom center",
            markers: false
        }      
      })

      gsap.fromTo(aboutMe.current, {
        opacity: 0,
        y: 10
        },
        {
          opacity: 1,
          y: 0,
          delay: 1,
          duration: 1,
          scrollTrigger: {
            trigger: "#about-me",
            start: "top center",
            end: "bottom center",
            markers: false
        }      
      })

      gsap.fromTo(btn.current, {
        opacity: 0,
        y: 10
        },
        {
          opacity: 1,
          y: 0,
          delay: 2,
          duration: 1,
          scrollTrigger: {
            trigger: "#about-me",
            start: "top center",
            end: "bottom center",
            markers: false
        }      
      })

      gsap.fromTo(skills.current, {
        opacity: 0,
        y: 10
        },
        {
          opacity: 1,
          y: 0,
          delay: 0,
          duration: 1,
          scrollTrigger: {
            trigger: aboutMe.current,
            start: "bottom center",
            end: "bottom center",
            markers: false
        }      
      })

    }, [])

    const [isVisible, setIsVisible] = useState(false)

    const handleToggle = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div id='about-me' className="bg-slate-200 w-full h-full py-12 lg:py-20 lg:p-12 lg:px-40">
            <div className="text-center">
                <h1 ref={title} className="text-3xl font-semibold text-cyan-500 m-0">Qui suis-je ?</h1>
                <p ref={aboutMe} className="m-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure harum vero odit delectus eaque, optio mollitia nostrum omnis officia quibusdam repellat consequatur ad reiciendis enim culpa iusto nemo temporibus vel!
                Reprehenderit facere sint quibusdam pariatur beatae corporis, est voluptatibus consequatur quae, laudantium laboriosam aut! Commodi autem nemo atque placeat unde, totam eum consequuntur sunt officia quidem laudantium incidunt harum perspiciatis.
                Voluptas odio nostrum, quae labore unde exercitationem dolorem numquam nam magnam reprehenderit, excepturi mollitia itaque animi tenetur! Debitis, aliquid provident deserunt nulla delectus, accusamus dolor saepe laborum, optio itaque blanditiis?
                Velit reiciendis, et enim dolorum eum nostrum assumenda amet neque soluta animi beatae vero architecto culpa est doloremque? Inventore mollitia cum velit? Doloribus pariatur provident necessitatibus error, vel sint et?
                </p>
                <a target='_blank' href="../public/assets/CV_Alexis_Estrine.pdf">
                <button ref={btn} className='mb-12 bg-orange-500 p-2 text-slate-50 font-semibold rounded shadow-black shadow-sm active:shadow-none hover:scale-105'>Voir mon CV</button>
                </a>
            </div>
            {/* {isVisible && <CV handleToggle={handleToggle} />} */}
            <Skills skills={skills} />
        </div>
    )
}

export default AboutMe;