import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({date}) => {
   
    return (
        <div>
            <h2 className='text-secondary text-center text-xl md:my-20 my-12'>Available appointment on {format(date,'PP')}</h2>
        </div>
    );
};

export default AvailableAppointments;