import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CollectionContext } from '../../context/collection'
import EditMenu from '../EditMenu/EditMenu'

function Folder ({ name, date, deleteItem, editItem, parentID, id, path, type, isDragging }) {
  const { setReload } = useContext(CollectionContext)
  const [inputHidden, setInputHidden] = useState(true)
  const [showMenu, setShowMenu] = useState(false)

  const url = path.split('/')
  const index = url.indexOf('collections')
  const pathFolder = url.splice(index + 1).join('/')

  // const editeItemClick = () => {
  //   console.log('edite item')
  //   setInputHidden(false)
  //   setShowMenu(false)
  // }

  const handleMenuClick = (event) => {
    event.preventDefault()
    setShowMenu(!showMenu)
    setReload(prev => !prev)
  }

  const deleteItemClick = (event) => {
    deleteItem({ id, parentID })
    event.preventDefault()
  }

  return (
    <Link
      to={pathFolder}
      onClick={() => setReload(prev => !prev)}
      className='text-inherit hover:text-inherit'
    >
      <div className={`${isDragging ? 'bg-sky-200 dark:bg-black' : ''} flex w-full h-32 rounded-2xl`}>

        <div
          className='flex flex-col justify-around items-center h-auto w-full rounded-l-2xl bg-black bg-opacity-10 dark:bg-opacity-20'
        >
          <div />
          <div>
            <h2 className='text-center text-xl '>{name}</h2>
          </div>
          <div className='px-3 flex w-full justify-end '>
            <p className='text-[0.6rem]'>{date}</p>
          </div>
        </div>

        <div className='h-auto w-48 flex justify-center items-center rounded-r-2xl bg-yellow-500 relative'>
          <svg fill='#ffffff' width='48px' height='48px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <g id='SVGRepo_bgCarrier' strokeWidth='0' />
            <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
            <g id='SVGRepo_iconCarrier'>
              <path d='M2.165 19.551c.186.28.499.449.835.449h15c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 11h-1V8c0-1.103-.897-2-2-2h-6.655L8.789 4H4c-1.103 0-2 .897-2 2v13h.007a1 1 0 0 0 .158.551zM18 8v3H6c-.4 0-.762.238-.919.606L4 14.129V8h14z' />
            </g>
          </svg>

          <button
            onClick={handleMenuClick}
            className='absolute top-2 right-2 text-white'
          >
            <svg width='18px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' transform='rotate(90)'>
              <g id='SVGRepo_bgCarrier' strokeWidth='0' />
              <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
              <g id='SVGRepo_iconCarrier'>
                <path d='M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z' className='stroke-current' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                <path d='M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z' className='stroke-current' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                <path d='M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z' className='stroke-current' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
              </g>
            </svg>
          </button>

          <ul
            className={`${showMenu ? '' : 'hidden'} 
              right-0 top-7 h-auto w-40 absolute bg-zinc-100 dark:bg-zinc-900
              border-solid border border-zinc-300  dark:border-zinc-700 rounded-lg
              shadow-xl p-3 font-sans text-sm font-normal focus:outline-none text-black dark:text-white
            `}
          >
            <li
              role='menuitem'
              onClick={deleteItemClick}
              className='block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-zinc-800 hover:bg-opacity-10 dark:hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 hover:text-red-600'
            >
              Delete
            </li>
            {/* <li
              role='menuitem'
              onClick={editeItemClick}
              className='block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-zinc-800 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 '
            >
              Editar
            </li> */}

          </ul>
        </div>

        <EditMenu
          id={id}
          name={name}
          type={type}
          inputHidden={inputHidden}
          setInputHidden={setInputHidden}
          editItem={editItem}
          // setIsOver={setIsOver}
        />

      </div>
    </Link>
  )
}

export default Folder
