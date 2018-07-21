using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Insurance_v1.Models;
using Insurance_v1.ViewModels;

namespace Insurance_v1.Controllers
{
    public class AdminController : Controller
    {
        // GET: Admin
        public ActionResult Admin()
        {
            using (dOInsuranceEntities db = new dOInsuranceEntities())
            {
                var memberQuotes = db.InsuranceDBs;
                var insuranceVMs = new List<InsuranceVM>();
                foreach (var preQuote in memberQuotes)
                {
                    var insureVM = new InsuranceVM();
                    insureVM.Id = preQuote.Id;
                    insureVM.FirstName = preQuote.FirstName;
                    insureVM.LastName = preQuote.LastName;
                    insureVM.EmailAddress = preQuote.EmailAddress;
                    insureVM.UserQuote = Convert.ToDecimal(preQuote.UserQuote);
                    insuranceVMs.Add(insureVM);
                }

                return View(insuranceVMs);
            }
        }
    }
}