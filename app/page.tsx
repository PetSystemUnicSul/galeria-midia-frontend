// app/page.tsx
import Link from 'next/link';
import Image from 'next/image'; // Para a imagem de fundo
import styles from './home.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          VIU
        </Link>
        <nav className={styles.navButtons}>
          <Link href="/login">Login</Link>
          <Link href="/login?mode=register" className={styles.register}>
            Cadastrar
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        {/* Imagem de fundo será aplicada via CSS */}
        {/* Adicionei uma imagem para evitar erros, mas o CSS irá sobrescrevê-la para um estilo melhor */}
        {/* <Image
          src="/keyboard-bg.jpg" // Você precisará colocar essa imagem na pasta /public
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        /> */}
        <div className={styles.heroContent}>
          <p className={styles.heroSmallText}>Transforme sua TV em uma Mídia Publicitária</p>
          <h1 className={styles.heroTitle}>
            Faça seus clientes <span className={styles.highlight}>VEREM</span> suas
            publicidades
          </h1>
          <p className={styles.heroDescription}>
            Chega de cartazes de promoção e cardápios colados na parede! Por apenas R$
            40/mês, transforme qualquer TV Smart em uma poderosa mídia publicitária que
            realmente chama atenção dos seus clientes.
          </p>
          <Link href="/tv" className={styles.tvAccessButton}>
            Acessar na TV
          </Link>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className={styles.howItWorksSection}>
        <h2 className={styles.howItWorksTitle}>Como Funciona</h2>
        <div className={styles.stepsContainer}>
          {/* Step 1 */}
          <div className={styles.stepCard}>
            <span className={styles.stepIcon}>⬇️</span> {/* Ícone de download */}
            <h3 className={styles.stepNumber}>1. Faça Upload</h3>
            <p className={styles.stepDescription}>
              Envie suas imagens, vídeos e conteúdo publicitário através da nossa
              plataforma intuitiva.
            </p>
          </div>
          {/* Step 2 */}
          <div className={styles.stepCard}>
            <span className={styles.stepIcon}>🛡️</span> {/* Ícone de escudo */}
            <h3 className={styles.stepNumber}>2. Gere o Código</h3>
            <p className={styles.stepDescription}>
              Receba um código único para acessar seu conteúdo em qualquer TV Smart
              conectada.
            </p>
          </div>
          {/* Step 3 */}
          <div className={styles.stepCard}>
            <span className={styles.stepIcon}>📺</span> {/* Ícone de TV */}
            <h3 className={styles.stepNumber}>3. Exiba na TV</h3>
            <p className={styles.stepDescription}>
              Digite o código na TV Smart e suas propagandas começam a rodar
              automaticamente.
            </p>
          </div>
        </div>
      </section>

      {/* Footer (Simples, pode ser mais elaborado se quiser) */}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} VIU. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}