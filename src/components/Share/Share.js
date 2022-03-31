import React from 'react';
import './Share.css';
import fbIcon from '../../images/icon-facebook.svg';
import twIcon from '../../images/icon-twitter.svg';
import pinIcon from '../../images/icon-pinterest.svg';
import Icon from '../Icon/Icon';

const Share = ({ isClicked, onClose }) => {
  return (
    <div
      className={
        isClicked
          ? 'article-preview__share'
          : 'article-preview__share article-preview__share_active'
      }
    >
      <div className='article-preview__share-container'>
        <p className='article-preview__share-text'>SHARE</p>
        <button
          className='article-preview__share-button'
          aria-label='share
          with fb button'
        >
          <Icon name='facebook' className='fb_icon' height='20' width='20' />
        </button>
        <button className='article-preview__share-button'>
          <Icon
            name='twitter'
            className='twitter_icon'
            height='17'
            width='20'
          />
        </button>
        <button className='article-preview__share-button'>
          <Icon
            name='pinterest'
            className='pinterest_icon'
            height='20'
            width='20'
          />
        </button>
        <button
          className='article-preview__button_mobile'
          onClick={() => onClose()}
        >
          <svg
            className='article-preview__button_mobile-icon'
            xmlns='http://www.w3.org/2000/svg'
            width='15'
            height='13'
          >
            <path d='M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z' />
          </svg>
        </button>
      </div>
      <div className='article-preview__share-tip'></div>
    </div>
  );
};

export default Share;
