using System.Linq;
using System.Threading.Tasks;
using IdentityServer.Models;
using IdentityServerHost.Quickstart.UI;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace IdentityServer.Quickstart.Account
{
    [SecurityHeaders]
    public class ProfileController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public ProfileController(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        [HttpPost]
        public async Task<IActionResult> Index([FromBody]UpdateProfileModel updateProfileModel)
        {
            var user = await _userManager.FindByNameAsync(updateProfileModel.CurrentUserName);

            if (user == null)
                return NotFound("User not found");

            user.Email = updateProfileModel.Email;
            user.UserName = updateProfileModel.NewUserName;

            var result = await _userManager.UpdateAsync(user);
                       

            //TODO - In a production env you would have a flow where your would confirm the password change via email/SMS

            if (result.Succeeded)
            {                
                return Ok(updateProfileModel);
            }

            return BadRequest(result.Errors.Select(s => s.Description));
        }
    }
}
