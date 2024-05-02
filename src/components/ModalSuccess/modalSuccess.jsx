import React from 'react';
import {IoCheckmarkDone} from "react-icons/io5";

const ModalSuccess = ({text}) => {
    return (
        <div className={'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl rounded-lg px-4 py-2 sm:px-8 sm:py-3 md:px-16 md:py-5 bg-white flex items-start  gap-1 sm:gap-3'}>
            <IoCheckmarkDone className={'text-base sm:text-xl md:text-2xl lg:text-3xl text-green-600 flex-shrink-0'}/>
            <p className={'font-openSans text-xs sm:text-xl md:text-2xl lg:text-3xl font-regular text-center'}>
                {text}
            </p>
        </div>
    );
};

export default ModalSuccess;