import React, {useState} from 'react';
import styled from "styled-components";
import Transfer from "./Transfer";
import CoinSelector from "./CoinSelector";
import {TailSpin} from "react-loader-spinner";
import Receive from "./Receive";

const TransferModal = ({sanityTokens, walletAddress, thirdWebTokens}) => {

  const [action, setAction] = useState('Send');
  const [selectedToken, setSelectedToken] = useState(sanityTokens[0]);

  const selectedStyle = {
    color: '#3773f5'
  };

  const unselectedStyle = {
    border: '1px solid #282b2f',
  };

  const selectedModal = (option) => {
    switch (option) {
      case 'Send':
        return <Transfer
          selectedToken={selectedToken}
          walletAddress={walletAddress}
          setAction={setAction}
          thirdWebTokens={thirdWebTokens}
        />;

      case 'Receive':
        return <Receive
          selectedToken={selectedToken}
          walletAddress={walletAddress}
          setAction={setAction}
        />;

      case 'Transferring':
        return <div style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.5rem',
          flexDirection: 'column'
        }}>
          <h2>Transfer in progress...</h2>
          <TailSpin
            color="grey"
            height={'100'}
            width={'100'}
            ariaLabel={'Transferring'}
          />
        </div>

      case 'Transferred':
        return <div style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '2rem',
          fontWeight: '600',
          color: '#27ad75',
        }}>
          Transfer complete!
        </div>

      case 'Error':
        return <div style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '2rem',
          fontWeight: '600',
          color: 'red',
        }}>
          Transfer failed!
        </div>

      case 'Select':
        return <CoinSelector
          sanityTokens={sanityTokens}
          setSelectedToken={setSelectedToken}
          selectedToken={selectedToken}
          walletAddress={walletAddress}
          thirdWebTokens={thirdWebTokens}
          setAction={setAction}
        />;

      default:
        return <h2>Send</h2>
    }
  }

  return (<Wrapper>
    <Selector>
      <Option onClick={() => setAction('Send')} style={action === 'Send' ? selectedStyle : unselectedStyle}>
        <p>Send</p>
      </Option>
      <Option onClick={() => setAction('Receive')} style={action === 'Receive' ? selectedStyle : unselectedStyle}>
        <p>Receive</p>
      </Option>
    </Selector>
    <ModalMain>
      {selectedModal(action)}
    </ModalMain>
  </Wrapper>);
};

const Wrapper = styled.div`
  height: 35rem;
  width: 27rem;
  color: white;
  border: 1px solid #282b2f;
  display: flex;
  flex-direction: column;
`;

const Selector = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
`;

const Option = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background-color: #111214;
  }
`;

const ModalMain = styled.div`
  padding: 1rem;
  flex: 1;
`;

export default TransferModal;
