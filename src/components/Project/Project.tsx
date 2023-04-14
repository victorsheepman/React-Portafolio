import React from 'react'
interface props{
    title:string
    img:string
    stack:string
    github:string
    web?:string
}
export const Project:React.FC<props> = ({title, img, stack, github, web}) => {
  return (
    <article className="proyect">
    <figure className="proyect__image">
        <img src={img} alt="" />
    </figure>
    <div className="proyect__content">
        <span className="body_1">{stack}</span>
        <h3>{title}</h3>
        <div className="proyect__actions">
            <button className="button proyect__btn Niko"> <a href={web}>Ver detalle del proyecto</a></button>
            <button className="button proyect__btn--dark Niko"><a href={github}>Ver código del proyecto</a></button>
        </div>
    </div>
</article>
  )
}
