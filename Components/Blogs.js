import React, { useEffect } from 'react';
import { XMLParser, XMLBuilder} from 'fast-xml-parser';

function Blogs() {

  useEffect(() => {
    fetch("https://medium.com/feed/@uufukttas")
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