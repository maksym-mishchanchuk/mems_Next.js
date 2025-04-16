import Navbar from "@/components/Navbar";
import ListCards from '@/components/listCards';

export default function ListPage() {
    return (
        <main className="max-w-[1444px] mx-auto">
            <Navbar/>
            <div>
                <ListCards/>
            </div>
        </main>
    );
}
