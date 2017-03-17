using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(GuitarResourceWebApplication.Startup))]
namespace GuitarResourceWebApplication
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
