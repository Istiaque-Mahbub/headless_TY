import logo from "@/public/TY logo.png"
import Image from "next/image"

export default function Logo() {
  return (
    <div>
        <Image
        src={logo}
        alt="TY Law International Logo"
        width={120}
        height={120}
        ></Image>
    </div>
  )
}
