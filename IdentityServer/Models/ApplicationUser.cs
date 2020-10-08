using Microsoft.AspNetCore.Identity;

namespace IdentityServer.Models
{
    // Add profile data for application users by adding properties to the ApplicationUser class
    public class ApplicationUser : IdentityUser
    {
        public ApplicationUser() { }

        public ApplicationUser(string email)
        {
            base.UserName = email; //use the username as email address
            base.Email = email;
            base.EmailConfirmed = true;            
        }
    }
}