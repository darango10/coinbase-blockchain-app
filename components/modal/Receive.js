import React, {useEffect, useState} from 'react';
import imageUrlBuilder from "@sanity/image-url";
import {client} from "../../lib/sanity";
import styled from "styled-components";
import {FaCopy, FaCheck} from "react-icons/fa";

const Receive = ({setAction, selectedToken, walletAddress}) => {

  const [imageUrl, setImageUrl] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const getImageUrl = async () => {
      const imageUrl = imageUrlBuilder(client).image(selectedToken.logo).url();
      setImageUrl(imageUrl);
    };

    getImageUrl();
  }, []);


  return (
    <Wrapper>
      <Content>
        <QRConatiner>
          <img src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${walletAddress}`} alt=""/>
        </QRConatiner>
        <Divider/>
        <Row>
          <CoinSelectList>
            <Icon>
              <img src={imageUrl} alt=""/>
            </Icon>
            <CoinName>{selectedToken.name}</CoinName>
          </CoinSelectList>
        </Row>
        <Divider/>
        <Row>
          <div>
            <Title>{selectedToken.symbol} Address</Title>
            <Address>{walletAddress}</Address>
          </div>
          <CopyButton
            onClick={() => {
              navigator.clipboard.writeText(walletAddress)
                .then(() => setCopied(true))
                .catch(err => console.error('Could not copy text', err));
            }}
          >
            {copied ? <FaCheck style={{color:'#27ad75'}}/> : <FaCopy/>}
          </CopyButton>
        </Row>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
`;

const Content = styled.div`
  border: 1px solid #282b2f;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const QRConatiner = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
`;

const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  color: #8a919e;
  font-size: 1.2rem;
`;

const Icon = styled.div`
  margin-right: 1rem;
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 50%;
  overflow: hidden;
  display: grid;
  place-items: center;

  img {
    width: 120%;
    height: 120%;
    object-fit: cover;
  }
`;

const CoinSelectList = styled.div`
  display: flex;
  flex: 1.3rem;
  height: 100%;

  &:hover {
    cursor: pointer;
  }
`;

const CoinName = styled.div`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  color: white;
  font-size: 1.2rem;
  text-wrap: wrap;
  margin-right: 0.5rem;
`;

const Title = styled.div`
  color: white;
  margin-bottom: 0.5rem;
`;

const Address = styled.div`
  font-size: 0.8rem;
`;

const CopyButton = styled.div`
  cursor: pointer;
`;


export default Receive;
