using Problems.Easy;

namespace Tests.Easy
{
    public class Tests0028
    {
        private readonly Solution0028 _solution = new();
        [Theory]
        [InlineData("leetcode", "leeto", -1)]
        [InlineData("sadbutsad", "sad", 0)]
        [InlineData("badbutsad", "sad", 6)]
        [InlineData("mississippi", "issip", 4)]

        public void Test(string needle, string haystack, int expected)
        {
            Assert.Equal(expected, _solution.StrStr(needle, haystack));
        }
    }
}