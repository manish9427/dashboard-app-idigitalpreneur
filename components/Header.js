import styles from './styles/Header.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <h2>Hello, Piyush Patyal 👋</h2>
        <div className={styles.timerInfo}>
          <span>6 Days 11 Hr 59 Min 09 Sec</span>
          <span>Your next level is just one click away...</span>
        </div>
      </div>
      <div className={styles.headerRight}>
        <Image src="/rocket-icon.png" alt="Rocket" width={48} height={48} />
        <div className={styles.userIcon}>
          {/* <Image src="/notification-icon.png" alt="User" width={32} height={32} /> */}
          <Image src="/user-icon.png" alt="User" width={32} height={32} />
          {/* <span className={styles.notificationDot}></span> */}
        </div>
      </div>
    </header>
  );
}