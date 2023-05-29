import Image from 'next/image'
import styles from '/styles/Home.module.scss'
import Header from '@/components/header'
import Footer from '@/components/footer'
import axios from 'axios'
import Main from '@/components/home/main'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Home({ country }) {
  const { data: session } = useSession()

  return (
    <>
      <Header country={country} />
      <div className={styles.home}>
        <div className={styles.container}>
          <Main />
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
