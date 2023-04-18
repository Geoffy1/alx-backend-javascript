export default function taskBlock(trueOrFalse) {
  const task1 = false;
  const task2 = true;

  if (trueOrFalse) {
    // eslint-disable-next-line
    const task1 = true;
    // eslint-disable-next-line
    const task2 = false;
  }

  return [task1, task2];
}
