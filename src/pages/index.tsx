import Navbar from "@/components/Navbar";
import TablePage from "@/components/table"

export default function Home() {
  return (
      <main className="max-w-[1444px] mx-auto">
          <Navbar/>
          <TablePage/>
      </main>
  );
}
