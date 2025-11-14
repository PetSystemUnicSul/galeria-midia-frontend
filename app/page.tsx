// app/page.tsx
"use client";

import { useState } from "react";
import { Download, Shield, TvMinimalPlay } from "lucide-react";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const [hoveredBusiness, setHoveredBusiness] = useState<number | null>(null);
  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(
    null
  );
  const [hoveredFaq, setHoveredFaq] = useState<number | null>(null);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>
          <Image
            src="/assets/images/viu-logo-full.png" // <-- TIRAR O /public !!!
            alt="Logo VIU"
            width={150}
            height={50} // ajuste conforme sua logo (proporção real)
            priority // importante pro header
          />
        </div>
        <nav style={styles.navButtons}>
          <a
            href="/login"
            style={{
              ...styles.loginLink,
              color:
                hoveredButton === "login" ? "#cfe8ff" : styles.loginLink.color,
              transform:
                hoveredButton === "login" ? "translateY(-2px)" : "none",
            }}
            onMouseEnter={() => setHoveredButton("login")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Login
          </a>
          <a
            href="/login?mode=register"
            style={{
              ...styles.registerButton,
              backgroundColor:
                hoveredButton === "register"
                  ? "#0056b3"
                  : styles.registerButton.backgroundColor,
              transform:
                hoveredButton === "register" ? "translateY(-3px)" : "none",
              boxShadow:
                hoveredButton === "register"
                  ? "0 8px 20px rgba(0,86,179,0.35)"
                  : styles.registerButton.boxShadow,
            }}
            onMouseEnter={() => setHoveredButton("register")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Cadastrar
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        {/* Imagem de fundo otimizada */}
        <Image
          src="/home-background.jpg"
          alt="TV exibindo publicidade VIU"
          fill
          priority // carrega imediatamente (hero = importante)
          quality={90}
          style={{
            objectFit: "cover",
            objectPosition: "center",
            zIndex: 0,
          }}
        />

        {/* Overlay escuro para legibilidade do texto (essencial!) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(13,13,13,0.6) 0%, rgba(13,13,13,0.85) 70%)",
            zIndex: 1,
          }}
        />

        {/* Conteúdo do Hero */}
        <div style={styles.heroOverlay}>
          <div
            style={{ ...styles.heroContent, position: "relative", zIndex: 2 }}
          >
            <p style={styles.heroSmallText}>
              Transforme sua TV em uma Mídia Publicitária
            </p>
            <h1 style={styles.heroTitle}>
              Faça seus clientes <span style={styles.highlight}>VEREM</span>{" "}
              suas publicidades
            </h1>
            <p style={styles.heroDescription}>
              Chega de cartazes de promoção e cardápios colados na parede! Por
              apenas R$ 40/mês, transforme qualquer TV Smart em uma poderosa
              mídia publicitária que realmente chama atenção dos seus clientes.
            </p>
            <a href="/tv" style={styles.tvAccessButton}>
              Acessar na TV
            </a>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section style={styles.howItWorksSection}>
        <h2 style={styles.howItWorksTitle}>Como Funciona</h2>
        <div style={styles.stepsContainer}>
          <div style={styles.stepCard}>
            <div style={styles.iconWrapper}>
              <Download size={48} color="#007bff" strokeWidth={2} />
            </div>
            <h3 style={styles.stepNumber}>1. Faça Upload</h3>
            <p style={styles.stepDescription}>
              Envie suas imagens, vídeos e conteúdo publicitário através da
              nossa plataforma intuitiva.
            </p>
          </div>

          <div style={styles.stepCard}>
            <div style={styles.iconWrapper}>
              <Shield size={48} color="#007bff" strokeWidth={2} />
            </div>
            <h3 style={styles.stepNumber}>2. Gere o Código</h3>
            <p style={styles.stepDescription}>
              Receba um código único para acessar seu conteúdo em qualquer TV
              Smart conectada.
            </p>
          </div>

          <div style={styles.stepCard}>
            <div style={styles.iconWrapper}>
              <TvMinimalPlay size={48} color="#007bff" strokeWidth={2} />
            </div>
            <h3 style={styles.stepNumber}>3. Exiba na TV</h3>
            <p style={styles.stepDescription}>
              Digite o código na TV Smart e suas propagandas começam a rodar
              automaticamente.
            </p>
          </div>
        </div>
      </section>

      {/* Por que escolher o VIU? */}
      <section style={styles.whySection}>
        <h2 style={styles.sectionTitle}>Por que escolher o VIU?</h2>
        <div style={styles.benefitsGrid}>
          {[1, 2, 3, 4].map((id) => (
            <div
              key={id}
              style={{
                ...styles.benefitCard,
                transform: hoveredBenefit === id ? "scale(1.05)" : "scale(1)",
                boxShadow:
                  hoveredBenefit === id
                    ? "0 8px 24px rgba(0, 123, 255, 0.2)"
                    : "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={() => setHoveredBenefit(id)}
              onMouseLeave={() => setHoveredBenefit(null)}
            >
              <div style={styles.benefitIcon}>
                {id === 1 && "💰"}
                {id === 2 && "⚡"}
                {id === 3 && "🏹"}
                {id === 4 && "📱"}
              </div>
              <h3 style={styles.benefitTitle}>
                {id === 1 && "Economia Real"}
                {id === 2 && "Atualização Instantânea"}
                {id === 3 && "Atenção Garantida"}
                {id === 4 && "Fácil de Usar"}
              </h3>
              <p style={styles.benefitText}>
                {id === 1 &&
                  "Por apenas R$ 40/mês, elimine gastos com impressão de cartazes e materiais promocionais."}
                {id === 2 &&
                  "Altere suas promoções em segundos, sem precisar reimprimir nada."}
                {id === 3 &&
                  "Conteúdo dinâmico em movimento chama muito mais atenção que papel na parede."}
                {id === 4 &&
                  "Interface intuitiva. Qualquer pessoa consegue gerenciar o conteúdo."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Perfeito para seu negócio */}
      <section style={styles.businessSection}>
        <h2 style={styles.sectionTitle}>Perfeito para o seu Negócio</h2>
        <div style={styles.businessGrid}>
          {[
            {
              title: "Restaurantes & Bares",
              text: "Exiba cardápios digitais, promoções do dia e combos especiais...",
            },
            {
              title: "Lojas & Varejo",
              text: "Destaque ofertas, lançamentos e produtos em promoção...",
            },
            {
              title: "Salões & Clínicas",
              text: "Mostre seus serviços, pacotes promocionais e benefícios...",
            },
            {
              title: "Escritórios & Empresas",
              text: "Comunique avisos internos, metas da equipe e informações...",
            },
          ].map((item, index) => (
            <div
              key={index + 1}
              style={{
                ...styles.businessCard,
                transform:
                  hoveredBusiness === index + 1
                    ? "translateX(10px)"
                    : "translateX(0)",
                boxShadow:
                  hoveredBusiness === index + 1
                    ? "0 8px 24px rgba(0, 123, 255, 0.3)"
                    : "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={() => setHoveredBusiness(index + 1)}
              onMouseLeave={() => setHoveredBusiness(null)}
            >
              <h3 style={styles.businessTitle}>{item.title}</h3>
              <p style={styles.businessText}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Depoimentos */}
      <section style={styles.testimonialsSection}>
        <h2 style={styles.sectionTitle}>O que nossos clientes dizem</h2>
        <div style={styles.testimonialsGrid}>
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              style={{
                ...styles.testimonialCard,
                transform:
                  hoveredTestimonial === id ? "scale(1.03)" : "scale(1)",
                borderColor: hoveredTestimonial === id ? "#007bff" : "#2a2a2a",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={() => setHoveredTestimonial(id)}
              onMouseLeave={() => setHoveredTestimonial(null)}
            >
              <div style={styles.stars}>⭐⭐⭐⭐⭐</div>
              <p style={styles.testimonialText}>
                {id === 1 &&
                  '"Aumentamos nossas vendas de combos em 35% depois que começamos a usar o VIU..."'}
                {id === 2 &&
                  '"Antes gastávamos horas e muito dinheiro com gráfica. Agora mudamos as promoções em minutos..."'}
                {id === 3 &&
                  '"Nossos clientes adoram ver os serviços e produtos no telão. A apresentação ficou muito mais profissional..."'}
              </p>
              <div style={styles.testimonialAuthor}>
                <strong>
                  {id === 1 && "Maria Silva"}
                  {id === 2 && "João Santos"}
                  {id === 3 && "Ana Costa"}
                </strong>
                <span style={styles.testimonialRole}>
                  {id === 1 && "Dona - Hamburgueria do Bairro"}
                  {id === 2 && "Gerente - Supermercado Central"}
                  {id === 3 && "Proprietária - Salão Beleza & Estilo"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={styles.faqSection}>
        <h2 style={styles.sectionTitle}>Perguntas Frequentes</h2>
        <div style={styles.faqContainer}>
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <div
              key={id}
              style={{
                ...styles.faqItem,
                backgroundColor: hoveredFaq === id ? "#242424" : "#1a1a1a",
                borderColor: hoveredFaq === id ? "#007bff" : "#2a2a2a",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={() => setHoveredFaq(id)}
              onMouseLeave={() => setHoveredFaq(null)}
            >
              <h3 style={styles.faqQuestion}>
                {id === 1 && "Preciso de uma TV especial?"}
                {id === 2 && "É difícil de configurar?"}
                {id === 3 && "Que tipo de conteúdo posso usar?"}
                {id === 4 && "Posso alterar o conteúdo depois?"}
                {id === 5 && "Como funciona o pagamento?"}
                {id === 6 && "Tem suporte técnico?"}
              </h3>
              <p style={styles.faqAnswer}>
                {id === 1 &&
                  "Não! Qualquer TV Smart com acesso à internet funciona perfeitamente. Basta ter um navegador web."}
                {id === 2 &&
                  "Super simples! Você faz upload do conteúdo, gera um código e digita na TV. Leva menos de 5 minutos."}
                {id === 3 &&
                  "Imagens (JPG, PNG), vídeos (MP4) e até PDFs. Você tem total liberdade para criar o conteúdo que quiser."}
                {id === 4 &&
                  "Claro! Você pode adicionar, remover ou alterar conteúdo a qualquer momento. As mudanças aparecem na TV em tempo real."}
                {id === 5 &&
                  "Cobrança mensal de R$ 40 no cartão de crédito. Sem taxas de instalação, sem contratos longos. Cancele quando quiser."}
                {id === 6 &&
                  "Sim! Nossa equipe está disponível para ajudar você sempre que precisar. Suporte via WhatsApp e email."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <h3 style={styles.footerLogo}>VIU</h3>
            <p style={styles.footerDescription}>
              Transforme sua TV em uma poderosa ferramenta de marketing digital.
            </p>
          </div>
          <div style={styles.footerSection}>
            <h4 style={styles.footerHeading}>Produto</h4>
            <ul style={styles.footerList}>
              <li>
                <a href="#funcionalidades" style={styles.footerLink}>
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#como-funciona" style={styles.footerLink}>
                  Como Funciona
                </a>
              </li>
            </ul>
          </div>
          <div style={styles.footerSection}>
            <h4 style={styles.footerHeading}>Suporte</h4>
            <ul style={styles.footerList}>
              <li>
                <a href="#faq" style={styles.footerLink}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#tutoriais" style={styles.footerLink}>
                  Tutoriais
                </a>
              </li>
              <li>
                <a href="#contato" style={styles.footerLink}>
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div style={styles.footerSection}>
            <h4 style={styles.footerHeading}>Empresa</h4>
            <ul style={styles.footerList}>
              <li>
                <a href="#sobre" style={styles.footerLink}>
                  Sobre
                </a>
              </li>
              <li>
                <a href="#blog" style={styles.footerLink}>
                  Blog
                </a>
              </li>
              <li>
                <a href="#termos" style={styles.footerLink}>
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p style={styles.footerText}>
            © {new Date().getFullYear()} VIU. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Estilos (mantidos exatamente como você queria)
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#1a1a1a",
    color: "#f0f0f0",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem 5%",
    background: "rgba(13, 13, 13, 0.4)", // fundo semi-transparente
    backdropFilter: "blur(16px)", // blur do vidro
    WebkitBackdropFilter: "blur(16px)", // suporte Safari
    borderBottom: "1px solid rgba(42, 42, 42, 0.3)",
    borderTop: "1px solid rgba(255, 255, 255, 0.05)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
    // Borda sutil de luz (efeito premium)
    backgroundClip: "padding-box",
  },
  logo: { fontSize: "2rem", fontWeight: "bold" },
  logoText: {
    background: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  navButtons: { display: "flex", gap: "1.5rem", alignItems: "center" },
  loginLink: {
    color: "#f0f0f0",
    textDecoration: "none",
    fontWeight: "500",
    transition: "color 0.3s",
  },
  registerButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "0.75rem 1.5rem",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    boxShadow: "0 4px 12px rgba(0,123,255,0.3)",
    transition: "all 0.3s",
  },
  heroSection: {
    position: "relative",
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden", // importante pro fill da imagem
    padding: "0 5%",
  },
  heroOverlay: { maxWidth: "1200px", width: "100%" },
  heroContent: { textAlign: "center" },
  heroSmallText: {
    color: "#007bff",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "2px",
    marginBottom: "1rem",
  },
  heroTitle: {
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
    fontWeight: "800",
    lineHeight: "1.2",
    marginBottom: "1.5rem",
  },
  highlight: {
    background: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  heroDescription: {
    fontSize: "clamp(1rem, 2vw, 1.25rem)",
    color: "#c0c0c0",
    maxWidth: "800px",
    margin: "0 auto 2.5rem auto",
    lineHeight: "1.7",
  },
  tvAccessButton: {
    display: "inline-block",
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "1rem 3rem",
    borderRadius: "12px",
    fontWeight: "700",
    textDecoration: "none",
    boxShadow: "0 8px 24px rgba(0,123,255,0.4)",
    transition: "all 0.25s ease",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  howItWorksSection: { padding: "5rem 5%", backgroundColor: "#0d0d0d" },
  howItWorksTitle: {
    fontSize: "clamp(2rem, 4vw, 3rem)",
    textAlign: "center",
    marginBottom: "4rem",
    fontWeight: "700",
  },
  stepsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2.5rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  stepCard: {
    backgroundColor: "#1a1a1a",
    padding: "2.5rem 2rem",
    borderRadius: "16px",
    textAlign: "center",
    border: "1px solid #2a2a2a",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
  },
  iconWrapper: {
    marginBottom: "1.5rem",
    display: "flex",
    justifyContent: "center",
  },
  stepNumber: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#007bff",
    marginBottom: "1rem",
  },
  stepDescription: { color: "#c0c0c0", lineHeight: "1.6" },
  whySection: { padding: "5rem 5%", backgroundColor: "#1a1a1a" },
  sectionTitle: {
    fontSize: "clamp(2rem, 4vw, 3rem)",
    textAlign: "center",
    marginBottom: "4rem",
    fontWeight: "700",
  },
  benefitsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  benefitCard: {
    backgroundColor: "#0d0d0d",
    padding: "2rem",
    borderRadius: "12px",
    textAlign: "center",
    border: "1px solid #2a2a2a",
  },
  benefitIcon: { fontSize: "3rem", marginBottom: "1rem" },
  benefitTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#007bff",
    marginBottom: "1rem",
  },
  benefitText: { color: "#c0c0c0", lineHeight: "1.6" },
  businessSection: { padding: "5rem 5%", backgroundColor: "#0d0d0d" },
  businessGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  businessCard: {
    backgroundColor: "#1a1a1a",
    padding: "2.5rem 2rem",
    borderRadius: "16px",
    border: "2px solid #007bff",
  },
  businessTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    marginBottom: "1rem",
  },
  businessText: { color: "#c0c0c0", lineHeight: "1.6" },
  testimonialsSection: { padding: "5rem 5%", backgroundColor: "#1a1a1a" },
  testimonialsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  testimonialCard: {
    backgroundColor: "#0d0d0d",
    padding: "2.5rem",
    borderRadius: "16px",
    border: "1px solid #2a2a2a",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  stars: { fontSize: "1.5rem", color: "#ffc107" },
  testimonialText: { fontStyle: "italic", flex: 1, lineHeight: "1.7" },
  testimonialAuthor: {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
  },
  testimonialRole: { fontSize: "0.9rem", color: "#007bff" },
  faqSection: { padding: "5rem 5%", backgroundColor: "#0d0d0d" },
  faqContainer: {
    maxWidth: "900px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  faqItem: {
    backgroundColor: "#1a1a1a",
    padding: "2rem",
    borderRadius: "12px",
    border: "1px solid #2a2a2a",
  },
  faqQuestion: {
    fontSize: "1.25rem",
    fontWeight: "700",
    color: "#007bff",
    marginBottom: "1rem",
  },
  faqAnswer: { color: "#c0c0c0", lineHeight: "1.7", margin: 0 },
  footer: { backgroundColor: "#0d0d0d", borderTop: "1px solid #2a2a2a" },
  footerContent: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "3rem",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "4rem 5% 2rem",
  },
  footerSection: { display: "flex", flexDirection: "column", gap: "1rem" },
  footerLogo: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    background: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    margin: 0,
  },
  footerDescription: {
    color: "#c0c0c0",
    fontSize: "0.95rem",
    lineHeight: "1.6",
  },
  footerHeading: {
    color: "#f0f0f0",
    fontSize: "1.1rem",
    fontWeight: "700",
    marginBottom: "0.5rem",
  },
  footerList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
  footerLink: {
    color: "#c0c0c0",
    textDecoration: "none",
    fontSize: "0.95rem",
    transition: "color 0.3s",
  },
  footerBottom: {
    borderTop: "1px solid #2a2a2a",
    padding: "2rem 5%",
    textAlign: "center",
  },
  footerText: { color: "#808080", fontSize: "0.9rem", margin: 0 },
};
