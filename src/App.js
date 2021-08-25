import React, {useEffect, useState} from 'react';
import api from './api';

const [album, setAlbum] = useState([]);

useEffect(() => {
  api.get('album').then(({ data }) => {
    setAlbum(data);
  });
  console.log(album);

//eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

export default App;
