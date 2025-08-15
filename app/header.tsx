'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-6 flex items-center justify-between">
  <div>
    <Link href="/" className="inline-block mb-0">
      {/* Helles Logo nur im Light Mode sichtbar */}
      <img src="image/logo_bilgisaray_light.png" alt="Bilgisaray" className="block dark:hidden" />
      {/* Dunkles Logo nur im Dark Mode sichtbar */}
      <img src="image/logo_bilgisaray_dark.png" alt="Bilgisaray" className="hidden dark:block" />
    </Link>
    <TextEffect
      as="p"
      preset="fade"
      per="char"
      className="text-zinc-600 dark:text-zinc-500 text-lg font-bold"
      delay={0.5}
      style={{ marginTop: '0rem' }}
    >
      gelebte Solidarität in der Oranienstr. 45 und darüber hinaus
    </TextEffect>
  </div>
</header>


  )
}
