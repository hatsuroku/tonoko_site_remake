import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import './card.scss';

interface CardProps {
    title?: string;
    picSrc?: string;
    children?: ReactNode;
}
 
const Card: React.FC<CardProps> = (
  { 
    title,
    picSrc,
    children,
  }: CardProps) => {
  return (
  <div className='cardContainer'>
    <div className='cardPicCon'>
      <img className='cardPic' src={picSrc} />
      <div className='cardFont'>
        {title}
      </div>
    </div>
    <div className='cardFrame'>
        {children}
        <div className='hint'>详情 &gt;</div>
        <div className='hint secondary'>不是详情 &gt;</div>
    </div>
    
  </div>);
};


export default Card;