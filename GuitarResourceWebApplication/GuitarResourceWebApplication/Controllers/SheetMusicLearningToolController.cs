using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GuitarResourceWebApplication.Controllers
{
    public class SheetMusicLearningToolController : Controller
    {
        // GET: SheetMusicLearningTool
        [OutputCache(Duration = 7200, VaryByParam = "none")]
        public ActionResult Index()
        {
            return View();
        }
    }
}