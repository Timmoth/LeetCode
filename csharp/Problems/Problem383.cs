namespace Problems;
public class Solution383
{
    public bool CanConstruct(string a, string b)
    {
        if (a.Length > b.Length) return false;

        var d = a.AsSpan();
        var c = new int[26];
        int i;
        for (i = 0; i < b.Length; i++)
        {
            c[b[i] - 'a']++;
        }

        for(i = 0; i < a.Length; i++)
        {
            if(c[d[i] - 'a']==0)
            {
                return false;
            }
            c[d[i] - 'a']--;
        }
        
        return true;
    }
}