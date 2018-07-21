using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Insurance_v1.Models;
using Insurance_v1.ViewModels;

namespace Insurance_v1.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult MemberQuote(string firstName, string lastName, string emailAddress, string dateBirth, string carYear, string carMake, string CarModel, bool dUI, int speedingTickets, bool fullCoverage)
        {
            //if (string.IsNullOrEmpty(firstName) || string.IsNullOrEmpty(lastName) || string.IsNullOrEmpty(emailAddress) || string.IsNullOrEmpty(dateBirth) ||
            //    string.IsNullOrEmpty(carYear) || string.IsNullOrEmpty(carMake) || string.IsNullOrEmpty(CarModel))
            //{
            //    return View("~/Views/Shared/Error.cshtml");
            //}
            //else
            //{
            using (dOInsuranceEntities db = new dOInsuranceEntities())
            { 

                var preQuote = new InsuranceDB();
                preQuote.FirstName = firstName;
                preQuote.LastName = lastName;
                preQuote.EmailAddress = emailAddress;
                preQuote.DateofBirth = dateBirth; //
                preQuote.CarYear = carYear;
                preQuote.CarMake = carMake;
                preQuote.CarModel = CarModel;
                preQuote.DUI = dUI;
                preQuote.SpeedingTickets = speedingTickets;
                preQuote.FullCoverage = fullCoverage;

                //db.InsuranceDBs.Add(preQuote);
                //db.SaveChanges();

                decimal userQuote = 50.00m;
                DateTime birthDay = Convert.ToDateTime(preQuote.DateofBirth);
                int birthYear = birthDay.Year;
                int currentYear = DateTime.Now.Year;
                int userAge = currentYear - birthYear;
                int autoYear = Convert.ToInt32(preQuote.CarYear);
                string carMaker = preQuote.CarMake;
                string carMod = preQuote.CarModel;
                int speedingTix = preQuote.SpeedingTickets;
                int speedingCost = speedingTix * 10;
                bool DUI = preQuote.DUI;
                bool fullCov = preQuote.FullCoverage;

                //evaluating user age
                if (userAge < 18)
                {
                    userQuote = userQuote + 100;
                }
                else if (userAge < 25)
                {
                    userQuote = userQuote + 25;
                }
                else if (userAge > 100)
                {
                    userQuote = userQuote + 25;
                }
                else
                {
                }

                //evaluating user car's year
                if (autoYear < 2000)
                {
                    userQuote = userQuote + 25;
                }
                else if (autoYear > 2015)
                {
                    userQuote = userQuote + 25;
                }
                else
                {
                }

                //evaluating car's make
                if (carMaker == "Porsche")
                {
                    userQuote = userQuote + 25;
                    if (carMod == "911 Carrera" || carMod == "Carrera" || carMod == "Carrera 4s") 
                    {
                        userQuote = userQuote + 25;
                    }
                    else
                    {
                    }
                }
                else
                {
                }

                ////evaluating car's make/model
                //if (carMod == "911 Carrera")
                //{
                //    userQuote = userQuote + 25;
                //}
                //else
                //{
                //}

                //evaluating tickets
                if (speedingTix > 0)
                {
                    userQuote = userQuote + speedingCost;
                }
                else
                {
                }

                //evaluating DUI
                if (DUI == true)
                {
                    userQuote = userQuote * 1.25m;
                }
                else
                {
                }

                //evaluating full coverage
                if (fullCov == true)
                {
                    userQuote = userQuote * 1.50m;
                }
                else
                {
                }

                preQuote.UserQuote = userQuote;
                db.InsuranceDBs.Add(preQuote);
                db.SaveChanges();


                var quoteVMs = new QuoteVM();
                quoteVMs.UserQuote = Math.Round(Convert.ToDecimal(preQuote.UserQuote), 2);

                return View("Quote", quoteVMs); //added passing the model
            }
            //}
        }
    }
}
