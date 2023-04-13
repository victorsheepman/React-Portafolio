import React from 'react'

export const Project = () => {
  return (
    <article className="proyect">
    <figure className="proyect__image">
        <img src="assets/images/blockmaster.jpg" alt="" />
    </figure>
    <div className="proyect__content">
        <span className="body_1">Block Master</span>
        <h3>Maquetando un diseño visual para una plataforma de peliculas utilizando una api.</h3>
        <div className="proyect__actions">
            <button className="button proyect__btn Niko"> <a href="https://practical-curie-e6b1e8.netlify.app">Ver detalle del proyecto</a></button>
            <button className="button proyect__btn--dark Niko"><a href="https://github.com/victorsheepman/React-BlockMaster">Ver código del proyecto</a></button>
        </div>
    </div>
</article>
  )
}
