import React from "react";
import Head from "next/head";
//
const FullPage = React.lazy(() => import("@/fullpagecomp/BusinessFullPage"));

export default function BusinessIntelligence() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        {/* Meta Tags & OG Tags Added Through Route */}
      </Head>
      <FullPage />
    </>
  );
}
