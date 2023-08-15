import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2>Projeto criado por 
        <a href="https://github.com/gabrielcarvalhogc" rel='noreferrer' target='_blank'> Gabriel Carvalho</a>
      </h2>
      <p>Este projeto e feito por ficção e não tem fins lucrativos</p>
    </footer>
  );
}