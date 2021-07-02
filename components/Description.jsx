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
        <p className={stylesDesc.code__md}>
          => Sou programador, e agradeço a Deus todos os dias por
          saber a minha profissão desde cedo, e ainda mais, por me dar a
          oportunidade de trabalhar no que amo e nunca perder a vontade de estudar.
        </p>
        <p className={stylesDesc.code__md}>
          => Eu acredito que nunca sei o suficiente sobre esse mundo, e por esse motivo
          todos os dias me dedico ao máximo pra aprender, ensinar e evoluir, a final
          depois destruir e reconstruir novamentem, isso várias e várias vezes.
          o que me fascina é isso, construir, estudar e perceber que fiz tudo errado
        </p>
        <p className={stylesDesc.code__md}>
          => Na verdade, acredito que a programação é uma arte, e mostra muito de cada um,
          desde a identação até uma abstração complexa pra fazer uma simples query SQL.
        </p>
        <p className={stylesDesc.code__md}> 
          => Se você ler o meu código, muito provavelmente, vai entender muito de quem eu sou,
          e se ver o meu GitHub, saberá toda minha história como desenvolvedor profissional.
          Isso é o que eu amo, e espero que até os meus ultimos dias, eu possa continuar
          expressando a minha arte :).
        </p>
      </span>
    </article>
  )
}