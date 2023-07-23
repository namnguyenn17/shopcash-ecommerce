import Image from 'next/image'
import styles from '/styles/Home.module.scss'
import Header from '@/components/header'
import Footer from '@/components/footer'
import axios from 'axios'
import Main from '@/components/home/main'
import { useSession, signIn, signOut } from 'next-auth/react'
import FlashDeals from '@/components/home/flashDeals'
import Category from '@/components/home/category'
import { women_dresses, women_shoes, women_accessories } from '@/data/home'
import { useMediaQuery } from 'react-responsive'

export default function Home({ country }) {
  const { data: session } = useSession()
  const isMedium = useMediaQuery({ query: '(max-width: 850px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 550px)' })

  return (
    <>
      <Header country={country} />
      <div className={styles.home}>
        <div className={styles.container}>
          <Main />
          <FlashDeals />
          <div className={styles.home__category}>
            <Category
              title="Dresses"
              products={women_dresses}
              background="#5a31f4"
            />
            {!isMedium && (
              <Category
                title="Shoes"
                products={women_shoes}
                background="#f4a05a"
              />
            )}
            {isMobile && (
              <Category
                title="Shoes"
                products={women_shoes}
                background="#f4a05a"
              />
            )}
            <Category
              title="Accessories"
              products={women_accessories}
              background="#6cc070"
            />
          </div>
        </div>
      </div>
      <Footer country={country} />
    </>
  )
}

export async function getServerSideProps() {
  let data = await axios
    .get('https://api.ipregistry.co/?key=g0bcdrvyu67hr4vi')
    .then((res) => {
      return res.data.location.country
    })
    .catch((err) => {
      console.log(err)
    })
  return {
    props: {
      country: { name: data.name, flag: data.flag.emojitwo },
    },
  }
}
