import Link from "next/link"
export default function Footer(){
    return(
        <div className="bg-gray-100 py-10 mt-20 border-t border-gray-400">
            <div className=" max-w-6xl mx-auto flex fel-col md:flex-row justify-between items-center gap-6 px-4">
                <div className="text-xl font-bold text-purple-600">VibeFlow</div>
                <div className="flex flex-wrap justify-center  gap-4 md:gap-8 text-sm font-medium text-purple-600">
                    <Link href='/' className="hover:text-gray-600 transition-colors">Home</Link>
                    <Link href='/trend' className="hover:text-gray-600 transition-colors">Trend</Link>
                    <Link href='/illustation' className="hover:text-gray-600 transition-colors">Illustration</Link>
                    <Link href='/animation' className="hover:text-gray-600 transition-colors">Animation</Link>
                </div>
            </div>
        </div>
    )
}