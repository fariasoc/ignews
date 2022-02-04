
import Head from 'next/head';
import styles from './styles.module.scss';


export default function Posts(){
  return(
    <>
    <Head>
      <title>Posts | Ignews </title>
    </Head>

    <main className={styles.container}>
      <div className={styles.posts}>
        <a href="#">
          <time> 12 de março de 2021 </time>
          <strong> Criando um Monorepo com O Lerna & Yarn Workspaces </strong>
          <p> Neste guia você conseguirá gerenciar um Monorepo e múltiplos pacotes com o compartilhamento ... </p>
        </a>
        <a href="#">
          <time> 12 de março de 2021 </time>
          <strong> Criando um Monorepo com O Lerna & Yarn Workspaces </strong>
          <p> Neste guia você conseguirá gerenciar um Monorepo e múltiplos pacotes com o compartilhamento ... </p>
        </a>
        <a href="#">
          <time> 12 de março de 2021 </time>
          <strong> Criando um Monorepo com O Lerna & Yarn Workspaces </strong>
          <p> Neste guia você conseguirá gerenciar um Monorepo e múltiplos pacotes com o compartilhamento ... </p>
        </a>
        <a href="#">
          <time> 12 de março de 2021 </time>
          <strong> Criando um Monorepo com O Lerna & Yarn Workspaces </strong>
          <p> Neste guia você conseguirá gerenciar um Monorepo e múltiplos pacotes com o compartilhamento ... </p>
        </a>
      </div>
    </main>

    </>
  );
}