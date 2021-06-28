import Me from '../components/Me' 
import Head from '../components/Head'
import homeStyles from '../styles/home.module.scss'

export default function HomePage() {
  return (
    <>
      <Head title="Oscar da Silva" iconSrc="/" />
      <Me />
    </>
  )
}