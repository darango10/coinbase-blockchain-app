import React from 'react';
import styled from "styled-components";
import CoinItem from "./CoinItem";

const CoinSelector = (
  {
    setAction,
    selectedToken,
    setSelectedToken,
    sanityTokens,
    thirdWebTokens,
    walletAddress,
  }) => {
  return (
    <Wrapper>
      <Title>Select Asset</Title>
      <CoinList>
        {sanityTokens.map((token, i) => (
          <CoinItem key={i}
                    token={token}
                    sender={walletAddress}
                    selectedToken={selectedToken}
                    setSelectedToken={setSelectedToken}
                    thirdWebTokens={thirdWebTokens}
                    sanityTokens={sanityTokens}
                    setAction={setAction}
          />
        ))}
      </CoinList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.5em;
  margin-bottom: 1rem;
`;

const CoinList = styled.div`
  display: flex;
  flex-direction: column;
`;

export default CoinSelector;
