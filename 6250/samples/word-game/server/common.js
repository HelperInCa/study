const incrementKey = (obj, key) => ({...obj, [key]: obj[key]+1 || 1});

const letterCounts = word => word.split('').reduce( incrementKey, {});

const wholeMin = (num1, num2) => Math.min(num1, num2) || 0;

const minCommonKeys = (count1, count2) => Object.keys(count1).reduce(
  (total, key) => total + wholeMin(count1[key], count2[key]), 0
);

const commonLetterCount = (word1, word2) => minCommonKeys(letterCounts(word1), letterCounts(word2));

module.exports = commonLetterCount;

