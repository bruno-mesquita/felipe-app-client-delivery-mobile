const formattedCpf = (value: string) => {
  const part1 = value.substring(0, 3);
  const part2 = value.substring(3, 6);
  const part3 = value.substring(6, 9);
  const part4 = value.substring(9, 11);

  return `${part1}.${part2}.${part3}-${part4}`;
};

export default formattedCpf;
