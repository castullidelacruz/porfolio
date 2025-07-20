import { useState } from "react"

function Contacto() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [enviando, setEnviando] = useState(false);
    const [estado, setEstado] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEnviando(true);
        setEstado(null);
        
        const data = {
            nombre: nombre,
            correoElectronico: email,
            mensaje: mensaje
        };

        try {
            const response = await fetch('http://localhost:8080/api/contacto', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(data)
            });
      
            if (response.ok) {
              setEstado('ok');
              setNombre('');
              setEmail('');
              setMensaje('');
            } else {
              setEstado('error');
            }
          } catch (error) {
            console.error("Error al enviar:", error);
            setEstado('error');
          } finally {
            setEnviando(false);
          }
        };


    return(
        <section id="contacto">
            <h3>Contacto</h3>
            <form id="formulario-contacto" onSubmit={handleSubmit}>
                <label htmlFor="fname">Nombre:</label><br/>
                <input
                type="text" id="fname" name="nombre" value={nombre}
                onChange={(e) => setNombre(e.target.value)} required
                /><br/><br/>

                <label htmlFor="femail">Correo electrónico:</label><br />
                        <input
                        type="email"
                        id="femail"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        /><br /><br />

                        <label htmlFor="fmensaje">Mensaje:</label><br />
                        <textarea
                        id="fmensaje"
                        name="mensaje"
                        rows="5"
                        cols="20"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                        required
                        ></textarea><br /><br />

            <button type="submit" disabled={enviando}>
                {enviando ? "Enviando..." : "Enviar"}
            </button>
            </form>
            {estado === 'ok' && <p style={{ color: 'green' }}>¡Mensaje enviado correctamente!</p>}
            {estado === 'error' && <p style={{ color: 'red' }}>Hubo un error al enviar el mensaje.</p>}
        </section>
    );
}
export default Contacto;