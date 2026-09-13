export default function priorityColor(priority: string) {
  switch (priority) {
    case "High":
      return "bg-[#f4dfd9] text-[#a14f42]";

    case "Medium":
      return "bg-[#f3ead0] text-[#96732b]";

    case "Low":
      return "bg-[#f0ebe2] text-[#7b8581]";
  }
}
