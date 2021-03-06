import React from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton/PrimaryButton';
import bg from '../../assets/images/bg.png';
import './Banner.css';

const Banner = () => {

    return (
        <div className="hero min-h-screen"
            style={{
                background: `url(${bg})`
            }}        
        >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w rounded-lg shadow-2xl animated" alt=''/>
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here </h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>

                    <PrimaryButton>GET STARTED</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;