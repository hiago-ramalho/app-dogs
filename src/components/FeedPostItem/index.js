import styles from './FeedPostItem.module.css';

export default function FeedPostItem({ photo }) {
  return (
    <li className={styles.photo}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.views}>{photo.acessos}</span>
    </li>
  )
}