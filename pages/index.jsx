import Head from 'next/head'
import Container from '../components/Container'
import Feature from '../components/Feature'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Sleeve from '../components/Sleeve'
import SlimContainer from '../components/SlimContainer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Happy Stack &middot; Service Monitoring for Web Agencies</title>
        <meta name='description' content='Happy Stack monitors the services your client websites depend on, and notifies you if there’s a problem.' />

        <link rel='icon' href='/favicon.ico' />
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
        <link rel='apple-touch-icon' href='/favicon-apple-touch.png' />
        <link rel='manifest' href='/manifest.webmanifest' />

        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap' rel='stylesheet' />
      </Head>

      <Header />

      <main>
        <Container>
          <Sleeve>
            <SlimContainer>
              <h1>
                <span className='block text-4xl tracking-tight font-bold sm:text-5xl xl:text-6xl'>
                  <span className='block'>Service monitoring</span>
                  <span className='block text-yellow-600'>for web agencies</span>
                </span>
              </h1>

              <p className='mt-3 text-base text-gray-700 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                Happy Stack monitors the services your client websites depend on, and notifies you if there’s a problem. It can even email your client, so they know you’re dealing with the issue.
              </p>
            </SlimContainer>
          </Sleeve>
        </Container>

        <Container>
          <div className='bg-white mt-12 shadow-xl xl:rounded-md'>
            <Sleeve>
              <div className='py-4 sm:py-6 lg:py-8'>
                <SlimContainer>
                  <h2 className='font-semibold text-lg'>Request access</h2>
                  <p className='mt-2 text-gray-500'>Happy Stack is in private beta. Enter your email to request early access.</p>

                  <form action='/success' name='launch-list' method='POST' className='mt-6' data-netlify='true'>
                    <input type='hidden' name='form-name' value='launch-list' />

                    <label htmlFor='email' className='sr-only'>Email</label>
                    <input className='block border-gray-200 placeholder-gray-400 mt-4 p-4 rounded w-full sm:inline-block sm:mt-0 sm:w-auto focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-200' type='email' name='email' id='email' placeholder='Enter your email' required />
                    <button className='block bg-indigo-700 border-none font-semibold mt-4 px-8 py-4 text-white transition-colors rounded w-full sm:inline-block sm:ml-4 sm:mt-0 sm:w-auto focus:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-200 hover:bg-indigo-800' type='submit'>Notify me</button>
                  </form>

                  <p className='mt-3 text-sm text-gray-500'>No spam, no funny business, not ever.</p>
                </SlimContainer>
              </div>
            </Sleeve>
          </div>
        </Container>

        <div className='bg-indigo-700 mt-24'>
          <Container>
            <Sleeve>
              <div className='pt-16 pb-24'>
                <h2 className='text-3xl text-white font-bold'>Happy Stack helps you&hellip;</h2>

                <dl className='mt-16 space-y-12 md:grid md:grid-cols-2 md:gap-24 md:space-y-0 lg:grid-cols-3'>
                  <div>
                    <Feature title='Save time and money' icon='money'>
                      No more hunting down status pages, Twitter accounts, and RSS feeds. Happy Stack monitors all of the services your clients depend on, all in one place.
                    </Feature>
                  </div>

                  <div>
                    <Feature title='Be more proactive' icon='firstAid'>
                      Deal with potential issues before they become a problem. Put an end to the dreaded “a customer just emailed us...” client calls.
                    </Feature>
                  </div>

                  <div>
                    <Feature title='Look good without lifting a finger' icon='beach'>
                      Happy Stack can automatically notify your clients when there’s a problem, so they know you’re on the ball. That monthly retainer never looked like such good value.
                    </Feature>
                  </div>
                </dl>
              </div>
            </Sleeve>
          </Container>
        </div>
      </main>

      <Footer />
    </div>
  )
}
