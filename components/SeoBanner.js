import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/DigiMarktngBanner.module.css';
//
import digiBanner from '../public/images/banners/digital-marketing-banner.png'


const SeoBanner = () => {
    return (
        <>
            <section className={`${styles.banner} scroll scroll-banner`} data-section-name="scroll-banner">
                <Container>
                    <Row className={styles.digiRow}>
                        <Col md={6}>
                            <div className={styles.digiBanner}>
                                <h1>Voice <br />
                                    <span>Services</span>
                                </h1>
                                <p>Ichibaan Logic is the largest Asian aggregator of international voice traffic. Our comprehensive product portfolio, state of the art IP-based infrastructure, and advanced back-office systems help Fixed Carriers, Mobile Operators, Prepaid Calling Providers and Voice over Broadband Providers deliver the international voice service and quality their customers expect. We provide highest quality service with guaranteed CLI facility to MVNO’s, GSM Operators, PTTs and all telecom operators. With an exceptionally high Network Effectiveness Ratio (NER) & Answer Seizure Ratio (ASR) we assure outstanding customer experience and 100% customer satisfaction rate.</p>
                                <div className={`${styles.form} mt-4`}>
                                    <Link className='primary-btn' href="/contact-us">
                                        Join Us
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div>
                                <Image className='img-fluid'
                                    src={digiBanner}
                                    alt="Digital_Marketing"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SeoBanner