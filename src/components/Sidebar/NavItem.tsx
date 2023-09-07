import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { ElementType } from 'react'

interface NavItemProps {
  title: string
  icon: ElementType
  href: string
}

export function NavItem({ title, href, icon: Icon }: NavItemProps) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-slate-700"
    >
      <Icon className="h-5 w-5 text-slate-200" />
      <span className="font-medium text-slate-200 group-hover:text-blue-500">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-slate-400 group-hover:text-violet-300" />
    </Link>
  )
}
