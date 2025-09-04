import styles from './styles/Sidebar.module.css';
import Image from 'next/image';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Image src="/razorpay-logo.png" alt="Razorpay Logo" width={100} height={32} />
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItemActive}>
          <Image src="/dashboard-icon.png" alt="Dashboard" width={20} height={20} />
          <span>Dashboard</span>
        </li>
        <li className={styles.navItem}>
          <Image src="/earnings-icon.png" alt="Earnings" width={20} height={20} />
          <span>Earnings</span>
        </li>
        <li className={styles.navItem}>
          <Image src="/tiers-icon.png" alt="Tiers" width={20} height={20} />
          <span>Tiers</span>
        </li>
        <li className={styles.navItem}>
          <Image src="/m-tools-icon.png" alt="m-Tools" width={20} height={20} />
          <span>m-Tools</span>
        </li>
        <li className={styles.navItem}>
          <Image src="/trainings-icon.png" alt="Trainings" width={20} height={20} />
          <span>Trainings</span>
        </li>
        <li className={styles.navItem}>
          <Image src="/kyc-icon.png" alt="KYC" width={20} height={20} />
          <span>KYC</span>
        </li>
        <li className={styles.navItem}>
          <Image src="/leadlink-icon.png" alt="LeadLink" width={20} height={20} />
          <span>LeadLink</span>
        </li>
        <li className={styles.navItem}>
          <Image src="/refinfo-icon.png" alt="Refinfo" width={20} height={20} />
          <span>Refinfo</span>
        </li>
        <li className={styles.navItem}>
          <Image src="/qualify-icon.png" alt="Qualify" width={20} height={20} />
          <span>Qualify</span>
        </li>
        <li className={styles.navItem}>
          <Image src="/rewards-icon.png" alt="Rewards" width={20} height={20} />
          <span>Rewards</span>
        </li>
      </ul>
    </div>
  );
}