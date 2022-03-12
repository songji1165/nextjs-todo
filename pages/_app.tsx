import {AppProps} from "next/app";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/router";


export default function TODOAPP({Component, pageProps}: AppProps) {
    const router = useRouter()

    const {pathname} = router
    return <div>
        <h1>To Do List</h1>
        <div>
            <Component {...pageProps} />
        </div>
        <div>
            {pathname === "/" && (<Link href={"/todo/add"}>
                <a>추가하기</a>
            </Link>)}
            {pathname === "/todo/add" && (
                <Link href={"/"}>
                    <a>돌아가기</a>
                </Link>)}
        </div>
    </div>
}