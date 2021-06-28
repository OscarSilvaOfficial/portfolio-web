import Image from 'next/image'
import stylesMe from '../styles/me.module.scss'

export default function Me() {
  return (
    <main className={stylesMe.me}>
      <Image 
        className={stylesMe.image__me}
        src="/me.png"
        alt="My picture"
        width={200}
        height={200}
        format="webp"
      />
    </main>
  )
}
