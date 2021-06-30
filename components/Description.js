import stylesDesc from '../styles/description.module.scss'

export default function Description() {
  return (
    <article className={`${stylesDesc.my__description}`}>
      <h2 className={`${stylesDesc.sub_title}`}>Quem sou eu ? ☕</h2>
      <p>
        Sou programador FullStack, e agradeço a Deus todos os dias por
        saber a minha profissão desde cedo, e ainda mais, por me dar a
        oportunidade de trabalhar no que amo e nunca perder a vontade de estudar, 
        a cada dia aprendo algo e sempre quero mais e mais.
      </p>
    </article>
  )
}