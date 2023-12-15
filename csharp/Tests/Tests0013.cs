using Problems;

namespace Tests
{
    public class Tests0013
    {
        private readonly Solution0013 _solution = new();

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
            Assert.Equal(expected, _solution.RomanToInt(input));
        }
    }
}