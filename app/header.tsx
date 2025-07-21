'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-[--text]">
          Bilgisaray
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-[--text-faded]"
          delay={0.5}
        >
          gelebte Solidarität in der Oranienstr. 45, Berlin Kreuzberg
        </TextEffect>
      </div>
    </header>
  )
}
