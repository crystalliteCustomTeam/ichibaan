import React, { useState } from 'react';
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';
import styles from '@/styles/SmmServices.module.css';
//
import icon1 from '../public/images/icons/proofreading.png'
import icon2 from '../public/images/icons/linkbuild.png'
import icon3 from '../public/images/icons/onpage.png'
import icon4 from '../public/images/icons/proofreading-1.png'
import icon5 from '../public/images/icons/linkbuild-1.png'
import icon6 from '../public/images/icons/onpage-1.png'
import icon7 from '../public/images/icons/offpage.png'
import icon8 from '../public/images/icons/offpage-1.png'


const CwsServices = () => {

    const [basicActive, setBasicActive] = useState('tab1');

    const handleBasicClick = (value, string) => {
        if (value === basicActive) {
            return;
        }

        setBasicActive(value);
    };

    const [selectedService, setSelectedService] = useState('tab1');

    const handleSelectChange = (event) => {
        setSelectedService(event.target.value);
    };

    return (
        <>
            <section className={`${styles.digiService} scroll scroll-service`} data-section-name="scroll-service">
                <Container>

                    <Row className={`${styles.tabsRow} ${styles.deskTop}`}>

                        <Col lg={12}>
                            
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon4}
                                            alt="domian"
                                        />
                                        <h3>Unlock New Revenue Streams with Our SMS Monetization Solutions</h3>
                                        <p>
                                            At Ichibaan Logic , we understand the power of seamless communication and its potential to drive business growth. As a leading telecom solutions provider, we offer A2P (Application-to-Person) SMS monetization services that enable businesses to maximize their revenue by leveraging mobile messaging technologies.
                                            <br/><br/>
                                            Our advanced SMS monetization solutions allow businesses to engage with their audience more effectively through OTP authentication, P2A messaging, promotional SMS, and push notifications—transforming communication into a profitable asset.
                                            With our expertise in digital messaging, we equip businesses with cutting-edge technology to enhance customer interaction and boost profitability. Contact us today to discover how our SMS monetization services can elevate your business!
                                        </p>
                                    </div>
                                
                        </Col>
                    </Row>

                    {/*========== For Mobile ==========*/}

                    <Row className={`${styles.tabsRow} tabsRow`}>
                        <Col xl={6}>
                            <div className={styles.navTabs}>
                                <select
                                    id="serviceSelect"
                                    className="form-select"
                                    value={selectedService}
                                    onChange={handleSelectChange}
                                >
                                    <option className='opt' value="tab1">Custom Content</option>
                                    <option className='opt' value="tab2">eBooks</option>
                                    <option className='opt' value="tab3">Blog Posts</option>
                                    <option className='opt' value="tab4">SEO Content</option>
                                </select>
                            </div>
                        </Col>
                        <Col xl={6}>
                            <MDBTabsContent>
                                <MDBTabsPane show={selectedService === 'tab1'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon4}
                                            alt="domian"
                                        />
                                        <h3>Custom Content</h3>
                                        <p>
                                            n nearly every content marketing strategy, the need arises for custom copy that doesn’t clearly fall into the purview of traditional article writing services. But if it’s content, and it needs writing, our expert writers can and will do it:
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={selectedService === 'tab2'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon5}
                                            alt="domian"
                                        />
                                        <h3>eBooks</h3>
                                        <p>
                                            A Ichibaan Logic  eBook is the perfect intersection of our editorial and graphic design teams. These visual assets are beautifully designed to capture attention, but can be written with the same level of expertise and authority as a white paper.
                                        </p>
                                        <p className='mt-3'>
                                            Every eBook we make has just enough text on each page to get a point across without overwhelming the reader. This makes it possible to incorporate design elements that complement the written content, but it also means every word really has to count. Not a phrase out of place.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={selectedService === 'tab3'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon6}
                                            alt="domian"
                                        />
                                        <h3>Blog Posts</h3>
                                        <p>
                                            Most B2B and B2C content marketers agree: Blog content is the most effective type of web content writing for building brand awareness. But when a new blog post is published every 0.5 seconds, “good enough” won’t make the cut.
                                        </p>
                                        <p className='mt-3'>
                                            The difference between good content and great content is a team of talented writers armed with data from Google Analytics, SEMrush and other platforms. SEO content writing makes your blogs easy to find so your target audience lands on your website.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={selectedService === 'tab4'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon8}
                                            alt="domian"
                                        />
                                        <h3>SEO Content</h3>
                                        <p>
                                            Content for search engine optimization is the outcome of masterful scribes taking insights from content marketing strategists and weaving them into content that is on-brand, on-point and, eventually, on Page 1.
                                        </p>
                                        <p className='mt-3'>
                                            There’s a lot of online content out there and strategically worded blog posts and landing pages can help your target audience navigate to find your company. Our writers work closely with our CMS team to discover which keywords will get you the best results.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                            </MDBTabsContent>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CwsServices