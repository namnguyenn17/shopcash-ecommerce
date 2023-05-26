import React, { useState } from 'react'
import styles from '../../styles/forgot.module.scss'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { BiLeftArrowAlt } from 'react-icons/bi'
import CircledIconBtn from '@/components/buttons/circledIconBtn'
import LoginInput from '@/components/inputs/loginInput'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import DotLoaderSpinner from '@/components/loaders/dotLoader'

export default function Forgot() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const emailValidation = Yup.object({
    email: Yup.string()
      .required('Email is required.')
      .email('Enter a valid email address.'),
  })

  const forgotHandler = async () => {
    try {
      setLoading(true)
      const { data } = await axios.post('/api/auth/forgot', {
        email,
      })
      setError('')
      setSuccess(data.message)
      setLoading(false)
      setEmail('')
    } catch (error) {
      setLoading(false)
      setSuccess('')
      setError(error.response.data.message)
    }
  }

  return (
    <>
      {loading && <DotLoaderSpinner loading={loading} />}
      <Header />
      <div className={styles.forgot}>
        <div>
          <div className={styles.forgot__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              Forgot your password <Link href="/">Login instead</Link>
            </span>
          </div>

          <Formik
            enableReinitialize
            initialValues={{
              email,
            }}
            validationSchema={emailValidation}
            onSubmit={() => forgotHandler()}
          >
            {(form) => (
              <Form>
                <LoginInput
                  type="text"
                  name="email"
                  icon="email"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <CircledIconBtn type="submit" text="Send link" />
                <div style={{ marginTop: '15px' }}>
                  {error && <span className={styles.error}>{error}</span>}
                  {success && <span className={styles.success}>{success}</span>}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer country="" />
    </>
  )
}
