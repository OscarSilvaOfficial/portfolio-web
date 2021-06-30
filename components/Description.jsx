import stylesDesc from '../styles/description.module.scss'
import { useEffect } from "react";

function loadSectionAnimation() {
  const element = document.querySelector('.' + stylesDesc.my__description);
  const position = element.getBoundingClientRect();

  if (position.top >= 0 && position.bottom <= window.innerHeight) {
    document.querySelector("." + stylesDesc.span__animation__right).style.display = 'block'
    document.querySelector("." + stylesDesc.span__animation__right).classList
      .add('animate__animated', 'animate__backInRight')
  }
}

export default function Description() {
  useEffect(() => {
    window.addEventListener('load', () => {
      loadSectionAnimation()
    });
    window.addEventListener('scroll', () => {
      loadSectionAnimation()
    });
  });

  return (
    <article className={`${stylesDesc.my__description}`}>
      <span className={stylesDesc.span__animation__right}>
        <h2 className={`${stylesDesc.sub_title}`}>Quem sou eu ? ☕</h2>
        <p>
          Sou programador FullStack, e agradeço a Deus todos os dias por
          saber a minha profissão desde cedo, e ainda mais, por me dar a
          oportunidade de trabalhar no que amo e nunca perder a vontade de estudar,
          a cada dia aprendo algo e sempre quero mais e mais.
        </p>
      </span>
    </article>
  )
}