import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  Eye,
  MoreVertical,
  Phone,
  Plus,
  UsersRound,
  X,
} from "lucide-react";
import { Avatar } from "@/components/Avatar";
import { LabShell } from "@/components/LabShell";
import { currentUserId, departmentColors, employees } from "@/lib/data";

const workBars = [
  { day: "Jun 21", work: 70, over: 18 },
  { day: "Jun 22", work: 74, over: 0 },
  { day: "Jun 23", work: 58, over: 34 },
  { day: "Jun 24", work: 66, over: 0 },
  { day: "Jun 25", work: 70, over: 16 },
  { day: "Jun 26", work: 8, over: 0 },
];

export default function DashboardPage() {
  const currentUser = employees.find((employee) => employee.id === currentUserId)!;

  return (
    <LabShell>
      <div className="grid gap-5">
        <section className="rounded-lg border border-line bg-white p-5 shadow-panel">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-brand">
                <UsersRound size={16} />
                HRIS Dashboard
              </div>
              <h1 className="mt-2 text-2xl font-black tracking-normal text-ink">
                Rocks Company Workforce
              </h1>
              <p className="mt-1 max-w-2xl text-sm text-muted">
                Manage employee records, leave requests, schedules, and payroll details from one operational view.
              </p>
            </div>
            <Link
              href={`/profile?id=${currentUser.id}`}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-brand px-4 text-sm font-bold text-white shadow-sm"
            >
              My Profile
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>

        <section className="grid gap-5 xl:grid-cols-[1fr_1.45fr_.95fr]">
          <div className="rounded-lg border border-line bg-white p-5 shadow-panel">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-black">What's on Today?</h2>
              <button className="rounded-md border border-line px-3 py-2 text-sm font-semibold text-gray-600">
                Time Off
              </button>
            </div>
            <div className="mt-5 space-y-4">
              {employees.slice(2, 5).map((employee, index) => (
                <div key={employee.id} className="flex items-center gap-3 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <Avatar initials={employee.avatar} index={index + 2} />
                  <div className="min-w-0">
                    <div className="truncate text-sm font-bold">{employee.name}</div>
                    <div className="truncate text-sm text-muted">
                      {employee.jobTitle} <span className="mx-1">•</span> {index === 0 ? "Sick Leave" : index === 1 ? "Annual Leave" : "Work From Home"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="schedule" className="rounded-lg border border-line bg-white p-5 shadow-panel">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-lg font-black">Today Schedule</h2>
              <div className="flex items-center gap-2">
                <button className="rounded-md border border-line px-3 py-2 text-sm font-semibold text-gray-600">
                  Jun 27, 2026
                </button>
                <button className="inline-flex items-center gap-2 rounded-md border border-brand px-3 py-2 text-sm font-bold text-brand">
                  <Plus size={16} />
                  Add Task
                </button>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-4 text-xs font-semibold text-gray-500">
              <span>08.00</span>
              <span>09.00</span>
              <span>10.00</span>
              <span>11.00</span>
            </div>
            <div className="relative mt-2 h-56 overflow-hidden rounded-md border border-gray-100 bg-gradient-to-r from-indigo-50 via-white to-white">
              <div className="absolute inset-y-0 left-[48%] w-px bg-brand" />
              <span className="absolute left-[44%] top-2 rounded-full bg-brand px-2 py-1 text-xs font-bold text-white">09.35</span>
              <div className="absolute left-[4%] top-8 h-9 w-[58%] rounded bg-emerald-200 px-3 py-2 text-sm font-bold text-gray-800">
                Online Interview with UI Candidate
              </div>
              <div className="absolute left-[62%] top-20 h-9 w-[28%] rounded bg-orange-100 px-3 py-2 text-sm font-bold text-gray-800">
                Weekly meeting
              </div>
              <div className="absolute left-[22%] top-36 h-9 w-[48%] rounded bg-slate-200 px-3 py-2 text-sm font-bold text-gray-800">
                Replying email to applicants
              </div>
              <div className="absolute left-[78%] top-32 h-9 w-[22%] rounded bg-purple-100 px-3 py-2 text-sm font-bold text-gray-800">
                Psychology test
              </div>
            </div>
          </div>

          <div id="recruitment" className="grid gap-5">
            <div className="rounded-lg border border-line bg-white p-5 shadow-panel">
              <span className="rounded-md border border-line px-3 py-2 text-sm font-semibold text-gray-600">
                Active until: <b>Jun 30, 2026</b>
              </span>
              <h2 className="mt-5 text-lg font-black">Junior Frontend Developer</h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                Hiring front-end talent for user interface development and internal HRIS tooling.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-md bg-blue-100 px-3 py-2 text-xs font-bold text-blue-700">Development</span>
                <span className="rounded-md border border-line px-3 py-2 text-xs font-bold text-gray-600">Full Time</span>
                <span className="rounded-md border border-line px-3 py-2 text-xs font-bold text-gray-600">Remote</span>
              </div>
            </div>
            <div className="rounded-lg border border-line bg-white p-5 shadow-panel">
              <div className="flex items-center gap-3">
                <Avatar initials="CF" index={1} />
                <div>
                  <div className="font-bold">Cody Fisher</div>
                  <div className="text-sm text-muted">cody.fisher@company.test</div>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold text-gray-700">
                <span className="inline-flex items-center gap-2"><Phone size={16} /> +62 812 9981 2401</span>
                <span className="inline-flex items-center gap-2"><Clock3 size={16} /> 118h 10m</span>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-5 xl:grid-cols-[1.1fr_1fr]">
          <div id="employee" className="rounded-lg border border-line bg-white p-5 shadow-panel">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-black">Employee</h2>
              <Link href={`/profile?id=${currentUser.id}`} className="rounded-md border border-line px-3 py-2 text-sm font-bold text-gray-600">
                See Details
              </Link>
            </div>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[620px] border-collapse text-left text-sm">
                <thead>
                  <tr className="rounded-md bg-surface text-xs font-bold uppercase tracking-wide text-gray-500">
                    <th className="px-4 py-3">Employee Name</th>
                    <th className="px-4 py-3">Department</th>
                    <th className="px-4 py-3">Job Title</th>
                    <th className="px-4 py-3">Profile</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.slice(0, 4).map((employee, index) => (
                    <tr key={employee.id} className="border-b border-gray-100 last:border-0">
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <Avatar initials={employee.avatar} index={index} />
                          <div>
                            <div className="font-bold">{employee.name}</div>
                            <div className="text-xs text-muted">{employee.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-bold">
                          <span className={`h-2 w-2 rounded ${departmentColors[employee.department]}`} />
                          {employee.department}
                        </span>
                      </td>
                      <td className="px-4 py-4 font-medium text-gray-700">{employee.jobTitle}</td>
                      <td className="px-4 py-4">
                        <Link
                          href={`/profile?id=${employee.id}`}
                          className="inline-flex items-center gap-2 rounded-md border border-line px-3 py-2 text-xs font-bold text-gray-700 hover:border-brand hover:text-brand"
                        >
                          <Eye size={15} />
                          Open
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-lg border border-line bg-white p-5 shadow-panel">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-black">Member Work Hours</h2>
                <div className="mt-5 text-3xl font-black">120h 54m</div>
              </div>
              <button className="rounded-md border border-line px-3 py-2 text-sm font-bold text-gray-600">
                View by Week
              </button>
            </div>
            <div className="mt-6 flex h-56 items-end gap-5 border-b border-gray-200 px-2">
              {workBars.map((bar) => (
                <div key={bar.day} className="flex flex-1 flex-col items-center justify-end gap-2">
                  <div className="flex h-40 w-full max-w-12 flex-col justify-end">
                    <div style={{ height: `${bar.over}%` }} className="w-full rounded-t bg-rose-200" />
                    <div style={{ height: `${bar.work}%` }} className="w-full rounded-t bg-brand" />
                  </div>
                  <div className="text-xs font-semibold text-gray-500">{bar.day}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-5 xl:grid-cols-[1fr_1fr_.9fr]">
          <div className="rounded-lg border border-line bg-white p-5 shadow-panel">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <Avatar initials={currentUser.avatar} />
                <div>
                  <div className="font-bold">{currentUser.name}</div>
                  <div className="text-sm text-muted">{currentUser.email}</div>
                </div>
              </div>
              <button className="rounded-md border border-line p-2 text-gray-500"><MoreVertical size={18} /></button>
            </div>
            <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <div className="text-muted">Department:</div>
                <div className="mt-1 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 font-bold text-emerald-800">Design</div>
              </div>
              <div>
                <div className="text-muted">Job Title:</div>
                <div className="mt-1 font-bold">{currentUser.jobTitle}</div>
              </div>
              <div>
                <div className="text-muted">Contract Type:</div>
                <div className="mt-1 font-bold">{currentUser.contractType}</div>
              </div>
              <div>
                <div className="text-muted">Location:</div>
                <div className="mt-1 font-bold">{currentUser.location}</div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-line bg-white p-5 shadow-panel">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-emerald-100 px-3 py-2 text-sm font-bold text-emerald-800">Sick Leave</span>
              <span className="rounded-full bg-rose-100 px-3 py-2 text-sm font-bold text-rose-800">Pending</span>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <Avatar initials="RE" index={2} />
              <div>
                <div className="font-bold">Ralph Edwards</div>
                <div className="text-sm text-muted">Leave for 4 day(s)</div>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <button className="inline-flex items-center justify-center gap-2 rounded-md border border-emerald-500 px-3 py-2 text-sm font-bold text-emerald-700">
                <Check size={16} />
                Approve
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-md border border-rose-500 px-3 py-2 text-sm font-bold text-rose-700">
                <X size={16} />
                Reject
              </button>
            </div>
          </div>

          <div id="payroll" className="rounded-lg border border-line bg-white p-5 shadow-panel">
            <div className="text-xs font-bold uppercase tracking-wide text-gray-400">Payment Method</div>
            <div className="mt-4 grid gap-4 text-sm">
              <div>
                <div className="text-muted">Cardholder name</div>
                <div className="font-bold">Rocks Company Ltd</div>
              </div>
              <div>
                <div className="text-muted">Account Number</div>
                <div className="font-bold">**** **** **** 6273</div>
              </div>
              <div>
                <div className="text-muted">Payment Method</div>
                <div className="font-black text-blue-800">VISA Debit Card</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LabShell>
  );
}
