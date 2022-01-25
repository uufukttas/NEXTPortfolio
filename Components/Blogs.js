import React, { useEffect } from 'react';
import { XMLParser, XMLBuilder} from 'fast-xml-parser';

function Blogs() {

  useEffect(() => {
    fetch("https://medium.com/feed/@uufukttas", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer'})
      .then(res => res.text())
      .then(data => {
        const xml = parser.parse(data);
        const builder = new XMLBuilder();
        const xmlContent = builder.build(xml);

        console.log(xmlContent);
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <div className = 'blog-container'> </div>
  );
}

export default Blogs