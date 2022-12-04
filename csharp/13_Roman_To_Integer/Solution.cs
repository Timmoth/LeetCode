using System.Runtime.CompilerServices;

namespace Problem_13_Roman_To_Integer;
public class Solution
{
    public int RomanToInt(string s)
    {
        int output = 0;

        var prevValue = GetValue(s[0]);

        for (int i = 1; i < s.Length; i++)
        {
            var c = s[i];
            var value = GetValue(c);
            if (prevValue < value)
            {
                output -= prevValue;
            }
            else
            {
                output += prevValue;
            }

            prevValue = value;
        }

        output += prevValue;

        return output;
    }

    [MethodImpl(MethodImplOptions.AggressiveInlining)]
    public int GetValue(char c)
    {
        return c switch
        {
            'I' => 1,
            'V' => 5,
            'X' => 10,
            'L' => 50,
            'C' => 100,
            'D' => 500,
            'M' => 1000,
            _ => 0,
        };
    }
}
