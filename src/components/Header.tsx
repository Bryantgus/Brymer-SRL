import logo from '../assets/logo.png'

export default function Header() {
  return (
    <>
      <div className='flex items-center gap-3'>
        <img src={logo} className='w-20 h-20 rounded-2xl' alt="" />
        <h1 className='text-4xl font-semibold'>Brymer SRL</h1>
      </div>

      <div className='flex items-center gap-3'>
        <div className='w-10 h-10 rounded-full bg-black'></div>
        <span className='text-2xl font-bold'>Role</span>
        <span className='text-2xl font-bold'>{`>`}</span>
      </div>
    </>
  )
}
