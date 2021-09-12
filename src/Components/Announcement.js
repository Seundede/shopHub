import styled from 'styled-components'

const Container = styled.div`
  height: 30px;
  width: 100%;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 500;
`;
const Announcement = () => {
    return (
        <Container>
            Super Deal! Free Shipping on orders over $100.
        </Container>
    )
}

export default Announcement
