export const formatColor = (id) => {
  let color = 'bg-purple-200';
  switch (true) {
    case id % 2 === 0:
      color = 'bg-blue-200';
      break;
    case id % 3 === 0:
      color = 'bg-orange-200';
      break;
    case id % 5 === 0:
      color = 'bg-yellow-200';
      break;
    case id % 7 === 0:
      color = 'bg-sky-200';
      break;
  }

  return color;
};
