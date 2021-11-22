import React from 'react';

const Navbar = ({cars, getInfo}) => {
    console.log(getInfo);
    // console.log('This is cars from navbar', cars);
    return (
        <div>
            {
                cars.map((item) => (
                    <strong onClick={() => getInfo(item)} style={{margin: '10px', cursor: 'pointer'}} key={item.id}>{item.model}</strong>
                ))
            }
        </div>
    );
};

export default Navbar;