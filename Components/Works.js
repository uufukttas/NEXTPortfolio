import React from 'react';
import Image from "next/image"
import feedback from "../public/FeedbackApp.png"


function Works() {
  return (
    <div className='flex max-w-4xl mx-auto mt-16 antialiased'>
        <Image
            src={feedback}
            alt="FeedbackApp"
            priority={true}
            className="shadow hover:shadow-2xl"
            width={350}
            height={250}
            placeholder="blur"
        />
        <div>
            <img src=''/>
        </div>
        <div>
            <img src=''/>
        </div>
    </div>
    );
}

export default Works;
