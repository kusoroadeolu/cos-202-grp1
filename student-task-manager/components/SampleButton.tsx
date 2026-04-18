interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

export default function MyButton({ onClick, children }: Props) {
  return <button onClick={onClick}>{children}</button>;
}