import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer>
      <Container className="text-center py-4">
        <p>&copy; {new Date().getFullYear()} Education Platform</p>
      </Container>
    </footer>
  );
}

export default Footer;
