import { Button } from 'ui';
import { add, subtract } from 'math-helpers';
import { ReactWordle } from 'react-wordle';

export default function Web() {
  console.log('add(1, 2)=',add(1, 2));
  console.log('subtract(33.1234, 10.3104)=',subtract(33.1234, 10.3104));
  return (
    <div>
      <h1>Web</h1>
      <Button />
      <ReactWordle />
    </div>
  );
}
