import Head from "next/head";
import Link from "next/link"
import Image from "next/image";


export default function Layout({children,title="練習用"}){
    return(
        <div className="flex justify-center items-center flex-col min-h-screen text-gray-600
      text-sm font-mono">
            <Head>
                <title>{title}</title>
            </Head>

            <main className="flex flex-1 justify-center items-center flex-col w-screen">
                {children}
            </main>

            <footer className="w-full h-12 flex justify-center items-center border-t">
                    ネコマムシの原点
            </footer>
        </div>
    )
}