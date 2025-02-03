import React, { useState } from 'react';
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';
import styles from '@/styles/SmmServices.module.css';
//
import icon1 from '../public/images/icons/keyword.png'
import icon2 from '../public/images/icons/linkbuild.png'
import icon3 from '../public/images/icons/onpage.png'
import icon4 from '../public/images/icons/keyword-1.png'
import icon5 from '../public/images/icons/linkbuild-1.png'
import icon6 from '../public/images/icons/onpage-1.png'
import icon7 from '../public/images/icons/offpage.png'
import icon8 from '../public/images/icons/offpage-1.png'


const SeoServices = () => {

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
                        <Col lg={5}>
                            <Col lg={12}>
                                <MDBTabs className={styles.navTabs}>
                                    <MDBTabsItem>
                                        <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                                            <div className={styles.tabsPan}>
                                                <Image className='img-fluid'
                                                    src={icon1}
                                                    alt="Digital_Marketing"
                                                />
                                                <h5>Wholesale</h5>
                                            </div>
                                        </MDBTabsLink>
                                    </MDBTabsItem>



                                </MDBTabs>
                            </Col>
                            <div className='mt-3'></div>
                            <Col lg={12}>
                                <MDBTabs className={styles.navTabs}>

                                    <MDBTabsItem>
                                        <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                                            <div className={styles.tabsPan}>
                                                <Image className='img-fluid'
                                                    src={icon3}
                                                    alt="IT"
                                                />
                                                <h5>Retail</h5>
                                            </div>
                                        </MDBTabsLink>
                                    </MDBTabsItem>

                                </MDBTabs>
                            </Col>

                        </Col>

                        <Col lg={7} className='mbl-none'>
                            <MDBTabsContent>
                                <MDBTabsPane show={basicActive === 'tab1'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon4}
                                            alt="domian"
                                        />
                                        <h3>Wholesale</h3>
                                        <p>
                                            Ichibaan Logic Private Limited is a leading global provider of telecommunication services with its significant strategic stakes in Asia, Europe & America. We provide Wholesale VoIP termination services through our multiple direct interconnect with Tier-1/ Tier-2/ PTT & Mobile Operators who look for highest quality in A-Z destinations at lowest possible rates. Our expert NOC (Network Operations Center) Team monitors the routes 24/7 and responds instantly in case of any disruption in the link.
                                            <br />  <br />
                                            Ichibaan's robust network with powerful routing infrastructure enables it to provide unlimited ports where thousands of concurrent calls can be catered without compromising the quality. We are constantly growing our partner portfolio to build mutually beneficial relationships with all our clients.  With numerous interconnects, constant quality monitoring, automatic routing and 24/7 NOC support, Ichibaan is certainly in the best position to provide premium routing services in the market.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab3'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon5}
                                            alt="domian"
                                        />
                                        <h3>Retail</h3>
                                        <p>
                                            Ichibaan provides customized services to enterprises of all sizes at exceptionally low rates.  Ichibaan is known for offering tailor-made packages to companies with unique needs. If you are developing a mobile app that needs VoIP integration or if you are setting up a business that involve international dialing, then you are at the right place. Ichibaan possess a seamless ISV VoIP Termination service through which you can get a customized VoIP packages for your business.
                                        </p>
                                        <br />
                                        <p>
                                            We offer high quality Retail services to our B2B clients via Direct Routes and a carefully selected supplier base. Since our services are only for those who are either an incumbent carrier or a highly screened, locally interconnected carrier, thus high quality retail termination is guaranteed.
                                          
                                        </p>
                                       <br />
                                        <p>We ensure that the routing table is made in accordance with QoS & robust quality Statistics i.e. ACD, ASR, PDD which helps us in catering to our clientele needs and demands, also, maintaining a wide range of our clientele database which is an important asset to every organization.</p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab2'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon6}
                                            alt="domian"
                                        />
                                        <h3>On-Page SEO</h3>
                                        <p>
                                            With our On Page SEO services, you can enhance your website’s trustworthiness and increase traffic. <strong>On page SEO</strong> research entails a mix of activities that reveal your website's existing position and authority in search and highlight avenues for business growth. We use the latest search engine optimization tactics to help your brand rank high in Google for targeted keywords that will bring more users to your website.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab4'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon8}
                                            alt="domian"
                                        />
                                        <h3>Off-Page SEO</h3>
                                        <p>
                                            Our professional SEO agency offers Off Page SEO featuring a unique blend of digital marketing services to help you build your brand and generate qualified links. We work with social media and influencer campaigns as well link building strategies as part of <strong>Off Page SEO</strong> that will improve the search engine rankings for all pages on our website by utilizing On Page Treatments like keyword research & deep linking analysis, among others!
                                        </p>
                                    </div>
                                </MDBTabsPane>
                            </MDBTabsContent>
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
                                    <option className='opt' value="tab1">Keyword Research & Strategy</option>
                                    <option className='opt' value="tab2">Link Building</option>
                                    <option className='opt' value="tab3">On-Page SEO</option>
                                    <option className='opt' value="tab4">Off-Page SEO</option>
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
                                        <h3>Keyword Research & Strategy</h3>
                                        <p>
                                            Keyword Research serves as the lifeline of Keyword Research & Strategy efforts. Our SEO company has a team of professional and highly skilled digital marketing and WordPress SEO experts who know the art of conducting comprehensive <strong>Keyword Research</strong>. They will assess your business needs using in-depth keyword research and thorough site audits to provide the best online marketing strategies for your SEO campaigns.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={selectedService === 'tab2'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon5}
                                            alt="domian"
                                        />
                                        <h3>Link Building</h3>
                                        <p>
                                            Backlinks are a major component of ranking higher in search engines. Hence you should work with an <strong>SEO company</strong> like Ichibaan Logic , which has a dedicated SEO link building service driving traffic to your site through backlinks. We offer fully managed and bespoke link building services that speed up your ranking game and help you grow your BUSINESS, AUDIENCE, AND REVENUE!
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={selectedService === 'tab3'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon6}
                                            alt="domian"
                                        />
                                        <h3>On-Page SEO</h3>
                                        <p>
                                            With our On Page SEO services, you can enhance your website’s trustworthiness and increase traffic. <strong>On page SEO</strong> research entails a mix of activities that reveal your website's existing position and authority in search and highlight avenues for business growth. We use the latest search engine optimization tactics to help your brand rank high in Google for targeted keywords that will bring more users to your website.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={selectedService === 'tab4'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon8}
                                            alt="domian"
                                        />
                                        <h3>Off-Page SEO</h3>
                                        <p>
                                            Our professional SEO agency offers Off Page SEO featuring a unique blend of digital marketing services to help you build your brand and generate qualified links. We work with social media and influencer campaigns as well link building strategies as part of <strong>Off Page SEO</strong> that will improve the search engine rankings for all pages on our website by utilizing On Page Treatments like keyword research & deep linking analysis, among others!
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

export default SeoServices