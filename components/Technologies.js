import HTML from "../public/techs/HTML.svg";
import CSS from "../public/techs/CSS.svg";
import JavaScript from "../public/techs/JavaScript.svg";
import iReact from "../public/techs/React.svg";
import NextJS from "../public/techs/NextJS.svg";
import Bootstrap from "../public/techs/Bootstrap.svg";
import Python from "../public/techs/Python.svg";
import Django from "../public/techs/Django.svg";
import SQL from "../public/techs/SQL.svg";
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
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";

const langs = [
    {name: "HTML", icon: HTML},
    {name: "CSS", icon: CSS},
    {name: "HTMX", icon: HTMX},
    {name: "JavaScript", icon: JavaScript},
    {name: "React", icon: iReact},
    {name: "NextJS", icon: NextJS},
    {name: "Bootstrap", icon: Bootstrap},
    {name: "Python", icon: Python},
    {name: "Django", icon: Django},
    {name: "SQL", icon: SQL}
];
const tools = [
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


const techComponent = (Tech) => {
    return (
        <div key={Tech.name}  aria-hidden="true" className="techWrapper rajdhani">
            <h6>{Tech.name}</h6>
            <Tech.icon className="techIcon"/>
        </div>
    );
};

const TechDiv = ({arr}) => {
    return (
        <div className="technologies pb-lg-3 mt-lg-2 my-3 px-lg-3">
            {arr.map(techComponent)}
        </div>
    );
};

const Technologies = () => {

    const {locale} = useRouter()
    const {t } = useTranslation('index')
    return (
        <section id="technologies">
            <div className="container px-lg-4  overflow-hidden">
                <article className="mb-5">
                    <h1 className="header1">{t("Technologies")}</h1>
                    <p>
                        {t("Technologies Description")}
                    </p>
                </article>
                <article>


                    <h2>
                        {t("Languages")}
                    </h2>
                    <TechDiv arr={langs}/>
                </article>

                <article>
                    <h2>{t("Tools")}</h2>
                    <TechDiv arr={tools}/>
                </article>
            </div>
        </section>
    );
}


export default Technologies;
