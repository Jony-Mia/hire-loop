import { useState } from 'react';

const useValue = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);
    const handler = (e)=> setValue(e.target.value);

    return [value, handler];
};


export default useValue;