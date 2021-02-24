import Head from 'next/head'
import Feature from '../components/Feature'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Happy Stack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="max-w-7xl mt-20 mx-auto px-6 w-full sm:px-8 lg:px-10">
        <svg className="h-12 -rotate-6 transform w-12" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 3000">
          <g clip-path="url(#clip0)">
            <rect className="text-yellow-400" width="3000" height="3000" rx="500" fill="currentColor" />
            <path className="text-gray-900" d="M985.071 800L1294 1343.13l-117.86 60.74L919 953.648 661.857 1403.87 544 1343.13 852.929 800h132.142zM2175.07 800L2484 1343.13l-117.86 60.74L2109 953.648l-257.14 450.222-117.86-60.74L2042.93 800h132.14z" fill="currentColor" />
            <rect className="text-gray-900" x="1244" y="2050" width="540" height="150" rx="75" fill="currentColor" />
          </g>
          <defs>
            <clipPath id="clip0">
              <path fill="none" d="M0 0h3000v3000H0z" />
            </clipPath>
          </defs>
        </svg>
      </header>

      <main>
        <div className="max-w-7xl mt-16 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:max-w-2xl">
            <h1>
              <span className="block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span className="block text-gray-900">Service monitoring</span>
                <span className="block text-yellow-600">for web agencies</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Happy Stack monitors the services your client websites depend on, and notifies you if there’s a problem. It can even email your client, so they know you’re dealing with the issue.
              </p>

            <div className="mt-8 sm:max-w-lg">
              <p className="text-base font-medium text-gray-900">Get notified when Happy Stack launches</p>
              <form name="launch-list" method="POST" className="mt-3 sm:flex" data-netlify="true">
                <label for="email" className="sr-only">Email</label>
                <input type="email" name="email" id="email" required className="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:flex-1 border-gray-300" placeholder="Enter your email" />
                <button type="submit" className="mt-3 w-full px-6 py-3 border border-transparent transition text-base font-bold rounded-md text-yellow-900 bg-yellow-300 shadow-sm hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto">Notify me</button>
              </form>
              <p className="mt-3 text-center text-sm text-gray-500 sm:text-left">No spam, no funny business, not ever.</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-100 max-w-7xl mt-16 mx-auto overflow-hidden px-4 py-12 relative sm:px-6 md:rounded-lg lg:px-8">
          <svg className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
            <defs>
              <pattern id="8b1b5f72-e944-4457-af67-0c6d15a99f38" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-yellow-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
          </svg>

          <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-12">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Happy Stack helps you</h2>
            </div>
            <dl className="grid mt-10 space-y-10 sm:space-y-0 sm:gap-y-10 lg:mt-0 lg:col-span-2">
              <div>
                <Feature title="Save time and money" icon="money">
                  No more hunting down status pages, Twitter accounts, and RSS feeds. Happy Stack monitors all of the services your clients depend on, all in one place.
                  </Feature>
              </div>

              <div>
                <Feature title="Be more proactive" icon="firstAid">
                  Deal with potential issues before they become a problem. Put an end to the dreaded "a customer just emailed us..." client calls.
                  </Feature>
              </div>

              <div>
                <Feature title="Look good without lifting a finger" icon="beach">
                  Happy Stack can automatically notify your clients when there’s a problem, so they know you’re on the ball. That monthly retainer never looked like such good value.
                  </Feature>
              </div>
            </dl>
          </div>
        </div>
      </main>

      <footer className="border-t mt-16 max-w-7xl mx-auto px-4 py-8 w-full sm:px-6 lg:px-8">
        <p class="text-base text-center text-gray-400 sm:text-left">&copy; Manifest New Media Ltd. All rights reserved.</p>
      </footer>
    </div>
  )
}
