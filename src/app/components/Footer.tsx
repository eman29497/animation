import Link from "next/link"
export default function Footer(){
    return(
        <div className="bg-gray-100 py-6 mt-20 border-t border-gray-400">
            <div className=" max-w-6xl mx-auto flex flex-row justify-between items-center px-4">
                <div className="text-lg md:text-xl  font-bold text-purple-600">VibeFlow</div>
                <div className="flex flex-row justify-center items-center gap-3 md:gap-8 text-[11px] md:text-sm font-medium text-purple-600 ">
                    <Link href='/' className="hover:text-gray-600 transition-colors">Home</Link>
                    <Link href='/trend' className="hover:text-gray-600 transition-colors">Trend</Link>
                    <Link href='/illustation' className="hover:text-gray-600 transition-colors">Illustration</Link>
                    <Link href='/animation' className="hover:text-gray-600 transition-colors">Animation</Link>
                </div>
            </div>
        </div>
    )
}