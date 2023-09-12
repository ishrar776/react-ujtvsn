import React, { useEffect, useState } from 'react';
const Data = () => {
  const url = 'https://mocki.io/v1/50abfd24-2845-4dd7-bcce-9bd732e25c47';
  const [value, setValue] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((item) => setValue(item.list))
      .catch((error) => console.log(error));
  }, []);  
  return (
    <>
      <div>
        <h1>data</h1>
        {value.map((item) => ( item.type !== undefined &&
          <>
            <p>
              <div>Name: {item.name}</div>
              <div>Number: {item.number}</div>
              <div>Id: {item.id}</div>
              <div>Type: {item.type}</div>
            </p>
          </>
        ))}
      </div>
    </>
  );
};
export default Data;
