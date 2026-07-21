import React from 'react';
import MyPortfolioPage from './MyPortfolio';
import CreatePortfolioPage from './CreatePortfolio';

const MyPortfolioContainer = ({userData}) => {
    console.log(userData)
    return (
        <>
            {
                userData 
                ? <MyPortfolioPage userData={userData} /> 
                : <CreatePortfolioPage />
            }
        </>
    );
};

export default MyPortfolioContainer;