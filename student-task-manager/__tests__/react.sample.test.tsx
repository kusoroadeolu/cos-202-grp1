import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyButton from '@/components/SampleButton';

test('calls onClick when clicked', async () => {
  const handleClick = jest.fn();
  render(<MyButton onClick={handleClick}>Click me</MyButton>);
  
  await userEvent.click(screen.getByText('Click me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});