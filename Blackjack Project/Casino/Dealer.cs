using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace Casino
{
    public class Dealer
    {
        public string Name { get; set; }
        public Deck Deck { get; set; }
        public int Balance { get; set; }

        public void Deal(List<Card> Hand)
        {
            Hand.Add(Deck.Cards.First()); //First function just prints the first item in the list.
            string card = string.Format(Deck.Cards.First().ToString() + "\n");
            Console.WriteLine(card);
            using (StreamWriter file = new StreamWriter(@"C:\Users\jadan\Desktop\COMPUTER\C# Projects\LOGGING TESTS\Card Logs.txt", true))
            {
                file.WriteLine(DateTime.Now); // Logs the time that a card is dealt
                file.WriteLine(card);
            }

            Deck.Cards.RemoveAt(0); //Removed at an index -- index location is 0 in this.
        }
    }
}
