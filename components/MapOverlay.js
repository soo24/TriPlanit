import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MapOverlay ({ content, address }) {
    const router = useRouter();

    return (
      <>
        <div className="grid grid-cols-4 grid-rows-2">
          <div className="text-[14px] col-span-3">{content}</div>
          <div className="text-sm col-span-3">
              <Link href={address}>홈페이지 링크</Link>
          </div>
        </div>
        <br />
      </>
    )
}