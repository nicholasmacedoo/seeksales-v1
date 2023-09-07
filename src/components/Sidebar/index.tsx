"use client"
import Image from 'next/image'
import {
  Flag,
  Home,
  SquareStack,
  Users,
  Cog,
  Package,
  ChevronsLeft,
} from 'lucide-react'
import { NavItem } from './NavItem'
import { Profile } from './Profile'

interface SidebarProps {
  toggleSidebar: () => void 
}

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 px-5 py-8 bg-slate-800">
      <div className='flex items-center justify-between mb-10'>
        <Image
          height={20}
          width={187}
          src="/logotipo.svg"
          alt="Seeksales"
        />
        <button className='text-slate-500' onClick={() => alert('teste')}>
          <ChevronsLeft />
        </button>
      </div>
      <button>Testar</button>
      <nav className="space-y-0.5">
        <NavItem href='/app' title="Home" icon={Home} />
        {/* <NavItem href='' title="Dashboard" icon={BarChart} /> */}
        <NavItem href='/app/negocios' title="Negocios" icon={SquareStack} />
        <NavItem href='/app/produtos' title="Produtos" icon={Package} />
        <NavItem href='/app' title="Reporting" icon={Flag} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem href='/app/usuarios' title="Usuários" icon={Users} />
          <NavItem href='/app/configuracoes' title="Configurações" icon={Cog} />
        </nav>

        <div className="h-px bg-slate-700" />

        <Profile />
      </div>
    </aside>
  )
}
