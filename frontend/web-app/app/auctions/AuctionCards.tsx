import Image from 'next/image'
import CountdownTimer from './CountdownTimer'
import CardImage from './CardImage'
import { Auction } from '@/types'
import Link from 'next/link'

type Props = {
    auction: Auction
}

export default function AuctionCards({auction}: Props) {
  return (
    <Link href={`/auctions/details/${auction.id}`} className='group'>
        <div className='relative w-full bg-gray-200 aspect-[16/10] rounded-lg overflow-hidden'>
            <CardImage imageUrl={auction.imageUrl}/>
            <div className='absolute bottom-2 left-2'>
                <CountdownTimer auctionEnd={auction.auctionEnd}/>
            </div>
        </div>
        <div className='flex justify-between items-center mt-4'>
            <h3 className='text-gray-700'>{auction.make} {auction.model}</h3>
            <p className='font-semibod text-sm'>{auction.year}</p>
        </div>
        
    </Link>
  )
}
