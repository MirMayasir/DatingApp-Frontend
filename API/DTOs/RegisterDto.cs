using System.ComponentModel.DataAnnotations;

namespace DatingAppAPI.DTOs
{
    public class RegisterDto
    {

        [Required(ErrorMessage = "Username is required")]
        public required string Username { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "Password must be between 4 and 8 characters")]
        public required string Password { get; set; }
    }
}
