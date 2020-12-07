# [Material Dashboard React Aspnet](https://www.creative-tim.com/live/material-dashboard-react-asp-net) [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/share?url=https%3A%2F%2Fwww.creative-tim.com%2Flive%2Fmaterial-dashboard-react-asp-net&text=Material%20Dashboard%20React%20Aspnet%20-%20Free%Aspnet%20Admin%20Template&via=%40creativetim%20&hashtags=react%20%20%23material-ui%20%23aspnet)



![version](https://img.shields.io/badge/version-1.0.0-blue.svg) ![license](https://img.shields.io/badge/license-MIT-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/material-dashboard-react-aspnet.svg?maxAge=2592000)]() [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/material-dashboard-react-aspnet.svg?maxAge=2592000)]() [![Join the chat at https://gitter.im/NIT-dgp/General](https://badges.gitter.im/NIT-dgp/General.svg)](https://gitter.im/creative-tim/material-dashboard?utm_source=share-link&utm_medium=link&utm_campaign=share-link) [![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/E4aHAQy)

![Product Gif](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-dashboard-react-aspnet/material-dashboard-react-aspnet.gif)

Start your development with an Admin Dashboard built for ASP.NET Core framework, the newest go-to technology from Microsoft for top companies. [Creative Tim](https://www.creative-tim.com/)  to provide a fully coded **frontend + backend** solution for you. It features a huge number of components that can help you create amazing websites and brings with itself innumerable advantages: the lightweight, fast, scalable and modern way to execute your next top app.

**Speed up development with Docker containers**

Developing apps today requires so much more than writing code. Multiple languages, frameworks, architectures, and discontinuous interfaces between tools for each lifecycle stage creates enormous complexity. Docker simplifies and accelerates your workflow, while giving developers the freedom to innovate with their choice of tools, application stacks, and deployment environments for each project.

**Fully Coded Components**

Material Dashboard React ASP.NET is built with over frontend 30 individual components, giving you the freedom of choosing and combining. All components can take variations in color, that you can easily modify using SASS files.
You will save a lot of time going from prototyping to full-functional code because all elements are implemented. This Dashboard is coming with prebuilt examples, so the development process is seamless, switching from our pages to the real website is very easy to be done.

Every element has multiple states for colors, styles, hover, focus, that you can easily access and use.

View all components [here](https://demos.creative-tim.com/material-dashboard-react/#/documentation/buttons)

**Complex Documentation**

Each element is well presented in very complex documentation. You can check the components [here](https://demos.creative-tim.com/material-dashboard-react/#/documentation/buttons)

**Example Pages**

If you want to get inspiration or just show something directly to your clients, you can jump-start your development with our pre-built example pages. You will be able to quickly set up the basic structure for your web project.
View example pages [here](https://www.creative-tim.com/live/material-dashboard-react-asp-net)

Special thanks go to:
+ [React-chartist](https://github.com/fraserxu/react-chartist) for the wonderful charts.

We are very excited to share this dashboard with you and we look forward to hearing your feedback!

## Table of Contents

* [Versions](#versions)
* [Demo](#demo)
* [Quick Start](#quick-start)
* [Usage](#usage)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Technical Support or Questions](#technical-support-or-questions)
* [Licensing](#licensing)
* [Useful Links](#useful-links)


## Versions
[<img src="React/src/assets/github/aspnet.png" width="60" height="60" />](https://www.creative-tim.com/product/material-dashboard-react-aspnet)


| Aspnet |
| --- | 
| [![Material Dashboard React Aspnet](https://s3.amazonaws.com/creativetim_bucket/products/397/thumb/opt_md_aspnet_thumbnail.jpg?1602152389)](https://www.creative-tim.com/product/material-dashboard-react-aspnet) |

## Demo

| Dashboard | User Profile | Tables | Maps | Notification |
| --- | --- | --- | --- | --- |
| [![Start page](React/src/assets/github/dashboard.jpg)](https://material-dashboard-asp-net-react.creative-tim.com/admin/dashboard) | [![User profile page](React/src/assets/github/userprofile.jpg)](https://material-dashboard-asp-net-react.creative-tim.com/admin/user) | [![Tables page ](React/src/assets/github/tables.jpg)](https://material-dashboard-asp-net-react.creative-tim.com/admin/table) | [![Maps Page](React/src/assets/github/map.jpg)](https://material-dashboard-asp-net-react.creative-tim.com/admin/maps) | [![Notification page](React/src/assets/github/notifications.jpg)](https://material-dashboard-asp-net-react.creative-tim.com/admin/notifications)

[View More](https://www.creative-tim.com/live/material-dashboard-react-asp-net).


## Quick start

Quick start options:

- Download and install [Docker]("https://docs.docker.com/desktop/")
- Clone the repo: `git clone https://github.com/creativetimofficial/material-dashboard-react-aspnet.git`.
- [Download from Github](https://github.com/creativetimofficial/material-dashboard-react-aspnet/archive/master.zip).
- [Download from Creative Tim](https://www.creative-tim.com/product/material-dashboard-react-aspnet).
- From the project root folder run `docker-compose up --build`. Note that the first time you run this the images will build.
- Once docker-compose has finished, you will find the projects on the following URLs:
[Dashboard](http://localhost:3000/admin/dashboard)
[Identity Server](http://localhost:5000/.well-known/openid-configuration) -


## Usage
You now have 2 applications running consisting of a React front end and application an Identity Server (IDS) based on C# and .Net Core. This implentation follow the resource owner password flow but can be modified to support others.

The integration gives you 3 features:
1. Login. The IDS has 2 default logins to get you started:
	Username: alice	Password: Pass123$
	Username: bob	Password: Pass123$

2. Register. This registers a new user in IDS

3. User Profile. Update profile and change password.

If you wish to change any of the settings around authentications, please refer to the following files:
- \React\src\services\oauth.js
- \IdentityServer\Config.cs
- \IdentityServer\Startup.cs
- \IdentityServer\Quickstart\Account\AccountOptions.cs

You can find documentation  on IDS [here](https://identityserver.io/)

## Documentation
The documentation for the Material Dashboard React Aspnet is hosted at our [website](https://demos.creative-tim.com/material-dashboard-react/#/documentation/asp-net).


## File Structure

Within the download you'll find the following directories and files:

```
material-dashboard-react-aspnet
 ┣ IdentityServer
 ┃ ┣ Data
 ┃ ┃ ┣ Migrations
 ┃ ┃ ┃ ┣ 20180109192453_CreateIdentitySchema.cs
 ┃ ┃ ┃ ┣ 20180109192453_CreateIdentitySchema.Designer.cs
 ┃ ┃ ┃ ┗ ApplicationDbContextModelSnapshot.cs
 ┃ ┃ ┗ ApplicationDbContext.cs
 ┃ ┣ Helpers
 ┃ ┃ ┗ X509Helper.cs
 ┃ ┣ Models
 ┃ ┃ ┗ ApplicationUser.cs
 ┃ ┣ Properties
 ┃ ┃ ┗ launchSettings.json
 ┃ ┣ Quickstart
 ┃ ┃ ┣ Account
 ┃ ┃ ┃ ┣ AccountController.cs
 ┃ ┃ ┃ ┣ AccountOptions.cs
 ┃ ┃ ┃ ┣ ExternalController.cs
 ┃ ┃ ┃ ┣ ExternalProvider.cs
 ┃ ┃ ┃ ┣ LoggedOutViewModel.cs
 ┃ ┃ ┃ ┣ LoginInputModel.cs
 ┃ ┃ ┃ ┣ LoginViewModel.cs
 ┃ ┃ ┃ ┣ LogoutInputModel.cs
 ┃ ┃ ┃ ┣ LogoutViewModel.cs
 ┃ ┃ ┃ ┣ PasswordController.cs
 ┃ ┃ ┃ ┣ ProfileController.cs
 ┃ ┃ ┃ ┣ RedirectViewModel.cs
 ┃ ┃ ┃ ┣ RegisterController.cs
 ┃ ┃ ┃ ┣ RegisterViewModel.cs
 ┃ ┃ ┃ ┣ UpdatePasswordModel.cs
 ┃ ┃ ┃ ┗ UpdateProfileModel.cs
 ┃ ┃ ┣ Consent
 ┃ ┃ ┃ ┣ ConsentController.cs
 ┃ ┃ ┃ ┣ ConsentInputModel.cs
 ┃ ┃ ┃ ┣ ConsentOptions.cs
 ┃ ┃ ┃ ┣ ConsentViewModel.cs
 ┃ ┃ ┃ ┣ ProcessConsentResult.cs
 ┃ ┃ ┃ ┗ ScopeViewModel.cs
 ┃ ┃ ┣ Device
 ┃ ┃ ┃ ┣ DeviceAuthorizationInputModel.cs
 ┃ ┃ ┃ ┣ DeviceAuthorizationViewModel.cs
 ┃ ┃ ┃ ┗ DeviceController.cs
 ┃ ┃ ┣ Diagnostics
 ┃ ┃ ┃ ┣ DiagnosticsController.cs
 ┃ ┃ ┃ ┗ DiagnosticsViewModel.cs
 ┃ ┃ ┣ Grants
 ┃ ┃ ┃ ┣ GrantsController.cs
 ┃ ┃ ┃ ┗ GrantsViewModel.cs
 ┃ ┃ ┣ Home
 ┃ ┃ ┃ ┣ ErrorViewModel.cs
 ┃ ┃ ┃ ┗ HomeController.cs
 ┃ ┃ ┣ Extensions.cs
 ┃ ┃ ┣ SecurityHeadersAttribute.cs
 ┃ ┃ ┗ TestUsers.cs
 ┃ ┣ Views
 ┃ ┃ ┣ Account
 ┃ ┃ ┃ ┣ AccessDenied.cshtml
 ┃ ┃ ┃ ┣ LoggedOut.cshtml
 ┃ ┃ ┃ ┣ Login.cshtml
 ┃ ┃ ┃ ┗ Logout.cshtml
 ┃ ┃ ┣ Consent
 ┃ ┃ ┃ ┗ Index.cshtml
 ┃ ┃ ┣ Device
 ┃ ┃ ┃ ┣ Success.cshtml
 ┃ ┃ ┃ ┣ UserCodeCapture.cshtml
 ┃ ┃ ┃ ┗ UserCodeConfirmation.cshtml
 ┃ ┃ ┣ Diagnostics
 ┃ ┃ ┃ ┗ Index.cshtml
 ┃ ┃ ┣ Grants
 ┃ ┃ ┃ ┗ Index.cshtml
 ┃ ┃ ┣ Home
 ┃ ┃ ┃ ┗ Index.cshtml
 ┃ ┃ ┣ Shared
 ┃ ┃ ┃ ┣ Error.cshtml
 ┃ ┃ ┃ ┣ Redirect.cshtml
 ┃ ┃ ┃ ┣ _Layout.cshtml
 ┃ ┃ ┃ ┣ _Nav.cshtml
 ┃ ┃ ┃ ┣ _ScopeListItem.cshtml
 ┃ ┃ ┃ ┗ _ValidationSummary.cshtml
 ┃ ┃ ┣ _ViewImports.cshtml
 ┃ ┃ ┗ _ViewStart.cshtml
 ┃ ┣ wwwroot
 ┃ ┃ ┣ css
 ┃ ┃ ┃ ┣ site.css
 ┃ ┃ ┃ ┣ site.min.css
 ┃ ┃ ┃ ┗ site.scss
 ┃ ┃ ┣ images
 ┃ ┃ ┃ ┗ login.59fc83e2.jpeg
 ┃ ┃ ┣ js
 ┃ ┃ ┃ ┣ signin-redirect.js
 ┃ ┃ ┃ ┗ signout-redirect.js
 ┃ ┃ ┣ lib
 ┃ ┃ ┃ ┣ bootstrap
 ┃ ┃ ┃ ┃ ┣ dist
 ┃ ┃ ┃ ┃ ┃ ┣ css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ bootstrap-grid.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ bootstrap-grid.css.map
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ bootstrap-grid.min.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ bootstrap-grid.min.css.map
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ bootstrap-reboot.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ bootstrap-reboot.css.map
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ bootstrap-reboot.min.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ bootstrap-reboot.min.css.map
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ bootstrap.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ bootstrap.css.map
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ bootstrap.min.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ bootstrap.min.css.map
 ┃ ┃ ┃ ┃ ┃ ┗ js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ bootstrap.bundle.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ bootstrap.bundle.js.map
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ bootstrap.bundle.min.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ bootstrap.bundle.min.js.map
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ bootstrap.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ bootstrap.js.map
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ bootstrap.min.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ bootstrap.min.js.map
 ┃ ┃ ┃ ┃ ┣ scss
 ┃ ┃ ┃ ┃ ┃ ┣ mixins
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _alert.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _background-variant.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _badge.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _border-radius.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _box-shadow.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _breakpoints.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _buttons.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _caret.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _clearfix.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _deprecate.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _float.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _forms.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _gradients.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _grid-framework.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _grid.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _hover.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _image.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _list-group.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _lists.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _nav-divider.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _pagination.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _reset-text.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _resize.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _screen-reader.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _size.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _table-row.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _text-emphasis.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _text-hide.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _text-truncate.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _transition.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ _visibility.scss
 ┃ ┃ ┃ ┃ ┃ ┣ utilities
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _align.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _background.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _borders.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _clearfix.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _display.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _embed.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _flex.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _float.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _overflow.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _position.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _screenreaders.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _shadows.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _sizing.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _spacing.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _stretched-link.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ _text.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ _visibility.scss
 ┃ ┃ ┃ ┃ ┃ ┣ vendor
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ _rfs.scss
 ┃ ┃ ┃ ┃ ┃ ┣ bootstrap-grid.scss
 ┃ ┃ ┃ ┃ ┃ ┣ bootstrap-reboot.scss
 ┃ ┃ ┃ ┃ ┃ ┣ bootstrap.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _alert.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _badge.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _breadcrumb.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _button-group.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _buttons.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _card.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _carousel.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _close.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _code.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _custom-forms.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _dropdown.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _forms.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _functions.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _grid.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _images.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _input-group.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _jumbotron.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _list-group.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _media.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _mixins.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _modal.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _nav.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _navbar.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _pagination.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _popover.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _print.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _progress.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _reboot.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _root.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _spinners.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _tables.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _toasts.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _tooltip.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _transitions.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _type.scss
 ┃ ┃ ┃ ┃ ┃ ┣ _utilities.scss
 ┃ ┃ ┃ ┃ ┃ ┗ _variables.scss
 ┃ ┃ ┃ ┃ ┗ README.md
 ┃ ┃ ┃ ┗ jquery
 ┃ ┃ ┃ ┃ ┣ dist
 ┃ ┃ ┃ ┃ ┃ ┣ jquery.js
 ┃ ┃ ┃ ┃ ┃ ┣ jquery.min.js
 ┃ ┃ ┃ ┃ ┃ ┣ jquery.min.map
 ┃ ┃ ┃ ┃ ┃ ┣ jquery.slim.js
 ┃ ┃ ┃ ┃ ┃ ┣ jquery.slim.min.js
 ┃ ┃ ┃ ┃ ┃ ┗ jquery.slim.min.map
 ┃ ┃ ┃ ┃ ┣ LICENSE.txt
 ┃ ┃ ┃ ┃ ┗ README.md
 ┃ ┃ ┣ favicon.ico
 ┃ ┃ ┣ icon.jpg
 ┃ ┃ ┗ icon.png
 ┃ ┣ appsettings.json
 ┃ ┣ AspIdUsers.db
 ┃ ┣ Config.cs
 ┃ ┣ Dockerfile
 ┃ ┣ IdentityServer.csproj
 ┃ ┣ IdentityServer.csproj.user
 ┃ ┣ Program.cs
 ┃ ┣ SeedData.cs
 ┃ ┣ Startup.cs
 ┃ ┣ tempkey.jwk
 ┃ ┗ updateUI.ps1
 ┣ React
 ┃ ┣ documentation
 ┃ ┃ ┣ assets
 ┃ ┃ ┃ ┣ css
 ┃ ┃ ┃ ┃ ┣ bootstrap.min.css
 ┃ ┃ ┃ ┃ ┣ demo-documentation.css
 ┃ ┃ ┃ ┃ ┗ material-dashboard.css
 ┃ ┃ ┃ ┣ img
 ┃ ┃ ┃ ┃ ┣ faces
 ┃ ┃ ┃ ┃ ┃ ┗ marc.jpg
 ┃ ┃ ┃ ┃ ┣ apple-icon.png
 ┃ ┃ ┃ ┃ ┣ cover.jpeg
 ┃ ┃ ┃ ┃ ┣ favicon.png
 ┃ ┃ ┃ ┃ ┣ mask.png
 ┃ ┃ ┃ ┃ ┣ new_logo.png
 ┃ ┃ ┃ ┃ ┣ reactlogo.png
 ┃ ┃ ┃ ┃ ┣ sidebar-1.jpg
 ┃ ┃ ┃ ┃ ┣ sidebar-2.jpg
 ┃ ┃ ┃ ┃ ┣ sidebar-3.jpg
 ┃ ┃ ┃ ┃ ┣ sidebar-4.jpg
 ┃ ┃ ┃ ┃ ┗ tim_80x80.png
 ┃ ┃ ┃ ┗ js
 ┃ ┃ ┃ ┃ ┣ bootstrap.min.js
 ┃ ┃ ┃ ┃ ┗ jquery-3.2.1.min.js
 ┃ ┃ ┗ tutorial-components.html
 ┃ ┣ public
 ┃ ┃ ┣ apple-icon.png
 ┃ ┃ ┣ favicon.ico
 ┃ ┃ ┣ index.html
 ┃ ┃ ┗ manifest.json
 ┃ ┣ src
 ┃ ┃ ┣ actions
 ┃ ┃ ┃ ┣ authActions.js
 ┃ ┃ ┃ ┗ types.js
 ┃ ┃ ┣ assets
 ┃ ┃ ┃ ┣ css
 ┃ ┃ ┃ ┃ ┗ material-dashboard-react.css
 ┃ ┃ ┃ ┣ github
 ┃ ┃ ┃ ┃ ┣ angular.png
 ┃ ┃ ┃ ┃ ┣ chrome.png
 ┃ ┃ ┃ ┃ ┣ dashboard.jpg
 ┃ ┃ ┃ ┃ ┣ edge.png
 ┃ ┃ ┃ ┃ ┣ firefox.png
 ┃ ┃ ┃ ┃ ┣ html.png
 ┃ ┃ ┃ ┃ ┣ map.jpg
 ┃ ┃ ┃ ┃ ┣ md-react.gif
 ┃ ┃ ┃ ┃ ┣ notifications.jpg
 ┃ ┃ ┃ ┃ ┣ opera.png
 ┃ ┃ ┃ ┃ ┣ opt_mdr_thumbnail.jpg
 ┃ ┃ ┃ ┃ ┣ opt_md_angular_thumbnail.jpg
 ┃ ┃ ┃ ┃ ┣ opt_md_thumbnail.jpg
 ┃ ┃ ┃ ┃ ┣ opt_md_vue_thumbnail.jpg
 ┃ ┃ ┃ ┃ ┣ react.svg
 ┃ ┃ ┃ ┃ ┣ safari.png
 ┃ ┃ ┃ ┃ ┣ tables.jpg
 ┃ ┃ ┃ ┃ ┣ userprofile.jpg
 ┃ ┃ ┃ ┃ ┗ vuejs.png
 ┃ ┃ ┃ ┣ img
 ┃ ┃ ┃ ┃ ┣ faces
 ┃ ┃ ┃ ┃ ┃ ┗ marc.jpg
 ┃ ┃ ┃ ┃ ┣ apple-icon.png
 ┃ ┃ ┃ ┃ ┣ cover.jpeg
 ┃ ┃ ┃ ┃ ┣ favicon.png
 ┃ ┃ ┃ ┃ ┣ login.jpeg
 ┃ ┃ ┃ ┃ ┣ mask.png
 ┃ ┃ ┃ ┃ ┣ new_logo.png
 ┃ ┃ ┃ ┃ ┣ reactlogo.png
 ┃ ┃ ┃ ┃ ┣ register.jpeg
 ┃ ┃ ┃ ┃ ┣ sidebar-1.jpg
 ┃ ┃ ┃ ┃ ┣ sidebar-2.jpg
 ┃ ┃ ┃ ┃ ┣ sidebar-3.jpg
 ┃ ┃ ┃ ┃ ┣ sidebar-4.jpg
 ┃ ┃ ┃ ┃ ┗ tim_80x80.png
 ┃ ┃ ┃ ┗ jss
 ┃ ┃ ┃ ┃ ┣ material-dashboard-react
 ┃ ┃ ┃ ┃ ┃ ┣ components
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ authNavbarStyle.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ buttonStyle.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ cardAvatarStyle.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ cardBodyStyle.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ cardFooterStyle.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ cardHeaderStyle.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ cardIconStyle.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ cardStyle.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ customInputStyle.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ customTabsStyle.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ footerStyle.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ headerLinksStyle.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ headerStyle.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ infoStyle.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ rtlHeaderLinksStyle.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ sidebarStyle.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ snackbarContentStyle.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ tableStyle.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ tasksStyle.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ typographyStyle.js
 ┃ ┃ ┃ ┃ ┃ ┣ layouts
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ adminStyle.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ authStyle.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ rtlStyle.js
 ┃ ┃ ┃ ┃ ┃ ┣ views
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ dashboardStyle.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ iconsStyle.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ loginPageStyle.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ registerPageStyle.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ rtlStyle.js
 ┃ ┃ ┃ ┃ ┃ ┣ cardImagesStyles.js
 ┃ ┃ ┃ ┃ ┃ ┣ checkboxAdnRadioStyle.js
 ┃ ┃ ┃ ┃ ┃ ┣ customCheckboxRadioSwitch.js
 ┃ ┃ ┃ ┃ ┃ ┣ dropdownStyle.js
 ┃ ┃ ┃ ┃ ┃ ┗ tooltipStyle.js
 ┃ ┃ ┃ ┃ ┗ material-dashboard-react.js
 ┃ ┃ ┣ components
 ┃ ┃ ┃ ┣ Card
 ┃ ┃ ┃ ┃ ┣ Card.js
 ┃ ┃ ┃ ┃ ┣ CardAvatar.js
 ┃ ┃ ┃ ┃ ┣ CardBody.js
 ┃ ┃ ┃ ┃ ┣ CardFooter.js
 ┃ ┃ ┃ ┃ ┣ CardHeader.js
 ┃ ┃ ┃ ┃ ┗ CardIcon.js
 ┃ ┃ ┃ ┣ CustomButtons
 ┃ ┃ ┃ ┃ ┗ Button.js
 ┃ ┃ ┃ ┣ CustomInput
 ┃ ┃ ┃ ┃ ┗ CustomInput.js
 ┃ ┃ ┃ ┣ CustomTabs
 ┃ ┃ ┃ ┃ ┗ CustomTabs.js
 ┃ ┃ ┃ ┣ FixedPlugin
 ┃ ┃ ┃ ┃ ┗ FixedPlugin.js
 ┃ ┃ ┃ ┣ Footer
 ┃ ┃ ┃ ┃ ┗ Footer.js
 ┃ ┃ ┃ ┣ Grid
 ┃ ┃ ┃ ┃ ┣ GridContainer.js
 ┃ ┃ ┃ ┃ ┗ GridItem.js
 ┃ ┃ ┃ ┣ InfoArea
 ┃ ┃ ┃ ┃ ┗ InfoArea.js
 ┃ ┃ ┃ ┣ Navbars
 ┃ ┃ ┃ ┃ ┣ AdminNavbarLinks.js
 ┃ ┃ ┃ ┃ ┣ AuthNavBar.js
 ┃ ┃ ┃ ┃ ┣ Navbar.js
 ┃ ┃ ┃ ┃ ┗ RTLNavbarLinks.js
 ┃ ┃ ┃ ┣ Sidebar
 ┃ ┃ ┃ ┃ ┗ Sidebar.js
 ┃ ┃ ┃ ┣ Snackbar
 ┃ ┃ ┃ ┃ ┣ Snackbar.js
 ┃ ┃ ┃ ┃ ┗ SnackbarContent.js
 ┃ ┃ ┃ ┣ Table
 ┃ ┃ ┃ ┃ ┗ Table.js
 ┃ ┃ ┃ ┣ Tasks
 ┃ ┃ ┃ ┃ ┗ Tasks.js
 ┃ ┃ ┃ ┗ Typography
 ┃ ┃ ┃ ┃ ┣ Danger.js
 ┃ ┃ ┃ ┃ ┣ Info.js
 ┃ ┃ ┃ ┃ ┣ Muted.js
 ┃ ┃ ┃ ┃ ┣ Primary.js
 ┃ ┃ ┃ ┃ ┣ Quote.js
 ┃ ┃ ┃ ┃ ┣ Success.js
 ┃ ┃ ┃ ┃ ┗ Warning.js
 ┃ ┃ ┣ data
 ┃ ┃ ┃ ┗ store
 ┃ ┃ ┃ ┃ ┣ slices
 ┃ ┃ ┃ ┃ ┗ transforms
 ┃ ┃ ┣ layouts
 ┃ ┃ ┃ ┣ Admin.js
 ┃ ┃ ┃ ┣ Auth.js
 ┃ ┃ ┃ ┗ RTL.js
 ┃ ┃ ┣ reducers
 ┃ ┃ ┃ ┣ authReducer.js
 ┃ ┃ ┃ ┗ index.js
 ┃ ┃ ┣ services
 ┃ ┃ ┃ ┗ oauth.js
 ┃ ┃ ┣ utils
 ┃ ┃ ┃ ┣ authProvider.js
 ┃ ┃ ┃ ┣ axiosHeaders.js
 ┃ ┃ ┃ ┗ protectedRoute.js
 ┃ ┃ ┣ variables
 ┃ ┃ ┃ ┣ charts.js
 ┃ ┃ ┃ ┗ general.js
 ┃ ┃ ┣ views
 ┃ ┃ ┃ ┣ Dashboard
 ┃ ┃ ┃ ┃ ┗ Dashboard.js
 ┃ ┃ ┃ ┣ Icons
 ┃ ┃ ┃ ┃ ┗ Icons.js
 ┃ ┃ ┃ ┣ Maps
 ┃ ┃ ┃ ┃ ┗ Maps.js
 ┃ ┃ ┃ ┣ Notifications
 ┃ ┃ ┃ ┃ ┗ Notifications.js
 ┃ ┃ ┃ ┣ RTLPage
 ┃ ┃ ┃ ┃ ┗ RTLPage.js
 ┃ ┃ ┃ ┣ TableList
 ┃ ┃ ┃ ┃ ┗ TableList.js
 ┃ ┃ ┃ ┣ Typography
 ┃ ┃ ┃ ┃ ┗ Typography.js
 ┃ ┃ ┃ ┣ UpgradeToPro
 ┃ ┃ ┃ ┃ ┗ UpgradeToPro.js
 ┃ ┃ ┃ ┗ UserProfile
 ┃ ┃ ┃ ┃ ┣ LoginPage.js
 ┃ ┃ ┃ ┃ ┣ RegisterPage.js
 ┃ ┃ ┃ ┃ ┗ UserProfile.js
 ┃ ┃ ┣ App.js
 ┃ ┃ ┣ index.js
 ┃ ┃ ┣ logo.svg
 ┃ ┃ ┣ routes.js
 ┃ ┃ ┗ store.js
 ┃ ┣ .babelrc
 ┃ ┣ .env
 ┃ ┣ .eslintignore
 ┃ ┣ .eslintrc.js
 ┃ ┣ bower.json
 ┃ ┣ CHANGELOG.md
 ┃ ┣ Dockerfile
 ┃ ┣ gulpfile.js
 ┃ ┣ ISSUE_TEMPLATE.md
 ┃ ┣ jsconfig.json
 ┃ ┣ LICENSE.md
 ┃ ┣ package-lock.json
 ┃ ┣ package.json
 ┃ ┣ React.njsproj
 ┃ ┗ React.njsproj.user
 ┣ .dockerignore
 ┣ .gitignore
 ┣ CreativeTim.sln
 ┣ docker-compose.yml
 ┗ README.md
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="React/src/assets/github/chrome.png" width="64" height="64"> <img src="React/src/assets/github/firefox.png" width="64" height="64"> <img src="React/src/assets/github/edge.png" width="64" height="64"> <img src="React/src/assets/github/safari.png" width="64" height="64"> <img src="React/src/assets/github/opera.png" width="64" height="64">


## Resources
- Demo: https://www.creative-tim.com/live/material-dashboard-react-asp-net
- Download Page: https://www.creative-tim.com/product/material-dashboard-react-aspnet
- Documentation: https://demos.creative-tim.com/material-dashboard-react/#/documentation/asp-net
- License Agreement: https://www.creative-tim.com/license
- Support: https://www.creative-tim.com/contact-us
- Issues: [Github Issues Page](https://github.com/creativetimofficial/material-dashboard-react-aspnet/issues)
- [Material Kit React - For Front End Development](https://www.creative-tim.com/product/material-kit-react?ref=github-mdr-free)

## Reporting Issues
We use GitHub Issues as the official bug tracker for the Material Dashboard React. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Material Dashboard React. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Technical Support or Questions

If you have questions or need help integrating the product please [contact us](https://www.creative-tim.com/contact-us) instead of opening an issue.

## Licensing

- Copyright 2020 Creative Tim (https://www.creative-tim.com)
- Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react-aspnet/blob/master/LICENSE.md)

## Useful Links

More products from Creative Tim: <https://www.creative-tim.com/products>

Tutorials: <https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w>

Freebies: <https://www.creative-tim.com/products>

Affiliate Program (earn money): <https://www.creative-tim.com/affiliates/new>

Social Media:

Twitter: <https://twitter.com/CreativeTim>

Facebook: <https://www.facebook.com/CreativeTim>

Dribbble: <https://dribbble.com/creativetim>

Google+: <https://plus.google.com/+CreativetimPage>

Instagram: <https://instagram.com/creativetimofficial>
