import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title> Início | ig.news</title>
      </Head>

      <main className={styles.contentContainer} >
        <section className={styles.hero} >
          <span> 👏 Olá, seja bem vindo  </span>
          <h1> Novidades sobre o universo <span> React </span>   </h1>
          <p> 
            Acesse todas as publicações por <br /> 
            <span>  R$ 9,90 por mês </span>
          </p>
          <SubscribeButton/>
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}
