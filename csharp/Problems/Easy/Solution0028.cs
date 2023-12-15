using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Problems.Easy
{
    public class Solution0028
    {
        public int StrStr(string haystack, string needle)
        {
            for (var i = 0; i < haystack.Length; i++)
            {
                if (haystack[i] != needle[0])
                    continue;

                var isMatch = true;
                for (var j = 0; j < needle.Length; j++)
                {
                    if (i + j >= haystack.Length)
                    {
                        isMatch = false;
                        break;
                    }

                    if (haystack[i + j] == needle[j]) 
                        continue;
                    isMatch = false;
                    break;
                }

                if (isMatch)
                {
                    return i;
                }
            }
            return -1;
        }
    }
}
