using Problems;

namespace Tests
{
    public class Tests0383
    {
        private readonly Solution0383 _solution = new();
        [Theory]
        [InlineData("a", "b", false)]
        [InlineData("aa", "ab", false)]
        [InlineData("aa", "aab", true)]
        public void Test(string ransomNote, string magazine, bool expected)
        {
            Assert.Equal(expected, _solution.CanConstruct(ransomNote, magazine));
        }
    }
}