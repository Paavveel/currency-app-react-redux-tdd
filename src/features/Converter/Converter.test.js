import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Converter } from './Converter';

const mockUpdateRub = jest.fn();
const mockUpdateUsd = jest.fn();

jest.mock('./useConverter', () => ({
  useConverter() {
    return {
      rub: 100,
      usd: 2.38,
      updateRub: mockUpdateRub,
      updateUsd: mockUpdateUsd,
    };
  },
}));

describe('when rendered', () => {
  it('rub input should have a value with a rub amount', () => {
    render(<Converter />);
    expect(screen.getByLabelText(/Сумма в рублях/)).toHaveValue(100);
  });

  it('usd input should have a value with a usd amount', () => {
    render(<Converter />);
    expect(screen.getByLabelText(/Сумма в долларах/)).toHaveValue(2.38);
  });
});

describe('when typed in a RUB input', () => {
  it('should update its value', async () => {
    const user = userEvent.setup();
    render(<Converter />);
    const input = screen.getByLabelText(/Сумма в рублях/);

    await user.clear(input);
    await user.type(input, '42');

    expect(mockUpdateRub).toHaveBeenCalled();
  });
});

describe('when typed in a USD input', () => {
  it('should update its value', async () => {
    const user = userEvent.setup();
    render(<Converter />);
    const input = screen.getByLabelText(/Сумма в долларах/);

    await user.clear(input);
    await user.type(input, '42');
    expect(mockUpdateUsd).toHaveBeenCalled();
  });
});
