import React, { ReactNode } from 'react';

interface TransferTypeProps {
  type: 'income' | 'outcome';
}

interface TransferTypeState {
  isClicked: boolean;
}

class TransferType extends React.Component<TransferTypeProps, TransferTypeState> {
  constructor(props: TransferTypeProps) {
    super(props);

    this.state = {
      isClicked: false,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isClicked: !prevState.isClicked,
    }))
  }

  public render(): ReactNode {
    return <strong
      style={{ 
        background: this.state.isClicked ? 'red' : 'blue',
      }}
      onClick={this.handleClick}
    >
      {this.props.type === 'income' ? 'Przychód' : 'Wydatek'}
    </strong>
  }
}

export default TransferType;
