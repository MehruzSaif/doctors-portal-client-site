import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton/PrimaryButton';
import treatment from '../../assets/images/treatment.png';

const Treatment = () => {
    return (
        <div className="hero min-h-screen max-w-7xl mx-auto px-12">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='treatment-img animated' src={treatment} alt=''/>
                    <div>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                        
                        <PrimaryButton>GET STARTED</PrimaryButton>
                    </div>
                </div>
            </div>
    );
};

export default Treatment;