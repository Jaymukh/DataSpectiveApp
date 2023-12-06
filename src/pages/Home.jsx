import React, { useState, useEffect } from 'react';
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header';
import LockImage from '../images/stethoscope.png'
import OurSolutionImage from '../images/OurSolutionImage.png'
import Logo from '../images/DataSpectiv.png'
import { RouteConstants } from '../constants';

function Home() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate(RouteConstants.questionnaire);
    }
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        console.log('Effect is running!');
        const handleScroll = () => {
            const scrolled = window.scrollY > 0;
            console.log('Scrolled:', scrolled);
            setIsScrolled(scrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className='home'>
            <Header isScrolled={isScrolled} />
            <main>
                <div className="bg-image">
                    <img src={LockImage} alt="Lock" />
                    <div className='d-flex flex-column justify-content-center align-items-center w-50 mx-auto bg-white' style={{ zIndex: '1000', margin: '-27rem auto auto auto', opacity: 1 }}>
                        <h1 className='text-left'>Making Compliance Easy</h1>
                        <p>In today's digital age, data protection is more important than ever. Customer are becoming increasingly aware of the importance of their personal data and are seeking businesses that prioritize privacy cpmpliance. Make data protection a business advantage. <br />
                            {/* By partnering with us, we can help to ease your offerings become privacy compliant and give your business a compititive advantage. We provide expert guidance and support to ensure that your customers' data is protected and that your business is operating within legal and ethical boundaries. Let us help you build a reputation as a trusted and responsible business that values and protects its users' privacy and data. */}
                        </p>
                        <button type="button" className='green-button width-20'>Start Your Free Assessment</button>
                    </div>
                </div>

                <section id='becomeaPartner' className=''>
                    <div className='width-35 d-flex flex-column justify-content-between align-items-start' >
                        <h1 className='my-3' >Become a Partner</h1>
                        <p className=''>
                            Your one stop shop for compliance offerings. If you want to assess the compliance readiness of your product or solution, please get a free assessment by answering a set of simple questions.
                        </p>
                        <button type="button" className='green-border-button width-15 my-3'>
                            Get Started
                            <GoArrowRight className='ms-2' />
                        </button>
                    </div>
                    <img src={LockImage} alt="Lock" style={{ width: '35rem', height: '25rem', borderRadius: '4rem' }} />
                </section>
                <section>
                    <div style={{ backgroundColor: '#f9f7f7', borderRadius: '2rem' }} className='w-100 p-5 d-flex flex-row justify-content-around align-items-center m-auto'>
                        <div className='width-20 d-flex flex-row justify-content-around align-items-center'>
                            <img src={LockImage} alt="Lock" style={{ width: '5rem', height: '5rem', borderRadius: '1rem' }} />
                            <div className='width-10 d-flex flex-column justify-content-between align-items-start' >
                                <h6 className='' >Become a Partner</h6>
                                <p className='mb-0'>
                                    Your one stop shop for compliance offerings.
                                </p>
                            </div>
                        </div>

                        <div className='width-20 d-flex flex-row justify-content-around align-items-center'>
                            <img src={LockImage} alt="Lock" style={{ width: '5rem', height: '5rem', borderRadius: '1rem' }} />
                            <div className='width-10 d-flex flex-column justify-content-between align-items-start' >
                                <h6 className='' >Become a Partner</h6>
                                <p className='mb-0'>
                                    Your one stop shop for compliance offerings.
                                </p>
                            </div>
                        </div>
                        <div className='width-20 d-flex flex-row justify-content-around align-items-center'>
                            <img src={LockImage} alt="Lock" style={{ width: '5rem', height: '5rem', borderRadius: '1rem' }} />
                            <div className='width-10 d-flex flex-column justify-content-between align-items-start' >
                                <h6 className='' >Become a Partner</h6>
                                <p className='mb-0'>
                                    Your one stop shop for compliance offerings.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='mt-3'>
                    <img src={LockImage} alt="Lock" style={{ width: '35rem', height: '25rem', borderRadius: '4rem' }} />
                    <div className='width-35 d-flex flex-column justify-content-between align-items-start' >
                        <h3 className='mb-5'>Democratizing access to care with readily available technology, allows patients to test in the privacy of their own home.</h3>
                        <i>Dr. Setu Vora, MD, <br />
                            Pequot Tribal Chief Medical Officer
                        </i>
                    </div>
                </section>
                <section id='becomeaPartner' className='' style={{ backgroundColor: '#f9f7f7' }}>
                    <div className='width-35 d-flex flex-column justify-content-between align-items-start' >
                        <h1 className='my-3' >Become a Partner</h1>
                        <p className=''>
                            Your one stop shop for compliance offerings. If you want to assess the compliance readiness of your product or solution, please get a free assessment by answering a set of simple questions.
                        </p>
                        <button type="button" className='green-border-button width-15 my-3'>
                            Get Started
                            <GoArrowRight className='ms-2' />
                        </button>
                    </div>
                    <img src={LockImage} alt="Lock" style={{ width: '35rem', height: '25rem', borderRadius: '4rem' }} />
                </section>
                <section className=''>
                    <img src={LockImage} alt="Lock" style={{ width: '35rem', height: '25rem', borderRadius: '4rem' }} />
                    <div className='width-35 d-flex flex-column justify-content-between align-items-start' >
                        <h1 className='my-3' >Routine urinalysis and UTI testing</h1>
                        <p className=''>
                            Make routine checkups, prenatal care, and UTI testing more accessible and convenient with Minuteful 10 and Minuteful UTI. Clinical-grade results are provided from the comfort of home and easily obtained using a smartphone at the time and place users choose. Results are securely shared with their healthcare provider for follow up.
                        </p>
                        <b>Coming soon to the US</b>
                    </div>
                </section>
                <section style={{ backgroundColor: '#f9f7f7' }}>
                    <div className='width-70 d-flex flex-column justify-content-between align-items-center'>
                        <h1 className='my-3' >Routine urinalysis and UTI testing</h1>
                        <div className='w-100 d-flex flex-row justify-content-around'>
                            <div className="card">
                                <img src={LockImage} alt="Lock" style={{ width: '5rem', height: '5rem', borderRadius: '1rem' }} />
                                <div className='d-flex flex-column'>
                                    <h1>Regulated</h1>
                                    <p className="fs-20">Clinical-grade products & services</p>
                                </div>
                                <h5>FDA cleared & CE marked</h5>
                            </div>

                            <div className="card">
                                <img src={LockImage} alt="Lock" style={{ width: '5rem', height: '5rem', borderRadius: '1rem' }} />
                                <div className='d-flex flex-column'>
                                    <h1>Flexible</h1>
                                    <p className="fs-20">Clinical-grade products & services</p>
                                </div>
                                <h5>FDA cleared & CE marked</h5>
                            </div>

                            <div className="card">
                                <img src={LockImage} alt="Lock" style={{ width: '5rem', height: '5rem', borderRadius: '1rem' }} />
                                <div className='d-flex flex-column'>
                                    <h1>Trusted</h1>
                                    <p className="fs-20">Clinical-grade products & services</p>
                                </div>
                                <h5>FDA cleared & CE marked</h5>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='' style={{ backgroundColor: '#0c203d' }}>
                    <div className='width-25 d-flex flex-column justify-content-between align-items-start text-white' >
                        <h1 className='my-3' >Our Tech</h1>
                        <p className=''>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A distinctio vitae tenetur reiciendis ipsa, dolores incidunt delectus consequatur, consequuntur neque aut inventore veritatis corrupti accusantium repellendus, pariatur qui similique dolorem? Perspiciatis nobis mollitia vero iusto similique suscipit amet sapiente autem eius iste dolore, dolores nostrum facere asperiores tenetur iure soluta. Quam corporis officiis tempora animi possimus dolorum reiciendis aliquid deleniti!
                        </p>
                    </div>
                    <img src={LockImage} alt="Lock" style={{ width: '35rem', height: '25rem', borderRadius: '4rem' }} />
                </section>
                <section id='ourSolution' className='' >
                    <div>
                        <h1 className='my-3' >Our Solution</h1>
                        <img src={OurSolutionImage} alt="OurSolution" style={{ width: 'auto', height: '25rem', borderRadius: '4rem', display: 'flex', margin: 'auto', justifySelf: 'center' }} />
                    </div>
                </section>
                <section style={{ backgroundColor: '#f9f7f7' }}>
                    <div className='width-70 d-flex flex-column justify-content-between align-items-center'>
                        <h1 className='my-3' >Routine urinalysis and UTI testing</h1>
                        <div className='w-100 d-flex flex-row justify-content-around'>
                            <div className="width-20 d-flex flex-column justify-content-between align-items-start">
                                <img src={LockImage} alt="OurSolution" style={{ width: '100%', height: '10rem', borderRadius: '1rem', display: 'flex', margin: 'auto', justifySelf: 'center' }} />
                                <h2 className="card-title">Helping Idahoans lead healthier lives</h2>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorem. Dolor dicta voluptatibus quia quo provident esse consequuntur repellendus qui repellat, minima beatae itaque, sit nobis unde laboriosam.</p>
                            </div>
                            <div className="width-20 d-flex flex-column justify-content-between align-items-start">
                                <img src={LockImage} alt="OurSolution" style={{ width: '100%', height: '10rem', borderRadius: '1rem', display: 'flex', margin: 'auto', justifySelf: 'center' }} />
                                <h2 className="card-title">Helping Idahoans lead healthier lives</h2>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorem. Dolor dicta voluptatibus quia quo provident esse consequuntur repellendus qui repellat, minima beatae itaque, sit nobis unde laboriosam.</p>
                            </div>
                            <div className="width-20 d-flex flex-column justify-content-between align-items-start">
                                <img src={LockImage} alt="OurSolution" style={{ width: '100%', height: '10rem', borderRadius: '1rem', display: 'flex', margin: 'auto', justifySelf: 'center' }} />
                                <h2 className="card-title">Helping Idahoans lead healthier lives</h2>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorem. Dolor dicta voluptatibus quia quo provident esse consequuntur repellendus qui repellat, minima beatae itaque, sit nobis unde laboriosam.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section id='ourSolution' className='' style={{backgroundColor: '#f9f7f7'}}> 
                    {/* <div className='width-60 d-flex flex-column justify-content-between align-items-start' >
                        <h1 className='my-3' >Our Solution</h1>
                        <h3>Easy steps to reach your compliance goals</h3>
                        <div>
                            <h6 className='color-green'>Step 1</h6>
                            <p>Start with your offerings initial assessment <br />
                                absolutely <b>free of cost</b>
                            </p>
                        </div>
                        <div>
                            <h6 className='color-green'>Step 2</h6>
                            <p>Register and then Login with your credentials to view your
                                <b> initial assessement report</b>
                            </p>
                        </div>
                        <div>
                            <h6 className='color-green'>Step 3</h6>
                            <p>
                                Based on your initial report, we undertake a detailed anylsis by asking you the right questions, which will identify any potential risks or vulnerabilities in your products and services. Our team of experts will work closely with you to identify any areas where improvements can be made, and develop a comprehensive plan to address them. We understand the importance of maintaining the trust of your customers and stakeholders, which is why we prioritize transparency and open communication throughout the entire process. With our guidance and support, you can rest assured that your offerings are fully compliant with all relevant regulations and industry standards, and that your customers' privacy is always protected.
                            </p>
                        </div>
                        <div>
                            <h6 className='color-green'>Step 4</h6>
                            <p>
                                This is prime space! Go into more detail about your exciting title here. Explain what the section is about, share some details, and just the right amount of information to keep readers interested.
                            </p>
                        </div>
                        <img src={OurSolutionImage} alt="OurSolution" style={{ width: 'auto', height: '25rem', borderRadius: '4rem', display: 'flex', margin: 'auto', justifySelf: 'center' }} />
                    </div>
                </section> */}
            </main>
            <footer>
                <ul style={{ listStyle: 'none' }}>
                    <li><img src={Logo} alt="logo" className='logo bg-white ms-0 mb-4' /></li>
                    <li><h3>Our Services</h3></li>
                    <li>Minuteful Kidney</li>
                    <li>Minuteful For Wound</li>
                    <li>Minuteful UTI</li>
                    <li>Minuteful 10</li>
                </ul>
                <ul style={{ listStyle: 'none' }}>
                    <li><h3>About</h3></li>
                    <li>Minuteful Kidney</li>
                    <li>Minuteful For Wound</li>
                    <li>Minuteful UTI</li>
                    <li>Minuteful 10</li>
                </ul>
                <ul style={{ listStyle: 'none' }}>
                    <li><h3>Company</h3></li>
                    <li>Minuteful Kidney</li>
                    <li>Minuteful For Wound</li>
                    <li>Minuteful UTI</li>
                    <li>Minuteful 10</li>
                </ul>

            </footer>

            {/* <div className='home-content'>
                <div className='home-first-content'>
                    <div className="parent-making-compliance-easy">
                        <div className='making-compliance-easy'>
                            <h1 className='text-left'>Making Compliance Easy</h1>
                            <p>In today's digital age, data protection is more important than ever. Customer are becoming increasingly aware of the importance of their personal data and are seeking businesses that prioritize privacy cpmpliance. Make data protection a business advantage. <br />
                                By partnering with us, we can help to ease your offerings become privacy compliant and give your business a compititive advantage. We provide expert guidance and support to ensure that your customers' data is protected and that your business is operating within legal and ethical boundaries. Let us help you build a reputation as a trusted and responsible business that values and protects its users' privacy and data.</p>
                            <button type="button" className='green-button width-20'>Start Your Free Assessment</button>
                        </div>
                        <div className='div-lock-image'>
                            <img src={LockImage} alt="Lock" />
                        </div>
                    </div>

                    <div className="parent-get-started">
                        <p className='width-60'>
                            Your one stop shop for compliance offerings. If you want to assess the compliance readiness of your product or solution, please get a free assessment by answering a set of simple questions.
                        </p>
                        <button type="button" className='green-border-button width-15'>
                            Get Started
                            <GoArrowRight className='ms-2' />
                        </button>
                    </div>
                </div>

                <div className='our-solution'>
                    <h1 id='ourSolution'>Our Solution</h1>
                    <h3>Easy steps to reach your compliance goals</h3>
                    <div>
                        <h6 className='color-green'>Step 1</h6>
                        <p>Start with your offerings initial assessment <br />
                            absolutely <b>free of cost</b>
                        </p>
                    </div>
                    <div>
                        <h6 className='color-green'>Step 2</h6>
                        <p>Register and then Login with your credentials to view your
                            <b> initial assessement report</b>
                        </p>
                    </div>
                    <div>
                        <h6 className='color-green'>Step 3</h6>
                        <p>
                            Based on your initial report, we undertake a detailed anylsis by asking you the right questions, which will identify any potential risks or vulnerabilities in your products and services. Our team of experts will work closely with you to identify any areas where improvements can be made, and develop a comprehensive plan to address them. We understand the importance of maintaining the trust of your customers and stakeholders, which is why we prioritize transparency and open communication throughout the entire process. With our guidance and support, you can rest assured that your offerings are fully compliant with all relevant regulations and industry standards, and that your customers' privacy is always protected.
                        </p>
                    </div>
                    <div>
                        <h6 className='color-green'>Step 4</h6>
                        <p>
                            This is prime space! Go into more detail about your exciting title here. Explain what the section is about, share some details, and just the right amount of information to keep readers interested.
                        </p>
                    </div>
                </div>
                <div><h1 id='becomeaPartner'>Become a Partner</h1></div>
                <div><h1 id='pricing'>Pricing</h1></div>
                <div><h1 id='resources'>Resources</h1></div>
            </div> */}
        </div>
    )
}

export default Home