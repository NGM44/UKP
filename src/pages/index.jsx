import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Head>
        <title>UK Pickles</title>
        <meta
          name="description"
          content="Authentic homemade mango pickle, mixed pickle, lemon pickle, and papad made with the freshest ingredients in Karwar, Karnataka. Savor the delicious flavors and tangy taste of our pickles and crunchy papads. Order now for doorstep delivery."
          keywords="uk pickles,pickles in karwar, best pickles, best pickles near me , mango pickle, mixed pickle, lemon pickle, papad, Karwar, Karnataka, homemade, authentic, fresh, tangy, flavors, crunchy, doorstep delivery"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <Testimonials />
        {/*Depends on time <Faqs /> */}
      </main>
      <Footer />
    </>
  )
}
