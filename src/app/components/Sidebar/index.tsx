import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  LifeBuoy,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import Home from '@/app/page'
import { UserSpaceWidget } from './UserSpaceWidget'
import { Profile } from './Profile'
import * as Input from './input'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 to-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>

      <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} />

        <NavItem title="Dashboard" icon={BarChart} />

        <NavItem title="Projects" icon={SquareStack} />

        <NavItem title="Tasks" icon={CheckSquare} />

        <NavItem title="Reporting" icon={Flag} />

        <NavItem title="Users" icon={Users} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>
        <UserSpaceWidget />
        <div className="h-px bg-zinc-200" />
        <Profile />
      </div>
    </aside>
  )
}
