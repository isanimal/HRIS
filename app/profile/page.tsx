import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BadgeCheck,
  Banknote,
  BriefcaseBusiness,
  CalendarCheck2,
  IdCard,
  Mail,
  MapPin,
  Phone,
  ShieldAlert,
} from "lucide-react";
import { Avatar } from "@/components/Avatar";
import { LabShell } from "@/components/LabShell";
import { currentUserId, departmentColors, getEmployeeById } from "@/lib/data";

type ProfilePageProps = {
  searchParams: Promise<{ id?: string }>;
};

export default async function ProfilePage({ searchParams }: ProfilePageProps) {
  const params = await searchParams;
  const requestedId = params.id ?? currentUserId;
  const employee = getEmployeeById(requestedId);

  if (!employee) {
    notFound();
  }

  const isCurrentUser = employee.id === currentUserId;

  return (
    <LabShell>
      <div className="grid gap-5">
        <section className="rounded-lg border border-line bg-white p-5 shadow-panel">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-brand">
                <ArrowLeft size={17} />
                Back to Dashboard
              </Link>
              <h1 className="mt-3 text-2xl font-black tracking-normal">Employee Profile</h1>
              <p className="mt-1 text-sm text-muted">
                URL reads employee data from <code className="rounded bg-surface px-1.5 py-0.5">/profile?id={employee.id}</code>.
              </p>
            </div>
            <div className={`rounded-md px-4 py-3 text-sm font-bold ${isCurrentUser ? "bg-emerald-50 text-emerald-800" : "bg-rose-50 text-rose-800"}`}>
              {isCurrentUser ? "Current user profile" : "IDOR visible: another employee profile"}
            </div>
          </div>
        </section>

        {!isCurrentUser && (
          <section className="rounded-lg border border-rose-200 bg-rose-50 p-4 text-sm font-semibold text-rose-900">
            <div className="flex items-start gap-3">
              <ShieldAlert className="mt-0.5 shrink-0" size={20} />
              <div>
                Access control failure demo: active user is hardcoded as employee <b>{currentUserId}</b>, but this page renders employee <b>{employee.id}</b> because the id query parameter is trusted.
              </div>
            </div>
          </section>
        )}

        <section className="grid gap-5 xl:grid-cols-[.85fr_1.15fr]">
          <div className="rounded-lg border border-line bg-white p-6 shadow-panel">
            <div className="flex flex-col items-center text-center">
              <Avatar initials={employee.avatar} index={Number(employee.id)} size="lg" />
              <h2 className="mt-4 text-2xl font-black">{employee.name}</h2>
              <p className="mt-1 text-sm font-semibold text-muted">{employee.jobTitle}</p>
              <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-sm font-bold">
                <span className={`h-2.5 w-2.5 rounded ${departmentColors[employee.department]}`} />
                {employee.department}
              </span>
            </div>

            <div className="mt-6 grid gap-3 text-sm">
              <div className="flex items-center gap-3 rounded-md bg-surface p-3">
                <Mail size={18} className="text-muted" />
                <span className="min-w-0 truncate font-semibold">{employee.email}</span>
              </div>
              <div className="flex items-center gap-3 rounded-md bg-surface p-3">
                <Phone size={18} className="text-muted" />
                <span className="font-semibold">{employee.phone}</span>
              </div>
              <div className="flex items-center gap-3 rounded-md bg-surface p-3">
                <MapPin size={18} className="text-muted" />
                <span className="font-semibold">{employee.location}</span>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-lg border border-line bg-white p-5 shadow-panel">
              <h2 className="text-lg font-black">Employment Details</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <InfoTile icon={IdCard} label="Employee ID" value={employee.id} />
                <InfoTile icon={BriefcaseBusiness} label="Contract Type" value={employee.contractType} />
                <InfoTile icon={CalendarCheck2} label="Leave Balance" value={`${employee.leaveBalance} days`} />
                <InfoTile icon={BadgeCheck} label="Work Hours" value={employee.workHours} />
              </div>
            </div>

            <div className="rounded-lg border border-line bg-white p-5 shadow-panel">
              <h2 className="text-lg font-black">Sensitive Payroll Snapshot</h2>
              <p className="mt-1 text-sm text-muted">
                These fields demonstrate why object-level authorization is required before returning profile data.
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <InfoTile icon={Banknote} label="Monthly Salary" value={employee.salary} emphasis />
                <InfoTile icon={IdCard} label="Bank Account" value={employee.bankAccount} emphasis />
              </div>
            </div>

            <div className="rounded-lg border border-line bg-white p-5 shadow-panel">
              <h2 className="text-lg font-black">API Demo</h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                Try changing the query string manually to <code className="rounded bg-surface px-1.5 py-0.5">/profile?id=124</code> or call <code className="rounded bg-surface px-1.5 py-0.5">/api/profile?id=124</code>. The endpoint intentionally returns the requested employee without checking ownership.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/profile?id=123" className="rounded-md border border-line px-4 py-2 text-sm font-bold text-gray-700 hover:border-brand hover:text-brand">
                  Open id=123
                </Link>
                <Link href="/profile?id=124" className="rounded-md border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-bold text-rose-800">
                  Open id=124
                </Link>
                <a href={`/api/profile?id=${employee.id}`} className="rounded-md bg-brand px-4 py-2 text-sm font-bold text-white">
                  View API JSON
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LabShell>
  );
}

function InfoTile({
  icon: Icon,
  label,
  value,
  emphasis = false,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  emphasis?: boolean;
}) {
  return (
    <div className={`rounded-md border p-4 ${emphasis ? "border-amber-200 bg-amber-50" : "border-line bg-white"}`}>
      <div className="flex items-center gap-2 text-sm font-semibold text-muted">
        <Icon size={18} />
        {label}
      </div>
      <div className="mt-2 break-words text-lg font-black">{value}</div>
    </div>
  );
}
