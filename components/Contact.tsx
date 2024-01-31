import React, { useState } from "react";
import Linkedin from "public/images/linkedin.svg";
import Github from "public/images/github.svg";
import { Wave } from "@/components/subcomponents/svg/Wave";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";

export const Contact = () => {
  const [messageStatus, setMessageStatus] = useState(false);
  const { t } = useTranslation("index");

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const response = await fetch("api/contact", {
        method: "post",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        body: new URLSearchParams(data as any),
      });

      if (!response.ok) {
        throw new Error(`Invalid response ${response.status}`);
      }
    } catch (err) {
      console.error(err);
      alert("We can't submit the form");
    }

    setMessageStatus(true);
    setInterval(() => {
      setMessageStatus(false);
      event.target.reset();
    }, 2500);
  }

  return (
    <section id="contact">
      <div className="container-fluid p-lg-5 d-flex justify-content-center">
        <div className="row pb-3 w-100">
          <div className="col-12 col-lg-5 mb-3 pr-xl-5">
            <h1 className="header1"> {t("Contact")} </h1>
            <p>{t("Interested")}</p>
            <h3>kmatysiak-it@outlook.com</h3>
            <div className="mt-4  socialIcons  px-2">
              <a href="https://github.com/g4n3sha5">
                <Github width="58px" height="58px" fill="ghostwhite" />
              </a>
              <a href="https://www.linkedin.com/in/kamilmatysiak">
                <Linkedin width="58px" height="58px" fill="ghostwhite" />
              </a>
            </div>

            <div className="techCity fitImg ">
              <Image
                src="/images/techcity.webp"
                className="techCity"
                alt="Tech illustration"
                width="700"
                height="700"
              />
              <h6>
                Art by
                <Link href="https://dribbble.com/Pro_Art">
                  Andrey Prokopenko
                </Link>
              </h6>
            </div>
          </div>
          <div className="col-12 col-lg-7 d-flex justify-content-center align-items-start px-0 px-lg-2 ">
            <div className="contactForm py-3 px-4 mt-4">
              <form
                onSubmit={handleSubmit}
                className=" rajdhani px-2 d-flex flex-column"
              >
                <label htmlFor="email">{t("E-mail")}</label>
                <input
                  type="email"
                  autoComplete="email"
                  name="e-mail"
                  required
                />
                <label htmlFor="subject">{t("Subject")}</label>
                <input type="text" autoComplete="off" name="subject" />
                <label htmlFor="message">{t("Message")}</label>
                <textarea name="message" required />
                <div className="pt-1">
                  <h2 className={messageStatus ? "d-block" : "d-none"}>
                    {t("Message sent")}!
                  </h2>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary mt-4 w-50 mx-2"
                >
                  {t("Send")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Wave />
    </section>
  );
};
