"use client"
import { ReactNode, useState } from "react";
import { Sidebar } from "../Sidebar";

interface LayoutAppProps {
    children: ReactNode
}
export function LayoutApp({ children }: LayoutAppProps) {
    const [isOpen, setIsOpen] = useState(false)

    function handleToggleSidebar() {
        setIsOpen(prev => !prev)
    }

    return (
        <div data-open={isOpen} className='group grid min-h-screen grid-cols-app data-[open="true"]:grid-cols-closedSidebar data-[open="true"]:bg-red-500'>
            <Sidebar />
            <main className="px-4 pb-12 pt-8">{children}</main>
        </div>
    )
}