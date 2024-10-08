import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contactar</h1>
      <form action="">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Nombre
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email de destino"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Mensaje 
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Escribeme , no tardare en responder ..."
            required></textarea>
        </div>
        <input className="hover btn"  type="submit" value="Submit" />
      </form>
    </section>
  );
}






export default Contact;

