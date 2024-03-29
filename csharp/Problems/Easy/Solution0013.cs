﻿using System.Runtime.CompilerServices;

namespace Problems.Easy;
public class Solution0013
{
    public int RomanToInt(string s)
    {
        var output = 0;

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

    private static int GetValue(char c)
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
