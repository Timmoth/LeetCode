using Problem_13_Roman_To_Integer;

namespace Tests
{
    public class Problem_13_Tests
    {
        [Theory]
        [InlineData(2, "II")]
        [InlineData(3, "III")]
        [InlineData(9, "IX")]
        [InlineData(12, "XII")]
        [InlineData(27, "XXVII")]
        [InlineData(58, "LVIII")]
        [InlineData(1994, "MCMXCIV")]
        public void Test(int expected, string input)
        {
            Assert.Equal(expected, new Solution().RomanToInt(input));
        }
    }
}