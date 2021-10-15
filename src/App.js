import React, { Fragment } from "react";
import Header from "./componentes/layout/Header";
import Navegacion from "./componentes/layout/Navegacion";

function App() {
  return (
    <Fragment>
      <Header />

      <div class="grid contenedor contenido-principal">
        <Navegacion />
      </div>
    </Fragment>
  );
}
export default App;
