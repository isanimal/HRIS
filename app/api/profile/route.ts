import { NextResponse } from "next/server";
import { getEmployeeById } from "@/lib/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  // Intentionally vulnerable for local training:
  // this endpoint trusts the user-controlled id and does not compare it to currentUserId.
  const employee = getEmployeeById(id);

  if (!employee) {
    return NextResponse.json({ error: "Employee not found" }, { status: 404 });
  }

  return NextResponse.json({
    id: employee.id,
    name: employee.name,
    email: employee.email,
    department: employee.department,
    jobTitle: employee.jobTitle,
    phone: employee.phone,
    salary: employee.salary,
    bankAccount: employee.bankAccount,
    leaveBalance: employee.leaveBalance,
  });
}
