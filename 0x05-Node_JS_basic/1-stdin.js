process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const chungli = process.stdin.read();

  if (chungli) {
    process.stdout.write(`Your name is: ${chungli}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
