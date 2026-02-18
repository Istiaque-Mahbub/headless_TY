import logo from "@/public/Logo.png"
import Image from "next/image"

export default function Logo() {
  return (
    <div>
        <Image
        src={logo}
        alt="TY Law International Logo"
        width={40}
        height={40}
        ></Image>
    </div>
  )
}
