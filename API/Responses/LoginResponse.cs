namespace API.Responses
{
    public class LoginResponse<T>
    {
        public LoginResponse(T data)
        {
            Data = data;
        }

        public T Data { get; set; }
        public string Token { get; set; }
    }
}