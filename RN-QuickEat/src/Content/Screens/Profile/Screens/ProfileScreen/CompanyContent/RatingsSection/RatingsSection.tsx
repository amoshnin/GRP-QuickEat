// PLUGINS IMPORTS //
import React, {FC} from 'react';

// COMPONENTS IMPORTS //
import Header from './Header/Header';
import RatingsList from './RatingsList/RatingsList';

// EXTRA IMPORTS

/////////////////////////////////////////////////////////////////////////////

interface PropsType {}

const RatingsSection: FC<PropsType> = (props) => {
  return (
    <>
      <Header />
      <RatingsList />
    </>
  );
};

export default RatingsSection;
