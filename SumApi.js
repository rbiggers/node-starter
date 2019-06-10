

const SumApi = () => {
  const sum = (a, b) => a + b;

  /**
   *  Syncronously adds two numbers
   *
   * @param {number} a The first number to add
   * @param {number} b The second number to add
   * @returns {number} The sum of a and b
   * @throws Will throw an error
   */
  const GetSumSync = (a, b) => {
    try {
      return sum(a, b);
    } catch (err) {
      throw (err);
    }
  };

  /**
   *  Asyncronously adds two numbers
   *
   * @param {number} a The first number to add
   * @param {number} b The second number to add
   * @returns {number} The sum of a and b
   *    * @throws Will throw an error
   */
  const GetSumAsync = async (a, b) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(sum(a, b));
        }, 3000);
      });
    } catch (err) {
      throw (err);
    }
  };

  return {
    GetSumSync,
    GetSumAsync,
  };
};

module.exports = SumApi();
