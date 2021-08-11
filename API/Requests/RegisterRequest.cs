using System.ComponentModel.DataAnnotations;

namespace API.Requests
{
    public class RegisterRequest
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        public string Password { get; set; }
    }
}