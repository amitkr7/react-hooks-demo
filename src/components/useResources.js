import { useEffect, useState } from 'react';
import axios from 'axios';

const useResources = (resource) => {
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

  return resources;
};

export default useResources;
