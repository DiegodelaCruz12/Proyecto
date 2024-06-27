import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';
import NavBar from './principales/NavBar';
import img_snake from '../../Proyecto/images/snake.png';
import '../styles/usuario.css';
const Snake = lazy(() => import('./componentes_juegos/snake'));

const JuegoTarjeta = ({ juego, seleccionarJuego }) => {
  const history = useHistory();

  const handleClick = () => {
    seleccionarJuego(juego);
    history.push(juego.ruta);
  };

  const tarjetaStyle = {
    backgroundImage: `url(${juego.imagen})`,
  };

  return (
    <div className="juego-tarjeta" style={tarjetaStyle} onClick={handleClick}>
      <h3>{juego.nombre}</h3>
    </div>
  );
};

const Usuario = () => {
  const [juegoSeleccionado, setJuegoSeleccionado] = useState(null);

  const juegos = [
    { nombre: 'Snake', ruta: '/snake', imagen: img_snake },
    // Puedes agregar más juegos aquí con sus respectivas imágenes
  ];

  return (
    <Router>
      <div className="usuario-container">
        <NavBar />
        <div className={`contenido-container ${juegoSeleccionado ? 'juego-seleccionado' : ''}`}>
          {juegoSeleccionado ? (
            <>
              <div className="lista-juegos">
                <ul>
                  {juegos.map((juego) => (
                    <li key={juego.nombre}>
                      <Link to={juego.ruta}>{juego.nombre}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="detalle-container">
                <Switch>
                  <Route path="/snake">
                    <Suspense fallback={<div>Cargando...</div>}>
                      <Snake />
                    </Suspense>
                  </Route>
                  {/* Agrega más rutas para otros juegos aquí */}
                </Switch>
              </div>
            </>
          ) : (
            <div className="tarjetas-container">
              {juegos.map((juego) => (
                <JuegoTarjeta key={juego.nombre} juego={juego} seleccionarJuego={setJuegoSeleccionado} />
              ))}
            </div>
          )}
        </div>
        <footer className="footer">
          <p>© 2024 Tu Empresa. Todos los derechos reservados.</p>
        </footer>
      </div>
    </Router>
  );
}

export default Usuario;

