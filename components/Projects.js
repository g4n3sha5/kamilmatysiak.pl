import {techsArr} from "./Technologies.js"
import temple from "../public/yaniv-cohen.webp"
import mativated from "../public/mativated.webp";
import kryptokantor from "../public/kryptojarocin.webp"
import portfolio from "../public/portfolio.webp"
import code from "../public/code.png"
import web from "../public/web.png"
import more from "../public/more.png"
import {useState} from "react";

const mativatedDescription = `Ten projekt dostarcza narzędzi dla ludzi, którzy kochają sport - szczególnie chwytane sztuki walki - Brazylijskie Jiu-Jitsu.
Projekt zawiera wiele funkcjonalności i podzielony jest na kilka modułów:

a) Kluby (Clubs)
- Członkowie klubu (profile innych osób i menadżer uprawnień)
- Harmonogram klubu (generator grafiku)
- Treningi klubowe  
- Lista klubów, każdy użytkownik może poprosić klub (uprawnionych członków)  o dołączenie do niego 

b) BJJorunal (Brazilian Jiu - Jitsu Journal)
- Statystyki
- Dodaj sesję treningową (zapisz typ sesji, długość, poznane techniki itp.)
- Twoje sesje treningowe (lista wszystkich sesji, gdzie użytkownik może edytować lub usunąć każdą sesję)
- Otwarta baza technik (gdzie każdy użytkownik może dodać technikę Jiu Jitsu (nazwa, typ itp.) oraz dodać Sugestie do innych technik)
- Prosta aplikacja to do, gdzie użytkownik może dodać listę, oraz przedmioty do zrobienia w poszczególnych listach.

c) Powiadomienia (Notifications)
- Powiadamianie uprawnionych członków o wnioskach

d) Konto / Profil (Account / Profile)
- Zarządzaj kontem (zmień hasło / e-mail) i profilem (informacje osobiste (opcjonalnie) - avatar użytkownika, pas, bio etc.)`
// const techsArr = [
//     {name: "HTML", icon: HTML},
//     {name: "CSS", icon: CSS},
//    ....
// ];
const strToArr = (str) => {
    return str.split(',')
}

const iconFinder = (list) => list.map(tech => {
        return techsArr.find(item => {
            //remove whitespaces, ignore letter case
            const equalStr = i => i.toLowerCase().trim()
            return equalStr(item.name) === equalStr(tech)
        })
            //find function above filters objects from techsArr, each object has two properties: name of a technology used and its icon, find matching objects and get icon
            .icon
    }
)

let projectsList = [

    {
        name: "Kantor Krypto - strona",
        description: "Statyczna strona dla mojego biznesu związanego z kryptowalutami",
        techs: strToArr("HTML, CSS, Bootstrap, JavaScript, Webstorm, Figma, Git, WordPress"),
        url: "https://www.kryptojarocin.pl/",
        repo: "https://github.com/g4n3sha5/Krypto-Jarocin",
        keyA: "kantor",
        img: kryptokantor
    },
    {
        name: "MATIVATED",
        description: mativatedDescription,
        techs: strToArr("HTML, CSS, Bootstrap, JavaScript, HTMX, Django, Python , Figma, PyCharm, JSON, Git"),
        url: "https://www.mativated.com/",
        repo: "https://github.com/g4n3sha5/MATIVATED_dev",
        keyA: "mativated",
        img: mativated
    },
    {
        name: "Strona portfolio",
        description: "Moja strona osobista :) Projekt tworzony w React / NextJS. ",
        techs: strToArr("HTML, CSS, React, Bootstrap, JavaScript, Webstorm, Figma, Git"),
        url: "https://www.kamilmatysiak.pl/",
        repo: "https://github.com/g4n3sha5/kamilmatysiak.pl",
        keyA: "portfolio",
        img: portfolio
    }
].map(obj => {
    obj.icons = iconFinder(obj.techs)
    return obj
})


const ProjectComponent = ({name, description: desc, url, repo, icons, keyA, img, ...props}) => {
    const BtnComponent = ({icon, href}) => {
        return (
            <a href={href} target="_blank" className="BtnComponent btn ">
                <img src={icon.src}/>
            </a>
        )
    }

    const IconComponent = (Icon) => {
        return (
            <Icon className="technology"/>
        )

    }
    let [show, setShow] = useState(true)
    let condition = !show ? 'activeIcon' : ''
    return (

        <article key={keyA} className="project ">
            <div className={`${show ? 'showProject' :''} projectMain overflow-auto customScroll d-flex `}>

                {show ? <img src={img.src}/> :
                    <p className="p-3 paragraph2">
                        {desc}
                    </p>
                }
            </div>

            <aside className="projectRight d-flex flex-column pt-3">
                <h1 className="text-center">{name}</h1>
                <div className="projectOverlay d-flex justify-content-center my-3">

                    <button className={`BtnComponent btn ${condition}`}>
                        <img onClick={() => setShow(!show)} src={more.src}/>
                    </button>
                    <BtnComponent icon={ web} href={url}/>
                    <BtnComponent icon={code} href={repo}/>
                </div>
                <div className="projectIcons  px-3 text-center">
                    <h1>Technologie</h1>
                    <div className=" d-flex flex-wrap justify-content-center
             align-items-center py-2 ">

                        {
                            icons.map(IconComponent)
                        }
                    </div>
                </div>
            </aside>


            {/*<div className="techFooter d-flex flex-column align-items-center">*/}


            {/*</div>*/}


        </article>
    )
}

const Projects = () => {
    return (
        <section id="projects">
            <div className="container ">
                <article>
                    <h1 className="header1">Projekty</h1>
                    <p>

                        Pierwsze projekty w JavaScript i&nbsp;Pythonie
                        (to-do, proste gry, kółko i&nbsp;krzyżyk, wizytówka itp.). Były to projekty hobbistycznie
                        tworzone w latach 2019/2020,
                        stąd większość tych projektów przepadła w&nbsp;czeluściach dysków. Moje najważniejsze projekty
                        to:
                    </p>
                    {
                        <div className="projects d-flex flex-column align-items-center py-5 gy-4">
                            {
                                projectsList.map(ProjectComponent)
                            }
                        </div>
                    }

                </article>
            </div>
        </section>
    )
}
export default Projects