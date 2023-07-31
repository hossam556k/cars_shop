"use client";


import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types';



function CustomButton({handleClick, containerStyles,title,btnType , textStyles, rightIcon} : CustomButtonProps) {
  return (
    <button
    disabled={false}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
  >
    <span className={`flex-1 ${textStyles}`}>{title}</span>
    
      
  </button>
);

  
}

export default CustomButton