#include <iostream>
#include <string>
using namespace std;

int main() {
   int* wholeNumber;
   string* firstName;
   string* pluralAnimal;
   string* genericPlace;

   wholeNumber = new int;
   firstName = new string;
   pluralAnimal = new string;
   genericPlace = new string;
   
   // Store the input values in the allocated memory
   cin >> *firstName >> *wholeNumber >> *pluralAnimal >> *genericPlace;
   
   // Output the correct values
   cout << *firstName << " saw " << *wholeNumber << " different colors of " << *pluralAnimal;
   cout << " at the " << *genericPlace << "." << endl;
   
   // Deallocate memory
   delete firstName;
   delete wholeNumber;
   delete pluralAnimal;
   delete genericPlace;
   
   return 0;
}
