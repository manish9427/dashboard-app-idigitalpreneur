import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MainContent from '../components/MainContent';

export default function Home() {
  return (
    <div className="app-container">
      <Head>
        <title>Razorpay Dashboard</title>
        <meta name="description" content="Affiliate Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <div className="main-content">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}