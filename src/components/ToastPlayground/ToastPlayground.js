import React from 'react';

import Button from '../Button';
import Toast from '../Toast';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variantSelected, setVariantSelected] = React.useState(VARIANT_OPTIONS[0]);
  const [showToast, setShowToast] = React.useState(false);

  function handleDismiss() {
    setShowToast(false);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      { showToast &&
        <Toast 
          variant={variantSelected} 
          handleDismiss={handleDismiss}>
          {message}
        </Toast>
      }

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea 
              id="message" 
              className={styles.messageInput}
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >

            {VARIANT_OPTIONS.map((option) => {
              const id = `variant-${option}`;

              return (
                <label htmlFor={id} key={crypto.randomUUID()}>
                  <input
                    id={id}
                    type="radio"
                    name="variant"
                    value={option}
                    checked={variantSelected === option}
                    onChange={event => {
                      setVariantSelected(event.target.value)
                    }}
                  />
                  {option}
                </label>
              )
          })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button       
              onClick={() => {
                setShowToast(true);
              }}
            >
              Pop Toast!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
