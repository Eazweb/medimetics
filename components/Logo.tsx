import Image from "next/image"

export default function Logo() {
  return (
    <div className="w-32 h-10 relative">
      <Image src="/logo.png" alt="Logo" fill className="object-contain" />
    </div>
  )
}

