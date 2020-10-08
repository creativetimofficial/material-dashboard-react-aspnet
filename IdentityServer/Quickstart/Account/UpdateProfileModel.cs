namespace IdentityServer.Quickstart.Account
{
    public class UpdateProfileModel
    {
        public string CurrentUserName { get; set; }
        public string NewUserName { get; set; }
        public string Email { get; set; }
    }
}