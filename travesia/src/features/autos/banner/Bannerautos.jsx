import React from "react";
import "./bannerautos.css";
import {
  car1,
  car2,
  car3,
  car4,
  car5,
  car6,
  car7,
  car8,
} from "../../../assets/images/images";
import Iconos from "../iconos/Iconos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// create a golden start component
const Star = () => {
  return (
    <FontAwesomeIcon
      icon={faStar}
      style={{ color: "gold", fontSize: "1.5rem" }}
    />
  );
};

export default function Bannerautos() {
  return (
    <>
      <section className="home" id="home">
        <h3 data-speed="-2" className="home-parallax">
          escoge tu carro
        </h3>

        <img
          data-speed="5"
          className="home-parallax"
          src="image/home-img.png"
          alt="banner"
        />

        <a data-speed="7" href="#" className="btn home-parallax">
          Reserva
        </a>
      </section>

      <Iconos />

      <section className="vehicles" id="vehicles">
        <h1 className="heading">
          {" "}
          vehiculos <span>populares</span>{" "}
        </h1>

        <div className="swiper vehicles-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide box">
              <img src="image/vehicle-1.png" alt="slide" />
              <div className="content">
                <h3>porsche </h3>
                <div className="price">
                  {" "}
                  <span>precio: </span> S/.299 x dia{" "}
                </div>
                <p>
                  nuevo
                  <span className="fas fa-circle"></span> 2021
                  <span className="fas fa-circle"></span> automatico
                  <span className="fas fa-circle"></span> petrol
                  <span className="fas fa-circle"></span> 250kmh
                </p>
                <a href="#" className="btn">
                  check out
                </a>
              </div>
            </div>

            <div className="swiper-slide box">
              <img src="image/vehicle-2.png" alt="slide" />
              <div className="content">
                <h3>Porsche Quantiqum</h3>
                <div className="price">
                  {" "}
                  <span>precio: </span> S/.299 x dia{" "}
                </div>
                <p>
                  nuevo
                  <span className="fas fa-circle"></span> 2021
                  <span className="fas fa-circle"></span> automatico
                  <span className="fas fa-circle"></span> petrol
                  <span className="fas fa-circle"></span> 250kmh
                </p>
                <a href="#" className="btn">
                  check out
                </a>
              </div>
            </div>

            <div className="swiper-slide box">
              <img src="image/vehicle-3.png" alt="slide" />
              <div className="content">
                <h3>Porsche creation</h3>
                <div className="price">
                  {" "}
                  <span>precio: </span> S/.299 x dia
                </div>
                <p>
                  nuevo
                  <span className="fas fa-circle"></span> 2021
                  <span className="fas fa-circle"></span> automatico
                  <span className="fas fa-circle"></span> gasolina
                  <span className="fas fa-circle"></span> 270kmh
                </p>
                <a href="#" className="btn">
                  check out
                </a>
              </div>
            </div>

            <div className="swiper-slide box">
              <img src="image/vehicle-4.png" alt="slide" />
              <div className="content">
                <h3>Porsche GTA</h3>
                <div className="price">
                  {" "}
                  <span>precio: </span> S/.399 x dia{" "}
                </div>
                <p>
                  nuevo
                  <span className="fas fa-circle"></span> 2021
                  <span className="fas fa-circle"></span> automatico
                  <span className="fas fa-circle"></span> gasolina
                  <span className="fas fa-circle"></span> 300kmh
                </p>
                <a href="#" className="btn">
                  check out
                </a>
              </div>
            </div>

            <div className="swiper-slide box">
              <img src="image/vehicle-5.png" alt="slide" />
              <div className="content">
                <h3>porsche citrus</h3>
                <div className="price">
                  {" "}
                  <span>precio: </span> S/.249 x dia{" "}
                </div>
                <p>
                  nuevo
                  <span className="fas fa-circle"></span> 2021
                  <span className="fas fa-circle"></span> automatico
                  <span className="fas fa-circle"></span> gasolina
                  <span className="fas fa-circle"></span> 300kmh
                </p>
                <a href="#" className="btn">
                  check out
                </a>
              </div>
            </div>

            <div className="swiper-slide box">
              <img src="image/vehicle-6.png" alt="slide" />
              <div className="content">
                <h3>porsche spider</h3>
                <div className="price">
                  {" "}
                  <span>precio: </span> S/.199 x dia{" "}
                </div>
                <p>
                  usado
                  <span className="fas fa-circle"></span> 2021
                  <span className="fas fa-circle"></span> automatico
                  <span className="fas fa-circle"></span> gasolina
                  <span className="fas fa-circle"></span> 300kmh
                </p>
                <a href="#" className="btn">
                  check out
                </a>
              </div>
            </div>
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </section>
      <section className="services" id="services">
        <h1 className="heading">
          {" "}
          Nuestros <span>servicios</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <i className="fas fa-car"></i>
            <h3>Venta</h3>
            <p>ponemos a la venta los modelos en alquiler</p>
            <a href="#" className="btn">
              {" "}
              informate
            </a>
          </div>

          <div className="box">
            <i className="fas fa-tools"></i>
            <h3>reparacion de partes</h3>
            <p>
              reemplazamos cualquier parte dañada o descompuesta en el momento
              del llamado
            </p>
            <a href="#" className="btn">
              {" "}
              informate
            </a>
          </div>

          <div className="box">
            <i className="fas fa-car-crash"></i>
            <h3>seguro contra accidentes</h3>
            <p>
              Todos nuestros autos están asegurados con el mejor seguro
              Pacifico.
            </p>
            <a href="#" className="btn">
              {" "}
              informate
            </a>
          </div>

          <div className="box">
            <i className="fas fa-car-battery"></i>
            <h3>reemplazo de bateria</h3>
            <p>
              todo auto alquilado tiene un reepuesto de bateria justo para ser
              utilizado si se necesita
            </p>
            <a href="#" className="btn">
              {" "}
              informate
            </a>
          </div>

          <div className="box">
            <i className="fas fa-gas-pump"></i>
            <h3>cambio de aceite</h3>
            <p>
              nuestros carros siempre cuentan con el cambio de aceite requerido
            </p>
            <a href="#" className="btn">
              {" "}
              informate
            </a>
          </div>

          <div className="box">
            <i className="fas fa-headset"></i>
            <h3>soporte 24/7</h3>
            <p>
              todo momento del dia estamos al tanto de sus consultas y
              solicitudes.
            </p>
            <a href="#" className="btn">
              {" "}
              informate
            </a>
          </div>
        </div>
      </section>
      <section className="featured" id="featured">
        <h1 className="heading">
          {" "}
          <span>carros</span> destacados{" "}
        </h1>

        <div className="swiper featured-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide box">
              <img src={car1} alt="car1" />
              <div className="content">
                <h3>Modelo nuevo</h3>
                <div className="stars">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price">s./500 x dia</div>
                <a href="#" className="btn">
                  registrate
                </a>
              </div>
            </div>

            <div className="swiper-slide box">
              <img src="image/car-2.png" alt="car2" />
              <div className="content">
                <h3>modelo nuevo</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price">s./500 x dia-</div>
                <a href="#" className="btn">
                  registrate
                </a>
              </div>
            </div>

            <div className="swiper-slide box">
              <img src="image/car-3.png" alt="car3" />
              <div className="content">
                <h3>modelo nuevo</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price">s./500 x dia</div>
                <a href="#" className="btn">
                  registrate
                </a>
              </div>
            </div>

            <div className="swiper-slide box">
              <img src="image/car-4.png" alt="car$" />
              <div className="content">
                <h3>modelo nuevo</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price">s./500 x dia</div>
                <a href="#" className="btn">
                  registrate
                </a>
              </div>
            </div>
          </div>

          <div className="swiper-pagination"></div>
        </div>

        <div className="swiper featured-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide box">
              <img src="image/car-5.png" alt="car5" />
              <div className="content">
                <h3>modelo nuevo</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price">s./500 x dia</div>
                <a href="#" className="btn">
                  registrate
                </a>
              </div>
            </div>

            <div className="swiper-slide box">
              <img src="image/car-6.png" alt="car6" />
              <div className="content">
                <h3>modelo nuevo</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price">s./500 x dia</div>
                <a href="#" className="btn">
                  registrate
                </a>
              </div>
            </div>

            <div className="swiper-slide box">
              <img src="image/car-7.png" alt="car7" />
              <div className="content">
                <h3>modelo nuevo</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <div classNameName="price">s./500 x dia</div>
                <a href="#" className="btn">
                  registrate
                </a>
              </div>
            </div>

            <div classNameName="swiper-slide box">
              <img src="image/car-8.png" alt="car8" />
              <div classNameName="content">
                <h3>modelo nuevo</h3>
                <div classNameName="stars">
                  <i classNameName="fas fa-star"></i>
                  <i classNameName="fas fa-star"></i>
                  <i classNameName="fas fa-star"></i>
                  <i classNameName="fas fa-star"></i>
                  <i classNameName="fas fa-star-half-alt"></i>
                </div>
                <div classNameName="price">s./500 x dia</div>
                <a href="#" className="btn">
                  registrate
                </a>
              </div>
            </div>
          </div>

          <div classNameName="swiper-pagination"></div>
        </div>
      </section>
      <section classNameName="newsletter">
        <h3>suscribete a nuestro Newsletter</h3>
        <p>
          Recibiras todos los descuentos semanales y las mejores ofertas en
          alquiler de nuestros mejores modelos deportivos
        </p>

        <form action="">
          <input type="email" placeholder="Tu correo" />
          <input type="submit" value="subscribe" />
        </form>
      </section>

      <section classNameName="reviews" id="reviews">
        <h1 classNameName="heading">
          {" "}
          reseña de <span>clientes</span>{" "}
        </h1>

        <div classNameName="swiper review-slider">
          <div classNameName="swiper-wrapper">
            <div classNameName="swiper-slide box">
              <img src="image/pic-1.png" alt="pic1" />
              <div classNameName="content">
                <p>
                  Me encanto, me fascino, me enriquecio el alma. No solo es un
                  servicio de autos, es el servicio de calidad por excelencia.
                </p>
                <h3>Ron Aldo</h3>
                <div classNameName="stars">
                  <i classNameName="fas fa-star"></i>
                  <i classNameName="fas fa-star"></i>
                  <i classNameName="fas fa-star"></i>
                  <i classNameName="fas fa-star"></i>
                  <i classNameName="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>

            <div classNameName="swiper-slide box">
              <img src="image/pic-2.png" alt="pic2" />
              <div classNameName="content">
                <p>
                  Si van a alquilar un auto tengan en cuenta que este servicio
                  te dará la tranquilidad y la atención necesaria para que
                  puedas tener un viaje excelente. besos.
                </p>
                <h3>Mary Johnson</h3>
                <div classNameName="stars">
                  <i classNameName="fas fa-star"></i>
                  <i classNameName="fas fa-star"></i>
                  <i classNameName="fas fa-star"></i>
                  <i classNameName="fas fa-star"></i>
                  <i classNameName="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>

            <div classNameName="swiper-slide box">
              <img src="image/pic-3.png" alt="pic3" />
              <div classNameName="content">
                <p>
                  Quiero que sepan que este no es solo un buen servicio de
                  alquiler, sino el mejor servicio de alquiler de autos, nunca
                  me habia sentido tan feliz escribiendo una reseña, se lo
                  merecen.
                </p>
                <h3>Estevan Dido</h3>
                <div classNameName="stars">
                  <i classNameName="fas fa-star"></i>
                  <i classNameName="fas fa-star"></i>
                  <i classNameName="fas fa-star"></i>
                  <i classNameName="fas fa-star"></i>
                  <i classNameName="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>

            <div classNameName="swiper-slide box">
              <img src="image/pic-4.png" alt="pic4" />
              <div classNameName="content">
                <p>buen servicio. profesionales en su trabajo.</p>
                <h3>Dina Boluarte</h3>
                <div classNameName="stars">
                  <i classNameName="fas fa-star"></i>
                  <i classNameName="fas fa-star"></i>
                  <i classNameName="fas fa-star"></i>
                  <i classNameName="fas fa-star"></i>
                  <i classNameName="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>

            <div classNameName="swiper-slide box">
              <img src="image/pic-5.png" alt="pic5" />
              <div classNameName="content">
                <p>El mejor servicio de alquiler de carros del mundo</p>
                <h3>Alan García</h3>
                <div classNameName="stars">
                  <i classNameName="fas fa-star"></i>
                  <i classNameName="fas fa-star"></i>
                  <i classNameName="fas fa-star"></i>
                  <i classNameName="fas fa-star"></i>
                  <i classNameName="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>

            <div classNameName="swiper-slide box">
              <img src="image/pic-6.png" alt="pic6" />
              <div classNameName="content">
                <p>
                  Me encanto el servicio, atención personalizada y el carro en
                  perfectas condiciones. 100% recomendado.
                </p>
                <h3>Keiko Fujimori</h3>
                <div classNameName="stars">
                  <i classNameName="fas fa-star"></i>
                  <i classNameName="fas fa-star"></i>
                  <i classNameName="fas fa-star"></i>
                  <i classNameName="fas fa-star"></i>
                  <i classNameName="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
