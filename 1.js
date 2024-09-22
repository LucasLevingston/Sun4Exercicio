function q1RemoverDuplicados(nums) {
  const newNums = [...new Set(nums)];

  return newNums;
}

console.log(q1RemoverDuplicados([1, 2, 2, 3, 4, 4, 5]));
