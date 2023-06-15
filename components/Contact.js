import React, {useState} from 'react';
import Github from "../public/github.svg";
import Linkedin from "../public/linkedin.svg";
import Wave from "@/components/Wave";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import Link from "next/link";

const Contact = () => {
    let [messageStatus, setMessageStatus] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        try {
            const response = await fetch('api/contact', {
                method: 'post',
                body: new URLSearchParams(data)
            });

            if (!response.ok) {
                throw new Error(`Invalid response ${response.status}`)
            }

        }  catch
            (err) {
            console.error(err)
            alert("We can't submit the form")
        }

        setMessageStatus(true)
        setInterval(() => {
            setMessageStatus(false)
            e.target.reset()
        }, 2500)

    }

    const {locale} = useRouter()
    const {t } = useTranslation('index')

    return (
        <section id="contact">
            <div className="container-fluid p-lg-5 d-flex justify-content-center">
                <div className="row pb-3 w-100">
                    <div className="col-12 col-lg-5 mb-3 pr-5">

                        <h1 className="header1"> {t("Contact")} </h1>
                        <p>{t("Interested")}</p>
                        <h3>kmatysiak-it@outlook.com</h3>
                        <div className="mt-4  socialIcons  px-2">
                            <a href="https://github.com/g4n3sha5">
                                <Github width="58px" height="58px" fill="ghostwhite"/>

                            </a>
                            <a href="https://www.linkedin.com/in/kamilmatysiak">
                                <Linkedin width="58px" height="58px" fill="ghostwhite"/>
                            </a>
                        </div>


                        <div className="techCity fitImg ">
                            <img src="/techcity.webp" alt="Tech illustration"/>
                            <h6>Art by <Link href="https://dribbble.com/Pro_Art"> Andrey Prokopenko </Link></h6>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7 d-flex justify-content-center align-items-start ">
                        <div className="contactForm py-3 px-4 mt-4">
                            <form onSubmit={handleSubmit} className=" rajdhani px-2 d-flex flex-column">
                                <label htmlFor="email">
                                    {t("E-mail")}
                                </label>
                                <input type="email" autoComplete="email" name="e-mail" required/>
                                <label htmlFor="subject">
                                    {t("Subject")}
                                </label>
                                <input type="text" autoComplete="off" name="subject"/>
                                <label htmlFor="message">
                                    {t("Message")}
                                </label>
                                <textarea name="message" required/>
                                <div className="pt-1">
                                    <h2 className={messageStatus ? "d-block" : "d-none"}>{t("    sent")}!</h2>
                                </div>
                                <button type="submit" className="btn btn-primary mt-4 w-50 mx-2">
                                    {t("Send")}
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
            <Wave/>
        </section>
    )
}
export default Contact