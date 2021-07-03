import Image from 'next/image'
import stylesMe from '../styles/me.module.scss'
import { useEffect } from "react";

function titleAnimation() {
  document.querySelector("#my__name").style.display = "block"
  document.querySelector("#my__profession").style.display = "block"
  document.querySelector("#description").classList
    .add('animate__animated', 'animate__fadeInDown')
}

export default function Me() {
  useEffect(() => {
    setTimeout(titleAnimation, 100)
  });

  return (
    <main className={stylesMe.me}>
      <section id="description" className={stylesMe.description}>
        <h1 id="my__name" className={`${stylesMe.game__font} ${stylesMe.name}`}>Oscar da Silva</h1>
        <h2 id="my__profession" className={`${stylesMe.game__font} ${stylesMe.profession}`}>FullStack Developer</h2>
      </section>
    </main>
  )
}
