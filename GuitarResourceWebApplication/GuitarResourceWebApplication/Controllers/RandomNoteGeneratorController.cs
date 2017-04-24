using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GuitarResourceWebApplication.Controllers
{
    public class RandomNoteGeneratorController : Controller
    {
        // GET: RandomNoteGenerator
        public ActionResult Index()
        {
            return View();
        }
    }
}