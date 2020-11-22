import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    //Inorder to avoid eslint warning defining and calling a function right away
    (async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );
      setResources(response.data);
    })(resource);
  }, [resource]);

  return (
    <div>
      <ul>
        {resources.map((data) => (
          <li key={data.id}>{data.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;
