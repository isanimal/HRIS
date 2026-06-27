export type Department =
  | "Business and Marketing"
  | "Design"
  | "Project Manager"
  | "Human Resource"
  | "Development";

export type Employee = {
  id: string;
  name: string;
  email: string;
  department: Department;
  jobTitle: string;
  phone: string;
  salary: string;
  bankAccount: string;
  leaveBalance: number;
  contractType: string;
  workHours: string;
  avatar: string;
  location: string;
};

export const currentUserId = "123";

export const employees: Employee[] = [
  {
    id: "123",
    name: "Brooklyn Simmons",
    email: "brooklyn@company.test",
    department: "Design",
    jobTitle: "Creative Director",
    phone: "+62 928 7273 7262",
    salary: "Rp 18.000.000",
    bankAccount: "**** **** **** 1234",
    leaveBalance: 12,
    contractType: "Onsite - Fulltime",
    workHours: "120h 32m",
    avatar: "BS",
    location: "Jakarta",
  },
  {
    id: "124",
    name: "Cody Fisher",
    email: "cody.fisher@company.test",
    department: "Development",
    jobTitle: "Junior Frontend Developer",
    phone: "+62 812 9981 2401",
    salary: "Rp 13.500.000",
    bankAccount: "**** **** **** 6273",
    leaveBalance: 7,
    contractType: "Remote - Fulltime",
    workHours: "118h 10m",
    avatar: "CF",
    location: "Bandung",
  },
  {
    id: "125",
    name: "Ralph Edwards",
    email: "ralph.edwards@company.test",
    department: "Design",
    jobTitle: "UX Designer",
    phone: "+62 813 7740 2284",
    salary: "Rp 16.250.000",
    bankAccount: "**** **** **** 9088",
    leaveBalance: 10,
    contractType: "Hybrid - Fulltime",
    workHours: "116h 48m",
    avatar: "RE",
    location: "Surabaya",
  },
  {
    id: "126",
    name: "Lisa Harvey",
    email: "lisa.harvey@company.test",
    department: "Human Resource",
    jobTitle: "HR Specialist",
    phone: "+62 811 3922 1803",
    salary: "Rp 14.750.000",
    bankAccount: "**** **** **** 3341",
    leaveBalance: 9,
    contractType: "Onsite - Fulltime",
    workHours: "121h 02m",
    avatar: "LH",
    location: "Jakarta",
  },
  {
    id: "127",
    name: "Kevin Malona",
    email: "kevin.malona@company.test",
    department: "Project Manager",
    jobTitle: "Project Lead",
    phone: "+62 857 6618 4420",
    salary: "Rp 21.000.000",
    bankAccount: "**** **** **** 7782",
    leaveBalance: 8,
    contractType: "Hybrid - Fulltime",
    workHours: "119h 44m",
    avatar: "KM",
    location: "Yogyakarta",
  },
];

export const departmentColors: Record<Department, string> = {
  "Business and Marketing": "bg-indigo-500",
  Design: "bg-emerald-500",
  "Project Manager": "bg-amber-500",
  "Human Resource": "bg-violet-500",
  Development: "bg-blue-500",
};

export function getEmployeeById(id: string | null) {
  return employees.find((employee) => employee.id === id);
}
