import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import Hero from '../components/home/hero';
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>박채연 포트폴리오</title>
        <meta name='description' content='오늘도 타닥타닥!' />
      </Head>
      <section class='flex min-h-screen flex-col items-center justify-center text-gray-600 body-font'>
        <div class='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <Hero />
        </div>
      </section>
    </Layout>
  );
}
