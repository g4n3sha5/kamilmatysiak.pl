import { Trans, useTranslation } from "next-i18next";
import Image from "next/image";
import { Wave } from "./subcomponents/Wave";

export const About = () => {
  const { t } = useTranslation("index");

  return (
    <section id="about">
      <div className="container pt-4 overflow-hidden pb-4  px-3 px-lg-4 pb-3">
        <h1 className="header1 ">{t("About")}</h1>

        <div className="row">
          <div className="col order-lg-2 d-flex justify-content-center mt-3 mt-lg-0  mb-5 mb-lg-0">
            <div className="aboutProfile">
              <Image
                aria-hidden="true"
                src="/images/profile.jpg"
                alt="Profile picture"
                height={220}
                width={182}
              />
            </div>
          </div>

          <article className="col-lg-8 col-12">
            <p className="paragraph1 ">
              <Trans i18nKey="About Paragraph1" t={t}>
                {" "}
              </Trans>
            </p>
          </article>
        </div>
        <div className="row mt-lg-3">
          <div className="col-lg-3 aboutCard d-flex pt-lg-4 justify-content-center mx-2">
            <Image
              src="/images/Developer.svg"
              width="290"
              height="245"
              alt="Developer illustration"
            />
          </div>
          <article className="col-lg-8">
            <p className="paragraph1">
              <Trans i18nKey="About Paragraph2" t={t}></Trans>
            </p>
            <h1 className="rajdhani font-700 my-2 text-center possible">
              {t("Possible")}
            </h1>
          </article>
        </div>
        <hr className="line1" />
      </div>
      <Wave />
    </section>
  );
};
