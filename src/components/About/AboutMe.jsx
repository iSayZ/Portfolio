import { useState } from 'react';
import Skills from './Skills.jsx'
import CV from './CV.jsx';

function AboutMe() {

    const [isVisible, setIsVisible] = useState(false)

    const handleToggle = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div id='about-me' className="bg-slate-200 w-full h-full pt-12 pb-12 lg:p-12 lg:pl-40 lg:pr-40">
            <div className="text-center ">
                <h1 className="text-3xl font-semibold text-cyan-500 m-0">Qui suis-je ?</h1>
                <p className="m-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure harum vero odit delectus eaque, optio mollitia nostrum omnis officia quibusdam repellat consequatur ad reiciendis enim culpa iusto nemo temporibus vel!
                Reprehenderit facere sint quibusdam pariatur beatae corporis, est voluptatibus consequatur quae, laudantium laboriosam aut! Commodi autem nemo atque placeat unde, totam eum consequuntur sunt officia quidem laudantium incidunt harum perspiciatis.
                Voluptas odio nostrum, quae labore unde exercitationem dolorem numquam nam magnam reprehenderit, excepturi mollitia itaque animi tenetur! Debitis, aliquid provident deserunt nulla delectus, accusamus dolor saepe laborum, optio itaque blanditiis?
                Velit reiciendis, et enim dolorum eum nostrum assumenda amet neque soluta animi beatae vero architecto culpa est doloremque? Inventore mollitia cum velit? Doloribus pariatur provident necessitatibus error, vel sint et?
                </p>
                <button onClick={handleToggle} className='mb-12 bg-orange-500 p-2 text-slate-50 font-semibold rounded shadow-black shadow-sm hover:opacity-80 active:shadow-none'>Voir mon CV</button>
            </div>
            {isVisible && <CV handleToggle={handleToggle} />}
            <Skills />
        </div>
    )
}

export default AboutMe;