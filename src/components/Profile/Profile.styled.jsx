import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
width: 400px;
padding-top: 20px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
max-width: 400px;
margin:  0 auto 20px;
text-align: center;
background-color: #FFFFFF;
border-radius: 8px;
`;

export const Description = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
margin-bottom: 30px;
`;

export const Avatar = styled.img`
width: 250px;
border-radius: 50%;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
`;

export const Name = styled.p`
text-align: center;
font-weight: 900;
font-size: 30px;
`;

export const Tag = styled.p`
color: grey;
font-size: 20px;
`;

export const Location = styled.p`
color: grey;
  font-size: 20px;
`;

export const Stats = styled.ul`
list-style: none;
display: flex;
`;

export const Item = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
outline: 1px solid rgba(0, 0, 0, 0.1);
flex-basis: calc(100%/3);
padding: 20px;
background-color:  #F5F4FA;
 :first-of-type {
    border-radius: 0px 0px 0px 8px;
  }
  :last-of-type {
    border-radius: 0px 0px 8px 0px;
  }
`;

export const Label = styled.span`
color: grey;
font-size: 18px;
`;

export const Quantity = styled.span`
font-weight: 700;
font-size: 18px;
`
