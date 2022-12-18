
import React from 'react'

export default function Contacto() {
  return (
    <><section class="contact" id="contact">

    <h1 class="heading"><span>Contacta</span>nos</h1>

    <div class="row">

        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1632137920043!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>

        <form action="">
            <h3>Formulario</h3>
            <input type="text" placeholder="Tu nombre" class="box"/>
            <input type="email" placeholder="Correo electrónico" class="box"/>
            <input type="tel" placeholder="Asunto" class="box"/>
            <textarea placeholder="Tu mensaje" class="box" cols="30" rows="10"></textarea>
            <input type="submit" value="Enviar mensaje" class="btn"/>
            <aside class="bd-aside">
                <section>
                    <p class="bold">Aplica Ya!</p>
                    <p>Adquiere alguno de nuestros planes de viaje y recibirás un <a class="bold">ebook</a> con los mejores tips del viajero frecuente.</p>
                    <p>Ve y reserva <a href="" class="a-hoteles">Hoteles ⇉</a></p>                    
                    <br/>
                    <img src="./image/ebook.jpeg" class="ebook"/>
                </section>
            </aside>
        </form>
    </div>

</section></>
)