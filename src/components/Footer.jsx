import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='footer bg-dark text-center text-white'>
      <MDBContainer className='footer-container p-4 pb-0'>
        <section className='footer-section mb-4 '>
        <p id='connect'>Connect with me!</p>
          <MDBBtn floating className='footer-icon m-1' href="https://www.linkedin.com/in/joshuatwudev/" target="_blank" rel="noopener noreferrer" role='button' style={{ backgroundColor: 'transparent' }}>
            <MDBIcon fab icon='icon devicon-linkedin-plain' />
          </MDBBtn>

          <MDBBtn floating className='footer-icon m-1' href="https://github.com/jtw007" target="_blank" rel="noopener noreferrer" role='button' style={{ backgroundColor: 'transparent' }}>
            <MDBIcon fab icon='icon devicon-github-original' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        Created:{' '} {new Date().getFullYear()} 
      </div>
    </MDBFooter>
  );
}