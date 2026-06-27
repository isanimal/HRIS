import Link from "next/link";
import {
  BriefcaseBusiness,
  CalendarDays,
  ChevronDown,
  CircleHelp,
  CreditCard,
  LayoutDashboard,
  PanelLeftClose,
  Settings,
  UserRoundPlus,
  UsersRound,
} from "lucide-react";
import { departmentColors } from "@/lib/data";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard, active: true },
  { href: "/dashboard#employee", label: "Employee", icon: UsersRound },
  { href: "/dashboard#recruitment", label: "Recruitment", icon: UserRoundPlus },
  { href: "/dashboard#payroll", label: "Payroll", icon: CreditCard },
  { href: "/dashboard#schedule", label: "Schedule", icon: CalendarDays },
];

type LabShellProps = {
  children: React.ReactNode;
};

export function LabShell({ children }: LabShellProps) {
  return (
    <div className="min-h-screen bg-surface">
      <div className="mx-auto flex min-h-screen max-w-[1480px] gap-5 px-4 py-5 lg:px-6">
        <aside className="hidden w-[280px] shrink-0 rounded-lg border border-line bg-white p-5 shadow-panel lg:block">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-md bg-brand text-white">
                <BriefcaseBusiness size={24} />
              </div>
              <div>
                <div className="text-xl font-black tracking-normal">BordUp</div>
                <div className="text-xs font-semibold text-muted">HRIS Lab</div>
              </div>
            </Link>
            <PanelLeftClose size={21} className="text-muted" />
          </div>

          <div className="mt-6 rounded-md border border-line bg-surface p-3">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-md bg-ink text-white">
                <BriefcaseBusiness size={24} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-bold">Rocks Company</div>
                <div className="text-xs text-muted">Team - 20 Members</div>
              </div>
              <ChevronDown size={18} className="text-muted" />
            </div>
          </div>

          <nav className="mt-7">
            <div className="mb-3 text-xs font-bold uppercase tracking-wide text-gray-400">
              Main Menu
            </div>
            <div className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex h-11 items-center gap-3 rounded-md px-3 text-sm font-semibold ${
                      item.active
                        ? "border border-indigo-200 bg-indigo-50 text-brand"
                        : "text-gray-600 hover:bg-surface"
                    }`}
                  >
                    <Icon size={19} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="mt-7 border-t border-line pt-6">
            <div className="mb-3 flex items-center justify-between text-xs font-bold uppercase tracking-wide text-gray-400">
              Department
              <span className="text-xl leading-none text-gray-500">+</span>
            </div>
            <div className="space-y-3">
              {Object.entries(departmentColors).map(([department, color]) => (
                <div key={department} className="flex items-center gap-3 text-sm font-medium text-gray-600">
                  <span className={`h-3 w-3 rounded ${color}`} />
                  {department}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-line pt-6">
            <div className="mb-3 text-xs font-bold uppercase tracking-wide text-gray-400">
              Other
            </div>
            <div className="space-y-1">
              <a className="flex h-10 items-center gap-3 rounded-md px-3 text-sm font-semibold text-gray-600 hover:bg-surface">
                <Settings size={18} />
                Setting
              </a>
              <a className="flex h-10 items-center gap-3 rounded-md px-3 text-sm font-semibold text-gray-600 hover:bg-surface">
                <CircleHelp size={18} />
                Help Center
              </a>
            </div>
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          <div className="mb-4 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-900">
            Training Lab - intentionally vulnerable IDOR demo. Data is dummy and must not be used in production.
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
