

const SumApi = () => {
  const sum = (a, b) => a + b;

  /**
   *  Syncronously adds two numbers
   *
   * @param {number} a The first number to add
   * @param {number} b The second number to add
   * @returns {number} The sum of a and b
   */
  const GetSumSync = (a, b) => {
    try {
      return sum(a, b);
    } catch (error) {
      throw new Error(error);
    }
  };

  /**
   *  Asyncronously adds two numbers
   *
   * @param {number} a The first number to add
   * @param {number} b The second number to add
   * @returns {number} The sum of a and b
   */
  const GetSumAsync = async (a, b) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(sum(a, b));
        }, 3000);
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    GetSumSync,
    GetSumAsync,
  };
};

module.exports = SumApi();
