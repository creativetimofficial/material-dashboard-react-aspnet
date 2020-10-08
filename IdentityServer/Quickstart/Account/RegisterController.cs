using System;
using System.Linq;
using System.Threading.Tasks;
using IdentityServer.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace IdentityServer.Quickstart.Account
{
    [AllowAnonymous]
    public class RegisterController : Controller
    {        
        private readonly UserManager<ApplicationUser> _userManger;
        private readonly SignInManager<ApplicationUser> _signInManager;

        public RegisterController(UserManager<ApplicationUser> userManager,
                                    SignInManager<ApplicationUser> signInManager)
        {
            _userManger = userManager;
            _signInManager = signInManager;
        }


        [HttpGet]
        public IActionResult Index()
        {
            throw new NotImplementedException("Identity Server does not contain register form. Did you mean HTTP POST?");
        }

        [HttpPost]
        public async Task<IActionResult> Index([FromBody] RegisterViewModel vm)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid user");

            var user = new ApplicationUser(vm.Email);
            var result = await _userManger.CreateAsync(user, vm.Password);

            if (result.Succeeded)
            {
                await _signInManager.SignInAsync(user, false);
                
                return Ok(vm.ReturnUrl);
            }
            return BadRequest(result.Errors.Select(s => s.Description));
        }
    }
}