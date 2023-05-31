import HTML from "../public/techs/HTML.svg";
import CSS from "../public/techs/CSS.svg";
import JavaScript from "../public/techs/JavaScript.svg";
import iReact from "../public/techs/React.svg";
import NextJS from "../public/techs/NextJS.svg";
import Bootstrap from "../public/techs/Bootstrap.svg";
import Python from "../public/techs/Python.svg";
import Django from "../public/techs/Django.svg";
import HTMX from "../public/techs/HTMX.svg";
import Postman from "../public/techs/Postman.svg";
import Figma from "../public/techs/Figma.svg";
import Git from "../public/techs/Git.svg";
import Jira from "../public/techs/Jira.svg";
import JSON from "../public/techs/JSON.svg";
import PyCharm from "../public/techs/Pycharm.svg";
import WebStorm from "../public/techs/Webstorm.svg";
import WordPress from "../public/techs/WordPress.svg";
import Photoshop from "../public/techs/Photoshop.svg";
import Slack from "../public/techs/Slack.svg";
import Docker from "../public/techs/Docker.svg";

const langs = [
    {name: "HTML", icon: HTML},
    {name: "CSS", icon: CSS},
    {name: "JavaScript", icon: JavaScript},
    {name: "React", icon: iReact},
    {name: "NextJS", icon: NextJS},
    {name: "Bootstrap", icon: Bootstrap},
    {name: "Python", icon: Python},
    {name: "Django", icon: Django},
];
const tools = [
    {name: "HTMX", icon: HTMX},
    {name: "Git", icon: Git},
    {name: "Jira", icon: Jira},
    {name: "Postman", icon: Postman},
    {name: "JSON", icon: JSON},
    {name: "PyCharm", icon: PyCharm},
    {name: "WebStorm", icon: WebStorm},
    {name: "WordPress", icon: WordPress},
    {name: "Figma", icon: Figma},
    {name: "Photoshop", icon: Photoshop},
    {name: "Slack", icon: Slack},
    {name: "Docker", icon: Docker}
];
export const techsArr = [...langs, ...tools]


const techComponents = (Tech) => {
    return (
        <div key={Tech.name} className="techWrapper rajdhani">
            <h6>{Tech.name}</h6>
            <Tech.icon className="techIcon"/>
        </div>
    );
};

const TechDiv = ({arr}) => {
    return (
        <div className="technologies pb-lg-3 mt-lg-2 my-3 px-lg-3">
            {arr.map(techComponents)}
        </div>
    );
};

const Technologies = () => {
    return (
        <section id="technologies">
            <div className="container-fluid px-lg-4  overflow-hidden">
                <article className="mb-5">
                    <h1 className="header1">Technologie</h1>
                    <p>
                        W swoim życiu korzystałem w wielu rodzajów oprogramowania, w
                        zależności od wykonywanej pracy, stąd poznałem różne aplikacje,
                        systemy ERP, czy platformy wewenętrzne firm. Dzięki temu obeznanie z
                        nowymi technologiami i systemami przychodzi mi szybko. Uważam, że najprostsze rozwiązania są
                        najlepsze.
                    </p>
                </article>
                <article>


                    <h2>
                        W swojej pracy dotychczas wykorzystywałem następujące języki i
                        biblioteki:
                    </h2>
                    <TechDiv arr={langs}/>
                </article>

                <article>
                    <h2>A także następujące narzędzia:</h2>
                    <TechDiv arr={tools}/>
                </article>
            </div>
        </section>
    );
}


export default Technologies;
