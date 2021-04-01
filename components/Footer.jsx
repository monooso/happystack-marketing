import Container from './Container'
import Sleeve from './Sleeve'

export default function Footer () {
  return (
    <footer>
      <Container>
        <Sleeve>
          <div className='py-8'>
            <p className='text-center text-gray-400 text-sm sm:text-left'>&copy; Manifest New Media Ltd. All rights reserved.</p>
          </div>
        </Sleeve>
      </Container>
    </footer>
  )
}
