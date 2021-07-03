using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Responses
{
    public interface IResponse<T, U> where T : class where U : class
    {
        T Map(U model);
    }
}
