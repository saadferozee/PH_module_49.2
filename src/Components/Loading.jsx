import React from 'react';
import { Grid } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='flex h-[65vh] w-full justify-center items-center'>
            <Grid
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass="grid-wrapper"
            />
        </div>
    );
};

export default Loading;