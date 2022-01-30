import { GetStaticProps } from 'next';
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';
import styles from './home.module.scss';


// 03 Formas de  realizar uma chamada no react

// Client0-side
// Server-side
// Static 

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({product}: HomeProps) {
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
            <span>  { product.amount } por mês </span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}

//getServerSideProps

export const getStaticProps: GetStaticProps = async () => {
  
  const price = await stripe.prices.retrieve('price_1KNlwiD8PRPNTeZpxUYhEelo')

  /*
  const price = await stripe.prices.retrieve('price_1KNlwiD8PRPNTeZpxUYhEelo', {
    expand: ['product']
  })
  */

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price.unit_amount / 100), 
  }
  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // Essa página será revalidade a cada 24 horas
  }
}
