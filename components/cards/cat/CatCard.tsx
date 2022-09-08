import styles from './CatCard.module.css';

export interface ICatCard {
  sampleTextProp: string;
}

const CatCard: React.FC<ICatCard> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp} aaaa</div>;
};

export default CatCard;
