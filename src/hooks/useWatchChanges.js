import { useState, useEffect, useCallback } from 'react';

// take elementIds for elements to watch for changes and return the innerHtml Value of target element
const useWatchChanges = (elementIds, targetId) => {
  const [changedValue, setChangedValue] = useState(null);

  const handleChangedValue = useCallback(() => {
    setTimeout(() => {
      setChangedValue(document.getElementById(targetId).innerHTML);
    }, 0);
  }, [targetId]);

  useEffect(() => {
    elementIds.forEach((element) => {
      document
        .getElementById(element)
        ?.addEventListener('click', handleChangedValue, true);
    });

    return () => {
      elementIds.forEach((element) => {
        document
          .getElementById(element)
          ?.removeEventListener('click', handleChangedValue, true);
      });
    };
  }, [elementIds, handleChangedValue]);

  return changedValue;
};

export default useWatchChanges;
