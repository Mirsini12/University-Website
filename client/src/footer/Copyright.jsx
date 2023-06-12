import React from 'react';
import {
    
  MDBFooter
} from 'mdb-react-ui-kit';



export default function Copyright() {
  return (
    
    <MDBFooter className='text-center fixed-bottom'  color='white' bgColor='dark'>        
      <div className='text-center p-3 ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='#!'>
           University
        </a>
      </div>
     
    </MDBFooter>
    
  );
}