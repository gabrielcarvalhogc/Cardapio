import Logo from '../../../../assets/logo.svg';
import styles from './Item.module.scss';

export default function Item() {
  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={Logo} alt="imagem"/>
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>Macarrao</h2>
          <p>Descricao do macarrao</p>
        </div>
        <div className={styles.item__tags}>
          <div className={styles.item__tipo}>massa</div>
          <div className={styles.item__porcao}>400g</div>
          <div className={styles.item__qtdpessoas}>Serve 2 pessoas</div>
          <div className={styles.item__valor}>R$ 50</div>
        </div>
      </div>
    </div>
  )
}