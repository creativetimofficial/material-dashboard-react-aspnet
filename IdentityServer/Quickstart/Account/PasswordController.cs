using System.Linq;
using System.Threading.Tasks;
using IdentityServer.Models;
using IdentityServerHost.Quickstart.UI;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace IdentityServer.Quickstart.Account
{
    [SecurityHeaders]
    public class PasswordController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public PasswordController(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        [HttpPost]
        public async Task<IActionResult> Index([FromBody] UpdatePasswordModel updatePasswordModel)
        {

            var user = await _userManager.FindByNameAsync(updatePasswordModel.UserName);

            if (user == null)
                return NotFound("User not found");                       

            var result = await _userManager.ChangePasswordAsync(user, updatePasswordModel.CurrentPassword, updatePasswordModel.NewPassword);

            if (result.Succeeded)
            {
                return Ok();
            }

            return BadRequest(result.Errors.Select(s => s.Description));
        }
    }
}