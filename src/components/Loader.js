import React from 'react';
import spinner from '../loader.gif';

const styles = {
   width: '305px',
   display: 'block',
   margin: '15px auto'
}
const Loader = () => {
  return (
    <div style={{gridColumn: '1 / end'}}>
      <img src={spinner} alt='' style={styles} />
    </div>
  )
}

export default Loader