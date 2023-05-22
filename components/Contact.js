const Contact = () => {
    return (
        <section id="contact">
            <div className="container-fluid p-5">
                <div className="row pb-3">
                    <div className="col-12 col-lg-5 mb-3 pr-5">


                        <h1 className="header1"> Kontakt </h1>
                        <p>Jeśli zainteresowała Cię moja osoba i chcesz nawiązać współpracę lub zadać pytanie -
                            zapraszam do
                            kontaktu przez formularz lub mailowo. </p>
                        <h3>kmatysiak-it@outlook.com</h3>
                    </div>
                    <div className="col-12 col-lg-7 d-flex justify-content-center    ">

                        <form className="contactForm rajdhani px-5">
                            <label htmlFor="email">Twój e-mail</label>
                            <input type="email" name="e-mail" required/>
                            <label htmlFor="subject">Temat</label>
                            <input type="text" name="subject"/>
                            <label htmlFor="message">Wiadomość</label>
                            <textarea name="message" required/>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact