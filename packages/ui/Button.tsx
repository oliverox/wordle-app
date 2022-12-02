export const Button = () => {
  const onClick = () => {
    console.log('Boop!');
  }
  return <button onClick={onClick}>Boop</button>;
};
