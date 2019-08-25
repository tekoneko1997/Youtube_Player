import { useState, useEffect } from 'react';

const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    document.getElementById("main").addEventListener('scroll', handleScroll, false);
    return () => document.getElementById("main").removeEventListener('scroll', handleScroll, false);
  });

  useEffect(() => {
    if (!isFetching) return;
    callback();
    // eslint-disable-next-line
  }, [isFetching]);

  var tid;
  function handleScroll() {
    var top = 0;
    var hight = 0

    clearTimeout(tid);
    tid = setTimeout(() => {
      if (top + document.getElementById("main").offsetHeight + 100< hight || isFetching)return;
      setIsFetching(true);
    }, 500)
  }

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;