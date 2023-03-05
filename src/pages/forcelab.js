import dynamic from 'next/dynamic'
import style from './forcelab.css'

const DynamicComponentWithNoSSR = dynamic(
  () => import('../p5/force1'),
  { ssr: false }
)

function Circle() {
  return (
    <div id={style.content}>
      <header>
        Physics lab
      </header>
      <sidebar>
        <h2>Choose a lab</h2>
        <p>force in action</p>
        <p>spring in action</p>
      </sidebar>
      <main>
        <div>
          <DynamicComponentWithNoSSR />
        </div>
      </main>
    </div>
  )
}

export default Circle;