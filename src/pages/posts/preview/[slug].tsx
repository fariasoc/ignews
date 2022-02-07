import { GetStaticPaths, GetStaticProps } from "next";
import { getSession, useSession } from "next-auth/react";
import { getPrismicClient } from "../../../services/prismic";
import { RichText } from 'prismic-dom';
import Head  from "next/head";

import styles from '../post.module.scss';
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

interface PostPreviewProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  }
}

export default function PostPreview({ post }: PostPreviewProps){
  
  const { data: session } = useSession()
  const router = useRouter()  

  useEffect(() => {
    if(session?.activeSubscription){
      router.push(`/posts/${post.slug}`)
    }
  }, [{session}] )

  return (
    <> 
      <Head>
          <title> {post.title} | Ignews </title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post} >
          <h1> {post.title} </h1>
          <time> {post.updatedAt} </time>
         <div 
          className={`${styles.postContent} ${styles.previewContent} `}
         dangerouslySetInnerHTML ={{ __html:   post.content}} > 
        
          </div>

        <div className={styles.continueReading}>
          Deseja continuar a leitura? 
          <Link href="/">
            <a href=""> Se inscrever agora 🤗 </a>
          </Link>
        </div>

        </article>
      </main>

    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
    // true: carregamento pelo lado do cliente || 02 problemas: Layout shift / Quebra | Gera problema de indexação nos buscadores (Google por exemplo)
    // false: Não tenta realizar a busca de um conteúdo que ainda não foi gerado estaticamente
    // blocking: Gera via SSR 
  }
}

/*export const getServerSideProps = async ( req, params, ) => {*/
export const getStaticProps: GetStaticProps = async ({params}) => {
  //const  slug = params?.slug;

  const { slug } = params;  

  const prismic = getPrismicClient()

  const response = await prismic.getByUID<any>('publication', String(slug), {})

  const post = {
    slug: response.uid,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content.splice(0,3)),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })

  }

  return {
    props: {
      post,
    },
    redirect: 60 * 30, // 30 minutos
  }



}