import { useState, useEffect } from "react";

const CAT_PRE = "https://cataas.com/";

export function useCatImage({ fact }) {
  const [img, setImg] = useState();

  useEffect(() => {
    if (!fact) return;

    const primeraPalabra = fact.split(" ", 4);
    const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/cute/says/${primeraPalabra[2]}?json=true`;

    fetch(CAT_ENDPOINT_IMAGE_URL)
      .then((respuesta) => respuesta.json())
      .then((json) => {
        const { url } = json;
        setImg(CAT_PRE + url);
      });
  }, [fact]);

  return { img };
}
