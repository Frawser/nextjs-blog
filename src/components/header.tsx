import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="border-black/10 border-b h-[40px] flex items-center justify-between px-5">
      <Link href="/">
        <Image
          src="https://picsum.photos/id/89/4608/2592"
          alt="Logo"
          width={30}
          height={30}
          className="rounded-full"
          priority
        />
      </Link>
      <ul className="flex items-center gap-3">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </div>
  );
}
