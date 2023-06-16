import React from 'react'
import Head from 'next/head'
// useRouter
/*
para hacer una navegacion programatica se recomienda que esto solo funcione con un formulario
const router = useRouter()
*/


function PageLayout ({ children, title = 'HIS app'}) {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content="Aprende inglés de manera fácil y efectiva con nuestro servicio de mentoría personalizada. Ofrecemos cursos en línea y materiales de aprendizaje interactivos para que puedas mejorar tu habilidad de comunicarte en inglés en poco tiempo. ¡Únete a nuestra comunidad de aprendizaje hoy mismo!" />
            <meta name="keywords" content="aprendizaje del idioma inglés, tutoría en línea, mentoría personalizada, material de aprendizaje interactivos" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            {children}
        </main>
    </>
  )
}

export { PageLayout }