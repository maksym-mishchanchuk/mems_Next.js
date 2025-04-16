'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const navItems = [
    { href: '/', label: 'Table' },
    { href: '/list', label: 'List' },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="bg-white border-b shadow-sm">
            <div className="p-1 sm:p-6 py-3 flex gap-4">
                <Link href="/">
                <Image src="/logo.png" alt="Logo" className="w-7 h-7"/>
                </Link>
                <nav className="flex gap-4">
                    {navItems.map(({ href, label }) => (
                        <Link key={href} href={href}>
                            <Button
                                variant={pathname === href ? 'default' : 'ghost'}
                                className={cn('text-sm', pathname === href && 'font-semibold')}
                            >
                                {label}
                            </Button>
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}

