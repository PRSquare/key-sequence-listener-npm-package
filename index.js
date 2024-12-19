const keySeqListener = (
  keySequence,
  timeout,
  action,
) => {
  if (timeout < 0) {
    timeout = 0;
  }
  let pressedKeys = 0;
  const restartKeySequence = () => {
    pressedKeys = 0;
  };
  let timeoutId;
  const startT = () => {
    timeoutId = setTimeout(() => {
      restartKeySequence();
    }, timeout);
  };
  document.body.addEventListener('keydown', (event) => {
    if (!keySequence.includes(event.key)) {
      restartKeySequence();
    }
    if (event.key === keySequence[pressedKeys]) {
      if (pressedKeys == 0) {
        startT();
      }
      pressedKeys++;
      if (pressedKeys == keySequence.length) {
        pressedKeys = 0;
        action();
        if (timeoutId) {
          clearTimeout(timeoutId);
          timeoutId = undefined;
        }
      }
    }
  });
};

export default keySeqListener
