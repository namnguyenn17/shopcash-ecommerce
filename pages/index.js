import Image from 'next/image'
import styles from '/styles/page.module.scss'
import Header from '@/components/header'
import Footer from '@/components/footer'
import axios from 'axios'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Home({ country }) {
  const { data: session } = useSession()
  console.log(session)
  return (
    <div>
      <Header country={country} />
      {session ? 'You are logged in' : 'You are not logged in'}
      <Footer country={country} />
    </div>
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