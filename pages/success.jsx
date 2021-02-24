import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Success () {
  return (
    <div>
      <Head>
        <title>You’re on the list &middot; Happy Stack</title>
        <meta name='description' content='Thanks for signing up. We’ll let you know when we launch.' />
        <link rel='icon' type='image/svg+xml' href='/logo.svg' />
      </Head>

      <Header linkTarget='/' />

      <main>
        <div className='max-w-7xl mt-16 mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='md:max-w-2xl'>
            <h1>
              <span className='block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl'>
                <span className='block text-gray-900'>You’re on the list</span>
              </span>
            </h1>
            <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
              Thanks for signing up. We’ll email you when we launch. In the meantime, <a className='text-yellow-700 underline hover:text-yellow-800' href='https://twitter.com/intent/follow?screen_name=happystackapp'>don’t be a stranger</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
