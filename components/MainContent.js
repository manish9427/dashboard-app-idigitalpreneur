import styles from "./styles/MainContent.module.css";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 200 },
  { month: "Feb", revenue: 300 },
  { month: "Mar", revenue: 250 },
  { month: "Apr", revenue: 400 },
  { month: "May", revenue: 350 },
  { month: "Jun", revenue: 500 },
  { month: "Jul", revenue: 450 },
  { month: "Aug", revenue: 300 },
  { month: "Sep", revenue: 480 },
  { month: "Oct", revenue: 420 },
  { month: "Nov", revenue: 500 },
  { month: "Dec", revenue: 550 },
];

export default function MainContent() {
  return (
    <main className={styles.main}>
      <div className={styles.gridContainer}>
        {/* Earnings Insights */}
        <div className={styles.earningsInsights}>
          <h3>Earnings Insights</h3>
          <p className={styles.subheading}>Performance Summary</p>
          <div className={styles.metricsGrid}>
            <div className={styles.metricCard}>
              <Image
                src="/all-time-icon.png"
                alt="All Time"
                width={32}
                height={32}
              />
              <p className={styles.metricValue}>₹51,060</p>
              <p>All Time</p>
              <p className={styles.metricChange}>+10% from yesterday</p>
            </div>
            <div className={styles.metricCard}>
              <Image
                src="/paid-icon.png"
                alt="All Time Paid"
                width={32}
                height={32}
              />
              <p className={styles.metricValue}>₹21,340</p>
              <p>All Time Paid</p>
              <p className={styles.metricChange}>+8% from yesterday</p>
            </div>
            <div className={styles.metricCard}>
              <Image
                src="/30-days-icon.png"
                alt="In last 30 Days"
                width={32}
                height={32}
              />
              <p className={styles.metricValue}>₹10,162</p>
              <p>In last 30 Days</p>
              <p className={styles.metricChange}>+2% from yesterday</p>
            </div>
            <div className={styles.metricCard}>
              <Image
                src="/7-days-icon.png"
                alt="In last 7 Days"
                width={32}
                height={32}
              />
              <p className={styles.metricValue}>₹3,890</p>
              <p>In last 7 Days</p>
              <p className={styles.metricChange}>+3% from yesterday</p>
            </div>
          </div>
        </div>

        {/* Earning Level */}
        <div className={styles.earningLevel}>
          <div className={styles.earningLevelHeader}>
            <h3>Earning Level</h3>
            <p className={styles.earningValue}>Earning ₹3,890</p>
            <select className={styles.timePeriod}>
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
          </div>

          <div className={styles.barChart}>
            <div className={styles.bar} style={{ height: "64px" }}></div>
            <div className={styles.bar} style={{ height: "48px" }}></div>
            <div className={styles.bar} style={{ height: "80px" }}></div>
            <div className={styles.bar} style={{ height: "32px" }}></div>
            <div className={styles.bar} style={{ height: "96px" }}></div>
            <div className={styles.bar} style={{ height: "64px" }}></div>
            <div className={styles.bar} style={{ height: "48px" }}></div>
          </div>
          <div className={styles.dayLabels}>
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>
            <span>S</span>
          </div>
          
        </div>

        {/* Your Rank & Total Earning */}
        <div className={styles.rankEarningsContainer}>
          <div className={styles.yourRank}>
            <h3>Your Rank</h3>
            <p className={styles.subheading}>Among other affiliates</p>
            <p className={styles.rankValue}>#6987</p>
            <div className={styles.rankList}>
              <div className={styles.rankItem}>
                <Image
                  src="/taniya-avatar.png"
                  alt="Taniya"
                  width={40}
                  height={40}
                />
                <div className={styles.nameAndRank}>
                  <p>Taniya Patyal</p>
                  <p className={styles.rankNumber}>#6986</p>
                </div>
              </div>
              <div className={styles.rankItem}>
                <Image
                  src="/piyush-avatar.png"
                  alt="Piyush"
                  width={40}
                  height={40}
                />
                <div className={styles.nameAndRank}>
                  <p>Piyush Patyal</p>
                  <p className={styles.rankNumber}>#6987</p>
                </div>
              </div>
              <div className={styles.rankItem}>
                <Image
                  src="/uttkarsh-avatar.png"
                  alt="Uttkarsh"
                  width={40}
                  height={40}
                />
                <div className={styles.nameAndRank}>
                  <p>Uttkarsh Singh</p>
                  <p className={styles.rankNumber}>#6988</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.totalEarnings}>
            <h3>Total Earning</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart
                data={revenueData}
                margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
                <XAxis dataKey="month" stroke="#718096" />
                <YAxis stroke="#718096" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#14B8A6"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </main>
  );
}
