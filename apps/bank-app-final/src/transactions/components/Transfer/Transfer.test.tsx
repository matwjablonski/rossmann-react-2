import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../../store';
import Transfer from './Transfer';
import { Provider } from 'react-redux';

describe('Transfer component', () => {

  test('show details after click', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Transfer
            id={1}
            isActive
            type="income"
            date="2022-03-03"
            name="przelew"
            value={1}
            currency="PLN"
            handleClick={() => {}}
          />
        </BrowserRouter>
      </Provider>
    )

    await userEvent.click(screen.getByTestId('transfer-box'));
    await screen.findByText(/2022-03-03/i);

    expect(screen.getByText(/2022-03-03/i)).toBeInTheDocument();
  })
});
