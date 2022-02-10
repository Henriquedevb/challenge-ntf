import Head from 'next/head'
import Image from 'next/image'
import styles from './style.module.css'

import logo from "/public/assets/logo_MetaMask.svg"
import banner from "/public/assets/badge.svg"
import groupAvatar from "/public/assets/group-avarts.png"

import astronauta1 from "/public/assets/galeria-1.png"
import astronauta2 from "/public/assets/galeria-2.png"
import astronauta3 from "/public/assets/galeria-3.png"
import astronauta4 from "/public/assets/galeria-4.png"
import astronauta5 from "/public/assets/galeria-5.png"
import astronauta6 from "/public/assets/galeria-6.png"
import astronauta7 from "/public/assets/galeria-7.png"
import astronauta8 from "/public/assets/galeria-8.png"

export default function LandingPage() {
  return (
    <div className={styles['one-container']}>
      <Head>
        <link rel="icon" href="/public/favicon.ico" />

        <title>Rocket NFTs</title>
      </Head>
      <header className={styles['top-header']}>
        <h2>Rocket <span>NFTs</span></h2>

        <ul>
          <li>Comprar NFT</li>
          <li>Sobre</li>
          <li>FAQ</li>
        </ul>

        <button>
          <Image src={logo} alt="icone da metamask" />
          Conectar carteira
        </button>
      </header>

      <section className={styles['descubra-section']}>
        <div className={styles['span-destaque']}>
          <p>Mercado digital para colecionáveis em criptos e tokens não fungível (NFT).
            Compre, venda e descubra ativos digitais exclusivos para você.</p>

          <section className={styles['container-avatar']}>

            <Image src={groupAvatar} alt="grupo de avatars" className={styles['avatar-section']} />

            <section >
              <strong>+10</strong>
              <br />
              <p>Artistas selecionados</p>
            </section>

          </section>



        </div>

        <div className={styles['central-name']}>
          <p>Descubra a verdadeira
            arte digital e colecione diversas <span>NFTs</span>
          </p>
        </div>

        <div>
          <Image src={banner} alt="banner" width={200} height={200} />
        </div>
      </section>

      <section className={styles['galery-section']}>

        <div className={styles['galery-section-one']}>
          <Image src={astronauta1} alt="banner" width={307} height={198} />
          <Image src={astronauta2} alt="banner" width={307} height={198} />
          <Image src={astronauta3} alt="banner" width={307} height={198} />
          <Image src={astronauta4} alt="banner" width={307} height={198} />
        </div>

        <div className={styles['galery-section-two']}>
          <Image src={astronauta5} alt="banner" width={307} height={198} />
          <Image src={astronauta6} alt="banner" width={307} height={198} />
          <Image src={astronauta7} alt="banner" width={307} height={198} />
          <Image src={astronauta8} alt="banner" width={307} height={198} />
        </div>

      </section >
    </div >
  )
}