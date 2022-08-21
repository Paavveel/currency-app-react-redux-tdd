import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithStore } from '../../testUtils';
import { Converter } from './Converter';

const mockUpdateRub = jest.fn();
const mockUpdateUsd = jest.fn();
const mockInitialRender = jest.fn();

jest.mock('./useConverter', () => ({
  useConverter(initialValue, initialCourse) {
    mockInitialRender(initialCourse);
    return {
      rub: 100,
      usd: 2.38,
      updateRub: mockUpdateRub,
      updateUsd: mockUpdateUsd,
    };
  },
}));

beforeEach(() => jest.clearAllMocks());
beforeAll(() => jest.restoreAllMocks());

describe('when rendered', () => {
  it('rub input should have a value with a rub amount', () => {
    renderWithStore(<Converter />);
    expect(screen.getByLabelText(/Сумма в рублях/)).toHaveValue(100);
  });

  it('usd input should have a value with a usd amount', () => {
    renderWithStore(<Converter />);
    expect(screen.getByLabelText(/Сумма в долларах/)).toHaveValue(2.38);
  });

  it('should call the `useConverter` hook with a course value from the store', () => {
    const storeMock = {
      course: {
        value: 100500,
      },
    };
    renderWithStore(<Converter />, { state: storeMock });

    expect(mockInitialRender).toHaveBeenCalledWith(100500);
  });
});

describe('when typed in a RUB input', () => {
  it('should update its value', async () => {
    const user = userEvent.setup();
    renderWithStore(<Converter />);
    const input = screen.getByLabelText(/Сумма в рублях/);

    await user.clear(input);
    await user.type(input, '42');

    expect(mockUpdateRub).toHaveBeenCalled();
  });
});

describe('when typed in a USD input', () => {
  it('should update its value', async () => {
    const user = userEvent.setup();
    renderWithStore(<Converter />);
    const input = screen.getByLabelText(/Сумма в долларах/);

    await user.clear(input);
    await user.type(input, '42');
    expect(mockUpdateUsd).toHaveBeenCalled();
  });
});
