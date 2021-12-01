import React from 'react';
import { Link } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi';
import styles from './assets/ClientDetail.module.scss';
import client from './assets/img/clientphoto.jpg';

export default function ClientDetail() {
  // Image expansion

  function imageExpansionHandler() {
    var expandableImages = document.querySelectorAll('.expandable-image');

    function imgExpansionEvent(e) {
      function createImg(url) {
        var img = document.createElement('img');
        img.setAttribute('src', url);

        img.addEventListener('click', (_) => img.classNameList.toggle('image--enlarged'));

        return img;
      }

      function createBackdrop() {
        var span = document.createElement('span');
        span.addEventListener('click', (_) =>
          expansionContainer.parentNode.removeChild(expansionContainer)
        );

        return span;
      }

      if (!document.querySelector('.expansion-container')) {
        // create enclosing container
        var expansionContainer = document.createElement('div');
        expansionContainer.classNameList.add('expansion-container');

        // create children and append them to enclosing container
        expansionContainer.appendChild(createImg(e.src));
        expansionContainer.appendChild(createBackdrop());

        // add container to DOM
        document.body.appendChild(expansionContainer);
      }
    }

    expandableImages.forEach((e) => {
      e.addEventListener('click', (_) => {
        console.log('click');

        imgExpansionEvent(e);
      });
    });
  }

  return (
    <div className={styles.containers}>
      <Link to='/nanny'>
        <BiLeftArrowAlt style={{ position: 'relative', top: '4px' }} />
        Client Detail
      </Link>

      <div className={styles.success}>
        <p>Accept Client Success!</p>
        <button>
          <b> X</b>
        </button>
      </div>

      <div className={styles.container}>
        <h3>Parent Information</h3>
        <hr />
        <form>
          <div className={styles.form1}>
            <div className={styles.inputParent}>
              <label>Parent Name</label>
              <input
                type='text'
                id='parent'
                name='parent'
                value='Vegeta Super'
                readonly='readonly'
              />
            </div>
            <div className={styles.inputEmail}>
              <label>Email</label>
              <input
                type='text'
                id='email'
                name='email'
                value='vegeta@goku.com'
                readonly='readonly'
              />
            </div>
            <div className={styles.inputPhone}>
              <label>Phone Number</label>
              <input type='number' id='phone' name='phone' value='0823102492' readonly='readonly' />
            </div>
            <div className={styles.inputAddress}>
              <label>Address</label>
              <input
                type='text'
                id='address'
                name='address'
                value='Jl. Namek'
                readonly='readonly'
              />
            </div>
            <div className={styles.inputPhoto}>
              <p>Photo</p>
              <div className={styles.image}>
                <img
                  src={client}
                  alt=''
                  className='expandable-image'
                  onClick={imageExpansionHandler()}
                />
              </div>
            </div>
          </div>
          <div className={styles.form2}>
            <div className={styles.inputJob}>
              <label>Job</label>
              <input type='text' id='job' name='job' value='Warrior of Light' readonly='readonly' />
            </div>
            <div className={styles.inputBirth}>
              <label>Place Birth</label>
              <input type='text' id='birth' name='birth' value='Surabaya' readonly='readonly' />
            </div>
            <div className={styles.inputBirthDate}>
              <label>Date Birth</label>
              <input
                type='text'
                id='birthplace'
                name='birthplace'
                value='16 November 1992'
                readonly='readonly'
              />
            </div>
            <div className={styles.inputGender}>
              <label>Gender</label>
              <input type='text' id='gender' name='gender' value='Male' readonly='readonly' />
            </div>
          </div>
        </form>
        <h3>Children Information 1</h3>
        <hr />
        <form>
          <div className={styles.form1}>
            <div className={styles.inputParent}>
              <label>Parent Name</label>
              <input
                type='text'
                id='parent'
                name='parent'
                value='Vegeta Super'
                readonly='readonly'
              />
            </div>
            <div className={styles.inputGender}>
              <label>Gender</label>
              <input type='text' id='gender' name='gender' value='Male' readonly='readonly' />
            </div>
            <div className={styles.inputPhoto}>
              <label>Photo</label>
              <input type='file' id='myfile' name='myfile' />
            </div>
          </div>
          <div className={styles.form2}>
            <div className={styles.inputBirthPlace}>
              <label>Place Birth</label>
              <input type='text' id='birth' name='birth' value='Surabaya' readonly='readonly' />
            </div>
            <div className={styles.inputBirthDate}>
              <label>Date Birth</label>
              <input
                type='text'
                id='birthplace'
                name='birthplace'
                value='16 November 1992'
                readonly='readonly'
              />
            </div>
          </div>
        </form>
      </div>
      <div className={styles.btn}>
        <button
          style={{
            padding: '0.5rem 4rem',
            backgroundColor: '#F67979',
            border: 'none',
            borderRadius: '40px',
            color: 'white',
            marginRight: '1rem',
          }}
        >
          Reject
        </button>
        <button
          style={{
            padding: '0.5rem 4rem',
            backgroundColor: '#10B278',
            border: 'none',
            borderRadius: '40px',
            color: 'white',
          }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}