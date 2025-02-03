import React from "react";
import Head from 'next/head';
//
const FullPage = React.lazy(() => import("@/fullpagecomp/SeoFullPage"));

export default function SearchEngineOptimization() {
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <title>Ichibaan Logic - Voice Services</title>
            </Head>
            <FullPage />
        </>
    )
}
