using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Extensions
{
    public static class StringExtensions
    {
        /// <summary>
        /// Splits camel case word into seperate words
        /// </summary>
        public static string SplitCamelCase(this string camelCaseString)
        {
            var builder = new StringBuilder();

            for (int i = 0; i < camelCaseString.Length; i++)
            {
                if (char.IsUpper(camelCaseString[i]) && i == 0)
                {
                    builder.Append(camelCaseString[i]);
                }

                if (char.IsLower(camelCaseString[i]))
                {
                    builder.Append(camelCaseString[i]);
                }

                if (i > 1 && char.IsUpper(camelCaseString[i]) && char.IsLower(camelCaseString[i - 1]))
                {
                    builder.Append(' ');
                    builder.Append(camelCaseString[i]);
                }

            }

            return builder.ToString();
        }
    }
}
