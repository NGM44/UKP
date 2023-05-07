import Image from 'next/image'
import imagelogo from '@/images/logo.png'

export function Logo(props) {
  return (
    <Image
      className="h-14 w-fit object-cover"
      src={imagelogo}
      alt=""
      width={56}
      height={56}
    />
  )
}
