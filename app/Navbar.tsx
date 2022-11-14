import Link from "next/link";
import { UilEstate, UilNotes } from '@iconscout/react-unicons';
import DarkModeButton from "./DarkModeButton";

export default function Navbar() {
  return (
    <nav>
        <Link href="/">
            <UilEstate />Home
        </Link>
        <Link href="/notes">
            <UilNotes />Notes
        </Link>
        <DarkModeButton />
    </nav>
  )
}
