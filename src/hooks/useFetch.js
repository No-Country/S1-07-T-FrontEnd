import { useEffect, useState } from "react";

const controller = new AbortController();

const signal = controller.signal;

export const useFetch = (url) => {
  
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: "Can not perform fetch request",
  });

  useEffect(() => {
    setState({ data: [], loading: true, error: null });

    fetch(url, { signal })
      .then((resp) => resp.json())
      .then((data) => {
        setState({
          loading: false,
          error: null,
          data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      controller.abort();
    };
  }, [url]);

  return state;
};
