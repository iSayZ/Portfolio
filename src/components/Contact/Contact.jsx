import gsap from "gsap";
import emailjs from '@emailjs/browser';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { Button } from "@material-tailwind/react";

function Contact() {

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.fromTo("#form", {
          opacity: 0,
          y: 10
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: "#contact",
              start: "top center",
              end: "bottom center",
              markers: false
          }      
        })
    }, [])

    const [ formLastName, setFormLastName ] = useState("")
    const [ formFirstName, setFormFirstName ] = useState("")
    const [ formEmail, setFormEmail ] = useState("")
    const [ formSubject, setFormSubject ] = useState("")
    const [ formMessage, setFormMessage ] = useState("")
    const [ stateMessage, setStateMessage ] = useState("")
    const [ formResponse, setFormResponse ] = useState("")
    const [ loadingBtn, setLoadingBtn ] = useState(false)

    const displayConfirmation = () => {
        if (formLastName !== "" || formFirstName !== "" || formEmail !== "" || formSubject !== "" || formMessage !== "") {
          setFormLastName("");
          setFormFirstName("");
          setFormEmail("");
          setFormSubject("");
          setFormMessage("");
        }
      };

    const handleChangeLastName = (e) => {
        setFormLastName(e.target.value);
      };

      const handleChangeFirstName = (e) => {
        setFormFirstName(e.target.value);
      };
    
      const handleChangeEmail = (e) => {
        setFormEmail(e.target.value);
      };

      const handleChangeSubject = (e) => {
        setFormSubject(e.target.value);
      };
    
      const handleChangeMessage = (e) => {
        setFormMessage(e.target.value);
      };

    const form = useRef();

    const sendEmail = (e) => {
        if (formLastName !== "" && formFirstName !== "" && formEmail !== "" && formSubject !== "" && formMessage !== "") {
            e.preventDefault();
    
            emailjs
            .sendForm('service_j3t4h49', 'template_dfdrx1i', form.current, {
                publicKey: 'oz9j_i9WqoMYBzLg5',
            })
            .then(
                () => {
                setLoadingBtn(true)
                setFormResponse("");
                const timer = setTimeout(() => {
                    setStateMessage("light-green")
                    setFormResponse('Votre message a bien été envoyé, je vous répondrai dans les plus brefs délais.');
                    setLoadingBtn(false);
                    displayConfirmation()
                }, 1000);
                },
                (error) => {
                setStateMessage("red")
                setFormResponse("Une erreur s'est produite lors de l'envoi du formulaire. Veuillez réessayer ou m'envoyer directement un e-mail : estrine.alexis@gmail.com", error.text);
                },
            );
          } else {
            e.preventDefault();
            setLoadingBtn(true)
            setFormResponse("");
            const timer = setTimeout(() => {
                setStateMessage("red")
                setFormResponse("Veuillez remplir tous les champs du formulaire *");
                setLoadingBtn(false);
              }, 1000);
          }
    };

    return (
        <div id="contact" className="bg-slate-200 w-full flex justify-center py-12 px-4 lg:py-16">
            <div id="form" className="bg-slate-900 opacity-80 p-8 rounded shadow-black shadow-sm flex flex-col items-center justify-center w-full md:w-4/6 md:flex-row md:flex-wrap">
                <h3 className="font-semibold text-xl text-slate-50 mb-2 text-center md:mr-2 lg:text-1xl">Une question ?</h3>
                <h3 className="font-semibold text-xl text-slate-50 mb-2 text-center lg:text-1xl">Un projet à me proposer ?</h3>
                <h2 className="font-semibold text-3xl text-orange-500 mb-10 text-center md:w-full md:mt-2 lg:text-4xl">Contactez moi !</h2>
                <div className="w-full">
                    <form ref={form} onSubmit={sendEmail} action="" className="flex flex-col items-center space-y-6 w-full md:flex-row md:flex-wrap md:justify-between">
                        <input type="text" id="lastname" value={formLastName} onChange={handleChangeLastName} name="lastname" placeholder="Nom *" className="w-full bg-inherit border-b-2 border-slate-50 text-slate-50 outline-none transition-all duration-800 placeholder:text-orange-500 hover:border-orange-500 md:w-[45%] md:mt-6"/>
                        <input type="text" id="firstname" value={formFirstName} onChange={handleChangeFirstName} name="firstname" placeholder="Prénom *" className="w-full bg-inherit border-b-2 border-slate-50 text-slate-50 outline-none transition-all duration-800 placeholder:text-orange-500 hover:border-orange-500 md:w-[45%]"/>
                        <input type="email" id="email" value={formEmail} onChange={handleChangeEmail} name="email" placeholder="E-mail *" className="w-full bg-inherit border-b-2 border-slate-50 text-slate-50 outline-none transition-all duration-800 placeholder:text-orange-500 hover:border-orange-500"/>
                        <input type="text" id="subject" value={formSubject} onChange={handleChangeSubject} name="subject" placeholder="Votre sujet *" className="w-full bg-inherit border-b-2 border-slate-50 text-slate-50 outline-none transition-all duration-800 placeholder:text-orange-500 hover:border-orange-500"/>
                        <textarea name="message" id="message" value={formMessage} onChange={handleChangeMessage} placeholder="Votre message *" rows="5" className="w-full bg-inherit border-b-2 border-slate-50 text-slate-50 outline-none transition-all duration-800 placeholder:text-orange-500 hover:border-orange-500"></textarea>
                        {/* <button  className="text-slate-50 font-semibold bg-orange-500 p-2 rounded hover:opacity-80 hover:scale-105 m-auto">Envoyer votre message</button> */}
                  <Button type="submit" value="Send" variant="gradient" color="orange" loading={loadingBtn} className="w-full lg:w-1/3 mx-auto flex justify-center items-center">
                  Envoyer votre message
                  </Button>
                    </form>
                        {formResponse !== "" && <p className={`text-center text-xl text-red-50 mt-8 rounded bg-${stateMessage}-500 py-2`}>{formResponse}</p>}
                </div>
            </div>
        </div>
    )
}

export default Contact;