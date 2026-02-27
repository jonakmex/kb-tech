import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import SearchBar from '@theme/SearchBar';
import styles from './index.module.css';

function HomepageSearch() {
  return (
    <main className={styles.page}>
      <div className={styles.searchWrapper}>
        <SearchBar />
      </div>
    </main>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="kb-tech Java Hello World example">
      <HomepageSearch />
    </Layout>
  );
}
