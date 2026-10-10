import { ClientDetailType } from "../type/data";

const tableTitle: string[] = [
  "CLIENT",
  "CONTACT",
  "STATUS",
  "PROJECT",
  "VALUE",
];

const clientDetail: ClientDetailType[] = [
  {
    id: 1,
    name: "Maya Chen",
    company: "Northstar Labs",
    email: "maya@northstarlabs.co",
    status: "Active",
    projectCount: 1,
    value: 9600,
    initials: "MC",
  },
  {
    id: 2,
    name: "Jon Bell",
    company: "Lumen House",
    email: "jon@lumenhouse.com",
    status: "Active",
    projectCount: 1,
    value: 7200,
    initials: "JB",
  },
  {
    id: 3,
    name: "Nia Okafor",
    company: "Field Notes",
    email: "nia@fieldnotes.studio",
    status: "Lead",
    projectCount: 1,
    value: 5400,
    initials: "NO",
  },
  {
    id: 4,
    name: "Theo Martin",
    company: "Common Thread",
    email: "theo@commonthread.design",
    status: "Past",
    projectCount: 1,
    value: 12600,
    initials: "TM",
  },
];

export const clientTableDetail = {
  tableTitle,
  clientDetail,
};
