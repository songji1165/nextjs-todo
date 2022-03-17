import {AppProps} from "next/app";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/router";
import {wrapper} from "../store";


const app = ({Component, pageProps}: AppProps) => {
    const router = useRouter()

    const {pathname} = router
    return <>
        {/*<GlobalStyle/>*/}

        {/* Header */}
        <h1>To Do List</h1>

        <div>
            <Component {...pageProps} />
        </div>

        {/* Footer */}
        <div>
            {pathname === "/" && (<Link href={"/todo/add"}>
                <a>추가하기</a>
            </Link>)}
            {pathname === "/todo/add" && (
                <Link href={"/"}>
                    <a>돌아가기</a>
                </Link>)}
        </div>
    </>
}

export default wrapper.withRedux(app)