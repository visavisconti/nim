'use client'

import { AnimatedBackground } from '@/components/ui/animated-background'
import { TextLoop } from '@/components/ui/text-loop'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

// Optionen für Theme Switcher
const THEMES_OPTIONS = [
  {
    label: 'Light',
    id: 'light',
    icon: <SunIcon className="h-4 w-4" />,
  },
  {
    label: 'Dark',
    id: 'dark',
    icon: <MoonIcon className="h-4 w-4" />,
  },
  {
    label: 'System',
    id: 'system',
    icon: <MonitorIcon className="h-4 w-4" />,
  },
]

// Theme Wechsel-Buttons
function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <AnimatedBackground
      className="pointer-events-none rounded-lg bg-[--card-bg]"
      defaultValue={theme}
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.2,
      }}
      enableHover={false}
      onValueChange={(id) => {
        setTheme(id as string)
      }}
    >
      {THEMES_OPTIONS.map((theme) => (
        <button
          key={theme.id}
          className="inline-flex h-7 w-7 items-center justify-center text-[--text-faded] transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-[--text]"
          type="button"
          aria-label={`Switch to ${theme.label} theme`}
          data-id={theme.id}
        >
          {theme.icon}
        </button>
      ))}
    </AnimatedBackground>
  )
}

// Footer-Bereich mit Link + Theme-Wechsler
export function Footer() {
  return (
    <footer className="mt-24 border-t border-[--border] px-0 py-4">
      <div className="flex items-center justify-between">
        <a href="https://github.com/visavisconti/nim" target="_blank" rel="noopener noreferrer">
          <TextLoop className="text-xs text-[--text-faded]">
            <span>Nim.</span>
            <span>@ Github.</span>
          </TextLoop>
        </a>
        <div className="text-xs text-[--text-faded]">
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}
