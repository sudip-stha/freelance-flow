export default function clientStatus(status: string) {
  switch (status) {
    case "Active":
      return "bg-[#e5eee9] text-[#4c7a6e]";

    case "Lead":
      return "bg-[#f3ead0] text-[#96732b]";

    case "Past":
      return "bg-[#eeeae2] text-[#7c8582]";
  }
}
