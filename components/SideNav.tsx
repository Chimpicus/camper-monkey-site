import {
  faBars,
  faClose,
  faDollarSign,
  faHome,
  faInfoCircle,
  faPhone,
  faTools,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FunctionComponent, useState } from 'react'
import Link from 'next/link'

interface SideNavProps {}

const SideNav: FunctionComponent<SideNavProps> = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div
        className={
          'absolute h-full right-0 z-10 bg-zinc-900 bg-opacity-75 backdrop-blur-md duration-300 ' +
          (!isOpen && 'translate-x-full')
        }
      >
        <button
          id="menu-icon"
          className={
            'absolute -left-12 my-auto top-8 text-3xl text-white hover:text-zinc-300 hover:cursor-pointer active:text-zinc-400 '
          }
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FontAwesomeIcon icon={faClose} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
        <hr className="mx-4 mt-28 opacity-50 " />
        <ul>
          <li className="w-full my-2 px-5 py-4 hover:bg-zinc-800">
            <Link href={'/'}>
              <FontAwesomeIcon className=" w-10" icon={faHome} />
              <span>Home</span>
            </Link>
          </li>
          <li className="w-full my-2 px-5 py-4 hover:bg-zinc-800">
            <Link href={'/services'}>
              <FontAwesomeIcon className="w-10" icon={faTools} />
              <span>Services</span>
            </Link>
          </li>
          <li className="w-full my-2 px-5 py-4 hover:bg-zinc-800">
            <Link href={'/about'}>
              {' '}
              <FontAwesomeIcon className="w-10" icon={faInfoCircle} />
              <span>About</span>
            </Link>
          </li>
          <li className="w-full my-2 px-5 py-4 hover:bg-zinc-800">
            <Link href={'/contact'}>
              <FontAwesomeIcon className="w-10" icon={faPhone} />
              <span>Contact</span>
            </Link>
          </li>
          <li className="w-full my-2 px-5 py-4 hover:bg-zinc-800">
            <Link href={'/'}>
              <FontAwesomeIcon className="w-10" icon={faDollarSign} />
              <span>Shop</span>
            </Link>
          </li>
        </ul>
        <hr className="mx-4 opacity-50 " />
      </div>
    </>
  )
}

export default SideNav
