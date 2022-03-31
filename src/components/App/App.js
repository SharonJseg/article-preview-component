import './App.css';
import mainImage from '../../images/drawers.jpg';
import avatar from '../../images/avatar-michelle.jpg';
import shareIcon from '../../images/icon-share.svg';

function App() {
  return (
    <div className='page'>
      <article className='article-preview'>
        <img src={mainImage} alt='drawers' className='article-preview__image' />
        <div className='article-preview__content'>
          <h2 className='article-preview__title'>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h2>
          <p className='article-preview__text'>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
          <div className='article-preview__user-details'>
            <div className='article-preview__avatar-container'>
              <img
                src={avatar}
                alt='avatar'
                className='article-preview__avatar'
              />
              <p className='article-preview__username'>
                Michelle Appleton
                <span className='article-preview__date'>28 June 2020</span>
              </p>
            </div>
            <button className='article-preview__share-button'>
              <img
                src={shareIcon}
                alt='share'
                className='article-preview__share-icon'
              />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default App;
