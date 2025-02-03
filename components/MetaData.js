import React from 'react'
import Head from "next/head";
import { useRouter } from 'next/router';


const MetaData = () => {

    const router = useRouter();
    const PagePath = router.asPath;

    return (
        <>
            {PagePath === '/' ? (
                <Head>
                    {/* Title & Description */}
                    <title key="title">Home - Ichibaan Logic </title>
                    <meta name="description" content="How We Meet Enterprise Needs We'll take care of business." key="metadesc" />
                    <meta name="keywords" content="Digital Marketing, Seo, Smm, IT Services, Dedicated Hosting" />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    {/* OG Tags */}
                    <meta property="og:title" content="Home - Ichibaan Logic " />
                    <meta property="og:description" content="How We Meet Enterprise Needs We'll take care of business." />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:url" content="https://Ichibaanlogic.com/" />
                    <meta property="og:site_name" content="Home - Ichibaan Logic " />
                </Head>
            ) : PagePath === '/about-us' ? (
                <Head>
                    {/* Title & Description */}
                    <title key="title">About - Ichibaan Logic </title>
                    <meta name="description" content="How We Meet Enterprise Needs We'll take care of business." key="metadesc" />
                    <meta name="keywords" content="Digital Marketing, Seo, Smm, IT Services, Dedicated Hosting" />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    {/* OG Tags */}
                    <meta property="og:title" content="About - Ichibaan Logic " />
                    <meta property="og:description" content="How We Meet Enterprise Needs We'll take care of business." />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:url" content="https://Ichibaanlogic.com/about-us/" />
                    <meta property="og:site_name" content="About - Ichibaan Logic " />
                </Head>
            ) : PagePath === '/contact-us' ? (
                <Head>
                    {/* Title & Description */}
                    <title key="title">Contact - Ichibaan Logic </title>
                    <meta name="description" content="How We Meet Enterprise Needs We'll take care of business." key="metadesc" />
                    <meta name="keywords" content="Digital Marketing, Seo, Smm, IT Services, Dedicated Hosting" />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    {/* OG Tags */}
                    <meta property="og:title" content="Contact - Ichibaan Logic " />
                    <meta property="og:description" content="How We Meet Enterprise Needs We'll take care of business." />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:url" content="https://Ichibaanlogic.com/contact-us/" />
                    <meta property="og:site_name" content="Contact - Ichibaan Logic " />
                </Head>
            ) : PagePath === '/thank-you' ? (
                <Head>
                    {/* Title & Description */}
                    <title key="title">Thank You - Ichibaan Logic </title>
                    <meta name="description" content="How We Meet Enterprise Needs We'll take care of business." key="metadesc" />
                    <meta name="keywords" content="Digital Marketing, Seo, Smm, IT Services, Dedicated Hosting" />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    {/* OG Tags */}
                    <meta property="og:title" content="Thank You - Ichibaan Logic " />
                    <meta property="og:description" content="How We Meet Enterprise Needs We'll take care of business." />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:url" content="https://Ichibaanlogic.com/thank-you/" />
                    <meta property="og:site_name" content="Thank You - Ichibaan Logic " />
                </Head>
            ) : PagePath === '/business-intelligence' ? (
                <Head>
                    {/* Title & Description */}
                    <title key="title">Business Intelligence - Ichibaan Logic </title>
                    <meta name="description" content="How We Meet Enterprise Needs We'll take care of business." key="metadesc" />
                    <meta name="keywords" content="Digital Marketing, Seo, Smm, IT Services, Dedicated Hosting" />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    {/* OG Tags */}
                    <meta property="og:title" content="Business Intelligence - Ichibaan Logic " />
                    <meta property="og:description" content="How We Meet Enterprise Needs We'll take care of business." />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:url" content="https://Ichibaanlogic.com/business-intelligence/" />
                    <meta property="og:site_name" content="Business Intelligence - Ichibaan Logic " />
                </Head>
            ) : PagePath === '/career' ? (
                <Head>
                    {/* Title & Description */}
                    <title key="title">Career - Ichibaan Logic </title>
                    <meta name="description" content="How We Meet Enterprise Needs We'll take care of business." key="metadesc" />
                    <meta name="keywords" content="Digital Marketing, Seo, Smm, IT Services, Dedicated Hosting" />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    {/* OG Tags */}
                    <meta property="og:title" content="Career - Ichibaan Logic " />
                    <meta property="og:description" content="How We Meet Enterprise Needs We'll take care of business." />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:url" content="https://Ichibaanlogic.com/career/" />
                    <meta property="og:site_name" content="Career - Ichibaan Logic " />
                </Head>
            ) : PagePath === '/content-writing-services' ? (
                <Head>
                    {/* Title & Description */}
                    <title key="title">Content Writing Services - Ichibaan Logic </title>
                    <meta name="description" content="How We Meet Enterprise Needs We'll take care of business." key="metadesc" />
                    <meta name="keywords" content="Digital Marketing, Seo, Smm, IT Services, Dedicated Hosting" />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    {/* OG Tags */}
                    <meta property="og:title" content="Content Writing Services - Ichibaan Logic " />
                    <meta property="og:description" content="How We Meet Enterprise Needs We'll take care of business." />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:url" content="https://Ichibaanlogic.com/content-writing-services/" />
                    <meta property="og:site_name" content="Content Writing Services - Ichibaan Logic " />
                </Head>
            ) : PagePath === '/dedicated-hosting' ? (
                <Head>
                    {/* Title & Description */}
                    <title key="title">Dedicated Hosting - Ichibaan Logic </title>
                    <meta name="description" content="How We Meet Enterprise Needs We'll take care of business." key="metadesc" />
                    <meta name="keywords" content="Digital Marketing, Seo, Smm, IT Services, Dedicated Hosting" />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    {/* OG Tags */}
                    <meta property="og:title" content="Dedicated Hosting - Ichibaan Logic " />
                    <meta property="og:description" content="How We Meet Enterprise Needs We'll take care of business." />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:url" content="https://Ichibaanlogic.com/dedicated-hosting/" />
                    <meta property="og:site_name" content="Dedicated Hosting - Ichibaan Logic " />
                </Head>
            ) : PagePath === '/digital-marketing' ? (
                <Head>
                    {/* Title & Description */}
                    <title key="title">Digital Marketing - Ichibaan Logic </title>
                    <meta name="description" content="How We Meet Enterprise Needs We'll take care of business." key="metadesc" />
                    <meta name="keywords" content="Digital Marketing, Seo, Smm, IT Services, Dedicated Hosting" />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    {/* OG Tags */}
                    <meta property="og:title" content="Digital Marketing - Ichibaan Logic " />
                    <meta property="og:description" content="How We Meet Enterprise Needs We'll take care of business." />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:url" content="https://Ichibaanlogic.com/digital-marketing/" />
                    <meta property="og:site_name" content="Digital Marketing - Ichibaan Logic " />
                </Head>
            ) : PagePath === '/managed-it' ? (
                <Head>
                    {/* Title & Description */}
                    <title key="title">Managed IT - Ichibaan Logic </title>
                    <meta name="description" content="How We Meet Enterprise Needs We'll take care of business." key="metadesc" />
                    <meta name="keywords" content="Digital Marketing, Seo, Smm, IT Services, Dedicated Hosting" />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    {/* OG Tags */}
                    <meta property="og:title" content="Managed IT - Ichibaan Logic " />
                    <meta property="og:description" content="How We Meet Enterprise Needs We'll take care of business." />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:url" content="https://Ichibaanlogic.com/managed-it/" />
                    <meta property="og:site_name" content="Managed IT - Ichibaan Logic " />
                </Head>
            ) : PagePath === '/seo' ? (
                <Head>
                    {/* Title & Description */}
                    <title key="title">Search Engine Optimization - Ichibaan Logic </title>
                    <meta name="description" content="How We Meet Enterprise Needs We'll take care of business." key="metadesc" />
                    <meta name="keywords" content="Digital Marketing, Seo, Smm, IT Services, Dedicated Hosting" />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    {/* OG Tags */}
                    <meta property="og:title" content="Search Engine Optimization - Ichibaan Logic " />
                    <meta property="og:description" content="How We Meet Enterprise Needs We'll take care of business." />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:url" content="https://Ichibaanlogic.com/seo/" />
                    <meta property="og:site_name" content="Search Engine Optimization - Ichibaan Logic " />
                </Head>
            ) : PagePath === '/social-media-marketing' ? (
                <Head>
                    {/* Title & Description */}
                    <title key="title">Social Media Marketing - Ichibaan Logic </title>
                    <meta name="description" content="How We Meet Enterprise Needs We'll take care of business." key="metadesc" />
                    <meta name="keywords" content="Digital Marketing, Seo, Smm, IT Services, Dedicated Hosting" />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    {/* OG Tags */}
                    <meta property="og:title" content="Social Media Marketing - Ichibaan Logic " />
                    <meta property="og:description" content="How We Meet Enterprise Needs We'll take care of business." />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:url" content="https://Ichibaanlogic.com/social-media-marketing/" />
                    <meta property="og:site_name" content="Social Media Marketing - Ichibaan Logic " />
                </Head>
            ) : PagePath === '/telecommunication' ? (
                <Head>
                    {/* Title & Description */}
                    <title key="title">Telecommunication - Ichibaan Logic </title>
                    <meta name="description" content="How We Meet Enterprise Needs We'll take care of business." key="metadesc" />
                    <meta name="keywords" content="Digital Marketing, Seo, Smm, IT Services, Dedicated Hosting" />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    {/* OG Tags */}
                    <meta property="og:title" content="Telecommunication - Ichibaan Logic " />
                    <meta property="og:description" content="How We Meet Enterprise Needs We'll take care of business." />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:url" content="https://Ichibaanlogic.com/telecommunication/" />
                    <meta property="og:site_name" content="Telecommunication - Ichibaan Logic " />
                </Head>
            ) : PagePath === '/transcription' ? (
                <Head>
                    {/* Title & Description */}
                    <title key="title">Transcription - Ichibaan Logic </title>
                    <meta name="description" content="How We Meet Enterprise Needs We'll take care of business." key="metadesc" />
                    <meta name="keywords" content="Digital Marketing, Seo, Smm, IT Services, Dedicated Hosting" />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    {/* OG Tags */}
                    <meta property="og:title" content="Transcription - Ichibaan Logic " />
                    <meta property="og:description" content="How We Meet Enterprise Needs We'll take care of business." />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:url" content="https://Ichibaanlogic.com/transcription/" />
                    <meta property="og:site_name" content="Transcription - Ichibaan Logic " />
                </Head>
            )
                : null
            }
        </>
    )
}

export default MetaData
