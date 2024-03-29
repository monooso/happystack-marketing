import Container from './Container'
import Logo from './Logo'
import Sleeve from './Sleeve'

export default function Header () {
  return (
    <header className='mb-24 mt-12'>
      <Container>
        <Sleeve>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <div className='h-6 w-6'><Logo /></div>
              <div className='font-bold ml-2 text-lg'>Happy Stack</div>
            </div>
          </div>
        </Sleeve>
      </Container>
    </header>
  )
}
