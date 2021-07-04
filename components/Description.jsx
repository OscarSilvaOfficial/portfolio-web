import stylesDesc from '../styles/description.module.scss'
import Image from 'next/image'
import { useEffect } from "react";

function checkVisible(elm) {
  const rect = elm.getBoundingClientRect();
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
    document.querySelector("." + stylesDesc.span__animation__right).style.display = 'block'
    document.querySelector("." + stylesDesc.span__animation__right).classList
      .add('animate__animated', 'animate__backInRight')
  } 
}

export default function Description() {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setTimeout(() => {
        checkVisible(document.querySelector('.' + stylesDesc.my__description))
      } , 1000)
    });
  });

  return (
    <article className={`${stylesDesc.my__description}`}>
      <span className={stylesDesc.span__animation__right}>
        <div className={stylesDesc.abas}>
          <div className={stylesDesc.selected__aba}>
            <div className={stylesDesc.icon__mda}>
              <Image
                src="/icons/markdown.ico"
                alt="My picture"
                width={20}
                height={20}
                layout="fixed"
                quality="100"
                format="webp"
                priority={true}
              />
            </div>
            <span>README.md</span>
            <span className={stylesDesc.close_btn}>x</span>
          </div>
          <div className={stylesDesc.unselected__aba}></div>
        </div>
        <div className={stylesDesc.code__pages}>
          <h2 className={`${stylesDesc.sub_title}`}> => Quem sou eu ? ☕</h2>
          <p className={stylesDesc.code__md}>
            Sou programador, e agradeço a Deus todos os dias por
            saber a minha profissão desde cedo, e ainda mais, por me dar a
            oportunidade de trabalhar no que amo e nunca perder a vontade de estudar.
          </p>
          <p className={stylesDesc.code__md}>
            Eu acredito que nunca sei o suficiente sobre esse mundo, e por esse motivo
            todos os dias me dedico ao máximo pra aprender, ensinar e evoluir, a final
            depois destruir e reconstruir novamentem, isso várias e várias vezes.
            o que me fascina é isso, construir, estudar e perceber que fiz tudo errado
          </p>
          <p className={stylesDesc.code__md}>
            Na verdade, acredito que a programação é uma arte, e mostra muito de cada um,
            desde a identação até uma abstração complexa pra fazer uma simples query SQL.
          </p>
          <p className={stylesDesc.code__md}>
            Se você ler o meu código, muito provavelmente, vai entender muito de quem eu sou,
            e se ver o meu GitHub, saberá toda minha história como desenvolvedor profissional.
            Isso é o que eu amo, e espero que até os meus ultimos dias, eu possa continuar
            expressando a minha arte :).
          </p>
        </div>
      </span>
    </article>
  )
}