import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MapOverlay ({ content, address }) {
    const router = useRouter();

    return (
      <>

        <div className="p-1">{content}</div>
        <div className="p-1">
            <Link href={address}>홈페이지 링크</Link>
        </div>

      </>
    )
}