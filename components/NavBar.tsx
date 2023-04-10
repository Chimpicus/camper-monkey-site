import Image from 'next/image'
import { FunctionComponent } from 'react'

interface NavBarProps {}

const NavBar: FunctionComponent<NavBarProps> = () => {
  return (
    <>
      <header className="fixed flex justify-between w-full bg-zinc-800">
        {/* <div id="" className="left-0 p-2">
          Camper Monkey Ltd
        </div> */}
        <div id="logo" className="mx-auto">
          <Image
            width={133}
            height={99}
            src="/CamperMonkeyLogo.png"
            alt="Camper Monkey Ltd logo"
          />
        </div>
      </header>
    </>
  )
}

export default NavBar
