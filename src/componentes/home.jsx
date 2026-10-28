
import React from "react";
import "../css/home.css";

import logoAquarius from "../assets/logo-fondo-blanco.png";

const INSTAGRAM_URL = "https://www.instagram.com/aquariuscabanias/";

// Reemplazar por el WhatsApp real de Aquarius, con código de país.
// Ejemplo: 5493511234567
const WHATSAPP = "";

const beneficios = [
  {
    icono: "🌿",
    titulo: "Desconectá de la rutina",
    descripcion:
      "Encontrá un espacio para descansar, disfrutar y renovar energías.",
  },
  {
    icono: "🏡",
    titulo: "Sentite como en casa",
    descripcion:
      "Disfrutá una estadía pensada para que puedas relajarte y compartir.",
  },
  {
    icono: "☀️",
    titulo: "Viví cada momento",
    descripcion:
      "Convertí tus días libres en recuerdos especiales con quienes más querés.",
  },
  {
    icono: "💚",
    titulo: "Una experiencia para disfrutar",
    descripcion:
      "Descubrí una forma diferente de descansar y disfrutar de tus vacaciones.",
  },
];

const fotos = [
  {
    titulo: "Nuestros espacios",
    imagen:
      "/src/assets/aquarius-cabanias_3.jpeg",
  },
  {
    titulo: "Momentos de relax",
    imagen:
      "/src/assets/aquarius-cabanias5.jpeg",
  },
  {
    titulo: "Naturaleza y descanso",
    imagen:
      "/src/assets/aquarius-cabanias4.jpeg",
  },
];

