import Button from "./Button";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Homepage() {

    const socialNetwork = [
    // {
    //     name: "Facebook",
    //     imgSrc: <svg class="h-4 w-4 text-slate-100"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>,
    //     link: "http://facebook.com/",
    //     target: "_blank"
    // },
    {
        name: "Twitter",
        imgSrc: <svg class="h-4 w-4 text-slate-100"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" /></svg> ,
        // link: "https://twitter.com/EstrineAlexis",
        link: "https://twitter.com/",
        target: "_blank"
    },
    {
        name: "Linkedin",
        imgSrc: <svg class="h-4 w-4 text-slate-100"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg> ,
        link: "https://linkedin.com/in/alexis-estrine/",
        target: "_blank"
    },
    {
        name: "Github",
        imgSrc: <svg class="h-4 w-4 text-slate-100"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" /></svg> ,
        link: "https://github.com/iSayZ/",
        target: "_blank"
    },
    {
        name: "Message",
        imgSrc : <svg class="h-4 w-4 text-slate-100"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
        link: "#contact",
        target: "_self"
    }
    ]

    const avatar = useRef(null)
    const welcome = useRef(null)
    const social = useRef(null)

    useEffect(() => {
        gsap.to(avatar.current, {
            opacity: 1,
            y: 0,
            duration: 2
        }),
        gsap.to(welcome.current, {
            opacity: 1,
            y: 0,
            duration: 2
        }),
        gsap.to(social.current, {
            opacity: 1,
            y: 0,
            duration: 2,
            delay: 1
        })
    }, [])

    return (
        <>
            <div className="flex flex-col-reverse items-center h-auto lg:h-svh lg:flex-row lg:justify-evenly">
            <div className="text-slate-50 text-2xl md:text-4xl space-y-8 flex flex-col items-center lg:items-start justify-center p-10 opacity-0 translate-y-5" ref={welcome}>
                <p className="text-3xl md:text-6xl">Hello !</p>
                <p className="text-3xl md:text-6xl text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text">I'm Estrine Alexis,</p>
                <p className="italic font-extralight text-center">a French full stack developer.</p>
                <div className="flex flex-wrap justify-center md:justify-start opacity-0" ref={social} >
                {socialNetwork.map((network) => <Button key={network.name} btn={network} />)}
            </div>
            </div>
            <div className="hover:animate-bounce">
                <img src="../../assets/profil.jpg" alt="" ref={avatar} className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full h-48 w-48 opacity-0 md:h-64 md:w-64 md:m-0 translate-y-5" />
            </div>
            </div>
        </>
    )
}

export default Homepage;