import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <nav className="bg-white/70 shadow p-4 flex gap-6 text-black text-lg font-semibold">
        <Link href="/">Home</Link>
        <Link href="/realms">Realms</Link>
        <Link href="/pantheon">Pantheon</Link>
        <Link href="/races">Races</Link>
        <Link href="/lore">Lore</Link>
        <Link href="/items">Items</Link>
        <Link href="/guide">Player Guide</Link>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}