const Home = () => {
  const mensaje = encodeURIComponent(
    "Hola! Quisiera conocer más sobre Aquarius Cabañas y consultar disponibilidad."
  );

  const whatsappUrl = WHATSAPP
    ? `https://wa.me/${WHATSAPP}?text=${mensaje}`
    : null;

  return (
    <main className="aquarius-home">
      {/* PORTADA */}
      <section className="aquarius-hero">
        <div className="aquarius-hero-overlay" />

        <header className="aquarius-header">
         <a className="aquarius-logo" href="#inicio">
  <img
    src={logoAquarius}
    alt="Aquarius Cabañas Boutique"
    className="aquarius-logo-img"
  />
</a>

          <nav className="aquarius-nav">
            <a href="#beneficios">Beneficios</a>
            <a href="#galeria">Galería</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <a
            className="aquarius-header-button"
            href={whatsappUrl || INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
          >
            Consultanos
          </a>
        </header>

        <div className="aquarius-hero-content" id="inicio">
          <span className="aquarius-eyebrow">
            TU PRÓXIMA ESCAPADA COMIENZA ACÁ
          </span>

          <h1>
            Desconectá de la rutina.
            <br />
            <span>Conectá con lo que importa.</span>
          </h1>

          <p>
            Hay lugares que invitan a bajar el ritmo, disfrutar
            el presente y crear momentos inolvidables.
            Te invitamos a descubrir Aquarius Cabañas.
          </p>

          <div className="aquarius-hero-actions">
            <a
              className="aquarius-button aquarius-button-primary"
              href={whatsappUrl || INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
            >
              Consultar disponibilidad <span>↗</span>
            </a>

            <a
              className="aquarius-button aquarius-button-outline"
              href="#beneficios"
            >
              Descubrí Aquarius
            </a>
          </div>
        </div>

        <a className="aquarius-scroll" href="#beneficios">
          <span>DESCUBRÍ MÁS</span>
          <span>↓</span>
        </a>
      </section>


{/* UBICACIÓN */}
<section className="aquarius-location" id="ubicacion">
  <div className="aquarius-location-container">
    <div className="aquarius-location-info">
      <span className="aquarius-section-label">
        VENÍ A CONOCERNOS
      </span>

      <h2>
        Tu próximo descanso
        <br />
        <span>está más cerca.</span>
      </h2>

      <p>
        Descubrí Aquarius Cabañas Boutique y empezá a
        planificar tu próxima escapada. Consultá la ubicación
        y encontrá el mejor camino para llegar.
      </p>

      <div className="aquarius-location-detail">
        <span className="aquarius-location-icon">⌖</span>
        <div>
          <strong>¿Cómo llegar?</strong>
          <p>
            Consultá nuestra ubicación y obtené indicaciones
            directamente desde Google Maps.
          </p>
        </div>
      </div>

      <a
        className="aquarius-button aquarius-button-primary"
        href="https://maps.app.goo.gl/PQAS1Ym3eF9MkeJs7"
        target="_blank"
        rel="noreferrer"
      >
        Cómo llegar <span>↗</span>
      </a>
    </div>

    <div className="aquarius-location-map">
      <iframe
        title="Ubicación de Aquarius Cabañas Boutique en Google Maps"
        src="https://maps.google.com/maps?q=Aquarius%20Caba%C3%B1as%20Carpinter%C3%ADa%20San%20Luis&t=&z=14&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
</section>


      {/* PRESENTACIÓN */}
      <section className="aquarius-intro">
        <span className="aquarius-section-label">
          TU LUGAR PARA DESCANSAR
        </span>

        <h2>
          Más que una estadía,
          <br />
          <span>una experiencia para disfrutar.</span>
        </h2>

        <p>
          En Aquarius Cabañas queremos que cada momento
          de tu descanso valga la pena. Un lugar para compartir,
          disfrutar de tu tiempo y llevarte lindos recuerdos.
        </p>
      </section>

      {/* BENEFICIOS */}
      <section className="aquarius-benefits" id="beneficios">
        <div className="aquarius-section-heading">
          <div>
            <span className="aquarius-section-label">
              LO QUE HACE ESPECIAL TU ESTADÍA
            </span>
            <h2>Tu descanso, a tu manera.</h2>
          </div>

          <p>
            Disfrutá de esos pequeños momentos que terminan
            convirtiéndose en los mejores recuerdos.
          </p>
        </div>

        <div className="aquarius-benefit-grid">
          {beneficios.map((beneficio) => (
            <article
              className="aquarius-benefit-card"
              key={beneficio.titulo}
            >
              <div className="aquarius-benefit-icon">
                {beneficio.icono}
              </div>

              <h3>{beneficio.titulo}</h3>
              <p>{beneficio.descripcion}</p>
            </article>
          ))}
        </div>
      </section>

      {/* GALERÍA */}
      <section className="aquarius-gallery" id="galeria">
        <div className="aquarius-section-heading">
          <div>
            <span className="aquarius-section-label">
              CONOCÉ AQUARIUS
            </span>
            <h2>Un lugar para vivirlo.</h2>
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="aquarius-instagram-link"
          >
            Más fotos en Instagram ↗
          </a>
        </div>

        <div className="aquarius-gallery-grid">
          {fotos.map((foto, index) => (
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className={`aquarius-gallery-item gallery-item-${index + 1}`}
              key={foto.titulo}
              style={{ backgroundImage: `url("${foto.imagen}")` }}
              aria-label={`Ver más fotos de Aquarius Cabañas: ${foto.titulo}`}
            >
              <div className="aquarius-gallery-caption">
                <h3>{foto.titulo}</h3>
                <span>Descubrí más ↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* LLAMADA A LA ACCIÓN */}
      <section className="aquarius-cta" id="contacto">
        <div className="aquarius-cta-content">
          <span className="aquarius-section-label">
            TU PRÓXIMO DESCANSO TE ESPERA
          </span>

          <h2>
            ¿Nos tomamos
            <br />
            unos días?
          </h2>

          <p>
            Consultanos, conocé nuestras opciones y empezá
            a planificar tu próxima escapada.
          </p>

          <div className="aquarius-cta-actions">
            <a
              href={whatsappUrl || INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="aquarius-button aquarius-button-primary"
            >
              Quiero consultar <span>↗</span>
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="aquarius-button aquarius-button-light"
            >
              <span>◎</span> Seguinos en Instagram
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="aquarius-footer">
        <a className="aquarius-logo" href="#inicio">
          <img
            src={logoAquarius}
            alt="Aquarius Cabañas Boutique"
            className="aquarius-logo-img"
          />
        </a>

        <p>Tu espacio para descansar y disfrutar.</p>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
        >
          Instagram ↗
        </a>

        <span className="aquarius-copyright">
          © {new Date().getFullYear()} Aquarius Cabañas
        </span>
        
        <div>  </div>
        <span className="aquarius-copyright">
         Desarrollado por: +54 9 3516557517
        </span>
      </footer>
    </main>
  );
};

export default Home;
