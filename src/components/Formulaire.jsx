import React, { useRef, useState, useEffect } from 'react';
import Titre from "./Titre"
import emailjs from '@emailjs/browser';




function Formulaire() {
  const [message, setMessage] = useState("null")


  useEffect(() => {
    if (message !== null) {
      const timer = setTimeout(() => {
        setMessage(null);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  const form = useRef();
  const emailRegex = /@/;

  const sendEmail = (e) => {
    e.preventDefault();
    try {
      if ([e.target[0], e.target[2], e.target[3]].every(element => element !== "")) {
        if (emailRegex.test(e.target[2].value)) {
          emailjs.sendForm(
            'service_twhowi6',
            'template_ldejwrw',
            form.current,
            'Yat0-JspNkwQo-31D')
            .then((result) => {
              setMessage("validation-form");
              console.log(result.text);
            }, (error) => {
              console.log(error.text);
            });
        } else {
          setMessage("error-form");
        }


      }
    } catch (error) {
      console.log(error);
    }
  };




  return (
    <>

      <div className="contact" >
        <Titre
          titre="Me Contacter"
          id="formulaire"
        />
        <p>Vous pouvez me contacter par téléphone au : 07.69.43.35.66 </p>
        <form ref={form} onSubmit={sendEmail} name="contact" method="post">
          <div className="formulaire-label-input">
            <label htmlFor="user_name">Nom</label>
            <input id="user_name" type="text" name="user_name" required />

          </div>
          <div className="formulaire-label-input">
            <label htmlFor="sujet">Sujet</label>
            <input id="sujet" type="text" name="user_sujet" />
          </div>
          <div className="formulaire-label-input">
            <label htmlFor="mail" >Adresse Mail </label>
            <input name="user_mail" type="mail" id="mail" required />
          </div>

          <div className="formulaire-label-input">
            <label htmlFor="text">Message</label>
            <textarea type="text" id="text" name="message" required />
          </div>

          <button type="submit">Envoyer</button>

        </form>

        {
          message === null ? null :
            message === 'error-form' ?
              <div className='message error-form'>EMAIL NON VALIDE</div> :
              message === 'validation-form' ?
                <div className='message validation-form'>MESSAGE TRANSMIS</div> :
                null
        }

      </div>

    </>
  )
}

export default Formulaire
