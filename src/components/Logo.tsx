import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <div>
        <Link href="/">
        <Image src="/logo.svg" alt="" width={50} height={50}/>
        </Link>
      
    </div>
  )
}

export default Logo